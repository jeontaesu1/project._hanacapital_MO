<script>
// AF_M00_l006
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
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import RoundButton from '@/components/ui/button/RoundButton.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import ColorChip from '@/components/ui/imageData/ColorChip.vue';

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
    PageSubText,
    BasicHr,
    RoundButton,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    UnitText,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    ColorChip,
    IconTell,
  },
  setup() {
    const state = reactive({
      exteriorColorNameError: false,
      exteriorOptionPriceError: false,
      interiorColorNameError: false,
      interiorOptionPriceError: false,
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
                <RoundButton size="mini" tagName="a" href="tel:1800-1110">
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

      <div>
        <div class="text-body-4 font-weight-light">현대</div>
        <h3 class="text-body-1 font-weight-medium row-margin-mini">캐스퍼</h3>
        <div class="text-body-4 color-gray row-margin-small">
          인스퍼레이션 + 캐스퍼 액티브Ⅱ
        </div>
      </div>

      <BasicHr theme="quaternary" className="row-margin-contents"></BasicHr>

      <div class="row-margin-item-regular row-margin-bottom-none">
        <PageTextGroup>
          <PageMainText>
            자동차 색상을<br />
            <strong>선택해 주세요</strong>
          </PageMainText>
          <PageSubText>옵션은 선택하지 않으셔도 됩니다.</PageSubText>
        </PageTextGroup>
      </div>

      <div>
        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">외장색상</h3>
          <KeyValue>
            <KeyValueItem>
              <KeyValueTitle :classNames="{ title: 'color-black' }">
                아틸라스 화이트
              </KeyValueTitle>
              <KeyValueText>+ 70,000 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>

          <div :class="[$style['colorchip'], 'row-margin-item-medium']">
            <ul :class="$style['colorchip__list']">
              <li :class="$style['colorchip__item']">
                <input
                  type="radio"
                  name="colorChipCheck001"
                  id="colorChipCheck001__001"
                  :class="$style['colorchip__input']"
                  checked
                />
                <div :class="$style['colorchip__block']">
                  <label
                    for="colorChipCheck001__001"
                    :class="$style['colorchip__label']"
                  ></label>
                  <ColorChip />
                </div>
              </li>
              <li :class="$style['colorchip__item']">
                <input
                  type="radio"
                  name="colorChipCheck001"
                  id="colorChipCheck001__002"
                  :class="$style['colorchip__input']"
                />
                <div :class="$style['colorchip__block']">
                  <label
                    for="colorChipCheck001__002"
                    :class="$style['colorchip__label']"
                  ></label>
                  <ColorChip :colors="['248, 245, 245']" />
                </div>
              </li>
              <li :class="$style['colorchip__item']">
                <input
                  type="radio"
                  name="colorChipCheck001"
                  id="colorChipCheck001__003"
                  :class="$style['colorchip__input']"
                />
                <div :class="$style['colorchip__block']">
                  <label
                    for="colorChipCheck001__003"
                    :class="$style['colorchip__label']"
                  ></label>
                  <ColorChip :colors="['66, 83, 82']" />
                </div>
              </li>
              <li :class="$style['colorchip__item']">
                <input
                  type="radio"
                  name="colorChipCheck001"
                  id="colorChipCheck001__004"
                  :class="$style['colorchip__input']"
                />
                <div :class="$style['colorchip__block']">
                  <label
                    for="colorChipCheck001__004"
                    :class="$style['colorchip__label']"
                  ></label>
                  <ColorChip :colors="['120, 13, 32']" />
                </div>
              </li>
              <li :class="$style['colorchip__item']">
                <input
                  type="radio"
                  name="colorChipCheck001"
                  id="colorChipCheck001__005"
                  :class="$style['colorchip__input']"
                />
                <div :class="$style['colorchip__block']">
                  <label
                    for="colorChipCheck001__005"
                    :class="$style['colorchip__label']"
                  ></label>
                  <ColorChip :colors="['66, 66, 66']" />
                </div>
              </li>
              <li :class="$style['colorchip__item']">
                <input
                  type="radio"
                  name="colorChipCheck001"
                  id="colorChipCheck001__006"
                  :class="$style['colorchip__input']"
                />
                <div :class="$style['colorchip__block']">
                  <label
                    for="colorChipCheck001__006"
                    :class="$style['colorchip__label']"
                  ></label>
                  <ColorChip :colors="['0, 0, 0']" />
                </div>
              </li>
              <li :class="$style['colorchip__item']">
                <input
                  type="radio"
                  name="colorChipCheck001"
                  id="colorChipCheck001__007"
                  :class="$style['colorchip__input']"
                />
                <div :class="$style['colorchip__block']">
                  <label
                    for="colorChipCheck001__007"
                    :class="$style['colorchip__label']"
                  >
                    <span class="for-a11y">직접 입력</span>
                  </label>
                  <ColorChip type="input" />
                </div>
              </li>
            </ul>
          </div>

          <!-- Case : 직접입력 선택 시 -->
          <FormList :classNames="{ wrap: 'row-margin-contents' }">
            <FormListItem
              titleText="색상명"
              target="#layerAutoEstimateSelectColorExteriorColorName"
            >
              <FormInvalid :error="state.exteriorColorNameError">
                <InputBlock :error="state.exteriorColorNameError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="색상명 입력"
                      placeholder="색상명을 입력해 주세요."
                      id="layerAutoEstimateSelectColorExteriorColorName"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="옵션금액"
              target="#layerAutoEstimateSelectColorExteriorOptionPrice"
            >
              <FormInvalid :error="state.exteriorOptionPriceError">
                <InputBlock :error="state.exteriorOptionPriceError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="옵션금액 입력"
                      placeholder="금액을 입력해 주세요."
                      id="layerAutoEstimateSelectColorExteriorOptionPrice"
                      pattern="\d*"
                      :useDelete="false"
                      align="right"
                    />
                  </InputBlockCell>
                  <template v-slot:innerRight>
                    <div class="text-body-3">원</div>
                  </template>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>
          <!-- //Case : 직접입력 선택 시 -->
        </section>

        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">내장색상</h3>
          <KeyValue>
            <KeyValueItem>
              <KeyValueTitle :classNames="{ title: 'color-black' }">
                네츄럴 베이지 / 다크 베이지
              </KeyValueTitle>
              <KeyValueText>+ 0 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>

          <div :class="[$style['colorchip'], 'row-margin-item-medium']">
            <ul :class="$style['colorchip__list']">
              <li :class="$style['colorchip__item']">
                <input
                  type="radio"
                  name="colorChipCheck002"
                  id="colorChipCheck002__001"
                  :class="$style['colorchip__input']"
                  checked
                />
                <div :class="$style['colorchip__block']">
                  <label
                    for="colorChipCheck002__001"
                    :class="$style['colorchip__label']"
                  ></label>
                  <ColorChip />
                </div>
              </li>
              <li :class="$style['colorchip__item']">
                <input
                  type="radio"
                  name="colorChipCheck002"
                  id="colorChipCheck002__002"
                  :class="$style['colorchip__input']"
                />
                <div :class="$style['colorchip__block']">
                  <label
                    for="colorChipCheck002__002"
                    :class="$style['colorchip__label']"
                  ></label>
                  <ColorChip :colors="['244, 238, 238', '225, 213, 213']" />
                </div>
              </li>
              <li :class="$style['colorchip__item']">
                <input
                  type="radio"
                  name="colorChipCheck002"
                  id="colorChipCheck002__003"
                  :class="$style['colorchip__input']"
                />
                <div :class="$style['colorchip__block']">
                  <label
                    for="colorChipCheck002__003"
                    :class="$style['colorchip__label']"
                  ></label>
                  <ColorChip :colors="['66, 83, 82', '155, 171, 170']" />
                </div>
              </li>
              <li :class="$style['colorchip__item']">
                <input
                  type="radio"
                  name="colorChipCheck002"
                  id="colorChipCheck002__004"
                  :class="$style['colorchip__input']"
                />
                <div :class="$style['colorchip__block']">
                  <label
                    for="colorChipCheck002__004"
                    :class="$style['colorchip__label']"
                  ></label>
                  <ColorChip :colors="['0, 40, 86']" />
                </div>
              </li>
              <li :class="$style['colorchip__item']">
                <input
                  type="radio"
                  name="colorChipCheck002"
                  id="colorChipCheck002__005"
                  :class="$style['colorchip__input']"
                />
                <div :class="$style['colorchip__block']">
                  <label
                    for="colorChipCheck002__005"
                    :class="$style['colorchip__label']"
                  >
                    <span class="for-a11y">직접 입력</span>
                  </label>
                  <ColorChip type="input" />
                </div>
              </li>
            </ul>
          </div>

          <!-- Case : 직접입력 선택 시 -->
          <FormList :classNames="{ wrap: 'row-margin-contents' }">
            <FormListItem
              titleText="색상명"
              target="#layerAutoEstimateSelectColorInteriorColorName"
            >
              <FormInvalid :error="state.interiorColorNameError">
                <InputBlock :error="state.interiorColorNameError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="색상명 입력"
                      placeholder="색상명을 입력해 주세요."
                      id="layerAutoEstimateSelectColorInteriorColorName"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="옵션금액"
              target="#layerAutoEstimateSelectColorInteriorOptionPrice"
            >
              <FormInvalid :error="state.interiorOptionPriceError">
                <InputBlock :error="state.interiorOptionPriceError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="옵션금액 입력"
                      placeholder="금액을 입력해 주세요."
                      id="layerAutoEstimateSelectColorInteriorOptionPrice"
                      pattern="\d*"
                      :useDelete="false"
                      align="right"
                    />
                  </InputBlockCell>
                  <template v-slot:innerRight>
                    <div class="text-body-3">원</div>
                  </template>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>
          <!-- //Case : 직접입력 선택 시 -->
        </section>
      </div>

      <template v-slot:foot>
        <KeyValue
          verticalAlign="center"
          :classNames="{ wrap: 'row-margin-contents-small' }"
        >
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle :classNames="{ title: 'color-black' }"
              >총 차량가격</KeyValueTitle
            >
            <KeyValueText>
              <UnitText rightUnit="원" align="right">16,920,000</UnitText>
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>

        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">이전</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>다음</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/LayerAutoEstimateSelectColor.scss';
</style>
