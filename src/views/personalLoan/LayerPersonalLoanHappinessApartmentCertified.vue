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
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
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
    ButtonList,
    ButtonListItem,
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
      addressError001_001: false,
      addressError001_002: false,
      addressError001_003: false,
      addressError001_004: false,
      addressDetailError001: false,
      addressError002_001: false,
      addressError002_002: false,
      addressError002_003: false,
      addressError002_004: false,
      addressError002_005: false,
      addressDetailError002: false,
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
    <UiTab type="popup">
      <FullPopup>
        <template v-slot:head>
          <FullPopupHead>
            <PopupTitle>아파트 등기부등본</PopupTitle>
            <template v-slot:right>
              <PopupButton @click="layerSlotProps.close()" />
            </template>
          </FullPopupHead>

          <NavTab :head="true" :useUiTab="true">
            <NavTabButton
              link="layerPersonalLoanHappinessApartmentCertifiedNavTab001"
            >
              지번
            </NavTabButton>
            <NavTabButton
              link="layerPersonalLoanHappinessApartmentCertifiedNavTab002"
              >도로명주소</NavTabButton
            >
          </NavTab>
        </template>

        <div>
          <UiTabPanel
            name="layerPersonalLoanHappinessApartmentCertifiedNavTab001"
          >
            <FormList>
              <FormListItem
                titleText="부동산 구분"
                target="#layerPersonalLoanHappinessApartmentCertifiedInputMethod01"
                :disabled="true"
              >
                <FormInvalid :error="state.addressError001_001">
                  <InputBlock
                    :error="state.addressError001_001"
                    :disabled="true"
                  >
                    <InputBlockCell :flexible="true">
                      <BasicInput
                        title="부동산 구분"
                        id="layerPersonalLoanHappinessApartmentCertifiedInputMethod01"
                        defaultValue="집합건물"
                        :disabled="true"
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
                <FormInvalid :error="state.addressError001_002">
                  <InputBlock :error="state.addressError001_002">
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
                            value: '17',
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
                <FormInvalid :error="state.addressError001_003">
                  <InputBlock :error="state.addressError001_003">
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
                <FormInvalid :error="state.addressError001_004">
                  <BoxCheckList>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="layerPersonalLoanHappinessApartmentCertifiedAddress"
                        id="layerPersonalLoanHappinessApartmentCertifiedAddress1"
                        :defaultChecked="true"
                      >
                        <BoxCheckLabel>지번</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="layerPersonalLoanHappinessApartmentCertifiedAddress"
                        id="layerPersonalLoanHappinessApartmentCertifiedAddress2"
                      >
                        <BoxCheckLabel>건물명칭</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                  </BoxCheckList>

                  <InputBlock
                    :error="state.addressError001_004"
                    :classNames="{ wrap: 'row-margin-item-group' }"
                  >
                    <InputBlockCell :flexible="true">
                      <BasicInput
                        title="지번/건물명칭"
                        id="layerPersonalLoanHappinessApartmentCertifiedAddress"
                      />
                    </InputBlockCell>
                  </InputBlock>
                  <FormInvalidMessage>Error Message</FormInvalidMessage>
                </FormInvalid>
                <FormInvalid
                  :error="state.addressDetailError001"
                  :classNames="{ wrap: 'row-margin-contents' }"
                >
                  <BoxCheckList>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="layerPersonalLoanHappinessApartmentCertifiedAddressDetail1"
                        id="layerPersonalLoanHappinessApartmentCertifiedAddressDetail1_1"
                        :defaultChecked="true"
                      >
                        <BoxCheckLabel>동+호</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="layerPersonalLoanHappinessApartmentCertifiedAddressDetail1"
                        id="layerPersonalLoanHappinessApartmentCertifiedAddressDetail1_2"
                      >
                        <BoxCheckLabel>동</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="layerPersonalLoanHappinessApartmentCertifiedAddressDetail1"
                        id="layerPersonalLoanHappinessApartmentCertifiedAddressDetail1_3"
                      >
                        <BoxCheckLabel>호</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                  </BoxCheckList>

                  <!-- Case : '동 + 호' 선택 시  -->
                  <InputBlock
                    :error="state.addressDetailError001"
                    :classNames="{ wrap: 'row-margin-item-group' }"
                  >
                    <InputBlockCell :flexible="true">
                      <BasicInput align="right" :useDelete="false" title="동" />
                    </InputBlockCell>
                    <InputBlockCell>
                      <div class="text-body-3">동</div>
                    </InputBlockCell>
                    <InputBlockCell :flexible="true">
                      <BasicInput align="right" :useDelete="false" title="호" />
                    </InputBlockCell>
                    <InputBlockCell>
                      <div class="text-body-3">호</div>
                    </InputBlockCell>
                  </InputBlock>
                  <!-- // Case : '동 + 호' 선택 시  -->

                  <!-- Case : '동' 선택 시  -->
                  <InputBlock
                    :error="state.addressDetailError001"
                    :classNames="{ wrap: 'row-margin-item-group' }"
                  >
                    <InputBlockCell :flexible="true">
                      <BasicInput align="right" :useDelete="false" title="동" />
                    </InputBlockCell>
                    <template v-slot:innerRight>
                      <div class="text-body-3">동</div>
                    </template>
                  </InputBlock>
                  <!-- // Case : '동' 선택 시  -->

                  <!-- Case : '호' 선택 시  -->
                  <InputBlock
                    :error="state.addressDetailError001"
                    :classNames="{ wrap: 'row-margin-item-group' }"
                  >
                    <InputBlockCell :flexible="true">
                      <BasicInput align="right" :useDelete="false" title="호" />
                    </InputBlockCell>
                    <template v-slot:innerRight>
                      <div class="text-body-3">호</div>
                    </template>
                  </InputBlock>
                  <!-- // Case : '호' 선택 시  -->
                  <FormInvalidMessage>Error Message</FormInvalidMessage>
                </FormInvalid>
              </FormListItem>
            </FormList>
          </UiTabPanel>

          <UiTabPanel
            name="layerPersonalLoanHappinessApartmentCertifiedNavTab002"
          >
            <FormList>
              <FormListItem
                titleText="부동산 구분"
                target="#layerPersonalLoanHappinessApartmentCertifiedInputMethod02"
                :disabled="true"
              >
                <FormInvalid :error="state.addressError002_001">
                  <InputBlock
                    :error="state.addressError002_001"
                    :disabled="true"
                  >
                    <InputBlockCell :flexible="true">
                      <BasicInput
                        title="부동산 구분"
                        id="layerPersonalLoanHappinessApartmentCertifiedInputMethod02"
                        defaultValue="집합건물"
                        :disabled="true"
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
                <FormInvalid :error="state.addressError002_002">
                  <InputBlock :error="state.addressError002_002">
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
                        id="layerPersonalLoanHappinessApartmentCertifiedArea004"
                        buttonId="layerPersonalLoanHappinessApartmentCertifiedAreaButton002"
                      />
                    </InputBlockCell>
                  </InputBlock>
                  <FormInvalidMessage>Error Message</FormInvalidMessage>
                </FormInvalid>
              </FormListItem>

              <FormListItem
                titleText="시/군/구"
                target="#layerPersonalLoanHappinessApartmentCertifiedArea005"
              >
                <FormInvalid :error="state.addressError002_003">
                  <InputBlock :error="state.addressError002_003">
                    <InputBlockCell :flexible="true">
                      <BasicInput
                        title="시/군/구"
                        id="layerPersonalLoanHappinessApartmentCertifiedArea005"
                      />
                    </InputBlockCell>
                  </InputBlock>
                  <FormInvalidMessage>Error Message</FormInvalidMessage>
                </FormInvalid>
              </FormListItem>

              <FormListItem
                titleText="도로명"
                target="#layerPersonalLoanHappinessApartmentCertifiedArea006"
              >
                <FormInvalid :error="state.addressError002_004">
                  <InputBlock :error="state.addressError002_004">
                    <InputBlockCell :flexible="true">
                      <BasicInput
                        title="도로명"
                        id="layerPersonalLoanHappinessApartmentCertifiedArea006"
                      />
                    </InputBlockCell>
                  </InputBlock>
                  <FormInvalidMessage>Error Message</FormInvalidMessage>
                </FormInvalid>
              </FormListItem>

              <FormListItem
                titleText="도로명/건물번호"
                target="#layerPersonalLoanHappinessApartmentCertifiedArea007"
              >
                <FormInvalid :error="state.addressError002_005">
                  <InputBlock :error="state.addressError002_005">
                    <InputBlockCell :flexible="true">
                      <BasicInput
                        title="도로명/건물번호"
                        id="layerPersonalLoanHappinessApartmentCertifiedArea007"
                      />
                    </InputBlockCell>
                  </InputBlock>
                  <FormInvalidMessage>Error Message</FormInvalidMessage>
                </FormInvalid>
              </FormListItem>

              <FormListItem titleText="입력선택" :forceFocus="true">
                <FormInvalid :error="state.addressDetailError002">
                  <BoxCheckList>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="layerPersonalLoanHappinessApartmentCertifiedAddressDetail2"
                        id="layerPersonalLoanHappinessApartmentCertifiedAddressDetail2_1"
                        :defaultChecked="true"
                      >
                        <BoxCheckLabel>동+호</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="layerPersonalLoanHappinessApartmentCertifiedAddressDetail2"
                        id="layerPersonalLoanHappinessApartmentCertifiedAddressDetail2_2"
                      >
                        <BoxCheckLabel>동</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                    <BoxCheckListItem>
                      <BoxCheck
                        :minSide="true"
                        name="layerPersonalLoanHappinessApartmentCertifiedAddressDetail2"
                        id="layerPersonalLoanHappinessApartmentCertifiedAddressDetail2_3"
                      >
                        <BoxCheckLabel>호</BoxCheckLabel>
                      </BoxCheck>
                    </BoxCheckListItem>
                  </BoxCheckList>

                  <!-- Case : '동 + 호' 선택 시  -->
                  <InputBlock
                    :error="state.addressDetailError002"
                    :classNames="{ wrap: 'row-margin-item-group' }"
                  >
                    <InputBlockCell :flexible="true">
                      <BasicInput align="right" :useDelete="false" title="동" />
                    </InputBlockCell>
                    <InputBlockCell>
                      <div class="text-body-3">동</div>
                    </InputBlockCell>
                    <InputBlockCell :flexible="true">
                      <BasicInput align="right" :useDelete="false" title="호" />
                    </InputBlockCell>
                    <InputBlockCell>
                      <div class="text-body-3">호</div>
                    </InputBlockCell>
                  </InputBlock>
                  <!-- // Case : '동 + 호' 선택 시  -->

                  <!-- Case : '동' 선택 시  -->
                  <InputBlock
                    :error="state.addressDetailError002"
                    :classNames="{ wrap: 'row-margin-item-group' }"
                  >
                    <InputBlockCell :flexible="true">
                      <BasicInput align="right" :useDelete="false" title="동" />
                    </InputBlockCell>
                    <template v-slot:innerRight>
                      <div class="text-body-3">동</div>
                    </template>
                  </InputBlock>
                  <!-- // Case : '동' 선택 시  -->

                  <!-- Case : '호' 선택 시  -->
                  <InputBlock
                    :error="state.addressDetailError002"
                    :classNames="{ wrap: 'row-margin-item-group' }"
                  >
                    <InputBlockCell :flexible="true">
                      <BasicInput align="right" :useDelete="false" title="호" />
                    </InputBlockCell>
                    <template v-slot:innerRight>
                      <div class="text-body-3">호</div>
                    </template>
                  </InputBlock>
                  <!-- // Case : '호' 선택 시  -->
                  <FormInvalidMessage>Error Message</FormInvalidMessage>
                </FormInvalid>
              </FormListItem>
            </FormList>
          </UiTabPanel>

          <BasicButton
            :line="true"
            :classNames="{ wrap: 'row-margin-contents-group' }"
            >조회</BasicButton
          >
        </div>

        <BasicHr className="row-margin-container-medium" />

        <section>
          <h3 class="text-title-2 row-margin-contents">조회정보</h3>

          <!-- Case : 결과 없는 경우 -->
          <div :class="$style['empty']">
            <p :class="$style['empty__text']">검색된 결과가 없습니다.</p>
          </div>
          <!-- // Case : 결과 없는 경우 -->

          <!-- Case : 결과 있을 경우 -->
          <ul class="reset-list">
            <li class="row-margin-item-group">
              <BasicBox>
                <KeyValueList margin="regular">
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>고유번호</KeyValueTitle>
                    <KeyValueText>1234-****-****</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>부동산소재 지번</KeyValueTitle>
                    <KeyValueText>
                      서울시 강남구 반포동 반포자이 101동 1001호
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>소유자</KeyValueTitle>
                    <KeyValueText>김***</KeyValueText>
                  </KeyValueItem>
                </KeyValueList>

                <ButtonList
                  :classNames="{
                    wrap: 'row-margin-contents-small',
                  }"
                >
                  <ButtonListItem>
                    <BasicButton size="small">신청</BasicButton>
                  </ButtonListItem>
                </ButtonList>
              </BasicBox>
            </li>

            <li class="row-margin-item-group">
              <BasicBox>
                <KeyValueList margin="regular">
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>고유번호</KeyValueTitle>
                    <KeyValueText>1234-****-****</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>부동산소재 지번</KeyValueTitle>
                    <KeyValueText>
                      서울시 강남구 반포동 반포자이 101동 1001호
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>소유자</KeyValueTitle>
                    <KeyValueText>김***</KeyValueText>
                  </KeyValueItem>
                </KeyValueList>

                <ButtonList
                  :classNames="{
                    wrap: 'row-margin-contents-small',
                  }"
                >
                  <ButtonListItem>
                    <BasicButton size="small" theme="quaternary"
                      >보기</BasicButton
                    >
                  </ButtonListItem>
                </ButtonList>
              </BasicBox>
            </li>
          </ul>
          <!-- // Case : 결과 있을 경우 -->
        </section>
      </FullPopup>
    </UiTab>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/LayerPersonalLoanHappinessApartmentCertified.scss';
</style>
