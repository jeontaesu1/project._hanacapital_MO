<script>
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormList from '@/components/ui/form/FormList.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import KeyValueList from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

import IconArrow from '@/assets/images/icon/dropdown.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    FormListItem,
    FormInvalid,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormInvalidMessage,
    FormList,
    BasicButton,
    BasicBox,
    BasicBoxHead,
    KeyValueList,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicHr,
    IconArrow,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      testError001: false,
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '재고금융 추가서류등록');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => ['menu']);
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
        서류를 등록할 상품을<br />
        <strong>선택해 주세요</strong>
      </PageMainText>
    </PageTextGroup>

    <div>
      <FormList>
        <FormListItem
          titleText="차량번호"
          target="#InventoryFinanceAddDocumentsInput001"
        >
          <FormInvalid :error="state.testError001">
            <InputBlock :error="state.testError001">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="차량번호"
                  id="InventoryFinanceAddDocumentsInput001"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <div class="row-margin-contents-group">
        <BasicButton :line="true">조회</BasicButton>
      </div>
    </div>

    <BasicHr className="row-margin-container-medium" />

    <div>
      <h3 class="text-title-2 row-margin-contents">조회정보</h3>

      <!-- DD: 재고금융 추가서류등록_내역 없는 경우 -->
      <div :class="$style['empty']">
        <p :class="$style['empty__text']">신청현황이 없습니다.</p>
      </div>

      <!-- DD: 재고금융 추가서류등록 -->
      <div>
        <BasicBox class="row-margin-item-group">
          <BasicBoxHead>
            <KeyValueList direction="vertical">
              <div :class="$style['board__title']">
                <p :class="$style['board__title-text']">10나 8941</p>
              </div>
              <div
                :class="[
                  $style['board__text'],
                  'font-weight-regular',
                  'color-gray',
                ]"
              >
                쏘나타 하이브리드(DN8) 스파이더
              </div>
            </KeyValueList>
          </BasicBoxHead>
          <KeyValueList margin="regular">
            <KeyValueItem>
              <KeyValueTitle>대출실행금액</KeyValueTitle>
              <KeyValueText> 3,500,000 원 </KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>상담일자</KeyValueTitle>
              <KeyValueText> 2022.12.21 </KeyValueText>
            </KeyValueItem>
          </KeyValueList>

          <BasicButton size="small" class="row-margin-item-group">
            구비서류 추가등록
          </BasicButton>
        </BasicBox>

        <BasicBox class="row-margin-item-group">
          <BasicBoxHead>
            <KeyValueList direction="vertical">
              <div :class="$style['board__title']">
                <p :class="$style['board__title-text']">10나 8941</p>
              </div>
              <div
                :class="[
                  $style['board__text'],
                  'font-weight-regular',
                  'color-gray',
                ]"
              >
                쏘나타 하이브리드(DN8) 스파이더
              </div>
            </KeyValueList>
          </BasicBoxHead>
          <KeyValueList margin="regular">
            <KeyValueItem>
              <KeyValueTitle>대출실행금액</KeyValueTitle>
              <KeyValueText> 3,500,000 원 </KeyValueText>
            </KeyValueItem>
            <KeyValueItem>
              <KeyValueTitle>상담일자</KeyValueTitle>
              <KeyValueText> 2022.12.21 </KeyValueText>
            </KeyValueItem>
          </KeyValueList>

          <BasicButton size="small" class="row-margin-item-group">
            구비서류 추가등록
          </BasicButton>
        </BasicBox>
      </div>
    </div>

    <button
      type="button"
      :class="[$style['text-button'], 'row-margin-item-group']"
    >
      <span :class="$style['text-button__text']">더보기</span>
      <span :class="$style['text-button__icon']">
        <IconArrow />
      </span>
    </button>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/inventory-finance/InventoryFinanceAddDocuments.scss';
</style>
