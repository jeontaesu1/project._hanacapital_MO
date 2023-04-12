<script>
// IF_M05_p001
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
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValueList from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

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
    ButtonList,
    ButtonListItem,
    BasicButton,
    BasicBox,
    KeyValueList,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicHr,
    TextButton,
    IconArrow,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      numberError: false,
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '재고금융 추가서류등록');
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
          target="#inventoryFinanceAddDocumentsNumber"
        >
          <FormInvalid :error="state.numberError">
            <InputBlock :error="state.numberError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="차량번호"
                  id="inventoryFinanceAddDocumentsNumber"
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

    <section>
      <h3 class="text-title-2 row-margin-contents">신청현황</h3>

      <!-- Case : 내역 없는 경우 -->
      <div :class="$style['empty']">
        <p :class="$style['empty__text']">신청현황이 없습니다.</p>
      </div>
      <!-- // Case : 내역 없는 경우 -->

      <!-- Case : 내역 있을 경우 -->
      <ul class="reset-list">
        <li class="row-margin-item-group">
          <BasicBox>
            <div>
              <h3 class="text-body-1 font-weight-medium">10나 8941</h3>
              <p class="text-body-4 color-gray row-margin-small">
                쏘나타 하이브리드(DN8) 스파이더
              </p>
            </div>
            <BasicHr
              theme="quaternary"
              type="contents"
              className="row-margin-contents-small"
            />
            <KeyValueList margin="regular">
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>대출실행금액</KeyValueTitle>
                <KeyValueText>3,500,000 원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>상담일자</KeyValueTitle>
                <KeyValueText>2022.12.21</KeyValueText>
              </KeyValueItem>
            </KeyValueList>

            <ButtonList
              :classNames="{
                wrap: 'row-margin-contents-small',
              }"
            >
              <ButtonListItem>
                <BasicButton size="small">구비서류 추가등록</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </BasicBox>
        </li>
        <li class="row-margin-item-group">
          <BasicBox>
            <div>
              <h3 class="text-body-1 font-weight-medium">10나 8941</h3>
              <p class="text-body-4 color-gray row-margin-small">
                쏘나타 하이브리드(DN8) 스파이더
              </p>
            </div>
            <BasicHr
              theme="quaternary"
              type="contents"
              className="row-margin-contents-small"
            />
            <KeyValueList margin="regular">
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>대출실행금액</KeyValueTitle>
                <KeyValueText>3,500,000 원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem :classNames="{ item: 'text-body-3' }">
                <KeyValueTitle>상담일자</KeyValueTitle>
                <KeyValueText>2022.12.21</KeyValueText>
              </KeyValueItem>
            </KeyValueList>

            <ButtonList
              :classNames="{
                wrap: 'row-margin-contents-small',
              }"
            >
              <ButtonListItem>
                <BasicButton size="small">구비서류 추가등록</BasicButton>
              </ButtonListItem>
            </ButtonList>
          </BasicBox>
        </li>
      </ul>
      <!-- // Case : 내역 있을 경우 -->
    </section>

    <div class="inline-wrap align-center row-margin-item-group">
      <TextButton :classNames="{ wrap: 'text-body-4 color-gray' }">
        더보기
        <template v-slot:rightIcon>
          <IconArrow />
        </template>
      </TextButton>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/inventory-finance/InventoryFinanceAddDocuments.scss';
</style>
