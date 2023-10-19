<script>
// Common_M00_l051
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    BasicButton,
    ButtonList,
    ButtonListItem,
    PageTextGroup,
    PageMainText,
    PageSubText,
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
    <FullPopup v-if="layerSlotProps.display !== 'none'">
      <template v-slot:head>
        <FullPopupHead
          :classNames="{
            left: $style['header-left'],
            center: $style['header-center'],
            right: $style['header-right'],
          }"
        >
          <h2 class="text-body-1 font-weight-medium multi-ellipsis">
            개인정보 수집 및 이용·제공 동의
          </h2>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>"㈜드림시큐리티" 귀중</PageMainText>
        <PageSubText>
          본인은 "㈜드림시큐리티"(이하 “회사”라 합니다)이 제공하는 간편인증
          통합중계서비스(이하 “서비스”라 합니다)를 이용하기 위해, 다음과 같이
          “회사”가 본인의 개인정보를 수집 및 이용·제공하고, 개인정보의 취급을
          위탁하는 것에 동의합니다.
        </PageSubText>
      </PageTextGroup>

      <div>
        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">(1) 수집항목</h3>
          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular-margin'],
            ]"
          >
            <li
              :class="[$style['basic-list__item'], 'text-body-4 color-black']"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                이용자의 성명, 생년월일, 휴대전화번호, 간편인증사업자코드,
                통신사코드, 접속IP
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">(2) 이용목적</h3>
          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular-margin'],
            ]"
          >
            <li
              :class="[$style['basic-list__item'], 'text-body-4 color-black']"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                이용기관(하나캐피탈)과 간편인증서비스 사업자 간 간편인증서비스
                중계
              </div>
            </li>
            <li
              :class="[$style['basic-list__item'], 'text-body-4 color-black']"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                소비자의 불만 또는 분쟁 처리 등 민원사무 처리
              </div>
            </li>
            <li
              :class="[$style['basic-list__item'], 'text-body-4 color-black']"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                기타 “회사”가 “서비스” 개선을 목적으로 필요하다고 인정되는 항목
                (이용빈도 파악 및 서비스 이용에 대한 통계분석 등)
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">
            (3) 개인정보의 보유기간 및 이용기간
          </h3>
          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular-margin'],
            ]"
          >
            <li
              :class="[$style['basic-list__item'], 'text-body-4 color-black']"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                <div>처리목적 달성 후 즉시 파기</div>
                <ul
                  :class="[
                    $style['basic-list'],
                    $style['basic-list--small-margin'],
                    'row-margin-item',
                  ]"
                >
                  <li
                    :class="[
                      $style['basic-list__item'],
                      'font-weight-regular color-gray-tertiary',
                    ]"
                  >
                    <div :class="$style['basic-list__symbol']">※</div>
                    <div :class="$style['basic-list__content']">
                      관계 법령에 따라 파기하지 않고 보존하여야하는 경우에는
                      해당기간까지 보유
                    </div>
                  </li>
                  <li
                    :class="[
                      $style['basic-list__item'],
                      'font-weight-regular color-gray-tertiary',
                    ]"
                  >
                    <div :class="$style['basic-list__symbol']">※</div>
                    <div :class="$style['basic-list__content']">
                      관계 법령 위반에 따른 수사 또는 조사 등이 진행중인 경우
                      해당 수사 또는 조사 종료시 까지
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">
            (4) 동의거부권리 및 거부에 따른 불이익 내용
          </h3>
          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular-margin'],
            ]"
          >
            <li
              :class="[$style['basic-list__item'], 'text-body-4 color-black']"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                개인정보 수집·이용 및 제공에 따른 동의는 거부할 수 있으며, 동의
                후에도 언제든지 철회 가능합니다. 다만, 동의 거부 시에는 “서비스”
                이용이 제한될 수 있습니다.
              </div>
            </li>
            <li
              :class="[$style['basic-list__item'], 'text-body-4 color-black']"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                “회사”가 제공하는 “서비스”와 관련된 개인정보의 취급과 관련된
                사항은, “회사”의 개인정보처리방침(“회사” 홈페이지
                www.ez-iok.com)에 따릅니다.
              </div>
            </li>
          </ul>
        </section>
      </div>

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
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/identification/Common_M00_l051.scss';
</style>
