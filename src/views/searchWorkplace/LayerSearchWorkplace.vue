<script>
// Common_M00_l016
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValueList from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
// import FormHelpText from '@/components/ui/form/FormHelpText.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    FullPopup,
    FullPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
    InputBlock,
    InputBlockCell,
    BasicInput,
    NoticeText,
    SearchButton,
    BasicHr,
    BasicBox,
    KeyValueList,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
  },
  setup() {
    const state = reactive({
      typeError: false,
      sumError: false,
      termError: false,
      interestRateError: false,
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
    <UiTab type="popup">
      <FullPopup>
        <template v-slot:head>
          <FullPopupHead>
            <PopupTitle>직장검색</PopupTitle>
            <template v-slot:right>
              <PopupButton @click="layerSlotProps.close()" />
            </template>
          </FullPopupHead>
          <NavTab :useUiTab="true" :head="true">
            <NavTabButton link="testNavTab001_001">직장명</NavTabButton>
            <NavTabButton link="testNavTab001_002">사업자번호</NavTabButton>
            <NavTabButton link="testNavTab001_003">직접입력</NavTabButton>
          </NavTab>
        </template>

        <div>
          <!-- 컨텐츠 -->
          <UiTabPanel name="testNavTab001_001">
            <!-- 검색 -->
            <FormList>
              <InputBlock type="search">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="search"
                    title="직장명 검색어"
                    placeholder="직장명 입력"
                  />
                </InputBlockCell>
                <InputBlockCell type="search">
                  <SearchButton />
                </InputBlockCell> </InputBlock
            ></FormList>
            <NoticeText class="row-margin-contents row-margin-bottom-none"
              >실제 직장 정보와 다른 경우 한도 및 금리가 달라질 수
              있어요.</NoticeText
            >
            <!-- //검색 -->
          </UiTabPanel>

          <UiTabPanel name="testNavTab001_002">
            <!-- 검색 -->
            <FormList>
              <InputBlock type="search">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="search"
                    title="사업자번호 검색어"
                    placeholder="사업자번호 입력"
                  />
                </InputBlockCell>
                <InputBlockCell type="search">
                  <SearchButton />
                </InputBlockCell> </InputBlock
            ></FormList>
            <NoticeText class="row-margin-contents row-margin-bottom-none"
              >실제 직장 정보와 다른 경우 한도 및 금리가 달라질 수
              있어요.</NoticeText
            >
            <!-- //검색 -->
          </UiTabPanel>

          <UiTabPanel name="testNavTab001_003">
            <FormList>
              <FormListItem titleText="이름" target="#testInput007">
                <FormInvalid :error="state.testError001">
                  <InputBlock :error="state.testError001">
                    <InputBlockCell :flexible="true">
                      <BasicInput title="이름" id="testInput007" />
                    </InputBlockCell>
                  </InputBlock>
                  <FormInvalidMessage>Error Message</FormInvalidMessage>
                </FormInvalid>
              </FormListItem>
            </FormList>
            <NoticeText class="row-margin-contents row-margin-bottom-none"
              >실제 직장 정보와 다른 경우 한도 및 금리가 달라질 수
              있어요.</NoticeText
            >
          </UiTabPanel>
        </div>

        <BasicHr className="row-margin-contents row-margin-container-medium" />

        <p class="text-body-4"><span class="color-green">999</span> 건</p>
        <BasicHr
          theme="quaternary"
          type="contents"
          className="row-margin-item-medium"
        />
        <div :class="$style['rectal']">
          <UiAccordion :classNames="{ wrap: $style['rectal__list'] }">
            <UiAccordionItem
              v-for="i in 3"
              :key="i"
              :classNames="{ item: $style['rectal__item'] }"
            >
              <div :class="$style['rectal__head']">
                <div :class="$style['rectal__block']">
                  <h2 :class="$style['rectal__name']">하나캐피탈</h2>
                  <div :class="$style['rectal__privacy']">
                    <span :class="$style['rectal__privacy__name']">홍길동</span>
                    <span :class="$style['rectal__privacy__number']"
                      >21-01-1234</span
                    >
                  </div>
                </div>
                <div :class="$style['rectal__right']">
                  <UiAccordionOpener
                    :classNames="{ button: $style['rectal__opener'] }"
                  />
                </div>
              </div>

              <UiAccordionLayer
                :classNames="{ layer: $style['rectal__layer'] }"
              >
                <BasicBox>
                  <KeyValueList>
                    <KeyValueItem :classNames="{ item: 'text-body-4' }">
                      <KeyValueTitle>법인번호</KeyValueTitle>
                      <KeyValueText> 123-45-678910 </KeyValueText>
                    </KeyValueItem>

                    <KeyValueItem :classNames="{ item: 'text-body-4' }">
                      <KeyValueTitle>대표번호</KeyValueTitle>
                      <KeyValueText>1599-1234</KeyValueText>
                    </KeyValueItem>

                    <KeyValueItem :classNames="{ item: 'text-body-4' }">
                      <KeyValueTitle>주소</KeyValueTitle>
                      <KeyValueText> 서울 중구 을지로 35 </KeyValueText>
                    </KeyValueItem>
                  </KeyValueList>
                </BasicBox>
              </UiAccordionLayer>
            </UiAccordionItem>
          </UiAccordion>
        </div>

        <!-- //컨텐츠 -->

        <template v-slot:foot>
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton>확인</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </template>
      </FullPopup>
    </UiTab>
  </UiLayer>
</template>
<style lang="scss" module>
@import '@/assets/scss/views/searchWorkplace/LayerSearchWorkplace.scss';
</style>
