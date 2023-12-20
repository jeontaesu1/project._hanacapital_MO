<script>
// Comp_M00_l003
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
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

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
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormInvalidMessage,
    SecurityInput,
    BasicSelect,
    FormHelpText,
    BoxCheckList,
    BoxCheckLabel,
    BoxCheckListItem,
    BoxCheck,
    NoticeText,
    BasicHr,
    ButtonList,
    ButtonListItem,
    BasicButton,
  },
  setup() {
    const layer = ref(null);

    const state = reactive({
      nameError001: false,
      birthDateError001: false,
      phoneError001: false,
      jobTypeError001: false,
      workplaceNameError001: false,
      dateError001: false,
      dealPurposeError001: false,
      moneyRootError001: false,
    });

    return {
      layer,
      state,
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
          아래 정보를 확인하신 후<br />
          변경된 내용이 있는 경우<br />
          수정해 주시기 바랍니다
        </PageMainText>
      </PageTextGroup>

      <FormList>
        <FormListItem titleText="이름" target="#Comp_M00_l003_name">
          <FormInvalid :error="state.nameError001">
            <InputBlock :error="state.nameError001">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="이름"
                  id="Comp_M00_l003_name"
                  defaultValue="김하나"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="생년월일" target="#Comp_M00_l003_BirthDate">
          <FormInvalid :error="state.birthDateError001">
            <InputBlock :error="state.birthDateError001">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="주민등록번호 앞 6자리"
                  id="Comp_M00_l003_BirthDate"
                  defaultValue="880820"
                />
              </InputBlockCell>
              <InputBlockCell type="sub">-</InputBlockCell>
              <InputBlockCell :flexible="true">
                <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
                <SecurityInput
                  title="주민등록번호 뒤 7자리"
                  :dot="[true, true, true, true, true, true, true]"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="휴대폰번호" target="#Comp_M00_l003_phone">
          <FormInvalid :error="state.phoneError001">
            <InputBlock :error="state.phoneError001">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="휴대폰번호"
                  id="Comp_M00_l003_phone"
                  defaultValue="010-1234-5678"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="직업분류"
          target="#Comp_M00_l003_jobTypeButton"
          :selectOnly="true"
        >
          <FormInvalid :error="state.jobTypeError001">
            <InputBlock :error="state.jobTypeError001">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '일반등급자',
                    },
                    {
                      value: '2',
                      text: '개인사업장 종사자',
                    },
                    {
                      value: '3',
                      text: '기타소득자(고용보험 가입)',
                    },
                  ]"
                  buttonTitle="직업분류 선택하기"
                  layerTitle="직업분류를 선택해 주세요"
                  id="Comp_M00_l003_jobType"
                  buttonId="Comp_M00_l003_jobTypeButton"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="직장명" target="#Comp_M00_l003_workplaceName">
          <FormInvalid :error="state.workplaceNameError001">
            <InputBlock :error="state.workplaceNameError001">
              <InputBlockCell :flexible="true">
                <BasicInput title="직장명" id="Comp_M00_l003_workplaceName" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="입사일자" target="#Comp_M00_l003_date">
          <FormInvalid :error="state.dateError001">
            <InputBlock :error="state.dateError001">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="입사일자"
                  id="Comp_M00_l003_date"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <FormHelpText>숫자만 입력해 주세요 (예:910412) </FormHelpText>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="실제소유자여부" :forceFocus="true">
          <BoxCheckList>
            <BoxCheckListItem>
              <BoxCheck
                name="Comp_M00_l003_Check001"
                id="Comp_M00_l003_Check001_001"
              >
                <BoxCheckLabel>아니오</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                name="Comp_M00_l003_Check001"
                id="Comp_M00_l003_Check001_002"
                :defaultChecked="true"
              >
                <BoxCheckLabel>예</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
          <div class="row-margin-item">
            <NoticeText>
              실제소유자가 아닌 경우, 거래가 종료될 수 있습니다.
            </NoticeText>
          </div>
        </FormListItem>
      </FormList>

      <BasicHr className="row-margin-container-medium" />

      <div>
        <h4 class="text-title-2">거래 목적 및 자금의원천 정보 입력</h4>
        <p
          class="text-body-3 color-gray-tertiary row-margin-small font-weight-light"
        >
          「특정금융정보법」에 따라 비대면 고객확인 시 필요한 추가정보를 확인
          요청드립니다.
        </p>
      </div>
      <FormList class="row-margin-contents">
        <FormListItem
          titleText="거래 목적"
          target="#Comp_M00_l003_dealPurposeButton"
          :selectOnly="true"
        >
          <FormInvalid :error="state.dealPurposeError001">
            <InputBlock :error="state.dealPurposeError001">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '차량 구매(할부)',
                    },
                    {
                      value: '2',
                      text: '기존 대출 상환',
                    },
                    {
                      value: '3',
                      text: '운영자금 대출',
                    },
                    {
                      value: '4',
                      text: '사업상 거래',
                    },
                    {
                      value: '5',
                      text: '차량 이용 (리스)',
                    },
                    {
                      value: '6',
                      text: '생활 자금 대출',
                    },
                    {
                      value: '7',
                      text: '기타 상품 투자',
                    },
                    {
                      value: '8',
                      text: '가상자산 거래',
                    },
                  ]"
                  buttonTitle="거래 목적 선택하기"
                  layerTitle="거래 목적을 선택해 주세요"
                  id="Comp_M00_l003_dealPurpose"
                  buttonId="Comp_M00_l003_dealPurposeButton"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="자금의 원천"
          target="#Comp_M00_l003_moneyRootButton"
          :selectOnly="true"
        >
          <FormInvalid :error="state.moneyRootError001">
            <InputBlock :error="state.moneyRootError001">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '근로 및 연금소득',
                    },
                    {
                      value: '2',
                      text: '퇴직소득',
                    },
                    {
                      value: '3',
                      text: '사업소득',
                    },
                    {
                      value: '4',
                      text: '상속',
                    },
                    {
                      value: '5',
                      text: '상속',
                    },
                    {
                      value: '6',
                      text: '양도',
                    },
                    {
                      value: '7',
                      text: '차입금',
                    },
                    {
                      value: '8',
                      text: '부동산 처분소득',
                    },
                    {
                      value: '9',
                      text: '부동산 임대소득',
                    },
                    {
                      value: '10',
                      text: '이자 및 배당소득',
                    },
                    {
                      value: '11',
                      text: '투자자산 처분소득',
                    },
                    {
                      value: '12',
                      text: '보유자산 처분소득',
                    },
                    {
                      value: '13',
                      text: '기부금',
                    },
                  ]"
                  buttonTitle="자금의 원천 선택하기"
                  layerTitle="자금의 원천을 선택해 주세요"
                  id="Comp_M00_l003_moneyRoot"
                  buttonId="Comp_M00_l003_moneyRootButton"
                />
              </InputBlockCell>
            </InputBlock>
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
