<script>
import { ref } from 'vue';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import LR_M05_p016_Alert from '@/views/LeaseRentEstimationSystem/LR_M05_p016_Alert.vue';
import LR_M05_p016_Alert02 from '@/views/LeaseRentEstimationSystem/LR_M05_p016_Alert02.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    LR_M05_p016_Alert,
    LR_M05_p016_Alert02,
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
      layer001Open,
      layer002,
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
          >만기 대상 상담 얼럿팝업<br />LR_M05_p016_Alert
        </BasicButton>
      </ButtonListItem>

      <ButtonListItem>
        <BasicButton @click="layer002Open"
          >만기 대상 상담 얼럿팝업02<br />LR_M05_p016_Alert02
        </BasicButton>
      </ButtonListItem>
    </ButtonList>

    <LR_M05_p016_Alert ref="layer001" />
    <LR_M05_p016_Alert02 ref="layer002" />
  </PageContents>
</template>
