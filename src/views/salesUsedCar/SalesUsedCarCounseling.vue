<script>
// UC_M03_p001
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
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
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import SelectTable from '@/components/ui/table/SelectTable.vue';
import SelectTableRow from '@/components/ui/table/SelectTableRow.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';

export default {
  components: {
    PageContents,
    BasicHr,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicButton,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BasicSelect,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    ButtonList,
    ButtonListItem,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    NoticeText,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    UnitText,
    SelectTable,
    SelectTableRow,
    BottomSticky,
    CarEmblem,
    SearchButton,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      numberError: false,
      modelError: false,
      visaError: false,
      yearError: false,
      businessNumberError: false,
      buisnessNameError: false,
      engineTypeError: false,
      carAmountError: false,
      productError: false,
      loanAmountError: false,
      loanTermError: false,
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '중고할부·론');
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
      <!-- 계약자정보 -->
      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-contents">계약자정보</h3>
        <BasicBox>
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <div class="text-body-1 font-weight-medium">김하나</div>
            </BasicBoxHeadLeft>
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

        <!-- Case : '외국인'일 경우 노출 -->
        <FormList :classNames="{ wrap: 'row-margin-contents' }">
          <FormListItem
            titleText="비자유형"
            target="#salesUsedCarCounselingVisaButton"
            :selectOnly="true"
          >
            <FormInvalid :error="state.visaError">
              <InputBlock :error="state.visaError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: 'A1',
                      },
                      {
                        value: '2',
                        text: 'A2',
                      },
                      {
                        value: '3',
                        text: 'A3',
                      },
                      {
                        value: '4',
                        text: 'D7',
                      },
                      {
                        value: '5',
                        text: 'D8',
                      },
                      {
                        value: '6',
                        text: 'D9',
                      },
                      {
                        value: '7',
                        text: 'E1',
                      },
                      {
                        value: '8',
                        text: 'E3',
                      },
                      {
                        value: '9',
                        text: 'E4',
                      },
                      {
                        value: '10',
                        text: 'E5',
                      },
                      {
                        value: '11',
                        text: 'E7',
                      },
                    ]"
                    buttonTitle="비자 선택"
                    layerTitle="비자유형을 선택해 주세요"
                    id="salesUsedCarCounselingVisa"
                    buttonId="salesUsedCarCounselingVisaButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
        <!-- // Case : '외국인'일 경우 노출 -->
      </section>
      <!-- // 계약자정보 -->

      <!-- 고객 구분 -->
      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-contents">고객 구분</h3>

        <BoxCheckList :classNames="{ wrap: 'row-margin-item-group' }">
          <BoxCheckListItem>
            <BoxCheck
              name="salesUsedCarCounselingCustomer"
              id="salesUsedCarCounselingCustomer001"
              :defaultChecked="true"
            >
              <BoxCheckLabel>개인</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              name="salesUsedCarCounselingCustomer"
              id="salesUsedCarCounselingCustomer002"
            >
              <BoxCheckLabel>개인사업자</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>

        <!-- Case : '개인 사업자' 선택 시 노출 -->
        <FormList :classNames="{ wrap: 'row-margin-contents' }">
          <!-- Case : 사업자번호 1개일 경우 노출 -->
          <FormListItem
            titleText="사업자번호"
            target="#salesUsedCarCounselingBusinessNumberInput"
            :disabled="true"
          >
            <FormInvalid :error="state.businessNumberError">
              <InputBlock :error="state.businessNumberError" :disabled="true">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="사업자번호"
                    id="salesUsedCarCounselingBusinessNumberInput"
                    defaultValue="123-45-67890"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
          <!-- // Case : 사업자번호 1개일 경우 노출 -->

          <!-- Case : 사업자번호 2개 이상일 경우 노출 -->
          <FormListItem
            titleText="사업자번호"
            target="#salesUsedCarCounselingBusinessNumberSelectButton"
          >
            <FormInvalid :error="state.businessNumberError">
              <InputBlock :error="state.businessNumberError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '123-45-67890',
                      },
                      {
                        value: '2',
                        text: '222-45-67890',
                      },
                      {
                        value: '3',
                        text: '333-45-67890',
                      },
                      {
                        value: '4',
                        text: '444-45-67890',
                      },
                      {
                        value: '5',
                        text: '555-45-67890',
                      },
                    ]"
                    buttonTitle="사업자번호 선택"
                    layerTitle="사업자번호를 선택해 주세요"
                    id="salesUsedCarCounselingBusinessNumberSelect"
                    buttonId="salesUsedCarCounselingBusinessNumberSelectButton"
                    defaultValue="1"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
          <!-- // Case : 사업자번호 2개 이상일 경우 노출 -->

          <FormListItem
            titleText="상호명"
            target="#salesUsedCarCounselingBuisnessName"
            :disabled="true"
          >
            <FormInvalid :error="state.buisnessNameError">
              <InputBlock :error="state.buisnessNameError" :disabled="true">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="상호명"
                    id="salesUsedCarCounselingBuisnessName"
                    defaultValue="김하나상사"
                    :disabled="true"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
        <!-- // Case : '개인 사업자' 선택 시 노출 -->
      </section>
      <!-- // 고객 구분 -->

      <!-- 차량 정보 -->
      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-contents">차량 정보</h3>
        <FormList>
          <FormListItem
            titleText="차량번호"
            titleOptionalText="(선택)"
            target="#salesUsedCarCounselingNumber"
          >
            <FormInvalid :error="state.numberError">
              <InputBlock :error="state.numberError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="차량번호"
                    id="salesUsedCarCounselingNumber"
                  />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton size="mini" theme="tertiary">조회</BasicButton>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="모델명"
            target="#salesUsedCarCounselingModel"
          >
            <FormInvalid :error="state.modelError">
              <InputBlock :error="state.modelError">
                <InputBlockCell :flexible="true">
                  <BasicInput title="모델명" id="salesUsedCarCounselingModel" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="연식"
            target="#salesUsedCarCounselingYearButton"
            :selectOnly="true"
          >
            <FormInvalid :error="state.yearError">
              <InputBlock :error="state.yearError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '2022년',
                      },
                      {
                        value: '2',
                        text: '2021년',
                      },
                      {
                        value: '3',
                        text: '2020년',
                      },
                      {
                        value: '4',
                        text: '2019년',
                      },
                      {
                        value: '5',
                        text: '2018년',
                      },
                      {
                        value: '6',
                        text: '2017년',
                      },
                      {
                        value: '7',
                        text: '2016년',
                      },
                      {
                        value: '8',
                        text: '2015년',
                      },
                      {
                        value: '9',
                        text: '2014년',
                      },
                      {
                        value: '10',
                        text: '2013년',
                      },
                      {
                        value: '11',
                        text: '2012년',
                      },
                      {
                        value: '12',
                        text: '2011년',
                      },
                      {
                        value: '13',
                        text: '2010년',
                      },
                      {
                        value: '14',
                        text: '2009년',
                      },
                      {
                        value: '15',
                        text: '2008년',
                      },
                      {
                        value: '16',
                        text: '2007년',
                      },
                      {
                        value: '17',
                        text: '2006년',
                      },
                      {
                        value: '18',
                        text: '2005년',
                      },
                    ]"
                    buttonTitle="연식 선택"
                    layerTitle="연식을 선택해 주세요"
                    id="salesUsedCarCounselingYear"
                    buttonId="salesUsedCarCounselingYearButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="유종"
            target="#salesUsedCarCounselingEngineTypeButton"
            :selectOnly="true"
          >
            <FormInvalid :error="state.engineTypeError">
              <InputBlock :error="state.engineTypeError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '2967cc',
                      },
                      {
                        value: '2',
                        text: '가솔린',
                      },
                      {
                        value: '3',
                        text: '디젤',
                      },
                      {
                        value: '4',
                        text: '전기',
                      },
                    ]"
                    buttonTitle="유종 선택"
                    layerTitle="유종을 선택해 주세요"
                    id="salesUsedCarCounselingEngineType"
                    buttonId="salesUsedCarCounselingEngineTypeButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>

        <ButtonList :classNames="{ wrap: 'row-margin-contents-group' }">
          <ButtonListItem>
            <BasicButton :line="true">조회</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </section>
      <!-- // 차량 정보 -->
    </div>

    <!-- Case : 조회 후 노출 -->
    <BasicHr className="row-margin-container-medium" />

    <div>
      <SelectTable>
        <template v-slot:colgroup>
          <col style="width: 83px" />
          <col />
          <col style="width: 90px" />
        </template>

        <template v-slot:head>
          <tr>
            <th>제조사</th>
            <th>모델명</th>
            <th>차량 금액</th>
          </tr>
        </template>

        <SelectTableRow>
          <td>기아</td>
          <td>2.2 디젤 11인승 노블레스</td>
          <td>5,500 만원</td>
        </SelectTableRow>
        <SelectTableRow :initialActive="true">
          <td>기아</td>
          <td>뉴 카니발(YP) 3.0 가솔린 9인승 노블레스</td>
          <td>5,300 만원</td>
        </SelectTableRow>
        <SelectTableRow>
          <td>기아</td>
          <td>2.2 디젤 11인승 노블레스</td>
          <td>5,500 만원</td>
        </SelectTableRow>
        <SelectTableRow>
          <td>기아</td>
          <td>2.2 디젤 11인승 노블레스</td>
          <td>5,500 만원</td>
        </SelectTableRow>
        <SelectTableRow>
          <td>기아</td>
          <td>뉴 카니발(YP) 3.0 가솔린 9인승 노블레스</td>
          <td>5,300 만원</td>
        </SelectTableRow>
        <SelectTableRow>
          <td>기아</td>
          <td>2.2 디젤 11인승 노블레스</td>
          <td>5,500 만원</td>
        </SelectTableRow>
      </SelectTable>

      <!-- Case : 차량 선택 후 노출 -->
      <BasicBox className="row-margin-contents">
        <div class="flex-box">
          <div class="flex-box__cell">
            <CarEmblem src="/images/_dummy/car-emblem.png" name="현대" />
          </div>
          <div class="flex-box__cell flex-1">
            <h3 class="text-body-1 font-weight-medium">기아</h3>
          </div>
          <div class="flex-box__cell">
            <p class="text-body-4 font-weight-light">2020년식</p>
          </div>
        </div>
        <div class="flex-box row-margin-small">
          <div class="flex-box__cell flex-1">
            <p
              class="text-body-4 color-gray font-weight-regular row-margin-small"
            >
              2.2 디젤 11인승 노블레스
            </p>
          </div>
          <div class="flex-box__cell">
            <div class="row-margin-item">
              <UnitText rightUnit="만원">
                <strong>5,500</strong>
              </UnitText>
            </div>
          </div>
        </div>
      </BasicBox>

      <FormList>
        <FormListItem
          titleText="차량구입금액"
          target="#salesUsedCarCounselingCarAmount"
          :forceFocus="true"
          :require="true"
        >
          <FormInvalid :error="state.carAmountError">
            <InputBlock :error="state.carAmountError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  id="salesUsedCarCounselingCarAmount"
                  pattern="\d*"
                  :useDelete="true"
                  align="right"
                  defaultValue="0"
                />
              </InputBlockCell>
              <template v-slot:innerRight>
                <div class="text-body-3">원</div>
              </template>
            </InputBlock>

            <FormInvalidMessage>Error Message</FormInvalidMessage>

            <!-- Case : 차량구입금액 입력 시 노출 -->
            <FormHelpText :classNames="{ wrap: 'align-right' }">
              삼천오백만원
            </FormHelpText>
            <!-- // Case : 차량구입금액 입력 시 노출 -->

            <NoticeText :classNames="{ wrap: 'row-margin-item' }"
              >차량구입금액은 2백만원 이상 입력해주세요.</NoticeText
            >
            <ButtonList
              :wrap="true"
              :col="4"
              :classNames="{ wrap: 'row-margin-top-none' }"
            >
              <ButtonListItem>
                <BasicButton
                  :line="true"
                  theme="quaternary"
                  size="small"
                  :minSide="true"
                  >+ 10만</BasicButton
                >
              </ButtonListItem>
              <ButtonListItem>
                <BasicButton
                  :line="true"
                  theme="quaternary"
                  size="small"
                  :minSide="true"
                  >+ 100만</BasicButton
                >
              </ButtonListItem>
              <ButtonListItem>
                <BasicButton
                  :line="true"
                  theme="quaternary"
                  size="small"
                  :minSide="true"
                  >+ 500만</BasicButton
                >
              </ButtonListItem>
              <ButtonListItem>
                <BasicButton
                  :line="true"
                  theme="quaternary"
                  size="small"
                  :minSide="true"
                  >+ 1,000만</BasicButton
                >
              </ButtonListItem>
            </ButtonList>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-contents">금융 정보</h3>

        <FormList>
          <FormListItem titleText="상품선택" :forceFocus="true">
            <FormInvalid :error="state.productError">
              <BoxCheckList :classNames="{ wrap: 'row-margin-item-group' }">
                <BoxCheckListItem>
                  <BoxCheck
                    name="salesUsedCarCounselingProduct"
                    id="salesUsedCarCounselingProduct001"
                    :defaultChecked="true"
                  >
                    <BoxCheckLabel>모바일</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    name="salesUsedCarCounselingProduct"
                    id="salesUsedCarCounselingProduct002"
                  >
                    <BoxCheckLabel>중고차할부</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="대출신청금액"
            target="#salesUsedCarCounselingLoanAmount"
            :forceFocus="true"
          >
            <FormInvalid :error="state.loanAmountError">
              <InputBlock :error="state.loanAmountError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    id="salesUsedCarCounselingLoanAmount"
                    pattern="\d*"
                    :useDelete="true"
                    align="right"
                    defaultValue="0"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>
                  <div class="text-body-3">원</div>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>

              <!-- Case : 대출신청금액 입력 시 노출 -->
              <FormHelpText :classNames="{ wrap: 'align-right' }">
                삼천오백만원
              </FormHelpText>
              <!-- // Case : 대출신청금액 입력 시 노출 -->

              <NoticeText :classNames="{ wrap: 'row-margin-item' }"
                >대출신청금액은 2백만원 이상 입력해주세요.</NoticeText
              >
              <ButtonList
                :wrap="true"
                :col="4"
                :classNames="{ wrap: 'row-margin-top-none' }"
              >
                <ButtonListItem>
                  <BasicButton
                    :line="true"
                    theme="quaternary"
                    size="small"
                    :minSide="true"
                    >+ 10만</BasicButton
                  >
                </ButtonListItem>
                <ButtonListItem>
                  <BasicButton
                    :line="true"
                    theme="quaternary"
                    size="small"
                    :minSide="true"
                    >+ 100만</BasicButton
                  >
                </ButtonListItem>
                <ButtonListItem>
                  <BasicButton
                    :line="true"
                    theme="quaternary"
                    size="small"
                    :minSide="true"
                    >+ 500만</BasicButton
                  >
                </ButtonListItem>
                <ButtonListItem>
                  <BasicButton
                    :line="true"
                    theme="quaternary"
                    size="small"
                    :minSide="true"
                    >+ 1,000만</BasicButton
                  >
                </ButtonListItem>
              </ButtonList>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="대출기간"
            target="#salesUsedCarCounselingLoanTermButton"
            :selectOnly="true"
          >
            <FormInvalid :error="state.loanTermError">
              <InputBlock :error="state.loanTermError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '24개월',
                      },
                      {
                        value: '2',
                        text: '36개월',
                      },
                      {
                        value: '3',
                        text: '48개월',
                      },
                      {
                        value: '4',
                        text: '60개월',
                      },
                      {
                        value: '5',
                        text: '72개월',
                      },
                    ]"
                    buttonTitle="대출기간 선택"
                    layerTitle="대출기간을 선택해 주세요"
                    id="salesUsedCarCounselingLoanTerm"
                    buttonId="salesUsedCarCounselingLoanTermButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <NoticeText :classNames="{ wrap: 'color-red row-margin-item' }">
                대출기간별 금리 상이
              </NoticeText>
            </FormInvalid>
          </FormListItem>
        </FormList>

        <div class="row-margin-container">
          <CheckBox id="salesUsedCarCounselingSendSMS" theme="tertiary">
            <CheckBoxObject />
            <CheckBoxLabelText
              >상담결과 고객에게 문자발송하기</CheckBoxLabelText
            >
          </CheckBox>
        </div>
      </section>
      <!-- // Case : 차량 선택 후 노출 -->
    </div>
    <!-- // Case : 조회 후 노출 -->

    <!-- S:240409 수정 -->
    <div class="row-margin-container">
      <FormList>
        <FormListItem titleText="수수료 지급처(선택)" target="#testInput007">
          <FormInvalid :error="state.testError001">
            <InputBlock :error="state.testError001" type="search">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="search"
                  title="수수료 지급처 검색"
                  id="testInput007"
                  placeholder="수수료 지급처(선택)"
                />
              </InputBlockCell>
            </InputBlock>
          </FormInvalid>
        </FormListItem>
      </FormList>
    </div>
    <!-- E:240409 수정 -->

    <template v-slot:foot>
      <!-- Case : 조회 후 노출 -->
      <BottomSticky>
        <div class="bottom-wrap">
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton :line="true" theme="quaternary">취소</BasicButton>
            </ButtonListItem>
            <ButtonListItem>
              <BasicButton>상담등록</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </BottomSticky>
      <!-- // Case : 조회 후 노출 -->
    </template>
  </PageContents>
</template>
