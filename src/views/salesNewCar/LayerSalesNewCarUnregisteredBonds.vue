<script>
// NC_M01_l002
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

const dummyData = () => [
  {
    name: '홍길동',
    number: 'D1234-12345-123',
    date: '2022.10.28',
    deadline: '2022.11.10',
    product: '상품명',
  },
  {
    name: '홍길동',
    number: 'D1234-12345-123',
    date: '2022.10.28',
    deadline: '2022.11.10',
    product: '상품명',
  },
  {
    name: '홍길동',
    number: 'D1234-12345-123',
    date: '2022.10.28',
    deadline: '2022.11.10',
    product: '상품명',
  },
];

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
  },
  setup() {
    const state = reactive({
      data: dummyData(),
    });

    const layer = ref(null);

    return {
      state,
      layer,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="toast" :backgroundClose="true">
    <ToastPopup>
      <template v-slot:head>
        <ToastPopupHead>
          <PopupTitle> 차량/저당 미등록 채권</PopupTitle>
        </ToastPopupHead>
      </template>

      <ul class="reset-list">
        <li
          v-for="(item, i) in state.data"
          :key="i"
          class="row-margin-item-group"
        >
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-body-1 font-weight-medium">{{ item.name }}</h3>
              </BasicBoxHeadLeft>
            </BasicBoxHead>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>채권번호</KeyValueTitle>
                <KeyValueText>{{ item.number }}</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>실행일</KeyValueTitle>
                <KeyValueText>{{ item.date }}</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>등록기한</KeyValueTitle>
                <KeyValueText>{{ item.deadline }}</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>상품명</KeyValueTitle>
                <KeyValueText>{{ item.product }}</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </li>
      </ul>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton theme="secondary">확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ToastPopup>
  </UiLayer>
</template>
