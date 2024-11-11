<script>
// UC_M09_l002
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PopupButton,
    PageTextGroup,
    PageMainText,
    BasicBox,
    BasicBoxHead,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    StepProgress,
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
          <PopupTitle>온라인약정</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
        <StepProgress :total="3" :current="1" />
      </template>

      <PageTextGroup>
        <PageMainText>
          대출 신청 정보를<br />
          확인해 주세요.
        </PageMainText>
      </PageTextGroup>

      <ul class="reset-list">
        <li class="row-margin-item-group">
          <h3 class="text-title-2 row-margin-contents">대출자 정보</h3>
          <BasicBox>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>매매상사</KeyValueTitle>
                <KeyValueText>퍼폄승 </KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>사업자번호</KeyValueTitle>
                <KeyValueText>2210565944</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>사업장주소지</KeyValueTitle>
                <KeyValueText>인천 서구 에코로 167</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>대표자명</KeyValueTitle>
                <KeyValueText>퍼폄승</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </li>

        <li class="row-margin-item-group">
          <h3 class="text-title-2 row-margin-contents">계약 정보</h3>
          <BasicBox>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>차입일자</KeyValueTitle>
                <KeyValueText>2024.12.12</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>기한만기일자</KeyValueTitle>
                <KeyValueText>2024.12.31</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>대출정보</KeyValueTitle>
                <KeyValueText>재고금융</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>거래구분</KeyValueTitle>
                <KeyValueText>한도거래</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>여신기간</KeyValueTitle>
                <KeyValueText>약정 후 6개월</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>중도상환수수료</KeyValueTitle>
                <KeyValueText>면제</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </li>

        <li class="row-margin-item-group">
          <h3 class="text-title-2 row-margin-contents">조건변경 내용</h3>
          <BasicBox>
            <BasicBoxHead>
              <h3 class="text-body-1 font-weight-medium">변경전</h3>
            </BasicBoxHead>

            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>한도금액</KeyValueTitle>
                <KeyValueText>2,000,000,000원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>이자율</KeyValueTitle>
                <KeyValueText>3%</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>

          <BasicBox class="BasicBox">
            <BasicBoxHead>
              <h3 class="text-body-1 font-weight-medium">변경후</h3>
            </BasicBoxHead>

            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>한도금액</KeyValueTitle>
                <KeyValueText>2,000,000,000원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>이자율</KeyValueTitle>
                <KeyValueText>3%</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </li>
      </ul>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary"> 이전 </BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>약정하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/salesUsedCar/LayerSalesUsedCarAffiliateClauseDetail002.scss';
</style>

<style lang="scss" scoped>
.row-margin-item-group {
  margin-bottom: 0;
  & + & {
    margin-top: 40px;
  }

  .BasicBox {
    margin: 16px 0;
  }
}
</style>
