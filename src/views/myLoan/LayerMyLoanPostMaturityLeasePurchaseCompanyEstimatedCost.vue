<script>
// My_M08_l028
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    ButtonList,
    ButtonListItem,
    BasicButton,
    PageTextGroup,
    PageMainText,
    StepProgress,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    UnitText,
    NoticeText,
    BasicHr,
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
          <PopupTitle>만기후처리 구매</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
        <StepProgress :total="3" :current="2" />
      </template>

      <PageTextGroup>
        <PageMainText>
          구매 예상 비용을<br />
          <strong>확인해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <section>
        <BasicBox>
          <KeyValue margin="regular">
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>만기일자</KeyValueTitle>
              <KeyValueText>2023.01.05</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>최종결제일자</KeyValueTitle>
              <KeyValueText>2023.01.05</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-contents">구매 예상 정산 비용</h3>

        <BasicBox>
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h4 class="text-body-1 font-weight-medium">
                예상비용 (입금/지급)
              </h4>
            </BasicBoxHeadLeft>
            <BasicBoxHeadRight>
              <UnitText rightUnit="원" align="right">999,999,999</UnitText>
            </BasicBoxHeadRight>
          </BasicBoxHead>

          <KeyValue margin="regular">
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>제세금(a)</KeyValueTitle>
              <KeyValueText>99,999,999 원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>보증금(b)</KeyValueTitle>
              <KeyValueText>99,999,999 원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>잔존가치(c)</KeyValueTitle>
              <KeyValueText>99,999,999 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>

          <BasicHr
            theme="quaternary"
            type="contents"
            className="row-margin-contents-small"
          />

          <KeyValue>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>합계 (a-b+c)</KeyValueTitle>
              <KeyValueText>99,999,999 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>

        <NoticeText :classNames="{ wrap: 'row-margin-item-group' }">
          정산금액은 (만기일자) 기준으로 기준일자에 따라 변경될 수 있습니다.
        </NoticeText>
      </section>

      <section>
        <h3 class="text-title-2 row-margin-contents">
          계산서 발행 금액(잔존가치)
        </h3>

        <BasicBox className="row-margin-contents">
          <KeyValue margin="regular">
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>잔존가치</KeyValueTitle>
              <KeyValueText>99,999,999 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </section>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-contents-small',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">이전</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>구매신청</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
