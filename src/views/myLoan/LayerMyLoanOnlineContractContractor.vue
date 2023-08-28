<script>
// My_M03_l016
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
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
    PageTextGroup,
    PageMainText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    StepProgress,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BasicSelect,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
  },
  setup() {
    const state = reactive({
      phoneError001: false,
      phoneError002: false,
      phoneError003: false,
      phoneError004: false,
      addressError001: false,
      addressError002: false,
      addressError003: false,
      addressError004: false,
      addressError005: false,
      addressError006: false,
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
          <PopupTitle>온라인약정</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
        <StepProgress :total="8" :current="3" />
      </template>

      <PageTextGroup>
        <PageMainText>
          <strong>계약자 정보를</strong><br />
          입력해 주세요
        </PageMainText>
      </PageTextGroup>

      <div>
        <section>
          <h3 class="text-title-2 row-margin-contents">개인 정보</h3>
          <FormList>
            <FormListItem
              titleText="휴대폰번호"
              target="#layerMyLoanOnlineContractContractorPhone001"
            >
              <FormInvalid :error="state.phoneError001">
                <InputBlock :error="state.phoneError001">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      pattern="\d*"
                      title="휴대폰번호"
                      id="layerMyLoanOnlineContractContractorPhone001"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <!-- Case : 기본 (리스, 렌트, 신차, 중고차 외) -->
            <FormListItem
              titleText="자택주소"
              target="#layerMyLoanOnlineContractContractorAddress001Search"
            >
              <FormInvalid :error="state.addressError001">
                <InputBlock :error="state.addressError001">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="자택주소 - 우편번호"
                      defaultValue="01001"
                      :disabled="true"
                      id="layerMyLoanOnlineContractContractorAddress001"
                    />
                  </InputBlockCell>
                  <template v-slot:right>
                    <BasicButton
                      size="mini"
                      theme="tertiary"
                      id="layerMyLoanOnlineContractContractorAddress001Search"
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
                      title="자택주소 - 주소"
                      id="layerMyLoanOnlineContractContractorAddress001_001"
                      defaultValue="인천 서구 청라동 123"
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
                      title="자택주소 - 상세주소"
                      id="layerMyLoanOnlineContractContractorAddress001_002"
                      defaultValue="자이아파트 101동 1001호"
                      :disabled="true"
                    />
                  </InputBlockCell>
                </InputBlock>
                <!-- // Case: 주소 검색 및 입력 후 노출 -->
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
            <!-- // Case : 기본 (리스, 렌트, 신차, 중고차 외) -->

            <!-- Case : 리스, 렌트, 신차 -->
            <FormListItem
              titleText="등본지"
              target="#layerMyLoanOnlineContractContractorAddress002Search"
            >
              <FormInvalid :error="state.addressError002">
                <InputBlock :error="state.addressError002">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="등본지 주소 - 우편번호"
                      defaultValue="01001"
                      :disabled="true"
                      id="layerMyLoanOnlineContractContractorAddress002"
                    />
                  </InputBlockCell>
                  <template v-slot:right>
                    <BasicButton
                      size="mini"
                      theme="tertiary"
                      id="layerMyLoanOnlineContractContractorAddress002Search"
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
                      title="등본지 - 주소"
                      id="layerMyLoanOnlineContractContractorAddress002_001"
                      defaultValue="인천 서구 청라동 123"
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
                      title="등본지 - 상세주소"
                      id="layerMyLoanOnlineContractContractorAddress002_002"
                      defaultValue="자이아파트 101동 1001호"
                      :disabled="true"
                    />
                  </InputBlockCell>
                </InputBlock>
                <!-- // Case: 주소 검색 및 입력 후 노출 -->
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
            <!-- // Case : 리스, 렌트, 신차 -->

            <!-- Case : 리스, 렌트, 신차, 중고차 -->
            <FormListItem
              titleText="실거주지"
              target="#layerMyLoanOnlineContractContractorAddress003Search"
            >
              <FormInvalid :error="state.addressError003">
                <InputBlock :error="state.addressError003">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="실거주지 주소 - 우편번호"
                      defaultValue="12345"
                      :disabled="true"
                      id="layerMyLoanOnlineContractContractorAddress003"
                    />
                  </InputBlockCell>
                  <template v-slot:right>
                    <BasicButton
                      size="mini"
                      theme="tertiary"
                      id="layerMyLoanOnlineContractContractorAddress003Search"
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
                      title="실거주지 - 주소"
                      id="layerMyLoanOnlineContractContractorAddress003_001"
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
                      title="실거주지 - 상세주소"
                      id="layerMyLoanOnlineContractContractorAddress003_002"
                      defaultValue="하나아파트 853동 4590호"
                      :disabled="true"
                    />
                  </InputBlockCell>
                </InputBlock>
                <!-- // Case: 주소 검색 및 입력 후 노출 -->
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
              <!-- Case : 리스, 렌트, 신차 -->
              <div class="row-margin-item-regular">
                <CheckBox
                  id="layerMyLoanOnlineContractContractorAddress003Check"
                  theme="tertiary"
                >
                  <CheckBoxObject />
                  <CheckBoxLabelText>등본지 주소와 동일</CheckBoxLabelText>
                </CheckBox>
              </div>
              <!-- // Case : 리스, 렌트, 신차 -->
            </FormListItem>
            <!-- // Case : 리스, 렌트, 신차, 중고차 -->
          </FormList>
        </section>

        <!-- Case : 기본 (개인, 개인사업자 외) -->
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">직장/사업장 정보</h3>
          <FormList>
            <FormListItem
              titleText="직장/사업장 주소"
              target="#layerMyLoanOnlineContractContractorAddress004Search"
            >
              <FormInvalid :error="state.addressError004">
                <InputBlock :error="state.addressError004">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="직장/사업장 주소 - 우편번호"
                      defaultValue="01000"
                      :disabled="true"
                      id="layerMyLoanOnlineContractContractorAddress004"
                    />
                  </InputBlockCell>
                  <template v-slot:right>
                    <BasicButton
                      size="mini"
                      theme="tertiary"
                      id="layerMyLoanOnlineContractContractorAddress004Search"
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
                      title="직장/사업장 주소 - 주소"
                      id="layerMyLoanOnlineContractContractorAddress004_001"
                      defaultValue="인천 서구 에코로 181"
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
                      title="직장/사업장 주소 - 상세주소"
                      id="layerMyLoanOnlineContractContractorAddress004_002"
                      defaultValue="하나금융 로비"
                      :disabled="true"
                    />
                  </InputBlockCell>
                </InputBlock>
                <!-- // Case: 주소 검색 및 입력 후 노출 -->
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="직장/사업장 전화번호"
              target="#layerMyLoanOnlineContractContractorPhone002FirstButton"
            >
              <FormInvalid :error="state.phoneError002">
                <InputBlock :error="state.phoneError002">
                  <InputBlockCell>
                    <BasicSelect
                      :option="[
                        {
                          value: '1',
                          text: '02',
                        },
                        {
                          value: '2',
                          text: '051',
                        },
                        {
                          value: '3',
                          text: '033',
                        },
                        {
                          value: '4',
                          text: '032',
                        },
                        {
                          value: '5',
                          text: '062',
                        },
                        {
                          value: '6',
                          text: '042',
                        },
                        {
                          value: '7',
                          text: '052',
                        },
                        {
                          value: '8',
                          text: '044',
                        },
                        {
                          value: '9',
                          text: '031',
                        },
                        {
                          value: '10',
                          text: '033',
                        },
                        {
                          value: '11',
                          text: '043',
                        },
                        {
                          value: '12',
                          text: '041',
                        },
                        {
                          value: '13',
                          text: '063',
                        },
                        {
                          value: '14',
                          text: '061',
                        },
                        {
                          value: '15',
                          text: '054',
                        },
                        {
                          value: '16',
                          text: '055',
                        },
                        {
                          value: '17',
                          text: '064',
                        },
                      ]"
                      buttonTitle="지역번호 선택하기"
                      layerTitle="지역번호를 선택해 주세요"
                      id="layerMyLoanOnlineContractContractorPhone002First"
                      buttonId="layerMyLoanOnlineContractContractorPhone002FirstButton"
                      :classNames="{
                        wrap: 'input-width-telecom',
                      }"
                    />
                  </InputBlockCell>
                  <InputBlockCell :flexible="true" margin="regular">
                    <BasicInput
                      pattern="\d*"
                      title="직장/사업장 전화번호"
                      id="layerMyLoanOnlineContractContractorPhone002"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>
        </section>
        <!-- // Case : 기본 (개인, 개인사업자 외) -->

        <!-- Case : 개인 -->
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">직장 정보</h3>
          <FormList>
            <FormListItem
              titleText="직장 주소"
              titleOptionalText="(선택)"
              target="#layerMyLoanOnlineContractContractorAddress005Search"
            >
              <FormInvalid :error="state.addressError005">
                <InputBlock :error="state.addressError005">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="직장 주소 - 우편번호"
                      defaultValue="01000"
                      :disabled="true"
                      id="layerMyLoanOnlineContractContractorAddress005"
                    />
                  </InputBlockCell>
                  <template v-slot:right>
                    <BasicButton
                      size="mini"
                      theme="tertiary"
                      id="layerMyLoanOnlineContractContractorAddress005Search"
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
                      title="직장 주소 - 주소"
                      id="layerMyLoanOnlineContractContractorAddress005_001"
                      defaultValue="인천 서구 에코로 181"
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
                      title="직장 주소 - 상세주소"
                      id="layerMyLoanOnlineContractContractorAddress005_002"
                      defaultValue="하나금융 로비"
                      :disabled="true"
                    />
                  </InputBlockCell>
                </InputBlock>
                <!-- // Case: 주소 검색 및 입력 후 노출 -->
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="직장 전화번호"
              target="#layerMyLoanOnlineContractContractorPhone003FirstButton"
            >
              <FormInvalid :error="state.phoneError003">
                <InputBlock :error="state.phoneError003">
                  <InputBlockCell>
                    <BasicSelect
                      :option="[
                        {
                          value: '1',
                          text: '02',
                        },
                        {
                          value: '2',
                          text: '051',
                        },
                        {
                          value: '3',
                          text: '033',
                        },
                        {
                          value: '4',
                          text: '032',
                        },
                        {
                          value: '5',
                          text: '062',
                        },
                        {
                          value: '6',
                          text: '042',
                        },
                        {
                          value: '7',
                          text: '052',
                        },
                        {
                          value: '8',
                          text: '044',
                        },
                        {
                          value: '9',
                          text: '031',
                        },
                        {
                          value: '10',
                          text: '033',
                        },
                        {
                          value: '11',
                          text: '043',
                        },
                        {
                          value: '12',
                          text: '041',
                        },
                        {
                          value: '13',
                          text: '063',
                        },
                        {
                          value: '14',
                          text: '061',
                        },
                        {
                          value: '15',
                          text: '054',
                        },
                        {
                          value: '16',
                          text: '055',
                        },
                        {
                          value: '17',
                          text: '064',
                        },
                      ]"
                      buttonTitle="지역번호 선택하기"
                      layerTitle="지역번호를 선택해 주세요"
                      id="layerMyLoanOnlineContractContractorPhone003First"
                      buttonId="layerMyLoanOnlineContractContractorPhone003FirstButton"
                      :classNames="{
                        wrap: 'input-width-telecom',
                      }"
                    />
                  </InputBlockCell>
                  <InputBlockCell :flexible="true" margin="regular">
                    <BasicInput
                      pattern="\d*"
                      title="직장 전화번호"
                      id="layerMyLoanOnlineContractContractorPhone003"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>
        </section>
        <!-- // Case : 개인 -->

        <!-- Case : 개인사업자 -->
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">사업장 정보</h3>
          <FormList>
            <FormListItem
              titleText="사업장 주소"
              titleOptionalText="(선택)"
              target="#layerMyLoanOnlineContractContractorAddress006Search"
            >
              <FormInvalid :error="state.addressError006">
                <InputBlock :error="state.addressError006">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="사업장 주소 - 우편번호"
                      defaultValue="01000"
                      :disabled="true"
                      id="layerMyLoanOnlineContractContractorAddress006"
                    />
                  </InputBlockCell>
                  <template v-slot:right>
                    <BasicButton
                      size="mini"
                      theme="tertiary"
                      id="layerMyLoanOnlineContractContractorAddress006Search"
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
                      title="사업장 주소 - 주소"
                      id="layerMyLoanOnlineContractContractorAddress006_001"
                      defaultValue="인천 서구 에코로 181"
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
                      title="사업장 주소 - 상세주소"
                      id="layerMyLoanOnlineContractContractorAddress006_002"
                      defaultValue="하나금융 로비"
                      :disabled="true"
                    />
                  </InputBlockCell>
                </InputBlock>
                <!-- // Case: 주소 검색 및 입력 후 노출 -->
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="사업장 전화번호"
              target="#layerMyLoanOnlineContractContractorPhone004FirstButton"
            >
              <FormInvalid :error="state.phoneError004">
                <InputBlock :error="state.phoneError004">
                  <InputBlockCell>
                    <BasicSelect
                      :option="[
                        {
                          value: '1',
                          text: '02',
                        },
                        {
                          value: '2',
                          text: '051',
                        },
                        {
                          value: '3',
                          text: '033',
                        },
                        {
                          value: '4',
                          text: '032',
                        },
                        {
                          value: '5',
                          text: '062',
                        },
                        {
                          value: '6',
                          text: '042',
                        },
                        {
                          value: '7',
                          text: '052',
                        },
                        {
                          value: '8',
                          text: '044',
                        },
                        {
                          value: '9',
                          text: '031',
                        },
                        {
                          value: '10',
                          text: '033',
                        },
                        {
                          value: '11',
                          text: '043',
                        },
                        {
                          value: '12',
                          text: '041',
                        },
                        {
                          value: '13',
                          text: '063',
                        },
                        {
                          value: '14',
                          text: '061',
                        },
                        {
                          value: '15',
                          text: '054',
                        },
                        {
                          value: '16',
                          text: '055',
                        },
                        {
                          value: '17',
                          text: '064',
                        },
                      ]"
                      buttonTitle="지역번호 선택하기"
                      layerTitle="지역번호를 선택해 주세요"
                      id="layerMyLoanOnlineContractContractorPhone004First"
                      buttonId="layerMyLoanOnlineContractContractorPhone004FirstButton"
                      :classNames="{
                        wrap: 'input-width-telecom',
                      }"
                    />
                  </InputBlockCell>
                  <InputBlockCell :flexible="true" margin="regular">
                    <BasicInput
                      pattern="\d*"
                      title="사업장 전화번호"
                      id="layerMyLoanOnlineContractContractorPhone004"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>
        </section>
        <!-- // Case : 개인사업자 -->
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
