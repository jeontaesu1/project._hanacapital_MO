<script>
// LM_M02_p001
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';

import IconTell from '@/assets/images/icon/tell.svg?component';

export default {
  components: {
    PageContents,
    BasicButton,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BasicHr,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicDatepicker,
    IconTell,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      dateError: false,
      nameError: false,
      minDate: '2023.04.21',
      maxDate: '2023.04.21',
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '빠른상담신청 내역');
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
    <div>
      <FormList>
        <FormListItem
          titleText="검색조건"
          target="#lMBlogQuickCounselingDateStartButton"
        >
          <FormInvalid :error="state.dateError">
            <InputBlock :error="state.dateError">
              <InputBlockCell :flexible="true">
                <BasicDatepicker
                  title="검색조건 시작 날짜"
                  id="lMBlogQuickCounselingDateStart"
                  buttonId="lMBlogQuickCounselingDateStartButton"
                  :max="state.maxDate"
                  v-model="state.minDate"
                />
              </InputBlockCell>
              <InputBlockCell margin="regular">
                <div class="text-body-3">~</div>
              </InputBlockCell>
              <InputBlockCell :flexible="true" margin="regular">
                <BasicDatepicker
                  title="검색조건 종료 날짜"
                  id="lMBlogQuickCounselingDateEnd"
                  buttonId="lMBlogQuickCounselingDateEndButton"
                  :min="state.minDate"
                  v-model="state.maxDate"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="신청자명" target="#lMBlogQuickCounselingName">
          <FormInvalid :error="state.nameError">
            <InputBlock :error="state.nameError">
              <InputBlockCell :flexible="true">
                <BasicInput title="신청자명" id="lMBlogQuickCounselingName" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <div class="row-margin-contents-group">
        <BasicButton :line="true"> 조회 </BasicButton>
      </div>
    </div>

    <BasicHr className="row-margin-container-medium" />

    <!-- Case : 등록된 상담 없을 때 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">등록된 상담이 없습니다.</p>
    </div>
    <!-- // Case : 등록된 상담 없을 때 -->

    <!-- Case : 조회 결과 없을 때 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">조회된 결과가 없습니다.</p>
    </div>
    <!-- // Case : 조회 결과 없을 때 -->

    <!-- Case : 조회 결과 있을 때 -->
    <ul class="reset-list">
      <li v-for="i in 3" :key="i" class="row-margin-item">
        <BasicBox>
          <KeyValue margin="regular">
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>구분</KeyValueTitle>
              <KeyValueText>LM</KeyValueText>
            </KeyValueItem>

            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>신청자명</KeyValueTitle>
              <KeyValueText>김하나</KeyValueText>
            </KeyValueItem>

            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>신청일</KeyValueTitle>
              <KeyValueText>2022.02.02</KeyValueText>
            </KeyValueItem>
          </KeyValue>

          <BasicButton
            tagName="a"
            size="small"
            :classNames="{
              wrap: 'row-margin-item-group',
            }"
            href="tel:0000-0000"
          >
            <template v-slot:leftIcon>
              <IconTell />
            </template>
            전화상담
          </BasicButton>
        </BasicBox>
      </li>
    </ul>
    <!-- // Case : 조회 결과 있을 때 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/lm-blog/LMBlogQuickCounseling.scss';
</style>
