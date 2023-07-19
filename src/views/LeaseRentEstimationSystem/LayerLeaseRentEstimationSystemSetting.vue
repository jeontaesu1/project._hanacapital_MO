<script>
// LR_M00_l004
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PopupButton,
    ButtonList,
    ButtonListItem,
    BasicButton,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicHr,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicSelect,
    BasicInput,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
  },
  setup() {
    const state = reactive({
      contractedDistanceError: false,
      cmError: false,
      agError: false,
      branchError: false,
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
    <FullPopup v-if="layerSlotProps.display !== 'none'">
      <template v-slot:head>
        <FullPopupHead>
          <PopupTitle>견적 기본 설정</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <div>
        <section
          v-for="i in 3"
          :key="i"
          :class="[$style['estimate-list'], 'row-margin-contents']"
        >
          <div :class="$style['estimate-list__top']">
            <h3 :class="$style['estimate-list__title']">견적 {{ i }}</h3>
          </div>

          <ul :class="$style['estimate-list__list']">
            <!-- 기간 -->
            <li :class="$style['estimate-list__item']">
              <div :class="$style['estimate-list__head']">
                <div :class="$style['estimate-list__block']">
                  <div :class="$style['estimate-list__left']">
                    <KeyValue align="left" size="regular">
                      <KeyValueItem :classNames="{ item: 'text-body-3' }">
                        <KeyValueTitle>
                          <div class="text-body-4">기간</div>
                        </KeyValueTitle>
                        <KeyValueText>
                          <BoxCheckList spacing="small">
                            <BoxCheckListItem>
                              <BoxCheck
                                :minSide="true"
                                :name="`layerLeaseRentEstimationSystemSetting_${i}_check_001`"
                                :id="`layerLeaseRentEstimationSystemSetting_${i}_check_001_001`"
                                size="small"
                                :defaultChecked="true"
                              >
                                <BoxCheckLabel>36개월</BoxCheckLabel>
                              </BoxCheck>
                            </BoxCheckListItem>
                            <BoxCheckListItem>
                              <BoxCheck
                                :minSide="true"
                                :name="`layerLeaseRentEstimationSystemSetting_${i}_check_001`"
                                :id="`layerLeaseRentEstimationSystemSetting_${i}_check_001_002`"
                                size="small"
                              >
                                <BoxCheckLabel>48개월</BoxCheckLabel>
                              </BoxCheck>
                            </BoxCheckListItem>
                            <BoxCheckListItem>
                              <BoxCheck
                                :minSide="true"
                                :name="`layerLeaseRentEstimationSystemSetting_${i}_check_001`"
                                :id="`layerLeaseRentEstimationSystemSetting_${i}_check_001_003`"
                                size="small"
                              >
                                <BoxCheckLabel>60개월</BoxCheckLabel>
                              </BoxCheck>
                            </BoxCheckListItem>
                          </BoxCheckList>
                        </KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </div>
                </div>
              </div>
            </li>
            <!-- // 기간 -->

            <!-- 선납금 -->
            <li :class="$style['estimate-list__item']">
              <div :class="$style['estimate-list__head']">
                <div :class="$style['estimate-list__block']">
                  <div :class="$style['estimate-list__left']">
                    <KeyValue align="left" size="regular">
                      <KeyValueItem :classNames="{ item: 'text-body-3' }">
                        <KeyValueTitle>
                          <div class="text-body-4">선납금</div>
                        </KeyValueTitle>
                        <KeyValueText>
                          <BoxCheckList spacing="small">
                            <BoxCheckListItem>
                              <BoxCheck
                                :minSide="true"
                                :name="`layerLeaseRentEstimationSystemSetting_${i}_check_002`"
                                :id="`layerLeaseRentEstimationSystemSetting_${i}_check_002_001`"
                                size="small"
                                :defaultChecked="true"
                              >
                                <BoxCheckLabel>0%</BoxCheckLabel>
                              </BoxCheck>
                            </BoxCheckListItem>
                            <BoxCheckListItem>
                              <BoxCheck
                                :minSide="true"
                                :name="`layerLeaseRentEstimationSystemSetting_${i}_check_002`"
                                :id="`layerLeaseRentEstimationSystemSetting_${i}_check_002_002`"
                                size="small"
                              >
                                <BoxCheckLabel>10%</BoxCheckLabel>
                              </BoxCheck>
                            </BoxCheckListItem>
                            <BoxCheckListItem>
                              <BoxCheck
                                :minSide="true"
                                :name="`layerLeaseRentEstimationSystemSetting_${i}_check_002`"
                                :id="`layerLeaseRentEstimationSystemSetting_${i}_check_002_003`"
                                size="small"
                              >
                                <BoxCheckLabel>20%</BoxCheckLabel>
                              </BoxCheck>
                            </BoxCheckListItem>
                            <BoxCheckListItem>
                              <BoxCheck
                                :minSide="true"
                                :name="`layerLeaseRentEstimationSystemSetting_${i}_check_002`"
                                :id="`layerLeaseRentEstimationSystemSetting_${i}_check_002_004`"
                                size="small"
                              >
                                <BoxCheckLabel>30%</BoxCheckLabel>
                              </BoxCheck>
                            </BoxCheckListItem>
                          </BoxCheckList>
                        </KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </div>
                </div>
              </div>
            </li>
            <!-- // 선납금 -->

            <!-- 보증금 -->
            <li :class="$style['estimate-list__item']">
              <div :class="$style['estimate-list__head']">
                <div :class="$style['estimate-list__block']">
                  <div :class="$style['estimate-list__left']">
                    <KeyValue align="left" size="regular">
                      <KeyValueItem :classNames="{ item: 'text-body-3' }">
                        <KeyValueTitle>
                          <div class="text-body-4">보증금</div>
                        </KeyValueTitle>
                        <KeyValueText>
                          <BoxCheckList spacing="small">
                            <BoxCheckListItem>
                              <BoxCheck
                                :minSide="true"
                                :name="`layerLeaseRentEstimationSystemSetting_${i}_check_003`"
                                :id="`layerLeaseRentEstimationSystemSetting_${i}_check_003_001`"
                                size="small"
                                :defaultChecked="true"
                              >
                                <BoxCheckLabel>0%</BoxCheckLabel>
                              </BoxCheck>
                            </BoxCheckListItem>
                            <BoxCheckListItem>
                              <BoxCheck
                                :minSide="true"
                                :name="`layerLeaseRentEstimationSystemSetting_${i}_check_003`"
                                :id="`layerLeaseRentEstimationSystemSetting_${i}_check_003_002`"
                                size="small"
                              >
                                <BoxCheckLabel>10%</BoxCheckLabel>
                              </BoxCheck>
                            </BoxCheckListItem>
                            <BoxCheckListItem>
                              <BoxCheck
                                :minSide="true"
                                :name="`layerLeaseRentEstimationSystemSetting_${i}_check_003`"
                                :id="`layerLeaseRentEstimationSystemSetting_${i}_check_003_003`"
                                size="small"
                              >
                                <BoxCheckLabel>20%</BoxCheckLabel>
                              </BoxCheck>
                            </BoxCheckListItem>
                            <BoxCheckListItem>
                              <BoxCheck
                                :minSide="true"
                                :name="`layerLeaseRentEstimationSystemSetting_${i}_check_003`"
                                :id="`layerLeaseRentEstimationSystemSetting_${i}_check_003_004`"
                                size="small"
                              >
                                <BoxCheckLabel>30%</BoxCheckLabel>
                              </BoxCheck>
                            </BoxCheckListItem>
                          </BoxCheckList>
                        </KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </div>
                </div>
              </div>
            </li>
            <!-- // 보증금 -->
          </ul>
        </section>
      </div>

      <BasicHr className="row-margin-container-medium" />

      <FormList>
        <FormListItem titleText="약정거리" :forceFocus="true">
          <FormInvalid :error="state.contractedDistanceError">
            <BoxCheckList>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerLeaseRentEstimationSystemSettingContractedDistance"
                  id="layerLeaseRentEstimationSystemSettingContractedDistance001"
                  :defaultChecked="true"
                >
                  <BoxCheckLabel>2만km/년</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerLeaseRentEstimationSystemSettingContractedDistance"
                  id="layerLeaseRentEstimationSystemSettingContractedDistance002"
                >
                  <BoxCheckLabel>3만km/년</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="수수료율(CM)"
          target="#layerLeaseRentEstimationSystemSettingCM"
        >
          <FormInvalid :error="state.cmError">
            <InputBlock :error="state.cmError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  align="right"
                  :useDelete="false"
                  pattern="\d*"
                  title="수수료율(CM)"
                  id="layerLeaseRentEstimationSystemSettingCM"
                />
              </InputBlockCell>
              <template v-slot:innerRight>
                <div class="text-body-3">%</div>
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="수수료율(AG)"
          target="#layerLeaseRentEstimationSystemSettingAG"
        >
          <FormInvalid :error="state.agError">
            <InputBlock :error="state.agError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  align="right"
                  :useDelete="false"
                  pattern="\d*"
                  title="수수료율(AG)"
                  id="layerLeaseRentEstimationSystemSettingAG"
                />
              </InputBlockCell>
              <template v-slot:innerRight>
                <div class="text-body-3">%</div>
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="취급지점"
          target="#layerLeaseRentEstimationSystemSettingBranchButton"
          :selectOnly="true"
        >
          <FormInvalid :error="state.branchError">
            <InputBlock :error="state.branchError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '대구지점',
                    },
                    {
                      value: '2',
                      text: '강남지점',
                    },
                    {
                      value: '3',
                      text: '서초지점',
                    },
                  ]"
                  buttonTitle="취급지점 선택하기"
                  layerTitle="취급지점을 선택해 주세요"
                  id="layerLeaseRentEstimationSystemSettingBranch"
                  buttonId="layerLeaseRentEstimationSystemSettingBranchButton"
                  defaultValue="1"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="표시제한" :forceFocus="true">
          <ul class="reset-list">
            <li class="row-margin-item-medium">
              <CheckBox
                id="layerLeaseRentEstimationSystemSettingOnOff001"
                theme="tertiary"
              >
                <CheckBoxObject />
                <CheckBoxLabelText>
                  수수료액 화면표시하지 않음
                </CheckBoxLabelText>
              </CheckBox>
            </li>
            <li class="row-margin-item-medium">
              <CheckBox
                id="layerLeaseRentEstimationSystemSettingOnOff002"
                theme="tertiary"
              >
                <CheckBoxObject />
                <CheckBoxLabelText>
                  <span class="display-block">수수료액 AG 수수료 숨김</span>
                  <span class="text-body-5 color-gray-tertiary row-margin-mini"
                    >수수료가 기타로 표시되면, 클릭하여 수정할수 있습니다.</span
                  >
                </CheckBoxLabelText>
              </CheckBox>
            </li>
            <li class="row-margin-item-medium">
              <CheckBox
                id="layerLeaseRentEstimationSystemSettingOnOff003"
                theme="tertiary"
              >
                <CheckBoxObject />
                <CheckBoxLabelText>
                  <span class="display-block">연락처 표시하지 않고 숨김</span>
                  <span class="text-body-5 color-gray-tertiary row-margin-mini"
                    >견적서 상단에서 선택하실 수 있습니다.</span
                  >
                </CheckBoxLabelText>
              </CheckBox>
            </li>
          </ul>
        </FormListItem>
      </FormList>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>저장하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/LeaseRentEstimationSystem/LayerLeaseRentEstimationSystemSetting.scss';
</style>
