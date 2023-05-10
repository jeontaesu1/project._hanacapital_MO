<script>
// MI_M01_p009
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import ImgSample from '@/assets/images/_dummy/sample-gnb.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    BasicButton,
    ButtonList,
    ButtonListItem,

    ImgSample,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '하나머니');
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
        언제 어디서나<br />
        <strong><span class="color-green">하나머니</span>로 편리하게</strong>
      </PageMainText>
    </PageTextGroup>

    <div>
      <div :class="$style['authority']">
        <ul :class="$style['authority__list']">
          <li :class="$style['authority__item']">
            <div :class="$style['authority__icon']">
              <ImgSample />
            </div>
            <div :class="$style['authority__contents']">
              <div :class="$style['authority__head']">
                <div :class="$style['authority__title']">포인트 전환</div>
              </div>
              <div :class="$style['authority__text']">
                포인트 전환으로 혜택은 더 크게<br />
                제휴사 포인트, 마일리지를 한 번에 조회/전환
              </div>
            </div>
          </li>
          <li :class="$style['authority__item']">
            <div :class="$style['authority__icon']">
              <ImgSample />
            </div>
            <div :class="$style['authority__contents']">
              <div :class="$style['authority__head']">
                <div :class="$style['authority__title']">바로충전</div>
              </div>
              <div :class="$style['authority__text']">
                머니가 부족하면 바로충전<br />
                계좌/카드를 통해 충전해서 편리하게
              </div>
            </div>
          </li>
          <li :class="$style['authority__item']">
            <div :class="$style['authority__icon']">
              <ImgSample />
            </div>
            <div :class="$style['authority__contents']">
              <div :class="$style['authority__head']">
                <div :class="$style['authority__title']">현금화</div>
              </div>
              <div :class="$style['authority__text']">
                현금이 필요할 땐 현금화<br />
                현금으로 ATM 출금 또는 내 계좌로 입금
              </div>
            </div>
          </li>
          <li :class="$style['authority__item']">
            <div :class="$style['authority__icon']">
              <ImgSample />
            </div>
            <div :class="$style['authority__contents']">
              <div :class="$style['authority__head']">
                <div :class="$style['authority__title']">바코드 결제</div>
              </div>
              <div :class="$style['authority__text']">
                쉽고 빠른 바코드 결제<br />
                하나머니 가맹점에서 바로 결제
              </div>
            </div>
          </li>
          <li :class="$style['authority__item']">
            <div :class="$style['authority__icon']">
              <ImgSample />
            </div>
            <div :class="$style['authority__contents']">
              <div :class="$style['authority__head']">
                <div :class="$style['authority__title']">무료송금</div>
              </div>
              <div :class="$style['authority__text']">
                안전한 무료송금을 무제한으로<br />
                빠르고 간편하게 다양한 송금 가능
              </div>
            </div>
          </li>
          <li :class="$style['authority__item']">
            <div :class="$style['authority__icon']">
              <ImgSample />
            </div>
            <div :class="$style['authority__contents']">
              <div :class="$style['authority__head']">
                <div :class="$style['authority__title']">더치페이</div>
              </div>
              <div :class="$style['authority__text']">
                자동으로 계산하고 요청하는 더치페이<br />
                계산부터 송금까지 깔끔하게 해결
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div :class="[$style['image-view'], 'row-margin-contents-group']">
        <img src="@/assets/images/_dummy/box-detail.png" alt="샘플 이미지" />
      </div>
    </div>

    <template v-slot:foot>
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton>하나머니 가입하기</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myInfo/MyInfoJoinHanaMoney.scss';
</style>
