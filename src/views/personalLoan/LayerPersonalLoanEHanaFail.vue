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
          김하나님, 신청하신 상품은<br />
          대출진행이 어렵습니다
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
      <div>
        <section>
          <!-- 241115 클래스 수정 -->
          <h3 class="text-title-3">
            잠깐, <span class="color-green">아직 끝나지 않았어요!</span>
          </h3>
          <div :class="[$style['image-view'], 'row-margin-contents']">
            <a
              href="https://m.credit.co.kr/ib20/mnu/CMNCMMBRD01?joinsiteid=JOIN120614"
            >
              <img
                src="@/assets/images/contents/img-nice.png"
                class="banner-img"
                alt="NICE지키미 은행,저축은행,캐피탈,대부,P2P 승인 잘나는 대출 NICE에서 찾아드려요! 지금 바로 확인하기 심의필 제241029-001호(2024.10.29~2025.10.28)"
              />
            </a>
          </div>
          <div :class="[$style['image-view'], 'row-margin-contents']">
            <a
              href="https://m.credit.co.kr/ib20/mnu/CMNCMMBRD01?joinsiteid=JOIN120614"
            >
              <img
                src="@/assets/images/contents/img-nice.png"
                class="banner-img"
                alt="NICE지키미 은행,저축은행,캐피탈,대부,P2P 승인 잘나는 대출 NICE에서 찾아드려요! 지금 바로 확인하기 심의필 제241029-001호(2024.10.29~2025.10.28)"
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
            <BasicButton tagName="a">신용대출 상담 1599-7942</BasicButton>
          </ButtonListItem>
        </ButtonList>

        <div class="row-margin-item">
          <p class="text-body-3 color-gray font-weight-regular align-center">
            평일 09:00 ~ 18:00
          </p>
        </div>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/LayerPersonalLoanEHanaFail.scss';
</style>
<style lang="scss" scoped>
/*241115 */
/*background: #e9f6ff;*/
.banner-img {
  height: 182px;
  border-radius: 16px;
}
</style>
