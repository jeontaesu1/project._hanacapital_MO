<script>
// UC_M08_l002
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PopupButton,
    PageTextGroup,
    PageMainText,
    PageSubText,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    ButtonList,
    ButtonListItem,
    BasicButton,
  },
  setup() {
    const layer = ref(null);

    return {
      layer,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="full" v-slot="layerSlotProps">
    <FullPopup>
      <template v-slot:head>
        <FullPopupHead>
          <PopupTitle>서약서</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>청렴·윤리 실천 서약서(계약업체용)</PageMainText>
        <PageSubText>
          당사는 윤리를 바탕으로 공정하고 투명한 기업경영이 경쟁력 향상의
          관건임을 깊이 인식하며, 귀 하나캐피탈 주식회사(이하 ‘캐피탈’)의
          청렴·윤리 실천 서약제도 시행 취지에 적극 호응하여 다음 사항을 준수 및
          실천할 것을 서약합니다.
        </PageSubText>
      </PageTextGroup>

      <div>
        <BasicBox>
          <ol
            :class="[$style['basic-list'], $style['basic-list--normal-margin']]"
          >
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-3',
                'color-gray-tertiary',
                'font-weight-regular',
              ]"
            >
              <div :class="$style['basic-list__symbol']">1.</div>
              <div :class="$style['basic-list__content']">
                당사는 계약체결 및 계약이행 과정에서 어떠한 경우에도 귀 캐피탈의
                계약 관련 임직원에게 직·간접적으로 금품·향응 등 부당한 이익을
                약속 또는 제공하지 않겠습니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-3',
                'color-gray-tertiary',
                'font-weight-regular',
              ]"
            >
              <div :class="$style['basic-list__symbol']">2.</div>
              <div :class="$style['basic-list__content']">
                당사는 공정한 직무수행을 방해하는 알선·청탁을 통하여 계약과
                관련된 특정 정보의 제공을 요구하거나 받지 않겠습니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-3',
                'color-gray-tertiary',
                'font-weight-regular',
              ]"
            >
              <div :class="$style['basic-list__symbol']">3.</div>
              <div :class="$style['basic-list__content']">
                당사는 ‘하나금융그룹 인권선언문’을 지지하며, 임직원, 손님,
                주주/투자자, 협력회사, 지역사회 등의 인권을 보호하고 인권침해가
                발생하지 않도록 노력하겠습니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-3',
                'color-gray-tertiary',
                'font-weight-regular',
              ]"
            >
              <div :class="$style['basic-list__symbol']">4.</div>
              <div :class="$style['basic-list__content']">
                당사는 임직원이 불공정거래에 가담하거나 공정한 시장질서를
                훼손하는 행위를 하지 않도록 하며, 정직하고 투명하게 업무를
                수행할 수 있도록 노력하겠습니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-3',
                'color-gray-tertiary',
                'font-weight-regular',
              ]"
            >
              <div :class="$style['basic-list__symbol']">5.</div>
              <div :class="$style['basic-list__content']">
                당사는 뇌물수수 금지와 부패 방지에 관한 정책 또는 기준을
                제시하고, 임직원이 이를 준수할 수 있도록 노력하겠습니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-3',
                'color-gray-tertiary',
                'font-weight-regular',
              ]"
            >
              <div :class="$style['basic-list__symbol']">6.</div>
              <div :class="$style['basic-list__content']">
                당사는 협력업체와 상호존중의 상생 관계를 지향하며, 자신의 우월적
                지위를 이용한 불공정행위를 강요하지 않겠습니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-3',
                'color-gray-tertiary',
                'font-weight-regular',
              ]"
            >
              <div :class="$style['basic-list__symbol']">7.</div>
              <div :class="$style['basic-list__content']">
                당사는 계약체결 및 계약이행 과정에서 제1조 또는 제2조를
                위반하였을 경우에는 입찰제한, 계약해지, 거래중단 등 어떠한
                불이익도 감수하고, 귀 캐피탈의 불이익 처분과 관련하여 민형사상
                일체의 이의를 제기하지 않겠습니다.
              </div>
            </li>
          </ol>
        </BasicBox>

        <p
          class="text-body-3 color-gray font-weight-light align-right row-margin-item-group"
        >
          2023년 05월 03일
        </p>
      </div>

      <section class="row-margin-contents">
        <h3 class="text-body-2 row-margin-item-medium">서약자</h3>

        <KeyValue margin="regular">
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>상호</KeyValueTitle>
            <KeyValueText>드림카센터</KeyValueText>
          </KeyValueItem>
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>주소</KeyValueTitle>
            <KeyValueText>
              서울 강남구 헌릉로 745길 25 216호<br />
              (율현동, 강남자동차매매단지)
            </KeyValueText>
          </KeyValueItem>
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>대표이사</KeyValueTitle>
            <KeyValueText>김하나 (인)</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </section>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/salesUsedCar/LayerSalesUsedCarAffiliateClauseDetail002.scss';
</style>
