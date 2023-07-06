<script>
// BF_M06_l006
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    PageTextGroup,
    PageMainText,
    FormList,
    FormListItem,
    FormInvalid,
    BoxCheckList,
    BoxCheckListItem,
    BoxCheck,
    BoxCheckLabel,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicInput,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BasicHr,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    NoticeText,
  },
  setup() {
    const state = reactive({
      productError: false,
      priceError: false,
      periodError: false,
      depositError001: false,
      depositError002: false,
      depositMedicalError: false,
      depositScreenError: false,
      principalError: false,
      principaAmountlError: false,
    });

    const layer = ref(null);

    return {
      state,
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
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          <strong>원하시는 할부금융 조건을</strong><br />
          입력해 주세요
        </PageMainText>
      </PageTextGroup>

      <div>
        <FormList>
          <FormListItem
            titleText="신청금액"
            target="#layerBusinessEquipmentLeaseEstimateName"
          >
            <FormInvalid :error="state.priceError">
              <InputBlock :error="state.priceError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    align="right"
                    title="신청금액"
                    id="layerBusinessEquipmentLeaseEstimateName"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>
                  <div class="text-body-3">원</div>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="이용 기간 선택" :forceFocus="true">
            <FormInvalid :error="state.principalError">
              <BoxCheckList
                :wrap="true"
                col="3"
                :classNames="{ wrap: 'row-margin-item-group' }"
              >
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="layerBusinessEquipmentLeaseEstimateCheckList005"
                    id="layerBusinessEquipmentLeaseEstimateCheckList005_001"
                    :defaultChecked="true"
                  >
                    <BoxCheckLabel>12개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="layerBusinessEquipmentLeaseEstimateCheckList005"
                    id="layerBusinessEquipmentLeaseEstimateCheckList005_002"
                  >
                    <BoxCheckLabel>15개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="layerBusinessEquipmentLeaseEstimateCheckList005"
                    id="layerBusinessEquipmentLeaseEstimateCheckList005_003"
                  >
                    <BoxCheckLabel>20개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="layerBusinessEquipmentLeaseEstimateCheckList005"
                    id="layerBusinessEquipmentLeaseEstimateCheckList005_004"
                  >
                    <BoxCheckLabel>24개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="layerBusinessEquipmentLeaseEstimateCheckList005"
                    id="layerBusinessEquipmentLeaseEstimateCheckList005_005"
                  >
                    <BoxCheckLabel>36개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="layerBusinessEquipmentLeaseEstimateCheckList005"
                    id="layerBusinessEquipmentLeaseEstimateCheckList005_006"
                  >
                    <BoxCheckLabel>직접입력</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>

              <InputBlock :error="state.principaAmountlError" :disabled="true">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    align="right"
                    :useDelete="false"
                    pattern="\d*"
                    title="유예원금"
                    id="layerBusinessEquipmentLeaseEstimateCheckListDepositScreen02"
                    defaultValue="10,002,120"
                    :disabled="true"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>
                  <div class="text-body-3">원</div>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
          <!-- // Case : '스크린골프' 선택 시 노출 -->
        </FormList>

        <BasicButton
          :line="true"
          :classNames="{ wrap: 'row-margin-contents-group' }"
        >
          계산하기
        </BasicButton>
      </div>

      <!-- Case : 견적계산 누른 후 노출 -->
      <BasicHr className="row-margin-container-medium" />

      <section>
        <h3 class="text-title-2 row-margin-contents">견적계산 결과</h3>

        <BasicBox>
          <KeyValue margin="regular">
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>상환금리</KeyValueTitle>
              <KeyValueText>0.0%</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>월할부료</KeyValueTitle>
              <KeyValueText>약 2,000,000 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
        <NoticeText
          :classNames="{ wrap: 'color-red' }"
          class="row-margin-contents"
        >
          상담신청 이전에 꼭 신분증, 의사면허증, 사업자등록증, 자동이체통장
          이미지를 준비해 주세요.
        </NoticeText>
      </section>
      <!-- // Case : 견적계산 누른 후 노출 -->

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>상담 신청</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/business/LayerBusinessEquipmentLeaseEstimate.scss';
</style>
