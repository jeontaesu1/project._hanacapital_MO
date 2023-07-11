<script>
// My_M03_l286
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
    PopupTitle,
    PopupButton,
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
          <PopupTitle>일반리스 중요사항 안내</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          <strong>리스 상품이</strong><br />
          무엇인가요?
        </PageMainText>
      </PageTextGroup>

      <IllustObject type="feature" :classNames="{ wrap: 'row-margin-none' }" />

      <div>
        <div class="text-body-2">
          <div>
            <span class="font-weight-medium">리스</span>는 시설을 대여해주는
            회사(리스사)가 고객이 선택한 물건(자동차, 기계설비 등)을 구매하고,
            고객에게 그 물건을 사용 할 수 있도록 하는 거래에요. 리스의 종류는
            크게 <span class="color-red">금융리스</span>와
            <span class="color-red">운용리스</span>로 구분돼요.
          </div>
          <div class="row-margin-item">
            <span class="font-weight-medium">금융리스</span>는
            <span class="color-red">
              물건의 소유에 따른 위험과 보상의 대부분이 고객에게 이전되는
              리스</span
            >에요. 본질적 기능은 고객에게 물건 취득자금에 대한 금융 편의를
            제공하는 데에 있기 때문에,
            <span class="color-red">원칙적으로 반납이 불가해요!</span>
          </div>
        </div>

        <NoticeText :classNames="{ wrap: 'row-margin-item' }">
          금융리스는 이자, 감가상각비의 비용처리가 가능해요.
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
