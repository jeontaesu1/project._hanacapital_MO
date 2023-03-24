<script>
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import SecurityInput from '@/components/ui/form/SecurityInput.vue';
import PartInput from '@/components/ui/form/PartInput.vue';
import ExtendSelect from '@/components/ui/form/ExtendSelect.vue';
import ExtendSelectOption from '@/components/ui/form/ExtendSelectOption.vue';

import BrandLogo001 from '@/assets/images/bank-logo/hana.svg?component';
import BrandLogo002 from '@/assets/images/bank-logo/lotte.svg?component';
import BrandLogo003 from '@/assets/images/bank-logo/samsung.svg?component';
import BrandLogo004 from '@/assets/images/bank-logo/shinhan.svg?component';
import BrandLogo005 from '@/assets/images/bank-logo/kb.svg?component';
import BrandLogo006 from '@/assets/images/bank-logo/hyundai.svg?component';
import BrandLogo007 from '@/assets/images/bank-logo/bc.svg?component';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicButton,
    ButtonList,
    ButtonListItem,
    SecurityInput,
    PartInput,
    ExtendSelect,
    ExtendSelectOption,
    BrandLogo001,
    BrandLogo002,
    BrandLogo003,
    BrandLogo004,
    BrandLogo005,
    BrandLogo006,
    BrandLogo007,
  },
  setup() {
    const state = reactive({
      nameError: false,
      idNumberError: false,
      phoneError: false,
      brandError: false,
      numberError: false,
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
          신용카드 인증을 위해<br />
          <strong>이름을 입력해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <FormList>
        <FormListItem
          titleText="카드번호"
          target="#layerIdentificationCardNumber01"
        >
          <FormInvalid :error="state.numberError">
            <InputBlock :error="state.numberError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="카드번호 첫번째 4자리"
                  id="layerIdentificationCardNumber01"
                  :useDelete="false"
                />
              </InputBlockCell>
              <InputBlockCell type="sub">-</InputBlockCell>
              <InputBlockCell>
                <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
                <SecurityInput
                  title="카드번호 두번째 4자리"
                  :dot="[true, true, false, false]"
                />
              </InputBlockCell>
              <InputBlockCell type="sub">-</InputBlockCell>
              <InputBlockCell>
                <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
                <SecurityInput
                  title="카드번호 세번째 4자리"
                  :dot="[false, false, false, false]"
                />
              </InputBlockCell>
              <InputBlockCell type="sub">-</InputBlockCell>
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="카드번호 네번째 4자리"
                  id="layerIdentificationCardNumber04"
                  :useDelete="false"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="카드사" target="#layerIdentificationCardBrand">
          <FormInvalid :error="state.brandError">
            <InputBlock :error="state.brandError">
              <InputBlockCell :flexible="true">
                <ExtendSelect
                  buttonTitle="카드사 선택하기"
                  layerTitle="카드사를 선택해 주세요"
                  buttonId="layerIdentificationCardBrand"
                >
                  <div :class="$style['bank-brand']">
                    <ul :class="$style['bank-brand__list']">
                      <li :class="$style['bank-brand__item']">
                        <ExtendSelectOption
                          value="1"
                          text="하나"
                          :classNames="{ option: $style['bank-brand__block'] }"
                        >
                          <span :class="$style['bank-brand__logo']">
                            <BrandLogo001 />
                          </span>
                          <span :class="$style['bank-brand__text']">하나</span>
                        </ExtendSelectOption>
                      </li>
                      <li :class="$style['bank-brand__item']">
                        <ExtendSelectOption
                          value="2"
                          text="롯데"
                          :classNames="{ option: $style['bank-brand__block'] }"
                        >
                          <span :class="$style['bank-brand__logo']">
                            <BrandLogo002 />
                          </span>
                          <span :class="$style['bank-brand__text']">롯데</span>
                        </ExtendSelectOption>
                      </li>
                      <li :class="$style['bank-brand__item']">
                        <ExtendSelectOption
                          value="3"
                          text="삼성"
                          :classNames="{ option: $style['bank-brand__block'] }"
                        >
                          <span :class="$style['bank-brand__logo']">
                            <BrandLogo003 />
                          </span>
                          <span :class="$style['bank-brand__text']">삼성</span>
                        </ExtendSelectOption>
                      </li>
                      <li :class="$style['bank-brand__item']">
                        <ExtendSelectOption
                          value="4"
                          text="신한"
                          :classNames="{ option: $style['bank-brand__block'] }"
                        >
                          <span :class="$style['bank-brand__logo']">
                            <BrandLogo004 />
                          </span>
                          <span :class="$style['bank-brand__text']">신한</span>
                        </ExtendSelectOption>
                      </li>
                      <li :class="$style['bank-brand__item']">
                        <ExtendSelectOption
                          value="5"
                          text="국민"
                          :classNames="{ option: $style['bank-brand__block'] }"
                        >
                          <span :class="$style['bank-brand__logo']">
                            <BrandLogo005 />
                          </span>
                          <span :class="$style['bank-brand__text']">국민</span>
                        </ExtendSelectOption>
                      </li>
                      <li :class="$style['bank-brand__item']">
                        <ExtendSelectOption
                          value="6"
                          text="현대"
                          :classNames="{ option: $style['bank-brand__block'] }"
                        >
                          <span :class="$style['bank-brand__logo']">
                            <BrandLogo006 />
                          </span>
                          <span :class="$style['bank-brand__text']">현대</span>
                        </ExtendSelectOption>
                      </li>
                      <li :class="$style['bank-brand__item']">
                        <ExtendSelectOption
                          value="7"
                          text="BC"
                          :classNames="{ option: $style['bank-brand__block'] }"
                        >
                          <span :class="$style['bank-brand__logo']">
                            <BrandLogo007 />
                          </span>
                          <span :class="$style['bank-brand__text']">BC</span>
                        </ExtendSelectOption>
                      </li>
                    </ul>
                  </div>

                  <ul :class="[$style['basic-list'], 'row-margin-contents']">
                    <li :class="$style['basic-list__item']">
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">
                        본인명의의 개인 신용카드 또는 체크카드로 본인확인이
                        가능합니다.
                      </div>
                    </li>
                    <li :class="$style['basic-list__item']">
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">
                        법인카드, 가족카드, 선불카드는 본인확인이 불가능합니다.
                      </div>
                    </li>
                    <li :class="$style['basic-list__item']">
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">
                        비씨카드는 비씨로고(
                        <span :class="$style['inline-logo']"
                          ><BrandLogo007
                        /></span>
                        )가 표시된 카드만 이용가능합니다.<br />
                        (예 : 농협BC, 우리카드, IBK카드 등)
                      </div>
                    </li>
                  </ul>
                </ExtendSelect>
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="휴대폰번호"
          target="#layerIdentificationCardPhone"
        >
          <FormInvalid :error="state.phoneError">
            <InputBlock :error="state.phoneError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="휴대폰번호"
                  id="layerIdentificationCardPhone"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="생년월일"
          titleOptionalText="(6자리)"
          target="#layerIdentificationCardIdNumber01"
        >
          <FormInvalid :error="state.idNumberError">
            <InputBlock :error="state.idNumberError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="주민등록번호 앞 6자리"
                  id="layerIdentificationCardIdNumber01"
                />
              </InputBlockCell>
              <InputBlockCell type="sub">-</InputBlockCell>
              <InputBlockCell :flexible="true">
                <PartInput
                  type="number"
                  pattern="\d*"
                  title="주민등록번호 뒤 7자리 중 첫번째자리"
                  id="layerIdentificationCardIdNumber02"
                  :afterDot="6"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="주민등록번호"
          target="#layerIdentificationCardIdNumber03"
        >
          <FormInvalid :error="state.idNumberError">
            <InputBlock :error="state.idNumberError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="주민등록번호 앞 6자리"
                  id="layerIdentificationCardIdNumber03"
                />
              </InputBlockCell>
              <InputBlockCell type="sub">-</InputBlockCell>
              <InputBlockCell :flexible="true">
                <!-- DD : 보안 키패드 열렸을 때 :isFocused="true" props 추가 해서 포커싱 스타일 적용 -->
                <SecurityInput
                  title="주민등록번호 뒤 7자리"
                  :dot="[true, true, true, false, false, false, false]"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="이름" target="#layerIdentificationCardName">
          <FormInvalid :error="state.nameError">
            <InputBlock :error="state.nameError">
              <InputBlockCell :flexible="true">
                <BasicInput title="이름" id="layerIdentificationCardName" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

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
@import '@/assets/scss/views/identification/LayerIdentificationCard.scss';
</style>
