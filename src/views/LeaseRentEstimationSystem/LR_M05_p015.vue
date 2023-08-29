<script>
// LR_M05_p015
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';

export default {
  components: {
    PageContents,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BoxCheckList,
    BoxCheckListItem,
    BoxCheck,
    BoxCheckLabel,
    BasicDatepicker,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BottomSticky,
  },

  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      titleError: false,
      contentsError: false,
      exposureError: false,
      estimateError: false,
      minDate: '2022.02.17',
      maxDate: '2022.10.17',
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '팝업 수정');
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
    <FormList>
      <FormListItem titleText="제목" target="#LR_M05_p015_title">
        <FormInvalid :error="state.titleError">
          <InputBlock :error="state.titleError">
            <InputBlockCell :flexible="true">
              <BasicInput title="제목" id="LR_M05_p015_title" />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem titleText="내용" :forceFocus="true">
        <FormInvalid :error="state.contentsError">
          <article>
            <div style="height: 450px; background-color: #f9f9f9">
              // 에디터 영역
            </div>
          </article>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem titleText="팝업노출" :forceFocus="true">
        <FormInvalid :error="state.exposureError">
          <BoxCheckList :classNames="{ wrap: 'row-margin-item-group' }">
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="LR_M05_p015_exposure"
                id="LR_M05_p015_exposure001"
                :defaultChecked="true"
              >
                <BoxCheckLabel>노출</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="LR_M05_p015_exposure"
                id="LR_M05_p015_exposure002"
              >
                <BoxCheckLabel>중지</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
          <InputBlock :error="state.exposureError">
            <InputBlockCell :flexible="true">
              <BasicDatepicker
                title="조회기간 시작 날짜"
                id="LR_M05_p015_date_start"
                buttonId="LR_M05_p015_date_start_button"
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
                id="LR_M05_p015_date_end"
                buttonId="LR_M05_p015_date_end_button"
                :min="state.minDate"
                v-model="state.maxDate"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>

        <ul :class="[$style['basic-list'], 'row-margin-item-group']">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              팝업 노출 설정이 “표시”로 설정 되어있어도 노출 기간 외에는 팝업이
              뜨지않습니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              노출 기간 내에도 팝업 노출 설정이 “중지“로 설정 되어 있으면 팝업이
              뜨지 않습니다.
            </div>
          </li>
        </ul>
      </FormListItem>

      <FormListItem titleText="견적 설정" :forceFocus="true">
        <FormInvalid :error="state.estimateError">
          <BoxCheckList :classNames="{ wrap: 'row-margin-item-group' }">
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="LR_M05_p015_estimate"
                id="LR_M05_p015_estimate001"
                :defaultChecked="true"
              >
                <BoxCheckLabel>이용가능</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="LR_M05_p015_estimate"
                id="LR_M05_p015_estimate002"
              >
                <BoxCheckLabel>차단</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>

        <ul :class="[$style['basic-list'], 'row-margin-item-group']">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              견적 설정을 이용 불가로 설정시 팝업에 “오늘 하루 표시하지 않기“
              버튼이 노출되지 않으며, 팝업을 닫으면 현황조회 페이지로
              이동합니다. (로그인 페이지는 로그인 페이지 리로딩)
            </div>
          </li>
        </ul>
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
              <BasicButton :line="true" theme="quaternary"
                >미리보기</BasicButton
              >
            </ButtonListItem>
            <ButtonListItem>
              <BasicButton>저장하기</BasicButton>
            </ButtonListItem>
            <ButtonListItem>
              <BasicButton theme="tertiary">수정취소</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/LeaseRentEstimationSystem/LR_M05_p015.scss';
</style>
