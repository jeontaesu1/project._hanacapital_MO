<script>
// NC_M04_l001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    FullPopup,
    FullPopupHead,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    BasicHr,
    SearchButton,
    NoticeText,
    TextButton,
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
          <PopupTitle>판매점 검색</PopupTitle>
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
              name="layerSalesNewCarAddContractStoreType"
              id="layerSalesNewCarAddContractStoreType001"
              :defaultChecked="true"
            >
              <BoxCheckLabel>성명/상호</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="layerSalesNewCarAddContractStoreType"
              id="layerSalesNewCarAddContractStoreType002"
            >
              <BoxCheckLabel>주민/사업자번호</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>

        <InputBlock
          type="search"
          :classNames="{
            wrap: ' row-margin-contents',
          }"
        >
          <InputBlockCell :flexible="true">
            <BasicInput
              type="search"
              title="판매점 검색어"
              placeholder="검색어 입력"
            />
          </InputBlockCell>
          <InputBlockCell type="search">
            <SearchButton />
          </InputBlockCell>
        </InputBlock>
      </div>

      <BasicHr className="row-margin-container-medium" />

      <!-- Case : 검색 전 -->
      <div class="contents-wrap">
        <h3 class="text-body-5 color-gray-secondary row-margin-contents">
          최근 실행 내역
        </h3>

        <!-- Case : 최근 실행 내역이 없을 경우 -->
        <div :class="$style['empty']">
          <p :class="$style['empty__text']">검색어를 입력해주세요.</p>
        </div>
        <!-- // Case : 최근 실행 내역이 없을 경우 -->

        <!-- Case : 최근 실행 내역이 있을 경우 -->
        <ul :class="$style['search-list']">
          <li :class="$style['search-list__item']">
            <button type="button" :class="$style['search-list__link']">
              <span :class="$style['search-list__text']">
                오토큐브㈜부산지점
              </span>
            </button>
          </li>
          <li :class="$style['search-list__item']">
            <button type="button" :class="$style['search-list__link']">
              <span :class="$style['search-list__text']">
                오토파이낸셜서비스코리아(주)
              </span>
            </button>
          </li>
        </ul>
        <!-- // Case : 최근 실행 내역이 있을 경우 -->
      </div>
      <!-- // Case : 검색 전 -->

      <!-- Case : 검색 후 -->
      <div class="contents-wrap">
        <!-- Case : 검색 결과 없을 경우 -->
        <div :class="$style['empty']">
          <p :class="$style['empty__text']">검색된 결과가 없습니다.</p>
        </div>
        <!-- // Case : 검색 결과 없을 경우 -->

        <!-- Case : 검색 결과 있을 경우 -->
        <ul :class="$style['search-list']">
          <li :class="$style['search-list__item']">
            <button type="button" :class="$style['search-list__link']">
              <span :class="$style['search-list__text']">
                오토큐브㈜일산몰
              </span>
            </button>
          </li>
          <li :class="$style['search-list__item']">
            <button type="button" :class="$style['search-list__link']">
              <span :class="$style['search-list__text']">
                오토큐브㈜부산지점
              </span>
            </button>
          </li>
          <li :class="$style['search-list__item']">
            <button type="button" :class="$style['search-list__link']">
              <span :class="$style['search-list__text']">
                오토파이낸셜서비스코리아(주)
              </span>
            </button>
          </li>
        </ul>

        <div class="flex-box row-margin-container">
          <div class="flex-box__cell flex-1">
            <NoticeText>기존에 검색한 이력이 있나요?</NoticeText>
          </div>
          <div class="flex-box__cell flex-box__cell--medium">
            <TextButton :underline="true" theme="tertiary" :block="true"
              >최근 실행 내역</TextButton
            >
          </div>
        </div>
        <!-- // Case : 검색 결과 있을 경우 -->
      </div>
      <!-- // Case : 검색 후 -->
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/salesNewCar/LayerSalesNewCarAddContractStore.scss';
</style>
