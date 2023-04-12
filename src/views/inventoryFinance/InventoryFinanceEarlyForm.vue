<script>
// IF_M03_p002
import { onMounted, onUnmounted, ref, reactive } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValueList from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import iconInformation from '@/assets/images/icon/information.svg?component';
import iconCalendar from '@/assets/images/icon/Calendar.svg?component';

import LayerInventoryFinanceEarlyAccountNotice from '@/views/inventoryFinance/LayerInventoryFinanceEarlyAccountNotice.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    StepProgress,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValueList,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicHr,
    BoxCheckList,
    BoxCheckListItem,
    BoxCheck,
    BoxCheckLabel,
    FormList,
    FormListItem,
    FormInvalid,
    BasicSelect,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicInput,
    ButtonList,
    ButtonListItem,
    BasicButton,
    TextButton,
    iconInformation,
    iconCalendar,
    LayerInventoryFinanceEarlyAccountNotice,
  },
  setup() {
    const layer001 = ref(null);

    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };

    const state = reactive({
      accountError: false,
      nameError: false,
    });

    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '재고금융 중도상환');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });

    return {
      layer001,
      layer001Open,
      state,
    };
  },
};
</script>

<template>
  <StepProgress :total="4" :current="2" />
  <PageContents>
    <PageTextGroup>
      <PageMainText>
        선택한 계약상품의 중도상환<br />
        설정을 위해<br />
        <strong>조건을 입력 또는 선택해 주세요</strong>
      </PageMainText>
    </PageTextGroup>

    <BasicBox>
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <h3 class="text-body-1 font-weight-medium">렌터카 23호8998</h3>
          <p class="text-body-4 color-gray">쏘나타 하이브리드(DN8) 스파이더</p>
        </BasicBoxHeadLeft>
      </BasicBoxHead>

      <KeyValueList margin="regular">
        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>대출기간</KeyValueTitle>
          <KeyValueText>2022.12.06 ~ 2023.03.11</KeyValueText>
        </KeyValueItem>

        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>결제회차</KeyValueTitle>
          <KeyValueText>1/1 (매월11일)</KeyValueText>
        </KeyValueItem>

        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>임직원특약</KeyValueTitle>
          <KeyValueText>2,039,040 원</KeyValueText>
        </KeyValueItem>
      </KeyValueList>
    </BasicBox>

    <BasicHr className="row-margin-container-medium" />

    <h3 class="text-title-2 row-margin-contents row-margin-top-none">
      선택한 계약 상품의 중도상환 조건 입력
    </h3>

    <FormList>
      <FormListItem titleText="대출금액" :forceFocus="true">
        <BoxCheckList align="full">
          <BoxCheckListItem>
            <BoxCheck
              name="inventoryFinanceEarlyForm"
              id="inventoryFinanceEarlyForm001"
            >
              <BoxCheckLabel>오늘 즉시 출금</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              name="inventoryFinanceEarlyForm"
              id="inventoryFinanceEarlyForm002"
            >
              <BoxCheckLabel>가상계좌 입금</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              name="inventoryFinanceEarlyForm"
              id="inventoryFinanceEarlyForm003"
            >
              <BoxCheckLabel>중도상환 시뮬레이션</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>
      </FormListItem>

      <!-- case: 가상계좌 입금 선택 시 노출 -->
      <div class="inline-wrap align-right row-margin-item">
        <TextButton theme="quaternary" @click="layer001Open">
          가상계좌 유의사항 유의사항
          <template v-slot:rightIcon>
            <iconInformation />
          </template>
        </TextButton>
      </div>
      <!-- // case: 가상계좌 입금 선택 시 노출 -->

      <!-- case: 오늘 즉시 출금 선택 시 노출 -->
      <FormListItem
        titleText="즉시 출금 계좌"
        target="#inventoryFinanceEarlyFormImmediateButton"
        :selectOnly="true"
      >
        <FormInvalid :error="state.accountError">
          <InputBlock :error="state.accountError">
            <InputBlockCell :flexible="true">
              <BasicSelect
                :option="[
                  {
                    value: '1',
                    text: '하나 123-456-789012',
                  },
                  {
                    value: '2',
                    text: '신한 123-456-789012',
                  },
                  {
                    value: '3',
                    text: '우리 123-456-789012',
                  },
                ]"
                buttonTitle="출금계좌 선택하기"
                layerTitle="즉시출금계좌를 선택해 주세요"
                id="inventoryFinanceEarlyFormImmediate"
                buttonId="inventoryFinanceEarlyFormImmediateButton"
                defaultValue="1"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <!-- // case: 오늘 즉시 출금 선택 시 노출 -->

      <!-- case: 출금 가능 계좌가 없을 시 노출 -->
      <FormListItem titleText="즉시 출금 계좌" :disabled="true">
        <InputBlock :disabled="true">
          <InputBlockCell :flexible="true">
            <BasicInput
              defaultValue="출금 가능한 계좌가 없습니다"
              :disabled="true"
            />
          </InputBlockCell>
        </InputBlock>
      </FormListItem>
      <!-- // case: 출금 가능 계좌가 없을 시 노출 -->

      <FormListItem titleText="중도상환방법" :disabled="true">
        <InputBlock :disabled="true">
          <InputBlockCell :flexible="true">
            <BasicInput defaultValue="전체상환" :disabled="true" />
          </InputBlockCell>
        </InputBlock>
      </FormListItem>

      <!-- case: 중도상환 시뮬레이션 선택 시 노출 -->
      <FormListItem titleText="입금일자">
        <InputBlock>
          <InputBlockCell :flexible="true">
            <BasicInput defaultValue="2022.12.19" />
          </InputBlockCell>
          <template v-slot:innerRight>
            <iconCalendar />
          </template>
        </InputBlock>
      </FormListItem>
      <!-- // case: 중도상환 시뮬레이션 선택 시 노출 -->

      <FormListItem titleText="상환금액" :disabled="true">
        <InputBlock :disabled="true">
          <InputBlockCell :flexible="true">
            <BasicInput
              align="right"
              defaultValue="2,000,000"
              :disabled="true"
            />
          </InputBlockCell>
          <template v-slot:innerRight>
            <div class="text-body-3">원</div>
          </template>
        </InputBlock>
      </FormListItem>
    </FormList>

    <template v-slot:foot>
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton>중도상환금액 조회</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>

    <LayerInventoryFinanceEarlyAccountNotice ref="layer001" />
  </PageContents>
</template>
