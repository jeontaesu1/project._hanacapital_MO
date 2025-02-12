<script>
// LR_M06_p001
import { onMounted, onUnmounted, reactive } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';

import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
// import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BasicSelect2nd from '@/components/ui/form/BasicSelect2nd.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';

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
import BottomSticky from '@/components/ui/common/BottomSticky.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    BasicBox,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    // FormHelpText,

    InputBlock,
    InputBlockCell,
    BasicInput,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    BasicSelect,
    BasicSelect2nd,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,

    BasicButton,
    ButtonList,
    ButtonListItem,
    BottomSticky,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };
    onMounted(() => {
      store.ui.header.setTitle(() => ' ');
      store.ui.header.setLeftButtons(() => [' ']);
      store.ui.header.setRightButtons(() => []);
    });
    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });

    const state = reactive({
      PageTextGroup,
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

    const testInputEvent = (e = {}) => {
      console.log(e.type, e.target);
    };

    return {
      state,
      testInputEvent,
    };
  },
};
</script>

<template>
  <PageContents
    :classNames="{
      body: $style['page-body'],
    }"
  >
    <PageTextGroup :class="'page-text-group'">
      <div :class="($style['illustration-img'], 'logo-main')">
        <img
          src="@/assets/images/illustration/logo_main.png"
          alt="하나캐피탈"
          style="width: 108px; height: 24px"
        />
      </div>

      <div :class="'img-top'">
        <div :class="$style['illustration-img']">
          <img
            src="@/assets/images/contents/img-lease-rental2.png"
            alt="만기대상 프로세스"
          />
        </div>
        <PageMainText :class="'text-position'">
          하나 가족을 위한<br />
          <div :class="'font-weight-bold'">특별 혜택</div>
        </PageMainText>
      </div>
    </PageTextGroup>

    <div :class="[$style['contents-list']]">
      <BasicBox :class="(['basicPadding20'], 'basic-box')">
        <!-- <ul
          :class="[
            $style['contents-list__list'],
            $style['contents-list__list--senary'],
            'content-wrap',
          ]"
        >
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="[$style['illustration-img'], 'content-num']">1.</div>
              <div
                :class="[$style['contents-list__title'], 'content-list-con']"
              >
                중도 반환 수수료 면제!<br />
                (하나캐피탈 상품 재이용시)
              </div>
            </div>
          </li>
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="['content-num']">2.</div>
              <div
                :class="[$style['contents-list__title'], 'content-list-con']"
              >
                본사 다이렉트 진행!<br />
                (저렴한 월납입금)
              </div>
            </div>
          </li>
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="['content-num']">3.</div>
              <div
                :class="[$style['contents-list__title'], 'content-list-con']"
              >
                빠른 출고!<br />
                <span>※ 상담결과에 따라 변동 가능</span>
              </div>
            </div>
          </li>
        </ul> -->
        <ul :class="'event-list'">
          <li :class="'event-item'">
            <div :class="['event-img']">
              <img src="@/assets/images/illustration/img-percent.png" />
            </div>
            <div :class="'event-con'">
              다이렉트로 저렴하게!<br />
              <span :class="'event-desc'">(하나 가족 특별 혜택가)</span>
            </div>
          </li>
          <li :class="'event-item'">
            <div :class="['event-img']">
              <img src="@/assets/images/illustration/img-fastYellow.png" />
            </div>
            <div :class="'event-con'">
              다이렉로 빠르게!<br />
              <span :class="'event-desc'">(전속 상담원 즉시 배정)</span>
            </div>
          </li>
          <li :class="'event-item'">
            <div :class="['event-img']">
              <img src="@/assets/images/illustration/img-speaker.png" />
            </div>
            <div :class="'event-con'">
              재이용 혜택까지!<br />
              <span :class="'event-desc'">(만기 6개월 전 재이용시 혜택)</span>
            </div>
          </li>
        </ul>
        <em class="event-info">준법심의필 25-00 (yyyy-mm-dd ~ yyyy-mm-dd)능</em>
      </BasicBox>
    </div>

    <FormList :class="[$style['agree-list'], 'marginTop28']">
      <PageTextGroup>
        <PageMainText>
          <span style="font-weight: 300">추천인 정보를</span><br />
          입력해 주세요
        </PageMainText>
      </PageTextGroup>
      <!-- 추천인 -->
      <FormListItem titleText="추천인" target="#testInput001">
        <FormInvalid :error="state.nameError">
          <InputBlock :error="state.nameError">
            <InputBlockCell :flexible="true">
              <BasicInput
                ref="testInput"
                id="testInput001"
                @keyup="testInputEvent"
                @focus="testInputEvent"
                @blur="testInputEvent"
              />
            </InputBlockCell>
            <template v-slot:right>
              <BasicButton size="small" theme="tertiary" style="width: 64px"
                >검색</BasicButton
              >
            </template>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <!-- // 추천인 검색 -->

      <!-- 상품구분 -->
      <FormListItem titleText="상품구분" :forceFocus="true">
        <FormInvalid :error="state.typeError">
          <BoxCheckList>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="LeaseRentEstimationSystemType01"
                id="LeaseRentEstimationSystemType01_001"
              >
                <!-- :defaultChecked="true" -->
                <BoxCheckLabel>장기렌터카</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="LeaseRentEstimationSystemType01"
                id="LeaseRentEstimationSystemType01_002"
              >
                <BoxCheckLabel>오토리스</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <!-- // 상품구분 -->

      <!-- 고객구분 -->
      <FormListItem
        :class="'marginTop40'"
        titleText="고객구분"
        :forceFocus="true"
      >
        <FormInvalid :error="state.typeError">
          <BoxCheckList>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="LeaseRentEstimationSystemType02"
                id="LeaseRentEstimationSystemType02_001"
              >
                <BoxCheckLabel>개인</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="LeaseRentEstimationSystemType02"
                id="LeaseRentEstimationSystemType02_002"
              >
                <BoxCheckLabel>개인사업자</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="LeaseRentEstimationSystemType02"
                id="LeaseRentEstimationSystemType02_003"
              >
                <BoxCheckLabel>법인</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <!-- // 고객구분 -->

      <!-- 희망차량선택 -->
      <FormListItem
        titleText="희망차량"
        titleOptionalText="(선택)"
        target="#testInput010Button"
        :selectOnly="true"
      >
        <FormInvalid :error="state.testError001">
          <InputBlock :error="state.testError001">
            <InputBlockCell :flexible="true">
              <BasicSelect2nd
                :option="[
                  {
                    value: '1',
                    text: '111',
                  },
                  {
                    value: '2',
                    text: '222',
                  },
                  {
                    value: '3',
                    text: '333',
                  },
                  {
                    value: '4',
                    text: '444',
                  },
                  {
                    value: '5',
                    text: '555',
                  },
                ]"
                buttonTitle="희망차량 선택하기"
                layerTitle="희망차량을 선택해 주세요"
                id="testInput010"
                buttonId="testInput010Button"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <!-- // 희망차량선택 -->

      <!-- 연락가능시간 -->
      <FormListItem
        titleText="연락가능시간"
        titleOptionalText="(선택)"
        target="#layerAutoLongRentalEvaluationCounselingStartTimeButton"
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
                id="layerAutoLongRentalEvaluationCounselingStartTime"
                buttonId="layerAutoLongRentalEvaluationCounselingStartTimeButton"
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
                  {
                    value: '18',
                    text: '18',
                  },
                ]"
                buttonTitle="종료시간 선택하기"
                layerTitle="종료시간을 선택해 주세요"
                id="layerAutoLongRentalEvaluationCounselingEndTime"
                buttonId="layerAutoLongRentalEvaluationCounselingEndTimeButton"
              />
            </InputBlockCell>
            <InputBlockCell margin="regular">
              <div class="text-body-3">시 사이</div>
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
      <!-- // 연락가능시간 -->
    </FormList>

    <section class="service-wrap row-margin-contents">
      <div :class="[$style['agree-list'], 'row-margin-container']">
        <ul :class="[$style['basic-list'], 'marginTop24']">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              하나캐피탈㈜와 위탁계약을 체결하고 여신금융협회에 정식 등록된 리스
              및 할부 모집인을 통하여 전문 상담원의 상담이 진행됩니다.
            </div>
          </li>
        </ul>
      </div>
    </section>

    <template v-slot:foot>
      <BottomSticky>
        <div class="bottom-wrap">
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton>상담 신청</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/MainMyLoanEmpty.scss';
@import '@/assets/scss/views/uiGuide/GuideComponentModule.scss';
</style>

