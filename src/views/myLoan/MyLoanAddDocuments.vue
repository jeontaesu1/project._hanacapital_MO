<script>
// My_M07_l002
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';

import IconImg from '@/assets/images/icon/img.svg?component';
import IconImgColor from '@/assets/images/icon/img-color.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BottomSticky,

    IconImg,
    IconImgColor,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '서류등록');
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
          심사서류를<br />
          등록해 주세요.
        </strong>
      </PageMainText>
    </PageTextGroup>

    <!-- Case : 서류등록 상담/대출정보가 없는 경우 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">
        서류 등록 가능한<br />
        상담/대출정보가 없습니다.
      </p>
    </div>
    <!-- //Case : 서류등록 상담/대출정보가 없는 경우 -->

    <!-- Case : 서류등록 상담/대출정보가 있는 경우 -->
    <div :class="$style['upload-button']">
      <input
        type="file"
        id="myLoanAddDocuments"
        :class="$style['upload-button__input']"
      />
      <label for="myLoanAddDocuments" :class="$style['upload-button__label']">
        <span :class="$style['upload-button__img']">
          <IconImg />
        </span>
        <span :class="$style['upload-button__text']">파일 첨부</span>
      </label>
    </div>

    <div :class="[$style['upload-file'], 'row-margin-contents']">
      <ul :class="$style['upload-file__list']">
        <li :class="$style['upload-file__item']">
          <div :class="$style['upload-file__icon']">
            <IconImgColor />
          </div>
          <div :class="$style['upload-file__content']">
            <div :class="$style['upload-file__name']">첨부파일명.jpg</div>
          </div>
          <div :class="$style['upload-file__button']">
            <BasicButton :line="true" theme="quaternary" size="mini">
              삭제
            </BasicButton>
          </div>
        </li>
        <li :class="$style['upload-file__item']">
          <div :class="$style['upload-file__icon']">
            <IconImgColor />
          </div>
          <div :class="$style['upload-file__content']">
            <div :class="$style['upload-file__name']">
              첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명.jpeg
            </div>
          </div>
          <div :class="$style['upload-file__button']">
            <BasicButton :line="true" theme="quaternary" size="mini">
              삭제
            </BasicButton>
          </div>
        </li>
      </ul>
    </div>

    <ul :class="[$style['basic-list'], 'row-margin-contents']">
      <li :class="$style['basic-list__item']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          파일형식은 이미지 파일만 가능합니다.
        </div>
      </li>
      <li :class="$style['basic-list__item']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          최대 5개까지만 등록 가능합니다.
        </div>
      </li>
      <li :class="$style['basic-list__item']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          추가적인 서류등록을 원하실 경우 등록 완료 후 다시 서류 등록 메뉴에서
          추가 등록 해주시기 바랍니다.
        </div>
      </li>
      <li :class="$style['basic-list__item']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          고객님께서 제출하신 서류는 본 금융거래 이외의 다른 목적으로 사용되지
          않습니다.
        </div>
      </li>
    </ul>
    <!-- //Case : 서류등록 상담/대출정보가 있는 경우 -->

    <template v-slot:foot>
      <BottomSticky>
        <div class="bottom-wrap">
          <!-- Case : 서류등록 상담/대출정보가 없는 경우 -->
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton>확인</BasicButton>
            </ButtonListItem>
          </ButtonList>
          <!-- //Case : 서류등록 상담/대출정보가 없는 경우 -->

          <!-- Case : 서류등록 상담/대출정보가 있는 경우 -->
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton :line="true" theme="quaternary">
                서류등록 내역
              </BasicButton>
            </ButtonListItem>
            <ButtonListItem>
              <BasicButton>등록</BasicButton>
            </ButtonListItem>
          </ButtonList>
          <!-- //Case : 서류등록 상담/대출정보가 있는 경우 -->
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/MyLoanAddDocuments.scss';
</style>
