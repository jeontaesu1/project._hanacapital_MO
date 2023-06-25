<script>
// AF_M98_l008
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PopupButton,
    StepProgress,
    PageTextGroup,
    PageMainText,
    BasicBox,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
    ButtonList,
    ButtonListItem,
    BasicButton,
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
          <PopupTitle>온라인약정</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
        <StepProgress :total="8" :current="5" />
      </template>

      <PageTextGroup>
        <PageMainText>
          <strong>약정 서류를</strong><br />
          확인해 주세요
        </PageMainText>
      </PageTextGroup>

      <BasicBox theme="septenary">
        <div :class="$style['agree-list']">
          <div :class="$style['agree-list__head']">
            <CheckBox
              id="LayerInventoryFinanceURLCheckRequiredDocuments001Agree"
              :classNames="{
                wrap: $style['agree-list__checkbox'],
              }"
              theme="tertiary"
            >
              <CheckBoxObject />
              <CheckBoxLabelText>재고금융 한도거래 확약서</CheckBoxLabelText>
            </CheckBox>
            <div :class="$style['agree-list__right']">
              <button type="button" :class="$style['agree-list__link']">
                <span :class="$style['agree-list__link-text']">상세보기</span>
              </button>
            </div>
          </div>
        </div>
      </BasicBox>

      <BasicBox theme="septenary" className="row-margin-item-group">
        <div :class="$style['agree-list']">
          <div :class="$style['agree-list__head']">
            <CheckBox
              id="LayerInventoryFinanceURLCheckRequiredDocuments002Agree"
              :classNames="{
                wrap: $style['agree-list__checkbox'],
              }"
              theme="tertiary"
            >
              <CheckBoxObject />
              <CheckBoxLabelText>
                재고금융 건별 대출 관련 위임장
              </CheckBoxLabelText>
            </CheckBox>
            <div :class="$style['agree-list__right']">
              <button type="button" :class="$style['agree-list__link']">
                <span :class="$style['agree-list__link-text']">상세보기</span>
              </button>
            </div>
          </div>
        </div>
      </BasicBox>

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
@import '@/assets/scss/views/inventoryFinance/LayerInventoryFinanceURLCheckRequiredDocuments.scss';
</style>
