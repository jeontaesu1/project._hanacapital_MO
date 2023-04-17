<script>
// My_M01_p005
import { ref, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import LayerMyLoanMaintenanceHistoryDetail from '@/views/myLoan/LayerMyLoanMaintenanceHistoryDetail.vue';

export default {
  components: {
    PageContents,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    NoticeText,
    LayerMyLoanMaintenanceHistoryDetail,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const layer001 = ref(null);

    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '정비이력');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });

    return {
      layer001,
      layer001Open,
    };
  },
};
</script>

<template>
  <PageContents>
    <ul :class="$style['logs']">
      <li v-for="i in 5" :key="i" :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div div :class="$style['logs__contents']">
              <h3 :class="$style['logs__title']">정비</h3>
              <KeyValue align="left" size="regular" margin="mini">
                <KeyValueItem :classNames="{ item: 'text-body-4' }">
                  <KeyValueTitle>수리점</KeyValueTitle>
                  <KeyValueText>서울 하나카수리센터</KeyValueText>
                </KeyValueItem>

                <KeyValueItem :classNames="{ item: 'text-body-4' }">
                  <KeyValueTitle>입고일</KeyValueTitle>
                  <KeyValueText>2021.08.24</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </div>
            <div div :class="$style['logs__right']">
              <button
                type="button"
                :class="$style['logs__link']"
                @click="layer001Open"
              >
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>

    <NoticeText :classNames="{ wrap: 'row-margin-contents' }">
      사고/고장 접수, 정비관련 문의사항은<br />
      <span class="color-green">24시간 콜센터(1688-2040)</span>로 연락해 주세요.
    </NoticeText>

    <LayerMyLoanMaintenanceHistoryDetail ref="layer001" />
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/MyLoanMaintenanceHistory.scss';
</style>
