ss
<script>
// Q_M06_l001
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
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
    PopupButton,
    FullPopup,
    FullPopupHead,
    PopupTitle,
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
      addressError001: false,
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
          <PopupTitle>아파트 시세 검색</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <section>
        <h3 class="text-title-2">지역 정보</h3>

        <FormList class="row-margin-contents">
          <FormListItem
            titleText="시/도"
            target="#q_M06_l001_areaButton001"
            :selectOnly="true"
          >
            <FormInvalid :error="state.addressError001">
              <InputBlock :error="state.addressError001">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '서울특별시',
                      },
                      {
                        value: '2',
                        text: '경기도',
                      },
                      {
                        value: '3',
                        text: '부산광역시',
                      },
                      {
                        value: '4',
                        text: '대구광역시',
                      },
                      {
                        value: '5',
                        text: '인천광역시',
                      },
                      {
                        value: '6',
                        text: '광주광역시',
                      },
                      {
                        value: '7',
                        text: '대전광역시',
                      },
                      {
                        value: '8',
                        text: '울산광역시',
                      },
                      {
                        value: '9',
                        text: '세종특별자치시',
                      },
                      {
                        value: '10',
                        text: '강원도',
                      },
                      {
                        value: '11',
                        text: '충청북도',
                      },
                      {
                        value: '12',
                        text: '충청남도',
                      },
                      {
                        value: '13',
                        text: '전라북도',
                      },
                      {
                        value: '14',
                        text: '전라남도',
                      },
                      {
                        value: '15',
                        text: '경상북도',
                      },
                      {
                        value: '16',
                        text: '경상남도',
                      },
                      {
                        value: '17',
                        text: '제주특별자치도',
                      },
                    ]"
                    buttonTitle="시/도 선택하기"
                    layerTitle="시/도를 선택해 주세요"
                    id="q_M06_l001_area001"
                    buttonId="q_M06_l001_areaButton001"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </section>
    </FullPopup>
  </UiLayer>
</template>
