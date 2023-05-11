<script>
// Customer_M09_p002
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import IconLogoMain from '@/assets/images/icon/logo_main.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    PageSubText,
    IconLogoMain,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '금융소비자보호헌장');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
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
      <PageMainText>금융소비자보호헌장</PageMainText>
      <PageSubText>
        하나캐피탈 모든 임직원은 금융소비자의 권익 보호가 지속성장의 초석임을
        인식하고, 최상의 상품과 서비스로, 고객만족을 추구하여 금융소비자로부터
        신뢰받는 금융인이 되고자 다음 사항을 적극 실천할 것을 다짐합니다.
      </PageSubText>
    </PageTextGroup>

    <div>
      <ul class="reset-list">
        <li class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">하나,</h3>
          <p class="text-body-4 font-weight-light">
            금융소비자와 직원간 인격 및 의견 존중을 기반으로, 금융소비자가
            적합한 상품이나 서비스를 선택할 수 있도록, 정확하고 진실된 정보를
            제공하겠습니다.
          </p>
        </li>

        <li class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">하나,</h3>
          <p class="text-body-4 font-weight-light">
            금융소비자에게 진정 도움이 되는 상품과 서비스를 제공함으로써, 고객의
            성공과 건강한 금융문화정착에 이바지하겠습니다.
          </p>
        </li>

        <li class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">하나,</h3>
          <p class="text-body-4 font-weight-light">
            금융소비자가 믿고 의지할 수 있는 금융파트너로서, 금융소비자의 권익을
            침해하는 불합리한 금융 관행 개선에 최선을 다하겠습니다.
          </p>
        </li>

        <li class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">하나,</h3>
          <p class="text-body-4 font-weight-light">
            금융소비자의 피해와 불만에 적극적으로 개선하는 최고의 금융파트너가
            되도록 하겠습니다.
          </p>
        </li>

        <li>
          <h3 class="text-body-2 row-margin-item-medium">하나,</h3>
          <p class="text-body-4 font-weight-light">
            금융소비자가 원하는 다양한 라이프스타일의 실현을 지원하는
            생활금융파트너로서, 금융소외계층에게도 금융기회를 제공하도록 항상
            노력하겠습니다.
          </p>
        </li>
      </ul>

      <div class="flex-box row-margin-contents-group align-right">
        <div class="flex-box__cell flex-1">
          <div class="text-body-3 color-gray font-weight-light row-margin-item">
            2013. 06. 01 제정
          </div>
          <div class="flex-box__cell">
            <IconLogoMain />
          </div>
        </div>
      </div>
    </div>
  </PageContents>
</template>
