<script>
// Comp_M00_l005
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    PageTextGroup,
    PageMainText,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BasicButton,
    ButtonList,
    ButtonListItem,
  },
  setup() {
    const state = reactive({
      addressError001: false,
      addressError002: false,
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
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          고객님의 주소 정보를<br />
          입력해 주세요
        </PageMainText>
      </PageTextGroup>

      <FormList>
        <FormListItem
          titleText="자택주소"
          :forceFocus="true"
          target="#Comp_M00_l005_AddressSearch001"
        >
          <FormInvalid :error="state.addressError001">
            <InputBlock :error="state.addressError001">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="자택주소"
                  :disabled="true"
                  defaultValue="12345"
                />
              </InputBlockCell>
              <template v-slot:right>
                <BasicButton
                  size="mini"
                  theme="tertiary"
                  id="Comp_M00_l005_AddressSearch001"
                  >검색</BasicButton
                >
              </template>
            </InputBlock>
            <!-- DD : 주소 검색 및 입력 후 노출 -->
            <InputBlock
              :error="state.addressError001"
              :classNames="{
                wrap: 'row-margin-item-group row-margin-bottom-none',
              }"
            >
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="자택주소 도로명 주소"
                  :disabled="true"
                  defaultValue="경기 성남시 분당구 중안공원로 20"
                />
              </InputBlockCell>
            </InputBlock>
            <InputBlock
              :error="state.addressError001"
              :classNames="{
                wrap: 'row-margin-item-group row-margin-bottom-none',
              }"
            >
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="자택주소 상세 주소"
                  :disabled="true"
                  defaultValue="하나아파트 853동 4590호"
                />
              </InputBlockCell>
            </InputBlock>
            <!-- // DD : 주소 검색 및 입력 후 노출 -->
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="직장/사업장 주소"
          :forceFocus="true"
          target="#Comp_M00_l005_AddressSearch002"
        >
          <FormInvalid :error="state.addressError002">
            <InputBlock :error="state.addressError002">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="직장/사업장 주소"
                  :disabled="true"
                  defaultValue="12345"
                />
              </InputBlockCell>
              <template v-slot:right>
                <BasicButton
                  size="mini"
                  theme="tertiary"
                  id="Comp_M00_l005_AddressSearch002"
                  >검색</BasicButton
                >
              </template>
            </InputBlock>
            <!-- DD : 주소 검색 및 입력 후 노출 -->
            <InputBlock
              :error="state.addressError002"
              :classNames="{
                wrap: 'row-margin-item-group row-margin-bottom-none',
              }"
            >
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="직장/사업장 주소 도로명 주소"
                  :disabled="true"
                  defaultValue="직장/사업장 주소"
                />
              </InputBlockCell>
            </InputBlock>
            <InputBlock
              :error="state.addressError002"
              :classNames="{
                wrap: 'row-margin-item-group row-margin-bottom-none',
              }"
            >
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="직장/사업장 주소 상세 주소"
                  :disabled="true"
                  defaultValue="하나금융그룹 강남사옥 1층"
                />
              </InputBlockCell>
            </InputBlock>
            <!-- // DD : 주소 검색 및 입력 후 노출 -->
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">이전</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>다음</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
