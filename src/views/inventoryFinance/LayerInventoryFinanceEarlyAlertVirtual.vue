<script>
// IF_M03_l003
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import BankLogo from '@/components/ui/imageData/BankLogo.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    FullPopup,
    FullPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
    PageTextGroup,
    PageMainText,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    NoticeText,
    BankLogo,
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
          <PopupTitle>중도상환 입금 예약 신청</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          입금 예약으로<br />
          <strong>중도상환 신청을 하시겠습니까?</strong>
        </PageMainText>
      </PageTextGroup>

      <BasicBox>
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <h3 class="text-body-1 font-weight-medium">운영자금대출</h3>
          </BasicBoxHeadLeft>
        </BasicBoxHead>

        <UiAccordion tagName="div">
          <KeyValue>
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>입금예정일자</KeyValueTitle>
              <KeyValueText>2021.03.04</KeyValueText>
            </KeyValueItem>
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>입금예정금액</KeyValueTitle>
              <KeyValueText>7,400,000 원</KeyValueText>
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
                <KeyValueTitle>계좌정보</KeyValueTitle>
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
                            <BankLogo size="small" code="004" />
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
                            <BankLogo size="small" code="011" />
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
                            <BankLogo size="small" code="020" />
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
                            <BankLogo size="small" code="081" />
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
                            <BankLogo size="small" code="088" />
                          </div>
                          <div class="flex-box__cell flex-box__cell--mini">
                            신한
                          </div>
                        </div>
                      </KeyValueTitle>
                      <KeyValueText>123-456-78901234</KeyValueText>
                    </KeyValueItem>
                  </KeyValue>
                </BasicBox>
              </div>
            </UiAccordionLayer>
          </UiAccordionItem>
          <KeyValue>
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>예금주</KeyValueTitle>
              <KeyValueText>하나상사(하나캐피탈)</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </UiAccordion>
      </BasicBox>

      <NoticeText :classNames="{ wrap: 'row-margin-item-group' }">
        가상계좌 입금 후 반드시<br />
        고객센터(1800-1110)로 연락바랍니다.
      </NoticeText>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">취소</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>신청</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/MyLoanDetailPaymentVirtual.scss';
</style>
