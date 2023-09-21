<script>
// My_M03_l275
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
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';

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
    ButtonListItem,
    BasicButton,
    ButtonList,
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
          <PopupTitle>자동차운용리스 중요사항 안내</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          유사한 금융상품과 구별되는<br />
          특징은 무엇인가요?
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
            <span class="font-weight-medium">
              운용리스는 금융리스 외의 리스를 통칭해요.</span
            ><br />
            리스회사가 범용성이 높은 물건을 리스이용자에게 필요기간 동안
            이용하게 하고,
            <span class="color-red">
              리스기간 종료 시 물건을 반환하는 것을 원칙으로 하는 계약</span
            >을 의미하며,
            <span class="font-weight-medium">
              리스료 전체에 대해 손비처리(비용처리)를 진행해요.
            </span>
          </div>
        </div>

        <NoticeText :classNames="{ wrap: 'row-margin-item' }">
          운용리스는 반납을 원칙으로 하며, 반환의무가 발생했을 경우 이를
          지체하면 반환지연금이 발생합니다.
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
