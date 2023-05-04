<script>
// NC_M03_p002
import { onMounted, onUnmounted, reactive } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckObject from '@/components/ui/form/BoxCheckObject.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';

export default {
  components: {
    PageContents,
    ButtonList,
    ButtonListItem,
    BasicButton,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    InputBlock,
    InputBlockCell,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckObject,
    BoxCheckList,
    BoxCheckListItem,
    BasicHr,
    BasicBox,
    BasicBoxHead,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicSelect,
    UnitText,
    BasicInput,
    CarThumb,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      nameError: false,
      companyError: false,
      carError: false,
      interestRateError: false,
      loanPeriodError: false,
      optionNameError: false,
      optionPriceError: false,
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '신차모바일');
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
      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-contents">계약자 정보</h3>
        <!-- Case : 개인, GM 할부일 경우 -->
        <BasicBox>
          <BasicBoxHead>
            <div class="text-body-1 font-weight-medium">홍길동</div>
          </BasicBoxHead>

          <KeyValue margin="regular">
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>주민등록번호</KeyValueTitle>
              <KeyValueText>710908-1******</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>휴대폰번호</KeyValueTitle>
              <KeyValueText>010-1234-5678</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
        <!-- //Case : 개인, GM 할부일 경우 -->

        <!-- Case : 개인사업자일 경우 -->
        <BasicBox>
          <BasicBoxHead>
            <div class="text-body-1 font-weight-medium">길동상사</div>
          </BasicBoxHead>

          <KeyValue margin="regular">
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>대표자 이름</KeyValueTitle>
              <KeyValueText>홍길동</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>대표자 주민등록번호</KeyValueTitle>
              <KeyValueText>710908-1******</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>사업자번호</KeyValueTitle>
              <KeyValueText>123456789</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>대표자 휴대폰번호</KeyValueTitle>
              <KeyValueText>010-1234-5678</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
        <!-- //Case : 개인사업자일 경우 -->

        <!-- Case : 법인사업자일 경우 -->
        <BasicBox>
          <BasicBoxHead>
            <div class="text-body-1 font-weight-medium">한금융그룹</div>
          </BasicBoxHead>

          <KeyValue margin="regular">
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>연대보증인 이름</KeyValueTitle>
              <KeyValueText>홍길동</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>연대보증인 주민등록번호</KeyValueTitle>
              <KeyValueText>710908-1******</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>사업자번호</KeyValueTitle>
              <KeyValueText>123456789</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>법인번호</KeyValueTitle>
              <KeyValueText>123456789</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>연대보증인 휴대폰번호</KeyValueTitle>
              <KeyValueText>010-1234-5678</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
        <!-- //Case : 법인사업자일 경우 -->
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-contents">차량 정보</h3>
        <FormList>
          <FormListItem titleText="상품구분" :forceFocus="true">
            <BoxCheckList :wrap="true">
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="salesNewCarCounselingDivision"
                  id="salesNewCarCounselingDivision01"
                >
                  <BoxCheckLabel>오토론</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="salesNewCarCounselingDivision"
                  id="salesNewCarCounselingDivision02"
                >
                  <BoxCheckLabel>GM할부</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
          </FormListItem>

          <!-- Case : 상품구분 : 오토론 선택 시 -->
          <FormListItem
            titleText="상품명"
            target="#salesNewCarCounselingNameButton"
            :selectOnly="true"
          >
            <FormInvalid :error="state.nameError">
              <InputBlock :error="state.nameError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '정상오토론',
                      },
                    ]"
                    buttonTitle="상품명 선택하기"
                    layerTitle="상품명을 선택해 주세요"
                    id="salesNewCarCounselingName"
                    buttonId="salesNewCarCounselingNameButton"
                    defaultValue="1"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
          <!-- //Case : 상품구분 : 오토론 선택 시 -->

          <!-- Case : 상품구분 : GM할부 선택 시 -->
          <FormListItem
            titleText="상품명"
            target="#salesNewCarCounselingNameButton"
            :selectOnly="true"
          >
            <FormInvalid :error="state.nameError">
              <InputBlock :error="state.nameError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '콤보할부(GM)',
                      },
                      {
                        value: '2',
                        text: '무이자할부(GM)',
                      },
                      {
                        value: '3',
                        text: '초저리할부(GM)',
                      },
                      {
                        value: '4',
                        text: '저리장기할부(GM)',
                      },
                      {
                        value: '5',
                        text: '만원의행복(GM)',
                      },
                    ]"
                    buttonTitle="상품명 선택하기"
                    layerTitle="상품명을 선택해 주세요"
                    id="salesNewCarCounselingName"
                    buttonId="salesNewCarCounselingNameButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
          <!-- //Case : 상품구분 : GM할부 선택 시 -->

          <FormListItem
            titleText="제조사"
            target="#salesNewCarCounselingCompanyButton"
            :selectOnly="true"
          >
            <FormInvalid :error="state.companyError">
              <InputBlock :error="state.companyError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '타다대우',
                      },
                      {
                        value: '2',
                        text: '대창모터스',
                      },
                      {
                        value: '3',
                        text: '현대',
                      },
                      {
                        value: '4',
                        text: '제네시스',
                      },
                      {
                        value: '5',
                        text: '기아',
                      },
                      {
                        value: '6',
                        text: '쌍용',
                      },
                      {
                        value: '7',
                        text: '르노삼성',
                      },
                    ]"
                    buttonTitle="제조사 선택하기"
                    layerTitle="제조사를 선택해 주세요"
                    id="salesNewCarCounselingCompany"
                    buttonId="salesNewCarCounselingCompanyButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="차종"
            target="#salesNewCarCounselingCarButton"
            :selectOnly="true"
          >
            <FormInvalid :error="state.carError">
              <InputBlock :error="state.carError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '5.5톤 초장축 카고',
                      },
                      {
                        value: '2',
                        text: '5.5톤(4X2)장축 카고',
                      },
                      {
                        value: '3',
                        text: '넥쏘',
                      },
                      {
                        value: '4',
                        text: '더 뉴 그랜저 HEV (iG F/L)',
                      },
                      {
                        value: '5',
                        text: '더 뉴 그랜저 (IG F/L)',
                      },
                      {
                        value: '6',
                        text: '더 뉴 싼타페 HEV (TM F/L)',
                      },
                      {
                        value: '7',
                        text: '더 뉴 싼타페 (TM F/L)',
                      },
                      {
                        value: '8',
                        text: '포터2 (HR)',
                      },
                    ]"
                    buttonTitle="차종 선택하기"
                    layerTitle="차종을 선택해 주세요"
                    id="salesNewCarCounselingCar"
                    buttonId="salesNewCarCounselingCarButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>

        <div class="row-margin-contents-group">
          <h4 class="text-body-2 row-margin-item-medium">세부모델 선택</h4>
          <BoxCheckList align="full">
            <BoxCheckListItem>
              <BoxCheck :contents="true" name="detailModel" id="detailModel001">
                <BoxCheckLabel>2022년형 가솔린 1.0</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck :contents="true" name="detailModel" id="detailModel002">
                <BoxCheckLabel>2022년형 가솔린 1.0 터보</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck :contents="true" name="detailModel" id="detailModel003">
                <BoxCheckLabel>2022년형 가솔린 1.0 밴</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
        </div>

        <!-- Case : 세부모델 선택 시  -->
        <div class="row-margin-contents-group">
          <h4 class="text-body-2 row-margin-item-medium">트림</h4>
          <BoxCheckList align="full">
            <BoxCheckListItem>
              <BoxCheck :contents="true" name="tripSelect" id="tripSelect001">
                <BoxCheckLabel>
                  <span class="flex-box">
                    <span class="flex-box__cell flex-1">
                      모던 + 캐스퍼 액티브Ⅱ
                    </span>
                    <span class="flex-box__cell">16,850,000 원</span>
                  </span>
                </BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck :contents="true" name="tripSelect" id="tripSelect002">
                <BoxCheckLabel>
                  <span class="flex-box">
                    <span class="flex-box__cell flex-1">
                      스마트 + 캐스퍼 액티브Ⅰ
                    </span>
                    <span class="flex-box__cell">16,850,000 원</span>
                  </span>
                </BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck :contents="true" name="tripSelect" id="tripSelect003">
                <BoxCheckLabel>
                  <span class="flex-box">
                    <span class="flex-box__cell flex-1">
                      인스퍼레이션 + 캐스퍼 액티브Ⅱ
                    </span>
                    <span class="flex-box__cell">16,850,000 원</span>
                  </span>
                </BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
        </div>
        <!-- //Case : 세부모델 선택 시  -->

        <!-- Case : 트림 선택 시  -->
        <div class="row-margin-contents-group">
          <h4 class="text-body-2 row-margin-item-medium">차량 이미지</h4>
          <BasicBox theme="tertiary" className="align-center">
            <CarThumb
              size="medium"
              src="/images/_dummy/car-thumb.png"
              :classNames="{ wrap: 'inline-block' }"
            />
          </BasicBox>
        </div>
        <!-- //Case : 트림 선택 시  -->

        <div class="row-margin-contents-group">
          <h4 class="text-body-2 row-margin-item-medium">옵션 선택</h4>
          <BoxCheckList align="full">
            <BoxCheckListItem>
              <BoxCheck :contents="true" type="checkbox" id="optionSelect001">
                <template v-slot:left>
                  <BoxCheckObject />
                </template>
                <BoxCheckLabel>
                  <span class="flex-box">
                    <span class="flex-box__cell flex-1">에센셜 플러스</span>
                    <span class="flex-box__cell"> + 1,520,000 원 </span>
                  </span>
                </BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck :contents="true" type="checkbox" id="optionSelect002">
                <template v-slot:left>
                  <BoxCheckObject />
                </template>
                <BoxCheckLabel>
                  <span class="flex-box">
                    <span class="flex-box__cell flex-1">썬루프</span>
                    <span class="flex-box__cell"> + 1,520,000 원 </span>
                  </span>
                </BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck :contents="true" type="checkbox" id="optionSelect003"
                ><template v-slot:left>
                  <BoxCheckObject />
                </template>
                <BoxCheckLabel>
                  <span class="flex-box">
                    <span class="flex-box__cell flex-1">기타옵션</span>
                    <span class="flex-box__cell"> + 0 원 </span>
                  </span>
                </BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>

          <!-- Case : 옵션 선택 : 기타옵션 선택 시 -->
          <FormList :classNames="{ wrap: 'row-margin-contents' }">
            <FormListItem
              titleText="옵션명"
              target="#SalesNewCarCounselingOptionName"
            >
              <FormInvalid :error="state.optionNameError">
                <InputBlock :error="state.optionNameError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="옵션명"
                      id="SalesNewCarCounselingOptionName"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="옵션금액"
              target="#SalesNewCarCounselingOptionPrice"
            >
              <FormInvalid :error="state.optionPriceError">
                <InputBlock :error="state.optionPriceError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="옵션금액"
                      id="SalesNewCarCounselingOptionPrice"
                      pattern="\d*"
                      :useDelete="false"
                      align="right"
                    />
                  </InputBlockCell>
                  <template v-slot:innerRight>
                    <div class="text-body-3">원</div>
                  </template>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>
          <!-- //Case : 옵션 선택 : 기타옵션 선택 시 -->

          <BasicBox className="row-margin-container-medium" theme="tertiary">
            <KeyValue verticalAlign="center">
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>총 차량가격</KeyValueTitle>
                <KeyValueText>
                  <UnitText
                    rightUnit="원"
                    align="right"
                    :classNames="{ wrap: 'color-blue' }"
                  >
                    16,200,000
                  </UnitText>
                </KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </div>
      </section>

      <BasicHr className="row-margin-container-medium"></BasicHr>

      <section>
        <h3 class="text-title-2 row-margin-contents">대출 신청 정보</h3>
        <FormList>
          <FormListItem titleText="대출금리" :forceFocus="true">
            <FormInvalid :error="state.interestRateError">
              <BoxCheckList :classNames="{ wrap: 'row-margin-item-group' }">
                <BoxCheckListItem>
                  <BasicButton
                    size="small"
                    :line="true"
                    theme="quaternary"
                    :minSide="true"
                  >
                    + 100만
                  </BasicButton>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BasicButton
                    size="small"
                    :line="true"
                    theme="quaternary"
                    :minSide="true"
                  >
                    + 300만
                  </BasicButton>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BasicButton
                    size="small"
                    :line="true"
                    theme="quaternary"
                    :minSide="true"
                  >
                    + 500만
                  </BasicButton>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BasicButton
                    size="small"
                    :line="true"
                    theme="quaternary"
                    :minSide="true"
                  >
                    + 1,000만
                  </BasicButton>
                </BoxCheckListItem>
              </BoxCheckList>
              <InputBlock :error="state.interestRateError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    align="right"
                    :useDelete="false"
                    type="number"
                    pattern="\d*"
                    title="대출금리"
                    id="layerLoanCalculatorInterestRate"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>
                  <div class="text-body-3">원</div>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>
                대출신청금액은 3백만원 이상 입력해주세요.
              </FormHelpText>
            </FormInvalid>
          </FormListItem>
          <FormListItem
            titleText="대출기간"
            target="#salesNewCarCounselingLoanPeriodButton"
            :selectOnly="true"
          >
            <FormInvalid :error="state.loanPeriodError">
              <InputBlock :error="state.loanPeriodError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '12개월',
                      },
                      {
                        value: '2',
                        text: '20개월',
                      },
                      {
                        value: '3',
                        text: '24개월',
                      },
                      {
                        value: '4',
                        text: '36개월',
                      },
                      {
                        value: '5',
                        text: '48개월',
                      },
                      {
                        value: '6',
                        text: '50개월',
                      },
                      {
                        value: '7',
                        text: '60개월',
                      },
                      {
                        value: '8',
                        text: '72개월',
                      },
                    ]"
                    buttonTitle="대출 기간 선택하기"
                    layerTitle="대출 기간을 선택해 주세요"
                    id="salesNewCarCounselingLoanPeriod"
                    buttonId="salesNewCarCounselingLoanPeriodButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </section>
    </div>

    <template v-slot:foot>
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton :line="true" theme="quaternary">취소</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton theme="secondary">다음</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>
  </PageContents>
</template>
