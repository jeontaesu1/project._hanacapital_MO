<script>
// Common_M00_l054
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
    PageTextGroup,
    PageMainText,
    PageSubText,
    BasicBox,
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
          <PopupTitle>개인정보 취급 위탁 동의</PopupTitle>
        </ToastPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>"비바리퍼블리카" 귀중</PageMainText>
        <PageSubText>
          본인은 “비바리퍼블리카”(이하 “위탁자”라 합니다.)가 위탁한
          "드림시큐리티"(이하 “수탁자”라 합니다)이 제공하는 간편인증
          통합중계서비스(이하 “서비스”라 합니다)를 이용하기 위해, 다음과 같이
          “위탁자”가 본인의 개인정보 취급을 위탁하는 것에 동의합니다.
        </PageSubText>
      </PageTextGroup>

      <div>
        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">
            (1) 취급위탁 업무의 목적
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
                토스인증 간편인증서비스의 중계 운영 및 제공 대행
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">
            (2) 취급위탁 업무의 범위
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
                토스인증 간편인증서비스의 중계 운영, 제공 대행을 위한 조회·이용,
                민원·분쟁 처리
              </div>
            </li>
            <li
              :class="[$style['basic-list__item'], 'text-body-4 color-black']"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                부정 이용 방지, 서비스 개선 및 통계, 수수료 정산
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">
            (3) 위탁하는 개인정보 항목
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
                성명, 생년월일, 휴대전화번호, “식별ID”, “식별값”, 연계정보(CI)
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">
            (4) 개인정보의 보유기간 및 이용기간
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
              <div :class="$style['basic-list__content']">5년</div>
            </li>
          </ul>
        </section>

        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">
            (5) 동의거부권리 및 거부에 따른 불이익 내용
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
                “수탁자”가 제공하는 “서비스”와 관련된 개인정보의 취급과 관련된
                사항은, “수탁자”의 개인정보처리방침(“수탁자” 홈페이지
                www.ez-iok.com)에 따릅니다.
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">
            (6) 상기 개인정보 수집 및 이용과 취급위탁에 동의하지 않으실 경우,
            서비스를 이용하실 수 없습니다.
          </h3>
          <ul
            :class="[$style['basic-list'], $style['basic-list--small-margin']]"
          >
            <li
              :class="[
                $style['basic-list__item'],
                'font-weight-regular color-gray-tertiary',
              ]"
            >
              <div :class="$style['basic-list__symbol']">※</div>
              <div :class="$style['basic-list__content']">
                기관/기업이 제공하는 서비스와 관련된 개인정보의 취급과 관련된
                사항은, 기관의 개인정보취급방침에 따릅니다.
              </div>
            </li>
          </ul>
        </section>
      </div>

      <BasicBox theme="senary" className="row-margin-contents-group">
        <p class="text-body-4 font-weight-medium color-gray-secondary">
          본인은 위 내용을 숙지하였으며 이에 동의합니다.
        </p>
      </BasicBox>

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
@import '@/assets/scss/views/identification/Common_M00_l054.scss';
</style>
