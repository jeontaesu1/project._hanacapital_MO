<script>
// LM_M01_l008
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import ContentsButton from '@/components/ui/button/ContentsButton.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PageTextGroup,
    PageMainText,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    ContentsButton,
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
          <PopupTitle>사업자선택</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          <strong>
            사업자조회 결과를<br />
            선택해 주세요
          </strong>
        </PageMainText>
      </PageTextGroup>

      <!-- Case : 결과 없을 때 -->
      <div :class="$style['empty']">
        <p :class="$style['empty__text']">조회된 결과가 없습니다.</p>
      </div>
      <!-- // Case : 결과 없을 때 -->

      <!-- Case : 결과 있을 때 -->
      <ul :class="[$style['address-list'], $style['address-list--select']]">
        <li v-for="i in 2" :key="i" :class="$style['address-list__item']">
          <ContentsButton>
            <div :class="$style['address-list__block']">
              <div :class="$style['address-list__title']">하나캐피탈</div>
              <KeyValue align="left" margin="mini" size="medium">
                <KeyValueItem :classNames="{ item: 'text-body-4 color-black' }">
                  <KeyValueTitle>사업자번호</KeyValueTitle>
                  <KeyValueText>123-12-12345</KeyValueText>
                </KeyValueItem>

                <KeyValueItem :classNames="{ item: 'text-body-4 color-black' }">
                  <KeyValueTitle>설립일자</KeyValueTitle>
                  <KeyValueText>2021.09.11</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </div>
          </ContentsButton>
        </li>
      </ul>
      <!-- // Case : 결과 있을 때 -->
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/lmBlog/LayerLMBlogLoanCounselingSelectBusiness.scss';
</style>
