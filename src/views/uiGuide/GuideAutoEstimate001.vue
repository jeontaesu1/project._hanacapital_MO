<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerAutoEstimateCounseling from '../auto/LayerAutoEstimateCounseling.vue';
import LayerAutoEstimateCounselingComplete from '../auto/LayerAutoEstimateCounselingComplete.vue';
import LayerAutoEstimateSearchCar from '../auto/LayerAutoEstimateSearchCar.vue';
import LayerAutoEstimateSelectRecommend from '../auto/LayerAutoEstimateSelectRecommend.vue';
import LayerAutoEstimateSelectDetailModel from '../auto/LayerAutoEstimateSelectDetailModel.vue';
import LayerAutoEstimateSelectTrim from '../auto/LayerAutoEstimateSelectTrim.vue';
import LayerAutoEstimateSelectColor from '../auto/LayerAutoEstimateSelectColor.vue';
import LayerAutoEstimateSelectOption from '../auto/LayerAutoEstimateSelectOption.vue';
import LayerAutoEstimateConfirm from '../auto/LayerAutoEstimateConfirm.vue';
import LayerAutoEstimateSelectProduct from '../auto/LayerAutoEstimateSelectProduct.vue';
import LayerAutoEstimateBusinessInfo from '../auto/LayerAutoEstimateBusinessInfo.vue';
import LayerAutoEstimateUserInfo from '../auto/LayerAutoEstimateUserInfo.vue';
import LayerAutoEstimateLease from '../auto/LayerAutoEstimateLease.vue';
import LayerAutoEstimateRental from '../auto/LayerAutoEstimateRental.vue';
import LayerAutoEstimateSelectInsurance from '../auto/LayerAutoEstimateSelectInsurance.vue';
import LayerAutoEstimateView from '../auto/LayerAutoEstimateView.vue';
import LayerAutoEstimateIdentification from '../auto/LayerAutoEstimateIdentification.vue';
import LayerAutoEstimateCreditInfoComplete from '../auto/LayerAutoEstimateCreditInfoComplete.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerAutoEstimateCounseling,
    LayerAutoEstimateCounselingComplete,
    LayerAutoEstimateSearchCar,
    LayerAutoEstimateSelectRecommend,
    LayerAutoEstimateSelectDetailModel,
    LayerAutoEstimateSelectTrim,
    LayerAutoEstimateSelectColor,
    LayerAutoEstimateSelectOption,
    LayerAutoEstimateConfirm,
    LayerAutoEstimateSelectProduct,
    LayerAutoEstimateBusinessInfo,
    LayerAutoEstimateUserInfo,
    LayerAutoEstimateLease,
    LayerAutoEstimateRental,
    LayerAutoEstimateSelectInsurance,
    LayerAutoEstimateView,
    LayerAutoEstimateIdentification,
    LayerAutoEstimateCreditInfoComplete,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer004 = ref(null);
    const layer006 = ref(null);
    const layer007 = ref(null);
    const layer008 = ref(null);
    const layer009 = ref(null);
    const layer010 = ref(null);
    const layer011 = ref(null);
    const layer012 = ref(null);
    const layer013 = ref(null);
    const layer014 = ref(null);
    const layer015 = ref(null);
    const layer016 = ref(null);
    const layer017 = ref(null);
    const layer018 = ref(null);
    const layer019 = ref(null);
    const layer020 = ref(null);

    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };
    const layer002Open = (e = {}) => {
      layer002.value.layer.open(e.target);
    };
    const layer004Open = (e = {}) => {
      layer004.value.layer.open(e.target);
    };
    const layer006Open = (e = {}) => {
      layer006.value.layer.open(e.target);
    };
    const layer007Open = (e = {}) => {
      layer007.value.layer.open(e.target);
    };
    const layer008Open = (e = {}) => {
      layer008.value.layer.open(e.target);
    };
    const layer009Open = (e = {}) => {
      layer009.value.layer.open(e.target);
    };
    const layer010Open = (e = {}) => {
      layer010.value.layer.open(e.target);
    };
    const layer011Open = (e = {}) => {
      layer011.value.layer.open(e.target);
    };
    const layer012Open = (e = {}) => {
      layer012.value.layer.open(e.target);
    };
    const layer013Open = (e = {}) => {
      layer013.value.layer.open(e.target);
    };
    const layer014Open = (e = {}) => {
      layer014.value.layer.open(e.target);
    };
    const layer015Open = (e = {}) => {
      layer015.value.layer.open(e.target);
    };
    const layer016Open = (e = {}) => {
      layer016.value.layer.open(e.target);
    };
    const layer017Open = (e = {}) => {
      layer017.value.layer.open(e.target);
    };
    const layer018Open = (e = {}) => {
      layer018.value.layer.open(e.target);
    };
    const layer019Open = (e = {}) => {
      layer019.value.layer.open(e.target);
    };
    const layer020Open = (e = {}) => {
      layer020.value.layer.open(e.target);
    };

    return {
      layer001,
      layer002,
      layer004,
      layer006,
      layer007,
      layer008,
      layer009,
      layer010,
      layer011,
      layer012,
      layer013,
      layer014,
      layer015,
      layer016,
      layer017,
      layer018,
      layer019,
      layer020,
      layer001Open,
      layer002Open,
      layer004Open,
      layer006Open,
      layer007Open,
      layer008Open,
      layer009Open,
      layer010Open,
      layer011Open,
      layer012Open,
      layer013Open,
      layer014Open,
      layer015Open,
      layer016Open,
      layer017Open,
      layer018Open,
      layer019Open,
      layer020Open,
    };
  },
};
</script>

