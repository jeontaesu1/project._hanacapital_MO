<script>
// LM_M01_p001
import { ref, reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import FilterButton from '@/components/ui/button/FilterButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import LayerLMBlogLoanCounselingFilter from '@/views/lmBlog/LayerLMBlogLoanCounselingFilter.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    PageSubText,
    StepProgress,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicButton,
    BasicHr,
    StickyBar,
    BoxCheckList,
    BoxCheckListItem,
    BoxCheck,
    BoxCheckLabel,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    FilterButton,
    LayerLMBlogLoanCounselingFilter,
    ButtonList,
    ButtonListItem,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      nameError: false,
      birthdayError: false,
      phoneError: false,
    });

    const layer = ref(null);

    const layerOpen = (e = {}) => {
      layer.value.layer.open(e.target);
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '대출상담');
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
      layer,
      layerOpen,
    };
  },
};
</script>

<template>
  <PageContents>
    <template v-slot:head>
      <StickyBar>
        <StepProgress :total="3" :current="1" />
      </StickyBar>
    </template>

    <PageTextGroup>
      <div class="flex-box align-items-start row-margin-item">
        <div class="flex-box__cell flex-1">
          <PageMainText>
            신용정보조회동의 여부를<br />
            확인하세요
          </PageMainText>
        </div>
        <div class="flex-box__cell flex-box__cell--medium">
          <BasicButton size="small" :line="true">직장검색</BasicButton>
        </div>
      </div>
      <PageSubText>
        대출상담은 적법한 절차에 의해 모집한 고객만 등록 가능 합니다. 모집
        과정에서 불법정보 활용 시 대출모집인 모범규준 및 당사 내규에 따라 계약
        해지될 수 있으니 유의하시길 바랍니다.
      </PageSubText>
    </PageTextGroup>

    <div>
      <section class="row-margin-contents">
        <h3 class="text-body-2 row-margin-item-group">
          본 고객은 적법한 절차에 의해 모집한 고객임을 확인합니다.
        </h3>
        <BoxCheckList>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="lMBlogLoanCounselingCheck"
              id="lMBlogLoanCounselingCheck001"
              :defaultChecked="true"
            >
              <BoxCheckLabel>아니오</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="lMBlogLoanCounselingCheck"
              id="lMBlogLoanCounselingCheck002"
            >
              <BoxCheckLabel>예</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>
      </section>

      <FormList>
        <FormListItem titleText="이름" target="#lMBlogLoanCounselingName">
          <FormInvalid :error="state.nameError">
            <InputBlock :error="state.nameError">
              <InputBlockCell :flexible="true">
                <BasicInput title="이름" id="lMBlogLoanCounselingName" />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="생년월일"
          target="#lMBlogLoanCounselingBirthday"
        >
          <FormInvalid :error="state.birthdayError">
            <InputBlock :error="state.birthdayError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="생년월일"
                  id="lMBlogLoanCounselingBirthday"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
            <FormHelpText>숫자만 입력해 주세요. (예:900123)</FormHelpText>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="휴대폰번호"
          target="#lMBlogLoanCounselingPhone"
        >
          <FormInvalid :error="state.phoneError">
            <InputBlock :error="state.phoneError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  pattern="\d*"
                  title="휴대폰번호"
                  id="lMBlogLoanCounselingPhone"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <div class="row-margin-contents-group">
        <!-- s: 250219 수정 -->
        <h4 class="text-body-4 color-gray row-margin-item">
          신용정보조회 동의 URL 발송
        </h4>
        <ButtonList className="row-margin-top-none">
          <ButtonListItem>
            <BasicButton theme="tertiary">신용대출</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton theme="secondary">주택담보대출</BasicButton>
          </ButtonListItem>
        </ButtonList>
        <!-- e:// 250219 수정 -->
      </div>
    </div>

    <BasicHr className="row-margin-container" />

    <section class="contents-wrap">
      <div class="flex-box row-margin-contents">
        <div class="flex-box__cell flex-1">
          <h3 class="text-title-2">신용정보조회 동의내역</h3>
        </div>
        <div class="flex-box__cell flex-box__cell--medium">
          <!-- Case : 조회 필터 입력 전 -->
          <FilterButton @click="layerOpen" />
          <!-- // Case : 조회 필터 입력 전 -->

          <!-- Case : 조회 필터 입력 후 -->
          <FilterButton :active="true" @click="layerOpen" />
          <!-- // Case : 조회 필터 입력 후 -->
        </div>
      </div>

      <!-- Case : 결과 없을 때 -->
      <div :class="$style['empty']">
        <p :class="$style['empty__text']">조회된 결과가 없습니다.</p>
      </div>
      <!-- // Case : 결과 없을 때 -->

      <!-- Case : 결과 있을 때 -->
      <ul class="reset-list">
        <li class="row-margin-item-group">
          <BasicBox>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>이름</KeyValueTitle>
                <KeyValueText> 김하나 </KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>생년월일</KeyValueTitle>
                <KeyValueText>920101-2******</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>휴대폰</KeyValueTitle>
                <KeyValueText>010-1234-5678</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>등록일자</KeyValueTitle>
                <KeyValueText> 2022.11.09 </KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <BasicButton
              tagName="RouterLink"
              size="small"
              to="/lm-blog/loan-counseling-form"
              :classNames="{
                wrap: 'row-margin-contents-small',
              }"
            >
              고객정보입력
            </BasicButton>
          </BasicBox>
        </li>
        <!-- s: 250219 추가 -->
        <li class="row-margin-item-group">
          <BasicBox>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <div :class="[$style['step__top'], 'row-margin-none']">
                  <div :class="$style['step__badge-secondary']">
                    주택담보대출
                  </div>
                </div>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>이름</KeyValueTitle>
                <KeyValueText> 김하나 </KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>생년월일</KeyValueTitle>
                <KeyValueText>920101-2******</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>휴대폰</KeyValueTitle>
                <KeyValueText>010-1234-5678</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>등록일자</KeyValueTitle>
                <KeyValueText> 2022.11.09 </KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <BasicButton
              tagName="RouterLink"
              size="small"
              to="/lm-blog/loan-counseling-form"
              :classNames="{
                wrap: 'row-margin-contents-small',
              }"
            >
              고객정보입력
            </BasicButton>
          </BasicBox>
        </li>
        <!-- e:// 250219 추가 -->
        <li class="row-margin-item-group">
          <BasicBox>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>이름</KeyValueTitle>
                <KeyValueText> 김하나 </KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>생년월일</KeyValueTitle>
                <KeyValueText>920101-2******</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>휴대폰</KeyValueTitle>
                <KeyValueText>010-1234-5678</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </li>
      </ul>
      <!-- // Case : 결과 있을 때 -->
    </section>

    <LayerLMBlogLoanCounselingFilter ref="layer" />
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/lmBlog/LMBlogLoanCounseling.scss';
@import '@/assets/scss/components/import/step.scss';
</style>
