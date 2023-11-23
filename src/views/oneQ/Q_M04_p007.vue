<script>
// Q_M04_p007
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
    const state = reactive({
      timeError: false,
      branchError: false,
    });

    const layer = ref(null);

    return {
      state,
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
          연락가능한 시간을<br />
          선택해 주세요
        </PageMainText>
      </PageTextGroup>

      <FormList>
        <FormListItem
          titleText="연락가능시간"
          target="#Q_M04_p007StartTimeButton"
        >
          <FormInvalid :error="state.timeError">
            <InputBlock :error="state.timeError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '9',
                      text: '9',
                    },
                    {
                      value: '10',
                      text: '10',
                    },
                    {
                      value: '11',
                      text: '11',
                    },
                    {
                      value: '12',
                      text: '12',
                    },
                    {
                      value: '13',
                      text: '13',
                    },
                    {
                      value: '14',
                      text: '14',
                    },
                    {
                      value: '15',
                      text: '15',
                    },
                    {
                      value: '16',
                      text: '16',
                    },
                    {
                      value: '17',
                      text: '17',
                    },
                  ]"
                  buttonTitle="시작시간 선택하기"
                  layerTitle="시작시간을 선택해 주세요"
                  id="Q_M04_p007StartTime"
                  buttonId="Q_M04_p007StartTimeButton"
                />
              </InputBlockCell>
              <InputBlockCell margin="regular">
                <div class="text-body-3">시</div>
              </InputBlockCell>
              <InputBlockCell margin="regular">
                <div class="text-body-3">~</div>
              </InputBlockCell>
              <InputBlockCell :flexible="true" margin="regular">
                <BasicSelect
                  :option="[
                    {
                      value: '10',
                      text: '10',
                    },
                    {
                      value: '11',
                      text: '11',
                    },
                    {
                      value: '12',
                      text: '12',
                    },
                    {
                      value: '13',
                      text: '13',
                    },
                    {
                      value: '14',
                      text: '14',
                    },
                    {
                      value: '15',
                      text: '15',
                    },
                    {
                      value: '16',
                      text: '16',
                    },
                    {
                      value: '17',
                      text: '17',
                    },
                    {
                      value: '18',
                      text: '18',
                    },
                  ]"
                  buttonTitle="종료시간 선택하기"
                  layerTitle="종료시간을 선택해 주세요"
                  id="Q_M04_p007EndTime"
                  buttonId="Q_M04_p007EndTimeButton"
                />
              </InputBlockCell>
              <InputBlockCell margin="regular">
                <div class="text-body-3">시 사이</div>
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="차량구매지"
          target="#Q_M04_p007Button"
          :selectOnly="true"
        >
          <FormInvalid :error="state.branchError">
            <InputBlock :error="state.branchError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '서울',
                    },
                    {
                      value: '2',
                      text: '인천',
                    },
                    {
                      value: '3',
                      text: '경기북부',
                    },
                    {
                      value: '4',
                      text: '경기남부',
                    },
                    {
                      value: '5',
                      text: '경기안산',
                    },
                    {
                      value: '6',
                      text: '강원도',
                    },
                    {
                      value: '7',
                      text: '충청도',
                    },
                    {
                      value: '8',
                      text: '전라도',
                    },
                    {
                      value: '9',
                      text: '대구',
                    },
                    {
                      value: '10',
                      text: '부산',
                    },
                    {
                      value: '11',
                      text: '경상도',
                    },
                    {
                      value: '12',
                      text: '제주도',
                    },
                  ]"
                  buttonTitle="차량구매지 선택하기"
                  layerTitle="지역을 선택해 주세요"
                  id="Q_M04_p007"
                  buttonId="Q_M04_p007Button"
                />
              </InputBlockCell>
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
            <BasicButton>다음</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
