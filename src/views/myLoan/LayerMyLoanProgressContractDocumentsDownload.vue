<script>
// My_M03_l028
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import IconPdfColor from '@/assets/images/icon/pdf-color.svg?component';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IconPdfColor,
  },
  setup() {
    const state = reactive({
      nameError: false,
      birthDateError: false,
    });

    const layer = ref(null);

    return {
      state,
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
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <!-- Case : 단건일 때 && 내용 없을 때 -->
        <PageMainText>
          계약관련 서류를 받아보실<br />
          방법을 선택해 주세요
        </PageMainText>
        <!-- // Case : 단건일 때 && 내용 없을 때 -->

        <!-- Case : 다건일 때 -->
        <PageMainText>
          조회하실 계약관련 서류를<br />
          선택해 주세요
        </PageMainText>
        <!-- // Case : 다건일 때 -->
      </PageTextGroup>

      <!-- Case : 단건일 때 -->
      <ButtonList
        align="full"
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton theme="quaternary" :line="true">E-mail 전송</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton theme="quaternary" :line="true">내용보기</BasicButton>
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 단건일 때 -->

      <!-- Case : 다건일 때 -->
      <div :class="$style['upload-file']">
        <ul :class="$style['upload-file__list']">
          <li :class="$style['upload-file__item']">
            <div :class="$style['upload-file__icon']">
              <IconPdfColor />
            </div>
            <div :class="$style['upload-file__content']">
              <div :class="$style['upload-file__name']">서류명 01.pdf</div>
            </div>
            <div :class="$style['upload-file__button']">
              <BasicButton :line="true" theme="quaternary" size="mini">
                내용보기
              </BasicButton>
            </div>
          </li>
          <li :class="$style['upload-file__item']">
            <div :class="$style['upload-file__icon']">
              <IconPdfColor />
            </div>
            <div :class="$style['upload-file__content']">
              <div :class="$style['upload-file__name']">서류명 02.pdf</div>
            </div>
            <div :class="$style['upload-file__button']">
              <BasicButton :line="true" theme="quaternary" size="mini">
                내용보기
              </BasicButton>
            </div>
          </li>
          <li :class="$style['upload-file__item']">
            <div :class="$style['upload-file__icon']">
              <IconPdfColor />
            </div>
            <div :class="$style['upload-file__content']">
              <div :class="$style['upload-file__name']">서류명 03.pdf</div>
            </div>
            <div :class="$style['upload-file__button']">
              <BasicButton :line="true" theme="quaternary" size="mini">
                내용보기
              </BasicButton>
            </div>
          </li>
        </ul>
      </div>
      <!-- // Case : 다건일 때 -->

      <!-- Case : 내용 없을 때 -->
      <div :class="$style['empty']">
        <p :class="$style['empty__text']">계약 관련 서류가 없습니다.</p>
      </div>
      <!-- // Case : 내용 없을 때 -->
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanProgressContractDocumentsDownload.scss';
</style>
