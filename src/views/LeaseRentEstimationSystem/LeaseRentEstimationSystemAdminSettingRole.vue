<script>
// LR_M05_p009
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import DeleteButton from '@/components/ui/button/DeleteButton.vue';

export default {
  components: {
    PageContents,
    FormList,
    FormListItem,
    FormInvalid,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormInvalidMessage,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicHr,
    BasicBox,
    DeleteButton,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      idError: false,
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '관리 지정');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });

    return {
      state,
    };
  },
};
</script>

<template>
  <PageContents>
    <FormList>
      <FormListItem
        titleText="아이디"
        target="#leaseRentEstimationSystemAdminSettingRoleId"
        :class="$style['appoint-wrap']"
      >
        <FormInvalid :error="state.idError">
          <InputBlock :error="state.idError">
            <InputBlockCell
              :flexible="true"
              :class="$style['appoint-wrap-input']"
            >
              <BasicInput
                title="아이디"
                id="leaseRentEstimationSystemAdminSettingRoleId"
              />
            </InputBlockCell>
            <template v-slot:right>
              <div class="flex-box">
                <div class="flex-box__cell">
                  <BasicButton
                    size="mini"
                    theme="tertiary"
                    :class="$style['appoint-btn']"
                    >조회</BasicButton
                  >
                </div>
                <div class="flex-box__cell">
                  <BasicButton
                    size="mini"
                    theme="quaternary"
                    :class="$style['appoint-btn']"
                    :line="true"
                  >
                    초기화
                  </BasicButton>
                </div>
              </div>
            </template>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
    </FormList>

    <BasicHr className="row-margin-container-medium" />

    <BasicBox>
      <div :class="$style['check-list']">
        <ul :class="$style['check-list__list']">
          <li :class="$style['check-list__item']">
            <CheckBox
              id="leaseRentEstimationSystemAdminSettingRoleCheck001"
              theme="quinary"
            >
              <CheckBoxObject />
              <CheckBoxLabelText>관리자</CheckBoxLabelText>
            </CheckBox>
          </li>
          <li :class="$style['check-list__item']">
            <CheckBox
              id="leaseRentEstimationSystemAdminSettingRoleCheck002"
              theme="quinary"
            >
              <CheckBoxObject />
              <CheckBoxLabelText>시승차 허용</CheckBoxLabelText>
            </CheckBox>
          </li>
          <li :class="$style['check-list__item']">
            <CheckBox
              id="leaseRentEstimationSystemAdminSettingRoleCheck003"
              theme="quinary"
            >
              <CheckBoxObject />
              <CheckBoxLabelText>선구매 제한</CheckBoxLabelText>
            </CheckBox>
          </li>
          <li :class="$style['check-list__item']">
            <CheckBox
              id="leaseRentEstimationSystemAdminSettingRoleCheck004"
              theme="quinary"
            >
              <CheckBoxObject />
              <CheckBoxLabelText>렌트 제한</CheckBoxLabelText>
            </CheckBox>
          </li>
          <li :class="$style['check-list__item']">
            <CheckBox
              id="leaseRentEstimationSystemAdminSettingRoleCheck005"
              theme="quinary"
            >
              <CheckBoxObject />
              <CheckBoxLabelText>리스 제한</CheckBoxLabelText>
            </CheckBox>
          </li>
          <li :class="$style['check-list__item']">
            <CheckBox
              id="leaseRentEstimationSystemAdminSettingRoleCheck006"
              theme="quinary"
            >
              <CheckBoxObject />
              <CheckBoxLabelText>할부 제한</CheckBoxLabelText>
            </CheckBox>
          </li>
          <li :class="$style['check-list__item']">
            <CheckBox
              id="leaseRentEstimationSystemAdminSettingRoleCheck007"
              theme="quinary"
            >
              <CheckBoxObject />
              <CheckBoxLabelText>중고리스 허용</CheckBoxLabelText>
            </CheckBox>
          </li>
        </ul>
      </div>

      <ButtonList
        :classNames="{
          wrap: 'row-margin-contents-small',
        }"
      >
        <ButtonListItem>
          <BasicButton size="small">권한 설정</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </BasicBox>

    <!-- Case : 아이디 조회 시 노출 -->
    <section class="row-margin-container-medium">
      <h3 class="text-title-2 row-margin-contents">등록된 권한 리스트</h3>

      <ul class="reset-list">
        <li v-for="i in 5" :key="i" class="row-margin-item-group">
          <BasicBox>
            <div class="flex-box row-margin-small">
              <div class="flex-box__cell flex-1">
                <div class="text-body-1 font-weight-medium">A10000</div>
              </div>
              <div class="flex-box__cell flex-box__cell--small">
                <DeleteButton theme="secondary" />
              </div>
            </div>
            <div :class="$style['division-info']">
              <ul :class="$style['division-info__list']">
                <li :class="[$style['division-info__item'], 'flex-none']">
                  <div class="text-body-4 font-weight-light">김하나</div>
                </li>
                <li :class="$style['division-info__item']">
                  <div class="text-body-4 font-weight-light ellipsis">
                    DT리빌드 TFT 팀 이름이 길어지면 이렇게 표시
                  </div>
                </li>
              </ul>
            </div>
            <div class="text-body-4 row-margin-small">
              관리자 권한, 선구매 등록, 시승차 견적 허용, 중고 리스 허용
            </div>
          </BasicBox>
        </li>
      </ul>
    </section>
    <!-- // Case : 아이디 조회 시 노출 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/inventoryFinance/LeaseRentEstimationSystemAdminSettingRole.scss';
</style>
