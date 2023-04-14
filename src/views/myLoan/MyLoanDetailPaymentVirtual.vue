<script>
// My_M01_p004 가상계좌
import { ref, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValueList from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import LayerMyLoanPaymentVirtualNotice from '@/views/myLoan/LayerMyLoanPaymentVirtualNotice.vue';

import IconCopy from '@/assets/images/icon/copy.svg?component';
import iconImportant from '@/assets/images/icon/important.svg?component';
import BankLogo001 from '@/assets/images/bank-logo/004.svg?component';
import BankLogo002 from '@/assets/images/bank-logo/011.svg?component';
import BankLogo003 from '@/assets/images/bank-logo/020.svg?component';
import BankLogo004 from '@/assets/images/bank-logo/081.svg?component';
import BankLogo005 from '@/assets/images/bank-logo/088.svg?component';

export default {
  components: {
    PageContents,
    BasicBox,
    KeyValueList,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    TextButton,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    LayerMyLoanPaymentVirtualNotice,
    IconCopy,
    iconImportant,
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

    const layer001 = ref(null);

    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '결제/청구정보');
      store.ui.header.setLeftButtons(() => []);
      store.ui.header.setRightButtons(() => ['close']);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });

    return {
      layer001,
      layer001Open,
    };
  },
};
</script>

