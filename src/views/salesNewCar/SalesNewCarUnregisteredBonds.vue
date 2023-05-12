<script>
// NC_M08_p001
import { onMounted, onUnmounted, reactive } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
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
    PageContents,
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

    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '하나원큐오토');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => ['menu']);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });

    return {
      state,
    };
  },
};
</script>

<template>
  <PageContents>
    <section class="contents-wrap">
      <h2 class="text-title-2 row-margin-contents">차량/저당 미등록 채권</h2>

      <!-- Case : 내역 없을 경우 -->
      <div :class="$style['empty']">
        <p :class="$style['empty__text']">미등록된 채권이 없습니다.</p>
      </div>
      <!-- // Case : 내역 없을 경우 -->

      <ul class="reset-list">
        <li
          v-for="(item, i) in state.data"
          :key="i"
          class="row-margin-contents"
        >
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-body-1 font-weight-medium">
                  {{ item.name }}
                </h3>
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
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/salesNewCar/SalesNewCarUnregisteredBonds.scss';
</style>
