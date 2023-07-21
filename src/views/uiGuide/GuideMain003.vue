<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import Main_M06_b001 from '@/views/main/Main_M06_b001.vue';
import Main_M06_b002 from '@/views/main/Main_M06_b002.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    Main_M06_b001,
    Main_M06_b002,
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
          혜택 알림 수신 유도
          <br />
          Main_M06_b001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          운세 알림 수신 유도
          <br />
          Main_M06_b002
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <Main_M06_b001 ref="layer001" />
    <Main_M06_b002 ref="layer002" />
  </PageContents>
</template>
