<script>
// IF_M11_p001
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';

import IconArrow from '@/assets/images/icon/dropdown.svg?component';

export default {
  components: {
    PageContents,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    TextButton,
    BasicHr,
    BoxCheckList,
    BoxCheckListItem,
    BoxCheck,
    BoxCheckLabel,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BasicSelect,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicBoxHeadRight,
    RoundStatus,
    IconArrow,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      departmentError: false,
      branchError001: false,
      branchError002: false,
      searchError001: false,
      searchError002: false,
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '재고금융실사');
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
    <BasicBox className="row-margin-contents-group">
      <div class="flex-box">
        <div class="flex-box__cell flex-1">
          <p class="text-body-3">간편한 등록을 원하신다면?</p>
        </div>
        <div class="flex-box__cell flex-box__cell--medium">
          <BasicButton size="mini">실사촬영</BasicButton>
        </div>
      </div>
    </BasicBox>

    <div>
      <FormList>
        <!-- DD : 계정의 취급부서 자동 입력 -->
        <FormListItem
          titleText="취급부서"
          target="#inventoryFinanceCheckHomeDepartment"
          :disabled="true"
        >
          <FormInvalid :error="state.departmentError">
            <InputBlock :error="state.departmentError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="취급부서"
                  defaultValue="재고관리부"
                  :disabled="true"
                  id="inventoryFinanceCheckHomeDepartment"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- // DD : 계정의 취급부서 자동 입력 -->

        <FormListItem
          titleText="제휴점"
          target="#inventoryFinanceCheckHomeBranch001Search"
        >
          <FormInvalid :error="state.branchError001">
            <InputBlock :error="state.branchError001">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="제휴점"
                  defaultValue="현대자동차매매상사"
                  :disabled="true"
                  id="inventoryFinanceCheckHomeBranch001"
                />
              </InputBlockCell>
              <template v-slot:right>
                <BasicButton
                  size="mini"
                  theme="tertiary"
                  id="inventoryFinanceCheckHomeBranch001Search"
                  >검색</BasicButton
                >
              </template>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="매매상사"
          target="#inventoryFinanceCheckHomeBranchButton002"
          :selectOnly="true"
        >
          <FormInvalid :error="state.branchError002">
            <InputBlock :error="state.branchError002">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '전체',
                    },
                    {
                      value: '2',
                      text: '$제휴점 > 매매상사명$',
                    },
                  ]"
                  buttonTitle="매매상사 선택하기"
                  layerTitle="매매상사를 선택해 주세요"
                  id="inventoryFinanceCheckHomeBranch002"
                  buttonId="inventoryFinanceCheckHomeBranchButton002"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="검색조건" :forceFocus="true">
          <FormInvalid :error="state.searchError001">
            <BoxCheckList>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="inventoryFinanceCheckHomeSearch001"
                  id="inventoryFinanceCheckHomeSearch001_001"
                  :defaultChecked="true"
                >
                  <BoxCheckLabel>차량번호</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="inventoryFinanceCheckHomeSearch001"
                  id="inventoryFinanceCheckHomeSearch001_002"
                >
                  <BoxCheckLabel>채권번호</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="검색어"
          target="#inventoryFinanceCheckHomeSearch002"
        >
          <FormInvalid :error="state.searchError002">
            <InputBlock :error="state.searchError002">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="검색어"
                  id="inventoryFinanceCheckHomeSearch002"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <ButtonList
        :classNames="{
          wrap: 'row-margin-contents-group',
        }"
      >
        <ButtonListItem>
          <BasicButton :line="true" theme="quaternary">초기화</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton :line="true">검색</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </div>

    <!-- Case : 검색 후 노출 -->
    <BasicHr className="row-margin-container-medium" />

    <div class="contents-wrap">
      <!-- Case : 검색내역이 없을 경우 -->
      <div :class="$style['empty']">
        <p :class="$style['empty__text']">검색된 내역이 없습니다.</p>
      </div>
      <!-- //Case : 검색내역이 없을 경우 -->

      <!-- Case : 검색내역 있을 경우 -->
      <ul class="reset-list">
        <li class="row-margin-item-group">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-body-1 font-weight-medium">180주8300</h3>
                <p class="text-body-4 color-gray row-margin-small">
                  K5 하이브리드(DL3) 노블레스
                </p>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <RoundStatus
                  :classNames="{ wrap: 'display-block' }"
                  theme="nonary"
                >
                  실사필요
                </RoundStatus>
              </BasicBoxHeadRight>
            </BasicBoxHead>

            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>실행일</KeyValueTitle>
                <KeyValueText>2022.09.22</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>제휴점</KeyValueTitle>
                <KeyValueText>퍼펌승</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>매매상사</KeyValueTitle>
                <KeyValueText>퍼펌승</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>실사기한</KeyValueTitle>
                <KeyValueText>2022.10.06</KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <div class="row-margin-contents-small">
              <ButtonList
                :classNames="{
                  wrap: 'row-margin-none',
                }"
              >
                <ButtonListItem>
                  <BasicButton :line="true" size="small"
                    >미실사 사유등록</BasicButton
                  >
                </ButtonListItem>
                <ButtonListItem>
                  <BasicButton :line="true" size="small">실사등록</BasicButton>
                </ButtonListItem>
              </ButtonList>
              <ButtonList
                :classNames="{
                  wrap: 'row-margin-item',
                }"
              >
                <ButtonListItem>
                  <BasicButton size="small" :disabled="true"
                    >이미지 보기</BasicButton
                  >
                </ButtonListItem>
              </ButtonList>
            </div>
          </BasicBox>
        </li>

        <li class="row-margin-item-group">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-body-1 font-weight-medium">180주8300</h3>
                <p class="text-body-4 color-gray row-margin-small">
                  K5 하이브리드(DL3) 노블레스
                </p>
              </BasicBoxHeadLeft>
            </BasicBoxHead>

            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>실행일</KeyValueTitle>
                <KeyValueText>2022.09.22</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>제휴점</KeyValueTitle>
                <KeyValueText>퍼펌승</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>매매상사</KeyValueTitle>
                <KeyValueText>퍼펌승</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>실사기한</KeyValueTitle>
                <KeyValueText>2022.10.06</KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <div class="row-margin-contents-small">
              <ButtonList
                :classNames="{
                  wrap: 'row-margin-none',
                }"
              >
                <ButtonListItem>
                  <BasicButton :line="true" size="small"
                    >미실사 사유등록</BasicButton
                  >
                </ButtonListItem>
                <ButtonListItem>
                  <BasicButton :line="true" size="small">실사등록</BasicButton>
                </ButtonListItem>
              </ButtonList>
              <ButtonList
                :classNames="{
                  wrap: 'row-margin-item',
                }"
              >
                <ButtonListItem>
                  <BasicButton size="small">이미지 보기</BasicButton>
                </ButtonListItem>
              </ButtonList>
            </div>
          </BasicBox>
        </li>
      </ul>

      <div class="inline-wrap align-center row-margin-item-group">
        <TextButton :classNames="{ wrap: 'text-body-4 color-gray' }">
          더보기
          <template v-slot:rightIcon>
            <IconArrow />
          </template>
        </TextButton>
      </div>
      <!-- //Case : 검색내역 있을 경우 -->
    </div>
    <!-- //Case : 검색 후 노출 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/inventoryFinanceCheck/InventoryFinanceCheckHome.scss';
</style>
