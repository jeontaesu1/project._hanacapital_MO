<script>
// My_M03_l203
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
          <PopupTitle>일반신용대출 중요사항 안내</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          대출금을 만기 전에 상환하고 싶은데<br />
          가능한가요?
        </PageMainText>
      </PageTextGroup>

      <IllustObject
        type="calculator"
        :classNames="{ wrap: 'row-margin-none' }"
      />

      <div>
        <div class="text-body-2">
          <div>
            대출 실행 후
            <span class="font-weight-medium">
              3년 이내에 대출금액을 중도상환
            </span>
            할 경우,
            <span class="color-red">
              중도상환수수료(중도상환수수료율 2%)가 발생해요.
            </span>
          </div>
          <div class="row-margin-item">
            예외적으로 동일 금융회사와 기존 대출계약을 해지하고 사실상 동일
            계약을 체결한 경우 양 계약기간을 합산하여 3년 경과 후에는
            중도상환수수료가 발생하지 않아요.
          </div>
        </div>

        <NoticeText :classNames="{ wrap: 'row-margin-item' }">
          중도상환수수료가 없는 상품도 있으니 꼭 확인해보세요.
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
