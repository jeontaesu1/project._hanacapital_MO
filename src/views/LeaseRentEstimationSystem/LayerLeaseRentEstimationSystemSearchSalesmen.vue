<script>
// LR_M00_l013
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    FullPopup,
    FullPopupHead,
    BasicButton,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    BasicHr,
    NoticeText,
    TextButton,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
  },
  setup() {
    const state = reactive({
      searchError: false,
      birthDateError: false,
      phoneError: false,
    });

    const layer = ref(null);

    return {
      state,
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
          <PopupTitle>판매사원 조회</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <div>
        <BoxCheckList :wrap="true">
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="layerLeaseRentEstimationSystemSearchSalesmenType"
              id="layerLeaseRentEstimationSystemSearchSalesmenType001"
              :defaultChecked="true"
            >
              <BoxCheckLabel>성명/상호</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="layerLeaseRentEstimationSystemSearchSalesmenType"
              id="layerLeaseRentEstimationSystemSearchSalesmenType002"
            >
              <BoxCheckLabel>소속직원</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="layerLeaseRentEstimationSystemSearchSalesmenType"
              id="layerLeaseRentEstimationSystemSearchSalesmenType003"
            >
              <BoxCheckLabel>지점명</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="layerLeaseRentEstimationSystemSearchSalesmenType"
              id="layerLeaseRentEstimationSystemSearchSalesmenType004"
            >
              <BoxCheckLabel>주민/사업번호</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>

        <FormList :classNames="{ wrap: 'row-margin-contents' }">
          <FormListItem
            titleText="검색어"
            target="#layerLeaseRentEstimationSystemSearchSalesmenSearch"
          >
            <FormInvalid :error="state.searchError">
              <InputBlock :error="state.searchError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="검색어"
                    id="layerLeaseRentEstimationSystemSearchSalesmenSearch"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="생년월일"
            titleOptionalText="(8자리)"
            target="#layerLeaseRentEstimationSystemSearchSalesmenBirthDate"
          >
            <FormInvalid :error="state.birthDateError">
              <InputBlock :error="state.birthDateError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="생년월일 8자리"
                    id="layerLeaseRentEstimationSystemSearchSalesmenBirthDate"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="휴대폰 뒷번호"
            titleOptionalText="(4자리)"
            target="#layerLeaseRentEstimationSystemSearchSalesmenPhone"
          >
            <FormInvalid :error="state.phoneError">
              <InputBlock :error="state.phoneError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="휴대폰 뒷번호 4자리"
                    id="layerLeaseRentEstimationSystemSearchSalesmenPhone"
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
          <li :class="$style['search-list__item']" v-for="i in 3" :key="i">
            <button type="button" :class="$style['search-list__link']">
              <span :class="[$style['search-list__text'], 'row-margin-small']">
                강남구(쌍용)
              </span>
              <KeyValue align="left" margin="mini" size="medium">
                <KeyValueItem :classNames="{ item: 'text-body-4' }">
                  <KeyValueTitle>소속직원</KeyValueTitle>
                  <KeyValueText>없음</KeyValueText>
                </KeyValueItem>
                <KeyValueItem :classNames="{ item: 'text-body-4' }">
                  <KeyValueTitle>사업자번호</KeyValueTitle>
                  <KeyValueText>123-12-*****</KeyValueText>
                </KeyValueItem>
              </KeyValue>
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
          <li :class="$style['search-list__item']" v-for="i in 4" :key="i">
            <button type="button" :class="$style['search-list__link']">
              <span :class="[$style['search-list__text'], 'row-margin-small']">
                강남구(쌍용)
              </span>
              <KeyValue align="left" margin="mini" size="medium">
                <KeyValueItem :classNames="{ item: 'text-body-4' }">
                  <KeyValueTitle>소속직원</KeyValueTitle>
                  <KeyValueText>없음</KeyValueText>
                </KeyValueItem>
                <KeyValueItem :classNames="{ item: 'text-body-4' }">
                  <KeyValueTitle>사업자번호</KeyValueTitle>
                  <KeyValueText>123-12-*****</KeyValueText>
                </KeyValueItem>
              </KeyValue>
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
@import '@/assets/scss/views/LeaseRentEstimationSystem/LayerLeaseRentEstimationSystemSearchSalesmen.scss';
</style>
