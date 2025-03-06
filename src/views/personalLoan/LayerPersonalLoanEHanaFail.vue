<script>
// PF_M01_l005
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
// import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    // PageSubText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicHr,
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

      <PageTextGroup class="row-margin-none">
        <PageMainText>
          김하나님, 대출진행이 어렵습니다<br />
          <strong class="color-green text-title-2"
            >다른 제휴기관을 둘러보세요!</strong
          >
        </PageMainText>
      </PageTextGroup>
      <!--241115 삭제 -->
      <!--
      <BasicHr
        type="contents"
        theme="quaternary"
        className="row-margin-container"
      />
      -->
      <div class="row-margin-contents">
        <section>
          <div :class="[$style['image-view'], 'row-margin-contents']">
            <a
              href="https://m.credit.co.kr/ib20/mnu/CMNCMMBRD01?joinsiteid=JOIN120614"
            >
              <img
                src="@/assets/images/contents/img-nice.png"
                class="banner-img"
                alt="NICE지키미 은행, 승인 잘나는 대출 NICE에서 찾아드려요! 지금 바로 확인하기 심의필 제241029-001호(2024.10.29~2025.10.28)"
                style="background: #e9f6ff"
              />
            </a>
          </div>
          <div :class="[$style['image-view'], 'row-margin-contents']">
            <a
              href="https://m.credit.co.kr/ib20/mnu/CMNCMMBRD01?joinsiteid=JOIN120614"
            >
              <img
                src="@/assets/images/contents/img-welcome.png"
                class="banner-img"
                alt="웰컴저축은행,대출비교서비스로 40여개 금융사 조회하기 지금 바로 확인하기 심의필 제241029-001호(2024.10.29~2025.10.28)"
                style="background: #f4eeff"
              />
            </a>
          </div>
          <!--//241115-->
        </section>
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton tagName="a"
              >상담 1599-7942
              <span class="font-weight-regular text-body-3"
                >(평일 09:00 ~ 18:00)</span
              ></BasicButton
            >
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/LayerPersonalLoanEHanaFail.scss';
</style>
<style lang="scss" scoped>
.banner-img {
  border-radius: 16px;
}
</style>
