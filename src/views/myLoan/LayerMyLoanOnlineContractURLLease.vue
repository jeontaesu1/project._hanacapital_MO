<script>
// BF_M05_l010
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    FullPopup,
    FullPopupHead,
    ButtonList,
    ButtonListItem,
    BasicButton,
    PageTextGroup,
    PageMainText,
    PageSubText,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
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
          <PopupTitle>리스계약확인서</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>하나캐피탈(주) 귀중</PageMainText>
        <PageSubText>
          리스 신청인 본인은 하나캐피탈 주식회사에 리스를 신청함에 있어 다음의
          사항을 확인합니다.
        </PageSubText>
      </PageTextGroup>

      <BasicBox>
        <KeyValue margin="regular">
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>리스물건</KeyValueTitle>
            <KeyValueText>의료기기(미라젯)</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>취득원가</KeyValueTitle>
            <KeyValueText>100,000,00 원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>계약일자</KeyValueTitle>
            <KeyValueText>2023.01.01</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>리스기간</KeyValueTitle>
            <KeyValueText>실행 후 12개월</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>리스보증금</KeyValueTitle>
            <KeyValueText>
              000,000,000 원<br />
              (취득원가의 N%)
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>금리</KeyValueTitle>
            <KeyValueText>8.3500%</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>유예원금</KeyValueTitle>
            <KeyValueText>0 원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>매회리스료 방식</KeyValueTitle>
            <KeyValueText>매회 1개월 후불</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>매회리스료 상환</KeyValueTitle>
            <KeyValueText>
              (1회~N회)<br />
              000,000,000 원
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>납부일자</KeyValueTitle>
            <KeyValueText>
              매월 15일자<br />
              (1회차 납부일자: 2023.01.01)
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>중도해지수수료</KeyValueTitle>
            <KeyValueText>잔여원금의 2%</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>종료후처리</KeyValueTitle>
            <KeyValueText>무상양도</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>연체이자율</KeyValueTitle>
            <KeyValueText>
              연 00%<br />
              (상환금리 N% + 3%)
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <BasicBox
        theme="tertiary"
        className="row-margin-contents-group row-margin-bottom-none"
      >
        <p class="text-body-4 font-weight-medium color-gray-secondary">
          본인은 리스 계약서 상의 중요한 내용에 대하여 충분한 설명을 듣고
          이해하였음을 확인합니다.<br />
          본인은 리스 계약서의 모든 내용(서명 또는 날인 포함)을 사실에 입각하여
          자필로 기재하였음을 확인합니다.
        </p>
      </BasicBox>

      <p
        class="text-body-3 font-weight-light color-gray row-margin-item-group align-right"
      >
        2000.01.01
      </p>

      <p class="text-body-4 font-weight-regular align-right">
        리스 신청인(이름) 김하나 (인)
      </p>

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
