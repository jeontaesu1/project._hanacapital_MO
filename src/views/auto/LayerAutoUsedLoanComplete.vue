<script>
// AF_M06_l007 승인
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    ButtonList,
    ButtonListItem,
    BasicButton,
    PageTextGroup,
    PageMainText,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    UnitText,
    IllustObject,
    CarEmblem,
    CarThumb,
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
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          고객님께서는<br />
          <strong>심사 승인 대상입니다</strong>
        </PageMainText>
      </PageTextGroup>

      <IllustObject type="complete" />

      <div>
        <BasicBox className="row-margin-item-group">
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <div class="flex-box row-margin-mini">
                <div class="flex-box__cell">
                  <CarEmblem code="1001" name="현대" />
                </div>
                <div class="flex-box__cell flex-box__cell--small">
                  <p class="text-body-4 font-weight-light">2020년식</p>
                </div>
              </div>
              <h3 class="text-body-1 font-weight-medium">
                쏘나타 뉴 라이즈 1.6T-Gdi 스마트 (마이 스마트 핏)
              </h3>
            </BasicBoxHeadLeft>
            <BasicBoxHeadRight>
              <CarThumb src="/images/_dummy/car-thumb.png" />
            </BasicBoxHeadRight>
          </BasicBoxHead>

          <KeyValue>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle
                :classNames="{
                  title: 'color-black',
                }"
                >차량 조정기준가격</KeyValueTitle
              >
              <KeyValueText>
                <UnitText rightUnit="원" align="right">23,500,000</UnitText>
              </KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>

        <BasicBox className="row-margin-item-group">
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h3 class="text-body-1 font-weight-medium">중고차오토론</h3>
            </BasicBoxHeadLeft>
          </BasicBoxHead>

          <KeyValue margin="regular">
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>금리</KeyValueTitle>
              <KeyValueText>10.9 %</KeyValueText>
            </KeyValueItem>

            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>개월수</KeyValueTitle>
              <KeyValueText>24 개월</KeyValueText>
            </KeyValueItem>

            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>대출신청금액</KeyValueTitle>
              <KeyValueText>1,300 만원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </div>

      <ul :class="[$style['basic-list'], 'row-margin-contents']">
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            실제 대출을 진행할 때, 대출가능금액이 달라질 수 있습니다.
          </div>
        </li>
      </ul>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton theme="secondary">확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/LayerAutoUsedLoanComplete.scss';
</style>
