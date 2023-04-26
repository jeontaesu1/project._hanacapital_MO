<script>
// Setting_M02_p003
import { onMounted, onUnmounted } from 'vue';

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
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';

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
    InputBlock,
    InputBlockCell,
  },
  setup() {
    const store = {
      ui: {
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
      <FormListItem titleText="인증번호" :forceFocus="true">
        <InputBlock>
          <InputBlockCell :flexible="true">1234</InputBlockCell>
          <InputBlockCell type="sub">-</InputBlockCell>
          <InputBlockCell :flexible="true">5678</InputBlockCell>
          <template v-slot:innerRight>
            <div :class="$style['input-timer']">00:00</div>
          </template>
        </InputBlock>
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
                PC에서 하나캐피탈 홈페이지<br />
                <strong class="color-green font-weight-medium"
                  >‘인증센터 > 공동인증서 가져오기’</strong
                >
                에 접속해주세요.
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
                ‘공동인증서 가져오기‘ 버튼을 선택하여 App에 표시된 인증번호
                8자리를 입력해주세요.
              </div>
            </div>
          </li>
          <li :class="$style['contents-list__item']">
            <div :class="$style['contents-list__head']">
              <div :class="$style['contents-list__symbol']">3</div>
              <div :class="$style['contents-list__title']">
                ‘공동인증서 가져오기’ 버튼을 선택하시면 PC로 인증서 내보내기가
                완료됩니다.
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>

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
