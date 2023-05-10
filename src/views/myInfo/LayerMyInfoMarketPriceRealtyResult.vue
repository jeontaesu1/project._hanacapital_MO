<script>
// MI_M01_l020
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
import PageSubText from '@/components/ui/text/PageSubText.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import RoundTab from '@/components/ui/tab/RoundTab.vue';
import RoundTabButton from '@/components/ui/tab/RoundTabButton.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IconUpArrow from '@/assets/images/icon/up-arrow.svg?component';
import IconDownArrow from '@/assets/images/icon/down-arrow.svg?component';
import IconLogo from '@/assets/images/icon/hanacapital-small.svg?component';
import IconLink from '@/assets/images/icon/link.svg?component';
import IconBuilding from '@/assets/images/icon/building.svg?component';

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
    PageSubText,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicSelect,
    InputBlock,
    InputBlockCell,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    BasicHr,
    BasicBox,
    UnitText,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    RoundStatus,
    TextButton,
    IconUpArrow,
    IconDownArrow,
    RoundTab,
    RoundTabButton,
    IconLogo,
    IconLink,
    IconBuilding,
  },
  setup() {
    const state = reactive({
      sizeError: false,
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
          <strong>월계동 롯데캐슬루나</strong>
        </PageMainText>
        <PageSubText>서울특별시 노원구</PageSubText>
      </PageTextGroup>

      <div>
        <FormList>
          <FormListItem
            titleText="평형"
            target="#layerMyInfoMarketPriceRealtyResultSizeButton"
            :selectOnly="true"
          >
            <FormInvalid :error="state.sizeError">
              <InputBlock :error="state.sizeError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '79.33㎡ B형',
                      },
                      {
                        value: '2',
                        text: '79.33㎡ X형',
                      },
                    ]"
                    buttonTitle="건물 면적 선택하기"
                    layerTitle="건물 면적을 선택해 주세요"
                    id="layerMyInfoMarketPriceRealtyResultSize"
                    buttonId="layerMyInfoMarketPriceRealtyResultSizeButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>

        <BoxCheckList :classNames="{ wrap: 'row-margin-contents' }">
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="layerMyInfoMarketPriceRealtyResultType"
              id="layerMyInfoMarketPriceRealtyResultType001"
            >
              <BoxCheckLabel>매매</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="layerMyInfoMarketPriceRealtyResultType"
              id="layerMyInfoMarketPriceRealtyResultType002"
            >
              <BoxCheckLabel>전세</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>
      </div>

      <BasicHr className="row-margin-container-medium" />

      <div>
        <BasicBox>
          <div :class="[$style['head']]">
            <UnitText
              size="large"
              rightUnit="만원"
              align="center"
              verticalAlign="center"
              >8억 2,700</UnitText
            >
            <div class="text-body-3 color-gray">최근시세</div>
          </div>

          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents-small"
          />

          <KeyValue margin="regular" verticalAlign="center">
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>상한가</KeyValueTitle>
              <KeyValueText>
                <div class="flex-box">
                  <div class="flex-box__cell flex-1 align-right">
                    2억 6,000 만원
                  </div>
                  <div class="flex-box__cell">
                    <RoundStatus
                      theme="nonary"
                      :classNames="{ wrap: 'display-block' }"
                    >
                      <span class="flex-box">
                        <span class="flex-box__cell">
                          <span :class="$style['arrow']">
                            <IconUpArrow />
                          </span>
                        </span>
                        <span class="flex-box__cell flex-box__cell--mini">
                          2.5%
                          <span class="for-a11y">상승</span>
                        </span>
                      </span>
                    </RoundStatus>
                  </div>
                </div>
              </KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>하한가</KeyValueTitle>
              <KeyValueText>
                <div class="flex-box">
                  <div class="flex-box__cell flex-1 align-right">
                    2억 3,000 만원
                  </div>
                  <div class="flex-box__cell">
                    <RoundStatus
                      theme="denary"
                      :classNames="{ wrap: 'display-block' }"
                    >
                      <span class="flex-box">
                        <span class="flex-box__cell">
                          <span :class="$style['arrow']">
                            <IconDownArrow />
                          </span>
                        </span>
                        <span class="flex-box__cell flex-box__cell--mini">
                          2.0%
                          <span class="for-a11y">하락</span>
                        </span>
                      </span>
                    </RoundStatus>
                  </div>
                </div>
              </KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>

        <div class="row-margin-contents-group">
          <RoundTab>
            <RoundTabButton tagName="button" type="button" :active="true">
              6개월
            </RoundTabButton>
            <RoundTabButton tagName="button" type="button">1년</RoundTabButton>
            <RoundTabButton tagName="button" type="button">3년</RoundTabButton>
          </RoundTab>

          <div class="row-margin-contents-group">
            // 그래프 영역 라이브러리 확인 후 진행
          </div>
        </div>

        <div :class="$style['icon-list']">
          <ul :class="$style['icon-list__list']">
            <li :class="$style['icon-list__item']">
              <button type="button" :class="$style['icon-list__block']">
                <span :class="$style['icon-list__icon']"><IconBuilding /></span>
                <span :class="$style['icon-list__content']">
                  <span :class="$style['icon-list__text']">
                    아파트를 소유중이신가요?
                  </span>
                  <span :class="$style['icon-list__title']">행복아파트론</span>
                </span>
              </button>
            </li>
          </ul>
        </div>

        <BasicHr
          type="contents"
          theme="quaternary"
          className="row-margin-container"
        />

        <div :class="$style['join']">
          <div :class="$style['join__inner']">
            <div :class="$style['join__icon']"><IconLogo /></div>
            <div :class="$style['join__title']">이 시세를 계속 보려면?</div>
            <TextButton
              :block="true"
              :classNames="{
                wrap: [$style['join__link'], 'text-body-4 color-gray'],
              }"
            >
              앱 설치하러 가기
              <template v-slot:rightIcon>
                <IconLink />
              </template>
            </TextButton>
          </div>
        </div>
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
@import '@/assets/scss/views/myInfo/LayerMyInfoMarketPriceRealtyResult.scss';
</style>
