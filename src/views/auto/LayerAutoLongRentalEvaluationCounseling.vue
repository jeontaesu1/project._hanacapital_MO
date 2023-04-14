<script>
// AF_M00_l009
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    PageTextGroup,
    PageMainText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    FormList,
    FormListItem,
    FormInvalid,
    InputBlock,
    InputBlockCell,
    FormInvalidMessage,
    BasicSelect,
  },
  setup() {
    const layer = ref(null);

    const state = reactive({
      timeError: false,
    });

    return {
      layer,
      state,
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
          연락가능한 시간을<br />
          <strong>선택해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <FormList>
        <FormListItem
          titleText="연락가능시간"
          target="#layerAutoLongRentalEvaluationCounselingTimeButton"
        >
          <FormInvalid :error="state.timeError">
            <InputBlock :error="state.timeError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '9',
                    },
                    {
                      value: '2',
                      text: '10',
                    },
                    {
                      value: '3',
                      text: '11',
                    },
                    {
                      value: '4',
                      text: '12',
                    },
                    {
                      value: '5',
                      text: '13',
                    },
                    {
                      value: '6',
                      text: '14',
                    },
                    {
                      value: '7',
                      text: '15',
                    },
                    {
                      value: '8',
                      text: '16',
                    },
                    {
                      value: '9',
                      text: '17',
                    },
                  ]"
                  buttonTitle="시작시간을 선택해 주세요"
                  layerTitle="시작시간을 선택해 주세요"
                  id="layerAutoLongRentalEvaluationCounselingTime1"
                  buttonId="layerAutoLongRentalEvaluationCounselingTimeButton"
                />
              </InputBlockCell>
              <InputBlockCell class="text-body-3">시</InputBlockCell>
              <InputBlockCell type="sub">~</InputBlockCell>
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '10',
                    },
                    {
                      value: '2',
                      text: '11',
                    },
                    {
                      value: '3',
                      text: '12',
                    },
                    {
                      value: '4',
                      text: '13',
                    },
                    {
                      value: '5',
                      text: '14',
                    },
                    {
                      value: '6',
                      text: '15',
                    },
                    {
                      value: '7',
                      text: '16',
                    },
                    {
                      value: '8',
                      text: '17',
                    },
                  ]"
                  buttonTitle="종료시간을 선택해 주세요"
                  layerTitle="종료시간을 선택해 주세요"
                  id="layerAutoLongRentalEvaluationCounselingTime2"
                  buttonId="layerAutoLongRentalEvaluationCounselingTimeButton"
                />
              </InputBlockCell>
              <InputBlockCell class="text-body-3">시 사이</InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton theme="secondary">확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
