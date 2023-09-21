<script>
// LM_M01_p002
import { onMounted, onUnmounted, reactive } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import ScrollSection from '@/components/ui/section/ScrollSection.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';

import IconInformation from '@/assets/images/icon/information.svg?component';

export default {
  components: {
    PageContents,
    StickyBar,
    StepProgress,
    PageTextGroup,
    PageMainText,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    BasicSelect,
    SecurityInput,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    BasicButton,
    ButtonList,
    ButtonListItem,
    TextButton,
    BasicHr,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    NoticeText,
    ScrollSection,
    BottomSticky,

    IconInformation,
  },
  setup() {
    const state = reactive({
      incomeTypeError: false,
      customerError: false,
      securityError: false,
      estateError: false,
      settingError: false,
      carNumberError: false,
      workNameError: false,
      workTypeError: false,
      workYearError: false,
      workMonthError: false,
      workIncomeError: false,
      buisnessNameError: false,
      buisnessLicenseError: false,
      loanAmountError: false,
      loanPeriodError: false,
    });

    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '대출상담');
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
    <template v-slot:head>
      <StickyBar>
        <StepProgress :total="3" :current="2" />
      </StickyBar>
    </template>

    <PageTextGroup>
      <PageMainText>
        계약정보를<br />
        입력하세요
      </PageMainText>
    </PageTextGroup>

    <div>
      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-contents">고객정보 입력</h3>

        <FormList>
          <FormListItem titleText="이름" :disabled="true">
            <InputBlock :disabled="true">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="이름"
                  defaultValue="김하나"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
          </FormListItem>

          <FormListItem titleText="주민등록번호" :disabled="true">
            <InputBlock :disabled="true">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="주민등록번호 앞 6자리"
                  defaultValue="123456"
                  :disabled="true"
                />
              </InputBlockCell>
              <InputBlockCell type="sub">-</InputBlockCell>
              <InputBlockCell :flexible="true">
                <SecurityInput
                  title="주민등록번호 뒤 7자리"
                  :dot="[true, true, true, true, true, true, true]"
                  :disabled="true"
                />
              </InputBlockCell>
            </InputBlock>
          </FormListItem>

          <FormListItem
            titleText="소득구분"
            target="#lMBlogLoanCounselingFormIncomeTypeButton"
            :selectOnly="true"
          >
            <FormInvalid :error="state.incomeTypeError">
              <InputBlock :error="state.incomeTypeError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '급여소득자',
                      },
                      {
                        value: '2',
                        text: '전문직',
                      },
                      {
                        value: '3',
                        text: '자영업자',
                      },
                      {
                        value: '4',
                        text: '학생',
                      },
                      {
                        value: '5',
                        text: '주부',
                      },
                      {
                        value: '6',
                        text: '무직',
                      },
                      {
                        value: '7',
                        text: '연금소득자',
                      },
                      {
                        value: '8',
                        text: '공무원',
                      },
                      {
                        value: '9',
                        text: '기타',
                      },
                    ]"
                    buttonTitle="소득구분 선택하기"
                    layerTitle="소득구분을 선택해 주세요"
                    id="lMBlogLoanCounselingFormIncomeType"
                    buttonId="lMBlogLoanCounselingFormIncomeTypeButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="고객구분" :forceFocus="true">
            <FormInvalid :error="state.customerError">
              <BoxCheckList>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="lMBlogLoanCounselingFormCustomer"
                    id="lMBlogLoanCounselingFormCustomer1"
                    :defaultChecked="true"
                  >
                    <BoxCheckLabel>개인</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="lMBlogLoanCounselingFormCustomer"
                    id="lMBlogLoanCounselingFormCustomer2"
                  >
                    <BoxCheckLabel>개인사업자</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="담보시세종류"
            target="#lMBlogLoanCounselingFormSecurityButton"
            :selectOnly="true"
          >
            <FormInvalid :error="state.securityError">
              <InputBlock :error="state.securityError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: 'KB부동산',
                      },
                      {
                        value: '2',
                        text: '부동산테크',
                      },
                      {
                        value: '3',
                        text: '부동산114',
                      },
                      {
                        value: '4',
                        text: '담보물 감정가액',
                      },
                      {
                        value: '5',
                        text: '분양가액',
                      },
                    ]"
                    buttonTitle="담보시세종류 선택하기"
                    layerTitle="담보시세종류를 선택해 주세요"
                    id="lMBlogLoanCounselingFormSecurity"
                    buttonId="lMBlogLoanCounselingFormSecurityButton"
                    defaultValue="1"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="소유지거주여부" :forceFocus="true">
            <FormInvalid :error="state.residenceError">
              <BoxCheckList>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="lMBlogLoanCounselingFormResidence"
                    id="lMBlogLoanCounselingFormResidence1"
                  >
                    <BoxCheckLabel>아니오</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="lMBlogLoanCounselingFormResidence"
                    id="lMBlogLoanCounselingFormResidence2"
                    :defaultChecked="true"
                  >
                    <BoxCheckLabel>예</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <NoticeText :classNames="{ wrap: 'row-margin-item' }">
                주민등록본 주소와 아파트 주소가 일치하면 ‘예’, 다르면 ‘아니오’를
                선택해 주세요.
              </NoticeText>
              <NoticeText :classNames="{ wrap: 'row-margin-item' }">
                분양가액, 감정가액의 경우 ‘예‘ 선택 후 아파트시세에 매매가
                입력해주시기 바랍니다.
              </NoticeText>
            </FormInvalid>
          </FormListItem>
        </FormList>

        <section class="row-margin-contents-group">
          <div class="flex-box">
            <div class="flex-box__cell flex-1">
              <h3 class="text-body-2">아파트 정보</h3>
            </div>
            <!-- DD : 아파트 시세 입력 후 비노출 -->
            <div class="flex-box__cell">
              <BasicButton size="mini" theme="tertiary"
                >아파트시세 입력</BasicButton
              >
            </div>
            <!-- // DD : 아파트 시세 입력 후 비노출 -->
          </div>
          <!-- DD : 아파트 시세 입력 후 노출 -->
          <BasicBox className="row-margin-item-group row-margin-bottom-none">
            <div class="text-body-3">
              인천광역시 연수구 송도동 39-1<br />
              더샵 랜드마크시티 [158.67/134.3㎡]
            </div>
          </BasicBox>
          <!-- // DD : 아파트 시세 입력 후 노출 -->

          <NoticeText
            :classNames="{ wrap: 'row-margin-item row-margin-bottom-none' }"
          >
            본인 소유 또는 배우자 공동 소유만 대출 진행이 가능합니다.
          </NoticeText>

          <FormList :classNames="{ wrap: 'row-margin-contents' }">
            <!-- DD : 아파트 시세 입력 후 선택된 아파트 시세 값 자동 입력 -->
            <FormListItem titleText="시세" :disabled="true">
              <InputBlock :disabled="true">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="시세"
                    pattern="\d*"
                    :useDelete="false"
                    align="right"
                    :disabled="true"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>
                  <div class="text-body-3">만원</div>
                </template>
              </InputBlock>
            </FormListItem>
            <!-- // DD : 아파트 시세 입력 후 선택된 아파트 시세 값 자동 입력 -->

            <FormListItem
              titleText="부동산 설정금액"
              target="#lMBlogLoanCounselingFormEstate"
            >
              <FormInvalid :error="state.estateError">
                <InputBlock :error="state.estateError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="부동산 설정금액"
                      id="lMBlogLoanCounselingFormEstate"
                      pattern="\d*"
                      :useDelete="false"
                      align="right"
                    />
                  </InputBlockCell>
                  <template v-slot:innerRight>
                    <div class="text-body-3">만원</div>
                  </template>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
                <div class="flex-box align-items-start row-margin-item">
                  <div class="flex-box__cell flex-1">
                    <NoticeText>
                      등기부등본 상의 채권최고액을 입력해주세요. (근저당설정이
                      2건 이상일 경우 합산하여 입력)
                    </NoticeText>
                  </div>
                  <div class="flex-box__cell flex-box__cell--medium">
                    <TextButton
                      theme="secondary"
                      :underline="true"
                      :block="true"
                    >
                      등기부등본 조회
                    </TextButton>
                  </div>
                </div>
              </FormInvalid>

              <!-- DD : 등기부등본 조회 버튼 클릭시 노출 -->
              <div class="row-margin-contents-group">
                <ScrollSection>
                  <template v-slot:head>
                    <h2 class="text-body-2">부동산설정정보</h2>
                  </template>

                  <!-- table -->
                  <div :class="$style['basic-table']">
                    <table>
                      <colgroup>
                        <col style="width: 60px" />
                        <col style="width: 80px" />
                        <col style="width: 128px" />
                        <col style="width: 193px" />
                        <col style="width: 71px" />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>순위번호</th>
                          <th>등기목적</th>
                          <th>접수정보</th>
                          <th>주요등기사항</th>
                          <th>대상소유자</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>2</td>
                          <td>근저당권설정</td>
                          <td>
                            2020년10월29일<br />
                            제15899호
                          </td>
                          <td>
                            채권최고금액 금92,000,000원<br />
                            근저당권자 주식회사 국민은행
                          </td>
                          <td>김하나</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- // table -->
                </ScrollSection>
                <NoticeText :classNames="{ wrap: 'row-margin-item' }">
                  ‘표제부(전유부분의 건물의 표시) 건물내역 : 철근콘크리트구조
                  59.84㎡
                </NoticeText>
              </div>
              <!-- //DD : 등기부등본 조회 버튼 클릭시 노출 -->
            </FormListItem>

            <FormListItem titleText="비금융권설정여부" :forceFocus="true">
              <FormInvalid :error="state.settingError">
                <BoxCheckList>
                  <BoxCheckListItem>
                    <BoxCheck
                      :minSide="true"
                      name="lMBlogLoanCounselingFormSetting"
                      id="lMBlogLoanCounselingFormSetting1"
                    >
                      <BoxCheckLabel>아니오</BoxCheckLabel>
                    </BoxCheck>
                  </BoxCheckListItem>
                  <BoxCheckListItem>
                    <BoxCheck
                      :minSide="true"
                      name="lMBlogLoanCounselingFormSetting"
                      id="lMBlogLoanCounselingFormSetting2"
                      :defaultChecked="true"
                    >
                      <BoxCheckLabel>예</BoxCheckLabel>
                    </BoxCheck>
                  </BoxCheckListItem>
                </BoxCheckList>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>
        </section>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-contents">차량정보 입력</h3>
        <FormList>
          <FormListItem
            titleText="차량번호"
            target="#lMBlogLoanCounselingFormCarNumber"
          >
            <FormInvalid :error="state.carNumberError">
              <InputBlock :error="state.carNumberError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="차량번호"
                    id="lMBlogLoanCounselingFormCarNumber"
                  />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton size="mini" theme="tertiary">조회</BasicButton>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>예) 12가 1234</FormHelpText>
            </FormInvalid>
          </FormListItem>
        </FormList>

        <div class="inline-wrap align-right row-margin-item">
          <TextButton
            theme="quaternary"
            :classNames="{ wrap: 'font-weight-regular' }"
          >
            대출가능차량 기준안내
            <template v-slot:rightIcon>
              <IconInformation />
            </template>
          </TextButton>
        </div>
      </section>
    </div>

    <BasicHr className="row-margin-container-medium" />

    <div>
      <section class="row-margin-container-medium">
        <h3 class="text-title-2">추가한도 입력정보</h3>
        <p class="text-body-3 color-gray-tertiary row-margin-small">
          직장정보를 입력하면 한도를 높일 수 있습니다.
        </p>

        <FormList :classNames="{ wrap: 'row-margin-contents' }">
          <FormListItem
            titleText="직장명"
            target="#lMBlogLoanCounselingFormWorkName"
          >
            <FormInvalid :error="state.workNameError">
              <InputBlock :error="state.workNameError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="직장명"
                    id="lMBlogLoanCounselingFormWorkName"
                  />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton size="mini" theme="tertiary"
                    >직장 검색</BasicButton
                  >
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="입사년도"
            target="#lMBlogLoanCounselingFormWorkYearButton"
            :selectOnly="true"
          >
            <FormInvalid :error="state.workYearError">
              <InputBlock :error="state.workYearError">
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
                    buttonTitle="입사년도 선택하기"
                    layerTitle="입사년도를 선택해 주세요"
                    id="lMBlogLoanCounselingFormWorkYear"
                    buttonId="lMBlogLoanCounselingFormWorkYearButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="입사월"
            target="#lMBlogLoanCounselingFormWorkMonthButton"
            :selectOnly="true"
          >
            <FormInvalid :error="state.workMonthError">
              <InputBlock :error="state.workMonthError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '1월',
                      },
                      {
                        value: '2',
                        text: '2월',
                      },
                      {
                        value: '3',
                        text: '3월',
                      },
                      {
                        value: '4',
                        text: '4월',
                      },
                      {
                        value: '5',
                        text: '5월',
                      },
                      {
                        value: '6',
                        text: '6월',
                      },
                      {
                        value: '7',
                        text: '7월',
                      },
                      {
                        value: '8',
                        text: '8월',
                      },
                      {
                        value: '9',
                        text: '9월',
                      },
                      {
                        value: '10',
                        text: '10월',
                      },
                      {
                        value: '11',
                        text: '11월',
                      },
                      {
                        value: '12',
                        text: '12월',
                      },
                    ]"
                    buttonTitle="입사월 선택하기"
                    layerTitle="입사월을 선택해 주세요"
                    id="lMBlogLoanCounselingFormWorkMonth"
                    buttonId="lMBlogLoanCounselingFormWorkMonthButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="연소득"
            target="#lMBlogLoanCounselingFormWorkIncome"
          >
            <FormInvalid :error="state.workIncomeError">
              <InputBlock :error="state.workIncomeError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="연소득"
                    id="lMBlogLoanCounselingFormWorkIncome"
                    pattern="\d*"
                    :useDelete="false"
                    align="right"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>
                  <div class="text-body-3">만원</div>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-contents">사업자정보</h3>

        <FormList>
          <FormListItem
            titleText="사업자명"
            target="#lMBlogLoanCounselingFormBuisnessName"
          >
            <FormInvalid :error="state.buisnessNameError">
              <InputBlock :error="state.buisnessNameError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="사업자명"
                    id="lMBlogLoanCounselingFormBuisnessName"
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
            titleText="사업자등록번호"
            target="#lMBlogLoanCounselingFormBuisnessLicense"
          >
            <FormInvalid :error="state.buisnessLicenseError">
              <InputBlock :error="state.buisnessLicenseError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="사업자등록번호"
                    id="lMBlogLoanCounselingFormBuisnessLicense"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="사업개시일자"
            target="#lMBlogLoanCounselingFormBuisnessDate"
          >
            <FormInvalid :error="state.buisnessDateError">
              <InputBlock :error="state.buisnessDateError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="사업개시일자"
                    id="lMBlogLoanCounselingFormBuisnessDate"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </section>
    </div>

    <BasicHr className="row-margin-container-medium" />

    <div>
      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-contents">대출신청정보</h3>

        <FormList>
          <FormListItem
            titleText="대출신청금액"
            target="#lMBlogLoanCounselingFormLoanAmount"
          >
            <FormInvalid :error="state.loanAmountError">
              <InputBlock :error="state.loanAmountError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="대출신청금액"
                    id="lMBlogLoanCounselingFormLoanAmount"
                    pattern="\d*"
                    :useDelete="false"
                    align="right"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>
                  <div class="text-body-3">만원</div>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="대출기간"
            target="#lMBlogLoanCounselingFormLoanPeriodButton"
            :selectOnly="true"
          >
            <FormInvalid :error="state.loanPeriodError">
              <InputBlock :error="state.loanPeriodError">
                <InputBlockCell :flexible="true">
                  <!-- DD : 개인사업자일 경우 최대 84개월까지만 노출 -->
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '12개월',
                      },
                      {
                        value: '2',
                        text: '24개월',
                      },
                      {
                        value: '3',
                        text: '36개월',
                      },
                      {
                        value: '4',
                        text: '48개월',
                      },
                      {
                        value: '5',
                        text: '60개월',
                      },
                      {
                        value: '6',
                        text: '72개월',
                      },
                      {
                        value: '7',
                        text: '84개월',
                      },
                      {
                        value: '8',
                        text: '96개월',
                      },
                      {
                        value: '9',
                        text: '108개월',
                      },
                      {
                        value: '10',
                        text: '120개월',
                      },
                    ]"
                    buttonTitle="대출기간 선택하기"
                    layerTitle="대출기간을 선택해 주세요"
                    id="lMBlogLoanCounselingFormLoanPeriod"
                    buttonId="lMBlogLoanCounselingFormLoanPeriodButton"
                  />
                  <!-- // DD : 개인사업자일 경우 최대 84개월까지만 노출 -->
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <NoticeText :classNames="{ wrap: 'row-margin-item' }">
                실제 정보와 상이할 경우 한도 및 금리가 달라질 수 있습니다.
              </NoticeText>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-contents">대출상담사 정보</h3>
        <BasicBox>
          <KeyValue margin="regular">
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>영업센터</KeyValueTitle>
              <KeyValueText>서울소비자금융센터</KeyValueText>
            </KeyValueItem>
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>대출상담사</KeyValueTitle>
              <KeyValueText>김하나</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </section>
    </div>

    <template v-slot:foot>
      <BottomSticky>
        <div class="bottom-wrap">
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton>한도 &#183; 금리 확인</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/lmBlog/LMBlogLoanCounselingForm.scss';
</style>
