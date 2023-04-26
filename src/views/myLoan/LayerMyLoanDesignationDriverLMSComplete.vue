<script>
// My_M01_l012
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    IllustObject,
    ButtonList,
    ButtonListItem,
    BasicButton,
    PageTextGroup,
    PageMainText,
    PageSubText,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
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
      </template>

      <PageTextGroup>
        <PageMainText>
          지정운전자 정보를<br />
          <strong>입력해 주세요</strong>
        </PageMainText>
        <PageSubText>등록 완료 후 익일 0시부터 적용됩니다.</PageSubText>
      </PageTextGroup>

      <IllustObject type="complete" />

      <BasicBox>
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <h3 class="text-body-1 font-weight-medium">김하나(친인척)</h3>
          </BasicBoxHeadLeft>
        </BasicBoxHead>

        <KeyValue margin="regular">
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>생년월일</KeyValueTitle>
            <KeyValueText>2022.02.02</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>전화번호</KeyValueTitle>
            <KeyValueText>010-1234-5678</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>운전면허번호</KeyValueTitle>
            <KeyValueText>11-12-12345-12</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>취득일자</KeyValueTitle>
            <KeyValueText>2001.02.06</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>보험적용일시</KeyValueTitle>
            <KeyValueText>2001.02.06 00:00부터 적용</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
