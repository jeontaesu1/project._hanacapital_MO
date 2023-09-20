<script>
// Common_M00_p009
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    InputBlock,
    InputBlockCell,
    BasicDatepicker,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    BottomSticky,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      minDate: '',
      maxDate: '',
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '타이틀');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
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
        <strong>
          조회기간을<br />
          선택해 주세요
        </strong>
      </PageMainText>
    </PageTextGroup>

    <FormList>
      <FormListItem titleText="조회기간" :forceFocus="true">
        <FormInvalid :error="state.testError001">
          <BoxCheckList :classNames="{ wrap: 'row-margin-item-group' }">
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="guideEnterDateCheck"
                id="guideEnterDateCheck001"
              >
                <BoxCheckLabel>1개월</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="guideEnterDateCheck"
                id="guideEnterDateCheck002"
              >
                <BoxCheckLabel>3개월</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="guideEnterDateCheck"
                id="guideEnterDateCheck003"
              >
                <BoxCheckLabel>6개월</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="guideEnterDateCheck"
                id="guideEnterDateCheck004"
              >
                <BoxCheckLabel>1년</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
          <InputBlock :error="state.testError001">
            <InputBlockCell :flexible="true">
              <BasicDatepicker
                title="조회기간 시작 날짜"
                id="guideEnterDateStart"
                buttonId="guideEnterDateStartButton"
                :max="state.maxDate"
                v-model="state.minDate"
              />
            </InputBlockCell>
            <InputBlockCell margin="regular">
              <div class="text-body-3">~</div>
            </InputBlockCell>
            <InputBlockCell :flexible="true" margin="regular">
              <BasicDatepicker
                title="조회기간 종료 날짜"
                id="guideEnterDateEnd"
                buttonId="guideEnterDateEndButton"
                :min="state.minDate"
                v-model="state.maxDate"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
          <FormHelpText>조회기간은 최대 1년까지 가능해요.</FormHelpText>
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
              <BasicButton>조회</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>
