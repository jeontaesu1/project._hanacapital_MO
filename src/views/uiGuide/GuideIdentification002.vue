<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerIdentification from '@/views/identification/LayerIdentification.vue';
import LayerIdentificationTypeSelect from '@/views/identification/LayerIdentificationTypeSelect.vue';
import LayerIdentificationBusiness from '@/views/identification/LayerIdentificationBusiness.vue';
import LayerIdentificationMethodSelect from '@/views/identification/LayerIdentificationMethodSelect.vue';
import LayerIdentificationPhone from '@/views/identification/LayerIdentificationPhone.vue';
import LayerIdentificationPhoneAgree from '@/views/identification/LayerIdentificationPhoneAgree.vue';
import LayerIdentificationCard from '@/views/identification/LayerIdentificationCard.vue';
import LayerIdentificationCardAgree from '@/views/identification/LayerIdentificationCardAgree.vue';
import LayerIdentificationCardARS from '@/views/identification/LayerIdentificationCardARS.vue';
import LayerIdentificationKakaopayMethodSelect from '@/views/identification/LayerIdentificationKakaopayMethodSelect.vue';
import LayerIdentificationKakaopayIn from '@/views/identification/LayerIdentificationKakaopayIn.vue';
import LayerIdentificationKakaopayAgree from '@/views/identification/LayerIdentificationKakaopayAgree.vue';
import LayerIdentificationKakaopayAddMethodSelect from '@/views/identification/LayerIdentificationKakaopayAddMethodSelect.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerIdentification,
    LayerIdentificationTypeSelect,
    LayerIdentificationBusiness,
    LayerIdentificationMethodSelect,
    LayerIdentificationPhone,
    LayerIdentificationPhoneAgree,
    LayerIdentificationCard,
    LayerIdentificationCardAgree,
    LayerIdentificationCardARS,
    LayerIdentificationKakaopayMethodSelect,
    LayerIdentificationKakaopayIn,
    LayerIdentificationKakaopayAgree,
    LayerIdentificationKakaopayAddMethodSelect,
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
        <BasicButton @click="layer001Open">
          메뉴진입 본인인증 안내<br />Common_M00_l033
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          회원 유형 선택<br />Common_M00_l029
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          법인<br />Common_M00_l030
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          개인 - 인증 방법 선택<br />Common_M00_b001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          개인 - 휴대폰<br />Common_M00_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          개인 - 휴대폰 인증 이용약관 동의<br />Common_M00_b003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open">
          개인 - 신용카드<br />Common_M00_l004
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open">
          개인 - 신용카드 인증 이용약관 동의<br />Common_M00_b005
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer010Open">
          개인 - 신용카드 ARS 인증 진행중<br />Common_M00_b006
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer014Open">
          개인 - 간편인증 선택 팝업<br />Common_M00_b050
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer015Open">
          개인 - 간편인증 선택 팝업_추가인증<br />Common_M00_b050
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer013Open">
          개인 - 간편인증 이용약관 동의<br />Common_M00_b051
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer012Open">
          개인 - 간편인증수단 인증안내<br />Common_M00_b052
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerIdentification ref="layer001" />
    <LayerIdentificationTypeSelect ref="layer002" />
    <LayerIdentificationBusiness ref="layer003" />
    <LayerIdentificationMethodSelect ref="layer004" />
    <LayerIdentificationPhone ref="layer005" />
    <LayerIdentificationPhoneAgree ref="layer006" />
    <LayerIdentificationCard ref="layer008" />
    <LayerIdentificationCardAgree ref="layer009" />
    <LayerIdentificationCardARS ref="layer010" />
    <LayerIdentificationKakaopayIn ref="layer012" />
    <LayerIdentificationKakaopayAgree ref="layer013" />
    <LayerIdentificationKakaopayMethodSelect ref="layer014" />
    <LayerIdentificationKakaopayAddMethodSelect ref="layer015" />
  </PageContents>
</template>
