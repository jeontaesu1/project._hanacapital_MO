<script>
// AF_M98_l013
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
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
    PageSubText,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
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
          <PopupTitle>위임장</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          <strong>재고금융 건별 대출 관련 위임장</strong>
        </PageMainText>
        <PageSubText>
          상호(이하 “위임인”이라 한다)는(은) 귀사에서 제공하는 중고차 구입 자금
          대출을(이하 『중고차재고금융』이라고 함) 이용하기 위하여 2023년 05월
          08일 재고금융 한도거래 약정을 체결하였습니다. 위임인은 위 한도거래
          약정에 기하여 신청하는 건별 재고금융계약과 관련하여 아래 행위와 관련된
          일체의 권한을 수임인에게 위임합니다.
        </PageSubText>
      </PageTextGroup>

      <section>
        <h3 class="text-body-2 row-margin-item-medium">-아래-</h3>

        <div :class="$style['contents-list']">
          <ol
            :class="[
              $style['contents-list__list'],
              $style['contents-list__list--quinary'],
            ]"
          >
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">1</div>
                <div :class="$style['contents-list__title']">
                  건별 재고금융대출계약의 신청
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">2</div>
                <div :class="$style['contents-list__title']">
                  건별 재고금융대출계약의 조건결정
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">3</div>
                <div :class="$style['contents-list__title']">
                  건별 재고금융대출계약의 체결
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">4</div>
                <div :class="$style['contents-list__title']">
                  해피콜을 통하여 이루어지는 제1항 내지 제4항의 행위
                </div>
              </div>
            </li>
          </ol>
        </div>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-contents">수임인 및 위임인</h3>

        <div>
          <section class="row-margin-item-group">
            <BasicBox>
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <h4 class="text-body-1 font-weight-medium">위임인</h4>
                </BasicBoxHeadLeft>
              </BasicBoxHead>
              <KeyValue margin="regular">
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>상호</KeyValueTitle>
                  <KeyValueText>안심카(김하나)(인)</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>대표자</KeyValueTitle>
                  <KeyValueText>김하나(인)</KeyValueText>
                </KeyValueItem>

                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>주소</KeyValueTitle>
                  <KeyValueText>
                    대구 동구 반야월로 393<br />
                    701호(신서동, 신서오토월드)
                  </KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </BasicBox>
          </section>

          <section class="row-margin-item-group">
            <BasicBox>
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <h4 class="text-body-1 font-weight-medium">수임인</h4>
                </BasicBoxHeadLeft>
              </BasicBoxHead>
              <KeyValue margin="regular">
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>성명</KeyValueTitle>
                  <KeyValueText>이하나(인)</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </BasicBox>
          </section>
        </div>
      </section>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>확인했습니다</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/inventoryFinance/LayerInventoryFinanceURLProcuratory.scss';
</style>
