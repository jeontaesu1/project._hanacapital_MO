<script>
// LR_M02_p005
import { onMounted, onUnmounted, reactive } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BankSelect from '@/components/ui/form/BankSelect.vue';

export default {
  components: {
    PageContents,
    BasicBox,
    BasicButton,
    FormList,
    FormListItem,
    FormInvalid,
    BasicSelect,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicInput,
    SearchButton,
    BasicHr,
    BankSelect,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      affiliateError: false,
      brandError: false,
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '선구매');
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
          <div class="text-body-3">선구매 차량을 등록하시겠습니까?</div>
        </div>
        <div class="flex-box__cell">
          <BasicButton theme="secondary" size="mini">등록</BasicButton>
        </div>
      </div>
    </BasicBox>

    <InputBlock type="search">
      <InputBlockCell :flexible="true">
        <BasicInput
          type="search"
          title="제휴사 명칭"
          placeholder="제휴사 명칭 입력"
        />
      </InputBlockCell>
      <InputBlockCell type="search">
        <SearchButton />
      </InputBlockCell>
    </InputBlock>

    <FormList :classNames="{ wrap: 'row-margin-contents' }">
      <FormListItem
        titleText="제휴사"
        target="#leaseRentEstimationSystemPrePurchaseAffiliate"
      >
        <FormInvalid :error="state.affiliateError">
          <InputBlock :error="state.affiliateError">
            <InputBlockCell :flexible="true">
              <BasicSelect
                :option="[
                  {
                    value: '1',
                    text: '하나 3디협동조합',
                  },
                  {
                    value: '2',
                    text: '하나CCTV',
                  },
                  {
                    value: '3',
                    text: '하나SHC',
                  },
                ]"
                buttonTitle="제휴사 선택하기"
                layerTitle="제휴사를 선택해 주세요"
                buttonId="leaseRentEstimationSystemPrePurchaseAffiliate"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>

      <FormListItem
        titleText="브랜드"
        target="#leaseRentEstimationSystemPrePurchaseBrandButton"
        :selectOnly="true"
      >
        <FormInvalid :error="state.brandError">
          <InputBlock :error="state.brandError">
            <InputBlockCell :flexible="true">
              <BankSelect
                id="leaseRentEstimationSystemPrePurchaseBrand"
                buttonId="leaseRentEstimationSystemPrePurchaseBrandButton"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
    </FormList>

    <div>// 자동차 선택 버튼 영역</div>

    <BasicHr className="row-margin-contents" />
  </PageContents>
</template>
