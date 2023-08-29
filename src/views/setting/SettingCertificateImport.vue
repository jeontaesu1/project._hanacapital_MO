<script>
// Setting_M02_p001
import { reactive, onMounted, onUnmounted } from 'vue';

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
import BottomSticky from '@/components/ui/common/BottomSticky.vue';

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
    BottomSticky,
  },
  setup() {
    const state = reactive({
      codeError: false,
    });

    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '공동인증서 가져오기');
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
        PC에 저장된 공동인증서를<br />
        <strong>스마트폰으로 복사합니다</strong>
      </PageMainText>
    </PageTextGroup>

    <IllustObject type="certification" />

    <FormList>
      <FormListItem
        titleText="인증번호로 가져오기"
        target="#settingCertificateImportCode"
      >
        <FormInvalid :error="state.codeError">
          <InputBlock :error="state.codeError">
            <InputBlockCell :flexible="true">
              <BasicInput
                type="number"
                pattern="\d*"
                title="인증번호 앞 4자리"
                id="settingCertificateImportCode"
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
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
    </FormList>

    <section class="row-margin-contents-group">
      <h2 class="text-body-2 row-margin-item-group">진행순서</h2>
      <div :class="$style['contents-list']">
        <ol
          :class="[
            $style['contents-list__list'],
            $style['contents-list__list--senary'],
          ]"
        >
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">1</div>
              <div :class="$style['contents-list__title']">
                하나캐피탈 PC 홈페이지의<br />
                <strong class="color-green font-weight-medium"
                  >‘고객센터 > 인증센터 > 인증서 내보내기 [PC >
                  스마트폰]’</strong
                >에 접속해주세요.
              </div>
            </div>
            <div :class="[$style['contents-list__depth-4'], 'row-margin-mini']">
              <p class="text-body-4 font-weight-light color-gray-tertiary">
                (http://hanacapital.co.kr/cs/cert-center.hnc)
              </p>
            </div>
          </li>
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">2</div>
              <div :class="$style['contents-list__title']">
                ‘공동인증서 내보내기’ 버튼을 선택한 후, 인증서 비밀번호를
                입력해주세요
              </div>
            </div>
          </li>
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">3</div>
              <div :class="$style['contents-list__title']">
                PC 화면에 표시된 인증번호 8자리 입력하거나, ‘QR코드로 가져오기’
                선택하여 QR코드를 촬영해주세요.
              </div>
            </div>
          </li>
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">4</div>
              <div :class="$style['contents-list__title']">
                ‘공동인증서 가져오기’ 버튼 선택하시면 가져오기가 완료됩니다.
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <template v-slot:foot>
      <BottomSticky>
        <div class="bottom-wrap">
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton :line="true" :minSide="true"
                >QR코드로 가져오기</BasicButton
              >
            </ButtonListItem>
            <ButtonListItem>
              <BasicButton :minSide="true">공동인증서 가져오기 </BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/setting/SettingCertificateImport.scss';
</style>
