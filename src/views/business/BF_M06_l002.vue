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

import IconDentium from '@/assets/images/contents/img-dentium.svg?component';
import IconShinhung from '@/assets/images/contents/img-shinhung.svg?component';
import IconNeoBiotech from '@/assets/images/contents/img-neo-biotech.svg?component';
import IconNeoImplant from '@/assets/images/contents/img-neo-implant.svg?component';
import IconPointnix from '@/assets/images/contents/img-pointnix.svg?component';
import IconUbcare from '@/assets/images/contents/img-ubcare.svg?component';

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

    IconDentium,
    IconShinhung,
    IconNeoBiotech,
    IconNeoImplant,
    IconPointnix,
    IconUbcare,
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
          <strong>선택해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <ul class="reset-list">
        <!-- case : 제휴사선택_치과용품_선택전 -->
        <li class="row-margin-item">
          <BoxCheck
            :contents="true"
            type="radio"
            name="LayerAutoEstimateSelectDetailModel001"
            id="layerAutoEstimateSelectDetailModel001_011"
          >
            <BoxCheckLabel>
              <div class="flex-box">
                <div class="inline-wrap flex-box__cell">
                  <IconDentium />
                </div>
                <div class="flex-box__cell flex-box__cell--medium flex-1">
                  <span class="text-body-1 font-weight-medium">덴티움</span>
                </div>
              </div>
            </BoxCheckLabel>
          </BoxCheck>
        </li>
        <li class="row-margin-item">
          <BoxCheck
            :contents="true"
            type="radio"
            name="LayerAutoEstimateSelectDetailModel001"
            id="layerAutoEstimateSelectDetailModel001_012"
          >
            <BoxCheckLabel>
              <div class="flex-box">
                <div class="inline-wrap flex-box__cell">
                  <IconShinhung />
                </div>
                <div class="flex-box__cell flex-box__cell--medium flex-1">
                  <span class="text-body-1 font-weight-medium">신흥</span>
                </div>
              </div>
            </BoxCheckLabel>
          </BoxCheck>
        </li>
        <li class="row-margin-item">
          <BoxCheck
            :contents="true"
            type="radio"
            name="LayerAutoEstimateSelectDetailModel001"
            id="layerAutoEstimateSelectDetailModel001_003"
          >
            <BoxCheckLabel>
              <div class="flex-box">
                <div class="inline-wrap flex-box__cell">
                  <IconNeoBiotech />
                </div>
                <div class="flex-box__cell flex-box__cell--medium flex-1">
                  <span class="text-body-1 font-weight-medium"
                    >네오바이오텍</span
                  >
                </div>
              </div>
            </BoxCheckLabel>
          </BoxCheck>
        </li>
        <li class="row-margin-item">
          <BoxCheck
            :contents="true"
            type="radio"
            name="LayerAutoEstimateSelectDetailModel001"
            id="layerAutoEstimateSelectDetailModel001_004"
          >
            <BoxCheckLabel>
              <div class="flex-box">
                <div class="inline-wrap flex-box__cell">
                  <IconNeoImplant />
                </div>
                <div class="flex-box__cell flex-box__cell--medium flex-1">
                  <span class="text-body-1 font-weight-medium"
                    >네오임플란트</span
                  >
                </div>
              </div>
            </BoxCheckLabel>
          </BoxCheck>
        </li>
        <li class="row-margin-item">
          <BoxCheck
            :contents="true"
            type="radio"
            name="LayerAutoEstimateSelectDetailModel001"
            id="layerAutoEstimateSelectDetailModel001_005"
          >
            <BoxCheckLabel>
              <div class="flex-box">
                <div class="inline-wrap flex-box__cell">
                  <IconPointnix />
                </div>
                <div class="flex-box__cell flex-box__cell--medium flex-1">
                  <span class="text-body-1 font-weight-medium">포인트닉스</span>
                </div>
              </div>
            </BoxCheckLabel>
          </BoxCheck>
        </li>
        <!-- //case : 제휴사선택_치과용품_선택전 -->
        <!-- case : 제휴사선택_의원용프로그램_선택전 -->
        <li class="row-margin-item">
          <BoxCheck
            :contents="true"
            type="radio"
            name="LayerAutoEstimateSelectDetailModel001"
            id="layerAutoEstimateSelectDetailModel001_006"
          >
            <BoxCheckLabel>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <IconUbcare />
                </div>
                <div class="flex-box__cell flex-box__cell--medium flex-1">
                  <span class="text-body-1 font-weight-medium">유비케어</span>
                </div>
              </div>
            </BoxCheckLabel>
          </BoxCheck>
        </li>
        <!-- //case : 제휴사선택_의원용프로그램_선택전 -->
      </ul>

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
