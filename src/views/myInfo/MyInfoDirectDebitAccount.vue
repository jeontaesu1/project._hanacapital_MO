<script>
// MI_M01_p003
import { ref, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import ContentsButton from '@/components/ui/button/ContentsButton.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import LayerMyInfoDirectDebitAccountNotice from '@/views/myInfo/LayerMyInfoDirectDebitAccountNotice.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    PageSubText,
    ContentsButton,
    RoundStatus,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    LayerMyInfoDirectDebitAccountNotice,
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
      store.ui.header.setTitle(() => '자동이체 계좌 변경');
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
    <PageTextGroup>
      <PageMainText>
        변경하실 자동이체 계좌를<br />
        <strong>선택하세요</strong>
      </PageMainText>
      <PageSubText>
        본인 명의의 계좌로 자동이체 계좌를 변경할 수 있습니다.
      </PageSubText>
    </PageTextGroup>
    <div>
      <ul class="reset-list">
        <li class="row-margin-item-group">
          <ContentsButton @click="layer001Open">
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-body-1 font-weight-medium">신용대출</h3>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus theme="secondary">정상</RoundStatus>
              </BasicBoxHeadRight>
            </BasicBoxHead>

            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>대출기간</KeyValueTitle>
                <KeyValueText>2021.09.22 ~ 2023.09.21</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>결제회차</KeyValueTitle>
                <KeyValueText>4/12</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>대출금액</KeyValueTitle>
                <KeyValueText>40,991,000원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>결제예정금액</KeyValueTitle>
                <KeyValueText>2,334,700원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>자동이체계좌</KeyValueTitle>
                <KeyValueText>하나은행 ***1234567890</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </ContentsButton>
        </li>

        <li class="row-margin-item-group">
          <ContentsButton @click="layer001Open">
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-body-1 font-weight-medium">
                  오토리스 12가 1234
                </h3>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus theme="secondary">정상</RoundStatus>
              </BasicBoxHeadRight>
            </BasicBoxHead>

            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>이용기간</KeyValueTitle>
                <KeyValueText>2021.09.22 ~ 2023.09.21</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>결제회차</KeyValueTitle>
                <KeyValueText>4/12</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>결제예정금액</KeyValueTitle>
                <KeyValueText>334,700원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>자동이체계좌</KeyValueTitle>
                <KeyValueText>하나은행 ***1234567890</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </ContentsButton>
        </li>

        <li class="row-margin-item-group">
          <ContentsButton @click="layer001Open">
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-body-1 font-weight-medium">
                  오토리스 12가 1234
                </h3>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus theme="secondary">정상</RoundStatus>
              </BasicBoxHeadRight>
            </BasicBoxHead>

            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>대출기간</KeyValueTitle>
                <KeyValueText>2021.09.22 ~ 2023.09.21</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>결제회차</KeyValueTitle>
                <KeyValueText>4/12</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>결제예정금액</KeyValueTitle>
                <KeyValueText>334,700원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>자동이체계좌</KeyValueTitle>
                <KeyValueText>하나은행 ***1234567890</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </ContentsButton>
        </li>
      </ul>
    </div>
    <LayerMyInfoDirectDebitAccountNotice ref="layer001" />
  </PageContents>
</template>
