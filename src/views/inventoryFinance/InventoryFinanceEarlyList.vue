<script>
// IF_M03_p001
import { onMounted, onUnmounted, reactive } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
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
import BasicHr from '@/components/ui/common/BasicHr.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IconArrow from '@/assets/images/icon/dropdown.svg?component';
import BankLogo001 from '@/assets/images/bank-logo/004.svg?component';
import BankLogo002 from '@/assets/images/bank-logo/011.svg?component';
import BankLogo003 from '@/assets/images/bank-logo/020.svg?component';
import BankLogo004 from '@/assets/images/bank-logo/081.svg?component';
import BankLogo005 from '@/assets/images/bank-logo/088.svg?component';

export default {
  components: {
    PageContents,
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
    BasicHr,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BasicButton,
    StickyBar,
    RoundStatus,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    TextButton,
    IconArrow,
    BankLogo001,
    BankLogo002,
    BankLogo003,
    BankLogo004,
    BankLogo005,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      carNumberError: false,
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '재고금융 중도상환');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });

    return {
      state,
    };
  },
};
</script>

<template>
  <PageContents>
    <template v-slot:head>
      <StickyBar>
        <StepProgress :total="4" :current="1" />
      </StickyBar>
    </template>

    <PageTextGroup>
      <PageMainText>
        중도상환 신청을 원하시는 상품을<br />
        <strong>선택해 주세요</strong>
      </PageMainText>
    </PageTextGroup>

    <FormList>
      <FormListItem
        titleText="차량번호"
        target="#InventoryFinanceEarlyListCarNumber"
      >
        <FormInvalid :error="state.carNumberError">
          <InputBlock :error="state.carNumberError">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="차량번호"
                id="InventoryFinanceEarlyListCarNumber"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <FormListItem titleText="조회기간"> // DatePicker </FormListItem>
    </FormList>

    <BasicButton line="true" :classNames="{ wrap: 'row-margin-contents-group' }"
      >조회</BasicButton
    >

    <BasicHr className="row-margin-container-medium" />

    <h3 class="text-title-2 row-margin-contents row-margin-top-none">
      중도상환 신청내역
    </h3>

    <!-- Case : 중도상환신청 없을 경우 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">
        중도상환신청이 가능한 계약이 없습니다.
      </p>
    </div>
    <!-- //Case : 중도상환신청 없을 경우 -->

    <section>
      <BasicBox class="row-margin-item-group">
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <h3 class="text-body-1 font-weight-medium">10나 8941</h3>
            <p class="text-body-4 color-gray row-margin-small">
              쏘나타 하이브리드(DN8) 스파이더
            </p>
          </BasicBoxHeadLeft>
        </BasicBoxHead>

        <KeyValue margin="regular">
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>대출기간</KeyValueTitle>
            <KeyValueText>2022.12.06 ~ 2023.03.11</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>결제회차</KeyValueTitle>
            <KeyValueText>1/1 (매월11일)</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>결제예정금액</KeyValueTitle>
            <KeyValueText>2,039,040 원</KeyValueText>
          </KeyValueItem>
        </KeyValue>

        <BasicButton
          size="small"
          :classNames="{ wrap: 'row-margin-contents-small' }"
          >중도상환 신청</BasicButton
        >
      </BasicBox>

      <!-- Case : 연체 건일 경우 -->
      <BasicBox class="row-margin-item-group">
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <h3 class="text-body-1 font-weight-medium">10나 8941</h3>
            <p class="text-body-4 color-gray row-margin-small">
              쏘나타 하이브리드(DN8) 스파이더
            </p>
          </BasicBoxHeadLeft>
          <BasicBoxHeadRight>
            <RoundStatus theme="nonary">연체</RoundStatus>
          </BasicBoxHeadRight>
        </BasicBoxHead>

        <KeyValue margin="regular">
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>대출기간</KeyValueTitle>
            <KeyValueText>2022.12.06 ~ 2023.03.11</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>결제회차</KeyValueTitle>
            <KeyValueText>1/1 (매월11일)</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>결제예정금액</KeyValueTitle>
            <KeyValueText>2,039,040 원</KeyValueText>
          </KeyValueItem>
        </KeyValue>

        <BasicButton
          size="small"
          :disabled="true"
          :classNames="{ wrap: 'row-margin-contents-small' }"
          >중도상환 신청</BasicButton
        >
      </BasicBox>
      <!-- //Case : 연체 건일 경우 -->

      <!-- Case : 중도상환신청 완료 했을 경우 -->
      <BasicBox class="row-margin-item-group">
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <h3 class="text-body-1 font-weight-medium">10나 8941</h3>
            <p class="text-body-4 color-gray row-margin-small">
              쏘나타 하이브리드(DN8) 스파이더
            </p>
          </BasicBoxHeadLeft>
        </BasicBoxHead>

        <UiAccordion tagName="div">
          <KeyValue>
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>입금예정일자</KeyValueTitle>
              <KeyValueText>2022.12.06 ~ 2023.03.11</KeyValueText>
            </KeyValueItem>
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>입금예정금액</KeyValueTitle>
              <KeyValueText>2,039,040 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>

          <UiAccordionItem
            tagName="div"
            :classNames="{
              item: 'row-margin-item-group',
            }"
          >
            <KeyValue>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>입금가상계좌</KeyValueTitle>
                <KeyValueText>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1">
                      하나 123-456-7890123
                    </div>
                    <div class="flex-box__cell flex-box__cell--small">
                      <UiAccordionOpener
                        :classNames="{
                          button: $style['key-value-opener'],
                        }"
                      />
                    </div>
                  </div>
                </KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <UiAccordionLayer>
              <div :class="$style['account-contents']">
                <BasicBox theme="senary">
                  <KeyValue align="left" margin="regular" size="regular">
                    <KeyValueItem
                      :classNames="{
                        item: 'text-body-3',
                      }"
                    >
                      <KeyValueTitle>
                        <div class="flex-box">
                          <div class="flex-box__cell">
                            <BankLogo001 :class="$style['bank-logo']" />
                          </div>
                          <div class="flex-box__cell flex-box__cell--mini">
                            국민
                          </div>
                        </div>
                      </KeyValueTitle>
                      <KeyValueText>123-456-78901234</KeyValueText>
                    </KeyValueItem>
                    <KeyValueItem
                      :classNames="{
                        item: 'text-body-3',
                      }"
                    >
                      <KeyValueTitle>
                        <div class="flex-box">
                          <div class="flex-box__cell">
                            <BankLogo002 :class="$style['bank-logo']" />
                          </div>
                          <div class="flex-box__cell flex-box__cell--mini">
                            농협
                          </div>
                        </div>
                      </KeyValueTitle>
                      <KeyValueText>123-456-78901234</KeyValueText>
                    </KeyValueItem>
                    <KeyValueItem
                      :classNames="{
                        item: 'text-body-3',
                      }"
                    >
                      <KeyValueTitle>
                        <div class="flex-box">
                          <div class="flex-box__cell">
                            <BankLogo003 :class="$style['bank-logo']" />
                          </div>
                          <div class="flex-box__cell flex-box__cell--mini">
                            우리
                          </div>
                        </div>
                      </KeyValueTitle>
                      <KeyValueText>123-456-78901234</KeyValueText>
                    </KeyValueItem>
                    <KeyValueItem
                      :classNames="{
                        item: 'text-body-3',
                      }"
                    >
                      <KeyValueTitle>
                        <div class="flex-box">
                          <div class="flex-box__cell">
                            <BankLogo004 :class="$style['bank-logo']" />
                          </div>
                          <div class="flex-box__cell flex-box__cell--mini">
                            하나
                          </div>
                        </div>
                      </KeyValueTitle>
                      <KeyValueText>123-456-78901234</KeyValueText>
                    </KeyValueItem>
                    <KeyValueItem
                      :classNames="{
                        item: 'text-body-3',
                      }"
                    >
                      <KeyValueTitle>
                        <div class="flex-box">
                          <div class="flex-box__cell">
                            <BankLogo005 :class="$style['bank-logo']" />
                          </div>
                          <div class="flex-box__cell flex-box__cell--mini">
                            신한
                          </div>
                        </div>
                      </KeyValueTitle>
                      <KeyValueText> 123-456-78901234 </KeyValueText>
                    </KeyValueItem>
                  </KeyValue>
                </BasicBox>
              </div>
            </UiAccordionLayer>
          </UiAccordionItem>
        </UiAccordion>

        <div
          :class="[
            $style['inline-alert'],
            $style['inline-alert--complete'],
            'row-margin-item-group',
          ]"
        >
          <p :class="$style['inline-alert__text']">중도상환 신청완료</p>
        </div>
      </BasicBox>
      <!-- //Case : 중도상환신청 완료 했을 경우 -->
    </section>

    <div class="inline-wrap align-center row-margin-item-group">
      <TextButton :classNames="{ wrap: 'text-body-4 color-gray' }">
        더보기
        <template v-slot:rightIcon>
          <IconArrow />
        </template>
      </TextButton>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/inventory-finance/InventoryFinanceEarlyList.scss';
</style>
