<script>
// IF_M11_l004
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';
import ContentsButton from '@/components/ui/button/ContentsButton.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IconArrow from '@/assets/images/icon/dropdown.svg?component';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PopupButton,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BasicHr,
    SearchButton,
    ContentsButton,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    RoundStatus,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    TextButton,
    IconArrow,
  },
  setup() {
    const layer = ref(null);

    return {
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
          <PopupTitle>제휴회사 조회</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <div>
        <BoxCheckList>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="layerInventoryFinanceCheckAffiliateListType"
              id="layerInventoryFinanceCheckAffiliateListType001"
              :defaultChecked="true"
            >
              <BoxCheckLabel>성명/상호</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="layerInventoryFinanceCheckAffiliateListType"
              id="layerInventoryFinanceCheckAffiliateListType002"
            >
              <BoxCheckLabel>주민/사업자번호</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>

        <InputBlock
          type="search"
          :classNames="{
            wrap: 'row-margin-contents',
          }"
        >
          <InputBlockCell :flexible="true">
            <BasicInput
              type="search"
              title="검색어 입력"
              placeholder="검색어 입력"
            />
          </InputBlockCell>
          <InputBlockCell type="search">
            <SearchButton />
          </InputBlockCell>
        </InputBlock>
      </div>

      <!-- Case : 검색 후 노출 -->
      <BasicHr className="row-margin-container-medium" />

      <div class="contents-wrap">
        <!-- Case : 검색 결과 없을 때 -->
        <div :class="$style['empty']">
          <p :class="$style['empty__text']">검색된 내역이 없습니다.</p>
        </div>
        <!-- // Case : 검색 결과 없을 때 -->

        <!-- Case : 검색 결과 있을 때 -->
        <ul class="reset-list">
          <li class="row-margin-item-group">
            <ContentsButton>
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <h3 class="text-body-1 font-weight-medium">
                    현대자동차매매상사
                  </h3>
                  <p class="text-body-4 color-gray row-margin-small">
                    514-11-*****
                  </p>
                </BasicBoxHeadLeft>
                <BasicBoxHeadRight>
                  <RoundStatus
                    theme="secondary"
                    :classNames="{ wrap: 'display-block' }"
                    >개인사업자</RoundStatus
                  >
                </BasicBoxHeadRight>
              </BasicBoxHead>

              <KeyValue margin="regular">
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>본사</KeyValueTitle>
                  <KeyValueText>
                    <span class="color-black">매매상사(중고차)</span>
                  </KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </ContentsButton>
          </li>
          <li class="row-margin-item-group">
            <ContentsButton>
              <BasicBoxHead>
                <BasicBoxHeadLeft>
                  <h3 class="text-body-1 font-weight-medium">
                    하노로유통(에스엔비에너지)
                  </h3>
                  <p class="text-body-4 color-gray row-margin-small">
                    741129-*******
                  </p>
                </BasicBoxHeadLeft>
                <BasicBoxHeadRight>
                  <RoundStatus
                    theme="secondary"
                    :classNames="{ wrap: 'display-block' }"
                    >개인</RoundStatus
                  >
                </BasicBoxHeadRight>
              </BasicBoxHead>

              <KeyValue margin="regular">
                <KeyValueItem
                  :classNames="{
                    item: 'text-body-3',
                  }"
                >
                  <KeyValueTitle>지점</KeyValueTitle>
                  <KeyValueText>
                    <span class="color-black">판매대리점</span>
                  </KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </ContentsButton>
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
        <!-- // Case : 검색 결과 있을 때 -->
      </div>
      <!-- // Case : 검색 후 노출 -->
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/inventoryFinanceCheck/LayerInventoryFinanceCheckAffiliateList.scss';
</style>
