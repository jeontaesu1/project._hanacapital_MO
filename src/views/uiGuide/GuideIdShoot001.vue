<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerIdShootGuide from '@/views/idShoot/LayerIdShootGuide.vue';
import LayerIdShootFail from '@/views/idShoot/LayerIdShootFail.vue';
import LayerIdShootConfirm from '@/views/idShoot/LayerIdShootConfirm.vue';
import LayerIdShootForm from '@/views/idShoot/LayerIdShootForm.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerIdShootGuide,
    LayerIdShootFail,
    LayerIdShootConfirm,
    LayerIdShootForm,
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
          신분증 촬영안내<br />Common_M00_l006
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          신분증 인식 실패 팝업<br />Common_M00_b008
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          신분증 정보입력_자동입력<br />Common_M00_l007
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer004Open">
          신분증 정보입력_직접입력<br />Common_M00_l008
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerIdShootGuide ref="layer001" />
    <LayerIdShootFail ref="layer002" />
    <LayerIdShootConfirm ref="layer003" />
    <LayerIdShootForm ref="layer004" />
  </PageContents>
</template>
