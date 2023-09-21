<script>
// NC_M03_p003 대출불가
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';

export default {
  components: {
    PageContents,
    ButtonList,
    ButtonListItem,
    BasicButton,
    PageTextGroup,
    PageMainText,
    PageSubText,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    IllustObject,
    CarEmblem,
    CarThumb,
    BottomSticky,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '신차모바일');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });
  },
};
</script>

<template>
  <PageContents>
    <PageTextGroup>
      <PageMainText>
        정밀심사 및 대출불가 대상으로<br />
        진행이 어렵습니다
      </PageMainText>
      <PageSubText>문의사항은 지점으로 연락하시기 바랍니다.</PageSubText>
    </PageTextGroup>

    <IllustObject type="fail" />

    <BasicBox>
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <div class="row-margin-mini">
            <CarEmblem src="/images/_dummy/car-emblem.png" name="현대" />
          </div>
          <h3 class="text-body-1 font-weight-medium">캐스퍼</h3>
          <p class="text-body-4 color-gray row-margin-small">스마트</p>
        </BasicBoxHeadLeft>
        <BasicBoxHeadRight>
          <CarThumb src="/images/_dummy/car-thumb.png" />
        </BasicBoxHeadRight>
      </BasicBoxHead>

      <KeyValue margin="regular">
        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>신청금액</KeyValueTitle>
          <KeyValueText>3,000,000 원</KeyValueText>
        </KeyValueItem>
        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>대출기간</KeyValueTitle>
          <KeyValueText>36개월</KeyValueText>
        </KeyValueItem>
        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>진행상태</KeyValueTitle>
          <KeyValueText>상담중</KeyValueText>
        </KeyValueItem>
      </KeyValue>
    </BasicBox>

    <template v-slot:foot>
      <BottomSticky>
        <div class="bottom-wrap">
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton :line="true" theme="quaternary"
                >상담변경</BasicButton
              >
            </ButtonListItem>

            <ButtonListItem>
              <BasicButton>확인</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>
