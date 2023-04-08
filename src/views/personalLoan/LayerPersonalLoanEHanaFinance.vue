<script>
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
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
  <UiLayer ref="layer" type="toast" :backgroundClose="true">
    <ToastPopup>
      <template v-slot:head>
        <ToastPopupHead>
          <PopupTitle>금융상품 안내에 동의해 주세요</PopupTitle>
        </ToastPopupHead>
      </template>

      <div :class="$style['agree-list']">
        <div :class="$style['agree-item']">
          <UiAccordion :classNames="{ wrap: $style['agree-list__depth'] }">
            <UiAccordionItem
              :classNames="{ item: $style['agree-list__depth-item'] }"
              :initialOpen="true"
            >
              <div :class="$style['agree-list__depth-head']">
                <CheckBox
                  id="layerPersonalLoanEHanaFinance001"
                  :classNames="{
                    wrap: $style['agree-list__checkbox'],
                  }"
                  theme="tertiary"
                >
                  <CheckBoxObject />
                  <CheckBoxLabelText>소득정보자동산출약관</CheckBoxLabelText>
                </CheckBox>
                <div :class="$style['agree-list__right']">
                  <UiAccordionOpener
                    :classNames="{
                      button: $style['agree-list__depth-opener'],
                    }"
                  />
                </div>
              </div>

              <UiAccordionLayer>
                <div :class="$style['agree-list__detail']">
                  <section>
                    <h3
                      class="text-body-4 row-margin-small color-gray-tertiary font-weight-medium"
                    >
                      금융상품 안내
                    </h3>
                    <p class="text-body-5 color-gray">
                      한도조회 및 대출신청 절차가 완료되지 못한 경우, 귀사가
                      본인에게 상담결과 및 금융상품 이용과 관련된 내용을 전화,
                      휴대폰 문자메시지 등으로 안내하는 것을 동의합니다.
                    </p>
                    <ul :class="[$style['basic-list'], 'row-margin-item']">
                      <li :class="$style['basic-list__item']">
                        <div
                          :class="[
                            $style['basic-list__symbol'],
                            'font-weight-medium',
                          ]"
                        >
                          1.
                        </div>
                        <div :class="$style['basic-list__content']">
                          <div class="font-weight-medium">
                            개인정보 수집 및 이용목적
                          </div>
                          <div class="row-margin-small">
                            한도조회, 대출신청, 심사, 신청중단 등의 경우, 전화,
                            문자메시지 등을 통한 안내 및 상담
                          </div>
                        </div>
                      </li>
                      <li :class="$style['basic-list__item']">
                        <div
                          :class="[
                            $style['basic-list__symbol'],
                            'font-weight-medium',
                          ]"
                        >
                          2.
                        </div>
                        <div :class="$style['basic-list__content']">
                          <div class="font-weight-medium">
                            수집하는 개인정보 항목
                          </div>
                          <div class="row-margin-small">
                            성명, 연락처, 전화번호
                          </div>
                        </div>
                      </li>
                      <li :class="$style['basic-list__item']">
                        <div
                          :class="[
                            $style['basic-list__symbol'],
                            'font-weight-medium',
                          ]"
                        >
                          3.
                        </div>
                        <div :class="$style['basic-list__content']">
                          <div class="font-weight-medium">보유 및 이용기간</div>
                          <div class="row-margin-small">
                            이용 동의일로부터 3개월 이내
                          </div>
                        </div>
                      </li>
                    </ul>
                  </section>
                </div>
              </UiAccordionLayer>
            </UiAccordionItem>
          </UiAccordion>
        </div>
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ToastPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/LayerPersonalLoanEHanaFinance.scss';
</style>
