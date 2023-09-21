<script>
// AF_M00_l007
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
import BasicTooltip from '@/components/ui/tooltip/BasicTooltip.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import ColorChip from '@/components/ui/imageData/ColorChip.vue';

import IconTell from '@/assets/images/icon/tell.svg?component';
import IconTooltip from '@/assets/images/icon/tooltip.svg?component';

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
    BasicTooltip,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    CarEmblem,
    CarThumb,
    TextButton,
    ColorChip,
    IconTell,
    IconTooltip,
  },
  setup() {
    const state = reactive({
      discountPriceError: false,
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
          선택한 자동차로<br />
          견적을 확인해볼까요?
        </PageMainText>
      </PageTextGroup>

      <BasicBox>
        <BasicBoxHead align="top">
          <BasicBoxHeadLeft>
            <CarEmblem src="/images/_dummy/car-emblem.png" name="현대" />
            <h3 class="text-body-1 font-weight-medium">캐스퍼</h3>
          </BasicBoxHeadLeft>
          <BasicBoxHeadRight>
            <div class="flex-box">
              <div class="flex-box__cell">
                <CarThumb src="/images/_dummy/car-thumb.png" />
              </div>
              <div class="flex-box__cell">
                <TextButton
                  :block="true"
                  underline="true"
                  :classNames="{ wrap: 'text-body-5 color-gray' }"
                  >변경</TextButton
                >
              </div>
            </div>
          </BasicBoxHeadRight>
        </BasicBoxHead>

        <ul class="reset-list">
          <li class="row-margin-item-group">
            <KeyValue margin="regular">
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>세부모델</KeyValueTitle>
                <KeyValueText>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1">16,850,000 원</div>
                    <div class="flex-box__cell">
                      <TextButton
                        :block="true"
                        underline="true"
                        :classNames="{ wrap: 'text-body-5 color-gray' }"
                        >변경</TextButton
                      >
                    </div>
                  </div>
                </KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <BasicBox theme="senary" className="row-margin-item-group">
              <KeyValue margin="regular">
                <KeyValueItem :classNames="{ item: 'text-body-3' }">
                  <KeyValueTitle>모델명</KeyValueTitle>
                  <KeyValueText>2022년형 가솔린 1.0 터보 밴</KeyValueText>
                </KeyValueItem>
                <KeyValueItem :classNames="{ item: 'text-body-3' }">
                  <KeyValueTitle>세부 모델명</KeyValueTitle>
                  <KeyValueText>스마트 + 캐스퍼 액티브Ⅰ</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </BasicBox>
          </li>

          <li class="row-margin-item-group">
            <KeyValue margin="regular">
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>옵션</KeyValueTitle>
                <KeyValueText>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1">16,850,000 원</div>
                    <div class="flex-box__cell">
                      <TextButton
                        :block="true"
                        underline="true"
                        :classNames="{ wrap: 'text-body-5 color-gray' }"
                        >변경</TextButton
                      >
                    </div>
                  </div>
                </KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <BasicBox theme="senary" className="row-margin-item-group">
              <KeyValue margin="regular">
                <KeyValueItem :classNames="{ item: 'text-body-3' }">
                  <KeyValueTitle>선택옵션 1</KeyValueTitle>
                  <KeyValueText>선루프</KeyValueText>
                </KeyValueItem>
                <KeyValueItem :classNames="{ item: 'text-body-3' }">
                  <KeyValueTitle>선택옵션 2</KeyValueTitle>
                  <KeyValueText>기타옵션</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </BasicBox>
          </li>

          <li class="row-margin-item-group">
            <KeyValue margin="regular">
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>색상</KeyValueTitle>
                <KeyValueText>
                  <div class="flex-box">
                    <div class="flex-box__cell flex-1">16,850,000 원</div>
                    <div class="flex-box__cell">
                      <TextButton
                        :block="true"
                        underline="true"
                        :classNames="{ wrap: 'text-body-5 color-gray' }"
                        >변경</TextButton
                      >
                    </div>
                  </div>
                </KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <BasicBox theme="senary" className="row-margin-item-group">
              <KeyValue margin="regular">
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>외장</KeyValueTitle>
                  <KeyValueText>
                    <div class="flex-box">
                      <div class="flex-box__cell flex-1">아틸라스 화이트</div>
                      <div class="flex-box__cell">
                        <ColorChip
                          :colors="['241, 233, 233']"
                          size="small"
                        ></ColorChip>
                      </div>
                    </div>
                  </KeyValueText>
                </KeyValueItem>
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>내장</KeyValueTitle>
                  <KeyValueText>
                    <div class="flex-box">
                      <div class="flex-box__cell flex-1">
                        네츄럴 베이지 / 다크 베이지
                      </div>
                      <div class="flex-box__cell">
                        <ColorChip
                          :colors="['244, 238, 238', '225, 213, 213']"
                          size="small"
                        ></ColorChip>
                      </div>
                    </div>
                  </KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </BasicBox>
          </li>
        </ul>
      </BasicBox>

      <FormList :classNames="{ wrap: 'row-margin-contents' }">
        <FormListItem
          titleText="할인금액"
          titleOptionalText="(선택)"
          :forceFocus="true"
          target="#layerAutoEstimateConfirmDiscountPrice"
        >
          <FormInvalid :error="state.discountPriceError">
            <InputBlock :error="state.discountPriceError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  pattern="\d*"
                  title="할인금액 입력"
                  placeholder="금액을 입력해 주세요"
                  id="layerAutoEstimateConfirmDiscountPrice"
                  :useDelete="false"
                  align="right"
                />
              </InputBlockCell>
              <template v-slot:innerRight>
                <div class="text-body-3">원</div>
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>

            <ul :class="[$style['basic-list'], 'row-margin-item']">
              <li :class="$style['basic-list__item']">
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  국산차 리스 또는 수입차(상품무관) 예정자에 한하여 입력해
                  주세요.
                </div>
              </li>
              <li :class="$style['basic-list__item']">
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  판매사에서 제시하는 차량할인가격 입력해 주세요.
                </div>
              </li>
            </ul>

            <div class="flex-box row-margin-item-group">
              <div class="flex-box__cell text-body-5 color-gray-secondary">
                할인금액 안내
              </div>
              <div class="flex-box__cell flex-box__cell--small">
                <BasicTooltip placement="top" :fit="true">
                  <IconTooltip :class="$style['icon']" />
                  <span class="for-a11y">(도움말)</span>

                  <template v-slot:contents>
                    <section :class="$style['tooltip-section']">
                      <h3 :class="$style['tooltip-section__title']">
                        할인금액 안내
                      </h3>
                      <ul
                        :class="[
                          $style['basic-list'],
                          $style['basic-list--mini-margin'],
                        ]"
                      >
                        <li
                          :class="[$style['basic-list__item'], 'color-white']"
                        >
                          <div :class="$style['basic-list__symbol']"></div>
                          <div :class="$style['basic-list__content']">
                            할인금액은 자동차 판매사에서 제시하는 금액이에요.
                          </div>
                        </li>
                        <li
                          :class="[$style['basic-list__item'], 'color-white']"
                        >
                          <div :class="$style['basic-list__symbol']"></div>
                          <div :class="$style['basic-list__content']">
                            입력하지 않으셔도 견적 조회는 가능하지만, 계약시점에
                            월 납입금이 변경될 수 있어요.
                          </div>
                        </li>
                      </ul>
                    </section>
                  </template>
                </BasicTooltip>
              </div>
            </div>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <template v-slot:foot>
        <KeyValue verticalAlign="center">
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle :classNames="{ title: 'color-black' }">
              총 차량가격
            </KeyValueTitle>
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
            <BasicButton>다음</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/LayerAutoEstimateConfirm.scss';
</style>
