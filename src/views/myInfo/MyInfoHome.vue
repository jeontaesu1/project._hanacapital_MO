<script>
// MI_M01_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    TextButton,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '내정보 관리');
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
        <strong>
          관리하실 정보를<br />
          선택하세요
        </strong>
      </PageMainText>
    </PageTextGroup>

    <div>
      <ul :class="[$style['logs'], $style['logs--margin-regular']]">
        <!-- Case : 채권이 없는 회원의 경우 미노출 -->
        <li :class="$style['logs__item']">
          <div :class="[$style['logs__block'], $style['logs__block--regular']]">
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 class="text-body-1 font-weight-medium">내정보 변경</h3>
              </div>
              <div :class="$style['logs__right']">
                <button type="button" :class="$style['logs__link']">
                  <span :class="$style['logs__link-text']">상세보기</span>
                </button>
              </div>
            </div>
          </div>
        </li>
        <li :class="$style['logs__item']">
          <div :class="[$style['logs__block'], $style['logs__block--regular']]">
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 class="text-body-1 font-weight-medium">
                  자동이체 계좌 변경
                </h3>
              </div>
              <div :class="$style['logs__right']">
                <button type="button" :class="$style['logs__link']">
                  <span :class="$style['logs__link-text']">상세보기</span>
                </button>
              </div>
            </div>
          </div>
        </li>
        <li :class="$style['logs__item']">
          <div :class="[$style['logs__block'], $style['logs__block--regular']]">
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 class="text-body-1 font-weight-medium">청구정보 변경</h3>
              </div>
              <div :class="$style['logs__right']">
                <button type="button" :class="$style['logs__link']">
                  <span :class="$style['logs__link-text']">상세보기</span>
                </button>
              </div>
            </div>
          </div>
        </li>
        <!-- //Case : 채권이 없는 회원의 경우 미노출 -->

        <!-- Case : 앱일 경우 미노출 -->
        <li :class="$style['logs__item']">
          <div :class="[$style['logs__block'], $style['logs__block--regular']]">
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 class="text-body-1 font-weight-medium">비밀번호 변경</h3>
              </div>
              <div :class="$style['logs__right']">
                <button type="button" :class="$style['logs__link']">
                  <span :class="$style['logs__link-text']">상세보기</span>
                </button>
              </div>
            </div>
          </div>
        </li>
        <!-- //Case : 앱일 경우 미노출 -->

        <li :class="$style['logs__item']">
          <div :class="[$style['logs__block'], $style['logs__block--regular']]">
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 class="text-body-1 font-weight-medium">하나머니</h3>
              </div>
              <div :class="$style['logs__right']">
                <button type="button" :class="$style['logs__link']">
                  <span :class="$style['logs__link-text']">상세보기</span>
                </button>
              </div>
            </div>
          </div>
        </li>

        <!-- Case : 채권이 없으며, 하나캐피탈 멤버십 회원이 아닌 경우 메뉴 미노출 -->
        <li :class="$style['logs__item']">
          <div :class="[$style['logs__block'], $style['logs__block--regular']]">
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <h3 class="text-body-1 font-weight-medium">
                  마케팅 수신 동의 변경
                </h3>
              </div>
              <div :class="$style['logs__right']">
                <button type="button" :class="$style['logs__link']">
                  <span :class="$style['logs__link-text']">상세보기</span>
                </button>
              </div>
            </div>
          </div>
        </li>
        <!-- //Case : 채권이 없으며, 하나캐피탈 멤버십 회원이 아닌 경우 메뉴 미노출 -->
      </ul>

      <div class="inline-wrap align-center row-margin-contents">
        <TextButton
          underline="true"
          theme="quaternary"
          :classNames="{ text: 'text-body-4 color-gray' }"
          >회원탈퇴</TextButton
        >
      </div>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myInfo/MyInfoHome.scss';
</style>
