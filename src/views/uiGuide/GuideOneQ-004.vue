<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import Q_M07_l001 from '@/views/oneQ/Q_M07_l001.vue';
import Q_M07_l002 from '@/views/oneQ/Q_M07_l002.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    Q_M07_l001,
    Q_M07_l002,
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
        <BasicButton @click="layer001Open"
          >대출가능 차량 기준 안내 팝업<br />Q_M07_l001</BasicButton
        >
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open"
          >사업자 대출 진행 안내 팝업<br />Q_M07_l002</BasicButton
        >
      </ButtonListItem>
    </ButtonList>

    <Q_M07_l001 ref="layer001" />
    <Q_M07_l002 ref="layer002" />
  </PageContents>
</template>
