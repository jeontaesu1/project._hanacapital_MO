<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerIdentificationTypeSelect from '@/views/identification/LayerIdentificationTypeSelect.vue';
import LayerIdentificationBusiness from '@/views/identification/LayerIdentificationBusiness.vue';
import LayerIdentificationMethodSelect from '@/views/identification/LayerIdentificationMethodSelect.vue';
import LayerIdentificationPhone from '@/views/identification/LayerIdentificationPhone.vue';
import LayerIdentificationPhoneAgree from '@/views/identification/LayerIdentificationPhoneAgree.vue';
import LayerIdentificationCertificate from '@/views/identification/LayerIdentificationCertificate.vue';
import LayerIdentificationCard from '@/views/identification/LayerIdentificationCard.vue';
import LayerIdentificationCardAgree from '@/views/identification/LayerIdentificationCardAgree.vue';
import LayerIdentificationCardARS from '@/views/identification/LayerIdentificationCardARS.vue';
import LayerIdentificationKakaopay from '@/views/identification/LayerIdentificationKakaopay.vue';
import LayerIdentificationKakaopayIn from '@/views/identification/LayerIdentificationKakaopayIn.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerIdentificationTypeSelect,
    LayerIdentificationBusiness,
    LayerIdentificationMethodSelect,
    LayerIdentificationPhone,
    LayerIdentificationPhoneAgree,
    LayerIdentificationCertificate,
    LayerIdentificationCard,
    LayerIdentificationCardAgree,
    LayerIdentificationCardARS,
    LayerIdentificationKakaopay,
    LayerIdentificationKakaopayIn,
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
        <BasicButton @click="layer001Open">회원 유형 선택</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">법인</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">개인 - 인증 방법 선택</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">개인 - 휴대폰</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open"
          >개인 - 휴대폰 인증 이용약관 동의</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">개인 - 공동인증서</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">개인 - 신용카드</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open"
          >개인 - 신용카드 인증 이용약관 동의</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open"
          >개인 - 신용카드 ARS 인증 진행중</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer010Open">개인 - 카카오페이</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer011Open"
          >개인 - 카카오페이 인증 진행중</BasicButton
        >
      </ButtonListItem>
    </ButtonList>

    <LayerIdentificationTypeSelect ref="layer001" />
    <LayerIdentificationBusiness ref="layer002" />
    <LayerIdentificationMethodSelect ref="layer003" />
    <LayerIdentificationPhone ref="layer004" />
    <LayerIdentificationPhoneAgree ref="layer005" />
    <LayerIdentificationCertificate ref="layer006" />
    <LayerIdentificationCard ref="layer007" />
    <LayerIdentificationCardAgree ref="layer008" />
    <LayerIdentificationCardARS ref="layer009" />
    <LayerIdentificationKakaopay ref="layer010" />
    <LayerIdentificationKakaopayIn ref="layer011" />
  </PageContents>
</template>
