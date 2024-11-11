<script>
// Customer_M11_p003
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageSubText,
    TextButton,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '소비자권익보호 유익한 정보');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => ['menu']);
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
    <PageTextGroup>
      <PageSubText
        >소비자권익보호를 위해 추가로 유익한 정보를<br />
        얻으시려면 아래 사이트에서 확인해 보시면 됩니다</PageSubText
      >
    </PageTextGroup>

    <section>
      <section class="row-margin-contents-group row-margin-bottom-none">
        <ul
          :class="[
            $style['basic-list'],
            $style['basic-list--regular'],
            'paddings',
          ]"
        >
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-2']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              금융감독원<br />
              <TextButton
                class="text-body-4"
                tagName="a"
                href=""
                theme="secondary"
                :underline="true"
              >
                www.fss.or.kr/fss
              </TextButton>
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-2']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              여신금융협회 소비자지원센터<br />
              <TextButton
                class="text-body-4"
                tagName="a"
                href=""
                theme="secondary"
                :underline="true"
              >
                customer.crefia.or.kr
              </TextButton>
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-2']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              공정거래위원회 소비자정책<br />
              <TextButton
                class="text-body-4"
                tagName="a"
                href=""
                theme="secondary"
                :underline="true"
              >
                ftc.go.kr/www/contents.do?key=115
              </TextButton>
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-2']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              은행연합회 연락중지청구시스템(두낫콜)<br />
              <TextButton
                class="text-body-4"
                tagName="a"
                href=""
                theme="secondary"
                :underline="true"
              >
                portal.kfb.or.kr/consumer/donotcall.php
              </TextButton>
            </div>
          </li>
        </ul>
      </section>
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/CustomerFinancialConsumerProtectionInterestRateCutRequestInfo.scss';
@import '@/assets/scss/views/uiGuide/GuideComponentModule.scss';
</style>

<style lang="scss" scoped>
.paddings {
  li {
    padding: 16px 0;
    font-weight: 400;
  }
}
</style>