<style lang="scss" scoped>
.page-text-group {
  margin-bottom: 0;
}

.logo-main {
  margin-bottom: 12px;
}
.content-border {
  padding: 20px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
}
.content-num {
  font-size: 14px;
  color: #666;
  padding-right: 4px;
}
.content-list-con {
  font-size: 14px;
  color: #666;

  span {
    font-size: 12px;
  }
}

.marginTop28 {
  margin-top: 28px;
}
.marginTop40 {
  margin-top: 40px;
}

._form__title-optional_kn5a5_42 {
  position: relative;

  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 1px;
    height: 1px;
    background: #f00;
    border-radius: 50%;
  }
}

.border-division {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin: 40px 0;
  width: calc(100% + 40px);
  height: 10px;
  background: #f3f3f3;
}
.basicPadding20 {
  padding: 20px;
}
.basicPadding12 {
  padding: 12px;
}

.img-top {
  position: relative;

  .text-position {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 20px 0;
    font-size: 28px;
  }
}

.basic-box {
  margin-left: -20px;
  margin-right: -20px;
  border: none;
  border-radius: 0;
  background: #f1f3f2;
  padding: 0 20px 40px 20px;
}

.event-list {
  margin: 0;
  padding: 0;

  .event-item {
    display: flex;
    align-items: center;
    list-style: none;
    background: #fff;
    padding: 12px;
    border-radius: 12px;
    gap: 16px;
    margin-bottom: 16px;

    .event-img {
      height: 48px;

      img {
        height: 100%;
      }
    }

    .event-con {
      font-weight: 500;

      .event-desc {
        font-size: 13px;
        font-weight: 300;
        color: #666;
      }
    }
  }
}
.event-info {
  display: block;
  font-size: 13px;
  color: #666;
  font-weight: 300;
  font-style: normal;
}
</style>
