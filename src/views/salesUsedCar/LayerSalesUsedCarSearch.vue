<script>
// UC_M06_l001
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';
import UnitText from '@/components/ui/text/UnitText.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PopupButton,
    FormList,
    FormListItem,
    FormInvalid,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormInvalidMessage,
    BasicSelect,
    BasicButton,
    BasicHr,
    BasicBox,
    CarEmblem,
    UnitText,
  },
  setup() {
    const state = reactive({
      nameError: false,
      yearError: false,
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
          <PopupTitle>차량검색</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <div>
        <FormList>
          <FormListItem
            titleText="모델명"
            target="#layerSalesUsedCarSearchName"
          >
            <FormInvalid :error="state.nameError">
              <InputBlock :error="state.nameError">
                <InputBlockCell :flexible="true">
                  <BasicInput title="모델명" id="layerSalesUsedCarSearchName" />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="연식"
            target="#layerSalesUsedCarSearchYearButton"
            :selectOnly="true"
          >
            <FormInvalid :error="state.yearError">
              <InputBlock :error="state.yearError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '2023년',
                      },
                      {
                        value: '2',
                        text: '2022년',
                      },
                      {
                        value: '3',
                        text: '2021년',
                      },
                      {
                        value: '4',
                        text: '2020년',
                      },
                      {
                        value: '5',
                        text: '2019년',
                      },
                      {
                        value: '6',
                        text: '2018년',
                      },
                      {
                        value: '7',
                        text: '2017년',
                      },
                      {
                        value: '8',
                        text: '2016년',
                      },
                      {
                        value: '9',
                        text: '2015년',
                      },
                      {
                        value: '10',
                        text: '2014년',
                      },
                      {
                        value: '11',
                        text: '2013년',
                      },
                      {
                        value: '12',
                        text: '2012년',
                      },
                      {
                        value: '13',
                        text: '2011년',
                      },
                      {
                        value: '14',
                        text: '2010년',
                      },
                      {
                        value: '15',
                        text: '2009년',
                      },
                      {
                        value: '16',
                        text: '2008년',
                      },
                      {
                        value: '17',
                        text: '2007년',
                      },
                      {
                        value: '18',
                        text: '2006년',
                      },
                      {
                        value: '19',
                        text: '2005년',
                      },
                    ]"
                    buttonTitle="연식 선택하기"
                    layerTitle="연식을 선택해 주세요"
                    id="layerSalesUsedCarSearchYear"
                    buttonId="layerSalesUsedCarSearchYearButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>

        <div class="row-margin-contents-group">
          <BasicButton theme="secondary" :line="true">조회</BasicButton>
        </div>
      </div>

      <BasicHr className="row-margin-container-medium" />

      <!-- Case : 조회 결과 없을 때 -->
      <div :class="$style['empty']">
        <p :class="$style['empty__text']">검색된 결과가 없습니다.</p>
      </div>
      <!-- // Case : 조회 결과 없을 때 -->

      <!-- Case : 조회 결과 있을 때 -->
      <ul class="reset-list">
        <li v-for="i in 3" :key="i" class="row-margin-item-group">
          <BasicBox>
            <div class="row-margin-mini">
              <CarEmblem code="1002" name="기아" />
            </div>
            <h3 class="text-body-1 font-weight-medium">노블레스</h3>
            <p class="text-body-4 color-gray row-margin-small">
              2.2 디젤 11인승 노블레스
            </p>
            <div class="row-margin-item">
              <UnitText size="regular" rightUnit="만원"
                ><strong>5,500</strong></UnitText
              >
            </div>
          </BasicBox>
        </li>
      </ul>
      <!-- // Case : 조회 결과 있을 때 -->
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/salesUsedCar/LayerSalesUsedCarSearch.scss';
</style>
