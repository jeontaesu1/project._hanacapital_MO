<script>
// Comp_M00_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';

export default {
  components: {
    PageContents,
    BasicBox,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
    NoticeText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BottomSticky,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => ' ');
      store.ui.header.setUseLeftLogo(() => true);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setUseLeftLogo();
      store.ui.header.setRightButtons();
    });
  },
};
</script>

<template>
  <PageContents>
    <div class="row-margin-contents-group">
      고객님,<br />
      하나캐피탈을 오랜 기간 이용해주셔서 감사합니다.

      <p class="row-margin-contents">
        당사는
        <span class="color-green font-weight-medium">「특정금융정보법」</span>에
        따른 의무사항 준수를 위해 고객님의 변동정보를 거래 후 주기적으로
        재확인하고 있습니다.
      </p>

      <p class="row-margin-contents">
        다소 불편하시더라도 많은 협조 부탁드립니다.<br />
        <span class="text-body-3 color-gray-tertiary row-margin-small">
          (약 5분 소요 예상)
        </span>
      </p>

      <p class="row-margin-contents">
        본 제도는 금융거래의 투명성☞신뢰성 강화를 위해 금융회사가 고객님의 성명,
        주민번호, 주소, 연락처, 실제 소유자 여부, 거래 목적, 상환자금의 원천
        등을 확인하는 제도입니다.<br />
        <span class="text-body-3 color-gray-tertiary row-margin-small">
          (제출된 정보는 고객확인 재이행 목적으로만 활용)
        </span>
      </p>

      <p class="row-margin-contents">
        미이행 시 관련법령에 따라 거래 거절(종료) 및 일부 서비스 제한 등
        불편사항이 발생할 수 있으며, 동 안내는 재확인 이후에도 일정기간 보여질
        수 있는 점 많은 양해 부탁드립니다.
      </p>
    </div>

    <BasicBox theme="septenary">
      <div :class="$style['agree-list']">
        <div :class="$style['agree-list__head']">
          <CheckBox
            id="layerMyLoanElectronicFinancialTransactionAgree001"
            :classNames="{
              wrap: $style['agree-list__checkbox'],
            }"
            theme="tertiary"
          >
            <CheckBoxObject />
            <CheckBoxLabelText
              >고객확인 재이행 및 관련 정보 제공
            </CheckBoxLabelText>
          </CheckBox>
        </div>
      </div>
    </BasicBox>

    <NoticeText :classNames="{ wrap: 'row-margin-item' }"
      >위 내용에 따라 절차를 진행함을 동의합니다.</NoticeText
    >

    <template v-slot:foot>
      <BottomSticky>
        <div class="bottom-wrap">
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton>다음</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/untactCustomer/Comp_M00_p001.scss';
</style>
