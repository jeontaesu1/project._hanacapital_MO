<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerAuthorityAOS from '@/views/infomation/LayerAuthorityAOS.vue';
import LayerAuthorityPermit from '@/views/infomation/LayerAuthorityPermit.vue';
import LayerAuthorityIOS from '@/views/infomation/LayerAuthorityIOS.vue';
import LayerVisibleARS from '@/views/infomation/LayerVisibleARS.vue';
import LayerInstallApp from '@/views/infomation/LayerInstallApp.vue';
import LayerPhoneConsultation from '@/views/infomation/LayerPhoneConsultation.vue';
import LayerAutomaticLogout from '@/views/infomation/LayerAutomaticLogout.vue';
import LayerEndSession from '@/views/infomation/LayerEndSession.vue';
import LayerAppEvaluation from '@/views/infomation/LayerAppEvaluation.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerAuthorityAOS,
    LayerAuthorityPermit,
    LayerAuthorityIOS,
    LayerVisibleARS,
    LayerInstallApp,
    LayerPhoneConsultation,
    LayerAutomaticLogout,
    LayerEndSession,
    LayerAppEvaluation,
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
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
      layer005Open,
      layer006Open,
      layer007Open,
      layer008Open,
      layer009Open,
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
        <BasicButton @click="layer001Open">앱 접근권한 안내 AOS</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">접근권한 허용 안내</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">앱 접근권한 안내_iOS</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open"
          >보이는 ARS 정보제공 안내</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">앱 설치 안내</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open"
          >고객이탈방지 - 전화상담신청 팝업</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">로그아웃 안내</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open">세션종료 안내</BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open">앱 평가</BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerAuthorityAOS ref="layer001" />
    <LayerAuthorityPermit ref="layer002" />
    <LayerAuthorityIOS ref="layer003" />
    <LayerVisibleARS ref="layer004" />
    <LayerInstallApp ref="layer005" />
    <LayerPhoneConsultation ref="layer006" />
    <LayerAutomaticLogout ref="layer007" />
    <LayerEndSession ref="layer008" />
    <LayerAppEvaluation ref="layer009" />
  </PageContents>
</template>
