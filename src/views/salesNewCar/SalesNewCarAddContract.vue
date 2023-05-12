<script>
// NC_M04_p002
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BankSelect from '@/components/ui/form/BankSelect.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';

export default {
  components: {
    PageContents,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BasicSelect,
    BankSelect,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
  },
  setup() {
    const state = reactive({
      storeError: false,
      salespersonError: false,
      typeError: false,
      bankError: false,
      accountError: false,
    });

    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '신차모바일');
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
    <div>
      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-contents">계약자 정보</h3>

        <BasicBox>
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <!-- DD : [개인]의 경우 '이름' 출력 / [개인사업자] 혹은 [법인사업자]일 경우 '회사명' 출력 -->
              <h3 class="text-body-1 font-weight-medium">홍길동</h3>
            </BasicBoxHeadLeft>
          </BasicBoxHead>

          <KeyValue margin="regular">
            <!-- Case : [개인], [금융상품 – GM]일 경우 노출 -->
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>주민등록번호</KeyValueTitle>
              <KeyValueText>710908-1******</KeyValueText>
            </KeyValueItem>
            <!-- //Case : [개인], [금융상품 – GM]일 경우 노출 -->

            <!-- Case : [개인사업자]일 경우 노출 -->
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>대표자 이름</KeyValueTitle>
              <KeyValueText>홍길동</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>대표자 주민등록번호</KeyValueTitle>
              <KeyValueText>710908-1******</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>사업자번호</KeyValueTitle>
              <KeyValueText>123456789</KeyValueText>
            </KeyValueItem>
            <!-- //Case : [개인사업자]일 경우 노출 -->

            <!-- Case : [법인사업자]일 경우 노출 -->
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>연대보증인 이름</KeyValueTitle>
              <KeyValueText>홍길동</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>연대보증인 주민등록번호</KeyValueTitle>
              <KeyValueText>710908-1******</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>사업자번호</KeyValueTitle>
              <KeyValueText>123456789</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>법인등록번호</KeyValueTitle>
              <KeyValueText>123456789</KeyValueText>
            </KeyValueItem>
            <!-- //Case : [법인사업자]일 경우 노출 -->

            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>상담조회일자</KeyValueTitle>
              <KeyValueText>2022.10.03</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>금융상품명</KeyValueTitle>
              <KeyValueText>정상오토론</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>제조사</KeyValueTitle>
              <KeyValueText>현대</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>차종/모델명</KeyValueTitle>
              <KeyValueText>캐스퍼 / 스마트</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>차량가격</KeyValueTitle>
              <KeyValueText>13,850,000 원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>할부원금(신청금액)</KeyValueTitle>
              <KeyValueText>3,000,000 원</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>대출기간</KeyValueTitle>
              <KeyValueText>48개월</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-contents">금융 세부조건</h3>

        <!-- Case : [금융상품 – GM]일 경우 노출 -->
        <BasicButton :line="true" theme="secondary">
          출고번호 조회
        </BasicButton>
        <!-- //Case : [금융상품 – GM]일 경우 노출 -->

        <BasicBox className="row-margin-item-group">
          <KeyValue margin="regular">
            <!-- Case : '출고번호 조회' 완료 했을 경우 노출 -->
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>출고번호</KeyValueTitle>
              <KeyValueText>22049796K5</KeyValueText>
            </KeyValueItem>
            <!-- //Case : '출고번호 조회' 완료 했을 경우 노출 -->
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>금리</KeyValueTitle>
              <KeyValueText>6.4%</KeyValueText>
            </KeyValueItem>
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>기준 설정율</KeyValueTitle>
              <KeyValueText>0%</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-contents">판매점 정보</h3>

        <FormList>
          <FormListItem
            titleText="판매대리점"
            target="#salesNewCarAddContractStoreSearch"
          >
            <FormInvalid :error="state.storeError">
              <InputBlock :error="state.storeError">
                <InputBlockCell :flexible="true">
                  <BasicInput title="판매대리점" :disabled="true" />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton
                    size="mini"
                    theme="tertiary"
                    id="salesNewCarAddContractStoreSearch"
                    >검색</BasicButton
                  >
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="판매사원"
            target="#salesNewCarAddContractSalespersonSearch"
          >
            <FormInvalid :error="state.salespersonError">
              <InputBlock :error="state.salespersonError">
                <InputBlockCell :flexible="true">
                  <BasicInput title="판매사원" :disabled="true" />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton
                    size="mini"
                    theme="tertiary"
                    id="salesNewCarAddContractSalespersonSearch"
                    >검색</BasicButton
                  >
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>

        <BasicBox className="row-margin-contents">
          <KeyValue margin="regular">
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>지급수수료</KeyValueTitle>
              <KeyValueText>0.50% / 15,000 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-contents">영업사원(AG) 정보</h3>

        <BasicBox>
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h3 class="text-body-1 font-weight-medium">김사원</h3>
            </BasicBoxHeadLeft>
          </BasicBoxHead>

          <KeyValue margin="regular">
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>지급수수료</KeyValueTitle>
              <KeyValueText>0.50% / 15,000 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </section>

      <!-- Case : 상품구분 GM할부의 경우 미노출 -->
      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-contents">대금지급 정보</h3>

        <FormList>
          <FormListItem
            titleText="대금지급구분"
            target="#salesNewCarAddContractTypeButton"
            :selectOnly="true"
          >
            <FormInvalid :error="state.typeError">
              <InputBlock :error="state.typeError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '고객',
                      },
                      {
                        value: '2',
                        text: '판매대리점(가상)',
                      },
                      {
                        value: '3',
                        text: '고객(가상)',
                      },
                    ]"
                    buttonTitle="대금지급 구분 선택하기"
                    layerTitle="대금지급 구분을 선택해 주세요"
                    id="salesNewCarAddContractType"
                    buttonId="salesNewCarAddContractTypeButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="은행명"
            target="#salesNewCarAddContractBankButton"
            :selectOnly="true"
          >
            <FormInvalid :error="state.bankError">
              <InputBlock :error="state.bankError">
                <InputBlockCell :flexible="true">
                  <BankSelect
                    id="salesNewCarAddContractBank"
                    buttonId="salesNewCarAddContractBankButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="계좌번호"
            target="#salesNewCarAddContractAccount"
          >
            <FormInvalid :error="state.accountError">
              <InputBlock :error="state.accountError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    pattern="\d*"
                    title="계좌번호"
                    id="salesNewCarAddContractAccount"
                  />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton size="mini" theme="tertiary">
                    계좌확인
                  </BasicButton>
                </template>
              </InputBlock>
              <FormInvalidMessage
                >계좌번호를 다시 입력해 주세요</FormInvalidMessage
              >
              <FormHelpText>-없이 숫자만 입력해 주세요.</FormHelpText>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </section>
      <!-- //Case : 상품구분 GM할부의 경우 미노출 -->
    </div>

    <template v-slot:foot>
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton :minSide="true" :line="true" theme="quaternary"
            >취소</BasicButton
          >
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton :minSide="true" theme="secondary"
            >품의등록 요청</BasicButton
          >
        </ButtonListItem>
      </ButtonList>
    </template>
  </PageContents>
</template>
