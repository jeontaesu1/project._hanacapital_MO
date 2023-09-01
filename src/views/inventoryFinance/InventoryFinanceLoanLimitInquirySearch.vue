<script>
// IF_M08_p002
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import RoundTab from '@/components/ui/tab/RoundTab.vue';
import RoundTabButton from '@/components/ui/tab/RoundTabButton.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import SelectTable from '@/components/ui/table/SelectTable.vue';
import SelectTableRow from '@/components/ui/table/SelectTableRow.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    UiTab,
    UiTabPanel,
    StickyBar,
    NavTab,
    NavTabButton,
    RoundTab,
    RoundTabButton,
    InputBlock,
    InputBlockCell,
    SearchButton,
    BasicInput,
    BasicHr,
    CarEmblem,
    BasicBox,
    UnitText,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicSelect,
    SelectTable,
    SelectTableRow,
    BottomSticky,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      brandError: false,
      modelError: false,
      yearError: false,
      engineTypeError: false,
      trimError: false,
      carNumberError: false,
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '한도조회');
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
  <UiTab>
    <PageContents>
      <PageTextGroup>
        <PageMainText>
          차량을<br />
          <strong> 선택해 주세요 </strong>
        </PageMainText>
      </PageTextGroup>

      <StickyBar>
        <NavTab :useUiTab="true">
          <NavTabButton
            link="inventoryFinanceLoanLimitInquirySearchCarNumberTab001"
            >차량번호조회</NavTabButton
          >
          <NavTabButton
            link="inventoryFinanceLoanLimitInquirySearchCarNumberTab002"
            >모델/연식조회</NavTabButton
          >
        </NavTab>
      </StickyBar>

      <UiTabPanel name="inventoryFinanceLoanLimitInquirySearchCarNumberTab001">
        <InputBlock>
          <InputBlockCell :flexible="true">
            <BasicInput
              type="search"
              title="차량번호 검색어"
              placeholder="차량번호 입력"
            />
          </InputBlockCell>
          <InputBlockCell type="search">
            <SearchButton />
          </InputBlockCell>
        </InputBlock>

        <!-- Case : 조회 후 노출 -->
        <BasicHr className="row-margin-container-medium" />

        <BasicBox>
          <div class="flex-box row-margin-mini">
            <div class="flex-box__cell">
              <CarEmblem src="/images/_dummy/car-emblem.png" name="현대" />
            </div>
            <div class="flex-box__cell flex-box__cell--small">
              <p class="text-body-4 font-weight-light">2020년식</p>
            </div>
          </div>
          <h3 class="text-body-1 font-weight-medium">
            쏘나타 뉴 라이즈 1.6T-Gdi 스마트 (마이 스마트 핏)
          </h3>
          <div class="row-margin-item">
            <UnitText rightUnit="원">23,500,000</UnitText>
          </div>
        </BasicBox>
        <!-- // Case : 조회 후 노출 -->
      </UiTabPanel>

      <UiTabPanel name="inventoryFinanceLoanLimitInquirySearchCarNumberTab002">
        <RoundTab>
          <RoundTabButton tagName="button" type="button" :active="true">
            국산차
          </RoundTabButton>
          <RoundTabButton tagName="button" type="button">
            수입차
          </RoundTabButton>
        </RoundTab>

        <div>
          <FormList>
            <FormListItem
              titleText="브랜드"
              target="#inventoryFinanceLoanLimitInquirySearchBrandButton"
              :selectOnly="true"
            >
              <FormInvalid :error="state.brandError">
                <InputBlock :error="state.brandError">
                  <InputBlockCell :flexible="true">
                    <BasicSelect
                      :option="[
                        {
                          value: '1',
                          text: '현대',
                        },
                        {
                          value: '2',
                          text: '기아',
                        },
                        {
                          value: '3',
                          text: '제네시스',
                        },
                        {
                          value: '4',
                          text: '쉐보레',
                        },
                      ]"
                      buttonTitle="브랜드 선택하기"
                      layerTitle="브랜드를 선택해 주세요"
                      id="inventoryFinanceLoanLimitInquirySearchBrand"
                      buttonId="inventoryFinanceLoanLimitInquirySearchBrandButton"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="모델명"
              target="#inventoryFinanceLoanLimitInquirySearchModelButton"
              :selectOnly="true"
            >
              <FormInvalid :error="state.modelError">
                <InputBlock :error="state.modelError">
                  <InputBlockCell :flexible="true">
                    <BasicSelect
                      :option="[
                        {
                          value: '1',
                          text: '쏘나타',
                        },
                        {
                          value: '2',
                          text: '그랜저',
                        },
                        {
                          value: '3',
                          text: '아반떼',
                        },
                      ]"
                      buttonTitle="모델명 선택하기"
                      layerTitle="모델명을 선택해 주세요"
                      id="inventoryFinanceLoanLimitInquirySearchModel"
                      buttonId="inventoryFinanceLoanLimitInquirySearchModelButton"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="연식"
              target="#inventoryFinanceLoanLimitInquirySearchYearButton"
              :selectOnly="true"
            >
              <FormInvalid :error="state.yearError">
                <InputBlock :error="state.yearError">
                  <InputBlockCell :flexible="true">
                    <BasicSelect
                      :option="[
                        {
                          value: '1',
                          text: '2023년',
                        },
                        {
                          value: '2',
                          text: '2022년',
                        },
                        {
                          value: '3',
                          text: '2021년',
                        },
                        {
                          value: '4',
                          text: '2020년',
                        },
                        {
                          value: '5',
                          text: '2019년',
                        },
                        {
                          value: '6',
                          text: '2018년',
                        },
                        {
                          value: '7',
                          text: '2017년',
                        },
                        {
                          value: '8',
                          text: '2016년',
                        },
                        {
                          value: '9',
                          text: '2015년',
                        },
                        {
                          value: '10',
                          text: '2014년',
                        },
                        {
                          value: '11',
                          text: '2013년',
                        },
                        {
                          value: '12',
                          text: '2012년',
                        },
                        {
                          value: '13',
                          text: '2011년',
                        },
                        {
                          value: '14',
                          text: '2010년',
                        },
                        {
                          value: '15',
                          text: '2009년',
                        },
                        {
                          value: '16',
                          text: '2008년',
                        },
                        {
                          value: '17',
                          text: '2007년',
                        },
                        {
                          value: '18',
                          text: '2006년',
                        },
                        {
                          value: '19',
                          text: '2005년',
                        },
                      ]"
                      buttonTitle="연식 선택하기"
                      layerTitle="연식을 선택해 주세요"
                      id="inventoryFinanceLoanLimitInquirySearchYear"
                      buttonId="inventoryFinanceLoanLimitInquirySearchYearButton"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="엔진타입"
              target="#inventoryFinanceLoanLimitInquirySearchEngineTypeButton"
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
                      buttonTitle="엔진타입 선택하기"
                      layerTitle="엔진타입을 선택해 주세요"
                      id="inventoryFinanceLoanLimitInquirySearchEngineType"
                      buttonId="inventoryFinanceLoanLimitInquirySearchEngineTypeButton"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="세부모델"
              target="#inventoryFinanceLoanLimitInquirySearchDetailButton"
              :selectOnly="true"
            >
              <FormInvalid :error="state.detailError">
                <InputBlock :error="state.detailError">
                  <InputBlockCell :flexible="true">
                    <BasicSelect
                      :option="[
                        {
                          value: '1',
                          text: '쏘나타 뉴 라이즈 1.6T-Gdi 스마트',
                        },
                        {
                          value: '2',
                          text: '봉고3 트럭 다용도복합 냉동탑차 1톤',
                        },
                        {
                          value: '3',
                          text: '봉고3 EV 리스',
                        },
                        {
                          value: '4',
                          text: '봉고3 윙바디',
                        },
                      ]"
                      buttonTitle="세부모델 선택하기"
                      layerTitle="세부모델을 선택해 주세요"
                      id="inventoryFinanceLoanLimitInquirySearchDetail"
                      buttonId="inventoryFinanceLoanLimitInquirySearchDetailButton"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="차량번호"
              target="#inventoryFinanceLoanLimitInquirySearchCarNumber"
            >
              <FormInvalid :error="state.carNumberError">
                <InputBlock :error="state.carNumberError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="차량번호"
                      id="inventoryFinanceLoanLimitInquirySearchCarNumber"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>

          <div className="row-margin-container-medium">
            <BasicButton :line="true">조회</BasicButton>
          </div>
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
            <div class="flex-box row-margin-mini">
              <div class="flex-box__cell">
                <CarEmblem src="/images/_dummy/car-emblem.png" name="현대" />
              </div>
              <div class="flex-box__cell flex-box__cell--small">
                <p class="text-body-4 font-weight-light">2020년식</p>
              </div>
            </div>
            <h3 class="text-body-1 font-weight-medium">
              2.2 디젤 11인승 노블레스
            </h3>
            <div class="row-margin-item">
              <UnitText rightUnit="원">55,000,000</UnitText>
            </div>
          </BasicBox>
          <!-- // Case : 차량 선택 후 노출 -->
        </div>
        <!-- // Case : 조회 후 노출 -->
      </UiTabPanel>

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
                <BasicButton :line="true" theme="quaternary">이전</BasicButton>
              </ButtonListItem>
              <ButtonListItem>
                <BasicButton>한도조회</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </div>
        </BottomSticky>
        <!-- // Case : 조회 후 노출 -->
      </template>
    </PageContents>
  </UiTab>
</template>
