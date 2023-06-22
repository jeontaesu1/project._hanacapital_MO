<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerSignUpAppAgree from '@/views/sign/LayerSignUpAppAgree.vue';
import LayerSignUpAppPinSet from '@/views/sign/LayerSignUpAppPinSet.vue';
import LayerSignUpAppPinConfirm from '@/views/sign/LayerSignUpAppPinConfirm.vue';
import LayerSignUpAppAddFingerprint from '@/views/sign/LayerSignUpAppAddFingerprint.vue';
import LayerSignUpAppAddFaceId from '@/views/sign/LayerSignUpAppAddFaceId.vue';
import LayerSignUpAppComplete from '@/views/sign/LayerSignUpAppComplete.vue';
import LayerSignUpAppInfo from '@/views/sign/LayerSignUpAppInfo.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerSignUpAppAgree,
    LayerSignUpAppPinSet,
    LayerSignUpAppPinConfirm,
    LayerSignUpAppAddFingerprint,
    LayerSignUpAppAddFaceId,
    LayerSignUpAppComplete,
    LayerSignUpAppInfo,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer003 = ref(null);
    const layer004 = ref(null);
    const layer005 = ref(null);
    const layer006 = ref(null);
    const layer007 = ref(null);

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

    return {
      layer001,
      layer002,
      layer003,
      layer004,
      layer005,
      layer006,
      layer007,
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
      layer005Open,
      layer006Open,
      layer007Open,
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
          약관동의<br />Member_M06_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          비밀번호 입력<br />Member_M06_l002
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          비밀번호 확인<br />Member_M06_l003
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          인증수단 추가 - 지문인증<br />Member_M06_b001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          인증수단 추가 - Face ID<br />Member_M06_b001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          가입완료<br />Member_M06_l004
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">
          둘러보기<br />Member_M06_b002
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerSignUpAppAgree ref="layer001" />
    <LayerSignUpAppPinSet ref="layer002" />
    <LayerSignUpAppPinConfirm ref="layer003" />
    <LayerSignUpAppAddFingerprint ref="layer004" />
    <LayerSignUpAppAddFaceId ref="layer005" />
    <LayerSignUpAppComplete ref="layer006" />
    <LayerSignUpAppInfo ref="layer007" />
  </PageContents>
</template>
