<script>
import { onMounted, onUnmounted, reactive } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

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
    BasicHr,

    IconArrow,
  },
  setup() {
    const state = reactive({
      nameError: false,
      searchError: false,
      idNumberError: false,
      phoneError: false,
      codeError: false,
    });

    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
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
    };
  },
};
</script>

<template>
  <PageContents>
    <FormList>
      <FormListItem titleText="지역" target="#customerBranchListRegionButton">
        <FormInvalid>
          <InputBlock>
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
                :classNames="{
                  wrap: '',
                }"
                defaultValue="1"
              />
            </InputBlockCell>
          </InputBlock>
        </FormInvalid>
      </FormListItem>
    </FormList>

    <BasicHr
      :class="$style['margin-top-medium']"
      className="row-margin-contents"
    />

    <div :class="$style['board']">
      <div :class="$style['board__list']">
        <div :class="$style['board__item']">
          <div :class="$style['board__title']">
            본사
            <span :class="$style['board__sub']">1800-1110</span>
          </div>
          <div :class="$style['board__text']">
            서울 강남구 테헤란로 127 하나금융그룹 (역삼동,강남사옥)
          </div>
        </div>
        <div :class="$style['board__item']">
          <div :class="$style['board__title']">
            강남소비자금융센터
            <span :class="$style['board__sub']">1800-1110</span>
          </div>
          <div :class="$style['board__text']">
            서울 강남구 선릉로 704 5층 (청담동, 청담벤처프라자)
          </div>
        </div>
        <div :class="$style['board__item']">
          <div :class="$style['board__title']">
            본사
            <span :class="$style['board__sub']">1800-1110</span>
          </div>
          <div :class="$style['board__text']">
            서울 강남구 테헤란로 127 하나금융그룹 (역삼동,강남사옥)
          </div>
        </div>
        <div :class="$style['board__item']">
          <div :class="$style['board__title']">
            본사
            <span :class="$style['board__sub']">1800-1110</span>
          </div>
          <div :class="$style['board__text']">
            서울 강남구 테헤란로 127 하나금융그룹 (역삼동,강남사옥)
          </div>
        </div>
        <div :class="$style['board__item']">
          <div :class="$style['board__title']">
            본사
            <span :class="$style['board__sub']">1800-1110</span>
          </div>
          <div :class="$style['board__text']">
            서울 강남구 테헤란로 127 하나금융그룹 (역삼동,강남사옥)
          </div>
        </div>
        <div :class="$style['board__item']">
          <div :class="$style['board__title']">
            본사
            <span :class="$style['board__sub']">1800-1110</span>
          </div>
          <div :class="$style['board__text']">
            서울 강남구 테헤란로 127 하나금융그룹 (역삼동,강남사옥)
          </div>
        </div>
        <div :class="$style['board__item']">
          <div :class="$style['board__title']">
            본사
            <span :class="$style['board__sub']">1800-1110</span>
          </div>
          <div :class="$style['board__text']">
            서울 강남구 테헤란로 127 하나금융그룹 (역삼동,강남사옥)
          </div>
        </div>
        <div :class="$style['board__item']">
          <div :class="$style['board__title']">
            본사
            <span :class="$style['board__sub']">1800-1110</span>
          </div>
          <div :class="$style['board__text']">
            서울 강남구 테헤란로 127 하나금융그룹 (역삼동,강남사옥)
          </div>
        </div>
        <div :class="$style['board__item']">
          <div :class="$style['board__title']">
            본사
            <span :class="$style['board__sub']">1800-1110</span>
          </div>
          <div :class="$style['board__text']">
            서울 강남구 테헤란로 127 하나금융그룹 (역삼동,강남사옥)
          </div>
        </div>
        <div :class="$style['board__item']">
          <div :class="$style['board__title']">
            본사
            <span :class="$style['board__sub']">1800-1110</span>
          </div>
          <div :class="$style['board__text']">
            서울 강남구 테헤란로 127 하나금융그룹 (역삼동,강남사옥)
          </div>
        </div>
      </div>

      <div :class="$style['board__bottom']">
        <a href="/" :class="$style['more-button']" class="none-deco-link">
          더보기
          <span :class="$style['button-icon']">
            <IconArrow />
          </span>
        </a>
      </div>
    </div>
  </PageContents>
</template>
<style lang="scss" module>
@import '@/assets/scss/views/customer/CustomerBranchList.scss';
</style>
