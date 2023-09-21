<script>
// MI_M01_l014
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicBanner from '@/components/ui/banner/BasicBanner.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    PageTextGroup,
    PageMainText,
    PageSubText,
    IllustObject,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BasicBanner,
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
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          <strong>
            축하드려요!<br />
            하나머니 회원가입이 완료되었습니다
          </strong>
        </PageMainText>
        <PageSubText>
          현금처럼 사용하고, 친구와 나눠쓰고,<br />
          다른 포인트로 바꿔쓰고, 바코드 결제도 되는<br />
          대한민국 최초의 금융 멤버십 서비스를<br />
          이용해 보세요.
        </PageSubText>
      </PageTextGroup>

      <IllustObject type="complete" />

      <!-- DD : 하드코딩 배너 -->
      <BasicBanner thumb="/images/banner/banner-money-up.png" @click="() => {}">
        <p class="text-body-4 color-gray row-margin-mini nowrap">
          더 많은 혜택을 누려보세요!
        </p>
        <h3 class="text-body-1 font-weight-medium nowrap">
          하나머니 앱 설치하기
        </h3>
      </BasicBanner>
      <!-- // DD : 하드코딩 배너 -->

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
