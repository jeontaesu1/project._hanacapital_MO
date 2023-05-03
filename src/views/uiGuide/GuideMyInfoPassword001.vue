<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LayerMyInfoPassword from '@/views/myInfo/LayerMyInfoPassword.vue';
import LayerMyInfoPasswordComplete from '@/views/myInfo/LayerMyInfoPasswordComplete.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LayerMyInfoPassword,
    LayerMyInfoPasswordComplete,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);

    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };
    const layer002Open = (e = {}) => {
      layer002.value.layer.open(e.target);
    };

    return {
      layer001,
      layer002,
      layer001Open,
      layer002Open,
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
          비밀번호 재설정<br />MI_M01_l009
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          비밀번호 변경완료<br />MI_M01_l010
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LayerMyInfoPassword ref="layer001" />
    <LayerMyInfoPasswordComplete ref="layer002" />
  </PageContents>
</template>
