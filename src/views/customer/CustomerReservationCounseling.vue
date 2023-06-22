<script>
// ETC_M01_p001
import { onMounted, onUnmounted, reactive } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

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
    FormHelpText,
    BasicSelect,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    BasicButton,
    ButtonList,
    ButtonListItem,
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
      store.ui.header.setTitle(() => '전화상담신청');
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
      <FormListItem titleText="회원구분" :forceFocus="true">
        <FormInvalid :error="state.typeError">
          <BoxCheckList>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="customerReservationCounselingType"
                id="customerReservationCounselingType1"
                :defaultChecked="true"
              >
                <BoxCheckLabel>개인(개인사업자)</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="customerReservationCounselingType"
                id="customerReservationCounselingType2"
              >
                <BoxCheckLabel>법인</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="상담 분야"
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
                    text: '개인금융',
                  },
                  {
                    value: '2',
                    text: '자동차금융',
                  },
                  {
                    value: '3',
                    text: '기업금융',
                  },
                ]"
                buttonTitle="상담 분야 선택하기"
                layerTitle="상담 분야를 선택해 주세요"
                id="customerReservationCounselingCategory"
                buttonId="customerReservationCounselingCategoryButton"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
          <FormHelpText
            >연락처를 남겨주시면 상담원이 연락 드리고 친절하게 상담해
            드리겠습니다.</FormHelpText
          >
        </FormInvalid>
      </FormListItem>

      <!-- Case : 상담분야 '개인금융' 선택 시 -->
      <FormListItem
        titleText="상담 상품"
        target="#customerReservationCounselingProduct001Button"
        :selectOnly="true"
      >
        <FormInvalid :error="state.productError001">
          <InputBlock :error="state.productError001">
            <InputBlockCell :flexible="true">
              <BasicSelect
                :option="[
                  {
                    value: '1',
                    text: '신용대출',
                  },
                  {
                    value: '2',
                    text: '자동차담보대출',
                  },
                  {
                    value: '3',
                    text: '스탁론',
                  },
                  {
                    value: '4',
                    text: '주택담보대출',
                  },
                ]"
                buttonTitle="상품 선택하기"
                layerTitle="상품을 선택해 주세요"
                id="customerReservationCounselingProduct001"
                buttonId="customerReservationCounselingProduct001Button"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <!-- // Case : 상담분야 '개인금융' 선택 시 -->

      <!-- Case : 상담분야 '자동차금융' 선택 시 -->
      <FormListItem
        titleText="상담 상품"
        target="#customerReservationCounselingProduct002Button"
        :selectOnly="true"
      >
        <FormInvalid :error="state.productError002">
          <InputBlock :error="state.productError002">
            <InputBlockCell :flexible="true">
              <BasicSelect
                :option="[
                  {
                    value: '1',
                    text: '신차할부(오토론)',
                  },
                  {
                    value: '2',
                    text: '신차리스',
                  },
                  {
                    value: '3',
                    text: '중고차오토론',
                  },
                  {
                    value: '4',
                    text: '렌터카',
                  },
                ]"
                buttonTitle="상품 선택하기"
                layerTitle="상품을 선택해 주세요"
                id="customerReservationCounselingProduct002"
                buttonId="customerReservationCounselingProduct002Button"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <!-- // Case : 상담분야 '자동차금융' 선택 시 -->

      <!-- Case : 상담분야 '기업금융' 선택 시 -->
      <FormListItem
        titleText="상담 상품"
        target="#customerReservationCounselingProduct003Button"
        :selectOnly="true"
      >
        <FormInvalid :error="state.productError003">
          <InputBlock :error="state.productError003">
            <InputBlockCell :flexible="true">
              <BasicSelect
                :option="[
                  {
                    value: '1',
                    text: '의료기리스',
                  },
                ]"
                buttonTitle="상품 선택하기"
                layerTitle="상품을 선택해 주세요"
                id="customerReservationCounselingProduct003"
                buttonId="customerReservationCounselingProduct003Button"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <!-- // Case : 상담분야 '기업금융' 선택 시 -->

      <FormListItem
        titleText="이름"
        target="#customerReservationCounselingName"
      >
        <FormInvalid :error="state.nameError">
          <InputBlock :error="state.nameError">
            <InputBlockCell :flexible="true">
              <BasicInput title="이름" id="customerReservationCounselingName" />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <!-- Case : 회원구분 법인 선택 시 -->
      <FormListItem
        titleText="법인명"
        target="#customerReservationCounselingCorporateName"
      >
        <FormInvalid :error="state.corporateError">
          <InputBlock :error="state.corporateError">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="법인명"
                id="customerReservationCounselingCorporateName"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <!-- // Case : 회원구분 법인 선택 시 -->

      <FormListItem
        titleText="연락처"
        target="#customerReservationCounselingPhone"
      >
        <FormInvalid :error="state.phoneError">
          <InputBlock :error="state.phoneError">
            <InputBlockCell :flexible="true">
              <BasicInput
                pattern="\d*"
                title="연락처"
                id="customerReservationCounselingPhone"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="연락가능시간"
        target="#customerReservationCounselingStartTimeButton"
      >
        <FormInvalid :error="state.timeError">
          <InputBlock :error="state.timeError">
            <InputBlockCell :flexible="true">
              <BasicSelect
                :option="[
                  {
                    value: '9',
                    text: '9',
                  },
                  {
                    value: '10',
                    text: '10',
                  },
                  {
                    value: '11',
                    text: '11',
                  },
                  {
                    value: '12',
                    text: '12',
                  },
                  {
                    value: '13',
                    text: '13',
                  },
                  {
                    value: '14',
                    text: '14',
                  },
                  {
                    value: '15',
                    text: '15',
                  },
                  {
                    value: '16',
                    text: '16',
                  },
                  {
                    value: '17',
                    text: '17',
                  },
                ]"
                buttonTitle="시작시간 선택하기"
                layerTitle="시작시간을 선택해 주세요"
                id="customerReservationCounselingStartTime"
                buttonId="customerReservationCounselingStartTimeButton"
              />
            </InputBlockCell>
            <InputBlockCell margin="regular">
              <div class="text-body-3">시</div>
            </InputBlockCell>
            <InputBlockCell margin="regular">
              <div class="text-body-3">~</div>
            </InputBlockCell>
            <InputBlockCell :flexible="true" margin="regular">
              <BasicSelect
                :option="[
                  {
                    value: '10',
                    text: '10',
                  },
                  {
                    value: '11',
                    text: '11',
                  },
                  {
                    value: '12',
                    text: '12',
                  },
                  {
                    value: '13',
                    text: '13',
                  },
                  {
                    value: '14',
                    text: '14',
                  },
                  {
                    value: '15',
                    text: '15',
                  },
                  {
                    value: '16',
                    text: '16',
                  },
                  {
                    value: '17',
                    text: '17',
                  },
                ]"
                buttonTitle="종료시간 선택하기"
                layerTitle="종료시간을 선택해 주세요"
                id="customerReservationCounselingEndTime"
                buttonId="customerReservationCounselingEndTimeButton"
              />
            </InputBlockCell>
            <InputBlockCell margin="regular">
              <div class="text-body-3">시 사이</div>
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <!-- Case : 상담상품 자동차금융 선택 시 -->
      <FormListItem
        titleText="차량구분"
        target="#customerReservationCounselingCarTypeButton"
        :selectOnly="true"
      >
        <FormInvalid :error="state.carTypeError">
          <InputBlock :error="state.carTypeError">
            <InputBlockCell :flexible="true">
              <BasicSelect
                :option="[
                  {
                    value: '1',
                    text: '국산차',
                  },
                  {
                    value: '2',
                    text: '수입차',
                  },
                ]"
                buttonTitle="차량구분 선택하기"
                layerTitle="차량구분을 선택해 주세요"
                id="customerReservationCounselingCarType"
                buttonId="customerReservationCounselingCarTypeButton"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="관심차량"
        target="#customerReservationCounselingCarName"
      >
        <FormInvalid :error="state.carNameError">
          <InputBlock :error="state.carNameError">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="관심차량"
                id="customerReservationCounselingCarName"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="지역"
        target="#customerReservationCounselingCarRegionButton"
        :selectOnly="true"
      >
        <FormInvalid :error="state.carRegionError">
          <InputBlock :error="state.carRegionError">
            <InputBlockCell :flexible="true">
              <BasicSelect
                :option="[
                  {
                    value: '1',
                    text: '전체',
                  },
                  {
                    value: '2',
                    text: '서울',
                  },
                  {
                    value: '3',
                    text: '부산',
                  },
                  {
                    value: '4',
                    text: '대구',
                  },
                  {
                    value: '5',
                    text: '광주',
                  },
                  {
                    value: '6',
                    text: '인천',
                  },
                  {
                    value: '7',
                    text: '대전',
                  },
                  {
                    value: '8',
                    text: '울산',
                  },
                  {
                    value: '9',
                    text: '경기',
                  },
                  {
                    value: '10',
                    text: '경남',
                  },
                  {
                    value: '11',
                    text: '경북',
                  },
                  {
                    value: '12',
                    text: '강원',
                  },
                  {
                    value: '13',
                    text: '충남',
                  },
                  {
                    value: '14',
                    text: '충북',
                  },
                  {
                    value: '15',
                    text: '전남',
                  },
                  {
                    value: '16',
                    text: '전북',
                  },
                  {
                    value: '17',
                    text: '제주',
                  },
                ]"
                buttonTitle="지역 선택하기"
                layerTitle="지역을 선택해 주세요"
                id="customerReservationCounselingCarRegion"
                buttonId="customerReservationCounselingCarRegionButton"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <!-- // Case : 상담상품 자동차금융 선택 시 -->
    </FormList>

    <div :class="[$style['agree-list'], 'row-margin-container']">
      <ul :class="$style['agree-list__list']">
        <li :class="$style['agree-list__item']">
          <div :class="$style['agree-list__head']">
            <CheckBox
              id="layerGuidePhoneCounselingAgree001"
              :classNames="{
                wrap: $style['agree-list__checkbox'],
              }"
              theme="tertiary"
            >
              <CheckBoxObject />
              <CheckBoxLabelText>개인정보 수집ㆍ이용 동의</CheckBoxLabelText>
            </CheckBox>
            <div :class="$style['agree-list__right']">
              <button type="button" :class="$style['agree-list__link']">
                <span :class="$style['agree-list__link-text']"> 상세보기 </span>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <ul :class="[$style['basic-list']]">
      <li :class="$style['basic-list__item']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          하나캐피탈(주)와 위탁계약을 체결하고 여신금융협회에 정식 등록된 리스
          및 할부 모집인(카크레딧, 리스&렌터카, 카네이션)을 통하여 고객상담 접수
          및 회신이 진행됩니다.
        </div>
      </li>
    </ul>

    <template v-slot:foot>
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton>확인</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/CustomerReservationCounseling.scss';
</style>
