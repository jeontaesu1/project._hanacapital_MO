<script>
// BF_M06_l018

import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import FilterTab from '@/components/ui/tab/FilterTab.vue';
import FilterTabButton from '@/components/ui/tab/FilterTabButton.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IconArrow from '@/assets/images/icon/dropdown.svg?component';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    ButtonList,
    ButtonListItem,
    BasicButton,
    FilterTab,
    FilterTabButton,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    RoundStatus,
    TextButton,

    IconArrow,
  },
  setup() {
    const layer = ref(null);

    return {
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

      <FilterTab>
        <FilterTabButton tagName="button" type="button" :active="true">
          <span class="font-weight-medium">전체 </span>
          <span class="text-body-5">21</span>
        </FilterTabButton>
        <FilterTabButton tagName="button" type="button">
          <span class="font-weight-medium">개인금융 </span>
          <span class="text-body-5">21</span>
        </FilterTabButton>
        <FilterTabButton tagName="button" type="button">
          <span class="font-weight-medium">오토금융 </span>
          <span class="text-body-5">21</span>
        </FilterTabButton>
      </FilterTab>

      <!-- Case : 검색 결과 있을 때 -->
      <ul class="reset-list">
        <li class="row-margin-item-group">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <div :class="$style['division-info']">
                  <ul :class="$style['division-info__list']">
                    <li :class="$style['division-info__item']">
                      <div class="color-black text-body-4 font-weight-light">
                        2023.01.10
                      </div>
                    </li>
                    <li :class="$style['division-info__item']">
                      <div class="color-green text-body-4 font-weight-medium">
                        개인금융
                      </div>
                    </li>
                  </ul>
                </div>
                <h3 class="text-body-1 font-weight-medium row-margin-small">
                  의료기할부
                </h3>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus
                  :classNames="{ wrap: 'display-block' }"
                  theme="undenary"
                >
                  신규
                </RoundStatus>
              </BasicBoxHeadRight>
            </BasicBoxHead>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>대출금액/기간 </KeyValueTitle>
                <KeyValueText>24,990,000원 / 36개월</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>월납부금액 </KeyValueTitle>
                <KeyValueText>300,000 원</KeyValueText>
              </KeyValueItem>
            </KeyValue>
            <div
              :class="[
                $style['inline-alert'],
                $style['inline-alert--complete'],
                'row-margin-contents-small',
              ]"
            >
              <p :class="$style['inline-alert__text']">
                약정을 진행하실 수 있습니다.
              </p>
            </div>
            <ButtonList
              :classNames="{
                wrap: 'row-margin-contents-small',
              }"
            >
              <ButtonListItem>
                <BasicButton size="small">약정하기</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </BasicBox>
        </li>
        <li class="row-margin-item-group">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <div :class="$style['division-info']">
                  <ul :class="$style['division-info__list']">
                    <li :class="$style['division-info__item']">
                      <div class="color-black text-body-4 font-weight-light">
                        2023.01.10
                      </div>
                    </li>
                    <li :class="$style['division-info__item']">
                      <div class="color-green text-body-4 font-weight-medium">
                        개인금융
                      </div>
                    </li>
                  </ul>
                </div>
                <h3 class="text-body-1 font-weight-medium row-margin-small">
                  의료기할부
                </h3>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus
                  :classNames="{ wrap: 'display-block' }"
                  theme="undenary"
                >
                  신규
                </RoundStatus>
              </BasicBoxHeadRight>
            </BasicBoxHead>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>대출금액/기간 </KeyValueTitle>
                <KeyValueText>24,990,000원 / 36개월</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>월납부금액 </KeyValueTitle>
                <KeyValueText>300,000 원</KeyValueText>
              </KeyValueItem>
            </KeyValue>
            <div
              :class="[
                $style['inline-alert'],
                $style['inline-alert--complete'],
                'row-margin-contents-small',
              ]"
            >
              <p :class="$style['inline-alert__text']">
                약정중 (적합성·적정성 확인서)
              </p>
            </div>
            <ButtonList
              :classNames="{
                wrap: 'row-margin-contents-small',
              }"
            >
              <ButtonListItem>
                <BasicButton size="small">약정하기</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </BasicBox>
        </li>
        <li class="row-margin-item-group">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <div :class="$style['division-info']">
                  <ul :class="$style['division-info__list']">
                    <li :class="$style['division-info__item']">
                      <div class="color-black text-body-4 font-weight-light">
                        2023.01.10
                      </div>
                    </li>
                    <li :class="$style['division-info__item']">
                      <div class="color-green text-body-4 font-weight-medium">
                        개인금융
                      </div>
                    </li>
                  </ul>
                </div>
                <h3 class="text-body-1 font-weight-medium row-margin-small">
                  의료기할부
                </h3>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus
                  :classNames="{ wrap: 'display-block' }"
                  theme="undenary"
                >
                  신규
                </RoundStatus>
              </BasicBoxHeadRight>
            </BasicBoxHead>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>대출금액/기간 </KeyValueTitle>
                <KeyValueText>24,990,000원 / 36개월</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>월납부금액 </KeyValueTitle>
                <KeyValueText>300,000 원</KeyValueText>
              </KeyValueItem>
            </KeyValue>
            <div
              :class="[
                $style['inline-alert'],
                $style['inline-alert--complete'],
                'row-margin-contents-small',
              ]"
            >
              <p :class="$style['inline-alert__text']">
                약정중 (적합성·적정성 확인서)
              </p>
            </div>
            <ButtonList
              :classNames="{
                wrap: 'row-margin-contents-small',
              }"
            >
              <ButtonListItem>
                <BasicButton size="small">약정하기</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </BasicBox>
        </li>
      </ul>

      <div class="inline-wrap align-center row-margin-contents">
        <TextButton :classNames="{ wrap: 'text-body-4 color-gray' }">
          더보기
          <template v-slot:rightIcon>
            <IconArrow />
          </template>
        </TextButton>
      </div>
      <!-- //Case : 검색 결과 있을 때 -->
      <!-- Case : 검색 결과 없을 때 -->
      <div :class="$style['empty']">
        <p :class="$style['empty__text']">검색된 결과가 없습니다.</p>
      </div>
      <!-- // Case : 검색 결과 없을 때 -->

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/BF_M06_l018.scss';
</style>
