<script>
// BF_M06_l002
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';

import LogoOsstemImplant from '@/assets/images/etc-logo/osstem_implant.svg?component';
import LogoDentium from '@/assets/images/etc-logo/dentium.svg?component';
import LogoShinhung from '@/assets/images/etc-logo/shinhung.svg?component';
import LogoNeoBiotech from '@/assets/images/etc-logo/neo-biotech.svg?component';
import LogoNeoImplant from '@/assets/images/etc-logo/neo-implant.svg?component';
import LogoPointnix from '@/assets/images/etc-logo/pointnix.svg?component';
import LogoUbcare from '@/assets/images/etc-logo/ubcare.svg?component';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
    PageTextGroup,
    PageMainText,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,

    LogoOsstemImplant,
    LogoDentium,
    LogoShinhung,
    LogoNeoBiotech,
    LogoNeoImplant,
    LogoPointnix,
    LogoUbcare,
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
          원하시는 회사를<br />
          선택해 주세요
        </PageMainText>
      </PageTextGroup>

      <!-- Case : 치과용품 -->
      <BoxCheckList align="full">
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="radio"
            name="BF_M06_l002_brand_001"
            id="BF_M06_l002_brand_001_006"
          >
            <div class="flex-box">
              <div class="flex-box__cell">
                <LogoOsstemImplant :class="$style['logo']" />
              </div>
              <div class="flex-box__cell flex-box__cell--medium flex-1">
                <BoxCheckLabel
                  :classNames="{ label: 'text-body-1 font-weight-medium' }"
                  >오스템임플란트</BoxCheckLabel
                >
              </div>
            </div>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="radio"
            name="BF_M06_l002_brand_001"
            id="BF_M06_l002_brand_001_001"
          >
            <div class="flex-box">
              <div class="flex-box__cell">
                <LogoDentium :class="$style['logo']" />
              </div>
              <div class="flex-box__cell flex-box__cell--medium flex-1">
                <BoxCheckLabel
                  :classNames="{ label: 'text-body-1 font-weight-medium' }"
                  >덴티움</BoxCheckLabel
                >
              </div>
            </div>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="radio"
            name="BF_M06_l002_brand_001"
            id="BF_M06_l002_brand_001_002"
          >
            <div class="flex-box">
              <div class="flex-box__cell">
                <LogoShinhung :class="$style['logo']" />
              </div>
              <div class="flex-box__cell flex-box__cell--medium flex-1">
                <BoxCheckLabel
                  :classNames="{ label: 'text-body-1 font-weight-medium' }"
                  >신흥</BoxCheckLabel
                >
              </div>
            </div>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="radio"
            name="BF_M06_l002_brand_001"
            id="BF_M06_l002_brand_001_003"
          >
            <div class="flex-box">
              <div class="flex-box__cell">
                <LogoNeoBiotech :class="$style['logo']" />
              </div>
              <div class="flex-box__cell flex-box__cell--medium flex-1">
                <BoxCheckLabel
                  :classNames="{ label: 'text-body-1 font-weight-medium' }"
                  >네오바이오텍</BoxCheckLabel
                >
              </div>
            </div>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="radio"
            name="BF_M06_l002_brand_001"
            id="BF_M06_l002_brand_001_004"
          >
            <div class="flex-box">
              <div class="flex-box__cell">
                <LogoNeoImplant :class="$style['logo']" />
              </div>
              <div class="flex-box__cell flex-box__cell--medium flex-1">
                <BoxCheckLabel
                  :classNames="{ label: 'text-body-1 font-weight-medium' }"
                  >네오임플란트</BoxCheckLabel
                >
              </div>
            </div>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="radio"
            name="BF_M06_l002_brand_001"
            id="BF_M06_l002_brand_001_005"
          >
            <div class="flex-box">
              <div class="flex-box__cell">
                <LogoPointnix :class="$style['logo']" />
              </div>
              <div class="flex-box__cell flex-box__cell--medium flex-1">
                <BoxCheckLabel
                  :classNames="{ label: 'text-body-1 font-weight-medium' }"
                  >포인트닉스</BoxCheckLabel
                >
              </div>
            </div>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>
      <!-- // Case : 치과용품 -->

      <!-- Case : 의원용 프로그램 -->
      <BoxCheckList align="full">
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="radio"
            name="BF_M06_l002_brand_002"
            id="BF_M06_l002_brand_002_001"
          >
            <div class="flex-box">
              <div class="flex-box__cell">
                <LogoUbcare :class="$style['logo']" />
              </div>
              <div class="flex-box__cell flex-box__cell--medium flex-1">
                <BoxCheckLabel
                  :classNames="{ label: 'text-body-1 font-weight-medium' }"
                  >유비케어</BoxCheckLabel
                >
              </div>
            </div>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>
      <!-- // Case : 의원용 프로그램 -->

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-contents-small',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">이전</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>다음</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/business/BF_M06_l002.scss';
</style>
