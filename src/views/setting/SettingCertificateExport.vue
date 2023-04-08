<script>
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IllustObject,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicInput,
  },
  setup() {
    const state = reactive({
      codeError: false,
    });

    const store = {
      ui: {
        common: useUiCommonStore(),
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '공동인증서 내보내기');
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
    <PageTextGroup>
      <PageMainText>
        스마트폰에 저장된 공동인증서를<br />
        <strong>PC로 복사합니다</strong>
      </PageMainText>
    </PageTextGroup>

    <IllustObject type="certification" />

    <FormList>
      <FormListItem titleText="인증번호" target="#SettingCertificateExportCode">
        <FormInvalid :error="state.codeError">
          <InputBlock :error="state.codeError">
            <InputBlockCell :flexible="true">
              <BasicInput
                type="number"
                pattern="\d*"
                title="인증번호 앞 4자리"
                id="SettingCertificateExportCode"
              />
            </InputBlockCell>
            <InputBlockCell type="sub">-</InputBlockCell>
            <InputBlockCell :flexible="true">
              <BasicInput
                type="number"
                pattern="\d*"
                title="인증번호 뒤 4자리"
              />
            </InputBlockCell>
            <template v-slot:innerRight>
              <div :class="$style['input-timer']">00:00</div>
            </template>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
    </FormList>

    <div class="row-margin-contents-group">
      <div class="text-body-3 color-black font-weight-bold">진행순서</div>
      <ul
        :class="[
          $style['contents-list'],
          $style['contents-list--normal-margin'],
          'row-margin-item-group',
        ]"
      >
        <li :class="$style['contents-list__item']">
          <div
            :class="[
              $style['contents-list__symbol'],
              $style['contents-list__symbol--square-small'],
            ]"
          >
            1
          </div>
          <div :class="[$style['contents-list__content'], 'text-body-3']">
            PC에서 하나캐피탈 홈페이지<br />
            <span class="color-green">‘인증센터 > 공동인증서 가져오기’ </span>에
            접속해주세요.
            <div :class="$style['sub']">
              (http://hanacapital.co.kr/cs/cert-center.hnc)
            </div>
          </div>
        </li>
        <li :class="$style['contents-list__item']">
          <div
            :class="[
              $style['contents-list__symbol'],
              $style['contents-list__symbol--square-small'],
            ]"
          >
            2
          </div>
          <div :class="[$style['contents-list__content'], 'text-body-3']">
            ‘공동인증서 가져오기‘ 버튼을 선택하여 App에 표시된 인증번호 8자리를
            입력해주세요.
          </div>
        </li>
        <li :class="$style['contents-list__item']">
          <div
            :class="[
              $style['contents-list__symbol'],
              $style['contents-list__symbol--square-small'],
            ]"
          >
            3
          </div>
          <div :class="[$style['contents-list__content'], 'text-body-3']">
            ‘공동인증서 가져오기’ 버튼을 선택하시면 PC로 인증서 내보내기가
            완료됩니다.
          </div>
        </li>
      </ul>
    </div>

    <template v-slot:foot>
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton>확인</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/setting/SettingCertificateExport.scss';
</style>
