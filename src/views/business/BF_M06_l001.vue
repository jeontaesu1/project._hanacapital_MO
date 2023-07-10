<script>
// BF_M06_l001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';

import IconDentist from '@/assets/images/icon/dentist.svg?component';
import IconMedicalProgram from '@/assets/images/icon/medical-program.svg?component';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
    PageTextGroup,
    PageMainText,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,

    IconDentist,
    IconMedicalProgram,
  },
  setup() {
    const layer = ref(null);

    return {
      layer,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="full" v-slot="layerSlotProps">
    <FullPopup>
      <template v-slot:head>
        <FullPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          원하시는 물품을<br />
          <strong>선택해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <BoxCheckList align="full">
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="radio"
            name="BF_M06_l001_type"
            id="BF_M06_l001_type_001"
          >
            <div class="flex-box">
              <div class="flex-box__cell">
                <IconDentist class="display-block" />
              </div>
              <div class="flex-box__cell flex-box__cell--medium flex-1">
                <BoxCheckLabel
                  :classNames="{ label: 'text-body-1 font-weight-medium' }"
                  >치과용품(임플란트 외)</BoxCheckLabel
                >
              </div>
            </div>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="radio"
            name="BF_M06_l001_type"
            id="BF_M06_l001_type_002"
          >
            <div class="flex-box">
              <div class="flex-box__cell">
                <IconMedicalProgram class="display-block" />
              </div>
              <div class="flex-box__cell flex-box__cell--medium flex-1">
                <BoxCheckLabel
                  :classNames="{ label: 'text-body-1 font-weight-medium' }"
                  >의원용 프로그램</BoxCheckLabel
                >
              </div>
            </div>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-contents-small',
          }"
        >
          <ButtonListItem>
            <BasicButton>다음</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
