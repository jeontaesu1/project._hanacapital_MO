<script>
// Company_M08_p004
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

import IconPersonalFinance from '@/assets/images/icon/personal-finance.svg?component';
import IconCar from '@/assets/images/icon/car.svg?component';
import IconCorporateFinance from '@/assets/images/icon/corporate-finance.svg?component';
import IconGlobalFinance from '@/assets/images/icon/global-finance.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    BasicHr,
    IconPersonalFinance,
    IconCar,
    IconCorporateFinance,
    IconGlobalFinance,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '사업분야');
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
      <PageMainText>
        하나캐피탈은<br />
        리스금융, 할부금융 및 대출업무를 취급하는 여신전문금융회사로<br />
        손님, 주주, 협력업체, 임직원의<br />
        공동 성장을 극대화하는<br />
        Value Network를 지향합니다
      </PageMainText>
    </PageTextGroup>

    <div>
      <BasicHr
        theme="quaternary"
        type="contents"
        className="row-margin-container"
      />

      <section :class="$style['company-info']">
        <div :class="$style['company-info__icon']">
          <IconPersonalFinance />
        </div>
        <h3 :class="$style['company-info__title']">
          하나의 행복!<br />
          개인금융
        </h3>
        <p :class="$style['company-info__text']">
          손님의 Value Network Partner로서<br />
          하나캐피탈이 있습니다.<br />
          전문직 종사자, 직장인, 공무원, 교사 등 개인손님을<br />
          대상으로 한 신용대출, 스탁론, 내구재할부 등<br />
          개인대출을 신속하게 제공해드립니다.
        </p>
      </section>

      <BasicHr
        theme="quaternary"
        type="contents"
        className="row-margin-container"
      />

      <section :class="$style['company-info']">
        <div :class="$style['company-info__icon']">
          <IconCar />
        </div>
        <h3 :class="$style['company-info__title']">
          하나의 젊음!<br />
          오토금융
        </h3>
        <p :class="$style['company-info__text']">
          수입차 구입이 부담스러우신가요?<br />
          지금 타시는 차를 부담없이 바꾸고 싶으신가요?<br />
          하나캐피탈이 제공하는 자동차금융을 이용해 보세요.<br />
          저희 하나캐피탈은 수입/국산차 오토리스,<br />
          오토 할부 및 오토론, 렌터카를<br />
          손님이 원하시는 차종으로, 원하시는 금액으로<br />
          “새로운 가치”를 제공해드립니다.
        </p>
      </section>

      <BasicHr
        theme="quaternary"
        type="contents"
        className="row-margin-container"
      />

      <section :class="$style['company-info']">
        <div :class="$style['company-info__icon']">
          <IconCorporateFinance />
        </div>
        <h3 :class="$style['company-info__title']">
          하나의 만족!<br />
          기업금융
        </h3>
        <p :class="$style['company-info__text']">
          기업대출, 대체투자, 의료기 리스 등<br />
          하나캐피탈의 금융전문가가 상담해 드립니다.
        </p>
      </section>

      <BasicHr
        theme="quaternary"
        type="contents"
        className="row-margin-container"
      />

      <section :class="$style['company-info']">
        <div :class="$style['company-info__icon']">
          <IconGlobalFinance />
        </div>
        <h3 :class="$style['company-info__title']">
          하나의 드림!<br />
          글로벌금융
        </h3>
        <p :class="$style['company-info__text']">
          하나캐피탈은 국내를 넘어 글로벌 손님과 함께<br />
          성장하며 행복을 나누고자 동남아시아 중심으로<br />
          글로벌 진출을 하고 있습니다.<br />
          글로벌 리딩 캐피탈사로 성장하기 위해<br />
          지역별 최적화된 금융상품 및 서비스를 제공할 수 있도록<br />
          최선을 다하고 있습니다.
        </p>

        <ul class="reset-list row-margin-contents-group">
          <li class="row-margin-item-medium">
            <a
              href="https://shf.co.id/"
              target="_blank"
              :class="$style['nation']"
            >
              <span :class="$style['nation__sub']">SINARMAS HANA FINANCE</span>
              <span :class="$style['nation__title']">인도네시아</span>
            </a>
          </li>
          <li class="row-margin-item-medium">
            <a
              href="https://www.hanamyanmar.com/"
              target="_blank"
              :class="[$style['nation'], $style['nation--secondary']]"
            >
              <span :class="$style['nation__sub']">HANA MICRO FINANCE</span>
              <span :class="$style['nation__title']">미얀마</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/company/CompanyBusinessAreas.scss';
</style>
