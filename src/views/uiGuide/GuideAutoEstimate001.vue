<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerAutoEstimateContinuePrev from '@/views/auto/LayerAutoEstimateContinuePrev.vue';
import LayerAutoEstimateLeaveAlert from '@/views/auto/LayerAutoEstimateLeaveAlert.vue';
import LayerAutoEstimateSelectBrand from '@/views/auto/LayerAutoEstimateSelectBrand.vue';
import LayerAutoEstimateSearchCar from '@/views/auto/LayerAutoEstimateSearchCar.vue';
import LayerAutoEstimateSelectModel from '@/views/auto/LayerAutoEstimateSelectModel.vue';
import LayerAutoEstimateSelectRecommend from '@/views/auto/LayerAutoEstimateSelectRecommend.vue';
import LayerAutoEstimateSelectDetailModel from '@/views/auto/LayerAutoEstimateSelectDetailModel.vue';
import LayerAutoEstimateSelectTrim from '@/views/auto/LayerAutoEstimateSelectTrim.vue';
import LayerAutoEstimateEmptyDetailModelAlert from '@/views/auto/LayerAutoEstimateEmptyDetailModelAlert.vue';
import LayerAutoEstimateSelectColor from '@/views/auto/LayerAutoEstimateSelectColor.vue';
import LayerAutoEstimateSelectOption from '@/views/auto/LayerAutoEstimateSelectOption.vue';
import LayerAutoEstimateConfirm from '@/views/auto/LayerAutoEstimateConfirm.vue';
import LayerAutoEstimateSelectProduct from '@/views/auto/LayerAutoEstimateSelectProduct.vue';
import LayerAutoEstimateCompareLeaseRental from '@/views/auto/LayerAutoEstimateCompareLeaseRental.vue';
import LayerAutoEstimateSelectUserType from '@/views/auto/LayerAutoEstimateSelectUserType.vue';
import LayerAutoEstimateBusinessInfo from '@/views/auto/LayerAutoEstimateBusinessInfo.vue';
import LayerAutoEstimateUserInfo from '@/views/auto/LayerAutoEstimateUserInfo.vue';
import LayerAutoEstimateLease from '@/views/auto/LayerAutoEstimateLease.vue';
import LayerAutoEstimateRental from '@/views/auto/LayerAutoEstimateRental.vue';
import LayerAutoEstimateSelectInsurance from '@/views/auto/LayerAutoEstimateSelectInsurance.vue';
import LayerAutoEstimateView from '@/views/auto/LayerAutoEstimateView.vue';
import LayerAutoEstimateIdentification from '@/views/auto/LayerAutoEstimateIdentification.vue';
import LayerAutoEstimateCreditInfoComplete from '@/views/auto/LayerAutoEstimateCreditInfoComplete.vue';
import LayerAutoEstimateCounseling from '@/views/auto/LayerAutoEstimateCounseling.vue';
import LayerAutoEstimateCounselingComplete from '@/views/auto/LayerAutoEstimateCounselingComplete.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerAutoEstimateContinuePrev,
    LayerAutoEstimateLeaveAlert,
    LayerAutoEstimateSelectBrand,
    LayerAutoEstimateSearchCar,
    LayerAutoEstimateSelectModel,
    LayerAutoEstimateSelectRecommend,
    LayerAutoEstimateSelectDetailModel,
    LayerAutoEstimateSelectTrim,
    LayerAutoEstimateEmptyDetailModelAlert,
    LayerAutoEstimateSelectColor,
    LayerAutoEstimateSelectOption,
    LayerAutoEstimateConfirm,
    LayerAutoEstimateSelectProduct,
    LayerAutoEstimateCompareLeaseRental,
    LayerAutoEstimateSelectUserType,
    LayerAutoEstimateBusinessInfo,
    LayerAutoEstimateUserInfo,
    LayerAutoEstimateLease,
    LayerAutoEstimateRental,
    LayerAutoEstimateSelectInsurance,
    LayerAutoEstimateView,
    LayerAutoEstimateIdentification,
    LayerAutoEstimateCreditInfoComplete,
    LayerAutoEstimateCounseling,
    LayerAutoEstimateCounselingComplete,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer003 = ref(null);
    const layer004 = ref(null);
    const layer005 = ref(null);
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
    const layer021 = ref(null);
    const layer022 = ref(null);
    const layer023 = ref(null);
    const layer024 = ref(null);
    const layer025 = ref(null);

    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };
    const layer002Open = (e = {}) => {
      layer002.value.layer.open(e.target);
    };
    const layer003Open = (e = {}) => {
      layer003.value.layer.open(e.target);
    };
    const layer004Open = (e = {}) => {
      layer004.value.layer.open(e.target);
    };
    const layer005Open = (e = {}) => {
      layer005.value.layer.open(e.target);
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
    const layer021Open = (e = {}) => {
      layer021.value.layer.open(e.target);
    };
    const layer022Open = (e = {}) => {
      layer022.value.layer.open(e.target);
    };
    const layer023Open = (e = {}) => {
      layer023.value.layer.open(e.target);
    };
    const layer024Open = (e = {}) => {
      layer024.value.layer.open(e.target);
    };
    const layer025Open = (e = {}) => {
      layer025.value.layer.open(e.target);
    };

    return {
      layer001,
      layer002,
      layer003,
      layer004,
      layer005,
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
      layer021,
      layer022,
      layer023,
      layer024,
      layer025,
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
      layer005Open,
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
      layer021Open,
      layer022Open,
      layer023Open,
      layer024Open,
      layer025Open,
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
          >진행이력 팝업<br />AF_M00_b017</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open"
          >이탈 안내팝업<br />AF_M00_b002</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open"
          >제조사 선택<br />AF_M00_l001</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          자동차 검색<br />AF_M00_b001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          종류 선택<br />AF_M00_l003
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
          세부 모델 선택 팝업2 - 선택 결과가 없을 경우<br />AF_M00_b018
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer010Open">
          옵션 선택<br />AF_M00_l005
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer011Open">
          색상 선택<br />AF_M00_l006
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer012Open">
          최종 정보 확인<br />AF_M00_l007
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer013Open">
          상품 선택<br />AF_M00_l008
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer014Open"
          >리스/렌트 비교 정보 팝업<br />AF_M00_b007</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer015Open"
          >이용자 유형 선택 팝업<br />AF_M00_b011</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer016Open">
          상담 신청(사업자)<br />AF_M00_l011
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer017Open">
          조회 정보 입력<br />AF_M00_l012
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer018Open">
          견적 조회(리스)<br />AF_M02_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer019Open">
          견적 조회(장기렌터카)<br />AF_M01_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer020Open">
          견적 조회(장기렌터카) - 보험 선택 팝업<br />AF_M00_b013
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer021Open">
          견적 조회(장기렌터카) - 견적서 보기 팝업<br />AF_M00_l015
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer022Open">
          신용정보조회 동의 안내<br />AF_M00_l016
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer023Open">
          신용정보조회 동의 완료<br />AF_M00_l017
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer024Open"
          >신청정보 입력<br />AF_M00_l009</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer025Open"

          >상담 신청완료<br />AF_M00_l010</BasicButton
        >
      </ButtonListItem>
    </ButtonList>

    <LayerAutoEstimateContinuePrev ref="layer001" />
    <LayerAutoEstimateLeaveAlert ref="layer002" />
    <LayerAutoEstimateSelectBrand ref="layer003" />
    <LayerAutoEstimateSearchCar ref="layer004" />
    <LayerAutoEstimateSelectModel ref="layer005" />
    <LayerAutoEstimateSelectRecommend ref="layer006" />
    <LayerAutoEstimateSelectDetailModel ref="layer007" />
    <LayerAutoEstimateSelectTrim ref="layer008" />
    <LayerAutoEstimateEmptyDetailModelAlert ref="layer009" />
    <LayerAutoEstimateSelectOption ref="layer010" />
    <LayerAutoEstimateSelectColor ref="layer011" />
    <LayerAutoEstimateConfirm ref="layer012" />
    <LayerAutoEstimateSelectProduct ref="layer013" />
    <LayerAutoEstimateCompareLeaseRental ref="layer014" />
    <LayerAutoEstimateSelectUserType ref="layer015" />
    <LayerAutoEstimateBusinessInfo ref="layer016" />
    <LayerAutoEstimateUserInfo ref="layer017" />
    <LayerAutoEstimateLease ref="layer018" />
    <LayerAutoEstimateRental ref="layer019" />
    <LayerAutoEstimateSelectInsurance ref="layer020" />
    <LayerAutoEstimateView ref="layer021" />
    <LayerAutoEstimateIdentification ref="layer022" />
    <LayerAutoEstimateCreditInfoComplete ref="layer023" />
    <LayerAutoEstimateCounseling ref="layer024" />
    <LayerAutoEstimateCounselingComplete ref="layer025" />
  </PageContents>
</template>
