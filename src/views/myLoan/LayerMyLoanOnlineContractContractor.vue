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
  },
  setup() {
    const state = reactive({
      phoneError001: false,
      phoneError002: false,
      addressError001: false,
      addressError002: false,
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
          </FormList>
          <!-- // case: 입력 후 노출 -->
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">직장/사업장 정보</h3>
          <FormList>
            <FormListItem
              titleText="직장/사업장 주소"
              target="#layerMyLoanOnlineContractContractorAddress002Search"
            >
              <FormInvalid :error="state.addressError002">
                <InputBlock :error="state.addressError002">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="직장/사업장 주소 - 우편번호"
                      defaultValue="01000"
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
                      title="직장/사업장 주소 - 주소"
                      id="layerMyLoanOnlineContractContractorAddress002_001"
                      defaultValue="인천 서구 에코로 181"
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
                      title="직장/사업장 주소 - 상세주소"
                      id="layerMyLoanOnlineContractContractorAddress002_002"
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
                      defaultValue="1"
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
