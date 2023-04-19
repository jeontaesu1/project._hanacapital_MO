<script>
// My_M01_p004 자동이체계좌
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
import CopyButton from '@/components/ui/button/CopyButton.vue';
import BankLogo from '@/components/ui/imageData/BankLogo.vue';

import LayerMyLoanPaymentAutoNotice from '@/views/myLoan/LayerMyLoanPaymentAutoNotice.vue';

import iconImportant from '@/assets/images/icon/important.svg?component';

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
    CopyButton,
    BankLogo,
    LayerMyLoanPaymentAutoNotice,
    iconImportant,
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
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
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
    <section class="row-margin-contents-small">
      <div class="flex-box row-margin-contents">
        <div class="flex-box__cell flex-1">
          <h3 class="text-title-2">결제정보</h3>
        </div>
        <div class="flex-box__cell">
          <TextButton theme="quaternary" @click="layer001Open">
            자동이체계좌 유의사항
            <template v-slot:rightIcon>
              <iconImportant />
            </template>
          </TextButton>
        </div>
      </div>

      <BasicBox>
        <UiAccordion>
          <KeyValueList margin="regular">
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>결제방법</KeyValueTitle>
              <KeyValueText>자동이체</KeyValueText>
            </KeyValueItem>
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>결제방법</KeyValueTitle>
              <KeyValueText>
                <div class="flex-box">
                  <div class="flex-box__cell flex-1">하나 123-456-7890123</div>
                  <div class="flex-box__cell">
                    <TextButton
                      :classNames="{ text: ['color-gray', 'text-body-4'] }"
                      underline="true"
                    >
                      변경
                    </TextButton>
                  </div>
                </div>
              </KeyValueText>
            </KeyValueItem>
          </KeyValueList>
        </UiAccordion>
      </BasicBox>
    </section>

    <section class="row-margin-contents-small">
      <div class="flex-box row-margin-contents">
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

      <BasicBox>
        <KeyValueList margin="regular">
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

      <UiAccordion
        tagName="div"
        :classNames="{
          wrap: 'row-margin-contents',
        }"
      >
        <UiAccordionItem tagName="section">
          <BasicBox theme="quinary">
            <div class="flex-box">
              <div class="flex-box__cell flex-1">
                <h4 class="text-body-1 font-weight-medium">가상계좌 정보</h4>
              </div>
              <div class="flex-box__cell">
                <UiAccordionOpener />
              </div>
            </div>
          </BasicBox>

          <UiAccordionLayer>
            <div :class="$style['account-contents']">
              <KeyValueList align="left" margin="regular" size="regular">
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>
                    <div class="flex-box">
                      <div class="flex-box__cell">
                        <BankLogo size="small" code="004" />
                      </div>
                      <div class="flex-box__cell flex-box__cell--mini">
                        국민
                      </div>
                    </div>
                  </KeyValueTitle>
                  <KeyValueText>
                    <CopyButton text="국민 123-456-78901234">
                      123-456-78901234
                    </CopyButton>
                  </KeyValueText>
                </KeyValueItem>
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>
                    <div class="flex-box">
                      <div class="flex-box__cell">
                        <BankLogo size="small" code="011" />
                      </div>
                      <div class="flex-box__cell flex-box__cell--mini">
                        농협
                      </div>
                    </div>
                  </KeyValueTitle>
                  <KeyValueText>
                    <CopyButton text="농협 123-456-78901234">
                      123-456-78901234
                    </CopyButton>
                  </KeyValueText>
                </KeyValueItem>
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>
                    <div class="flex-box">
                      <div class="flex-box__cell">
                        <BankLogo size="small" code="020" />
                      </div>
                      <div class="flex-box__cell flex-box__cell--mini">
                        우리
                      </div>
                    </div>
                  </KeyValueTitle>
                  <KeyValueText>
                    <CopyButton text="우리 123-456-78901234">
                      123-456-78901234
                    </CopyButton>
                  </KeyValueText>
                </KeyValueItem>
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>
                    <div class="flex-box">
                      <div class="flex-box__cell">
                        <BankLogo size="small" code="081" />
                      </div>
                      <div class="flex-box__cell flex-box__cell--mini">
                        하나
                      </div>
                    </div>
                  </KeyValueTitle>
                  <KeyValueText>
                    <CopyButton text="하나 123-456-78901234">
                      123-456-78901234
                    </CopyButton>
                  </KeyValueText>
                </KeyValueItem>
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>
                    <div class="flex-box">
                      <div class="flex-box__cell">
                        <BankLogo size="small" code="088" />
                      </div>
                      <div class="flex-box__cell flex-box__cell--mini">
                        신한
                      </div>
                    </div>
                  </KeyValueTitle>
                  <KeyValueText>
                    <CopyButton text="신한 123-456-78901234-1234567890-12345">
                      123-456-78901234-1234567890-12345
                    </CopyButton>
                  </KeyValueText>
                </KeyValueItem>
              </KeyValueList>
            </div>
          </UiAccordionLayer>
        </UiAccordionItem>
      </UiAccordion>
    </section>

    <LayerMyLoanPaymentAutoNotice ref="layer001" />
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/MyLoanDetailPaymentAuto.scss';
</style>
