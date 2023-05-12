<script>
// MI_M01_p006
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    PageContents,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    BasicButton,
    ButtonList,
    ButtonListItem,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '마케팅 수신 동의 변경');
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
    <div>
      <section class="row-margin-container-medium">
        <div class="row-margin-contents">
          <h3 class="text-title-2">하나캐피탈 마케팅 수신 동의</h3>
          <p
            class="text-body-3 font-weight-light color-gray-tertiary row-margin-small"
          >
            하나캐피탈에서 발송하는 마케팅을 위한 전화, 문자, 메시지, 우편,
            이메일에 대한 수신동의를 설정하실 수 있습니다.
          </p>
        </div>

        <BasicBox>
          <BasicBoxHead align="top">
            <BasicBoxHeadLeft>
              <CheckBox id="myInfoMarketingAgree001All">
                <CheckBoxObject />
                <CheckBoxLabelText>전체 수신</CheckBoxLabelText>
              </CheckBox>
            </BasicBoxHeadLeft>
          </BasicBoxHead>

          <div :class="$style['check-list']">
            <ul :class="$style['check-list__list']">
              <li :class="$style['check-list__item']">
                <CheckBox id="myInfoMarketingAgree001_001" theme="quinary">
                  <CheckBoxObject />
                  <CheckBoxLabelText>전화</CheckBoxLabelText>
                </CheckBox>
              </li>
              <li :class="$style['check-list__item']">
                <CheckBox id="myInfoMarketingAgree001_002" theme="quinary">
                  <CheckBoxObject />
                  <CheckBoxLabelText>문자메시지</CheckBoxLabelText>
                </CheckBox>
              </li>
              <li :class="$style['check-list__item']">
                <CheckBox id="myInfoMarketingAgree001_003" theme="quinary">
                  <CheckBoxObject />
                  <CheckBoxLabelText>우편</CheckBoxLabelText>
                </CheckBox>
              </li>
              <li :class="$style['check-list__item']">
                <CheckBox id="myInfoMarketingAgree001_004" theme="quinary">
                  <CheckBoxObject />
                  <CheckBoxLabelText>이메일</CheckBoxLabelText>
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
              <BasicButton size="small">확인</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </BasicBox>
      </section>

      <section class="row-margin-container-medium">
        <div class="row-margin-contents">
          <h3 class="text-title-2">하나캐피탈 멤버십 수신 동의</h3>
          <p
            class="text-body-3 font-weight-light color-gray-tertiary row-margin-small"
          >
            하나캐피탈 멤버십에서 발송하는 마케팅을 위한 전화, 문자메시지,
            이메일, App Push에 대한 수신동의를 설정할 수 있습니다.
          </p>
        </div>

        <BasicBox>
          <BasicBoxHead align="top">
            <BasicBoxHeadLeft>
              <CheckBox id="myInfoMarketingAgree002All">
                <CheckBoxObject />
                <CheckBoxLabelText>전체 수신</CheckBoxLabelText>
              </CheckBox>
            </BasicBoxHeadLeft>
          </BasicBoxHead>

          <div :class="$style['check-list']">
            <ul :class="$style['check-list__list']">
              <li :class="$style['check-list__item']">
                <CheckBox id="myInfoMarketingAgree002_001" theme="quinary">
                  <CheckBoxObject />
                  <CheckBoxLabelText>전화</CheckBoxLabelText>
                </CheckBox>
              </li>
              <li :class="$style['check-list__item']">
                <CheckBox id="myInfoMarketingAgree002_002" theme="quinary">
                  <CheckBoxObject />
                  <CheckBoxLabelText>문자메시지</CheckBoxLabelText>
                </CheckBox>
              </li>
              <li :class="$style['check-list__item']">
                <CheckBox id="myInfoMarketingAgree002_003" theme="quinary">
                  <CheckBoxObject />
                  <CheckBoxLabelText>우편</CheckBoxLabelText>
                </CheckBox>
              </li>
              <li :class="$style['check-list__item']">
                <CheckBox id="myInfoMarketingAgree002_004" theme="quinary">
                  <CheckBoxObject />
                  <CheckBoxLabelText>이메일</CheckBoxLabelText>
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
              <BasicButton size="small">확인</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </BasicBox>
      </section>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myInfo/MyInfoMarketing.scss';
</style>
