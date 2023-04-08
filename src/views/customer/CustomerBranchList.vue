<script>
import { onMounted, onUnmounted, reactive, ref } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import LayerCustomerBranchDetail from '@/views/customer/LayerCustomerBranchDetail.vue';

import IconArrow from '@/assets/images/icon/dropdown.svg?component';

export default {
  components: {
    PageContents,
    FormList,
    FormListItem,
    FormInvalid,
    InputBlock,
    InputBlockCell,
    BasicSelect,
    FormInvalidMessage,
    BasicHr,
    TextButton,
    LayerCustomerBranchDetail,
    IconArrow,
  },
  setup() {
    const state = reactive({
      branchError: false,
    });

    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const layer = ref(null);

    const layerOpen = (e = {}) => {
      layer.value.layer.open(e.target);
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '지점안내');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });

    return {
      state,
      layer,
      layerOpen,
    };
  },
};
</script>

<template>
  <PageContents>
    <FormList>
      <FormListItem
        titleText="지역"
        target="#customerBranchListRegionButton"
        :selectOnly="true"
      >
        <FormInvalid :error="state.branchError">
          <InputBlock :error="state.branchError">
            <InputBlockCell :flexible="true">
              <BasicSelect
                :option="[
                  {
                    value: '1',
                    text: '전체',
                  },
                  {
                    value: '2',
                    text: '서울',
                  },
                  {
                    value: '3',
                    text: '경기',
                  },
                  {
                    value: '4',
                    text: '강원',
                  },
                  {
                    value: '5',
                    text: '충청',
                  },
                  {
                    value: '6',
                    text: '경상',
                  },
                  {
                    value: '7',
                    text: '전라',
                  },
                  {
                    value: '8',
                    text: '제주',
                  },
                ]"
                buttonTitle="지역 선택하기"
                layerTitle="지역을 선택해 주세요"
                id="customerBranchListRegion"
                buttonId="customerBranchListRegionButton"
                defaultValue="1"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
    </FormList>

    <BasicHr className="row-margin-container-medium" />

    <div :class="$style['board']">
      <ul :class="$style['board__list']">
        <li v-for="i in 10" :key="i" :class="$style['board__item']">
          <button
            type="button"
            :class="$style['board__link']"
            @click="layerOpen"
          >
            <span :class="$style['board__title']">
              <span :class="$style['board__title-text']">본사</span>
              <span :class="$style['board__sub']">1800-1110</span>
            </span>
            <span :class="$style['board__text']">
              서울 강남구 테헤란로 127 하나금융그룹 (역삼동,강남사옥)
            </span>
          </button>
        </li>
      </ul>
    </div>

    <div class="inline-wrap align-center row-margin-contents">
      <TextButton :classNames="{ wrap: 'text-body-4 color-gray' }">
        더보기
        <template v-slot:rightIcon>
          <IconArrow />
        </template>
      </TextButton>
    </div>

    <LayerCustomerBranchDetail ref="layer" />
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/CustomerBranchList.scss';
</style>
