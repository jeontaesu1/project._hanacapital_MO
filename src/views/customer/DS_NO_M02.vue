<script>
// DS_NO_M02
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
// import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
// import PageMainText from '@/components/ui/text/PageMainText.vue';
// import PageSubText from '@/components/ui/text/PageSubText.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';

export default {
  components: {
    PageContents,
    // PageTextGroup,
    // PageMainText,
    // PageSubText,
    NoticeText,
    BasicBox,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '채권추심업무 처리절차 안내문');
      store.ui.header.setLeftButtons(() => []);
      store.ui.header.setRightButtons(() => ['close']);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });
  },
};
</script>

<template>
  <PageContents>
    <section>
      <section class="row-margin-contents">
        <BasicBox theme="undenary">
          <NoticeText class="text-body-4">
            추심착수 예정통지 이후 다음과 같은 채권추심 행위가 이루어질 수
            있음을 알려드리며, 당사의 채권추심 업무진행과 관련하여 문의사항이
            있는 경우 언제든지 당사 담당부서<b>(전화번호 : 02-0000-0000)</b> 및
            담당자에게 연락주시기 바랍니다.
          </NoticeText>
        </BasicBox>
      </section>

      <section class="row-margin-contents-group">
        <div :class="$style['contents-list']">
          <ol
            :class="[
              $style['contents-list__list'],
              $style['contents-list__list--senary'],
            ]"
          >
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">1</div>
                <div
                  :class="
                    ($style['contents-list__title'],
                    'font-weight-light text-body-3')
                  "
                >
                  변제독촉장, 변제최고장, 채무정리 최종촉구 통고서 등의 우편물을
                  발송하여 채무상환을 요구하고, 채무불이행 시 불이익(연체정보
                  등록에 따른 금융거래 제한 등)에 대해 안내할 수 있습니다.
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">2</div>
                <div
                  :class="
                    ($style['contents-list__title'],
                    'font-weight-light text-body-3')
                  "
                >
                  우편물과 별도로 전화나 문자메시지를 통하여 채무상환을
                  요구하고, 채무불이행 시 불이익에 대해 안내할 수 있습니다.
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">3</div>
                <div
                  :class="
                    ($style['contents-list__title'],
                    'font-weight-light text-body-3')
                  "
                >
                  우편물, 전화 또는 문자메시지 등을 통한 채무상환 요구에도
                  불구하고 변제가 이루어지지 아니하거나 귀하와 연락이 닿지
                  아니하는 경우에는 우편물, 전화 또는 문자메시지 등을 통하여
                  방문추심에 대해 사전에 협의한 후 채무상환 요구, 소재파악 또는
                  재산조사를 위하여 자택, 근무지 또는 기타 소재지를 방문할 수
                  있습니다.
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">4</div>
                <div
                  :class="
                    ($style['contents-list__title'],
                    'font-weight-light text-body-3')
                  "
                >
                  상당기간 채무변제가 이루어지지 아니하는 경우 우편물, 전화 또는
                  문자메시지 등을 통하여 채권자 또는 채권자협의회에 의한
                  채무금액 강제회수에 대한 법적조치(가압류신청, 지급명령신청,
                  강제경매신청 등) 예고통보를 할 수 있으며, 그럼에도 불구하고
                  변제가 이루어지지 아니하는 경우에는 법원으로부터 집행권원을
                  부여받아 강제집행을 통해 채권을 회수할 수 있습니다. 그 밖에도
                  채권자 또는 채권자협의회에 의하여 법원에 재산명시 또는
                  채무불이행명부 등재를 신청할 수 있습니다.
                </div>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </section>
  </PageContents>
</template>

<style lang="scss">
@import '@/assets/scss/views/uiGuide/GuideComponent.scss';
</style>

<style lang="scss" module>
@import '@/assets/scss/views/customer/CustomerFinancialConsumerProtectionInterestRateCutRequestInfo.scss';
@import '@/assets/scss/views/uiGuide/GuideComponentModule.scss';
</style>
