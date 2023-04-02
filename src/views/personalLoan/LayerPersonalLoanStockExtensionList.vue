<script>
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import KeyValueList from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

const dummyData = () => [
  {
    name: 'NH투자증권(유캔그린)',
    startDate: '2023.01.04',
    endDate: '2025.01.04',
    balance: '14,000,000 원',
    interestRate: '3.1%',
    term: '6개월',
    status: 'none',
  },
  {
    name: '키움증권(이머니)',
    startDate: '2023.01.04',
    endDate: '2025.01.04',
    balance: '14,000,000 원',
    interestRate: '3.1%',
    term: '6개월',
    status: 'complete',
  },
];

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    RoundStatus,
    KeyValueList,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    ButtonList,
    ButtonListItem,
    BasicButton,
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
          연장할 계약을<br />
          <strong>선택해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <ul class="basic-list">
        <li
          v-for="(item, i) in state.data"
          :key="i"
          class="row-margin-item-group"
        >
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-body-1 font-weight-medium">
                  {{ item.name }}
                </h3>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus
                  v-if="item.status === 'complete'"
                  theme="secondary"
                  :classNames="{ wrap: 'display-block' }"
                  >신청완료</RoundStatus
                >
                <RoundStatus v-else :classNames="{ wrap: 'display-block' }"
                  >미신청</RoundStatus
                >
              </BasicBoxHeadRight>
            </BasicBoxHead>

            <KeyValueList margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>대출일</KeyValueTitle>
                <KeyValueText>{{ item.startDate }}</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>만기일</KeyValueTitle>
                <KeyValueText>{{ item.endDate }}</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>대출잔액</KeyValueTitle>
                <KeyValueText>{{ item.balance }}</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>현재금리</KeyValueTitle>
                <KeyValueText>{{ item.interestRate }}</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>대출기간</KeyValueTitle>
                <KeyValueText>{{ item.term }}</KeyValueText>
              </KeyValueItem>
            </KeyValueList>

            <ButtonList
              :classNames="{
                wrap: 'row-margin-contents-small',
              }"
            >
              <ButtonListItem>
                <BasicButton
                  v-if="item.status === 'complete'"
                  size="small"
                  theme="quaternary"
                  >연장결과 상세보기</BasicButton
                >
                <BasicButton v-else size="small">신청하기</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </BasicBox>
        </li>
      </ul>
    </FullPopup>
  </UiLayer>
</template>
