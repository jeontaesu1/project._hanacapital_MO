<script>
// PF_M01_l009
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBanner from '@/components/ui/banner/BasicBanner.vue';

import IconCustomer from '@/assets/images/icon/customer-center.svg?component';
import IconTell from '@/assets/images/icon/tell.svg?component';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IllustObject,
    BasicHr,
    BasicBanner,
    IconCustomer,
    IconTell,
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
          김하나님의 대출 신청이<br />
          완료되었습니다
        </PageMainText>
      </PageTextGroup>

      <IllustObject type="complete" />

      <!-- DD : 하드코딩 배너 -->
      <BasicBanner
        tagName="RouterLink"
        to="/my-info/join-membership"
        thumb="/images/banner/banner-join.png"
      >
        <p class="text-body-4 color-gray row-margin-mini nowrap">
          회원만을 위한 특별한 혜택
        </p>
        <h3 class="text-body-1 font-weight-medium nowrap">
          하나캐피탈 멤버십 가입하기
        </h3>
      </BasicBanner>
      <!-- // DD : 하드코딩 배너 -->

      <BasicHr
        type="contents"
        theme="quaternary"
        className="row-margin-container"
      />

      <!-- 250410 태그 추가 하단 영역 수정 -->
      <div :class="$style['new-pb-box']">
        <div :class="$style['icon-list']">
          <ul :class="$style['icon-list__list']">
            <li :class="$style['icon-list__item']">
              <div :class="$style['icon-list__block']">
                <div :class="$style['icon-list__icon']"><IconCustomer /></div>
                <div :class="$style['icon-list__content']">
                  <div :class="$style['icon-list__title']">고객센터</div>
                  <div :class="$style['icon-list__text']">평일 09:00 ~ 18:00</div>
                </div>
                <BasicButton
                  tagName="a"
                  size="mini"
                  :line="true"
                  theme="quaternary"
                  :classNames="{ wrap: $style['icon-list__button'] }"
                  href="tel:1800-1110"
                >
                  <template v-slot:leftIcon>
                    <IconTell />
                  </template>
                  1599-7942
                </BasicButton>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!--// 250410 태그 추가 -->

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <!--250409-->
          <ButtonListItem :class="$style['toltip-pos']">
            <div :class="$style['toltip-box']">
              <div>
                <p>앱 바로가기(대출약정)</p>
              </div>
            </div>
            <BasicButton> 대출 신청 </BasicButton>
          </ButtonListItem>
          <!--//250409-->
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/LayerPersonalLoanEHanaComplete.scss';
</style>
