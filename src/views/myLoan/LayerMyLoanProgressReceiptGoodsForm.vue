<script>
// PF_M10_l003
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    BoxCheckList,
    BoxCheckListItem,
    BoxCheck,
    BoxCheckLabel,
    BasicButton,
    ButtonList,
    ButtonListItem,
  },
  setup() {
    const state = reactive({
      phoneError: false,
      deliveryDateError: false,
      installDateError: false,
      addressError: false,
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
          물품수령정보를<br />
          <strong>확인해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <BoxCheckList>
        <BoxCheckListItem>
          <BoxCheck
            :minSide="true"
            name="layerMyLoanProgressReceiptGoodsFormType"
            id="layerMyLoanProgressReceiptGoodsFormType1"
            :defaultChecked="true"
          >
            <BoxCheckLabel>수령</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :minSide="true"
            name="layerMyLoanProgressReceiptGoodsFormType"
            id="layerMyLoanProgressReceiptGoodsFormType2"
          >
            <BoxCheckLabel>설치</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>

      <FormList class="row-margin-contents">
        <!-- Case : 수령 선택 시 노출 -->
        <FormListItem
          titleText="수령 휴대폰번호"
          target="#layerMyLoanProgressReceiptGoodsFormPhone"
        >
          <FormInvalid :error="state.phoneError">
            <InputBlock :error="state.phoneError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  pattern="\d*"
                  title="수령 휴대폰번호"
                  id="layerMyLoanProgressReceiptGoodsFormPhone"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="배송일자"
          titleOptionalText="(8자리)"
          target="#layerMyLoanProgressReceiptGoodsFormDeliveryDate"
        >
          <FormInvalid :error="state.deliveryDateError">
            <InputBlock :error="state.deliveryDateError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="배송일자 8자리"
                  id="layerMyLoanProgressReceiptGoodsFormDeliveryDate"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <FormHelpText>숫자만 입력해 주세요. (예:20230503)</FormHelpText>
          </FormInvalid>
        </FormListItem>
        <!-- // Case : 수령 선택 시 노출 -->

        <!-- Case : 설치 선택 시 노출 -->
        <FormListItem
          titleText="설치일자"
          titleOptionalText="(8자리)"
          target="#layerMyLoanProgressReceiptGoodsFormInstallDate"
        >
          <FormInvalid :error="state.installDateError">
            <InputBlock :error="state.installDateError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="설치일자 8자리"
                  id="layerMyLoanProgressReceiptGoodsFormInstallDate"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <FormHelpText>숫자만 입력해 주세요. (예:20230503)</FormHelpText>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="설치장소"
          target="#layerMyLoanProgressReceiptGoodsFormAddress001Search"
        >
          <FormInvalid :error="state.addressError">
            <InputBlock :error="state.addressError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="설치장소 - 우편번호"
                  defaultValue="06123"
                  :disabled="true"
                  id="layerMyLoanProgressReceiptGoodsFormAddress001"
                />
              </InputBlockCell>
              <template v-slot:right>
                <BasicButton
                  size="mini"
                  theme="tertiary"
                  id="layerMyLoanProgressReceiptGoodsFormAddress001Search"
                  >검색</BasicButton
                >
              </template>
            </InputBlock>
            <!-- Case: 주소 검색 및 입력 후 노출 -->
            <InputBlock
              :error="state.addressError"
              :disabled="true"
              :classNames="{
                wrap: 'row-margin-item-group row-margin-bottom-none',
              }"
            >
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="설치장소 - 주소"
                  id="layerMyLoanProgressReceiptGoodsFormAddress001_001"
                  defaultValue="서울 중구 을지로 35"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <InputBlock
              :error="state.addressError"
              :disabled="true"
              :classNames="{
                wrap: 'row-margin-item-group row-margin-bottom-none',
              }"
            >
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="설치장소 - 상세주소"
                  id="layerMyLoanProgressReceiptGoodsFormAddress001_002"
                  defaultValue="1205호"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <!-- // Case: 주소 검색 및 입력 후 노출 -->
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- // Case : 설치 선택 시 노출 -->
      </FormList>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">이전</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>다음</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
