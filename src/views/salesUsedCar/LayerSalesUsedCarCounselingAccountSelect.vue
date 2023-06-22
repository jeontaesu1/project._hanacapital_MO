<script>
// UC_M03_l004
import { ref } from 'vue';
import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import ContentsButton from '@/components/ui/button/ContentsButton.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    BasicHr,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    ContentsButton,
    PageTextGroup,
    PageMainText,
    FormList,
    FormListItem,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BasicButton,
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
          <PopupTitle>매매상사(차량 소유자) 계좌 등록</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <div>
        <FormList>
          <FormListItem
            titleText="매매상사"
            :forceFocus="true"
            :disabled="true"
          >
            <InputBlock :disabled="true">
              <InputBlockCell :flexible="true">
                <BasicInput
                  placeholder="현대오토스 / 210-91-12345"
                  title="매매상사"
                  :disabled="true"
                />
              </InputBlockCell>
              <template v-slot:right>
                <BasicButton size="mini" theme="quaternary">
                  매매상사 재선택
                </BasicButton>
              </template>
            </InputBlock>
          </FormListItem>
        </FormList>
      </div>

      <BasicHr className="row-margin-container-medium" />

      <div class="contents-wrap">
        <PageTextGroup>
          <PageMainText>
            <strong>아래 해당하는 계좌를</strong><br />
            선택해 주세요
          </PageMainText>
        </PageTextGroup>

        <!-- Case : 결과 없을 때 -->
        <div :class="$style['empty']">
          <p :class="$style['empty__text']">검색된 결과가 없습니다.</p>
        </div>
        <!-- Case : 결과 없을 때 -->

        <!-- Case : 결과 있을 때 -->
        <ul :class="[$style['address-list'], $style['address-list--select']]">
          <li :class="$style['address-list__item']">
            <ContentsButton>
              <div :class="$style['address-list__block']">
                <KeyValue margin="regular" size="medium">
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>은행명</KeyValueTitle>
                    <KeyValueText>국민은행</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>계좌번호</KeyValueTitle>
                    <KeyValueText>123456-******</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </div>
            </ContentsButton>
          </li>
          <li :class="$style['address-list__item']">
            <ContentsButton>
              <div :class="$style['address-list__block']">
                <KeyValue margin="regular" size="medium">
                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>은행명</KeyValueTitle>
                    <KeyValueText>국민은행</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem :classNames="{ item: 'text-body-3' }">
                    <KeyValueTitle>계좌번호</KeyValueTitle>
                    <KeyValueText>123456-******</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </div>
            </ContentsButton>
          </li>
        </ul>
        <!-- // Case : 결과 있을 때 -->
      </div>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/salesUsedCar/LayerSalesUsedCarCounselingAccountSelect.scss';
</style>
