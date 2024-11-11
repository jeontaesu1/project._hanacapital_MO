<script>
// Customer_DS_M02_02_01
import { onMounted, onUnmounted, reactive } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';
import IllustInfo from '@/components/ui/common/IllustInfo.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import IllustInfoTitle from '@/components/ui/common/IllustInfoTitle.vue';

export default {
  components: {
    PageContents,
    PageSubText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BottomSticky,
    PageTextGroup,
    PageMainText,
    IllustInfo,
    IllustObject,
    IllustInfoTitle,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      typeError: false,
      categoryError: false,
      productError001: false,
      productError002: false,
      productError003: false,
      corporateError: false,
      nameError: false,
      phoneError: false,
      timeError: false,
      carTypeError: false,
      carNameError: false,
      carRegionError: false,
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '채무조정요청권 신청');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => ['menu']);
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
    <PageTextGroup>
      <PageMainText>
        채무자보호법 제35조 등에 따라<br />
        채무조정 요청 대상 요건에<br />
        부합하지 않습니다
      </PageMainText>
      <PageSubText>
        신용회복위원회(16OO-5500),<br />
        법률구조공단(132)을 통해<br />
        상담 및 신청 가능합니다
      </PageSubText>
    </PageTextGroup>

    <IllustInfo>
      <IllustObject type="error" />
      <IllustInfoTitle> </IllustInfoTitle>
    </IllustInfo>

    <template v-slot:foot>
      <BottomSticky>
        <div class="bottom-wrap">
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton>확인</BasicButton>
              <!-- <BasicButton :disabled="true">채무조정 요청</BasicButton> -->
            </ButtonListItem>
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/CustomerReservationCounseling.scss';
</style>
