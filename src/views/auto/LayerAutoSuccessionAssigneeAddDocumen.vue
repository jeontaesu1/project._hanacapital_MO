<script>
// AF_M07_l016
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    StepProgress,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    NoticeText,
    ButtonList,
    ButtonListItem,
    BasicButton,
  },
  setup() {
    const layer = ref(null);
    const state = reactive({
      numberError: false,
    });

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
        <StepProgress :total="5" :current="5" />
      </template>

      <PageTextGroup>
        <PageMainText>
          심사서류를<br />
          <strong>등록해주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <section>
        <h3 class="text-body-2 row-margin-item-group">심사서류 안내</h3>
        <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              외국인 : 국내거소사실증명원, 국내거소신고증(앞/뒤면)
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              렌터카 임직원 상품 승계 시 임직원 증빙자료를 꼭 등록해주세요.
            </div>
          </li>
        </ul>
      </section>

      <div class="row-margin-contents-group">
        <CheckBox
          id="layerAutoSuccessionAssigneeAddDocumenCheck"
          theme="tertiary"
          :defaultChecked="true"
          :classNames="{ wrap: 'row-margin-item-medium' }"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>팩스 접수 예약하기</CheckBoxLabelText>
        </CheckBox>

        <BoxCheckList>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="layerAutoSuccessionAssigneeAddDocumenType"
              id="layerAutoSuccessionAssigneeAddDocumenType1"
              :defaultChecked="true"
            >
              <BoxCheckLabel>07.23</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="layerAutoSuccessionAssigneeAddDocumenType"
              id="layerAutoSuccessionAssigneeAddDocumenType2"
            >
              <BoxCheckLabel>07.24</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="layerAutoSuccessionAssigneeAddDocumenType"
              id="layerAutoSuccessionAssigneeAddDocumenType3"
            >
              <BoxCheckLabel>07.25</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>

        <FormList :classNames="{ wrap: 'row-margin-contents' }">
          <FormListItem
            titleText="팩스발송번호"
            target="#layerAutoSuccessionAssigneeAddDocumenNumber"
          >
            <FormInvalid :error="state.numberError">
              <InputBlock :error="state.numberError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="팩스발송번호"
                    id="layerAutoSuccessionAssigneeAddDocumenNumber"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>

        <NoticeText :classNames="{ wrap: 'row-margin-item' }">
          접수 예정일/팩스 발송번호가 상이할 경우 서류 확인이 어렵습니다.
        </NoticeText>
        <NoticeText :classNames="{ wrap: 'row-margin-item' }"
          >하나캐피탈 팩스번호(02-2037-XXXX)</NoticeText
        >
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton theme="secondary">다음</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/LayerAutoSuccessionAssigneeAddDocumen.scss';
</style>
