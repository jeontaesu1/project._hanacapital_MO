<script>
// Company_M08_p011
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';

import IconHyendaiRentalCare from '@/assets/images/icon/hyendai-rental-care.svg?component';
import IconBuilding from '@/assets/images/icon/building.svg?component';
import IconCar from '@/assets/images/icon/car.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    TextButton,
    RoundStatus,
    BasicHr,
    BasicBox,
    IconHyendaiRentalCare,
    IconBuilding,
    IconCar,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '윤리강령');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => ['menu']);
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
        이 모든 질문에<br />
        <strong>“예”라고 답할 수 있으면 행하십시오</strong>
      </PageMainText>
      <PageSubText>
        스스로 판단하기 어려운 사항은<br />
        윤리 또는 준법담당 부서에 의견을 물을 수 있습니다.
      </PageSubText>
    </PageTextGroup>

    <section :class="$style['bg']">
      <h3 class="text-head-2 row-margin-item-medium">
        윤리적 판단을 위한 질문
      </h3>

      <ul class="reset-list">
        <li class="row-margin-item-medium">
          <BasicBox theme="secondary">
            <p class="text-body-1 font-weight-medium align-center">
              내 결정이 Code One에 부합하는가?
            </p>
          </BasicBox>
        </li>
        <li class="row-margin-item-medium">
          <BasicBox theme="secondary">
            <p class="text-body-1 font-weight-medium align-center">
              내 행동이 다른 임직원이나 언론에 공개 되어도 문제가 없겠는가?
            </p>
          </BasicBox>
        </li>
        <li class="row-margin-item-medium">
          <BasicBox theme="secondary">
            <p class="text-body-1 font-weight-medium align-center">
              다른 사람이 이 자리에 있더라도 똑같은 판단을 내리겠는가?
            </p>
          </BasicBox>
        </li>
      </ul>
    </section>

    <section class="row-margin-container-medium">
      <h3 class="text-head-2 row-margin-item-medium">제 1장 임직원의 자세</h3>

      <div :class="$style['contents-list']">
        <ol
          :class="[
            $style['contents-list__list'],
            $style['contents-list__list--senary'],
          ]"
        >
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">1</div>
              <div :class="$style['contents-list__title']">사명감</div>
            </div>
            <div :class="[$style['contents-list__depth-4'], 'row-margin-mini']">
              <p class="text-body-4 color-gray-tertiary">
                하나인은 책임감을 가지고 각자의 역할에 최선을 다하며, 정직하고
                투명하게 업무를 수행한다.
              </p>
            </div>
          </li>
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">2</div>
              <div :class="$style['contents-list__title']">사명감</div>
            </div>
            <div :class="[$style['contents-list__depth-4'], 'row-margin-mini']">
              <p class="text-body-4 color-gray-tertiary">
                하나인은 책임감을 가지고 각자의 역할에 최선을 다하며, 정직하고
                투명하게 업무를 수행한다.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/company/CompanyEthicsCode.scss';
</style>
