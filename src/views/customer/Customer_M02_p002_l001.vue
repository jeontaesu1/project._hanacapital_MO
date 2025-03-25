<script>
// Customer_M02_p002_l001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupText from '@/components/ui/layer/PopupText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import AlertPopup from '@/components/ui/layer/AlertPopup.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IconArrow from '@/assets/images/icon/link.svg?component';

export default {
  components: {
    UiLayer,
    ButtonList,
    ButtonListItem,
    BasicButton,
    AlertPopup,
    PopupText,
    PageTextGroup,
    PageMainText,
    PageSubText,
    IllustObject,
    TextButton,
    IconArrow,
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
  <UiLayer ref="layer" v-slot="layerSlotProps">
    <AlertPopup>
      <template v-slot:head>
        <IllustObject type="contract" style="padding-bottom: 0" />
        <!-- <PopupText :class="['alertText']"
          >하나캐피탈을 이용 중이신 차량의 차량번호를<br />
          입력해주세요.</PopupText
        > -->
      </template>

      <PageTextGroup class="row-margin-none">
        <PageMainText>
          <strong class="text-title-2"
            >홈페이지 또는 앱을 통해<br />
            증명서 발급이 가능합니다</strong
          >
        </PageMainText>
        <PageSubText class="row-margin-item-group">
          필요한 증명서를 직접 확인하고<br />
          이메일로 받아보세요
        </PageSubText>
      </PageTextGroup>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton @click="layerSlotProps.close()"
              >증명서 발급 바로가기</BasicButton
            >
          </ButtonListItem>
        </ButtonList>
        <div class="row-margin-item-group">
          <TextButton :classNames="{ wrap: 'text-body-4 color-gray' }">
            상담 신청 계속하기
            <template v-slot:rightIcon>
              <IconArrow />
            </template>
          </TextButton>
        </div>
      </template>
    </AlertPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/salesUsedCar/LayerSalesUsedCarAffiliateClauseDetail001.scss';
</style>

<style lang="scss" scoped>
.alertText {
  color: #15181f;
  padding-top: 10px;
  padding-bottom: 20px;
}
</style>
