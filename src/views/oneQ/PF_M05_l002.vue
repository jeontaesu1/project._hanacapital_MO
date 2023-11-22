<script>
// 1Q_PF_M05_l002
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
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
    UiTab,
    StickyBar,
    NavTab,
    NavTabButton,
    UiTabPanel,
    BasicBox,
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
          <PopupTitle>우수고객추가대출</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          하나캐피탈 우수고객 전용<br />
          추가(신용)대출 금융서비스 입니다
        </PageMainText>
      </PageTextGroup>

      <UiTab>
        <StickyBar>
          <NavTab :useUiTab="true">
            <NavTabButton link="PF_M05_l002Tab001">상품안내</NavTabButton>
            <NavTabButton link="PF_M05_l002Tab002">유의사항</NavTabButton>
          </NavTab>
        </StickyBar>

        <UiTabPanel name="PF_M05_l002Tab001">
          <BasicBox theme="tertiary">
            <KeyValue align="left" margin="regular">
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>대상</KeyValueTitle>
                <KeyValueText>
                  하나캐피탈 우수거래고객 및<br />
                  하나캐피탈 멤버십 가입회원
                </KeyValueText>
              </KeyValueItem>

              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>한도</KeyValueTitle>
                <KeyValueText>최대 5천만원(최저 300만원)</KeyValueText>
              </KeyValueItem>

              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>금리</KeyValueTitle>
                <KeyValueText>연 5.9% ~ 16.9%</KeyValueText>
              </KeyValueItem>

              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>기간</KeyValueTitle>
                <KeyValueText> 12개월 ~ 84개월</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>

          <KeyValue
            direction="vertical"
            :classNames="{
              wrap: 'row-margin-contents',
            }"
          >
            <KeyValueItem>
              <KeyValueTitle>상환방법</KeyValueTitle>
              <KeyValueText>원리금균등분할상환</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>중도상환수수료</KeyValueTitle>
              <KeyValueText>없음</KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>연체이자율</KeyValueTitle>
              <KeyValueText>
                약정이율 + 3%
                <div :class="$style['sub']">(법정최고금리 연 20% 이내)</div>
              </KeyValueText>
            </KeyValueItem>

            <KeyValueItem>
              <KeyValueTitle>이자부과시기</KeyValueTitle>
              <KeyValueText>매월 후취</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </UiTabPanel>
        <UiTabPanel name="PF_M05_l002Tab002">
          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular'],
              $style['basic-list--regular-margin'],
            ]"
          >
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-3',
                'color-black',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                계약을 체결하기 전에 상품 설명서와 약관을 확인하시기 바랍니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-3',
                'color-black',
                'font-weight-medium',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                상환능력에 비해 대출금이 과도할 경우 귀하의 신용등급 또는
                개인신용평점이 하락할 수 있습니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-3',
                'color-black',
                'font-weight-medium',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                개인신용평점 하락 시 금융거래와 관련된 불이익이 발생할 수
                있습니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-3',
                'color-black',
                'font-weight-medium',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                일정기간 원리금을 연체할 경우, 모든 원리금을 변제할 의무가
                발생할 수 있습니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-3',
                'color-black',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                대출취급이 부적정한 경우(연체금 보유, 개인신용평점 낮음) 대출이
                제한될 수 있습니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-3',
                'color-black',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                금융소비자의 개인신용평점에 따라 대출한도 및 금리가 차등
                적용됩니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-3',
                'color-black',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                금융소비자는 해당상품에 대하여 설명을 받을 권리가 있으며, 그
                설명을 듣고 내용을 충분히 이해한 후 거래하시기 바랍니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-3',
                'color-black',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                금리인하요구권 및 대출계약 철회권에 대한 자세한 사항은 당사
                홈페이지에서 확인하시기 바랍니다.
              </div>
            </li>
          </ul>
        </UiTabPanel>
      </UiTab>

      <ul :class="[$style['basic-list'], 'row-margin-contents']">
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            준법심의필 23-377<br />
            (2023.10.16 ~ 2024.10.15)
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            여신금융협회 심의필 제2023-L1h-12201호<br />
            (2023.10.17 ~ 2024.10.15)
          </div>
        </li>
      </ul>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton @click="layerSlotProps.close()">확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/oneQ/PF_M05_l002.scss';
</style>
