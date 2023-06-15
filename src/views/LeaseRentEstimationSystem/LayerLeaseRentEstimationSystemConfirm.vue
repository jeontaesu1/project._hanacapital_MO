<script>
// LR_M03_l001
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckObject from '@/components/ui/form/BoxCheckObject.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckObject,
    BoxCheckList,
    BoxCheckListItem,
  },
  setup() {
    const state = reactive({
      nameError: false,
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
  <UiLayer ref="layer" type="toast" :backgroundClose="true">
    <ToastPopup>
      <template v-slot:head>
        <ToastPopupHead>
          <PopupTitle>견적 확정</PopupTitle>
        </ToastPopupHead>
      </template>

      <FormList>
        <FormListItem
          titleText="고객명"
          target="#layerLeaseRentEstimationSystemConfirmName"
        >
          <FormInvalid :error="state.nameError">
            <InputBlock :error="state.nameError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="고객명"
                  id="layerLeaseRentEstimationSystemConfirmName"
                  defaultValue="홍길동"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <section class="row-margin-contents-group">
        <h3 class="text-body-2 row-margin-item-medium">견적 선택</h3>

        <BoxCheckList align="full">
          <BoxCheckListItem>
            <BoxCheck
              :contents="true"
              name="layerLeaseRentEstimationSystemConfirmCheck"
              id="layerLeaseRentEstimationSystemConfirmCheck001"
            >
              <template v-slot:left>
                <BoxCheckObject />
              </template>
              <BoxCheckLabel>
                <span class="flex-box">
                  <span class="flex-box__cell flex-1">견적 1 : 36개월</span>
                  <span class="flex-box__cell flex-box__cell--regular">
                    324,700 원
                  </span>
                </span>
              </BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :contents="true"
              name="layerLeaseRentEstimationSystemConfirmCheck"
              id="layerLeaseRentEstimationSystemConfirmCheck002"
            >
              <template v-slot:left>
                <BoxCheckObject />
              </template>
              <BoxCheckLabel>
                <span class="flex-box">
                  <span class="flex-box__cell flex-1">견적 2 : 48개월</span>
                  <span class="flex-box__cell flex-box__cell--regular">
                    419,320 원
                  </span>
                </span>
              </BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :contents="true"
              name="layerLeaseRentEstimationSystemConfirmCheck"
              id="layerLeaseRentEstimationSystemConfirmCheck003"
            >
              <template v-slot:left>
                <BoxCheckObject />
              </template>
              <BoxCheckLabel>
                <span class="flex-box">
                  <span class="flex-box__cell flex-1">견적 3 : 60개월</span>
                  <span class="flex-box__cell flex-box__cell--regular">
                    309,040 원
                  </span>
                </span>
              </BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>
      </section>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>확정하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </ToastPopup>
  </UiLayer>
</template>
