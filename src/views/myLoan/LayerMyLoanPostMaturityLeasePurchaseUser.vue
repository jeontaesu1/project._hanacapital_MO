<script>
// My_M08_l024
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    StepProgress,
    PopupTitle,
    PageTextGroup,
    PageMainText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    NoticeText,
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
          <PopupTitle>만기후처리 구매</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
        <StepProgress :total="3" :current="1" />
      </template>

      <PageTextGroup>
        <PageMainText>
          구매 유의사항을<br />
          확인해 주세요
        </PageMainText>
      </PageTextGroup>

      <div>
        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">소유권 이전등록</h3>

          <p class="text-body-4 font-weight-light">
            이용자 명의 리스상품으로, 소유권 이전 등록 절차가 필요하지 않습니다.
          </p>
        </section>

        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">취득세</h3>

          <p class="text-body-4 font-weight-light">
            리스차량 이용자는 리스
            <span class="color-red font-weight-regular"
              >계약 종료일로부터 60일이내에 취득세(2%)를 신고 납부</span
            >하여야 합니다. (자진신고납부)<br />
            불이행시 가산세를 포함한 금액으로 과세됩니다.
          </p>

          <NoticeText :classNames="{ wrap: 'row-margin-item' }">
            지방세법 제15조(세율의특례)제2항제8호 및 같은법시행령 제30조 제2항
            제4호에 의거
          </NoticeText>
        </section>

        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">저당해지</h3>
          <p class="text-body-4 font-weight-light">
            리스 종료 이후,
            <span class="color-red font-weight-regular">저당해지</span>가
            필요합니다.
          </p>

          <NoticeText :classNames="{ wrap: 'row-margin-item' }">
            저당해지문의(대표번호) 1800-1110
          </NoticeText>
        </section>
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>네, 모두 확인했습니다.</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
