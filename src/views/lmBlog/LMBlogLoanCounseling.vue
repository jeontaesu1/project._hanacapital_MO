<script>
// IF_M04_p004
import { ref, reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';

import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';

import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

import BasicButton from '@/components/ui/button/BasicButton.vue';
import FilterButton from '@/components/ui/button/FilterButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
export default {
  components: {
    PageContents,
    PageMainText,
    StepProgress,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicButton,
    BasicHr,
    StickyBar,
    BoxCheckList,
    BoxCheckListItem,
    BoxCheck,
    BoxCheckLabel,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    FilterButton,
    UiLayer,
    PopupTitle,
    ButtonList,
    ButtonListItem,
    ToastPopup,
    ToastPopupHead,
    BasicDatepicker,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const layerTest002 = ref(null);
    const layerOpenTest002 = (e = {}) => {
      layerTest002.value.open(e.target);
    };
    onMounted(() => {
      store.ui.header.setTitle(() => '대출상담');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => ['menu']);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });
    const state = reactive({
      testError001: false,
    });
    const testErrorUpdate001 = (val) => {
      state.testError001 = val;
    };

    return {
      state,
      alert,
      testErrorUpdate001,
      layerTest002,
      layerOpenTest002,
    };
  },
};
</script>

<template>
  <PageContents>
    <template v-slot:head>
      <StickyBar>
        <StepProgress :total="3" :current="1" />
      </StickyBar>
    </template>
    <div class="flex-box row-margin-item align-items-start">
      <div class="flex-box__cell flex-1">
        <PageMainText>
          <strong>신용정보조회동의 여부를</strong><br />확인하세요
        </PageMainText>
      </div>
      <div class="flex-box__cell flex-box__cell--medium">
        <BasicButton size="small" :line="true">전화상담</BasicButton>
      </div>
    </div>

    <div>
      <p class="text-body-3 row-margin-contents-group">
        대출상담은 적법한 절차에 의해 모집한 고객만 등록 가능 합니다. 모집
        과정에서 불법정보 활용 시 대출모집인 모범규준 및 당사 내규에 따라 계약
        해지될 수 있으니 유의하시길 바랍니다.
      </p>

      <div>
        <h3 class="text-body-2 font-weight-bold row-margin-item-group">
          본 고객은 적법한 절차에 의해 모집한 고객임을 확인합니다.
        </h3>
        <BoxCheckList>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList001"
              id="testBoxCheckList001_001"
            >
              <BoxCheckLabel>아니오</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="testBoxCheckList001"
              id="testBoxCheckList001_002"
            >
              <BoxCheckLabel>예</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>
      </div>
    </div>

    <FormList class="row-margin-contents row-margin-bottom-none">
      <FormListItem titleText="이름" target="#testInput007">
        <FormInvalid :error="state.testError001">
          <InputBlock :error="state.testError001">
            <InputBlockCell :flexible="true">
              <BasicInput title="이름" id="testInput007" />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <FormListItem titleText="생년월일" target="#testInput008">
        <FormInvalid :error="state.testError001">
          <InputBlock :error="state.testError001">
            <InputBlockCell :flexible="true">
              <BasicInput title="생년월일" id="testInput008" />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
          <FormHelpText>숫자만 입력해 주세요. (예:900123)</FormHelpText>
        </FormInvalid>
      </FormListItem>
      <FormListItem titleText="휴대폰번호" target="#testInput009">
        <FormInvalid :error="state.testError001">
          <InputBlock :error="state.testError001">
            <InputBlockCell :flexible="true">
              <BasicInput title="휴대폰번호" id="testInput009" />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
    </FormList>

    <div class="row-margin-contents-group row-margin-bottom-none">
      <BasicButton theme="tertiary">신용정보조회동의(URL 발송)</BasicButton>
    </div>

    <BasicHr className="row-margin-container" />

    <div>
      <div class="flex-box row-margin-contents">
        <div class="flex-box__cell flex-1">
          <h3 class="text-title-2 font-weight-bold">신용정보조회 동의내역</h3>
        </div>
        <div class="flex-box__cell flex-box__cell--medium">
          <FilterButton @click="layerOpenTest002" /><!-- 기본 -->
          <!-- <FilterButton type="on" /> 필터링후 -->
        </div>
      </div>

      <UiLayer
        ref="layerTest002"
        type="toast"
        :backgroundClose="true"
        v-slot="layerSlotProps"
      >
        <ToastPopup>
          <template v-slot:head>
            <ToastPopupHead>
              <PopupTitle>조회할 내용을 입력해주세요</PopupTitle>
            </ToastPopupHead>
          </template>

          <FormList class="row-margin-contents row-margin-bottom-none">
            <FormListItem titleText="이름" target="#testInput007">
              <FormInvalid :error="state.testError001">
                <InputBlock :error="state.testError001">
                  <InputBlockCell :flexible="true">
                    <BasicInput title="이름" id="testInput007" />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
            <FormListItem titleText="생년월일" target="#testInput008">
              <FormInvalid :error="state.testError001">
                <InputBlock :error="state.testError001">
                  <InputBlockCell :flexible="true">
                    <BasicInput title="생년월일" id="testInput008" />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
                <FormHelpText>숫자만 입력해 주세요. (예:900123)</FormHelpText>
              </FormInvalid>
            </FormListItem>
            <FormListItem titleText="휴대폰번호" target="#testInput009">
              <FormInvalid :error="state.testError001">
                <InputBlock :error="state.testError001">
                  <InputBlockCell :flexible="true">
                    <BasicInput title="휴대폰번호" id="testInput009" />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
            <FormListItem
              titleText="URL 발송일"
              target="#testInput013StartButton"
            >
              <FormInvalid :error="state.testError001">
                <InputBlock :error="state.testError001">
                  <InputBlockCell :flexible="true">
                    <BasicDatepicker
                      title="조회기간 시작 날짜"
                      id="testInput013Start"
                      buttonId="testInput013StartButton"
                      :max="state.testMaxDate001"
                      v-model="state.testMinDate001"
                      :onChange="testInputEvent"
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
                <BasicButton>조회</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </template>
        </ToastPopup>
      </UiLayer>

      <ul class="reset-list">
        <li class="row-margin-item-group">
          <BasicBox>
            <KeyValue class="row-margin-contents-small">
              <KeyValueItem>
                <KeyValueTitle>이름</KeyValueTitle>
                <KeyValueText> 김하나 </KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>생년월일</KeyValueTitle>
                <KeyValueText>920101-2******</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>휴대폰</KeyValueTitle>
                <KeyValueText>010-1234-5678</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>등록일자</KeyValueTitle>
                <KeyValueText> 2022.11.09 </KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <BasicButton tagName="a" size="small"> 고객정보입력 </BasicButton>
          </BasicBox>
        </li>
        <li class="row-margin-item-group">
          <BasicBox>
            <KeyValue class="row-margin-contents-small">
              <KeyValueItem>
                <KeyValueTitle>이름</KeyValueTitle>
                <KeyValueText> 김하나 </KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>생년월일</KeyValueTitle>
                <KeyValueText>920101-2******</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>휴대폰</KeyValueTitle>
                <KeyValueText>010-1234-5678</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>등록일자</KeyValueTitle>
                <KeyValueText> 2022.11.09 </KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <BasicButton tagName="a" size="small"> 고객정보입력 </BasicButton>
          </BasicBox>
        </li>
        <li class="row-margin-item-group">
          <BasicBox>
            <KeyValue class="row-margin-contents-small">
              <KeyValueItem>
                <KeyValueTitle>이름</KeyValueTitle>
                <KeyValueText> 김하나 </KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>생년월일</KeyValueTitle>
                <KeyValueText>920101-2******</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>휴대폰</KeyValueTitle>
                <KeyValueText>010-1234-5678</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>등록일자</KeyValueTitle>
                <KeyValueText> 2022.11.09 </KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <BasicButton tagName="a" size="small"> 고객정보입력 </BasicButton>
          </BasicBox>
        </li>
        <li class="row-margin-item-group">
          <BasicBox>
            <KeyValue class="row-margin-contents-small">
              <KeyValueItem>
                <KeyValueTitle>이름</KeyValueTitle>
                <KeyValueText> 김하나 </KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>생년월일</KeyValueTitle>
                <KeyValueText>920101-2******</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>휴대폰</KeyValueTitle>
                <KeyValueText>010-1234-5678</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>등록일자</KeyValueTitle>
                <KeyValueText> 2022.11.09 </KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <BasicButton tagName="a" size="small"> 고객정보입력 </BasicButton>
          </BasicBox>
        </li>
      </ul>

      <!-- Case : 결과 없을 때 
      <div :class="$style['empty']">
        <p :class="$style['empty__text']">조회된 결과가 없습니다.</p>
      </div>
      // Case : 결과 없을 때 -->
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/lm-blog/LMBlogLoanCounseling.scss';
</style>
