<script>
// AF_M00_l018
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import RoundButton from '@/components/ui/button/RoundButton.vue';

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
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    BoxCheck,
    BoxCheckLabel,
    NoticeText,
    TextButton,
    BasicHr,
    RoundButton,
    IconTell,
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
      </div>

      <BasicHr theme="quaternary" className="row-margin-contents"></BasicHr>

      <div class="row-margin-item-regular row-margin-bottom-none">
        <PageTextGroup>
          <PageMainText>
            간편하게 추천 차량을<br />
            <strong>골라보세요</strong>
          </PageMainText>
        </PageTextGroup>
      </div>

      <div class="contents-wrap">
        <ul class="reset-list">
          <li class="row-margin-item-group">
            <BoxCheck
              :contents="true"
              type="radio"
              name="LayerAutoEstimateSelectRecommend001"
              id="LayerAutoEstimateSelectRecommend001_001"
            >
              <UiAccordion tagName="div">
                <UiAccordionItem tagName="div">
                  <div :class="$style['head']">
                    <div class="flex-box align-items-start">
                      <div class="flex-box__cell flex-1">
                        <div class="row-margin-item">
                          <div
                            class="text-body-1 font-weight-medium row-margin-small"
                          >
                            <BoxCheckLabel>
                              <span class="flex-box">
                                <span class="flex-box__cell">인기옵션</span>
                                <span class="flex-box__cell flex-1 align-right">
                                  18,850,000 원
                                </span>
                              </span>
                            </BoxCheckLabel>

                            <UiAccordionOpener
                              :classNames="{
                                button: $style['opener'],
                              }"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="text-body-4 color-gray row-margin-small">
                      A3(3세대) 세단 40 TFSI 2019
                    </div>
                  </div>

                  <UiAccordionLayer>
                    <div :class="$style['contents']">
                      <p class="text-body-3">
                        아틸라스 화이트, 네츄럴 베이지 / 다크 베이지, 스토리지
                      </p>
                    </div>
                  </UiAccordionLayer>
                </UiAccordionItem>
              </UiAccordion>
            </BoxCheck>
          </li>
          <li class="row-margin-item-group">
            <BoxCheck
              :contents="true"
              type="radio"
              name="LayerAutoEstimateSelectRecommend001"
              id="LayerAutoEstimateSelectRecommend001_002"
            >
              <UiAccordion tagName="div">
                <UiAccordionItem tagName="div">
                  <div :class="$style['head']">
                    <div class="flex-box align-items-start">
                      <div class="flex-box__cell flex-1">
                        <div class="row-margin-item">
                          <div
                            class="text-body-1 font-weight-medium row-margin-small"
                          >
                            <BoxCheckLabel>
                              <span class="flex-box">
                                <span class="flex-box__cell">풀옵션</span>
                                <span class="flex-box__cell flex-1 align-right">
                                  18,850,000 원
                                </span>
                              </span>
                            </BoxCheckLabel>

                            <UiAccordionOpener
                              :classNames="{
                                button: $style['opener'],
                              }"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="text-body-4 color-gray row-margin-small">
                      A3(3세대) 세단 40 TFSI 2019
                    </div>
                  </div>

                  <UiAccordionLayer>
                    <div :class="$style['contents']">
                      <p class="text-body-3">A3(3세대) 세단 40 TFSI 2019</p>
                    </div>
                  </UiAccordionLayer>
                </UiAccordionItem>
              </UiAccordion>
            </BoxCheck>
          </li>
          <li class="row-margin-item-group">
            <BoxCheck
              :contents="true"
              type="radio"
              name="LayerAutoEstimateSelectRecommend001"
              id="LayerAutoEstimateSelectRecommend001_003"
            >
              <UiAccordion tagName="div">
                <UiAccordionItem tagName="div">
                  <div :class="$style['head']">
                    <div class="flex-box align-items-start">
                      <div class="flex-box__cell flex-1">
                        <div class="row-margin-item">
                          <div
                            class="text-body-1 font-weight-medium row-margin-small"
                          >
                            <BoxCheckLabel>
                              <span class="flex-box">
                                <span class="flex-box__cell">추천명</span>
                                <span class="flex-box__cell flex-1 align-right">
                                  18,850,000 원
                                </span>
                              </span>
                            </BoxCheckLabel>

                            <UiAccordionOpener
                              :classNames="{
                                button: $style['opener'],
                              }"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="text-body-4 color-gray row-margin-small">
                      A3(3세대) 세단 40 TFSI 2019
                    </div>
                  </div>

                  <UiAccordionLayer>
                    <div :class="$style['contents']">
                      <p class="text-body-3">A3(3세대) 세단 40 TFSI 2019</p>
                    </div>
                  </UiAccordionLayer>
                </UiAccordionItem>
              </UiAccordion>
            </BoxCheck>
          </li>
        </ul>
        <div class="flex-box row-margin-item-group">
          <div class="flex-box__cell flex-1">
            <NoticeText>원하시는 차량이 없으신가요?</NoticeText>
          </div>
          <div class="flex-box__cell">
            <TextButton :block="true" :underline="true" theme="secondary">
              차량 직접 선택
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
@import '@/assets/scss/views/auto/LayerAutoEstimateSelectRecommend.scss';
</style>
