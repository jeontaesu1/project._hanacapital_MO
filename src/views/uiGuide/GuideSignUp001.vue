<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerSignUpIdentificationMethodSelect from '@/views/sign/LayerSignUpIdentificationMethodSelect.vue';
import LayerSignUpAgree from '@/views/sign/LayerSignUpAgree.vue';
import LayerSignUpForm from '@/views/sign/LayerSignUpForm.vue';
import LayerSignUpComplete from '@/views/sign/LayerSignUpComplete.vue';
import LayerSignUpAlready from '@/views/sign/LayerSignUpAlready.vue';
import LayerSignUpAlreadyFromApp from '@/views/sign/LayerSignUpAlreadyFromApp.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerSignUpIdentificationMethodSelect,
    LayerSignUpAgree,
    LayerSignUpForm,
    LayerSignUpComplete,
    LayerSignUpAlready,
    LayerSignUpAlreadyFromApp,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer003 = ref(null);
    const layer004 = ref(null);
    const layer005 = ref(null);
    const layer006 = ref(null);

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

    return {
      layer001,
      layer002,
      layer003,
      layer004,
      layer005,
      layer006,
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
      layer005Open,
      layer006Open,
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
          인증선택<br />Member_M05_b001
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer002Open">
          약관동의<br />Member_M05_l001
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer003Open">
          아이디 비밀번호 입력<br />Member_M05_l004
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer004Open">
          가입완료<br />Member_M05_l005
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer005Open">
          기가입<br />Member_M05_l002
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer006Open">
          앱 기가입<br />Member_M05_l003
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerSignUpIdentificationMethodSelect ref="layer001" />
    <LayerSignUpAgree ref="layer002" />
    <LayerSignUpForm ref="layer003" />
    <LayerSignUpComplete ref="layer004" />
    <LayerSignUpAlready ref="layer005" />
    <LayerSignUpAlreadyFromApp ref="layer006" />
  </PageContents>
</template>
