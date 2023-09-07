<script>
// My_M01_p004 가상계좌
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
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

import LayerMyLoanPaymentVirtualNotice from '@/views/myLoan/LayerMyLoanPaymentVirtualNotice.vue';

import iconImportant from '@/assets/images/icon/important.svg?component';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    BasicBox,
    KeyValue,
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
    LayerMyLoanPaymentVirtualNotice,
    iconImportant,
  },
  setup() {
    const layer = ref(null);
    const layer001 = ref(null);

    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };

    return {
      layer,
      layer001,
      layer001Open,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="full" v-slot="layerSlotProps">
    <FullPopup>
      <template v-slot:head>
        <FullPopupHead>
          <PopupTitle>결제/청구정보</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <section class="row-margin-contents-small">
        <div class="flex-box row-margin-contents">
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

        <BasicBox>
          <UiAccordion tagName="div">
            <KeyValue>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>결제방법</KeyValueTitle>
                <KeyValueText>가상계좌</KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <UiAccordionItem
              tagName="div"
              :classNames="{
                item: 'row-margin-item-group',
              }"
              :initialOpen="true"
            >
              <KeyValue>
                <KeyValueItem :classNames="{ item: 'text-body-3' }">
                  <KeyValueTitle>계좌정보</KeyValueTitle>
                  <KeyValueText>
                    <div align="right">
                      <UiAccordionOpener
                        :classNames="{
                          button: $style['key-value-opener'],
                        }"
                      />
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
                          <CopyButton
                            text="신한 123-456-78901234-1234567890-12345"
                          >
                            123-456-78901234-1234567890-12345
                          </CopyButton>
                        </KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </BasicBox>
                </div>
              </UiAccordionLayer>
            </UiAccordionItem>
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
          <KeyValue margin="regular">
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
          </KeyValue>
        </BasicBox>
      </section>
    </FullPopup>
  </UiLayer>

  <LayerMyLoanPaymentVirtualNotice ref="layer001" />
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanDetailPaymentVirtual.scss';
</style>
