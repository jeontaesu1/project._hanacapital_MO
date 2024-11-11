<script>
// Customer_DS_M02_03
import { onMounted, onUnmounted, reactive } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';

export default {
  components: {
    PageContents,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicSelect,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BottomSticky,
    PageTextGroup,
    PageMainText,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      typeError: false,
      categoryError: false,
      productError001: false,
      productError002: false,
      productError003: false,
      corporateError: false,
      nameError: false,
      phoneError: false,
      timeError: false,
      carTypeError: false,
      carNameError: false,
      carRegionError: false,
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '채무조정요청권 신청');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => ['menu']);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });

    return {
      state,
    };
  },
};
</script>

<template>
  <PageContents>
    <PageTextGroup>
      <PageMainText>
        채무조정 요청 사유와 내용을<br />
        입력해 주세요
      </PageMainText>
    </PageTextGroup>

    <FormList>
      <FormListItem
        titleText="채무조정 요청 사유"
        target="#customerReservationCounselingCategoryButton"
        :selectOnly="true"
      >
        <FormInvalid :error="state.categoryError">
          <InputBlock :error="state.categoryError">
            <InputBlockCell :flexible="true">
              <BasicSelect
                :option="[
                  {
                    value: '1',
                    text: '실직',
                  },
                  {
                    value: '2',
                    text: '폐업',
                  },
                  {
                    value: '3',
                    text: '소득감소',
                  },
                  {
                    value: '4',
                    text: '질병,사고',
                  },
                  {
                    value: '5',
                    text: '기타',
                  },
                ]"
                buttonTitle="채무조정 요청 사유 선택하기"
                layerTitle="채무조정 요청 사유를 선택해 주세요"
                id="customerReservationCounselingCategory"
                buttonId="customerReservationCounselingCategoryButton"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <!-- Case : 채무조정 요청 사유 '기타' 선택 시 -->
      <FormListItem
        titleText="기타 사유 입력"
        target="#customerReservationCounselingName"
      >
        <FormInvalid :error="state.nameError">
          <InputBlock :error="state.nameError">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="기타 사유 입력"
                id="customerReservationCounselingName"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <!-- // Case : 채무조정 요청 사유 '기타' 선택 시 -->

      <FormListItem titleText="채무조정 요청 내용" :forceFocus="true">
        <FormInvalid :error="state.typeError">
          <BoxCheckList :wrap="true" :col="2">
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="customerReservationCounselingType"
                id="customerReservationCounselingType1"
                :defaultChecked="false"
              >
                <BoxCheckLabel>상환유예(원금)</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="customerReservationCounselingType"
                id="customerReservationCounselingType2"
              >
                <BoxCheckLabel>상환유예(이자)</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="customerReservationCounselingType"
                id="customerReservationCounselingType3"
              >
                <BoxCheckLabel>만기연장</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="customerReservationCounselingType"
                id="customerReservationCounselingType4"
              >
                <BoxCheckLabel>이자율 인하</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="customerReservationCounselingType"
                id="customerReservationCounselingType5"
              >
                <BoxCheckLabel>원금감면</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="customerReservationCounselingType"
                id="customerReservationCounselingType6"
              >
                <BoxCheckLabel>이자감면</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="customerReservationCounselingType"
                id="customerReservationCounselingType7"
              >
                <BoxCheckLabel>기타</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
    </FormList>

    <template v-slot:foot>
      <BottomSticky>
        <div class="bottom-wrap">
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton>채무조정 요청</BasicButton>
              <!-- <BasicButton :disabled="true">채무조정 요청</BasicButton> -->
            </ButtonListItem>
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/CustomerReservationCounseling.scss';
</style>
