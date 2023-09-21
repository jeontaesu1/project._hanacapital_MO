<script>
// MI_M01_l007
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import ExtendSelect from '@/components/ui/form/ExtendSelect.vue';
import ExtendSelectOption from '@/components/ui/form/ExtendSelectOption.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    ButtonList,
    ButtonListItem,
    BasicButton,
    PageTextGroup,
    PageMainText,
    PageSubText,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicInput,
    BasicSelect,
    InputBlock,
    InputBlockCell,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    NoticeText,
    TextButton,
    ExtendSelect,
    ExtendSelectOption,
  },
  setup() {
    const state = reactive({
      billingMethodSelectError: false,
      phoneError: false,
      addressError: false,
      mailError: false,
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
          변경할 청구지 정보를<br />
          입력하세요
        </PageMainText>
        <PageSubText>
          선택하신 계약 기준, 청구 정보를 변경할 수 있습니다.
        </PageSubText>
      </PageTextGroup>

      <FormList>
        <FormListItem
          titleText="청구방법"
          target="#layerMyInfoBillingEditBillingMethodButton"
          :selectOnly="true"
        >
          <FormInvalid :error="state.billingMethodSelectError">
            <InputBlock :error="state.billingMethodSelectError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '미발송',
                    },
                    {
                      value: '2',
                      text: '온라인(SMS)',
                    },
                    {
                      value: '3',
                      text: '우편',
                    },
                    {
                      value: '4',
                      text: '이메일',
                    },
                    {
                      value: '5',
                      text: '우편+이메일',
                    },
                    {
                      value: '6',
                      text: '우편(지속)',
                    },
                  ]"
                  buttonTitle="청구방법 선택하기"
                  layerTitle="청구방법을 선택해 주세요"
                  id="layerMyInfoBillingEditBillingMethodSelect"
                  buttonId="layerMyInfoBillingEditBillingMethodButton"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <!-- Case : 우편 + 이메일, 우편(지속) 선택 시  -->
        <!-- Case : 우편 선택 시  -->
        <FormListItem
          titleText="청구지"
          target="#layerMyInfoBillingEditAddressButton"
          :selectOnly="true"
        >
          <FormInvalid :error="state.addressError">
            <InputBlock :error="state.addressError">
              <InputBlockCell :flexible="true">
                <ExtendSelect
                  buttonTitle="청구지 선택하기"
                  layerTitle="청구지를 선택해 주세요"
                  buttonId="layerMyInfoBillingEditAddressButton"
                >
                  <div :class="$style['icon-buttons']">
                    <ul :class="$style['icon-buttons__list']">
                      <li :class="$style['icon-buttons__item']">
                        <ExtendSelectOption
                          value="1"
                          text="사업장"
                          :classNames="{
                            option: $style['icon-buttons__block'],
                          }"
                        >
                          <span :class="$style['icon-buttons__content']">
                            <span :class="$style['icon-buttons__title']">
                              사업장<br />
                              (22742 인천 서구 에코로 181
                              하나금융그룹통합데이터센터)
                            </span>
                          </span>
                        </ExtendSelectOption>
                      </li>
                      <li :class="$style['icon-buttons__item']">
                        <ExtendSelectOption
                          value="2"
                          text="본점"
                          :classNames="{
                            option: $style['icon-buttons__block'],
                          }"
                        >
                          <span :class="$style['icon-buttons__content']">
                            <span :class="$style['icon-buttons__title']">
                              본점<br />
                              (22742 인천 서구 에코로 181
                              하나금융그룹통합데이터센터)
                            </span>
                          </span>
                        </ExtendSelectOption>
                      </li>
                      <li :class="$style['icon-buttons__item']">
                        <ExtendSelectOption
                          value="3"
                          text="등본지"
                          :classNames="{
                            option: $style['icon-buttons__block'],
                          }"
                        >
                          <span :class="$style['icon-buttons__content']">
                            <span :class="$style['icon-buttons__title']">
                              등본지<br />
                              (22742 인천 서구 에코로 181
                              하나금융그룹통합데이터센터)
                            </span>
                          </span>
                        </ExtendSelectOption>
                      </li>
                      <li :class="$style['icon-buttons__item']">
                        <ExtendSelectOption
                          value="4"
                          text="실거주지"
                          :classNames="{
                            option: $style['icon-buttons__block'],
                          }"
                        >
                          <span :class="$style['icon-buttons__content']">
                            <span :class="$style['icon-buttons__title']">
                              실거주지<br />
                              (22742 인천 서구 에코로 181
                              하나금융그룹통합데이터센터)
                            </span>
                          </span>
                        </ExtendSelectOption>
                      </li>
                      <li :class="$style['icon-buttons__item']">
                        <ExtendSelectOption
                          value="5"
                          text="기타주소"
                          :classNames="{
                            option: $style['icon-buttons__block'],
                          }"
                        >
                          <span :class="$style['icon-buttons__content']">
                            <span :class="$style['icon-buttons__title']">
                              기타주소<br />
                              (22742 인천 서구 에코로 181
                              하나금융그룹통합데이터센터)
                            </span>
                          </span>
                        </ExtendSelectOption>
                      </li>
                    </ul>
                  </div>
                </ExtendSelect>
              </InputBlockCell>
            </InputBlock>

            <!-- Case : 청구지 선택 후 노출 -->
            <InputBlock
              :error="state.addressError"
              :classNames="{
                wrap: 'row-margin-item-group row-margin-bottom-none',
              }"
            >
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="청구지 주소"
                  id="layerMyInfoBillingEditAddress001"
                  :disabled="true"
                  defaultValue="22742 인천 서구 에코로 181 하나금융그룹통합데이터센터"
                />
              </InputBlockCell>
            </InputBlock>
            <!-- //Case : 청구지 선택 후 노출 -->
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- //Case : 우편 선택 시  -->

        <!-- Case : 이메일 선택시 -->
        <FormListItem titleText="이메일" target="#layerMyInfoBillingEditEmail">
          <FormInvalid :error="state.mailError">
            <InputBlock :error="state.mailError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: 'hanacapital@test.com',
                    },
                    {
                      value: '2',
                      text: 'hanacapital@test.com',
                    },
                    {
                      value: '3',
                      text: 'hanacapital@test.com',
                    },
                  ]"
                  buttonTitle="이메일 주소 선택하기"
                  layerTitle="이메일 주소를 선택해 주세요"
                  buttonId="layerMyInfoBillingEditEmail"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- //Case : 이메일 선택시 -->
        <!-- //Case : 우편 + 이메일, 우편(지속) 선택 시  -->

        <FormListItem titleText="SMS수신" :forceFocus="true">
          <BoxCheckList>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerMyInfoBillingEditSms"
                id="layerMyInfoBillingEditSms001"
              >
                <BoxCheckLabel>수신</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerMyInfoBillingEditSms"
                id="layerMyInfoBillingEditSms002"
              >
                <BoxCheckLabel>미수신</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
        </FormListItem>

        <FormListItem
          titleText="휴대폰번호"
          target="#layerMyInfoBillingEditPhoneSelectButton"
          :selectOnly="true"
        >
          <FormInvalid :error="state.phoneError">
            <InputBlock :error="state.phoneError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '010-1234-****',
                    },
                    {
                      value: '2',
                      text: '010-1234-****',
                    },
                  ]"
                  buttonTitle="휴대폰번호 선택하기"
                  layerTitle="휴대폰번호를 선택해 주세요"
                  id="layerMyInfoBillingEditPhoneSelect"
                  buttonId="layerMyInfoBillingEditPhoneSelectButton"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <div class="flex-box row-margin-contents">
        <div class="flex-box__cell flex-1">
          <NoticeText>주소,연락처,이메일이 변경되었나요?</NoticeText>
        </div>
        <div class="flex-box__cell">
          <div class="inline-wrap">
            <TextButton theme="secondary" :underline="true"
              >내정보 관리</TextButton
            >
          </div>
        </div>
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>변경</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myInfo/LayerMyInfoBillingEdit.scss';
</style>
