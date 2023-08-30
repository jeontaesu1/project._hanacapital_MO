<script>
// BF_M04_l016
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PopupButton,
    StepProgress,
    PageTextGroup,
    PageMainText,
    BasicBox,
    NoticeText,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
    ButtonList,
    ButtonListItem,
    BasicButton,
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
          <PopupTitle>온라인약정</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
        <StepProgress :total="5" :current="2" />
      </template>

      <PageTextGroup>
        <PageMainText>
          아현 푸르지오 클라시티 V1에 대하여<br />
          <strong>승계를 신청하시겠습니까?</strong>
        </PageMainText>
      </PageTextGroup>

      <BasicBox>
        <ol
          :class="[
            $style['basic-list'],
            $style['basic-list--medium-margin'],
            'row-margin-item-regular',
          ]"
        >
          <li
            :class="[
              $style['basic-list__item'],
              'color-gray-tertiary',
              'font-weight-regular',
              'text-body-3',
            ]"
          >
            <div :class="$style['basic-list__symbol']">1.</div>
            <div :class="$style['basic-list__content']">
              손님의 동의 하에 승계 후 이용자 또는 승계 후 이용자로부터 위임을
              받은 신청인에게 승계 계약관련 분양/금융정보가 제공됩니다.
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'color-gray-tertiary',
              'font-weight-regular',
              'text-body-3',
            ]"
          >
            <div :class="$style['basic-list__symbol']">2.</div>
            <div :class="$style['basic-list__content']">
              관련 정보 제공 동의는 승계절차 완료 또는 계약종결시점 종료되며,
              중도에 정보제공동의 철회가 가능합니다.
            </div>
          </li>
        </ol>

        <NoticeText>
          정보제공 동의를 거부하실 수 있으나, 거부 시 승계진행이 불가할 수
          있습니다.
        </NoticeText>
      </BasicBox>

      <div class="row-margin-contents">
        <CheckBox
          id="layerMyLoanOnlineContractIntermediateSuccessionAgree001"
          theme="tertiary"
        >
          <CheckBoxObject />
          <CheckBoxLabelText>
            승계 계약관련 정보제공에 동의하십니까?
          </CheckBoxLabelText>
        </CheckBox>
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">이전</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>다음</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractIntermediateSuccessionAgree.scss';
</style>
