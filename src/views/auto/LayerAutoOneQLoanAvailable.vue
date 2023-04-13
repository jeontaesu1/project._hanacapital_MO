<script>
// AF_M05_l004
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
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import KeyValueList from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import UnitText from '@/components/ui/text/UnitText.vue';

import CarLogo from '@/assets/images/car-logo/auto-hyundai.svg?component';

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
    PageSubText,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    KeyValueList,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicHr,
    UnitText,
    CarLogo,
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
          김하나님 신청하신 내용으로<br />
          <strong>대출 신청이 가능합니다</strong>
        </PageMainText>
        <PageSubText>
          아래의 대출신청 내용을<br />
          확인하신 후 약정을 진행해주세요.
        </PageSubText>
      </PageTextGroup>

      <BasicBox>
        <BasicBoxHead align="top">
          <BasicBoxHeadLeft>
            <p :class="$style['brand-info']">
              <span :class="$style['brand-info__logo']"><CarLogo /></span>
              2020년식
            </p>
            <h3 class="text-body-1 font-weight-medium">제네시스</h3>
            <p class="text-body-4 color-gray row-margin-small">더 뉴 G70</p>
            <UnitText
              rightUnit="원"
              :classNames="{
                wrap: 'row-margin-item',
              }"
              >628,190</UnitText
            >
          </BasicBoxHeadLeft>
          <BasicBoxHeadRight>
            <div :class="$style['car-image']">
              <img
                src="@/assets/images/_dummy/car-sample.png"
                alt="차량 정보 넣어주세요"
              />
            </div>
          </BasicBoxHeadRight>
        </BasicBoxHead>
        <KeyValueList margin="regular">
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>고객명</KeyValueTitle>
            <KeyValueText>홍길동</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>접수일자</KeyValueTitle>
            <KeyValueText>2022.10.26</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>진행일정</KeyValueTitle>
            <KeyValueText>2019.06.05</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>외장색상</KeyValueTitle>
            <KeyValueText>아틸라스 화이트<span>//컬러칩</span></KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>내장색상</KeyValueTitle>
            <KeyValueText
              >네츄럴 베이지 / 다크 베이지<span>//컬러칩</span></KeyValueText
            >
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>옵션</KeyValueTitle>
            <KeyValueText>선루프</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>종료시 처리</KeyValueTitle>
            <KeyValueText>처리 방법</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>차량 가격</KeyValueTitle>
            <KeyValueText
              :classNames="{
                text: 'color-blue',
              }"
            >
              63,000,000 원
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>기간</KeyValueTitle>
            <KeyValueText>5일</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>약정거리</KeyValueTitle>
            <KeyValueText>100km</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>선납금</KeyValueTitle>
            <KeyValueText>1,300,000 원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>보증금</KeyValueTitle>
            <KeyValueText>6,300,000 원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>잔존가치</KeyValueTitle>
            <KeyValueText>최고(56.5%) 23,221,500 원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>정비</KeyValueTitle>
            <KeyValueText>정비상품</KeyValueText>
          </KeyValueItem>
        </KeyValueList>

        <BasicHr
          theme="quaternary"
          type="contents"
          className="row-margin-contents-small"
        />

        <KeyValueList margin="regular">
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>탁송방법</KeyValueTitle>
            <KeyValueText>탁송방법</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>탁송지</KeyValueTitle>
            <KeyValueText>탁송지</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>탁송 도착지</KeyValueTitle>
            <KeyValueText>탁송 도착지</KeyValueText>
          </KeyValueItem>
        </KeyValueList>

        <BasicHr
          theme="quaternary"
          type="contents"
          className="row-margin-contents-small"
        />

        <KeyValueList margin="regular">
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>출고</KeyValueTitle>
            <KeyValueText>출고방식</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>유형</KeyValueTitle>
            <KeyValueText>손님유형</KeyValueText>
          </KeyValueItem>
        </KeyValueList>

        <BasicHr
          theme="quaternary"
          type="contents"
          className="row-margin-contents-small"
        />

        <KeyValueList margin="regular">
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>운전연력</KeyValueTitle>
            <KeyValueText>운전연력</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>대물배상액</KeyValueTitle>
            <KeyValueText>대물배상액</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>자기차량손해액</KeyValueTitle>
            <KeyValueText>자기차량손해액</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>자기부담금(면책금)</KeyValueTitle>
            <KeyValueText>자기부담금(면책금)</KeyValueText>
          </KeyValueItem>
        </KeyValueList>
      </BasicBox>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton theme="tertiary">견적서 보기</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton theme="secondary">발주 신청</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/LayerAutoOneQLoanAvailable.scss';
</style>
