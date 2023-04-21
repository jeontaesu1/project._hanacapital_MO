<script>
// My_M01_p006
import { ref, reactive, onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';

import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicHr,
    BasicDatepicker,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        header: useUiHeaderStore(),
      },
    };
    const alert = ref(null);
    const state = reactive({
      testError001: false,
    });
    const layerTest001 = ref(null);
    const layerTest003 = ref(null);
    const layerOpenTest003 = (e = {}) => {
      layerTest003.value.open(e.target);
    };

    const testInputEvent = (e = {}) => {
      console.log(e.type, e.target);
    };
    undefined;
    const alertOpen = (options) => {
      alert.value.open(options);
    };
    onMounted(() => {
      // optional : html 태그에 클래스 추가
      store.ui.common.setRootClassName('page-optional-class');

      // optional : 헤더 구성 변경
      store.ui.header.setTitle(() => '자동차세');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      // optional : html 태그에 클래스 리셋
      store.ui.common.setRootClassName();

      // optional : 헤더 구성 설정 값 리셋
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
    });

    return {
      alert,
      alertOpen,

      state,
      layerTest001,
      layerTest003,
      layerOpenTest003,
      testInputEvent,
    };
  },
};
</script>

<template>
  <PageContents>
    <FormList>
      <FormListItem titleText="검색조건" target="#testInput013StartButton">
        <FormInvalid :error="state.testError001">
          <InputBlock :error="state.testError001">
            <InputBlockCell :flexible="true">
              <BasicDatepicker
                title="검색조건 시작 날짜"
                id="testInput013Start"
                buttonId="testInput013StartButton"
                :max="state.testMaxDate001"
                v-model="state.testMinDate001"
                :onChange="testInputEvent"
              />
            </InputBlockCell>
            <InputBlockCell margin="regular">
              <div class="text-body-3">~</div>
            </InputBlockCell>
            <InputBlockCell :flexible="true" margin="regular">
              <BasicDatepicker
                title="검색조건 종료 날짜"
                id="testInput013End"
                buttonId="testInput013EndButton"
                :min="state.testMinDate001"
                v-model="state.testMaxDate001"
                :onChange="testInputEvent"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
    </FormList>

    <BasicHr className="row-margin-container-medium" />

    <ul :class="$style['logs']">
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div div :class="$style['logs__contents']">
              <KeyValue align="left" size="regular" margin="mini">
                <KeyValueItem :classNames="{ item: 'text-body-4' }">
                  <KeyValueTitle>납부기한</KeyValueTitle>
                  <KeyValueText>2021.08.04 12:22</KeyValueText>
                </KeyValueItem>

                <KeyValueItem :classNames="{ item: 'text-body-4' }">
                  <KeyValueTitle>과세금액</KeyValueTitle>
                  <KeyValueText>29,000 원</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </div>
            <div div :class="$style['logs__right']">
              <button
                type="button"
                :class="$style['logs__link']"
                @click="layerOpenTest003"
              >
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div div :class="$style['logs__contents']">
              <KeyValue align="left" size="regular" margin="mini">
                <KeyValueItem :classNames="{ item: 'text-body-4' }">
                  <KeyValueTitle>납부기한</KeyValueTitle>
                  <KeyValueText>2021.08.04 12:22</KeyValueText>
                </KeyValueItem>

                <KeyValueItem :classNames="{ item: 'text-body-4' }">
                  <KeyValueTitle>과세금액</KeyValueTitle>
                  <KeyValueText>29,000 원</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </div>
            <div div :class="$style['logs__right']">
              <button
                type="button"
                :class="$style['logs__link']"
                @click="layerOpenTest003"
              >
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div div :class="$style['logs__contents']">
              <KeyValue align="left" size="regular" margin="mini">
                <KeyValueItem :classNames="{ item: 'text-body-4' }">
                  <KeyValueTitle>납부기한</KeyValueTitle>
                  <KeyValueText>2021.08.04 12:22</KeyValueText>
                </KeyValueItem>

                <KeyValueItem :classNames="{ item: 'text-body-4' }">
                  <KeyValueTitle>과세금액</KeyValueTitle>
                  <KeyValueText>29,000 원</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </div>
            <div div :class="$style['logs__right']">
              <button
                type="button"
                :class="$style['logs__link']"
                @click="layerOpenTest003"
              >
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <!-- <div :class="$style['empty']">
      <p :class="$style['empty__text']">조회 결과가 없습니다.</p>
    </div> -->
    <UiLayer ref="layerTest003" type="toast-fix" v-slot="layerSlotProps">
      <ToastPopup :fix="true">
        <template v-slot:head>
          <ToastPopupHead>
            <PopupTitle>범칙금 상세보기</PopupTitle>
            <!-- <PopupSubTitle>서브 타이틀 및 텍스트</PopupSubTitle> -->
          </ToastPopupHead>
        </template>

        <KeyValue>
          <KeyValueItem>
            <KeyValueTitle>상품명</KeyValueTitle>
            <KeyValueText>오토리스_승용차_금융(정상)</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>차량명</KeyValueTitle>
            <KeyValueText
              >펠리세이드 디젤 2.2 4WD (액세서리 변경) 프레스티지 (7인승)
              자동</KeyValueText
            >
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>차량번호</KeyValueTitle>
            <KeyValueText>65다2918</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>위반일자</KeyValueTitle>
            <KeyValueText>2021.08.02 14:22</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>발생장소</KeyValueTitle>
            <KeyValueText>충정로 1가 입구 부근</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>위반내용</KeyValueTitle>
            <KeyValueText
              >위반내용이 길 경우 두줄까지 그 이후는 말줄임 처리</KeyValueText
            >
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>과세금액</KeyValueTitle>
            <KeyValueText>29,000 원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>관할기관</KeyValueTitle>
            <KeyValueText>모톤길탈틱타</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>관할기관</KeyValueTitle>
            <KeyValueText>대납청구(이체)</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </ToastPopup>
    </UiLayer>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/MyLoanPenalty.scss';
</style>
