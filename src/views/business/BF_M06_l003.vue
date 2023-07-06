<script>
// BF_M06_l003
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
          상담을 원하시는 상품을<br />
          <strong>선택해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <ul class="reset-list">
        <!-- case : 상품선택_덴티움_선택전,후 -->
        <li class="row-margin-item">
          <BoxCheck
            :contents="true"
            type="radio"
            name="LayerAutoEstimateSelectDetailModel001"
            id="layerAutoEstimateSelectDetailModel001_001"
          >
            <BoxCheckLabel>임플란트</BoxCheckLabel>
          </BoxCheck>
        </li>
        <!-- //case : 상품선택_덴티움_선택전,후 -->
        <!-- case : 상품선택_신흥 -->
        <li class="row-margin-item">
          <BoxCheck
            :contents="true"
            type="radio"
            name="LayerAutoEstimateSelectDetailModel001"
            id="layerAutoEstimateSelectDetailModel002_001"
          >
            <BoxCheckLabel>임플란트+체어</BoxCheckLabel>
          </BoxCheck>
        </li>
        <li class="row-margin-item">
          <BoxCheck
            :contents="true"
            type="radio"
            name="LayerAutoEstimateSelectDetailModel001"
            id="layerAutoEstimateSelectDetailModel002_002"
          >
            <BoxCheckLabel>임플란트</BoxCheckLabel>
          </BoxCheck>
        </li>
        <!-- //case : 상품선택_신흥 -->
        <!-- case : 상품선택_네오바이오텍 -->
        <li class="row-margin-item">
          <BoxCheck
            :contents="true"
            type="radio"
            name="LayerAutoEstimateSelectDetailModel001"
            id="layerAutoEstimateSelectDetailModel003_001"
          >
            <BoxCheckLabel>임플란트+치과기공장비</BoxCheckLabel>
          </BoxCheck>
        </li>
        <li class="row-margin-item">
          <BoxCheck
            :contents="true"
            type="radio"
            name="LayerAutoEstimateSelectDetailModel001"
            id="layerAutoEstimateSelectDetailModel003_002"
          >
            <BoxCheckLabel>치기공소장비</BoxCheckLabel>
          </BoxCheck>
        </li>
        <li class="row-margin-item">
          <BoxCheck
            :contents="true"
            type="radio"
            name="LayerAutoEstimateSelectDetailModel001"
            id="layerAutoEstimateSelectDetailModel003_003"
          >
            <BoxCheckLabel>임플란트</BoxCheckLabel>
          </BoxCheck>
        </li>
        <li class="row-margin-item">
          <BoxCheck
            :contents="true"
            type="radio"
            name="LayerAutoEstimateSelectDetailModel001"
            id="layerAutoEstimateSelectDetailModel003_004"
          >
            <BoxCheckLabel>임플란트+체어</BoxCheckLabel>
            <div class="text-body-5 color-gray-secondary row-margin-small">
              부분이자
            </div>
          </BoxCheck>
        </li>
        <!-- //case : 상품선택_네오바이오텍 -->
        <!-- case :_상품선택_네오임플란트 -->
        <li class="row-margin-item">
          <BoxCheck
            :contents="true"
            type="radio"
            name="LayerAutoEstimateSelectDetailModel001"
            id="layerAutoEstimateSelectDetailModel004_001"
          >
            <BoxCheckLabel>임플란트 10개월</BoxCheckLabel>
            <div class="text-body-5 color-gray-secondary row-margin-small">
              무이자
            </div>
          </BoxCheck>
        </li>
        <li class="row-margin-item">
          <BoxCheck
            :contents="true"
            type="radio"
            name="LayerAutoEstimateSelectDetailModel001"
            id="layerAutoEstimateSelectDetailModel004_002"
          >
            <BoxCheckLabel>임플란트 5개월</BoxCheckLabel>
            <div class="text-body-5 color-gray-secondary row-margin-small">
              무이자
            </div>
          </BoxCheck>
        </li>
        <li class="row-margin-item">
          <BoxCheck
            :contents="true"
            type="radio"
            name="LayerAutoEstimateSelectDetailModel001"
            id="layerAutoEstimateSelectDetailModel004_003"
          >
            <BoxCheckLabel>임플란트+체어</BoxCheckLabel>
            <div class="text-body-5 color-gray-secondary row-margin-small">
              부분이자24개월
            </div>
          </BoxCheck>
        </li>
        <li class="row-margin-item">
          <BoxCheck
            :contents="true"
            type="radio"
            name="LayerAutoEstimateSelectDetailModel001"
            id="layerAutoEstimateSelectDetailModel004_004"
          >
            <BoxCheckLabel>임플란트+체어</BoxCheckLabel>
            <div class="text-body-5 color-gray-secondary row-margin-small">
              부분이자36개월
            </div>
          </BoxCheck>
        </li>
        <li class="row-margin-item">
          <BoxCheck
            :contents="true"
            type="radio"
            name="LayerAutoEstimateSelectDetailModel001"
            id="layerAutoEstimateSelectDetailModel004_005"
          >
            <BoxCheckLabel>치과용체어+임플란트36개월</BoxCheckLabel>
            <div class="text-body-5 color-gray-secondary row-margin-small">
              유이자
            </div>
          </BoxCheck>
        </li>
        <li class="row-margin-item">
          <BoxCheck
            :contents="true"
            type="radio"
            name="LayerAutoEstimateSelectDetailModel001"
            id="layerAutoEstimateSelectDetailModel004_006"
          >
            <BoxCheckLabel>임플란트 20개월</BoxCheckLabel>
            <div class="text-body-5 color-gray-secondary row-margin-small">
              무이자
            </div>
          </BoxCheck>
        </li>
        <li class="row-margin-item">
          <BoxCheck
            :contents="true"
            type="radio"
            name="LayerAutoEstimateSelectDetailModel001"
            id="layerAutoEstimateSelectDetailModel004_007"
          >
            <BoxCheckLabel>임플란트 15개월</BoxCheckLabel>
            <div class="text-body-5 color-gray-secondary row-margin-small">
              무이자
            </div>
          </BoxCheck>
        </li>
        <li class="row-margin-item">
          <BoxCheck
            :contents="true"
            type="radio"
            name="LayerAutoEstimateSelectDetailModel001"
            id="layerAutoEstimateSelectDetailModel004_008"
          >
            <BoxCheckLabel>임플란트 12개월</BoxCheckLabel>
            <div class="text-body-5 color-gray-secondary row-margin-small">
              무이자
            </div>
          </BoxCheck>
        </li>
        <li class="row-margin-item">
          <BoxCheck
            :contents="true"
            type="radio"
            name="LayerAutoEstimateSelectDetailModel001"
            id="layerAutoEstimateSelectDetailModel004_009"
          >
            <BoxCheckLabel>임플란트+체어</BoxCheckLabel>
            <div class="text-body-5 color-gray-secondary row-margin-small">
              무이자 15개월
            </div>
          </BoxCheck>
        </li>
        <!-- //case :_상품선택_네오임플란트 -->
        <!-- case : 상품선택_포인트닉스 -->
        <li class="row-margin-item">
          <BoxCheck
            :contents="true"
            type="radio"
            name="LayerAutoEstimateSelectDetailModel001"
            id="layerAutoEstimateSelectDetailModel005_001"
          >
            <BoxCheckLabel>임플란트</BoxCheckLabel>
          </BoxCheck>
        </li>
        <!-- //case : 상품선택_포인트닉스 -->
        <!-- case : 상품선택_유비케어 -->
        <li class="row-margin-item">
          <BoxCheck
            :contents="true"
            type="radio"
            name="LayerAutoEstimateSelectDetailModel001"
            id="layerAutoEstimateSelectDetailModel006_001"
          >
            <BoxCheckLabel>병원용 키호스크 단말기</BoxCheckLabel>
          </BoxCheck>
        </li>
        <!-- //case : 상품선택_유비케어 -->
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
