<script>
// LR_M07_p001_Alert
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
        <!-- <PopupText :class="['alertText']"
          >하나캐피탈을 이용 중이신 차량의 차량번호를<br />
          입력해주세요.</PopupText
        > -->
      </template>

      <PageTextGroup class="row-margin-none">
        <PageMainText>
          <!--
          <strong class="text-title-2">
            임직원 렌터카 상담 신청을 <br />
            진행하시겠습니까?
          </strong>
          -->
          <p class="fb400-title-ty1">
            임직원 렌터카 상담 신청을 <br />
            진행하시겠습니까?
          </p>
        </PageMainText>
        <PageSubText class="row-margin-item-text">
          담당 부서 : 하나캐피탈 다이렉트오토팀
        </PageSubText>
      </PageTextGroup>

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
    </AlertPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/salesUsedCar/LayerSalesUsedCarAffiliateClauseDetail001.scss';
</style>

<style lang="scss" scoped>
.fb400-title-ty1 {
  font-size: 14px;
  font-weight: 400;
  padding: 0 0;
  margin: 0 0;
}
.row-margin-item-text {
  padding-top: 32px;
  margin-top: 0;
}
</style>
