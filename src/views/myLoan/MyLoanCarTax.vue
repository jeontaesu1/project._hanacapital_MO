<script>
// My_M01_p006
import { ref, onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';

export default {
  components: {
    PageContents,
    BasicButton,
    ButtonList,
    ButtonListItem,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        header: useUiHeaderStore(),
      },
    };

    const alert = ref(null);
    const layerTest003 = ref(null);
    const layerOpenTest003 = (e = {}) => {
      layerTest003.value.open(e.target);
    };
    undefined;
    const alertOpen = (options) => {
      alert.value.open(options);
    };
    onMounted(() => {
      // optional : html 태그에 클래스 추가
      store.ui.common.setRootClassName('page-optional-class');

      // optional : 헤더 구성 변경
      store.ui.header.setTitle(() => '범칙금');
      store.ui.header.setLeftButtons(() => []);
      store.ui.header.setRightButtons(() => [
        {
          name: 'close',
          onClick: () => alert('닫기 클릭'),
        },
      ]);
    });

    onUnmounted(() => {
      // optional : html 태그에 클래스 리셋
      store.ui.common.setRootClassName();

      // optional : 헤더 구성 설정 값 리셋
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
    });

    return {
      alert,
      alertOpen,

      layerTest003,
      layerOpenTest003,
    };
  },
};
</script>

<template>
  <PageContents>
    <template v-slot:head>contents head</template>

    <ul :class="$style['logs']">
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div div :class="$style['logs__contents']">
              <KeyValue align="left" size="regular" margin="mini">
                <KeyValueItem :classNames="{ item: 'text-body-4' }">
                  <KeyValueTitle>납부기한</KeyValueTitle>
                  <KeyValueText>2021.08.04 12:22</KeyValueText>
                </KeyValueItem>

                <KeyValueItem :classNames="{ item: 'text-body-4' }">
                  <KeyValueTitle>과세금액</KeyValueTitle>
                  <KeyValueText>29,000 원</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </div>
            <div div :class="$style['logs__right']">
              <button
                type="button"
                :class="$style['logs__link']"
                @click="layerOpenTest003"
              >
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div div :class="$style['logs__contents']">
              <KeyValue align="left" size="regular" margin="mini">
                <KeyValueItem :classNames="{ item: 'text-body-4' }">
                  <KeyValueTitle>납부기한</KeyValueTitle>
                  <KeyValueText>2021.08.04 12:22</KeyValueText>
                </KeyValueItem>

                <KeyValueItem :classNames="{ item: 'text-body-4' }">
                  <KeyValueTitle>과세금액</KeyValueTitle>
                  <KeyValueText>29,000 원</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </div>
            <div div :class="$style['logs__right']">
              <button type="button" :class="$style['logs__link']">
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div div :class="$style['logs__contents']">
              <KeyValue align="left" size="regular" margin="mini">
                <KeyValueItem :classNames="{ item: 'text-body-4' }">
                  <KeyValueTitle>납부기한</KeyValueTitle>
                  <KeyValueText>2021.08.04 12:22</KeyValueText>
                </KeyValueItem>

                <KeyValueItem :classNames="{ item: 'text-body-4' }">
                  <KeyValueTitle>과세금액</KeyValueTitle>
                  <KeyValueText>29,000 원</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </div>
            <div div :class="$style['logs__right']">
              <button
                type="button"
                :class="$style['logs__link']"
                @click="layer003pen"
              >
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>
        </div>
      </li>
      <li :class="$style['logs__item']">
        <div :class="$style['logs__block']">
          <div :class="$style['logs__row']">
            <div div :class="$style['logs__contents']">
              <KeyValue align="left" size="regular" margin="mini">
                <KeyValueItem :classNames="{ item: 'text-body-4' }">
                  <KeyValueTitle>납부기한</KeyValueTitle>
                  <KeyValueText>2021.08.04 12:22</KeyValueText>
                </KeyValueItem>

                <KeyValueItem :classNames="{ item: 'text-body-4' }">
                  <KeyValueTitle>과세금액</KeyValueTitle>
                  <KeyValueText>29,000 원</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </div>
            <div div :class="$style['logs__right']">
              <button
                type="button"
                :class="$style['logs__link']"
                @click="layer001Open"
              >
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <!-- <div :class="$style['empty']">
      <p :class="$style['empty__text']">조회 결과가 없습니다.</p>
    </div> -->
    <UiLayer ref="layerTest003" type="toast-fix" v-slot="layerSlotProps">
      <ToastPopup :fix="true">
        <template v-slot:head>
          <ToastPopupHead>
            <PopupTitle>자동차세 상세보기</PopupTitle>
            <!-- <PopupSubTitle>서브 타이틀 및 텍스트</PopupSubTitle> -->
          </ToastPopupHead>
        </template>

        <KeyValue>
          <KeyValueItem>
            <KeyValueTitle>상품명</KeyValueTitle>
            <KeyValueText>운용리스 20고5678 (정상)</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>차량명</KeyValueTitle>
            <KeyValueText
              >펠리세이드 디젤 2.2 4WD (액세서리 변경) 프레스티지 (7인승)
              자동</KeyValueText
            >
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>차량번호</KeyValueTitle>
            <KeyValueText>65다2918</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>관할기관</KeyValueTitle>
            <KeyValueText>모톤길탈틱타</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>자동차세</KeyValueTitle>
            <KeyValueText>29,000 원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem>
            <KeyValueTitle>납부기한</KeyValueTitle>
            <KeyValueText>2021.08.04</KeyValueText>
          </KeyValueItem>
        </KeyValue>

        <template v-slot:foot>
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton
                :line="true"
                theme="quaternary"
                @click="layerSlotProps.close()"
                >Button 1</BasicButton
              >
            </ButtonListItem>
            <ButtonListItem>
              <BasicButton @click="layerSlotProps.close()"
                >Button 2</BasicButton
              >
            </ButtonListItem>
          </ButtonList>
        </template>
      </ToastPopup>
    </UiLayer>

    <template v-slot:foot>
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton>조회</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/MyLoanPenalty.scss';
</style>
