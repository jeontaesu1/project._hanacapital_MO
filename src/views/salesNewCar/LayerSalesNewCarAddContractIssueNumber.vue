<script>
// NC_M04_l003
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
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
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
    BasicDatepicker,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    BasicHr,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
  },
  setup() {
    const state = reactive({
      dateError: false,
      searchError: false,
      minDate: '2023.04.21',
      maxDate: '2023.04.21',
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
          <PopupTitle>출고번호 조회</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <div>
        <FormList>
          <FormListItem
            titleText="수신일자"
            target="#layerSalesNewCarAddContractIssueNumberDateStartButton"
          >
            <FormInvalid :error="state.dateError">
              <InputBlock :error="state.dateError">
                <InputBlockCell :flexible="true">
                  <BasicDatepicker
                    title="수신일자 시작 날짜"
                    id="layerSalesNewCarAddContractIssueNumberDateStart"
                    buttonId="layerSalesNewCarAddContractIssueNumberDateStartButton"
                    :max="state.maxDate"
                    v-model="state.minDate"
                  />
                </InputBlockCell>
                <InputBlockCell margin="regular">
                  <div class="text-body-3">~</div>
                </InputBlockCell>
                <InputBlockCell :flexible="true" margin="regular">
                  <BasicDatepicker
                    title="수신일자 종료 날짜"
                    id="layerSalesNewCarAddContractIssueNumberDateEnd"
                    buttonId="layerSalesNewCarAddContractIssueNumberDateEndButton"
                    :min="state.minDate"
                    v-model="state.maxDate"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="출고번호 조건" :forceFocus="true">
            <BoxCheckList>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerSalesNewCarAddContractIssueNumberType"
                  id="layerSalesNewCarAddContractIssueNumberType001"
                  :defaultChecked="true"
                >
                  <BoxCheckLabel>손님명</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="layerSalesNewCarAddContractIssueNumberType"
                  id="layerSalesNewCarAddContractIssueNumberType002"
                >
                  <BoxCheckLabel>출고번호</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
          </FormListItem>

          <FormListItem
            titleText="검색어"
            target="#layerSalesNewCarAddContractIssueNumberSearch"
          >
            <FormInvalid :error="state.searchError">
              <InputBlock :error="state.searchError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="검색어"
                    id="layerSalesNewCarAddContractIssueNumberSearch"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>

        <div class="row-margin-contents-group">
          <BasicButton :line="true" theme="secondary">조회</BasicButton>
        </div>
      </div>

      <!-- Case : 검색 후 노출 -->
      <BasicHr className="row-margin-container-medium" />

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
                하태화
              </span>
              <KeyValue align="left" margin="mini" size="medium">
                <KeyValueItem :classNames="{ item: 'text-body-4' }">
                  <KeyValueTitle>순번</KeyValueTitle>
                  <KeyValueText>4</KeyValueText>
                </KeyValueItem>
                <KeyValueItem :classNames="{ item: 'text-body-4' }">
                  <KeyValueTitle>출고일자</KeyValueTitle>
                  <KeyValueText>2022.09.03</KeyValueText>
                </KeyValueItem>
                <KeyValueItem :classNames="{ item: 'text-body-4' }">
                  <KeyValueTitle>출고번호</KeyValueTitle>
                  <KeyValueText>1234567K5</KeyValueText>
                </KeyValueItem>
              </KeyValue>
            </button>
          </li>
        </ul>
        <!-- // Case : 검색 결과 있을 경우 -->
      </div>
      <!-- // Case : 검색 후 노출 -->
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/salesNewCar/LayerSalesNewCarAddContractIssueNumber.scss';
</style>
