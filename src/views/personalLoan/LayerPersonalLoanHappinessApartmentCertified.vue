<script>
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValueList from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PopupButton,
    NavTab,
    NavTabButton,
    UiTabPanel,
    UiTab,
    FormList,
    FormListItem,
    FormInvalid,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormInvalidMessage,
    BasicSelect,
    BoxCheckList,
    BoxCheckListItem,
    BoxCheck,
    BoxCheckLabel,
    BasicButton,
    BasicBox,
    KeyValueList,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicHr,
  },
  setup() {
    const layer = ref(null);

    const state = reactive({
      areaError001: false,
      areaError002: false,
      areaError003: false,
      areaError004: false,
      areaError005: false,
      sumError: false,
      addressError: false,
      supplyError: false,
      methodError: false,
    });

    return {
      layer,
      state,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="full" v-slot="layerSlotProps">
    <FullPopup>
      <template v-slot:head>
        <FullPopupHead>
          <PopupTitle>아파트 등기부등본</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <UiTab>
        <NavTab :useUiTab="true">
          <NavTabButton
            link="LayerPersonalLoanHappinessApartmentCertifiedNavTab001_001"
            >지번</NavTabButton
          >
          <NavTabButton
            link="LayerPersonalLoanHappinessApartmentCertifiedNavTab001_002"
            >도로명주소</NavTabButton
          >
        </NavTab>

        <UiTabPanel
          name="LayerPersonalLoanHappinessApartmentCertifiedNavTab001_001"
        >
          <FormList>
            <FormListItem
              titleText="부동산 구분"
              target="#layerPersonalLoanHappinessApartmentCertifiedInputMethod01"
              :forceFocus="true"
            >
              <FormInvalid :error="state.methodError">
                <InputBlock :error="state.methodError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="부동산 구분"
                      id="layerPersonalLoanHappinessApartmentCertifiedInputMethod01"
                      value="집합건물"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="시/도"
              target="#layerPersonalLoanHappinessApartmentCertifiedAreaButton001"
              :selectOnly="true"
            >
              <FormInvalid :error="state.areaError001">
                <InputBlock :error="state.areaError001">
                  <InputBlockCell :flexible="true">
                    <BasicSelect
                      :option="[
                        {
                          value: '1',
                          text: '서울특별시',
                        },
                        {
                          value: '2',
                          text: '경기도',
                        },
                        {
                          value: '3',
                          text: '부산광역시',
                        },
                        {
                          value: '4',
                          text: '대구광역시',
                        },
                        {
                          value: '5',
                          text: '인천광역시',
                        },
                        {
                          value: '6',
                          text: '광주광역시',
                        },
                        {
                          value: '7',
                          text: '대전광역시',
                        },
                        {
                          value: '8',
                          text: '울산광역시',
                        },
                        {
                          value: '9',
                          text: '세종특별자치시',
                        },
                        {
                          value: '10',
                          text: '강원도',
                        },
                        {
                          value: '11',
                          text: '충청북도',
                        },
                        {
                          value: '12',
                          text: '충청남도',
                        },
                        {
                          value: '13',
                          text: '전라북도',
                        },
                        {
                          value: '14',
                          text: '전라남도',
                        },
                        {
                          value: '15',
                          text: '경상북도',
                        },
                        {
                          value: '16',
                          text: '경상남도',
                        },
                        {
                          value: '177',
                          text: '제주특별자치도',
                        },
                      ]"
                      buttonTitle="시/도 선택하기"
                      layerTitle="시/도를 선택해 주세요"
                      id="layerPersonalLoanHappinessApartmentCertifiedArea001"
                      buttonId="layerPersonalLoanHappinessApartmentCertifiedAreaButton001"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="리/동"
              target="#layerPersonalLoanHappinessApartmentCertifiedArea002"
            >
              <FormInvalid :error="state.areaError002">
                <InputBlock :error="state.areaError002">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="리/동"
                      id="layerPersonalLoanHappinessApartmentCertifiedArea002"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem titleText="입력선택" :forceFocus="true">
              <FormInvalid :error="state.sumError">
                <BoxCheckList>
                  <BoxCheckListItem>
                    <BoxCheck
                      :minSide="true"
                      name="layerPersonalLoanHappinessApartmentCertifiedList001"
                      id="layerPersonalLoanHappinessApartmentCertifiedList001_001"
                    >
                      <BoxCheckLabel>지번</BoxCheckLabel>
                    </BoxCheck>
                  </BoxCheckListItem>
                  <BoxCheckListItem>
                    <BoxCheck
                      :minSide="true"
                      name="layerPersonalLoanHappinessApartmentCertifiedList002"
                      id="layerPersonalLoanHappinessApartmentCertifiedList002_002"
                    >
                      <BoxCheckLabel>건물명칭</BoxCheckLabel>
                    </BoxCheck>
                  </BoxCheckListItem>
                </BoxCheckList>

                <InputBlock
                  :error="state.addressError"
                  class="row-margin-item-group"
                >
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      id="layerPersonalLoanHappinessApartmentCertifiedAddress"
                    />
                  </InputBlockCell>
                </InputBlock>
              </FormInvalid>
            </FormListItem>
          </FormList>

          <div class="row-margin-contents">
            <BoxCheckList class="row-margin-item-group">
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerPersonalLoanHappinessApartmentCertifiedList003"
                  id="layerPersonalLoanHappinessApartmentCertifiedList003_001"
                >
                  <BoxCheckLabel>동+호</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerPersonalLoanHappinessApartmentCertifiedList004"
                  id="layerPersonalLoanHappinessApartmentCertifiedList004_002"
                >
                  <BoxCheckLabel>동</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerPersonalLoanHappinessApartmentCertifiedList005"
                  id="layerPersonalLoanHappinessApartmentCertifiedList005_003"
                >
                  <BoxCheckLabel>호</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>

            <FormList>
              <!-- '동 + 호' 클릭시  -->
              <InputBlock :error="state.supplyError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    align="right"
                    :useDelete="false"
                    pattern="\d*"
                    title="동 + 호"
                    id="layerPersonalLoanHappinessApartmentCertifiedSupply01"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>
                  <div class="text-body-3">동 + 호</div>
                </template>
              </InputBlock>

              <!-- '동' 클릭시  -->
              <InputBlock :error="state.supplyError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    align="right"
                    :useDelete="false"
                    pattern="\d*"
                    title="동"
                    id="layerPersonalLoanHappinessApartmentCertifiedSupply02"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>
                  <div class="text-body-3">동</div>
                </template>
              </InputBlock>

              <!-- '호' 클릭시  -->
              <InputBlock :error="state.supplyError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    align="right"
                    :useDelete="false"
                    pattern="\d*"
                    title="호"
                    id="LayerPersonalLoanHappinessApartmentCertifiedSupply03"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>
                  <div class="text-body-3">호</div>
                </template>
              </InputBlock>
            </FormList>
          </div>

          <BasicButton :line="true">조회</BasicButton>

          <BasicHr className="row-margin-container-medium" />

          <div>
            <h3 class="text-title-2 row-margin-contents">조회정보</h3>

            <!-- DD: 아파트 등기부등본_지번_조회결과 내역 없는 경우 -->
            <div :class="$style['empty']">
              <p :class="$style['empty__text']">검색된 결과가 없습니다.</p>
            </div>

            <!-- DD: 아파트 등기부등본_지번_조회결과 내역 -->
            <div>
              <BasicBox class="row-margin-item-group">
                <KeyValueList margin="regular">
                  <KeyValueItem>
                    <KeyValueTitle>고유번호</KeyValueTitle>
                    <KeyValueText> 1234-****-**** </KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem>
                    <KeyValueTitle>부동산소재 지번</KeyValueTitle>
                    <KeyValueText>
                      서울시 강남구 반포동 반포자이 101동 1001호
                    </KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem>
                    <KeyValueTitle>소유자</KeyValueTitle>
                    <KeyValueText> 김*** </KeyValueText>
                  </KeyValueItem>
                </KeyValueList>

                <div class="row-margin-item-group">
                  <BasicButton size="small">신청</BasicButton>
                </div>
              </BasicBox>

              <BasicBox class="row-margin-item-group">
                <KeyValueList margin="regular">
                  <KeyValueItem>
                    <KeyValueTitle>고유번호</KeyValueTitle>
                    <KeyValueText> 1234-****-**** </KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem>
                    <KeyValueTitle>부동산소재 지번</KeyValueTitle>
                    <KeyValueText>
                      서울시 강남구 반포동 반포자이 101동 1001호
                    </KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem>
                    <KeyValueTitle>소유자</KeyValueTitle>
                    <KeyValueText> 김*** </KeyValueText>
                  </KeyValueItem>
                </KeyValueList>

                <div class="row-margin-item-group">
                  <BasicButton size="small" theme="quaternary"
                    >보기</BasicButton
                  >
                </div>
              </BasicBox>
            </div>
          </div>
        </UiTabPanel>

        <UiTabPanel
          name="LayerPersonalLoanHappinessApartmentCertifiedNavTab001_002"
        >
          <FormList>
            <FormListItem
              titleText="부동산 구분"
              target="#layerPersonalLoanHappinessApartmentCertifiedInputMethod02"
              :forceFocus="true"
            >
              <FormInvalid :error="state.methodError">
                <InputBlock :error="state.methodError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="부동산 구분"
                      id="layerPersonalLoanHappinessApartmentCertifiedInputMethod02"
                      value="집합건물"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="시/도"
              target="#layerPersonalLoanHappinessApartmentCertifiedAreaButton002"
              :selectOnly="true"
            >
              <FormInvalid :error="state.areaError001">
                <InputBlock :error="state.areaError001">
                  <InputBlockCell :flexible="true">
                    <BasicSelect
                      :option="[
                        {
                          value: '1',
                          text: '서울특별시',
                        },
                        {
                          value: '2',
                          text: '경기도',
                        },
                        {
                          value: '3',
                          text: '부산광역시',
                        },
                        {
                          value: '4',
                          text: '대구광역시',
                        },
                        {
                          value: '5',
                          text: '인천광역시',
                        },
                        {
                          value: '6',
                          text: '광주광역시',
                        },
                        {
                          value: '7',
                          text: '대전광역시',
                        },
                        {
                          value: '8',
                          text: '울산광역시',
                        },
                        {
                          value: '9',
                          text: '세종특별자치시',
                        },
                        {
                          value: '10',
                          text: '강원도',
                        },
                        {
                          value: '11',
                          text: '충청북도',
                        },
                        {
                          value: '12',
                          text: '충청남도',
                        },
                        {
                          value: '13',
                          text: '전라북도',
                        },
                        {
                          value: '14',
                          text: '전라남도',
                        },
                        {
                          value: '15',
                          text: '경상북도',
                        },
                        {
                          value: '16',
                          text: '경상남도',
                        },
                        {
                          value: '177',
                          text: '제주특별자치도',
                        },
                      ]"
                      buttonTitle="시/도 선택하기"
                      layerTitle="시/도를 선택해 주세요"
                      id="layerPersonalLoanHappinessApartmentCertifiedArea003"
                      buttonId="layerPersonalLoanHappinessApartmentCertifiedAreaButton002"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="시/군/구"
              target="#layerPersonalLoanHappinessApartmentCertifiedArea004"
            >
              <FormInvalid :error="state.areaError002">
                <InputBlock :error="state.areaError002">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="시/군/구"
                      id="layerPersonalLoanHappinessApartmentCertifiedArea004"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="도로명"
              target="#layerPersonalLoanHappinessApartmentCertifiedArea005"
            >
              <FormInvalid :error="state.areaError002">
                <InputBlock :error="state.areaError002">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="도로명"
                      id="layerPersonalLoanHappinessApartmentCertifiedArea005"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="도로명/건물번호"
              target="#layerPersonalLoanHappinessApartmentCertifiedArea006"
            >
              <FormInvalid :error="state.areaError002">
                <InputBlock :error="state.areaError002">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="도로명/건물번호"
                      id="layerPersonalLoanHappinessApartmentCertifiedArea006"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>

          <div class="row-margin-contents">
            <BoxCheckList class="row-margin-item-group">
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerPersonalLoanHappinessApartmentCertifiedList006"
                  id="layerPersonalLoanHappinessApartmentCertifiedList006_001"
                >
                  <BoxCheckLabel>동+호</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerPersonalLoanHappinessApartmentCertifiedList07"
                  id="layerPersonalLoanHappinessApartmentCertifiedList007_002"
                >
                  <BoxCheckLabel>동</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerPersonalLoanHappinessApartmentCertifiedList008"
                  id="layerPersonalLoanHappinessApartmentCertifiedList008_003"
                >
                  <BoxCheckLabel>호</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>

            <FormList>
              <!-- '동 + 호' 클릭시  -->
              <InputBlock :error="state.supplyError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    align="right"
                    :useDelete="false"
                    pattern="\d*"
                    title="동 + 호"
                    id="layerPersonalLoanHappinessApartmentCertifiedSupply04"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>
                  <div class="text-body-3">동 + 호</div>
                </template>
              </InputBlock>

              <!-- '동' 클릭시  -->
              <InputBlock :error="state.supplyError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    align="right"
                    :useDelete="false"
                    pattern="\d*"
                    title="동"
                    id="layerPersonalLoanHappinessApartmentCertifiedSupply05"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>
                  <div class="text-body-3">동</div>
                </template>
              </InputBlock>

              <!-- '호' 클릭시  -->
              <InputBlock :error="state.supplyError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    align="right"
                    :useDelete="false"
                    pattern="\d*"
                    title="호"
                    id="LayerPersonalLoanHappinessApartmentCertifiedSupply06"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>
                  <div class="text-body-3">호</div>
                </template>
              </InputBlock>
            </FormList>
          </div>

          <BasicButton :line="true">조회</BasicButton>

          <BasicHr className="row-margin-container-medium" />

          <div>
            <h3 class="text-title-2 row-margin-contents">조회정보</h3>

            <!-- DD: 아파트 등기부등본_도로명주소_조회결과 내역 없는 경우 -->
            <div :class="$style['empty']">
              <p :class="$style['empty__text']">검색된 결과가 없습니다.</p>
            </div>

            <!-- DD: 아파트 등기부등본_도로명주소_조회결과 내역 -->
            <div>
              <BasicBox class="row-margin-item-group">
                <KeyValueList margin="regular">
                  <KeyValueItem>
                    <KeyValueTitle>고유번호</KeyValueTitle>
                    <KeyValueText> 1234-****-**** </KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem>
                    <KeyValueTitle>부동산소재 지번</KeyValueTitle>
                    <KeyValueText>
                      서울시 강남구 반포동 반포자이 101동 1001호
                    </KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem>
                    <KeyValueTitle>소유자</KeyValueTitle>
                    <KeyValueText> 김*** </KeyValueText>
                  </KeyValueItem>
                </KeyValueList>

                <div class="row-margin-item-group">
                  <BasicButton size="small">신청</BasicButton>
                </div>
              </BasicBox>

              <BasicBox class="row-margin-item-group">
                <KeyValueList margin="regular">
                  <KeyValueItem>
                    <KeyValueTitle>고유번호</KeyValueTitle>
                    <KeyValueText> 1234-****-**** </KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem>
                    <KeyValueTitle>부동산소재 지번</KeyValueTitle>
                    <KeyValueText>
                      서울시 강남구 반포동 반포자이 101동 1001호
                    </KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem>
                    <KeyValueTitle>소유자</KeyValueTitle>
                    <KeyValueText> 김*** </KeyValueText>
                  </KeyValueItem>
                </KeyValueList>

                <div class="row-margin-item-group">
                  <BasicButton size="small" theme="quaternary"
                    >보기</BasicButton
                  >
                </div>
              </BasicBox>
            </div>
          </div>
        </UiTabPanel>
      </UiTab>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/LayerPersonalLoanHappinessApartmentCertified.scss';
</style>
