<script>
// DS_NO_M01
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
// import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
// import PageMainText from '@/components/ui/text/PageMainText.vue';
// import PageSubText from '@/components/ui/text/PageSubText.vue';
// import NoticeText from '@/components/ui/text/NoticeText.vue';

export default {
  components: {
    PageContents,
    // PageTextGroup,
    // PageMainText,
    // PageSubText,
    // NoticeText,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '채권추심 관련 지원제도 안내');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => ['close']);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });
  },
};
</script>

<template>
  <PageContents>
    <section>
      <section class="row-margin-contents">
        <h4 class="text-body-2 row-margin-item-medium">채무자대리</h4>
        <p class="text-body-3 color-gray-tertiary font-weight-light">
          귀하는 「채권의 공정한 추심에 관한 법률」제8조의2에 따라 등록·미등록
          대부업자의 채권추심에 응하기 위해 변호사법에 따른 변호사·법무법인·
          법무법인(유한) 또는 법무조합을 대리인으로 선임하실 수 있으며,<br /><br />
          만약, 등록·미등록 대부업자로부터 법정 최고금리를 초과한 대출을
          받았거나 불법채권추심피해를 입은 경우 금융감독원 홈페이지,
          불법사금융신 고센터(☏1332(3번)) 또는 대한법률구조공단(☏132)을 통해
          무료로 채무자대리 및 소송대리 지원을 받으실 수 있습니다.
        </p>
      </section>

      <section class="row-margin-contents-group">
        <h4 class="text-body-2 row-margin-item-medium">채무조정</h4>
        <p class="text-body-3 color-gray-tertiary font-weight-light">
          귀하는 금융회사 채무를 연체중이므로 신용회복위원회(☏:1600-5500)에서
          제공하는 채무조정 지원제도에 대하여 상담을 받으실 수 있으며, 귀하께서
          계좌별 대출원금 3천만원 미만의 개인금융채권을 연체한 경우
          「개인금융채권의 관리 및 개인금융채무자의 보호에 관한 법률」에 따라
          채권금융회사 등에 채무조정을 요청할 수 있습니다.
        </p>

        <section class="row-margin-contents">
          <h5 class="text-body-3 font-weight-medium">
            채무자가 채무조정을 요청할 수 없는 경우
          </h5>

          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular'],
              'text-body-3',
              'color-gray-tertiary',
              'font-weight-light',
              'row-margin-item-medium',
            ]"
          >
            <li>
              ① 「개인채무자보호법」 제40조에 따라 채무조정의 합의가 해제된 후
              3개월이 지나지 아니한 경우
            </li>
            <li>
              ② 개인금융채권의 존재 여부나 범위에 대하여 소송, 조정, 중재 등이
              진행 중인 경우
            </li>
            <li>
              ③ 「서민의 금융생활 지원에 관한 법률」제72조에 따른 채무조정
              절차가 진행 중인 경우
            </li>
            <li>
              ④ 「서민의 금융생활 지원에 관한 법률」제74조 제1항에 따른
              채무조정의 합의가 성립된 후 합의의 효력이 상실되지 아니한 경우
            </li>
            <li>
              ⑤ 「채무자 회생 및 파산에 관한 법률」에 따른
              회생·간이회생·개인회생 또는 파산·면책 절차가 진행 중인 경우
            </li>
            <li>
              ⑥ 「채무자 회생 및 파산에 관한 법률」에 따라 회생계획을 인가받은
              후 회생절차폐지·간이회생절차폐지 또는 개인회생절차폐지의 결정이
              확정되지 아니한 경우
            </li>
          </ul>
        </section>
      </section>

      <section class="row-margin-contents">
        <h4 class="text-body-2 row-margin-item-medium">
          분쟁조정 및 채무부존재확인 소송
        </h4>
        <p class="text-body-3 color-gray-tertiary font-weight-light">
          귀하는 금융회사 및 시·도지사에 등록한 대부업자와 분쟁이 발생한 경우
          금융감독원(www.fss.or.kr) 및 대부업자가 등록한 시·도지사에 분쟁조정을
          신청할 수 있습니다. 또한 채권자와 채권의 존재 여부에 다툼이 있는 경우
          채무부존재확인 소송을 진행할 수 있습니다.
        </p>
      </section>

      <section class="row-margin-contents">
        <h4 class="text-body-2 row-margin-item-medium">
          불법추심 등 신고·상담
        </h4>
        <p class="text-body-3 color-gray-tertiary font-weight-light">
          귀하께서 불법추심, 고금리 등 불법사금융으로 인한 피해가 발생하였다면
          금융감독원 불법사금융신고센터(☏1332(3번))을 통해 신고·상담을 받을 수
          있습니다.
        </p>
      </section>
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/CustomerFinancialConsumerProtectionInterestRateCutRequestInfo.scss';
</style>
