<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyLoanPostMaturityExtensionRequest from '@/views/myLoan/LayerMyLoanPostMaturityExtensionRequest.vue';
import LayerMyLoanPostMaturityExtensionRequestAgree from '@/views/myLoan/LayerMyLoanPostMaturityExtensionRequestAgree.vue';
import LayerMyLoanPostMaturityExtensionRequestComplete001 from '@/views/myLoan/LayerMyLoanPostMaturityExtensionRequestComplete001.vue';
import LayerMyLoanPostMaturityExtensionRequestComplete002 from '@/views/myLoan/LayerMyLoanPostMaturityExtensionRequestComplete002.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyLoanPostMaturityExtensionRequest,
    LayerMyLoanPostMaturityExtensionRequestAgree,
    LayerMyLoanPostMaturityExtensionRequestComplete001,
    LayerMyLoanPostMaturityExtensionRequestComplete002,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer003 = ref(null);
    const layer004 = ref(null);

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

    return {
      layer001,
      layer002,
      layer003,
      layer004,
      layer001Open,
      layer002Open,
      layer003Open,
      layer004Open,
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
          계약자 정보 입력(심사요청)<br />My_M08_l005
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          약관동의(심사요청)<br />My_M08_l006
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          신청완료(심사요청완료)_리스<br />My_M08_l008
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          신청완료(심사요청완료)_렌트<br />My_M08_l008
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyLoanPostMaturityExtensionRequest ref="layer001" />
    <LayerMyLoanPostMaturityExtensionRequestAgree ref="layer002" />
    <LayerMyLoanPostMaturityExtensionRequestComplete001 ref="layer003" />
    <LayerMyLoanPostMaturityExtensionRequestComplete002 ref="layer004" />
  </PageContents>
</template>