<template>
  <PageContents>
    <ButtonList
      :classNames="{
        wrap: 'row-margin-none',
      }"
      align="full"
    >
      <ButtonListItem>
        <BasicButton @click="layer001Open"
          >신청정보 입력<br />AF_M00_l009</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open"
          >상담 신청완료<br />AF_M00_l010</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          자동차 검색<br />AF_M00_b001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          추천 차량 선택<br />AF_M00_l018
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">
          세부모델 선택<br />AF_M00_l004
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open">
          세부모델 선택<br />AF_M00_b003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open">
          옵션 선택<br />AF_M00_l005
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer010Open">
          색상 선택<br />AF_M00_l006
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer011Open">
          최종 정보 확인<br />AF_M00_l007
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer012Open">
          상품 선택<br />AF_M00_l008
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer013Open">
          상담 신청(사업자)<br />AF_M00_l011
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer014Open">
          조회 정보 입력<br />AF_M00_l012
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer015Open">
          견적 조회(리스)<br />AF_M02_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer016Open">
          견적 조회(장기렌터카)<br />AF_M01_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer017Open">
          견적 조회(장기렌터카) - 보험 선택 팝업<br />AF_M00_b013
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer018Open">
          견적 조회(장기렌터카) - 견적서 보기 팝업<br />AF_M00_l015
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer019Open">
          신용정보조회 동의 안내<br />AF_M00_l016
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer020Open">
          신용정보조회 동의 완료<br />AF_M00_l017
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerAutoEstimateCounseling ref="layer001" />
    <LayerAutoEstimateCounselingComplete ref="layer002" />
    <LayerAutoEstimateSearchCar ref="layer004" />
    <LayerAutoEstimateSelectRecommend ref="layer006" />
    <LayerAutoEstimateSelectDetailModel ref="layer007" />
    <LayerAutoEstimateSelectTrim ref="layer008" />
    <LayerAutoEstimateSelectOption ref="layer009" />
    <LayerAutoEstimateSelectColor ref="layer010" />
    <LayerAutoEstimateConfirm ref="layer011" />
    <LayerAutoEstimateSelectProduct ref="layer012" />
    <LayerAutoEstimateBusinessInfo ref="layer013" />
    <LayerAutoEstimateUserInfo ref="layer014" />
    <LayerAutoEstimateLease ref="layer015" />
    <LayerAutoEstimateRental ref="layer016" />
    <LayerAutoEstimateSelectInsurance ref="layer017" />
    <LayerAutoEstimateView ref="layer018" />
    <LayerAutoEstimateIdentification ref="layer019" />
    <LayerAutoEstimateCreditInfoComplete ref="layer020" />
  </PageContents>
</template>
