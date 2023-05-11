<script>
// AF_M00_l004
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import RoundButton from '@/components/ui/button/RoundButton.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import UnitText from '@/components/ui/text/UnitText.vue';

import IconTell from '@/assets/images/icon/tell.svg?component';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
    PageTextGroup,
    PageMainText,
    BoxCheck,
    BoxCheckLabel,
    BasicHr,
    RoundButton,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    UnitText,
    IconTell,
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
          <template v-slot:right>
            <div class="flex-box">
              <div class="flex-box__cell">
                <RoundButton size="mini" tagName="a" href="tel:1800-1110">
                  <template v-slot:leftIcon>
                    <IconTell />
                  </template>
                  상담원 연결
                </RoundButton>
              </div>
              <div class="flex-box__cell flex-box__cell--regular">
                <PopupButton @click="layerSlotProps.close()" />
              </div>
            </div>
          </template>
        </FullPopupHead>
      </template>

      <div>
        <div class="text-body-4 font-weight-light">현대</div>
        <h3 class="text-body-1 font-weight-medium row-margin-mini">캐스퍼</h3>
      </div>

      <BasicHr theme="quaternary" className="row-margin-contents"></BasicHr>

      <div class="row-margin-item-regular row-margin-bottom-none">
        <PageTextGroup>
          <PageMainText>
            자동차 세부모델을<br />
            <strong>선택해 주세요</strong>
          </PageMainText>
        </PageTextGroup>
      </div>

      <div class="contents-wrap">
        <ul class="reset-list">
          <li class="row-margin-item-group">
            <BoxCheck
              :contents="true"
              type="radio"
              name="LayerAutoEstimateSelectDetailModel001"
              id="LayerAutoEstimateSelectDetailModel001_001"
            >
              <BoxCheckLabel>2022년형 가솔린 1.0</BoxCheckLabel>
            </BoxCheck>
          </li>
          <li class="row-margin-item-group">
            <BoxCheck
              :contents="true"
              type="radio"
              name="LayerAutoEstimateSelectDetailModel001"
              id="LayerAutoEstimateSelectDetailModel001_002"
            >
              <BoxCheckLabel>2022년형 가솔린 1.0 터보</BoxCheckLabel>
            </BoxCheck>
          </li>
          <li class="row-margin-item-group">
            <BoxCheck
              :contents="true"
              type="radio"
              name="LayerAutoEstimateSelectDetailModel001"
              id="LayerAutoEstimateSelectDetailModel001_003"
            >
              <BoxCheckLabel>2022년형 가솔린 1.0 밴</BoxCheckLabel>
            </BoxCheck>
          </li>
          <li class="row-margin-item-group">
            <BoxCheck
              :contents="true"
              type="radio"
              name="LayerAutoEstimateSelectDetailModel001"
              id="LayerAutoEstimateSelectDetailModel001_004"
            >
              <BoxCheckLabel>2022년형 가솔린 1.0 터보 밴</BoxCheckLabel>
              <div class="text-body-4 color-gray row-margin-small">
                개소세 5% 기준
              </div>
            </BoxCheck>
          </li>
        </ul>
      </div>

      <template v-slot:foot>
        <KeyValue
          verticalAlign="center"
          :classNames="{ wrap: 'row-margin-contents-small' }"
        >
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle :classNames="{ title: 'color-black' }"
              >총 차량가격</KeyValueTitle
            >
            <KeyValueText>
              <UnitText rightUnit="원" align="right"> 0 </UnitText>
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>

        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">이전</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>다음</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
