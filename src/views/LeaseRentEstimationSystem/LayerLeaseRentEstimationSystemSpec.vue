<script>
// LR_M00_l005
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PopupButton,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
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
          <PopupTitle>제원 보기</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <div>
        <ul class="reset-list">
          <li class="row-margin-item-group">
            <BasicBox>
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <h3 class="text-body-1 font-weight-medium">외관</h3>
                </BasicBoxHeadLeft>
              </BasicBoxHead>
              <KeyValue margin="regular">
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>전장 (mm)</KeyValueTitle>
                  <KeyValueText>3,595</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>전폭 (mm)</KeyValueTitle>
                  <KeyValueText>1,595</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>전고 (mm)</KeyValueTitle>
                  <KeyValueText>1,575 (1,605)</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>축간거리 (mm)</KeyValueTitle>
                  <KeyValueText>2,400</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </BasicBox>
          </li>
          <li class="row-margin-item-group">
            <BasicBox>
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <h3 class="text-body-1 font-weight-medium">엔진</h3>
                </BasicBoxHeadLeft>
              </BasicBoxHead>
              <KeyValue margin="regular">
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>엔진형식</KeyValueTitle>
                  <KeyValueText>3,595</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>배기량</KeyValueTitle>
                  <KeyValueText>1,595</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>최고출력(PS/rpm)</KeyValueTitle>
                  <KeyValueText>1,575 (1,605)</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>최대토크(kgf.m/rpm)</KeyValueTitle>
                  <KeyValueText>2,400</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>연료탱크(ℓ)</KeyValueTitle>
                  <KeyValueText>35</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </BasicBox>
          </li>
          <li class="row-margin-item-group">
            <BasicBox>
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <h3 class="text-body-1 font-weight-medium">연비</h3>
                </BasicBoxHeadLeft>
              </BasicBoxHead>
              <KeyValue margin="regular">
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>연료</KeyValueTitle>
                  <KeyValueText>휘발유</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>복합연비(km/ℓ)</KeyValueTitle>
                  <KeyValueText>14.3</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>도심연비(km/ℓ)</KeyValueTitle>
                  <KeyValueText>13.4</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>고속도로연비(km/ℓ)</KeyValueTitle>
                  <KeyValueText>15.5</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>CO2 배출량(g/km)</KeyValueTitle>
                  <KeyValueText>115</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>배기량(cc)</KeyValueTitle>
                  <KeyValueText>998</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>공차중량(kg)</KeyValueTitle>
                  <KeyValueText>985</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>변속기</KeyValueTitle>
                  <KeyValueText>자동4단</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>타이어(‘’)</KeyValueTitle>
                  <KeyValueText>15</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </BasicBox>
          </li>
        </ul>
      </div>
    </FullPopup>
  </UiLayer>
</template>
