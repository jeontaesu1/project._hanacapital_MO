<script>
// PF_M07_l006
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
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';

import IconQuestion from '@/assets/images/icon/question.svg?component';

const dummyData = () => [
  {
    name: '스탁론 키움증권 (*****1234567)',
    term: '2023.01.04~2025.01.04',
    count: '1/12',
    amount: '5,000,000 원',
    balance: '5,000,000 원',
    payment: '5,000,000 원',
  },
  {
    name: '스탁론 키움증권 (*****1234567)',
    term: '2023.01.04~2025.01.04',
    count: '1/12',
    amount: '5,000,000 원',
    balance: '5,000,000 원',
    payment: '5,000,000 원',
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
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    TextButton,
    StepProgress,
    IconQuestion,
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
        <StepProgress :total="4" :current="1" />
      </template>

      <h2 class="text-body-5 color-navy font-weight-light row-margin-item">
        계약선택
      </h2>

      <PageTextGroup>
        <PageMainText>
          중도상환신청 계약을<br />
          <strong>선택해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <div class="inline-wrap align-right">
        <TextButton
          theme="quaternary"
          :classNames="{ wrap: 'font-weight-regular' }"
        >
          중도상환신청 안내 및 유의사항
          <template v-slot:rightIcon>
            <IconQuestion />
          </template>
        </TextButton>
      </div>

      <ul class="reset-list row-margin-item-group">
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
            </BasicBoxHead>

            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>대출기간</KeyValueTitle>
                <KeyValueText>{{ item.term }}</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>결제회차</KeyValueTitle>
                <KeyValueText>{{ item.count }}</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>대출금액</KeyValueTitle>
                <KeyValueText>{{ item.amount }}</KeyValueText>
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
                <KeyValueTitle>결제예정금액</KeyValueTitle>
                <KeyValueText>{{ item.payment }}</KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <ButtonList
              :classNames="{
                wrap: 'row-margin-contents-small',
              }"
            >
              <ButtonListItem>
                <BasicButton size="small">신청하기</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </BasicBox>
        </li>
      </ul>
    </FullPopup>
  </UiLayer>
</template>
