<script>
// Customer_M09_p010
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    PageSubText,
    NoticeText,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '중도상환수수료 면제');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
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
    <PageTextGroup>
      <PageMainText>중도상환수수료 면제란?</PageMainText>
      <PageSubText>
        대출금을 처음 약속한 기간 동안 사용하지 않고 중도에 상환(부분상환 또는
        중도완납)할 경우에 금융회사에 납부해야 하는 수수료를 말합니다.
        중도상환수수료는 대출조건 및 대출기간과 상품에 따라 상이하게 운영됩니다.
      </PageSubText>
    </PageTextGroup>

    <section>
      <h4 class="text-body-2 row-margin-item-medium">
        중도상환수수료 면제기준
      </h4>

      <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-4']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            피상속인(채무자) 사망 후 사망일로부터 3개월 이내에
            피상속인(채무자)의 대출금을 상속인 명의로 변경하지 않고 중도상환하는
            경우
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-4']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            이외 별도의 운영기준이 있는 경우
          </div>
        </li>
      </ul>

      <NoticeText :classNames="{ wrap: 'row-margin-item' }">
        계약자 사망에 따른 중도상환수수료 면제의 경우 신청자(상속인)의 신분증,
        가족관계증명서, 사망자의 사망진단서가 필요하며, 기타 자세한 사항은 당사
        고객센터(대표번호: 1800-1100) 또는 대출지점으로 문의 바랍니다.
      </NoticeText>
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/CustomerFinancialConsumerProtectionExemptionEarlyRedemptionFee.scss';
</style>
