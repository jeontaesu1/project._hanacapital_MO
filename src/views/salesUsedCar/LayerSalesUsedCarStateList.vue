<script>
// UC_M01_l001
import { ref } from 'vue';
import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    BasicHr,
    InputBlock,
    InputBlockCell,
    BasicInput,
    SearchButton,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
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
          <PopupTitle>매매상사 약정 현황 조회</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <div>
        <BoxCheckList :classNames="{ wrap: 'row-margin-contents' }">
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="layerSalesUsedCarStateListType"
              id="layerSalesUsedCarStateListType001"
              :defaultChecked="true"
            >
              <BoxCheckLabel>성명/상호</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="layerSalesUsedCarStateListType"
              id="layerSalesUsedCarStateListType002"
            >
              <BoxCheckLabel>주민/사업자번호</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>
        <InputBlock type="search">
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
        <p class="text-body-4 font-weight-light color-gray-secondary">
          <strong class="font-weight-medium color-green">0</strong> 건
        </p>
        <BasicHr
          theme="quaternary"
          type="contents"
          className="row-margin-item-medium"
        />

        <!-- Case : 결과 없을 때 -->
        <div :class="$style['empty']">
          <p :class="$style['empty__text']">검색된 결과가 없습니다.</p>
        </div>
        <!-- Case : 결과 없을 때 -->

        <!-- Case : 결과 있을 때 -->
        <ul :class="$style['address-list']">
          <!-- Case : 사업자 -->
          <li :class="$style['address-list__item']">
            <div :class="$style['address-list__block']">
              <div :class="$style['address-list__title']">유니모터스최동식</div>
              <KeyValue align="left" margin="mini" size="medium">
                <KeyValueItem :classNames="{ item: 'text-body-4' }">
                  <KeyValueTitle>사업자번호</KeyValueTitle>
                  <KeyValueText>210-91-12345</KeyValueText>
                </KeyValueItem>
                <KeyValueItem :classNames="{ item: 'text-body-4' }">
                  <KeyValueTitle>할부약정여부</KeyValueTitle>
                  <KeyValueText>Y</KeyValueText>
                </KeyValueItem>
              </KeyValue>
              <button type="button" :class="$style['address-list__button']">
                <span class="for-a11y">선택</span>
              </button>
            </div>
          </li>
          <!-- // Case : 사업자 -->

          <!-- Case : 소유자 -->
          <li :class="$style['address-list__item']">
            <div :class="$style['address-list__block']">
              <div :class="$style['address-list__title']">홍길동</div>
              <KeyValue align="left" margin="mini" size="medium">
                <KeyValueItem :classNames="{ item: 'text-body-4' }">
                  <KeyValueTitle>주민등록번호</KeyValueTitle>
                  <KeyValueText>920101-2******</KeyValueText>
                </KeyValueItem>
                <KeyValueItem :classNames="{ item: 'text-body-4' }">
                  <KeyValueTitle>할부약정여부</KeyValueTitle>
                  <KeyValueText>Y</KeyValueText>
                </KeyValueItem>
              </KeyValue>
              <button type="button" :class="$style['address-list__button']">
                <span class="for-a11y">선택</span>
              </button>
            </div>
          </li>
          <!-- // Case : 소유자 -->
        </ul>
        <!-- // Case : 결과 있을 때 -->
      </div>
      <!-- // Case : 검색 후 노출 -->
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/salesUsedCar/LayerSalesUsedCarStateList.scss';
</style>
