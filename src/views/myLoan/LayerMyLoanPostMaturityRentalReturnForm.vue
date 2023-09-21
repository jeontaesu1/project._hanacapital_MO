<script>
// My_M08_l011
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    ButtonList,
    ButtonListItem,
    BasicButton,
    PageTextGroup,
    PageMainText,
    StepProgress,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BasicDatepicker,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicSelect,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
  },
  setup() {
    const state = reactive({
      dateError: false,
      nameError: false,
      phoneError: false,
      timeError: false,
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
          <PopupTitle>만기후처리 반환</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
        <StepProgress :total="3" :current="2" />
      </template>

      <PageTextGroup>
        <PageMainText>
          반환 정보를<br />
          입력해 주세요
        </PageMainText>
      </PageTextGroup>

      <div>
        <ul :class="[$style['basic-list'], 'row-margin-contents-group']">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              최대반환가능일자를 경과하여 반환하는 경우 반환지연금이 청구됩니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              반환 신청은 2영업일 이후 가능합니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              출고 후 설치하신 개인물품 모두 확인 및 제거후 반납해 주시기
              바랍니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              반환 시 탁송기사님께 인수 시 수령하신 키 전부를 반납해 주세요.
            </div>
          </li>
        </ul>

        <BasicBox>
          <KeyValue margin="regular">
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>최종결제일자</KeyValueTitle>
              <KeyValueText>2023.01.10</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>만기일자</KeyValueTitle>
              <KeyValueText>2023.01.10</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>최대반환가능일자</KeyValueTitle>
              <KeyValueText>2023.01.30</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>

        <FormList :classNames="{ wrap: 'row-margin-contents' }">
          <FormListItem
            titleText="반환예정일자"
            target="#layerMyLoanPostMaturityRentalReturnFormDateButton"
          >
            <FormInvalid :error="state.dateError">
              <InputBlock :error="state.dateError">
                <InputBlockCell :flexible="true">
                  <BasicDatepicker
                    title="반환예정일자"
                    id="layerMyLoanPostMaturityRentalReturnFormDate"
                    buttonId="layerMyLoanPostMaturityRentalReturnFormDateButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </div>

      <div class="row-margin-container-medium">
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">반환 담당자 정보</h3>

          <CheckBox
            id="layerMyLoanPostMaturityRentalReturnFormCheckBox001"
            theme="tertiary"
            :classNames="{
              wrap: 'row-margin-contents',
            }"
          >
            <CheckBoxObject />
            <CheckBoxLabelText>계약자 정보와 동일</CheckBoxLabelText>
          </CheckBox>

          <FormList>
            <FormListItem
              titleText="반환 담당자 이름"
              target="#layerMyLoanPostMaturityRentalReturnFormName"
            >
              <FormInvalid :error="state.nameError">
                <InputBlock :error="state.nameError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="반환 담당자 이름"
                      id="layerMyLoanPostMaturityRentalReturnFormName"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="휴대폰번호"
              target="#layerMyLoanPostMaturityRentalReturnFormPhoneButton001"
            >
              <FormInvalid :error="state.phoneError">
                <InputBlock :error="state.phoneError">
                  <InputBlockCell>
                    <BasicSelect
                      :option="[
                        {
                          value: '1',
                          text: 'SKT',
                        },
                        {
                          value: '2',
                          text: 'KT',
                        },
                        {
                          value: '3',
                          text: 'LG U+',
                        },
                        {
                          value: '4',
                          text: '알뜰폰 SKT',
                        },
                        {
                          value: '5',
                          text: '알뜰폰 KT',
                        },
                        {
                          value: '6',
                          text: '알뜰폰 LG +',
                        },
                      ]"
                      buttonTitle="통신사 선택하기"
                      layerTitle="통신사를 선택해 주세요"
                      id="layerMyLoanPostMaturityRentalReturnFormPhone001"
                      buttonId="layerMyLoanPostMaturityRentalReturnFormPhoneButton001"
                      :classNames="{
                        wrap: 'input-width-telecom',
                      }"
                    />
                  </InputBlockCell>
                  <InputBlockCell :flexible="true" margin="regular">
                    <BasicInput
                      type="number"
                      pattern="\d*"
                      title="휴대폰번호"
                      id="layerMyLoanPostMaturityRentalReturnFormPhone002"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">반환 요청 정보</h3>

          <FormList>
            <FormListItem
              titleText="반환요청 시간"
              target="#layerMyLoanPostMaturityRentalReturnFormTimeButton"
              :selectOnly="true"
            >
              <FormInvalid :error="state.timeError">
                <InputBlock :error="state.timeError">
                  <InputBlockCell :flexible="true">
                    <BasicSelect
                      :option="[
                        {
                          value: '1',
                          text: '9시',
                        },
                        {
                          value: '2',
                          text: '10시',
                        },
                        {
                          value: '3',
                          text: '11시',
                        },
                        {
                          value: '4',
                          text: '12시',
                        },
                        {
                          value: '5',
                          text: '13시',
                        },
                        {
                          value: '6',
                          text: '14시',
                        },
                        {
                          value: '7',
                          text: '15시',
                        },
                        {
                          value: '8',
                          text: '16시',
                        },
                        {
                          value: '9',
                          text: '17시',
                        },
                      ]"
                      buttonTitle="반환요청 시간 선택하기"
                      layerTitle="반환요청 시간을 선택해 주세요"
                      id="layerMyLoanPostMaturityRentalReturnFormTime"
                      buttonId="layerMyLoanPostMaturityRentalReturnFormTimeButton"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="반환요청 장소"
              :forceFocus="true"
              target="#layerMyLoanPostMaturityRentalReturnFormAddressSearch"
            >
              <FormInvalid :error="state.addressError">
                <InputBlock :error="state.addressError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="반환요청 장소 우편번호"
                      :disabled="true"
                      defaultValue="01000"
                    />
                  </InputBlockCell>
                  <template v-slot:right>
                    <BasicButton
                      size="mini"
                      theme="tertiary"
                      id="layerMyLoanPostMaturityRentalReturnFormAddressSearch"
                      >검색</BasicButton
                    >
                  </template>
                </InputBlock>
                <!-- DD : 주소 검색 및 입력 후 노출 -->
                <InputBlock
                  :error="state.addressError"
                  :classNames="{
                    wrap: 'row-margin-item-group row-margin-bottom-none',
                  }"
                >
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="반환요청 장소 도로명 주소"
                      :disabled="true"
                      defaultValue="인천 서구 에코로 181"
                    />
                  </InputBlockCell>
                </InputBlock>
                <InputBlock
                  :error="state.addressError"
                  :classNames="{
                    wrap: 'row-margin-item-group row-margin-bottom-none',
                  }"
                >
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="반환요청 장소 상세 주소"
                      :disabled="true"
                      defaultValue="하나금융 로비"
                    />
                  </InputBlockCell>
                </InputBlock>
                <!-- // DD : 주소 검색 및 입력 후 노출 -->
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>
        </section>
      </div>

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

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanPostMaturityRentalReturnForm.scss';
</style>
