<script>
// UC_M04_p001
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
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import SelectTable from '@/components/ui/table/SelectTable.vue';
import SelectTableRow from '@/components/ui/table/SelectTableRow.vue';

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
    CarEmblem,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    UnitText,
    SelectTable,
    SelectTableRow,
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
      yearError: false,
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
      </section>
      <!-- //계약자정보 -->

      <!-- 차량 정보 -->
      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-contents">차량 정보</h3>
        <FormList>
          <FormListItem
            titleText="차량번호"
            titleOptionalText="(선택)"
            target="#salesUsedCarCounselingEditNumber"
          >
            <FormInvalid :error="state.numberError">
              <InputBlock :error="state.numberError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="차량번호"
                    id="salesUsedCarCounselingEditNumber"
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
            target="#salesUsedCarCounselingEditModel"
          >
            <FormInvalid :error="state.modelError">
              <InputBlock :error="state.modelError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="모델명"
                    id="salesUsedCarCounselingEditModel"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="연식"
            target="#salesUsedCarCounselingEditYearButton"
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
                    id="salesUsedCarCounselingEditYear"
                    buttonId="salesUsedCarCounselingEditYearButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>

        <ButtonList :classNames="{ wrap: 'row-margin-contents-group' }">
          <ButtonListItem>
            <BasicButton :line="true" theme="secondary">조회</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </section>
      <!-- //차량 정보 -->
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
        <div class="row-margin-mini">
          <CarEmblem code="1001" name="현대" />
        </div>
        <h3 class="text-body-1 font-weight-medium">기아</h3>
        <p class="text-body-4 color-gray font-weight-regular row-margin-small">
          2.2 디젤 11인승 노블레스
        </p>
        <div class="row-margin-item">
          <UnitText rightUnit="만원">
            <strong>5,500</strong>
          </UnitText>
        </div>
      </BasicBox>

      <FormList>
        <FormListItem
          titleText="차량구입금액"
          :forceFocus="true"
          :require="true"
        >
          <FormInvalid :error="state.carAmountError">
            <ButtonList
              :wrap="true"
              :col="3"
              :classNames="{ wrap: 'row-margin-item-group' }"
            >
              <ButtonListItem>
                <BasicButton :line="true" theme="quaternary" size="small"
                  >+ 10만</BasicButton
                >
              </ButtonListItem>
              <ButtonListItem>
                <BasicButton :line="true" theme="quaternary" size="small"
                  >+ 100만</BasicButton
                >
              </ButtonListItem>
              <ButtonListItem>
                <BasicButton :line="true" theme="quaternary" size="small"
                  >+ 300만</BasicButton
                >
              </ButtonListItem>
              <ButtonListItem>
                <BasicButton :line="true" theme="quaternary" size="small"
                  >+ 500만</BasicButton
                >
              </ButtonListItem>
              <ButtonListItem>
                <BasicButton :line="true" theme="quaternary" size="small"
                  >+ 1,000만</BasicButton
                >
              </ButtonListItem>
            </ButtonList>
            <InputBlock :error="state.carAmountError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  id="salesUsedCarCounselingEditCarAmount"
                  pattern="\d*"
                  :useDelete="false"
                  align="right"
                  defaultValue="0"
                />
              </InputBlockCell>
              <template v-slot:innerRight>
                <div class="text-body-3">원</div>
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <NoticeText :classNames="{ wrap: 'row-margin-item' }"
              >차량구입금액은 2백만원 이상 입력해주세요.</NoticeText
            >
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
                    name="salesUsedCarCounselingEditProduct"
                    id="salesUsedCarCounselingEditProduct001"
                    :defaultChecked="true"
                  >
                    <BoxCheckLabel>모바일</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    name="salesUsedCarCounselingEditProduct"
                    id="salesUsedCarCounselingEditProduct002"
                  >
                    <BoxCheckLabel>중고차할부</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="대출신청금액" :forceFocus="true">
            <FormInvalid :error="state.loanAmountError">
              <ButtonList
                :wrap="true"
                :col="3"
                :classNames="{ wrap: 'row-margin-item-group' }"
              >
                <ButtonListItem>
                  <BasicButton :line="true" theme="quaternary" size="small"
                    >+ 10만</BasicButton
                  >
                </ButtonListItem>
                <ButtonListItem>
                  <BasicButton :line="true" theme="quaternary" size="small"
                    >+ 100만</BasicButton
                  >
                </ButtonListItem>
                <ButtonListItem>
                  <BasicButton :line="true" theme="quaternary" size="small"
                    >+ 300만</BasicButton
                  >
                </ButtonListItem>
                <ButtonListItem>
                  <BasicButton :line="true" theme="quaternary" size="small"
                    >+ 500만</BasicButton
                  >
                </ButtonListItem>
                <ButtonListItem>
                  <BasicButton :line="true" theme="quaternary" size="small"
                    >+ 1,000만</BasicButton
                  >
                </ButtonListItem>
              </ButtonList>
              <InputBlock :error="state.loanAmountError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    id="salesUsedCarCounselingEditLoanAmount"
                    pattern="\d*"
                    :useDelete="false"
                    align="right"
                    defaultValue="0"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>
                  <div class="text-body-3">원</div>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText
                >대출신청금액은 2백만원 이상 입력해주세요.</FormHelpText
              >
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="대출기간"
            target="#salesUsedCarCounselingEditLoanTermButton"
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
                    ]"
                    buttonTitle="대출기간 선택"
                    layerTitle="대출기간을 선택해 주세요"
                    id="salesUsedCarCounselingEditLoanTerm"
                    buttonId="salesUsedCarCounselingEditLoanTermButton"
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
          <CheckBox id="salesUsedCarCounselingEditSendSMS" theme="tertiary">
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

    <!-- Case : 조회 후 노출 -->
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
          <BasicButton theme="secondary">상담등록</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>
    <!-- // Case : 조회 후 노출 -->
  </PageContents>
</template>
