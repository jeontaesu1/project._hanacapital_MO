<script>
// AF_M05_l004 - 지점문의 대상
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
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
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
    PageSubText,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicHr,
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
          김하나님은<br />
          <strong>지점문의 대상입니다</strong>
        </PageMainText>
        <PageSubText>
          아래의 대출신청 내용으로 대출을 원하신다면, ‘문의요청’을 해주세요.
        </PageSubText>
      </PageTextGroup>

      <IllustObject type="error" />

      <BasicBox>
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
            <h3 class="text-body-1 font-weight-medium">캐스퍼</h3>
            <p class="text-body-4 color-gray row-margin-small">
              2022년형 가솔린 1.0 터보 밴
            </p>
          </BasicBoxHeadLeft>
          <BasicBoxHeadRight>
            <CarThumb src="/images/_dummy/car-thumb.png" />
          </BasicBoxHeadRight>
        </BasicBoxHead>
        <KeyValue margin="regular">
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>주민등록번호</KeyValueTitle>
            <KeyValueText>710908-1******</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>차량가격</KeyValueTitle>
            <KeyValueText>48,100,000 원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>대출신청금액</KeyValueTitle>
            <KeyValueText>48,100,000 원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>대출기간</KeyValueTitle>
            <KeyValueText>72개월</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>금리</KeyValueTitle>
            <KeyValueText>3.5%</KeyValueText>
          </KeyValueItem>
        </KeyValue>

        <BasicHr
          theme="quaternary"
          type="contents"
          className="row-margin-contents-small"
        />

        <KeyValue verticalAlign="center">
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle
              :classNames="{
                title: 'color-black',
              }"
              >월 납입금액</KeyValueTitle
            >
            <KeyValueText>
              <UnitText rightUnit="원" align="right">741,620</UnitText>
            </KeyValueText>
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
            <BasicButton>문의요청</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
