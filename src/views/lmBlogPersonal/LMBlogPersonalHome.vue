<script>
// LM_M06_p001
import { onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IconCustomer from '@/assets/images/icon/customer-center.svg?component';
import IconTell from '@/assets/images/icon/tell.svg?component';
import IconSms from '@/assets/images/icon/sms.svg?component';
import IconConsultation from '@/assets/images/icon/consultation.svg?component';

export default {
  components: {
    PageContents,
    TextButton,
    IconCustomer,
    IconTell,
    IconSms,
    IconConsultation,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const router = useRouter();

    onMounted(() => {
      store.ui.header.setLeftButtons(() => []);
      store.ui.header.setRightButtons(() => [
        {
          name: 'menuButton',
          onClick: () => router.push('/lm-blog-personal/menu'),
        },
      ]);
    });

    onUnmounted(() => {
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });
  },
};
</script>

<template>
  <PageContents>
    <div :class="$style['grid']">
      <div :class="$style['consulting']">
        <div :class="$style['consulting__inner']">
          <div :class="$style['consulting__text']">
            <div class="text-body-5 font-weight-light">
              하나캐피탈 대출상담사
            </div>
            <div :class="$style['consulting__info']">
              <div :class="$style['consulting__info-name']">김하나</div>
              <div :class="$style['consulting__info-email']">
                hanakim@capital
              </div>
            </div>
            <TextButton
              tagName="a"
              href="tel:010-1234-5678"
              theme="secondary"
              :classNames="{ wrap: $style['consulting__tell'] }"
            >
              <template v-slot:leftIcon>
                <IconTell />
              </template>
              010-1234-5678
            </TextButton>
            <div :class="$style['consulting__sub']">
              <div :class="$style['consulting__sub-title']">
                여신금융협회 등록번호
              </div>
              <div :class="$style['consulting__sub-text']">1000024254</div>
            </div>
          </div>
          <div :class="$style['consulting__icon']">
            <IconCustomer />
          </div>
        </div>
      </div>

      <div :class="$style['menu']">
        <RouterLink
          to="/lm-blog-personal/quick-counseling"
          :class="$style['menu__link']"
        >
          <div div :class="$style['menu__icon']">
            <IconConsultation />
          </div>
          <div div :class="$style['menu__title']">빠른 대출 상담</div>
        </RouterLink>
      </div>

      <div :class="$style['menu']">
        <RouterLink
          to="/lm-blog-personal/sms-counseling"
          :class="$style['menu__link']"
        >
          <div div :class="$style['menu__icon']">
            <IconSms />
          </div>
          <div div :class="$style['menu__title']">SMS 상담</div>
        </RouterLink>
      </div>
    </div>

    <div class="row-margin-item-medium">
      // 배너 영역 (내용 확인 후 진행 예정)
    </div>

    <ul :class="[$style['basic-list'], $style['basic-list--small-margin']]">
      <li :class="$style['basic-list__item']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          김하나은(는) 하나캐피탈의 대출모집 업무(금융상품 판매업무)를
          대리하거나 중개합니다.(등록번호 1000024254)
        </div>
      </li>
      <li :class="$style['basic-list__item']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          위 사람은 금융 관계법률에 따라 하나캐피탈㈜와 위탁계약을 체결하고
          여신금융협회에 정식 등록된 대출상담사 입니다.
        </div>
      </li>
      <li :class="$style['basic-list__item']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          (대출성 금융상품 판매대리 중개업체 통합조회(www.loanconsultantor.kr))
        </div>
      </li>
      <li :class="$style['basic-list__item']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          위 사람은 하나캐피탈㈜만을 대리하거나 중개합니다.
        </div>
      </li>
      <li :class="$style['basic-list__item']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          위 사람은 하나캐피탈㈜의 금융상품에 대한 계약체결 권한이 없습니다.
        </div>
      </li>
      <li :class="$style['basic-list__item']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          민원창구 연락처 1800-1110
        </div>
      </li>
    </ul>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/lm-blog-personal/LMBlogPersonalHome.scss';
</style>
