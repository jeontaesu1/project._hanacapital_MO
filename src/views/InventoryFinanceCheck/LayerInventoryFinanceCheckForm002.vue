<script>
// IF_M11_l002
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicTextarea from '@/components/ui/form/BasicTextarea.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BasicBox,
    FormList,
    FormListItem,
    FormInvalid,
    InputBlock,
    InputBlockCell,
    FormInvalidMessage,
    BasicInput,
    BasicTextarea,
    NoticeText,
  },
  setup() {
    const state = reactive({
      areaError: false,
      reasonError: false,
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
          <PopupTitle>실사정보입력</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <BasicBox theme="senary">
        <h3 class="text-body-1 font-weight-medium">115너4527</h3>
        <p class="text-body-4 color-gray row-margin-small">
          K5 하이브리드(DL3) 트렌디
        </p>
      </BasicBox>

      <div class="row-margin-contents-group">
        <FormList>
          <FormListItem
            titleText="전시위치"
            :require="true"
            :forceFocus="true"
            target="#layerInventoryFinanceCheckForm002Area"
          >
            <FormInvalid :error="state.areaError">
              <InputBlock :error="state.areaError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="전시위치"
                    placeholder="위치를 입력해 주세요"
                    id="layerInventoryFinanceCheckForm002Area"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <BasicTextarea
            :error="state.reasonError"
            titleText="내용"
            title="내용"
          >
            <template v-slot:bottom>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </template>
          </BasicTextarea>
        </FormList>

        <NoticeText :classNames="{ wrap: 'row-margin-item-group' }">
          주의 : 사진 촬영 시 단말기를 좌측으로 눕혀서 진행해주세요.
        </NoticeText>
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true">사진촬영</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>저장</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
