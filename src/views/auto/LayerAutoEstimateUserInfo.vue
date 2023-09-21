<script>
// AF_M00_l012
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import RoundButton from '@/components/ui/button/RoundButton.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';

import IconTell from '@/assets/images/icon/tell.svg?component';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
    PageTextGroup,
    PageMainText,
    RoundButton,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    IconTell,
  },
  setup() {
    const state = reactive({
      nameError: false,
      phoneError: false,
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
            <div class="flex-box">
              <div class="flex-box__cell">
                <RoundButton tagName="a" href="tel:1800-1110">
                  <template v-slot:leftIcon>
                    <IconTell />
                  </template>
                  상담원 연결
                </RoundButton>
              </div>
              <div class="flex-box__cell flex-box__cell--regular">
                <PopupButton @click="layerSlotProps.close()" />
              </div>
            </div>
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          <strong>
            <span class="color-green font-weight-medium">견적 조회</span>를
            위한<br />
            정보를 입력해주세요.
          </strong>
        </PageMainText>
      </PageTextGroup>

      <FormList>
        <FormListItem titleText="이름" target="#layerAutoEstimateUserInfoName">
          <FormInvalid :error="state.nameError">
            <InputBlock :error="state.nameError">
              <InputBlockCell :flexible="true">
                <BasicInput title="이름" id="layerAutoEstimateUserInfoName" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="연락처"
          target="#layerAutoEstimateUserInfoPhone"
        >
          <FormInvalid :error="state.phoneError">
            <InputBlock :error="state.phoneError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="연락처"
                  id="layerAutoEstimateUserInfoPhone"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <div :class="[$style['agree-list'], 'row-margin-contents-group']">
        <ul :class="$style['agree-list__container']">
          <li :class="$style['agree-list__all']">
            <div :class="$style['agree-list__all-head']">
              <CheckBox
                id="layerAutoEstimateUserInfoAgreeAll"
                :classNames="{ wrap: $style['agree-list__all-checkbox'] }"
              >
                <CheckBoxObject />
                <CheckBoxLabelText>전체동의</CheckBoxLabelText>
              </CheckBox>
            </div>

            <div :class="$style['agree-list__all-contents']">
              <ul :class="$style['agree-list__list']">
                <li :class="$style['agree-list__item']">
                  <div :class="$style['agree-list__head']">
                    <CheckBox
                      id="layerAutoEstimateUserInfo001"
                      :classNames="{
                        wrap: $style['agree-list__checkbox'],
                      }"
                      theme="tertiary"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText
                        >개인(신용)정보 필수적 수집·이용 동의</CheckBoxLabelText
                      >
                    </CheckBox>
                  </div>
                  <ul
                    :class="[
                      $style['agree-list__list'],
                      $style['agree-list__list--secondary'],
                    ]"
                  >
                    <li :class="$style['agree-list__item']">
                      <div :class="$style['agree-list__head']">
                        <CheckBox
                          id="layerAutoEstimateUserInfo001_001"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="quinary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText>
                            개인(신용)정보 필수적 수집·이용
                          </CheckBoxLabelText>
                        </CheckBox>
                        <div :class="$style['agree-list__right']">
                          <button
                            type="button"
                            :class="$style['agree-list__link']"
                          >
                            <span :class="$style['agree-list__link-text']">
                              상세보기
                            </span>
                          </button>
                        </div>
                      </div>
                    </li>
                    <li :class="$style['agree-list__item']">
                      <div :class="$style['agree-list__head']">
                        <CheckBox
                          id="layerAutoEstimateUserInfo001_002"
                          :classNames="{
                            wrap: $style['agree-list__checkbox'],
                          }"
                          theme="quinary"
                        >
                          <CheckBoxObject />
                          <CheckBoxLabelText>
                            고유식별번호 필수적 수집·이용
                          </CheckBoxLabelText>
                        </CheckBox>
                        <div :class="$style['agree-list__right']">
                          <button
                            type="button"
                            :class="$style['agree-list__link']"
                          >
                            <span :class="$style['agree-list__link-text']">
                              상세보기
                            </span>
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

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
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/LayerAutoEstimateUserInfo.scss';
</style>
