<script>
// BF_M05_l020
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
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
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

import IconLogoMain from '@/assets/images/icon/logo_main.svg?component';
import IconMedical from '@/assets/images/icon/medical.svg?component';

export default {
  components: {
    UiLayer,
    PopupTitle,
    FullPopup,
    FullPopupHead,
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
    ButtonListItem,
    ButtonList,
    BasicButton,
    IconLogoMain,
    IconMedical,
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
          <PopupTitle>일반리스 견적서</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <div class="row-margin-item-group">
        <IconLogoMain class="display-block" />
      </div>

      <PageTextGroup>
        <PageMainText>김하나 고객님 귀중</PageMainText>
        <PageSubText>고객상담센터 1800-1110</PageSubText>
      </PageTextGroup>

      <BasicBox>
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <div class="flex-box">
              <div class="flex-box__cell">
                <IconMedical class="display-block" />
              </div>
              <div class="flex-box__cell flex-1">
                <h4 class="font-weight-medium text-body-1">의료기할부</h4>
              </div>
            </div>
          </BasicBoxHeadLeft>
        </BasicBoxHead>

        <KeyValue margin="regular">
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>견적번호</KeyValueTitle>
            <KeyValueText>A12306199852000</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>견적일자</KeyValueTitle>
            <KeyValueText>2023.06.22</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>전화번호</KeyValueTitle>
            <KeyValueText>1800-1110</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <section class="row-margin-contents-group">
        <h3 class="text-body-2 row-margin-item-medium">견적내용</h3>

        <div :class="[$style['basic-table'], 'row-margin-item-group']">
          <table>
            <colgroup>
              <col style="width: 120px" />
              <col />
            </colgroup>
            <tbody>
              <tr>
                <th>리스물건</th>
                <td>기타의료기기</td>
              </tr>
              <tr>
                <th>이용금액</th>
                <td>99,999,000 원</td>
              </tr>
              <tr>
                <th>이용기간</th>
                <td>24개월</td>
              </tr>
              <tr>
                <th>상환금리</th>
                <td>(최저) 00.0% ~ (최대) 00.0%</td>
              </tr>
              <tr>
                <th>보증금</th>
                <td>20%(2,000,000 원)</td>
              </tr>
              <tr>
                <th>잔존가치</th>
                <td>0%(0 원)</td>
              </tr>
              <tr>
                <th>유예원금</th>
                <td>20%(2,000,000 원)</td>
              </tr>
              <tr>
                <th>보증금처리</th>
                <td>
                  리스만기시 보증금 환불<br />
                  리스만기시 보증금 상계
                </td>
              </tr>
              <tr>
                <th class="color-red">매회리스료</th>
                <td class="color-red">100,000,000 원</td>
              </tr>
              <tr>
                <th>총납입액</th>
                <td>100,000,000 원</td>
              </tr>
              <tr>
                <th>납입주기</th>
                <td>1개월 후불</td>
              </tr>
              <tr>
                <th>종료후처리</th>
                <td>구매</td>
              </tr>
            </tbody>
          </table>

          <section :class="[$style['notice-section'], 'row-margin-contents']">
            <h3 :class="$style['notice-section__title']">유의사항</h3>

            <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
              <li :class="$style['basic-list__item']">
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  본 견적은 고객님의 신용도 또는 금융환경에 따라 변경될 수
                  있으며, 리스(상담)신청 시 정확한 견적 확인이 가능합니다.
                </div>
              </li>
              <li :class="$style['basic-list__item']">
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  견적은 최초 산출일로부터 2주간 유효하며, 이후 견적 재산출하여
                  진행 하셔야 합니다.
                </div>
              </li>
            </ul>
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
            <BasicButton>저장</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/business/BF_M05_l020.scss';
</style>
