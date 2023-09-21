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
import ColorSelect from '@/components/ui/form/ColorSelect.vue';
import ColorSelectList from '@/components/ui/form/ColorSelectList.vue';
import ColorSelectListItem from '@/components/ui/form/ColorSelectListItem.vue';

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
    ColorSelect,
    ColorSelectList,
    ColorSelectListItem,
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

      <div :class="$style['car-info']">
        <div :class="$style['car-info__inner']">
          <div>
            <div class="text-body-4 font-weight-light">현대</div>
            <h3 class="text-body-1 font-weight-medium row-margin-mini">
              캐스퍼
            </h3>
            <div class="text-body-4 color-gray row-margin-small">
              인스퍼레이션 + 캐스퍼 액티브Ⅱ
            </div>
          </div>
        </div>
      </div>

      <PageTextGroup>
        <PageMainText>
          자동차 색상을<br />
          선택해 주세요
        </PageMainText>
      </PageTextGroup>

      <div>
        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">외장색상</h3>

          <div class="flex-box text-body-2">
            <div class="flex-box__cell flex-1">아틸라스 화이트</div>
            <div class="flex-box__cell">+ 70,000 원</div>
          </div>

          <ColorSelectList :classNames="{ wrap: 'row-margin-item-medium' }">
            <ColorSelectListItem>
              <ColorSelect
                name="layerAutoEstimateSelectColorExterior"
                id="layerAutoEstimateSelectColorExterior001"
                label="아틀라스 화이트"
              >
                <ColorChip :colors="['248, 245, 245']" />
              </ColorSelect>
            </ColorSelectListItem>
            <ColorSelectListItem>
              <ColorSelect
                name="layerAutoEstimateSelectColorExterior"
                id="layerAutoEstimateSelectColorExterior002"
                label="톰보이 카키"
              >
                <ColorChip :colors="['66, 83, 82']" />
              </ColorSelect>
            </ColorSelectListItem>
            <ColorSelectListItem>
              <ColorSelect
                name="layerAutoEstimateSelectColorExterior"
                id="layerAutoEstimateSelectColorExterior003"
                label="소울트로닉 오렌지 펄"
              >
                <ColorChip :colors="['120, 13, 32']" />
              </ColorSelect>
            </ColorSelectListItem>
            <ColorSelectListItem>
              <ColorSelect
                name="layerAutoEstimateSelectColorExterior"
                id="layerAutoEstimateSelectColorExterior004"
                label="티탄 그레이 메탈릭"
              >
                <ColorChip :colors="['66, 66, 66']" />
              </ColorSelect>
            </ColorSelectListItem>
            <ColorSelectListItem>
              <ColorSelect
                name="layerAutoEstimateSelectColorExterior"
                id="layerAutoEstimateSelectColorExterior005"
                label="비자림 카키 매트"
              >
                <ColorChip :colors="['0, 0, 0']" />
              </ColorSelect>
            </ColorSelectListItem>
            <ColorSelectListItem>
              <ColorSelect
                name="layerAutoEstimateSelectColorExterior"
                id="layerAutoEstimateSelectColorExterior006"
                label="직접 입력"
              >
                <ColorChip type="text" />
              </ColorSelect>
            </ColorSelectListItem>
          </ColorSelectList>

          <!-- Case : 직접입력 선택 시 -->
          <FormList :classNames="{ wrap: 'row-margin-contents' }">
            <FormListItem
              titleText="색상명"
              :forceFocus="true"
              target="#layerAutoEstimateSelectColorExteriorColorName"
            >
              <FormInvalid :error="state.exteriorColorNameError">
                <InputBlock :error="state.exteriorColorNameError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="색상명 입력"
                      placeholder="색상명을 입력해 주세요"
                      id="layerAutoEstimateSelectColorExteriorColorName"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="옵션금액"
              :forceFocus="true"
              target="#layerAutoEstimateSelectColorExteriorOptionPrice"
            >
              <FormInvalid :error="state.exteriorOptionPriceError">
                <InputBlock :error="state.exteriorOptionPriceError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="옵션금액 입력"
                      placeholder="금액을 입력해 주세요"
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

          <div class="flex-box text-body-2">
            <div class="flex-box__cell flex-1">네츄럴 베이지 / 다크 베이지</div>
            <div class="flex-box__cell">+ 0 원</div>
          </div>

          <ColorSelectList :classNames="{ wrap: 'row-margin-item-medium' }">
            <ColorSelectListItem>
              <ColorSelect
                name="layerAutoEstimateSelectColorInterior"
                id="layerAutoEstimateSelectColorInterior001"
                label="네츄럴 베이지 / 다크 베이지"
              >
                <ColorChip :colors="['244, 238, 238', '225, 213, 213']" />
              </ColorSelect>
            </ColorSelectListItem>
            <ColorSelectListItem>
              <ColorSelect
                name="layerAutoEstimateSelectColorInterior"
                id="layerAutoEstimateSelectColorInterior002"
                label="인디고 / 브라운"
              >
                <ColorChip :colors="['66, 83, 82', '155, 171, 170']" />
              </ColorSelect>
            </ColorSelectListItem>
            <ColorSelectListItem>
              <ColorSelect
                name="layerAutoEstimateSelectColorInterior"
                id="layerAutoEstimateSelectColorInterior003"
                label="네이비"
              >
                <ColorChip :colors="['0, 40, 86']" />
              </ColorSelect>
            </ColorSelectListItem>
            <ColorSelectListItem>
              <ColorSelect
                name="layerAutoEstimateSelectColorInterior"
                id="layerAutoEstimateSelectColorInterior004"
                label="직접 입력"
              >
                <ColorChip type="text" />
              </ColorSelect>
            </ColorSelectListItem>
          </ColorSelectList>

          <!-- Case : 직접입력 선택 시 -->
          <FormList :classNames="{ wrap: 'row-margin-contents' }">
            <FormListItem
              titleText="색상명"
              :forceFocus="true"
              target="#layerAutoEstimateSelectColorInteriorColorName"
            >
              <FormInvalid :error="state.interiorColorNameError">
                <InputBlock :error="state.interiorColorNameError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="색상명 입력"
                      placeholder="색상명을 입력해 주세요"
                      id="layerAutoEstimateSelectColorInteriorColorName"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="옵션금액"
              :forceFocus="true"
              target="#layerAutoEstimateSelectColorInteriorOptionPrice"
            >
              <FormInvalid :error="state.interiorOptionPriceError">
                <InputBlock :error="state.interiorOptionPriceError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="옵션금액 입력"
                      placeholder="금액을 입력해 주세요"
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
        <KeyValue verticalAlign="center">
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle :classNames="{ title: 'color-black' }"
              >총 차량가격</KeyValueTitle
            >
            <KeyValueText>
              <UnitText rightUnit="원" align="right"
                ><strong>16,920,000</strong></UnitText
              >
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>

        <ButtonList
          :classNames="{
            wrap: 'row-margin-contents-small',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">이전</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <!-- Case : 값 선택 후 :disabled="false" -->
            <BasicButton :disabled="true">다음</BasicButton>
            <!-- // Case : 값 선택 후 :disabled="false" -->
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/LayerAutoEstimateSelectColor.scss';
</style>
