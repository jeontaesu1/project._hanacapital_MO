<script>
// Q_M05_l008
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
import KeyValue from '@/components/ui/text/KeyValue.vue';
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
    KeyValue,
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
      nameError: false,
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
    <UiTab type="popup" v-slot="tabSlotProps">
      <FullPopup>
        <template v-slot:head>
          <FullPopupHead>
            <PopupTitle>직장검색</PopupTitle>
            <template v-slot:right>
              <PopupButton @click="layerSlotProps.close()" />
            </template>
          </FullPopupHead>
          <NavTab :useUiTab="true" :head="true">
            <NavTabButton link="Q_M05_l008Tab001">직장명</NavTabButton>
            <NavTabButton link="Q_M05_l008Tab002">사업자번호</NavTabButton>
            <NavTabButton link="Q_M05_l008Tab003">직접입력</NavTabButton>
          </NavTab>
        </template>

        <div>
          <UiTabPanel name="Q_M05_l008Tab001">
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
              </InputBlockCell>
            </InputBlock>
          </UiTabPanel>

          <UiTabPanel name="Q_M05_l008Tab002">
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
              </InputBlockCell>
            </InputBlock>
          </UiTabPanel>

          <UiTabPanel name="Q_M05_l008Tab003">
            <FormList>
              <FormListItem titleText="직장명" target="#Q_M05_l008_name">
                <FormInvalid :error="state.nameError">
                  <InputBlock :error="state.nameError">
                    <InputBlockCell :flexible="true">
                      <BasicInput title="직장명" id="Q_M05_l008_name" />
                    </InputBlockCell>
                  </InputBlock>
                  <FormInvalidMessage>Error Message</FormInvalidMessage>
                </FormInvalid>
              </FormListItem>
            </FormList>
          </UiTabPanel>

          <NoticeText :classNames="{ wrap: 'row-margin-contents' }">
            실제 직장 정보와 다른 경우 한도 및 금리가 달라질 수 있어요.
          </NoticeText>
        </div>

        <!-- DD : 검색 후 노출 -->
        <BasicHr
          className="row-margin-container-medium"
          v-if="tabSlotProps.activeName !== 'Q_M05_l008Tab003'"
        />

        <div
          class="contents-wrap"
          v-if="tabSlotProps.activeName !== 'Q_M05_l008Tab003'"
        >
          <p class="text-body-4 font-weight-light color-gray-secondary">
            <strong class="font-weight-medium color-green">999</strong> 건
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
          <!-- // Case : 결과 없을 때 -->

          <!-- Case : 결과 있을 때 -->
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
                      <span :class="$style['rectal__privacy-name']"
                        >홍길동</span
                      >
                      <span :class="$style['rectal__privacy-number']"
                        >21-01-1234</span
                      >
                    </div>
                    <button type="button" :class="$style['rectal__button']">
                      <span class="for-a11y">선택</span>
                    </button>
                  </div>
                  <div :class="$style['rectal__right']">
                    <UiAccordionOpener
                      :classNames="{ button: $style['rectal__opener'] }"
                    />
                  </div>
                </div>

                <UiAccordionLayer>
                  <BasicBox>
                    <KeyValue>
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
                    </KeyValue>
                  </BasicBox>
                </UiAccordionLayer>
              </UiAccordionItem>
            </UiAccordion>
          </div>
          <!-- // Case : 결과 있을 때 -->
        </div>
        <!-- // DD : 검색 후 노출 -->

        <template v-slot:foot>
          <ButtonList
            v-if="tabSlotProps.activeName === 'Q_M05_l008Tab003'"
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
@import '@/assets/scss/views/oneQ/Q_M05_l008.scss';
</style>
