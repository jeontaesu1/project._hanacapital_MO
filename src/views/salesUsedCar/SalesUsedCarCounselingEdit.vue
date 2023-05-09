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
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      testError001: false,
    });
    onMounted(() => {
      store.ui.header.setTitle(() => '타이틀');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => ['menu']);
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
    <!-- 계약자정보 -->
    <section class="row-margin-container-medium">
      <h3 class="text-body-2 row-margin-contents">계약자정보</h3>
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
    <section>
      <h3 class="text-body-2 row-margin-contents">차량 정보</h3>
      <FormList>
        <FormListItem
          titleText="차량번호"
          titleOptionalText="(선택)"
          target="#layerAutoLongRentalDeliveryFormAddressSearch"
        >
          <FormInvalid :error="state.addressError">
            <InputBlock :error="state.addressError">
              <InputBlockCell :flexible="true">
                <BasicInput title="차량번호" :disabled="true" />
              </InputBlockCell>
              <template v-slot:right>
                <BasicButton
                  size="mini"
                  theme="tertiary"
                  id="layerAutoLongRentalDeliveryFormAddressSearch"
                  >조회</BasicButton
                >
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="모델명" target="#testInput001">
          <FormInvalid :error="state.testError001">
            <InputBlock :error="state.testError001">
              <InputBlockCell :flexible="true">
                <BasicInput title="모델명" id="testInput001" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="연식"
          target="#testInput010Button"
          :selectOnly="true"
        >
          <FormInvalid :error="state.testError001">
            <InputBlock :error="state.testError001">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '3개월',
                    },
                    {
                      value: '2',
                      text: '6개월',
                    },
                    {
                      value: '3',
                      text: '12개월',
                    },
                    {
                      value: '4',
                      text: '24개월',
                    },
                    {
                      value: '5',
                      text: '36개월',
                    },
                    {
                      value: '6',
                      text: '48개월',
                    },
                    {
                      value: '7',
                      text: '60개월',
                    },
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
                      text: '2004년',
                    },
                  ]"
                  buttonTitle="연식을 선택"
                  layerTitle="연식을 선택해 주세요"
                  id="testInput010"
                  buttonId="testInput010Button"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <ButtonList class="row-margin-contents-group">
        <ButtonListItem>
          <BasicButton :line="true" theme="secondary">조회</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </section>
    <!-- //차량 정보 -->

    <!-- 정보 조회 -->
    <BasicHr class="row-margin-container-medium" />
    <section>
      <div
        :class="[
          $style['basic-table'],
          $style['basic-table--scroll'],
          $style['basic-table--sticky'],
        ]"
      >
        <table>
          <colgroup>
            <col style="width: 83px" />
            <col style="width: 148px" />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th scope="col">제조사</th>
              <th scope="col">모델명</th>
              <th scope="col">차량 금액</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>기아</td>
              <td>2.2 디젤 11인승 노블레스</td>
              <td>5,500 만원</td>
            </tr>
            <tr>
              <td>기아</td>
              <td>2.2 디젤 11인승 노블레스</td>
              <td>5,500 만원</td>
            </tr>
            <tr>
              <td>기아</td>
              <td>2.2 디젤 11인승 노블레스</td>
              <td>5,500 만원</td>
            </tr>
            <tr>
              <td>기아</td>
              <td>2.2 디젤 11인승 노블레스</td>
              <td>5,500 만원</td>
            </tr>
            <tr>
              <td>기아</td>
              <td>2.2 디젤 11인승 노블레스</td>
              <td>5,500 만원</td>
            </tr>
            <tr>
              <td>기아</td>
              <td>2.2 디젤 11인승 노블레스</td>
              <td>5,500 만원</td>
            </tr>
            <tr>
              <td>기아</td>
              <td>2.2 디젤 11인승 노블레스</td>
              <td>5,500 만원</td>
            </tr>
            <tr>
              <td>기아</td>
              <td>2.2 디젤 11인승 노블레스</td>
              <td>5,500 만원</td>
            </tr>
            <tr>
              <td>기아</td>
              <td>2.2 디젤 11인승 노블레스</td>
              <td>5,500 만원</td>
            </tr>
            <tr>
              <td>기아</td>
              <td>2.2 디젤 11인승 노블레스</td>
              <td>5,500 만원</td>
            </tr>
            <tr>
              <td>기아</td>
              <td>2.2 디젤 11인승 노블레스</td>
              <td>5,500 만원</td>
            </tr>
          </tbody>
        </table>
      </div>
      <BasicBox class="row-margin-contents">
        <div class="flex-box row-margin-mini justify-conten-start">
          <CarEmblem code="1001" name="현대" />
        </div>
        <h3 class="text-body-1 font-weight-medium">GS(4세대)</h3>
        <p class="text-body-4 color-gray font-weight-regular row-margin-small">
          300 슈프림
        </p>
        <div class="row-margin-small">
          <UnitText verticalAlign="center" rightUnit="원">333,389</UnitText>
        </div>
      </BasicBox>
      <FormList>
        <FormListItem
          titleText="차량구입금액"
          :forceFocus="true"
          :require="true"
        >
          <FormInvalid :error="state.testError001">
            <BoxCheckList :wrap="true" :col="3" class="row-margin-item-group">
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="testBoxCheckList005"
                  id="testBoxCheckList005_001"
                >
                  <BoxCheckLabel class="text-body-4 color-gray"
                    >+ 10만</BoxCheckLabel
                  >
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="testBoxCheckList005"
                  id="testBoxCheckList005_002"
                >
                  <BoxCheckLabel class="text-body-4 color-gray"
                    >+ 100만</BoxCheckLabel
                  >
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="testBoxCheckList005"
                  id="testBoxCheckList005_003"
                >
                  <BoxCheckLabel class="text-body-4 color-gray"
                    >+ 300만</BoxCheckLabel
                  >
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="testBoxCheckList005"
                  id="testBoxCheckList005_004"
                >
                  <BoxCheckLabel class="text-body-4 color-gray"
                    >+ 500만</BoxCheckLabel
                  >
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="testBoxCheckList005"
                  id="testBoxCheckList005_005"
                >
                  <BoxCheckLabel class="text-body-4 color-gray"
                    >+ 1,000만</BoxCheckLabel
                  >
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <InputBlock :error="state.testError001">
              <InputBlockCell :flexible="true">
                <BasicInput
                  ref="testInput"
                  id="testInput001"
                  pattern="\d*"
                  :useDelete="false"
                  align="right"
                  defaultValue="15,300,000"
                />
              </InputBlockCell>
              <template v-slot:innerRight>원</template>
            </InputBlock>
            <NoticeText class="row-margin-item"
              >차량구입금액은 2백만원 이상 입력해주세요.</NoticeText
            >
          </FormInvalid>
        </FormListItem>
      </FormList>
    </section>
    <!-- //정보 조회 -->
    <!-- 금융 정보 -->
    <section class="row-margin-container-medium">
      <h3 class="text-body-2 row-margin-contents">금융 정보</h3>

      <FormList>
        <div>
          <FormListItem titleText="상품선택" :forceFocus="true">
            <FormInvalid :error="state.testError001">
              <BoxCheckList :classNames="{ wrap: 'row-margin-item-group' }">
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="testInputCheck014"
                    id="testInputCheck014_001"
                    :defaultChecked="true"
                  >
                    <BoxCheckLabel>다이렉트</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="testInputCheck014"
                    id="testInputCheck014_002"
                  >
                    <BoxCheckLabel>모바일</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="testInputCheck014"
                    id="testInputCheck014_003"
                  >
                    <BoxCheckLabel>드림카할부</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="대출신청금액" :forceFocus="true">
            <FormInvalid :error="state.testError001">
              <BoxCheckList :wrap="true" :col="3" class="row-margin-item-group">
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="testBoxCheckList004"
                    id="testBoxCheckList004_001"
                  >
                    <BoxCheckLabel class="text-body-4 color-gray"
                      >+ 10만</BoxCheckLabel
                    >
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="testBoxCheckList004"
                    id="testBoxCheckList004_002"
                  >
                    <BoxCheckLabel class="text-body-4 color-gray"
                      >+ 100만</BoxCheckLabel
                    >
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="testBoxCheckList004"
                    id="testBoxCheckList004_003"
                  >
                    <BoxCheckLabel class="text-body-4 color-gray"
                      >+ 300만</BoxCheckLabel
                    >
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="testBoxCheckList004"
                    id="testBoxCheckList004_004"
                  >
                    <BoxCheckLabel class="text-body-4 color-gray"
                      >+ 500만</BoxCheckLabel
                    >
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="testBoxCheckList004"
                    id="testBoxCheckList004_005"
                  >
                    <BoxCheckLabel class="text-body-4 color-gray"
                      >+ 1,000만</BoxCheckLabel
                    >
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    ref="testInput"
                    id="testInput001"
                    pattern="\d*"
                    :useDelete="false"
                    align="right"
                    defaultValue="15,300,000"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>원</template>
              </InputBlock>
              <FormHelpText
                >대출신청금액은 2백만원 이상 입력해주세요.</FormHelpText
              >
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="대출기간"
            target="#testInput011Button"
            :selectOnly="true"
          >
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
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
                        value: '3',
                        text: '60개월',
                      },
                    ]"
                    buttonTitle="대출기간 선택"
                    layerTitle="대출기간을 선택해 주세요"
                    id="testInput011"
                    buttonId="testInput011Button"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <NoticeText :classNames="{ wrap: 'color-red row-margin-item' }">
            대출기간별 금리 상이
          </NoticeText>
        </div>

        <div class="row-margin-container">
          <CheckBox
            id="testCheckBox022"
            theme="tertiary"
            :defaultChecked="true"
          >
            <CheckBoxObject />
            <CheckBoxLabelText
              >상담결과 고객에게 문자발송하기</CheckBoxLabelText
            >
          </CheckBox>
        </div>
      </FormList>
    </section>
    <!-- //금융 정보 -->
    <!-- 조회 후 나오는 푸터 버튼 영역 -->
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
    <!-- //조회 후 나오는 푸터 버튼 영역 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/salesUsedCar/SalesUsedCarCounseling.scss';
</style>
