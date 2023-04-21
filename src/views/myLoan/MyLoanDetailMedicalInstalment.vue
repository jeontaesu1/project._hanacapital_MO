<script>
// My_M01_p002 의료기할부
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

export default {
  components: {
    PageContents,
    BasicHr,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    UnitText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    NoticeText,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '내대출');
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
    <section>
      <h3 class="text-title-2">의료기할부</h3>
      <div
        class="text-body-3 color-gray-tertiary font-weight-light row-margin-small"
      >
        MINI LASER
      </div>
      <div class="row-margin-contents">
        <BasicBox>
          <KeyValue margin="regular">
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>할부잔액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>할부원금</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>

        <BasicBox class="row-margin-item-group">
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <div class="text-body-1 font-weight-medium">결제예정금액</div>
            </BasicBoxHeadLeft>
            <BasicBoxHeadRight>
              <UnitText rightUnit="원">999,999,999</UnitText>
            </BasicBoxHeadRight>
          </BasicBoxHead>
          <KeyValue margin="regular">
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>결제일</KeyValueTitle>
              <KeyValueText>2022.02.02 (매월 2일)</KeyValueText>
            </KeyValueItem>
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>결제회차</KeyValueTitle>
              <KeyValueText>16/60</KeyValueText>
            </KeyValueItem>
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>할부기간</KeyValueTitle>
              <KeyValueText>2021.01.05 ~ 2022.01.05</KeyValueText>
            </KeyValueItem>
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>이용금리</KeyValueTitle>
              <KeyValueText>0.0%</KeyValueText>
            </KeyValueItem>
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>유예기간</KeyValueTitle>
              <KeyValueText>0개월</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>

        <ButtonList>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary"
              >증명서 조회/발급</BasicButton
            >
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary"
              >전자약정 계약서</BasicButton
            >
          </ButtonListItem>
        </ButtonList>
        <BasicButton :classNames="{ wrap: 'row-margin-item-medium' }"
          >중도상환신청</BasicButton
        >
      </div>
    </section>

    <BasicHr class="row-margin-container-medium"></BasicHr>

    <section>
      <div class="text-title-2 font-weight-bold">당월 결제금액</div>
      <div class="text-title-2 color-green font-weight-bold row-margin-small">
        총 999,999,999 원
      </div>

      <BasicBox class="row-margin-contents">
        <UiAccordion tagName="div">
          <KeyValue margin="regular">
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>이번 회차 금액</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>기타비용</KeyValueTitle>
              <KeyValueText>999,999,999 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>

          <UiAccordionItem
            tagName="div"
            :classNames="{
              item: 'row-margin-item-group',
            }"
          >
            <KeyValue margin="regular">
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>총 연체금액</KeyValueTitle>
                <KeyValueText>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1">999,999,999 원</div>
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
              <BasicBox theme="senary" :class="$style['contents']">
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>3회차 (2022.02.02)</KeyValueTitle>
                    <KeyValueText>99,999 원</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>4회차 (2022.01.02)</KeyValueTitle>
                    <KeyValueText>99,999 원</KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <NoticeText :classNames="{ wrap: 'row-margin-item-group' }"
                  >지연 배상금이 포함된 금액입니다.</NoticeText
                >
              </BasicBox>
            </UiAccordionLayer>
          </UiAccordionItem>
        </UiAccordion>
      </BasicBox>

      <ul :class="$style['logs']">
        <li :class="$style['logs__item']">
          <div :class="$style['logs__block']">
            <div :class="$style['logs__row']">
              <div div :class="$style['logs__contents']">
                <h3 class="text-body-1 font-weight-medium">결제/청구정보</h3>
              </div>
              <div div :class="$style['logs__right']">
                <button type="button" :class="$style['logs__link']">
                  <span :class="$style['logs__link-text']">상세보기</span>
                </button>
              </div>
            </div>

            <BasicHr
              type="contents"
              theme="quaternary"
              className="row-margin-contents-small"
            />

            <KeyValue margin="regular">
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>결제방법</KeyValueTitle>
                <KeyValueText>가상계좌</KeyValueText>
              </KeyValueItem>

              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>청구방법</KeyValueTitle>
                <KeyValueText>이메일</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </div>
        </li>
      </ul>
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/MyLoanDetailMedicalInstalment.scss';
</style>
