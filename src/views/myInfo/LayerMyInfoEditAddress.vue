<script>
// MI_M01_l001
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
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';

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
    BasicButton,
    ButtonList,
    ButtonListItem,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
    BasicSelect,
  },
  setup() {
    const state = reactive({
      addressError001: false,
      addressError002: false,
      addressError003: false,
      addressError004: false,
      addressError005: false,
      addressError006: false,
      addressError007: false,
      addressError008: false,
      addressError009: false,
      addressError010: false,
      mailError001: false,
      mailError002: false,
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
          변경하실 주소지 정보를<br />
          <strong>입력하세요</strong>
        </PageMainText>
      </PageTextGroup>

      <div>
        <ul :class="$style['basic-list']">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              청구지의 주소를 확인하고 변경할 수 있어요.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              주소 변경 시, 각 계약별로 설정되어 있는 청구지 주소도 함께 변경
              돼요.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              각 계약별로 설정된 청구지 주소 확인은
              <span class="font-weight-medium">계약정보 > 결제/청구정보</span>
              메뉴를 이용하세요.
            </div>
          </li>
        </ul>
      </div>

      <FormList
        :classNames="{
          wrap: 'row-margin-contents-group',
        }"
      >
        <!-- Case : 개인 회원일 경우 노출 -->
        <FormListItem
          titleText="등본지"
          target="#layerMyInfoEditAddress001Search"
        >
          <FormInvalid :error="state.addressError001">
            <InputBlock :error="state.addressError001">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="등본지 - 우편번호"
                  defaultValue="12345"
                  :disabled="true"
                  id="layerMyInfoEditAddress001"
                />
              </InputBlockCell>
              <template v-slot:right>
                <BasicButton
                  size="mini"
                  theme="tertiary"
                  id="layerMyInfoEditAddress001Search"
                  >검색</BasicButton
                >
              </template>
            </InputBlock>
            <!-- Case: 주소 검색 및 입력 후 노출 -->
            <InputBlock
              :error="state.addressError001"
              :disabled="true"
              :classNames="{
                wrap: 'row-margin-item-group row-margin-bottom-none',
              }"
            >
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="등본지 - 주소"
                  id="layerMyInfoEditAddress001_001"
                  defaultValue="경기 성남시 분당구 중안공원로 20"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <InputBlock
              :error="state.addressError001"
              :disabled="true"
              :classNames="{
                wrap: 'row-margin-item-group row-margin-bottom-none',
              }"
            >
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="등본지- 상세주소"
                  id="llayerMyInfoEditAddress001_002"
                  defaultValue="하나아파트 853동 4590호"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <!-- // Case: 주소 검색 및 입력 후 노출 -->
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="실거주지"
          target="#layerMyInfoEditAddress002Search"
        >
          <FormInvalid :error="state.addressError002">
            <InputBlock :error="state.addressError002">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="실거주지 - 우편번호"
                  defaultValue="12345"
                  :disabled="true"
                  id="layerMyInfoEditAddress002"
                />
              </InputBlockCell>
              <template v-slot:right>
                <BasicButton
                  size="mini"
                  theme="tertiary"
                  id="layerMyInfoEditAddress002Search"
                  >검색</BasicButton
                >
              </template>
            </InputBlock>
            <!-- Case: 주소 검색 및 입력 후 노출 -->
            <InputBlock
              :error="state.addressError002"
              :disabled="true"
              :classNames="{
                wrap: 'row-margin-item-group row-margin-bottom-none',
              }"
            >
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="실거주지 - 주소"
                  id="layerMyInfoEditAddress002_001"
                  defaultValue="경기 성남시 분당구 중안공원로 20"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <InputBlock
              :error="state.addressError002"
              :disabled="true"
              :classNames="{
                wrap: 'row-margin-item-group row-margin-bottom-none',
              }"
            >
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="실거주지 - 상세주소"
                  id="llayerMyInfoEditAddress002_002"
                  defaultValue="하나아파트 853동 4590호"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <!-- // Case: 주소 검색 및 입력 후 노출 -->
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
          <CheckBox
            id="layerMyInfoEditAddressCheckBox001"
            theme="tertiary"
            :classNames="{
              wrap: 'row-margin-item',
            }"
          >
            <CheckBoxObject />
            <CheckBoxLabelText>등본지 주소와 동일</CheckBoxLabelText>
          </CheckBox>
        </FormListItem>

        <FormListItem
          titleText="직장주소"
          target="#layerMyInfoEditAddress003Search"
        >
          <FormInvalid :error="state.addressError003">
            <InputBlock :error="state.addressError003">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="직장주소 - 우편번호"
                  defaultValue="12345"
                  :disabled="true"
                  id="layerMyInfoEditAddressAddress003"
                />
              </InputBlockCell>
              <template v-slot:right>
                <BasicButton
                  size="mini"
                  theme="tertiary"
                  id="layerMyInfoEditAddress003Search"
                  >검색</BasicButton
                >
              </template>
            </InputBlock>
            <!-- Case: 주소 검색 및 입력 후 노출 -->
            <InputBlock
              :error="state.addressError003"
              :disabled="true"
              :classNames="{
                wrap: 'row-margin-item-group row-margin-bottom-none',
              }"
            >
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="직장주소 - 주소"
                  id="layerMyInfoEditAddress003_001"
                  defaultValue="경기 성남시 분당구 중안공원로 20"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <InputBlock
              :error="state.addressError003"
              :disabled="true"
              :classNames="{
                wrap: 'row-margin-item-group row-margin-bottom-none',
              }"
            >
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="직장주소 - 상세주소"
                  id="llayerMyInfoEditAddress003_002"
                  defaultValue="하나아파트 853동 4590호"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <!-- // Case: 주소 검색 및 입력 후 노출 -->
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="기타주소1"
          target="#layerMyInfoEditAddress004Search"
        >
          <FormInvalid :error="state.addressError004">
            <InputBlock :error="state.addressError004">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="기타주소1 - 우편번호"
                  defaultValue="12345"
                  :disabled="true"
                  id="layerMyInfoEditAddress004"
                />
              </InputBlockCell>
              <template v-slot:right>
                <BasicButton
                  size="mini"
                  theme="tertiary"
                  id="layerMyInfoEditAddress004Search"
                  >검색</BasicButton
                >
              </template>
            </InputBlock>
            <!-- Case: 주소 검색 및 입력 후 노출 -->
            <InputBlock
              :error="state.addressError004"
              :disabled="true"
              :classNames="{
                wrap: 'row-margin-item-group row-margin-bottom-none',
              }"
            >
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="기타주소1 - 주소"
                  id="layerMyInfoEditAddress004_001"
                  defaultValue="경기 성남시 분당구 중안공원로 20"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <InputBlock
              :error="state.addressError004"
              :disabled="true"
              :classNames="{
                wrap: 'row-margin-item-group row-margin-bottom-none',
              }"
            >
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="기타주소1 - 상세주소"
                  id="llayerMyInfoEditAddress004_002"
                  defaultValue="하나아파트 853동 4590호"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <!-- // Case: 주소 검색 및 입력 후 노출 -->
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="기타주소2"
          target="#layerMyInfoEditAddress005Search"
        >
          <FormInvalid :error="state.addressError005">
            <InputBlock :error="state.addressError005">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="기타주소2 - 우편번호"
                  defaultValue="12345"
                  :disabled="true"
                  id="layerMyInfoEditAddress005"
                />
              </InputBlockCell>
              <template v-slot:right>
                <BasicButton
                  size="mini"
                  theme="tertiary"
                  id="layerMyInfoEditAddress005Search"
                  >검색</BasicButton
                >
              </template>
            </InputBlock>
            <!-- Case: 주소 검색 및 입력 후 노출 -->
            <InputBlock
              :error="state.addressError005"
              :disabled="true"
              :classNames="{
                wrap: 'row-margin-item-group row-margin-bottom-none',
              }"
            >
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="기타주소2 - 주소"
                  id="layerMyInfoEditAddress005_001"
                  defaultValue="경기 성남시 분당구 중안공원로 20"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <InputBlock
              :error="state.addressError005"
              :disabled="true"
              :classNames="{
                wrap: 'row-margin-item-group row-margin-bottom-none',
              }"
            >
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="기타주소2 - 상세주소"
                  id="llayerMyInfoEditAddress005_002"
                  defaultValue="하나아파트 853동 4590호"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <!-- // Case: 주소 검색 및 입력 후 노출 -->
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="이메일"
          target="#layerMyInfoEditAddressEmailId001"
        >
          <FormInvalid :error="state.mailError001">
            <InputBlock :error="state.mailError001">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="이메일 아이디"
                  id="layerMyInfoEditAddressEmailId001"
                />
              </InputBlockCell>
              <InputBlockCell margin="regular">@</InputBlockCell>
              <InputBlockCell margin="regular" :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: 'naver.com',
                    },
                    {
                      value: '2',
                      text: 'hanmail.net',
                    },
                    {
                      value: '3',
                      text: 'gmail.com',
                    },
                    {
                      value: '4',
                      text: 'nate.com',
                    },
                    {
                      value: '5',
                      text: 'paran.com',
                    },
                    {
                      value: '6',
                      text: 'dreamwiz.com',
                    },
                    {
                      value: '7',
                      text: 'yahoo.com',
                    },
                    {
                      value: '8',
                      text: 'freechal.com',
                    },
                    {
                      value: '9',
                      text: '직접입력',
                    },
                  ]"
                  buttonTitle="이메일 도메인 선택하기"
                  layerTitle="도메인을 선택해 주세요"
                />
              </InputBlockCell>
            </InputBlock>
            <!-- Case : 직접입력 선택 시 노출 -->
            <InputBlock
              :error="state.mailError001"
              :classNames="{
                wrap: 'row-margin-item-group row-margin-bottom-none',
              }"
            >
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="이메일 도메인 직접입력"
                  id="layerMyInfoEditAddressEmailDomainSelf001"
                />
              </InputBlockCell>
            </InputBlock>
            <!-- // Case : 직접입력 선택 시 노출 -->
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- // Case : 개인 회원일 경우 노출 -->

        <!-- Case : 개인사업자/법인 회원일 경우 노출 -->
        <FormListItem
          titleText="사업장"
          target="#layerMyInfoEditAddress006Search"
        >
          <FormInvalid :error="state.addressError006">
            <InputBlock :error="state.addressError006">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="사업장 - 우편번호"
                  defaultValue="12345"
                  :disabled="true"
                  id="layerMyInfoEditAddress006"
                />
              </InputBlockCell>
              <template v-slot:right>
                <BasicButton
                  size="mini"
                  theme="tertiary"
                  id="layerMyInfoEditAddress006Search"
                  >검색</BasicButton
                >
              </template>
            </InputBlock>
            <!-- Case: 주소 검색 및 입력 후 노출 -->
            <InputBlock
              :error="state.addressError006"
              :disabled="true"
              :classNames="{
                wrap: 'row-margin-item-group row-margin-bottom-none',
              }"
            >
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="사업장 - 주소"
                  id="layerMyInfoEditAddress006_001"
                  defaultValue="서울 강남구 역삼동"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <InputBlock
              :error="state.addressError006"
              :disabled="true"
              :classNames="{
                wrap: 'row-margin-item-group row-margin-bottom-none',
              }"
            >
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="사업장 - 상세주소"
                  id="llayerMyInfoEditAddress006_002"
                  defaultValue="하나금융그룹 강남사옥 1층"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <!-- // Case: 주소 검색 및 입력 후 노출 -->
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="본점"
          target="#layerMyInfoEditAddress007Search"
        >
          <FormInvalid :error="state.addressError007">
            <InputBlock :error="state.addressError007">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="본점 - 우편번호"
                  defaultValue="12345"
                  :disabled="true"
                  id="layerMyInfoEditAddress007"
                />
              </InputBlockCell>
              <template v-slot:right>
                <BasicButton
                  size="mini"
                  theme="tertiary"
                  id="layerMyInfoEditAddressAddress007Search"
                  >검색</BasicButton
                >
              </template>
            </InputBlock>
            <!-- Case: 주소 검색 및 입력 후 노출 -->
            <InputBlock
              :error="state.addressError007"
              :disabled="true"
              :classNames="{
                wrap: 'row-margin-item-group row-margin-bottom-none',
              }"
            >
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="본점 - 주소"
                  id="layerMyInfoEditAddress007_001"
                  defaultValue="서울 강남구 역삼동"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <InputBlock
              :error="state.addressError007"
              :disabled="true"
              :classNames="{
                wrap: 'row-margin-item-group row-margin-bottom-none',
              }"
            >
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="본점 - 상세주소"
                  id="llayerMyInfoEditAddress007_002"
                  defaultValue="하나금융그룹 강남사옥 1층"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <!-- // Case: 주소 검색 및 입력 후 노출 -->
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
          <CheckBox
            id="layerMyInfoEditAddressCheckBox002"
            theme="tertiary"
            :classNames="{
              wrap: 'row-margin-item',
            }"
          >
            <CheckBoxObject />
            <CheckBoxLabelText>사업장 주소와 동일</CheckBoxLabelText>
          </CheckBox>
        </FormListItem>

        <FormListItem
          titleText="등본지"
          target="#layerMyInfoEditAddress008Search"
        >
          <FormInvalid :error="state.addressError008">
            <InputBlock :error="state.addressError008">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="등본지 - 우편번호"
                  defaultValue="12345"
                  :disabled="true"
                  id="layerMyInfoEditAddress008"
                />
              </InputBlockCell>
              <template v-slot:right>
                <BasicButton
                  size="mini"
                  theme="tertiary"
                  id="layerMyInfoEditAddress008Search"
                  >검색</BasicButton
                >
              </template>
            </InputBlock>
            <!-- Case: 주소 검색 및 입력 후 노출 -->
            <InputBlock
              :error="state.addressError008"
              :disabled="true"
              :classNames="{
                wrap: 'row-margin-item-group row-margin-bottom-none',
              }"
            >
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="등본지 - 주소"
                  id="layerMyInfoEditAddress008_001"
                  defaultValue="서울 강남구 역삼동"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <InputBlock
              :error="state.addressError008"
              :disabled="true"
              :classNames="{
                wrap: 'row-margin-item-group row-margin-bottom-none',
              }"
            >
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="등본지 - 상세주소"
                  id="llayerMyInfoEditAddress008_002"
                  defaultValue="하나금융그룹 강남사옥 1층"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <!-- // Case: 주소 검색 및 입력 후 노출 -->
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="실거주지"
          target="#layerMyInfoEditAddress009Search"
        >
          <FormInvalid :error="state.addressError009">
            <InputBlock :error="state.addressError009">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="실거주지 - 우편번호"
                  defaultValue="12345"
                  :disabled="true"
                  id="layerMyInfoEditAddress009"
                />
              </InputBlockCell>
              <template v-slot:right>
                <BasicButton
                  size="mini"
                  theme="tertiary"
                  id="layerMyInfoEditAddress009Search"
                  >검색</BasicButton
                >
              </template>
            </InputBlock>
            <!-- Case: 주소 검색 및 입력 후 노출 -->
            <InputBlock
              :error="state.addressError009"
              :disabled="true"
              :classNames="{
                wrap: 'row-margin-item-group row-margin-bottom-none',
              }"
            >
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="실거주지- 주소"
                  id="layerMyInfoEditAddress009_001"
                  defaultValue="서울 강남구 역삼동"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <InputBlock
              :error="state.addressError009"
              :disabled="true"
              :classNames="{
                wrap: 'row-margin-item-group row-margin-bottom-none',
              }"
            >
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="실거주지 - 상세주소"
                  id="llayerMyInfoEditAddress009_002"
                  defaultValue="하나금융그룹 강남사옥 1층"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <!-- // Case: 주소 검색 및 입력 후 노출 -->
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
          <CheckBox
            id="layerMyInfoEditAddressCheckBox003"
            theme="tertiary"
            :classNames="{
              wrap: 'row-margin-item',
            }"
          >
            <CheckBoxObject />
            <CheckBoxLabelText>등본지 주소와 동일</CheckBoxLabelText>
          </CheckBox>
        </FormListItem>

        <FormListItem
          titleText="기타주소"
          target="#layerMyInfoEditAddress010Search"
        >
          <FormInvalid :error="state.addressError010">
            <InputBlock :error="state.addressError010">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="기타주소 - 우편번호"
                  defaultValue="12345"
                  :disabled="true"
                  id="layerMyInfoEditAddress010"
                />
              </InputBlockCell>
              <template v-slot:right>
                <BasicButton
                  size="mini"
                  theme="tertiary"
                  id="layerMyInfoEditAddress010Search"
                  >검색</BasicButton
                >
              </template>
            </InputBlock>
            <!-- Case: 주소 검색 및 입력 후 노출 -->
            <InputBlock
              :error="state.addressError005"
              :disabled="true"
              :classNames="{
                wrap: 'row-margin-item-group row-margin-bottom-none',
              }"
            >
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="기타주소 - 주소"
                  id="layerMyInfoEditAddress010_001"
                  defaultValue="경기 성남시 분당구 중안공원로 20"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <InputBlock
              :error="state.addressError010"
              :disabled="true"
              :classNames="{
                wrap: 'row-margin-item-group row-margin-bottom-none',
              }"
            >
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="기타주소 - 상세주소"
                  id="llayerMyInfoEditAddress010_002"
                  defaultValue="하나아파트 853동 4590호"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
            <!-- // Case: 주소 검색 및 입력 후 노출 -->
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="이메일"
          target="#layerMyInfoEditAddressEmailId002"
        >
          <FormInvalid :error="state.mailError002">
            <InputBlock :error="state.mailError002">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="이메일 아이디"
                  id="layerMyInfoEditAddressEmailId002"
                />
              </InputBlockCell>
              <InputBlockCell margin="regular">@</InputBlockCell>
              <InputBlockCell margin="regular" :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: 'naver.com',
                    },
                    {
                      value: '2',
                      text: 'hanmail.net',
                    },
                    {
                      value: '3',
                      text: 'gmail.com',
                    },
                    {
                      value: '4',
                      text: 'nate.com',
                    },
                    {
                      value: '5',
                      text: 'paran.com',
                    },
                    {
                      value: '6',
                      text: 'dreamwiz.com',
                    },
                    {
                      value: '7',
                      text: 'yahoo.com',
                    },
                    {
                      value: '8',
                      text: 'freechal.com',
                    },
                    {
                      value: '9',
                      text: '직접입력',
                    },
                  ]"
                  buttonTitle="이메일 도메인 선택하기"
                  layerTitle="도메인을 선택해 주세요"
                />
              </InputBlockCell>
            </InputBlock>
            <!-- Case : 직접입력 선택 시 노출 -->
            <InputBlock
              :error="state.mailError"
              :classNames="{
                wrap: 'row-margin-item-group row-margin-bottom-none',
              }"
            >
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="이메일 도메인 직접입력"
                  id="layerMyInfoEditAddressEmailDomainSelf002"
                />
              </InputBlockCell>
            </InputBlock>
            <!-- // Case : 개인사업자/법인 회원일 경우 노출 -->
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

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
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myInfo/LayerMyInfoEditAddress.scss';
</style>
