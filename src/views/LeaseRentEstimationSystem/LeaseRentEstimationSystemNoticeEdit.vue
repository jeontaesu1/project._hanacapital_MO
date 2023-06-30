<script>
// LR_M05_p004
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BasicTextarea from '@/components/ui/form/BasicTextarea.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import IconFile from '@/assets/images/icon/file.svg?component';
import IconImgColor from '@/assets/images/icon/img-color.svg?component';

export default {
  components: {
    PageContents,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BoxCheckList,
    BoxCheckListItem,
    BoxCheck,
    BoxCheckLabel,
    BasicTextarea,
    FormHelpText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IconFile,
    IconImgColor,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      titleError: false,
      exposureError: false,
      reasonError: false,
      explanationError001: false,
      explanationError002: false,
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '공지사항(즉시출고)');
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
        titleText="제목"
        target="#leaseRentEstimationSystemNoticeEditTitle"
      >
        <FormInvalid :error="state.titleError">
          <InputBlock :error="state.titleError">
            <InputBlockCell :flexible="true">
              <BasicInput
                title="견적 제목"
                id="leaseRentEstimationSystemNoticeEditTitle"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem titleText="노출" :forceFocus="true">
        <FormInvalid :error="state.exposureError">
          <BoxCheckList>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="leaseRentEstimationSystemNoticeEditExposure"
                id="leaseRentEstimationSystemNoticeEditExposure001"
              >
                <BoxCheckLabel>표시</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="leaseRentEstimationSystemNoticeEditExposure"
                id="leaseRentEstimationSystemNoticeEditExposure002"
                :defaultChecked="true"
              >
                <BoxCheckLabel>중지</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <BasicTextarea :error="state.reasonError" titleText="내용" title="내용" />
    </FormList>

    <section class="row-margin-contents-group">
      <h3 class="text-body-2 row-margin-item-medium">파일첨부</h3>

      <div class="flex-box">
        <div class="flex-box__cell flex-1">
          <div :class="$style['upload-button']">
            <input
              type="file"
              id="leaseRentEstimationSystemNoticeEditImage001"
              :class="$style['upload-button__input']"
            />
            <label
              for="leaseRentEstimationSystemNoticeEditImage001"
              :class="$style['upload-button__label']"
            >
              <span :class="$style['upload-button__text']">이미지 첨부</span>
            </label>
          </div>
        </div>
        <div class="flex-box__cell flex-1">
          <div :class="$style['upload-button']">
            <input
              type="file"
              id="leaseRentEstimationSystemNoticeEditPD001"
              :class="$style['upload-button__input']"
            />
            <label
              for="leaseRentEstimationSystemNoticeEditPDF001"
              :class="$style['upload-button__label']"
            >
              <span :class="$style['upload-button__text']">파일 첨부</span>
            </label>
          </div>
        </div>
      </div>

      <!-- Case : 첨부 후  -->
      <div class="flex-box">
        <div class="flex-box__cell flex-1">
          <div :class="$style['upload-button']">
            <input
              type="file"
              id="leaseRentEstimationSystemNoticeEditImage002"
              :class="$style['upload-button__input']"
              :disabled="true"
            />
            <label
              for="leaseRentEstimationSystemNoticeEditImage002"
              :class="$style['upload-button__label']"
            >
              <span :class="$style['upload-button__text']">이미지 첨부</span>
            </label>
          </div>
        </div>
        <div class="flex-box__cell flex-1">
          <div :class="$style['upload-button']">
            <input
              type="file"
              id="leaseRentEstimationSystemNoticeEditPDF002"
              :class="$style['upload-button__input']"
              :disabled="true"
            />
            <label
              for="leaseRentEstimationSystemNoticeEditPDF002"
              :class="$style['upload-button__label']"
            >
              <span :class="$style['upload-button__text']">파일 첨부</span>
            </label>
          </div>
        </div>
      </div>

      <!-- Case : 파일 등록 시 노출 -->
      <div class="row-margin-contents">
        <div
          :class="[
            $style['upload-file'],
            'row-margin-item-group',
            'row-margin-bottom-none',
          ]"
        >
          <div :class="$style['upload-file__list']">
            <div :class="$style['upload-file__item']">
              <div :class="$style['upload-file__icon']">
                <IconFile />
              </div>
              <div :class="$style['upload-file__content']">
                <div :class="$style['upload-file__name']">첨부파일명.txt</div>
              </div>
              <div :class="$style['upload-file__button']">
                <BasicButton line="true" theme="quaternary" size="mini">
                  삭제
                </BasicButton>
              </div>
            </div>
          </div>
        </div>
        <!-- // Case : 파일 등록 시 노출 -->

        <!-- Case : 이미지 등록 시 노출(이미지 2개 첨부 시) -->
        <div
          :class="[
            $style['upload-file'],
            'row-margin-item-group',
            'row-margin-bottom-none',
          ]"
        >
          <div :class="$style['upload-file__list']">
            <div :class="$style['upload-file__item']">
              <div :class="$style['upload-file__icon']">
                <IconImgColor />
              </div>
              <div :class="$style['upload-file__content']">
                <div :class="$style['upload-file__name']">첨부파일명.jpg</div>
              </div>
              <div :class="$style['upload-file__button']">
                <BasicButton line="true" theme="quaternary" size="mini">
                  삭제
                </BasicButton>
              </div>
            </div>
          </div>
        </div>

        <FormList :classNames="{ wrap: 'row-margin-item-medium' }">
          <BasicTextarea
            :error="state.explanationError001"
            titleText="이미지 설명"
            :maxlength="100"
            :count="true"
            title="이미지 설명"
          >
            <template v-slot:bottom>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>100자 이내로 작성해 주세요</FormHelpText>
            </template>
          </BasicTextarea>
        </FormList>
        <!--// Case : 이미지 등록 시 노출(이미지 2개 첨부 시) -->

        <div
          :class="[
            $style['upload-file'],
            'row-margin-item-group',
            'row-margin-bottom-none',
          ]"
        >
          <div :class="$style['upload-file__list']">
            <div :class="$style['upload-file__item']">
              <div :class="$style['upload-file__icon']">
                <IconImgColor />
              </div>
              <div :class="$style['upload-file__content']">
                <div :class="$style['upload-file__name']">
                  첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명_첨부파일명.jpeg
                </div>
              </div>
              <div :class="$style['upload-file__button']">
                <BasicButton line="true" theme="quaternary" size="mini">
                  삭제
                </BasicButton>
              </div>
            </div>
          </div>
        </div>

        <FormList :classNames="{ wrap: 'row-margin-item-medium' }">
          <BasicTextarea
            :error="state.explanationError002"
            titleText="이미지 설명"
            :maxlength="100"
            :count="true"
            title="이미지 설명"
          >
            <template v-slot:bottom>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>100자 이내로 작성해 주세요</FormHelpText>
            </template>
          </BasicTextarea>
        </FormList>
      </div>
      <!-- // Case : 첨부 후  -->

      <ul :class="[$style['basic-list'], 'row-margin-contents']">
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            이미지 파일은 jpg, jpge, png, gif 형식만 가능합니다.
          </div>
        </li>
      </ul>
    </section>

    <template v-slot:foot>
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton>입력하기</BasicButton>
        </ButtonListItem>
      </ButtonList>

      <!-- Case : 게시물 수정 접근 시 노출 -->
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton>수정하기</BasicButton>
        </ButtonListItem>
      </ButtonList>
      <!-- // Case : 게시물 수정 접근 시 노출 -->
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemNoticeEdit.scss';
</style>
