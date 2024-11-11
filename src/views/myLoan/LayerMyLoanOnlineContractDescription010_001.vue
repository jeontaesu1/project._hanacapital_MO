<script>
// My_M03_l297
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
          <PopupTitle>스탁론 중요사항 안내</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          <span class="font-weight-bold">스탁론 상품의</span><br />
          특징은 무엇인가요?
        </PageMainText>
      </PageTextGroup>

      <IllustObject type="credit" :classNames="{ wrap: 'row-margin-none' }" />

      <div>
        <div class="text-body-2 font-weight-medium">
          <div>
            스탁론 상품은 회사와 업무제휴를 맺은 증권사의 손님을 대상으로 그
            증권계좌 주식, 예수금을 담보로 평가하여 회사상품기준에 따라 대출금을
            지급하는 상품이에요.
          </div>
          <div class="row-margin-item">
            스탁론 상품은 다른 가계대출 상품과는 달리 심사(개인신용점수 등)에
            따라 금리가 차등적용 되지 않으며, 상품의 특성에 따라 금리가
            적용돼요.
          </div>
        </div>

        <NoticeText :classNames="{ wrap: 'row-margin-item' }">
          스탁론 대출을 실행하시면 신용점수가 하락할 수 있어 추가대출 및
          신용카드 상품 등의 이용에 불이익이 발생할 수 있어요.
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
