<script>
// AF_M06_l001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';

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
    SearchButton,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicHr,
    UnitText,
    TextButton,
    ButtonList,
    ButtonListItem,
    BasicButton,
    CarEmblem,
    CarThumb,
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

      <PageTextGroup>
        <PageMainText>
          <strong>차량번호를</strong><br />
          입력해 주세요
        </PageMainText>
      </PageTextGroup>

      <InputBlock type="search">
        <InputBlockCell :flexible="true">
          <BasicInput type="search" title="차량번호 검색" />
        </InputBlockCell>
        <InputBlockCell type="search">
          <SearchButton />
        </InputBlockCell>
      </InputBlock>

      <!-- DD : 검색 후 노출 -->
      <BasicHr className="row-margin-container-medium" />

      <section class="contents-wrap">
        <h3 class="text-title-2 row-margin-contents">차량정보</h3>

        <!-- Case : 결과 없을 때 -->
        <div :class="$style['empty']">
          <p :class="$style['empty__text']">
            검색된 결과가 없습니다.<br />
            차량번호를 확인해 주세요.
          </p>
        </div>
        <!-- // Case : 결과 없을 때 -->

        <!-- Case : 결과 있을 경우 -->
        <ul class="reset-list">
          <li v-for="i in 2" :key="i" class="row-margin-item-group">
            <BasicBox>
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <div class="flex-box row-margin-item">
                    <div class="flex-box__cell flex-1">
                      <div class="flex-box row-margin-mini">
                        <div class="flex-box__cell">
                          <CarEmblem
                            src="/images/_dummy/car-emblem.png"
                            name="현대"
                          />
                        </div>
                        <div class="flex-box__cell flex-box__cell--small">
                          <p class="text-body-4 font-weight-light">2020년식</p>
                        </div>
                      </div>
                      <h3 class="text-body-1 font-weight-medium">11가1111</h3>
                      <p class="text-body-4 color-gray row-margin-small">
                        쏘나타 뉴 라이즈 1.6T-Gdi 스마트 (마이 스마트 핏)
                      </p>
                    </div>
                    <div class="flex-box__cell flex-box__cell--medium">
                      <CarThumb src="/images/_dummy/car-thumb.png" />
                    </div>
                  </div>
                  <UnitText rightUnit="원"><strong>741,620</strong></UnitText>
                </BasicBoxHeadLeft>
              </BasicBoxHead>
              <KeyValue margin="regular">
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>주행거리</KeyValueTitle>
                  <KeyValueText>65,000 Km</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>사고유무</KeyValueTitle>
                  <KeyValueText>
                    <div class="flex-box justify-conten-end">
                      <div class="flex-box__cell">Y</div>
                      <div class="flex-box__cell">
                        <TextButton
                          theme="secondary"
                          :underline="true"
                          :block="true"
                        >
                          세부이력
                        </TextButton>
                      </div>
                    </div>
                  </KeyValueText>
                </KeyValueItem>
              </KeyValue>

              <ButtonList
                :classNames="{
                  wrap: 'row-margin-contents-small',
                }"
              >
                <ButtonListItem>
                  <BasicButton size="small" BasicButton>차량 구매</BasicButton>
                </ButtonListItem>
              </ButtonList>
            </BasicBox>
          </li>
        </ul>
        <!-- // Case : 결과 있을 경우 -->
      </section>
      <!-- // DD : 검색 후 노출 -->
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/LayerAutoUsedLoanSearchNumber.scss';
</style>
