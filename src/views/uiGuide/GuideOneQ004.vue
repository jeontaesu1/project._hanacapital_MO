<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import Q_M04_l001 from '@/views/oneQ/Q_M04_l001.vue';
import Q_M04_p006 from '@/views/oneQ/Q_M04_p006.vue';
import Q_M04_p007 from '@/views/oneQ/Q_M04_p007.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    Q_M04_l001,
    Q_M04_p006,
    Q_M04_p007,
  },
  setup() {
    const layer001 = ref(null);
    const layer002 = ref(null);
    const layer003 = ref(null);

    const layer001Open = (e = {}) => {
      layer001.value.layer.open(e.target);
    };
    const layer002Open = (e = {}) => {
      layer002.value.layer.open(e.target);
    };
    const layer003Open = (e = {}) => {
      layer003.value.layer.open(e.target);
    };

    return {
      layer001,
      layer002,
      layer003,
      layer001Open,
      layer002Open,
      layer003Open,
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
          약관 상세<br />Q_M04_l001
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer002Open">
          한도조회 동의<br />Q_M04_p006
        </BasicButton>
      </ButtonListItem>
      <ButtonListItem>
        <BasicButton @click="layer003Open">
          차량정보 입력<br />Q_M04_p007
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <Q_M04_l001 ref="layer001" />
    <Q_M04_p006 ref="layer002" />
    <Q_M04_p007 ref="layer003" />
  </PageContents>
</template>
