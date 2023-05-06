<script>
// BF_M05_l012
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';

const dummyData = () => [
  {
    product: '레이져',
    model: '프로레이져',
    manufacturer: '(주)루트로닉',
    number: '100AAAAAA000',
    date: '2022.12.01',
    supplier: '공급사1',
  },
  {
    product: '레이져',
    model: '프로레이져',
    manufacturer: '(주)루트로닉',
    number: '100AAAAAA000',
    date: '2022.12.01',
    supplier: '공급사1',
  },
];

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
  },
  setup() {
    const state = reactive({
      data: dummyData(),
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
          리스물건 점검보고서
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <div>
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">계약정보</h3>

          <BasicBox>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>계약번호</KeyValueTitle>
                <KeyValueText>A00000000</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>리스이용자</KeyValueTitle>
                <KeyValueText>김하나</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>점검일자</KeyValueTitle>
                <KeyValueText>2023.01.01</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>실행번호</KeyValueTitle>
                <KeyValueText>202212-0101-202</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>취득원가</KeyValueTitle>
                <KeyValueText>100,000,000원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>실행일자</KeyValueTitle>
                <KeyValueText>2023.01.01</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>설치장소</KeyValueTitle>
                <KeyValueText>강남 피부과</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">점검물건</h3>

          <ul class="reset-list">
            <li
              v-for="(item, i) in state.data"
              :key="i"
              class="row-margin-item-group"
            >
              <BasicBox>
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>물건명</KeyValueTitle>
                    <KeyValueText>{{ item.product }}</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>모델명</KeyValueTitle>
                    <KeyValueText>{{ item.model }}</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>제조사</KeyValueTitle>
                    <KeyValueText>{{ item.manufacturer }}</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>제조번호</KeyValueTitle>
                    <KeyValueText>{{ item.number }}</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>제조일자</KeyValueTitle>
                    <KeyValueText>{{ item.date }}</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>공급자</KeyValueTitle>
                    <KeyValueText>{{ item.supplier }}</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </BasicBox>
            </li>
          </ul>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">
            리스물건 점검 확인사항
          </h3>

          <div :class="$style['agree-list']">
            <ul :class="$style['agree-list__list']">
              <li :class="$style['agree-list__item']">
                <div :class="$style['agree-list__head']">
                  <CheckBox
                    id="layerMyLoanOnlineContractURLLeaseThingCheck001"
                    :classNames="{
                      wrap: $style['agree-list__checkbox'],
                    }"
                    theme="tertiary"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText>
                      리스물건은 계약서상 지정된 장소에 설치되어 있습니다.
                    </CheckBoxLabelText>
                  </CheckBox>
                </div>
              </li>
              <li :class="$style['agree-list__item']">
                <div :class="$style['agree-list__head']">
                  <CheckBox
                    id="layerMyLoanOnlineContractURLLeaseThingCheck002"
                    :classNames="{
                      wrap: $style['agree-list__checkbox'],
                    }"
                    theme="tertiary"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText>
                      리스물건은 고객님께 인도되어 정상 가동되고 있습니다.
                    </CheckBoxLabelText>
                  </CheckBox>
                </div>
              </li>
              <li :class="$style['agree-list__item']">
                <div :class="$style['agree-list__head']">
                  <CheckBox
                    id="layerMyLoanOnlineContractURLLeaseThingCheck003"
                    :classNames="{
                      wrap: $style['agree-list__checkbox'],
                    }"
                    theme="tertiary"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText>
                      검수대상 리스물건은 견적서상의 리스물건과 일치
                      합니다.(모델명, 제조번호, 제조일자)
                    </CheckBoxLabelText>
                  </CheckBox>
                </div>
              </li>
              <li :class="$style['agree-list__item']">
                <div :class="$style['agree-list__head']">
                  <CheckBox
                    id="layerMyLoanOnlineContractURLLeaseThingCheck004"
                    :classNames="{
                      wrap: $style['agree-list__checkbox'],
                    }"
                    theme="tertiary"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText>
                      설치된 리스물건은 하나캐피탈의 표식(스티커)이 부착되어
                      있습니다.
                    </CheckBoxLabelText>
                  </CheckBox>
                </div>
              </li>
              <li :class="$style['agree-list__item']">
                <div :class="$style['agree-list__head']">
                  <CheckBox
                    id="layerMyLoanOnlineContractURLLeaseThingCheck005"
                    :classNames="{
                      wrap: $style['agree-list__checkbox'],
                    }"
                    theme="tertiary"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText>
                      설치된 리스물건에 타사의 리스물건임을 표시하는
                      표식(스티커)이 부착되어 있나요?
                    </CheckBoxLabelText>
                  </CheckBox>
                </div>
              </li>
              <li :class="$style['agree-list__item']">
                <div :class="$style['agree-list__head']">
                  <CheckBox
                    id="layerMyLoanOnlineContractURLLeaseThingCheck006"
                    :classNames="{
                      wrap: $style['agree-list__checkbox'],
                    }"
                    theme="tertiary"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText>
                      물건 검수 시 중복리스 및 공리스가 아님을 확인 하였습니다.
                    </CheckBoxLabelText>
                  </CheckBox>
                </div>
              </li>
              <li :class="$style['agree-list__item']">
                <div :class="$style['agree-list__head']">
                  <CheckBox
                    id="layerMyLoanOnlineContractURLLeaseThingCheck007"
                    :classNames="{
                      wrap: $style['agree-list__checkbox'],
                    }"
                    theme="tertiary"
                  >
                    <CheckBoxObject />
                    <CheckBoxLabelText>
                      리스물건 상태에 대해 확인합니다.
                    </CheckBoxLabelText>
                  </CheckBox>
                </div>
                <ul
                  :class="[
                    $style['agree-list__list'],
                    $style['agree-list__list--tertiary'],
                  ]"
                >
                  <li :class="$style['agree-list__item']">
                    <div :class="$style['agree-list__head']">
                      <CheckBox
                        type="radio"
                        name="layerMyLoanOnlineContractURLLeaseThingCheck007"
                        id="layerMyLoanOnlineContractURLLeaseThingCheck007_001"
                        :classNames="{
                          wrap: $style['agree-list__checkbox'],
                        }"
                        theme="quinary"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText>상</CheckBoxLabelText>
                      </CheckBox>
                    </div>
                  </li>
                  <li :class="$style['agree-list__item']">
                    <div :class="$style['agree-list__head']">
                      <CheckBox
                        type="radio"
                        name="layerMyLoanOnlineContractURLLeaseThingCheck007"
                        id="layerMyLoanOnlineContractURLLeaseThingCheck007_002"
                        :classNames="{
                          wrap: $style['agree-list__checkbox'],
                        }"
                        theme="quinary"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText>중</CheckBoxLabelText>
                      </CheckBox>
                    </div>
                  </li>
                  <li :class="$style['agree-list__item']">
                    <div :class="$style['agree-list__head']">
                      <CheckBox
                        type="radio"
                        name="layerMyLoanOnlineContractURLLeaseThingCheck007"
                        id="layerMyLoanOnlineContractURLLeaseThingCheck007_003"
                        :classNames="{
                          wrap: $style['agree-list__checkbox'],
                        }"
                        theme="quinary"
                      >
                        <CheckBoxObject />
                        <CheckBoxLabelText>하</CheckBoxLabelText>
                      </CheckBox>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="row-margin-contents">
            <p class="text-body-4 align-right">리스 이용자 $김하나$ (인)</p>
            <p class="text-body-4 align-right row-margin-item-group">
              서울시 강남구 테헤란로 127, 하나금융그룹 강남사옥 17-20층
              하나캐피탈주식회사<br />
              대표이사 박승오
            </p>
          </div>
        </section>
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>확인했습니다</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractURLLeaseThingCheck.scss';
</style>
