<script>
// BF_M05_l003
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
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
    PopupButton,
    PageTextGroup,
    PageMainText,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
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
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          <strong>설비리스 조건을</strong><br />
          확인해 주세요
        </PageMainText>
      </PageTextGroup>

      <BasicBox>
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <h3 class="text-body-1 font-weight-medium">의료기기</h3>
          </BasicBoxHeadLeft>
        </BasicBoxHead>

        <KeyValue margin="regular">
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>취득원가</KeyValueTitle>
            <KeyValueText>99,999,000 원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>기간</KeyValueTitle>
            <KeyValueText>24개월</KeyValueText>
          </KeyValueItem>
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>상환금리</KeyValueTitle>
            <KeyValueText>5%</KeyValueText>
          </KeyValueItem>
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>보증금</KeyValueTitle>
            <KeyValueText>20% (2,000,000 원)</KeyValueText>
          </KeyValueItem>
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>유예원금</KeyValueTitle>
            <KeyValueText>20% (2,000,000 원)</KeyValueText>
          </KeyValueItem>
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>잔존가치</KeyValueTitle>
            <KeyValueText>20% (2,000,000 원)</KeyValueText>
          </KeyValueItem>
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>월리스료</KeyValueTitle>
            <KeyValueText>100,000,000 원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>총납입액</KeyValueTitle>
            <KeyValueText>100,000,000 원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>이자총액</KeyValueTitle>
            <KeyValueText>100,000,000 원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>보험조건</KeyValueTitle>
            <KeyValueText>이용자책임부보</KeyValueText>
          </KeyValueItem>
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>납입방식</KeyValueTitle>
            <KeyValueText>1개월 후불</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <section :class="[$style['notice-section'], 'row-margin-contents']">
        <h3 :class="$style['notice-section__title']">견적시 유의사항</h3>
        <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              상기 견적은 금융조건에 따라 변동될 수 있으며, 리스(상담) 신청 시
              정확한 견적 확인이 가능합니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              장비의 보험조건은 ‘이용자 책임 부보’ 조건입니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              하나캐피탈㈜는 손님의 리스료 미납 등 채무불이행 및 리스물건
              반납의무 위반을 대비하여 보증보험회사와 신용보험 계약을 체결할 수
              있습니다.
            </div>
          </li>
        </ul>
      </section>

      <BasicBox>
        <KeyValue margin="regular">
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>견적번호</KeyValueTitle>
            <KeyValueText>A00000000001</KeyValueText>
          </KeyValueItem>
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>견적일자</KeyValueTitle>
            <KeyValueText>2023.01.01</KeyValueText>
          </KeyValueItem>
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>연락처</KeyValueTitle>
            <KeyValueText>1800-1110</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <template v-slot:foot>
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

<style lang="scss" module>
@import '@/assets/scss/views/business/LayerBusinessEquipmentLeaseEstimateConfirm.scss';
</style>
