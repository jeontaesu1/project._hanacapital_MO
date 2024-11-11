<script>
// My_M03_l309
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    PopupTitle,
    PageTextGroup,
    PageMainText,
    IllustObject,
    NoticeText,
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
          <PopupTitle>사업자담보대출 중요사항 안내</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          <span class="font-weight-bold">사업자담보대출 상품의</span><br />
          특징은 무엇인가요?
        </PageMainText>
      </PageTextGroup>

      <IllustObject type="credit" :classNames="{ wrap: 'row-margin-none' }" />

      <div>
        <div class="text-body-2 font-weight-medium">
          <div>
            사업자담보대출 상품은 개인사업자를 대상으로 아파트를 담보로 하는
            대출이에요.
          </div>
          <div class="row-margin-item">
            사업용도 자금목적으로만 제한되며, 조건에 따라 자금용도 사후점검이
            필요해요.
          </div>
        </div>

        <NoticeText :classNames="{ wrap: 'row-margin-item' }">
          대출의 목적, 아파트의 위치/시세 등에 따라 대출의 가능여부 및 범위가
          달라 질 수 있습니다.
        </NoticeText>
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
            <BasicButton>확인했습니다</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
