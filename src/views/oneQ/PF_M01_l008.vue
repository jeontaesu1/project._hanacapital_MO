<script>
// Q_PF_M01_l008
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    PageTextGroup,
    PageMainText,
    ButtonList,
    ButtonListItem,
    BasicButton,
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
  <UiLayer ref="layer" type="toast" :backgroundClose="true">
    <ToastPopup>
      <template v-slot:head>
        <ToastPopupHead>
          <PopupTitle>e하나신용대출 (연계)</PopupTitle>
        </ToastPopupHead>
      </template>

      <PageTextGroup :class="$style['text_wrap']">
        <PageMainText>
          소득이 있다면<br />
          쉽고 빠른 신용대출
        </PageMainText>
      </PageTextGroup>

      <div>
        <div :class="$style['box_wrap']">
          <BasicBox theme="fifteenth">
            <KeyValue align="right" margin="regular">
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>대상</KeyValueTitle>
                <KeyValueText :classNames="{ text: 'font-weight-medium' }"
                  >재직기간 6개월 이상 직장인</KeyValueText
                >
              </KeyValueItem>

              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>한도</KeyValueTitle>
                <KeyValueText :classNames="{ text: 'font-weight-medium' }"
                  >최대 1억원 (최저 300만원)</KeyValueText
                >
              </KeyValueItem>

              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>금리</KeyValueTitle>
                <KeyValueText
                  :classNames="{ text: 'font-weight-medium underline' }"
                >
                  연 5.9% ~ 19.9%
                </KeyValueText>
              </KeyValueItem>

              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>기간</KeyValueTitle>
                <KeyValueText :classNames="{ text: 'font-weight-medium' }"
                  >12개월 ~ 84개월</KeyValueText
                >
              </KeyValueItem>

              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>상환방법</KeyValueTitle>
                <KeyValueText :classNames="{ text: 'font-weight-medium' }"
                  >원리금균등분할상환</KeyValueText
                >
              </KeyValueItem>

              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle
                  >중도상환<br />
                  수수료</KeyValueTitle
                >
                <KeyValueText :classNames="{ text: 'font-weight-medium' }"
                  >대출실행일 기준 경과기간에 따라<br />
                  차등 적용되며, 3년 경과시 면제<br /><br />
                  ※ 중도상환수수료율 : 2%</KeyValueText
                >
              </KeyValueItem>

              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle
                  >연체<br />
                  이자율</KeyValueTitle
                >
                <KeyValueText
                  :classNames="{ text: 'font-weight-medium underline' }"
                  >약정이율+3%<br />
                  (법정최고금리 연 20% 이내)</KeyValueText
                >
              </KeyValueItem>

              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle
                  >이자부과<br />
                  시기</KeyValueTitle
                >
                <KeyValueText :classNames="{ text: 'font-weight-medium' }"
                  >매월후취</KeyValueText
                >
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </div>

        <section class="row-margin-contents">
          <h3 class="text-body-2 font-weight-bold row-margin-item-regular">
            상품추가 안내
          </h3>

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
                'font-weight-regular',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                대출부대비용 : 5천만원 초과 실행 시 인지세 발생<br />
                (인지세는 하나캐피탈과 금융소비자가 50%씩 부담)<br />
                - 대출금액 5천만원 초과 1억원 이하 : 7만원
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-3',
                'color-black',
                'font-weight-regular',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                중도상환수수료 산식<br />
                - 만기1년이상 :
                중도상환원금x1%+중도상환원금x(중도상환수수료율–1%)x잔존기간/(대출기간-30일)<br />
                - 만기1년 미만 :
                중도상환원금x(중도상환수수료율)x잔존기간/(대출기간-30일)<br />
                ※ 잔존기간 : 30일 미만 상환시 ‘대출 사용기간’을 30일로 간주
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'text-body-3',
                'color-black',
                'font-weight-regular',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                필요서류 : 소득등 정보확인 온라인으로 진행하며, 온라인 확인 불가
                시 관련 서류 제출 필요
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-contents">
          <h3 class="text-body-2 font-weight-bold row-margin-item-regular">
            유의사항
          </h3>

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
                'color-black',
                'text-body-3',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                계약을 체결하기 전에 상품설명서와 약관을 확인하시기 바랍니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-3',
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
                'color-black',
                'text-body-3',
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
                'color-black',
                'text-body-3',
                'font-weight-medium',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                일정기간 원리금을 연체할 경우 모든 원리금을 변제할 의무가 발생할
                수 있습니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-3',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                대출취급이 부적정한 경우 (연체금 보유, 개인신용평점 낮음) 취급이
                제한될 수 있습니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-3',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                금융소비자는 해당 상품에 대하여 설명을 받을 권리가 있으며, 그
                설명을 듣고 내용을 충분히 이해한 후 거래하시기 바랍니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-3',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                금리인하요구권 및 대출계약 철회권에 대한 자세한 사항은 당사
                홈페이지에서 확인하시기 바랍니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-3',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                금융소비자의 신용등급 또는 개인신용평점에 따라 대출한도 및
                금리가 차등 적용됩니다.
              </div>
            </li>
          </ul>
        </section>
      </div>

      <ul :class="[$style['basic-list'], 'row-margin-contents']">
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            준법심의필 23-270(2023.08.07 ~ 2024.08.06)
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            여신금융협회심의필 제2023-L1h-09033호<br />
            (2023.08.07 ~ 2024.08.06)
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
            <BasicButton>확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ToastPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/oneQ/PF_M01_l008.scss';
</style>
