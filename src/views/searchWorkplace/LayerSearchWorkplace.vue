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
    <FullPopup>
      <template v-slot:head>
        <FullPopupHead>
          <PopupTitle>직장검색</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <!-- 컨텐츠 -->
      <UiTab>
        <!-- v-slot="tabSlotProps" -->
        <NavTab :useUiTab="true">
          <NavTabButton link="testNavTab001_001">직장명</NavTabButton>
          <NavTabButton link="testNavTab001_002">사업자번호</NavTabButton>
          <NavTabButton link="testNavTab001_003">직접입력</NavTabButton>
        </NavTab>

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
            >Text Text Text Text Text</NoticeText
          >
          <BasicHr
            className="row-margin-contents row-margin-container-medium"
          />

          <BasicBox>
            <KeyValueList>
              <KeyValueItem>
                <KeyValueTitle>법인번호</KeyValueTitle>
                <KeyValueText> 123-45-678910 </KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>대표번호</KeyValueTitle>
                <KeyValueText>1599-1234</KeyValueText>
              </KeyValueItem>

              <KeyValueItem>
                <KeyValueTitle>주소</KeyValueTitle>
                <KeyValueText> 서울 중구 을지로 35 </KeyValueText>
              </KeyValueItem>
            </KeyValueList>
          </BasicBox>
          검색폼 텍스트 라인
          <!-- //검색 -->

          결과
        </UiTabPanel>

        <UiTabPanel name="testNavTab001_002">// Tab 2 Contents</UiTabPanel>

        <UiTabPanel name="testNavTab001_003">// Tab 3 Contents</UiTabPanel>
      </UiTab>

      <!-- //컨텐츠 -->

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">초기화</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>계산하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
