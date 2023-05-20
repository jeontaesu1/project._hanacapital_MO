<script>
// AF_M06_l002
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import SelectTable from '@/components/ui/table/SelectTable.vue';
import SelectTableRow from '@/components/ui/table/SelectTableRow.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';
import UnitText from '@/components/ui/text/UnitText.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    PageTextGroup,
    PageMainText,
    StickyBar,
    NavTab,
    NavTabButton,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicSelect,
    BasicButton,
    ButtonList,
    ButtonListItem,
    NoticeText,
    BasicHr,
    SelectTable,
    SelectTableRow,
    BasicBox,
    CarEmblem,
    UnitText,
  },
  setup() {
    const state = reactive({
      brandError: false,
      modelError: false,
      yearError: false,
      engineTypeError: false,
      detailError: false,
      carNumberError: false,
    });

    const layer = ref(null);

    return {
      state,
      layer,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="full" v-slot="layerSlotProps">
    <FullPopup>
      <template v-slot:head>
        <FullPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          중고차를<br />
          <strong>검색해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <StickyBar>
        <NavTab>
          <NavTabButton tagName="button" type="button" :active="true">
            국산차
          </NavTabButton>
          <NavTabButton tagName="button" type="button">수입차</NavTabButton>
        </NavTab>
      </StickyBar>

      <div>
        <FormList>
          <FormListItem
            titleText="브랜드"
            target="#layerAutoUsedLoanSearchModelBrandButton"
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
                    id="layerAutoUsedLoanSearchModelBrand"
                    buttonId="layerAutoUsedLoanSearchModelBrandButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="모델명"
            target="#layerAutoUsedLoanSearchModelModelButton"
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
                    id="layerAutoUsedLoanSearchModelModel"
                    buttonId="layerAutoUsedLoanSearchModelModelButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="연식"
            target="#layerAutoUsedLoanSearchModelYearButton"
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
                    id="layerAutoUsedLoanSearchModelYear"
                    buttonId="layerAutoUsedLoanSearchModelYearButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="엔진타입"
            target="#layerAutoUsedLoanSearchModelEngineTypeButton"
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
                    id="layerAutoUsedLoanSearchModelEngineType"
                    buttonId="layerAutoUsedLoanSearchModelEngineTypeButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="세부모델"
            target="#layerAutoUsedLoanSearchModelDetailButton"
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
                    id="layerAutoUsedLoanSearchModelDetail"
                    buttonId="layerAutoUsedLoanSearchModelDetailButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="차량번호"
            target="#layerAutoUsedLoanSearchModelCarNumber"
          >
            <FormInvalid :error="state.carNumberError">
              <InputBlock :error="state.carNumberError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="차량번호"
                    id="layerAutoUsedLoanSearchModelCarNumber"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>

        <NoticeText
          :classNames="{
            wrap: 'row-margin-contents color-red',
          }"
        >
          상품용 차량이 아닐 경우, 대출진행이 불가합니다.
        </NoticeText>

        <ButtonList :classNames="{ wrap: 'row-margin-container-medium' }">
          <ButtonListItem>
            <BasicButton :line="true">조회</BasicButton>
          </ButtonListItem>
        </ButtonList>
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
              <CarEmblem code="1001" name="현대" />
            </div>
            <div class="flex-box__cell flex-box__cell--small">
              <p class="text-body-4 font-weight-light">2020년식</p>
            </div>
          </div>
          <h3 class="text-body-1 font-weight-medium">
            2.2 디젤 11인승 노블레스
          </h3>
          <div class="row-margin-item">
            <UnitText rightUnit="만원">
              <strong>55,000,000</strong>
            </UnitText>
          </div>
        </BasicBox>
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
            <BasicButton>다음</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
      <!-- // Case : 조회 후 노출 -->
    </FullPopup>
  </UiLayer>
</template>
