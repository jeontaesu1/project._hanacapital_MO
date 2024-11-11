<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyInfoMarketingAgree from '@/views/myInfo/LayerMyInfoMarketingAgree.vue';
import LayerMyInfoMarketingComplete001 from '@/views/myInfo/LayerMyInfoMarketingComplete001.vue';
import LayerMyInfoMarketingComplete002 from '@/views/myInfo/LayerMyInfoMarketingComplete002.vue';
import LayerMyInfoMarketingComplete003 from '@/views/myInfo/LayerMyInfoMarketingComplete003.vue';
import LayerMyInfoMarketingComplete004 from '@/views/myInfo/LayerMyInfoMarketingComplete004.vue';
import MI_M01_l021_Alert from '@/views/myLoan/MI_M01_l021_Alert.vue'; // 추가 2024.05.02
import MI_M01_l011_01 from '@/views/myLoan/MI_M01_l011_01.vue'; // 추가 2024.05.02
import MI_M01_l011_02 from '@/views/myLoan/MI_M01_l011_02.vue'; // 추가 2024.05.02
import MI_M01_b006 from '@/views/myLoan/MI_M01_b006.vue'; // 추가 2024.05.02

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyInfoMarketingAgree,
    LayerMyInfoMarketingComplete001,
    LayerMyInfoMarketingComplete002,
    LayerMyInfoMarketingComplete003,
    LayerMyInfoMarketingComplete004,
    MI_M01_l021_Alert, // 추가 2024.05.02
    MI_M01_l011_01, // 추가 2024.05.02
    MI_M01_l011_02, // 추가 2024.05.02
    MI_M01_b006, // 추가 2024.05.02
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer003 = ref(null);
    const layer004 = ref(null);
    const layer005 = ref(null);
    const layer006 = ref(null); // 추가 2024.05.02
    const layer007 = ref(null); // 추가 2024.05.02
    const layer008 = ref(null); // 추가 2024.05.02
    const layer009 = ref(null); // 추가 2024.05.02

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
    // 추가 2024.05.02
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
      layer006, // 추가 2024.05.02
      layer007, // 추가 2024.05.02
      layer008, // 추가 2024.05.02
      layer009, // 추가 2024.05.02
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
      layer005Open,
      // 추가 2024.05.02
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
        <BasicButton @click="layer001Open">
          약관동의 팝업<br />MI_M01_b006
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          변경 완료_마케팅 동의<br />MI_M01_l011
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          변경 완료_멤버십 동의<br />MI_M01_l011
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          변경 완료_마케팅 미동의<br />MI_M01_l011
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer005Open">
          변경 완료_멤버십 미동의<br />MI_M01_l011
        </BasicButton>
      </ButtonListItem>
      <p style="font-weight: 700">계열사 마케팅 동의</p>
      <!-- 2024.05.02 추가 -->
      <ButtonListItem>
        <BasicButton @click="layer006Open">
          마케팅변경_진행불가
          <br />MI_M01_l021
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer007Open">
          변경 완료_계열사마케팅동의
          <br />MI_M01_l011
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer008Open">
          변경 완료_계열사마케팅미동의
          <br />MI_M01_l011
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer009Open">
          약관동의 팝업_계열사마케팅동의
          <br />MI_M01_b006
        </BasicButton>
      </ButtonListItem>
      <!-- //  2024.05.02 추가 -->
    </ButtonList>

    <LayerMyInfoMarketingAgree ref="layer001" />
    <LayerMyInfoMarketingComplete001 ref="layer002" />
    <LayerMyInfoMarketingComplete002 ref="layer003" />
    <LayerMyInfoMarketingComplete003 ref="layer004" />
    <LayerMyInfoMarketingComplete004 ref="layer005" />
    <!--추가 2024.05.02-->
    <MI_M01_l021_Alert ref="layer006" />
    <MI_M01_l011_01 ref="layer007" />
    <MI_M01_l011_02 ref="layer008" />
    <MI_M01_b006 ref="layer009" />
  </PageContents>
</template>
