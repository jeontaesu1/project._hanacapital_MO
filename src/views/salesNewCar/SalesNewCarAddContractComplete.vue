<script>
// NC_M04_p003
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
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';

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
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    UnitText,
    IllustObject,
    CarEmblem,
    CarThumb,
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
      store.ui.header.setRightButtons(() => ['menu']);
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
        계약등록 요청이<br />
        <strong>완료되었습니다</strong>
      </PageMainText>
      <PageSubText>
        지점에서 계약확정 후 온라인약정 진행 가능합니다.<br />
        계약확정 이후 조건변경 불가합니다.<br />
        문의사항은 지점으로 연락하시기 바랍니다.
      </PageSubText>
    </PageTextGroup>

    <IllustObject type="complete" />

    <div>
      <BasicBox className="row-margin-item-group">
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <div class="flex-box row-margin-item">
              <div class="flex-box__cell flex-1">
                <CarEmblem code="1001" name="현대" />
                <h3 class="text-body-1 font-weight-medium">캐스퍼</h3>
                <p class="text-body-4 color-gray row-margin-small">스마트</p>
              </div>
              <div class="flex-box__cell">
                <CarThumb src="/images/_dummy/car-thumb.png" />
              </div>
            </div>
            <UnitText rightUnit="원"><strong>15,900,000</strong></UnitText>
          </BasicBoxHeadLeft>
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
            <KeyValueTitle>금리/설정율</KeyValueTitle>
            <KeyValueText>9.1% / 10%</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>상품구분</KeyValueTitle>
            <KeyValueText>오토론_정상오토론</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>매회납부금</KeyValueTitle>
            <KeyValueText>74,790 원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>중도상환 수수료</KeyValueTitle>
            <KeyValueText>2%</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>
    </div>

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
  </PageContents>
</template>
