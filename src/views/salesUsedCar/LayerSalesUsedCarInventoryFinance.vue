<script>
// UC_M09_l001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';

import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PopupButton,

    BasicBox,
    BasicBoxHead,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    NoticeText,
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
          <PopupTitle>여신 기한연장 조건변경 신청서</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <ul class="reset-list">
        <li class="row-margin-item-group">
          <h3 class="text-title-2 row-margin-contents">기존여신 내용</h3>
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
                <KeyValueTitle>차입과목</KeyValueTitle>
                <KeyValueText>재고금융</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>차입금액</KeyValueTitle>
                <KeyValueText>123,000,000원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>약정기일</KeyValueTitle>
                <KeyValueText>3개월</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>비고</KeyValueTitle>
                <KeyValueText>없음</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </li>

        <li class="row-margin-item-group">
          <h3 class="text-title-2 row-margin-contents">기한연장 내용</h3>
          <BasicBox>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>기한연장신청금액</KeyValueTitle>
                <KeyValueText>123,000,000원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>기한연장기일</KeyValueTitle>
                <KeyValueText>3개월</KeyValueText>
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
                <KeyValueTitle>비고</KeyValueTitle>
                <KeyValueText>없음</KeyValueText>
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
                <KeyValueTitle>여신과목</KeyValueTitle>
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
                <KeyValueTitle>여신(한도)금액</KeyValueTitle>
                <KeyValueText>123,000,000원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>중도상환수수료</KeyValueTitle>
                <KeyValueText>0%</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>이자율</KeyValueTitle>
                <KeyValueText>(고정) 연 0%</KeyValueText>
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
                <KeyValueTitle>여신과목</KeyValueTitle>
                <KeyValueText>3개월</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>거래구분</KeyValueTitle>
                <KeyValueText>없음</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>여신(한도)금액</KeyValueTitle>
                <KeyValueText>123,000,000원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>중도상환수수료</KeyValueTitle>
                <KeyValueText>0%</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>이자율</KeyValueTitle>
                <KeyValueText>(고정) 연 0%</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </li>
      </ul>

      <NoticeText>서면통보를 필요로 하지 않음</NoticeText>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>확인했습니다</BasicButton>
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