<template>
  <PageContents>
    <div class="row-margin-contents-small">
      <div class="flex-box">
        <div class="flex-box__cell flex-1">
          <h3 class="text-title-2">결제정보</h3>
        </div>
        <div class="flex-box__cell">
          <TextButton theme="quaternary" @click="layer001Open">
            가상계좌 유의사항
            <template v-slot:rightIcon>
              <iconImportant />
            </template>
          </TextButton>
        </div>
      </div>

      <BasicBox class="row-margin-contents">
        <UiAccordion
          tagName="div"
          :classNames="{ wrap: $style['detail-accordion'] }"
        >
          <KeyValueList>
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>결제방법</KeyValueTitle>
              <KeyValueText>가상계좌</KeyValueText>
            </KeyValueItem>
          </KeyValueList>

          <UiAccordionItem
            tagName="div"
            :classNames="{
              item: [$style['detail-accordion__item'], 'row-margin-item-group'],
            }"
          >
            <KeyValueList
              :classNames="{
                title: $style['account'],
              }"
            >
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle
                  :classNames="{
                    title: $style['account__title'],
                  }"
                  >계좌정보</KeyValueTitle
                >
                <KeyValueText
                  :classNames="{
                    title: $style['account__text'],
                  }"
                >
                  <div :class="$style['detail-accordion__text']">
                    <div :class="$style['account__num']">
                      하나 123-456-7890123
                    </div>
                    <button
                      type="button"
                      :class="[
                        $style['account__copy'],
                        $style['account__copy--small-margin'],
                      ]"
                    >
                      <span class="for-a11y">복사하기</span>
                      <IconCopy />
                    </button>
                    <UiAccordionOpener
                      :classNames="{
                        button: $style['detail-accordion__opener'],
                      }"
                    />
                  </div>
                </KeyValueText>
              </KeyValueItem>
            </KeyValueList>

            <UiAccordionLayer>
              <div :class="[$style['detail-accordion__contents']]">
                <BasicBox theme="tertiary">
                  <KeyValueList
                    align="left"
                    margin="regular"
                    size="regular"
                    :classNames="{ wrap: $style['account'] }"
                  >
                    <KeyValueItem
                      :classNames="{
                        item: 'text-body-3',
                      }"
                    >
                      <KeyValueTitle
                        :classNames="{
                          title: $style['account__title'],
                        }"
                      >
                        <div :class="$style['account__logo']">
                          <BankLogo001 />
                        </div>
                        국민
                      </KeyValueTitle>
                      <KeyValueText
                        :classNames="{
                          text: $style['account__text'],
                        }"
                      >
                        <div :class="$style['account__num']">
                          123-456-78901234
                        </div>
                        <button type="button" :class="$style['account__copy']">
                          <span class="for-a11y">복사하기</span>
                          <IconCopy />
                        </button>
                      </KeyValueText>
                    </KeyValueItem>
                    <KeyValueItem
                      :classNames="{
                        item: 'text-body-3',
                      }"
                    >
                      <KeyValueTitle
                        :classNames="{
                          title: $style['account__title'],
                        }"
                      >
                        <div :class="$style['account__logo']">
                          <BankLogo002 />
                        </div>
                        농협
                      </KeyValueTitle>
                      <KeyValueText
                        :classNames="{
                          text: $style['account__text'],
                        }"
                      >
                        <div :class="$style['account__num']">
                          123-456-78901234
                        </div>
                        <button type="button" :class="$style['account__copy']">
                          <span class="for-a11y">복사하기</span>
                          <IconCopy />
                        </button>
                      </KeyValueText>
                    </KeyValueItem>
                    <KeyValueItem
                      :classNames="{
                        item: 'text-body-3',
                      }"
                    >
                      <KeyValueTitle
                        :classNames="{
                          title: $style['account__title'],
                        }"
                      >
                        <div :class="$style['account__logo']">
                          <BankLogo003 />
                        </div>
                        농협
                      </KeyValueTitle>
                      <KeyValueText
                        :classNames="{
                          text: $style['account__text'],
                        }"
                      >
                        <div :class="$style['account__num']">
                          123-456-78901234
                        </div>
                        <button type="button" :class="$style['account__copy']">
                          <span class="for-a11y">복사하기</span>
                          <IconCopy />
                        </button>
                      </KeyValueText>
                    </KeyValueItem>
                    <KeyValueItem
                      :classNames="{
                        item: 'text-body-3',
                      }"
                    >
                      <KeyValueTitle
                        :classNames="{
                          title: $style['account__title'],
                        }"
                      >
                        <div :class="$style['account__logo']">
                          <BankLogo004 />
                        </div>
                        하나
                      </KeyValueTitle>
                      <KeyValueText
                        :classNames="{
                          text: $style['account__text'],
                        }"
                      >
                        <div :class="$style['account__num']">
                          123-456-78901234
                        </div>
                        <button type="button" :class="$style['account__copy']">
                          <span class="for-a11y">복사하기</span>
                          <IconCopy />
                        </button>
                      </KeyValueText>
                    </KeyValueItem>
                    <KeyValueItem
                      :classNames="{
                        item: 'text-body-3',
                      }"
                    >
                      <KeyValueTitle
                        :classNames="{
                          title: $style['account__title'],
                        }"
                      >
                        <div :class="$style['account__logo']">
                          <BankLogo005 />
                        </div>
                        신한
                      </KeyValueTitle>
                      <KeyValueText
                        :classNames="{
                          text: $style['account__text'],
                        }"
                        ><div :class="$style['account__num']">
                          123-456-78901234-11111111111111111111111
                        </div>
                        <button type="button" :class="$style['account__copy']">
                          <span class="for-a11y">복사하기</span>
                          <IconCopy />
                        </button>
                      </KeyValueText>
                    </KeyValueItem>
                  </KeyValueList>
                </BasicBox>
              </div>
            </UiAccordionLayer>
          </UiAccordionItem>
        </UiAccordion>
      </BasicBox>
    </div>

    <div class="row-margin-contents-small">
      <div class="flex-box">
        <div class="flex-box__cell flex-1">
          <h3 class="text-title-2">청구정보</h3>
        </div>
        <div class="flex-box__cell">
          <TextButton
            :classNames="{ text: ['color-gray', 'text-body-4'] }"
            underline="true"
            >변경</TextButton
          >
        </div>
      </div>

      <BasicBox class="row-margin-contents">
        <KeyValueList>
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>청구방법</KeyValueTitle>
            <KeyValueText>이메일</KeyValueText>
          </KeyValueItem>
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>청구지</KeyValueTitle>
            <KeyValueText>집</KeyValueText>
          </KeyValueItem>
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>주소</KeyValueTitle>
            <KeyValueText>서울 서대문구 연희맛로 26 (흡층흔)</KeyValueText>
          </KeyValueItem>
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>연락처</KeyValueTitle>
            <KeyValueText>-</KeyValueText>
          </KeyValueItem>
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>휴대전화</KeyValueTitle>
            <KeyValueText>010-1234-5678</KeyValueText>
          </KeyValueItem>
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>이메일</KeyValueTitle>
            <KeyValueText>hana@test.com</KeyValueText>
          </KeyValueItem>
        </KeyValueList>
      </BasicBox>
    </div>

    <LayerMyLoanPaymentVirtualNotice ref="layer001" />
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/MyLoanDetailPaymentVirtual.scss';
</style>
