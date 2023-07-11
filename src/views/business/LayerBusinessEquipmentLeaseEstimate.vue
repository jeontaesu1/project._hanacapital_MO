<script>
// BF_M05_l001
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    PageTextGroup,
    PageMainText,
    FormList,
    FormListItem,
    FormInvalid,
    BoxCheckList,
    BoxCheckListItem,
    BoxCheck,
    BoxCheckLabel,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicInput,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BasicHr,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
  },
  setup() {
    const state = reactive({
      productError: false,
      priceError: false,
      periodError: false,
      depositError001: false,
      depositError002: false,
      depositMedicalError: false,
      depositScreenError: false,
      principalError: false,
      principaAmountlError: false,
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
          <strong>설비리스 견적 정보를</strong><br />
          입력해 주세요
        </PageMainText>
      </PageTextGroup>

      <div>
        <FormList>
          <FormListItem titleText="상품구분" :forceFocus="true">
            <FormInvalid :error="state.productError">
              <BoxCheckList>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="layerBusinessEquipmentLeaseEstimateCheckList001"
                    id="layerBusinessEquipmentLeaseEstimateCheckList001_001"
                    :defaultChecked="true"
                  >
                    <BoxCheckLabel>의료기</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="layerBusinessEquipmentLeaseEstimateCheckList001"
                    id="layerBusinessEquipmentLeaseEstimateCheckList001_002"
                  >
                    <BoxCheckLabel>스크린골프</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="취득원가"
            target="#layerBusinessEquipmentLeaseEstimateName"
          >
            <FormInvalid :error="state.priceError">
              <InputBlock :error="state.priceError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    align="right"
                    title="취득원가"
                    id="layerBusinessEquipmentLeaseEstimateName"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>
                  <div class="text-body-3">원</div>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="기간선택" :forceFocus="true">
            <FormInvalid :error="state.periodError">
              <BoxCheckList :wrap="true" :col="3">
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="layerBusinessEquipmentLeaseEstimateCheckList002"
                    id="layerBusinessEquipmentLeaseEstimateCheckList002_001"
                    :defaultChecked="true"
                  >
                    <BoxCheckLabel>12개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="layerBusinessEquipmentLeaseEstimateCheckList002"
                    id="layerBusinessEquipmentLeaseEstimateCheckList002_002"
                  >
                    <BoxCheckLabel>24개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="layerBusinessEquipmentLeaseEstimateCheckList002"
                    id="layerBusinessEquipmentLeaseEstimateCheckList002_003"
                  >
                    <BoxCheckLabel>36개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="layerBusinessEquipmentLeaseEstimateCheckList002"
                    id="layerBusinessEquipmentLeaseEstimateCheckList002_004"
                  >
                    <BoxCheckLabel>48개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="layerBusinessEquipmentLeaseEstimateCheckList002"
                    id="layerBusinessEquipmentLeaseEstimateCheckList002_005"
                  >
                    <BoxCheckLabel>60개월</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>
            </FormInvalid>
          </FormListItem>

          <!-- Case : '의료기' 선택 시 노출 -->
          <FormListItem titleText="보증금" :forceFocus="true">
            <FormInvalid :error="state.depositError001">
              <BoxCheckList :classNames="{ wrap: 'row-margin-item-group' }">
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="layerBusinessEquipmentLeaseEstimateCheckList003"
                    id="layerBusinessEquipmentLeaseEstimateCheckList003_001"
                    :defaultChecked="true"
                  >
                    <BoxCheckLabel>0%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="layerBusinessEquipmentLeaseEstimateCheckList003"
                    id="layerBusinessEquipmentLeaseEstimateCheckList003_002"
                  >
                    <BoxCheckLabel>10%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>

              <InputBlock :error="state.depositMedicalError" :disabled="true">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    align="right"
                    :useDelete="false"
                    pattern="\d*"
                    title="보증금"
                    id="layerBusinessEquipmentLeaseEstimateCheckListDepositMedical"
                    defaultValue="10,002,120"
                    :disabled="true"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>
                  <div class="text-body-3">원</div>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
          <!-- // Case : '의료기' 선택 시 노출 -->

          <!-- Case : '스크린골프' 선택 시 노출 -->
          <FormListItem titleText="보증금" :forceFocus="true">
            <FormInvalid :error="state.depositError002">
              <BoxCheckList
                :wrap="true"
                col="3"
                :classNames="{ wrap: 'row-margin-item-group' }"
              >
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="layerBusinessEquipmentLeaseEstimateCheckList004"
                    id="layerBusinessEquipmentLeaseEstimateCheckList004_001"
                    :defaultChecked="true"
                  >
                    <BoxCheckLabel>0%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="layerBusinessEquipmentLeaseEstimateCheckList004"
                    id="layerBusinessEquipmentLeaseEstimateCheckList004_002"
                  >
                    <BoxCheckLabel>10%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="layerBusinessEquipmentLeaseEstimateCheckList004"
                    id="layerBusinessEquipmentLeaseEstimateCheckList004_003"
                  >
                    <BoxCheckLabel>20%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="layerBusinessEquipmentLeaseEstimateCheckList004"
                    id="layerBusinessEquipmentLeaseEstimateCheckList004_004"
                  >
                    <BoxCheckLabel>30%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="layerBusinessEquipmentLeaseEstimateCheckList004"
                    id="layerBusinessEquipmentLeaseEstimateCheckList004_005"
                  >
                    <BoxCheckLabel>40%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="layerBusinessEquipmentLeaseEstimateCheckList004"
                    id="layerBusinessEquipmentLeaseEstimateCheckList004_006"
                  >
                    <BoxCheckLabel>50%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>

              <InputBlock :error="state.depositScreenError" :disabled="true">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    align="right"
                    :useDelete="false"
                    pattern="\d*"
                    title="보증금"
                    id="layerBusinessEquipmentLeaseEstimateCheckListDepositScreen01"
                    defaultValue="10,002,120"
                    :disabled="true"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>
                  <div class="text-body-3">원</div>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="유예원금" :forceFocus="true">
            <FormInvalid :error="state.principalError">
              <BoxCheckList
                :wrap="true"
                col="3"
                :classNames="{ wrap: 'row-margin-item-group' }"
              >
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="layerBusinessEquipmentLeaseEstimateCheckList005"
                    id="layerBusinessEquipmentLeaseEstimateCheckList005_001"
                    :defaultChecked="true"
                  >
                    <BoxCheckLabel>0%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="layerBusinessEquipmentLeaseEstimateCheckList005"
                    id="layerBusinessEquipmentLeaseEstimateCheckList005_002"
                  >
                    <BoxCheckLabel>10%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="layerBusinessEquipmentLeaseEstimateCheckList005"
                    id="layerBusinessEquipmentLeaseEstimateCheckList005_003"
                  >
                    <BoxCheckLabel>20%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="layerBusinessEquipmentLeaseEstimateCheckList005"
                    id="layerBusinessEquipmentLeaseEstimateCheckList005_004"
                  >
                    <BoxCheckLabel>30%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="layerBusinessEquipmentLeaseEstimateCheckList005"
                    id="layerBusinessEquipmentLeaseEstimateCheckList005_005"
                  >
                    <BoxCheckLabel>40%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="layerBusinessEquipmentLeaseEstimateCheckList005"
                    id="layerBusinessEquipmentLeaseEstimateCheckList005_006"
                  >
                    <BoxCheckLabel>50%</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>

              <InputBlock :error="state.principaAmountlError" :disabled="true">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    align="right"
                    :useDelete="false"
                    pattern="\d*"
                    title="유예원금"
                    id="layerBusinessEquipmentLeaseEstimateCheckListDepositScreen02"
                    defaultValue="10,002,120"
                    :disabled="true"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>
                  <div class="text-body-3">원</div>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
          <!-- // Case : '스크린골프' 선택 시 노출 -->
        </FormList>

        <BasicButton
          :line="true"
          :classNames="{ wrap: 'row-margin-contents-group' }"
        >
          견적계산
        </BasicButton>
      </div>

      <!-- Case : 견적계산 누른 후 노출 -->
      <BasicHr className="row-margin-container-medium" />

      <section>
        <h3 class="text-title-2 row-margin-contents">견적계산 결과</h3>

        <BasicBox>
          <KeyValue margin="regular">
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>상환금리</KeyValueTitle>
              <KeyValueText>약 10.5%</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>월리스료</KeyValueTitle>
              <KeyValueText>약 2,000,000 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>

        <section :class="[$style['notice-section'], 'row-margin-contents']">
          <h4 :class="$style['notice-section__title']">견적시 유의사항</h4>
          <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                상기 견적은 금융조건에 따라 변동될 수 있으며, 리스(상담) 신청 시
                정확한 견적 확인이 가능합니다.
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                장비의 보험조건은 ‘이용자 책임 부보’ 조건입니다.
              </div>
            </li>
            <li :class="$style['basic-list__item']">
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                하나캐피탈㈜는 손님의 리스료 미납 등 채무불이행 및 리스물건
                반납의무 위반을 대비하여 보증보험회사와 신용보험 계약을 체결할
                수 있습니다.
              </div>
            </li>
          </ul>
        </section>
      </section>
      <!-- // Case : 견적계산 누른 후 노출 -->

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>리스 신청</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/business/LayerBusinessEquipmentLeaseEstimate.scss';
</style>
