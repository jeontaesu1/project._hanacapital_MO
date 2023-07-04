<script>
// My_M01_p008 등록 전
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import iconImportant from '@/assets/images/icon/important.svg?component';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PageTextGroup,
    PageSubText,
    PageMainText,
    IllustObject,
    BasicButton,
    ButtonList,
    ButtonListItem,
    TextButton,
    iconImportant,
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
          <PopupTitle>지정운전자</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          지정운전자를<br />
          <strong>등록해 주세요</strong>
        </PageMainText>
        <PageSubText>
          기본 운전자 외 2인에 한하여 <br />
          추가로 지정 가능합니다.
        </PageSubText>
      </PageTextGroup>

      <IllustObject type="driver" />

      <div class="inline-wrap align-right row-margin-contents">
        <TextButton theme="quaternary">
          지정운전자 등록안내 및 유의사항
          <template v-slot:rightIcon>
            <iconImportant />
          </template>
        </TextButton>
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>지정운전자 등록</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
