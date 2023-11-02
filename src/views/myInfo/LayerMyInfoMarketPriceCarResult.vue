<script>
// MI_M01_l017
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';

import IconCarSecurity from '@/assets/images/icon/car-security.svg?component';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    ButtonList,
    ButtonListItem,
    BasicButton,
    PageTextGroup,
    PageMainText,
    BasicHr,
    BasicBox,
    UnitText,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicSelect,
    InputBlock,
    InputBlockCell,
    CarThumb,
    IconCarSecurity,
  },
  setup() {
    const state = reactive({
      ratingError: false,
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
        <PageMainText>올 뉴 아반떼</PageMainText>
      </PageTextGroup>

      <div>
        <div class="flex-box justify-conten-center row-margin-contents-group">
          <CarThumb size="medium" src="/images/_dummy/car-thumb.png" />
        </div>

        <FormList>
          <FormListItem
            titleText="차량등급"
            target="#layerMyInfoMarketPriceCarResultRatingButton"
            :selectOnly="true"
          >
            <FormInvalid :error="state.ratingError">
              <InputBlock :error="state.ratingError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: 'LS 기본형',
                      },
                      {
                        value: '2',
                        text: 'LS 고급형',
                      },
                    ]"
                    buttonTitle="중고차 시세 등급 선택하기"
                    layerTitle="중고차 시세 등급을 선택해 주세요"
                    id="layerMyInfoMarketPriceCarResultRating"
                    buttonId="layerMyInfoMarketPriceCarResultRatingButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>

        <BasicBox className="row-margin-contents">
          <KeyValue margin="regular">
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>출시일</KeyValueTitle>
              <KeyValueText>2022.12.13</KeyValueText>
            </KeyValueItem>
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>출고가</KeyValueTitle>
              <KeyValueText>2,200만원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </div>

      <BasicHr className="row-margin-container-medium" />

      <BasicBox>
        <div :class="[$style['head']]">
          <UnitText
            size="large"
            rightUnit="만원"
            align="center"
            verticalAlign="center"
          >
            1,700
          </UnitText>
          <div class="text-body-3 color-gray">평균시세</div>
        </div>

        <BasicHr
          type="contents"
          theme="quaternary"
          className="row-margin-contents-small"
        />

        <KeyValue margin="regular">
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>1년 후 예상 시세</KeyValueTitle>
            <KeyValueText>6,000 만원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>2년 후 예상 시세</KeyValueTitle>
            <KeyValueText>7,000 만원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>3년 후 예상 시세</KeyValueTitle>
            <KeyValueText>8,000 만원</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <div
        :class="[
          $style['icon-list'],
          'row-margin-contents-group',
          'row-margin-bottom-none',
        ]"
      >
        <ul :class="$style['icon-list__list']">
          <li :class="$style['icon-list__item']">
            <button type="button" :class="$style['icon-list__block']">
              <span :class="$style['icon-list__icon']"
                ><IconCarSecurity
              /></span>
              <span :class="$style['icon-list__content']">
                <span :class="$style['icon-list__text']">
                  자동차를 소유중이신가요?
                </span>
                <span :class="$style['icon-list__title']">
                  원큐자동차담보대출
                </span>
              </span>
            </button>
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
            <BasicButton>등록하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myInfo/LayerMyInfoMarketPriceCarResult.scss';
</style>
