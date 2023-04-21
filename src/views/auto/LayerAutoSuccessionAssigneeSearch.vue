<script>
// AF_M07_l005
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    StepProgress,
    InputBlock,
    InputBlockCell,
    BasicInput,
    SearchButton,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicHr,
    ButtonList,
    ButtonListItem,
    BasicButton,
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
        <StepProgress :total="4" :current="1" />
      </template>

      <PageTextGroup>
        <PageMainText>
          승계 대상 차량을<br />
          <strong>조회해주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <InputBlock type="search">
        <InputBlockCell :flexible="true">
          <BasicInput
            type="search"
            title="차량번호 검색"
            placeholder="차량번호 검색"
          />
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
            승계 가능한 차량이 없습니다.<br />
            양도인에게 승계 동의를 요청해주세요.
          </p>
        </div>
        <!-- // Case : 결과 없을 때 -->

        <!-- Case : 결과 있을 경우 -->
        <ul class="reset-list">
          <li v-for="i in 2" :key="i" class="row-margin-item-group">
            <BasicBox>
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <p class="text-body-4 font-weight-light row-margin-mini">
                    2020년식
                  </p>
                  <h3 class="text-body-1 font-weight-medium">
                    운용리스 11가1111
                  </h3>
                  <p class="text-body-4 color-gray row-margin-small">
                    쏘나타 뉴 라이즈 1.6T-Gdi 스마트 (마이 스마트 핏)
                  </p>
                </BasicBoxHeadLeft>
                <BasicBoxHeadRight>
                  <CarThumb src="/images/_dummy/car-thumb.png" />
                </BasicBoxHeadRight>
              </BasicBoxHead>
              <KeyValue margin="regular">
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>차대번호</KeyValueTitle>
                  <KeyValueText>KMHEL00CPYA000001</KeyValueText>
                </KeyValueItem>
              </KeyValue>

              <ButtonList
                :classNames="{
                  wrap: 'row-margin-contents-small',
                }"
              >
                <ButtonListItem>
                  <BasicButton size="small" theme="secondary"
                    >차량 승계</BasicButton
                  >
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
@import '@/assets/scss/views/auto/LayerAutoSuccessionAssigneeSearch.scss';
</style>
