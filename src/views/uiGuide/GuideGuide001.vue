<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerGuideAuthority from '@/views/guide/LayerGuideAuthority.vue';
import LayerGuideAuthorityPermit from '@/views/guide/LayerGuideAuthorityPermit.vue';
import LayerGuideVisibleARS from '@/views/guide/LayerGuideVisibleARS.vue';
import LayerGuideInstallApp from '@/views/guide/LayerGuideInstallApp.vue';
import LayerGuidePhoneCounseling from '@/views/guide/LayerGuidePhoneCounseling.vue';
import LayerGuideAutoLogout from '@/views/guide/LayerGuideAutoLogout.vue';
import LayerGuideAutoEndIdentification from '@/views/guide/LayerGuideAutoEndIdentification.vue';
import LayerGuideAppEvaluation from '@/views/guide/LayerGuideAppEvaluation.vue';
import Common_M00_l034 from '@/views/guide/Common_M00_l034.vue';
import Common_M00_l035 from '@/views/guide/Common_M00_l035.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerGuideAuthority,
    LayerGuideAuthorityPermit,
    LayerGuideVisibleARS,
    LayerGuideInstallApp,
    LayerGuidePhoneCounseling,
    LayerGuideAutoLogout,
    LayerGuideAutoEndIdentification,
    LayerGuideAppEvaluation,
    Common_M00_l034,
    Common_M00_l035,
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
          앱 접근권한 안내<br />Common_M00_l021<br />Common_M00_l032
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          접근권한 허용 안내<br />Common_M00_b015
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          보이는 ARS 정보제공 안내<br />Common_M00_l022
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          앱 설치 안내<br />Common_M00_b016
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          고객이탈방지 - 전화상담신청 팝업<br />Common_M00_b017
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          로그아웃 안내<br />Common_M00_b018
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">
          세션종료 안내<br />Common_M00_b019
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open">
          앱 평가<br />Common_M00_b020
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open">
          접속대기 안내 팝업<br />Common_M00_l034
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer010Open">
          초과접속 안내 팝업<br />Common_M00_l035
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerGuideAuthority ref="layer001" />
    <LayerGuideAuthorityPermit ref="layer002" />
    <LayerGuideVisibleARS ref="layer003" />
    <LayerGuideInstallApp ref="layer004" />
    <LayerGuidePhoneCounseling ref="layer005" />
    <LayerGuideAutoLogout ref="layer006" />
    <LayerGuideAutoEndIdentification ref="layer007" />
    <LayerGuideAppEvaluation ref="layer008" />
    <Common_M00_l034 ref="layer009" />
    <Common_M00_l035 ref="layer010" />
  </PageContents>
</template>
