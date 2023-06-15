<script>
// My_M01_l020
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import IconTell from '@/assets/images/icon/tell.svg?component';
import IconArrow from '@/assets/images/icon/dropdown.svg?component';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PopupButton,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    RoundStatus,
    BasicButton,
    TextButton,
    IconTell,
    IconArrow,
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
          <PopupTitle>종료된 계약</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <ul class="reset-list">
        <li v-for="i in 3" :key="i" class="row-margin-item-group">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-body-1 font-weight-medium">
                  대출(계약) 타이틀
                </h3>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus :classNames="{ wrap: 'display-block' }">
                  종료
                </RoundStatus>
              </BasicBoxHeadRight>
            </BasicBoxHead>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>대출기간</KeyValueTitle>
                <KeyValueText>2021.01.02 ~ 2021.01.02</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>대출원금</KeyValueTitle>
                <KeyValueText>999,999,999 원</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </li>
        <li class="row-margin-item-group">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-body-1 font-weight-medium">야나두</h3>
                <p class="text-body-4 color-gray row-margin-small">
                  품목명 1줄로 여기까지 여기까지 씁니다.<br />
                  길 경우 이렇게 2줄까지 됩니다.
                </p>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus :classNames="{ wrap: 'display-block' }">
                  종료
                </RoundStatus>
              </BasicBoxHeadRight>
            </BasicBoxHead>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>할부기간</KeyValueTitle>
                <KeyValueText>2021.05.24 ~ 2022.05.24</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>대출원금</KeyValueTitle>
                <KeyValueText>999,999,999 원</KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <BasicButton
              tagName="a"
              size="small"
              :classNames="{ wrap: 'row-margin-contents-small' }"
            >
              <template v-slot:leftIcon>
                <IconTell />
              </template>
              야나두 전화연결
            </BasicButton>
          </BasicBox>
        </li>
        <li class="row-margin-item-group">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-body-1 font-weight-medium">현대렌탈</h3>
                <p class="text-body-4 color-gray row-margin-small">
                  품목명 1줄로 여기까지 여기까지 씁니다.<br />
                  길 경우 이렇게 2줄까지 됩니다.
                </p>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus :classNames="{ wrap: 'display-block' }">
                  종료
                </RoundStatus>
              </BasicBoxHeadRight>
            </BasicBoxHead>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>할부기간</KeyValueTitle>
                <KeyValueText>2021.05.24 ~ 2022.05.24</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>대출원금</KeyValueTitle>
                <KeyValueText>999,999,999 원</KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <BasicButton
              tagName="a"
              size="small"
              :classNames="{ wrap: 'row-margin-contents-small' }"
            >
              <template v-slot:leftIcon>
                <IconTell />
              </template>
              현대렌탈 전화연결
            </BasicButton>
          </BasicBox>
        </li>
      </ul>

      <div class="inline-wrap align-center row-margin-item-group">
        <TextButton :classNames="{ wrap: 'text-body-4 color-gray' }">
          더보기
          <template v-slot:rightIcon>
            <IconArrow />
          </template>
        </TextButton>
      </div>
    </FullPopup>
  </UiLayer>
</template>
