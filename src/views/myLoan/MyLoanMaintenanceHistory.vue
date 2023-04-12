<script>
// My_M01_p005
import { ref, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValueList from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import LayerMyLoanMaintenanceHistoryDetail from '@/views/myLoan/LayerMyLoanMaintenanceHistoryDetail.vue';

export default {
  components: {
    PageContents,
    BasicBox,
    KeyValueList,
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
      store.ui.header.setLeftButtons(() => []);
      store.ui.header.setRightButtons(() => ['close']);
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
    <BasicBox class="row-margin-item-small">
      <div :class="$style['flex']">
        <div :class="$style['flex__left']">
          <h3 class="text-body-1 font-weight-medium">정비</h3>
          <KeyValueList
            align="left"
            size="regular"
            margin="small"
            :classNames="{ wrap: 'row-margin-small' }"
          >
            <KeyValueItem :classNames="{ item: 'text-body-4' }">
              <KeyValueTitle>수리점</KeyValueTitle>
              <KeyValueText>서울 하나카수리센터</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-4' }">
              <KeyValueTitle>입고일</KeyValueTitle>
              <KeyValueText>2021.08.24</KeyValueText>
            </KeyValueItem>
          </KeyValueList>
        </div>
        <div :class="$style['flex__right']">
          <button type="button" :class="$style['link']" @click="layer001Open">
            <span :class="$style['link__text']">상세보기</span>
          </button>
        </div>
      </div>
    </BasicBox>

    <BasicBox class="row-margin-item-small">
      <div :class="$style['flex']">
        <div :class="$style['flex__left']">
          <h3 class="text-body-1 font-weight-medium">수리</h3>
          <KeyValueList
            align="left"
            size="regular"
            margin="small"
            :classNames="{ wrap: 'row-margin-small' }"
          >
            <KeyValueItem :classNames="{ item: 'text-body-4' }">
              <KeyValueTitle>수리점</KeyValueTitle>
              <KeyValueText>서울 하나카수리센터</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-4' }">
              <KeyValueTitle>입고일</KeyValueTitle>
              <KeyValueText>2021.08.24</KeyValueText>
            </KeyValueItem>
          </KeyValueList>
        </div>
        <div :class="$style['flex__right']">
          <button type="button" :class="$style['link']" @click="layer001Open">
            <span :class="$style['link__text']">상세보기</span>
          </button>
        </div>
      </div>
    </BasicBox>

    <BasicBox class="row-margin-item-small">
      <div :class="$style['flex']">
        <div :class="$style['flex__left']">
          <h3 class="text-body-1 font-weight-medium">정비</h3>
          <KeyValueList
            align="left"
            size="regular"
            margin="small"
            :classNames="{ wrap: 'row-margin-small' }"
          >
            <KeyValueItem :classNames="{ item: 'text-body-4' }">
              <KeyValueTitle>수리점</KeyValueTitle>
              <KeyValueText>서울 하나카수리센터</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-4' }">
              <KeyValueTitle>입고일</KeyValueTitle>
              <KeyValueText>2021.08.24</KeyValueText>
            </KeyValueItem>
          </KeyValueList>
        </div>
        <div :class="$style['flex__right']">
          <button type="button" :class="$style['link']" @click="layer001Open">
            <span :class="$style['link__text']">상세보기</span>
          </button>
        </div>
      </div>
    </BasicBox>

    <BasicBox class="row-margin-item-small">
      <div :class="$style['flex']">
        <div :class="$style['flex__left']">
          <h3 class="text-body-1 font-weight-medium">정비</h3>
          <KeyValueList
            align="left"
            size="regular"
            margin="small"
            :classNames="{ wrap: 'row-margin-small' }"
          >
            <KeyValueItem :classNames="{ item: 'text-body-4' }">
              <KeyValueTitle>수리점</KeyValueTitle>
              <KeyValueText>서울 하나카수리센터</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-4' }">
              <KeyValueTitle>입고일</KeyValueTitle>
              <KeyValueText>2021.08.24</KeyValueText>
            </KeyValueItem>
          </KeyValueList>
        </div>
        <div :class="$style['flex__right']">
          <button type="button" :class="$style['link']" @click="layer001Open">
            <span :class="$style['link__text']">상세보기</span>
          </button>
        </div>
      </div>
    </BasicBox>

    <NoticeText :class="$style['notice']">
      사고/고장 접수, 정비관련 문의사항은<br />
      <span class="color-green">24시간 콜센터(1688-2040)</span>로 연락해 주세요.
    </NoticeText>

    <LayerMyLoanMaintenanceHistoryDetail ref="layer001" />
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/MyLoanMaintenanceHistory.scss';
</style>
