<script>
// IF_M02_p007 대출약정
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckObject from '@/components/ui/form/BoxCheckObject.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    PageSubText,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    TextButton,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BottomSticky,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckObject,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '재고금융 대출신청');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });
  },
};
</script>

<template>
  <PageContents>
    <PageTextGroup>
      <PageMainText>
        <span class="color-green">주식회사알차이노베이션</span>님<br />
        총 <span class="color-green">2건</span> 차량 재고로<br />
        총 <span class="color-green">60,000,000원</span> 대출 신청하셨습니다
      </PageMainText>
      <PageSubText>확인 후 약정해 주세요.</PageSubText>
    </PageTextGroup>

    <UiAccordion>
      <UiAccordionItem
        v-for="i in 3"
        :key="i"
        :classNames="{ item: 'row-margin-item-group' }"
      >
        <BasicBox>
          <div class="flex-box">
            <div class="flex-box__cell flex-1">
              <p class="text-body-4 font-weight-light">2020년식</p>
              <h3 class="text-body-1 font-weight-medium row-margin-small">
                재고금융 20노1511
              </h3>
              <p class="text-body-4 color-gray">
                수입/BMW 5시리즈(7세대) 520d M스포츠<br />
                패키지 플러스
              </p>
            </div>
            <div class="flex-box__cell">
              <UiAccordionOpener />
            </div>
          </div>
          <UiAccordionLayer>
            <div :class="$style['insurance-contents']">
              <KeyValue margin="regular">
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>차대번호</KeyValueTitle>
                  <KeyValueText>KNALD2237A21548</KeyValueText>
                </KeyValueItem>
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>대출신청금액</KeyValueTitle>
                  <KeyValueText>10,000,000 원</KeyValueText>
                </KeyValueItem>
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>대출기간</KeyValueTitle>
                  <KeyValueText>3개월</KeyValueText>
                </KeyValueItem>
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>만기일자</KeyValueTitle>
                  <KeyValueText>2023.02.11</KeyValueText>
                </KeyValueItem>
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>대출금리</KeyValueTitle>
                  <KeyValueText>7.5%</KeyValueText>
                </KeyValueItem>
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>상환방법</KeyValueTitle>
                  <KeyValueText>만기일시상환</KeyValueText>
                </KeyValueItem>
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>
                    총 납부 금액<br />
                    (원금+이자)
                  </KeyValueTitle>
                  <KeyValueText>10,500,000원</KeyValueText>
                </KeyValueItem>
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>연체이자율</KeyValueTitle>
                  <KeyValueText>약정대출금리 + 3%</KeyValueText>
                </KeyValueItem>
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>결제일자</KeyValueTitle>
                  <KeyValueText>
                    매월 11일<br />
                    (최초결제일 2월 11일)
                  </KeyValueText>
                </KeyValueItem>
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>서류등록</KeyValueTitle>
                  <KeyValueText>
                    <div class="inline-wrap">
                      <TextButton theme="secondary" :underline="true">
                        서류확인
                      </TextButton>
                    </div>
                  </KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </div>
          </UiAccordionLayer>
        </BasicBox>
      </UiAccordionItem>
    </UiAccordion>

    <div class="row-margin-item-group">
      <BoxCheck
        type="checkbox"
        id="inventoryFinanceLoanAgreement_checkBox"
        size="regular"
      >
        <template v-slot:left>
          <BoxCheckObject />
        </template>
        <BoxCheckLabel :classNames="{ label: 'align-left' }">
          재고금융 확약서
        </BoxCheckLabel>
        <template v-slot:right>
          <button type="button" :class="$style['agree-list__link']">
            <span :class="$style['agree-list__link-text']">상세보기</span>
          </button>
        </template>
      </BoxCheck>
    </div>

    <template v-slot:foot>
      <BottomSticky>
        <div class="bottom-wrap">
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton>약정하기</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/inventoryFinance/InventoryFinanceLoanAgreement.scss';
</style>
