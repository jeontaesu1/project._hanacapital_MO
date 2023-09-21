<script>
// LR_M04_b001
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
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
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
    InputBlock,
    InputBlockCell,
    BasicInput,
    BasicButton,
    FormInvalidMessage,
    BasicDatepicker,
    BasicSelect,
    ButtonList,
    ButtonListItem,
  },
  setup() {
    const today = new Date();
    const todayObj = {
      year: today.getFullYear(),
      month: (() => {
        const m = today.getMonth() + 1;
        return m < 10 ? `0${m}` : m;
      })(),
      date: today.getDate(),
    };
    const maxDate = `${todayObj.year}.${todayObj.month}.${todayObj.date}`;

    const state = reactive({
      carNumberError: false,
      dateError: false,
      baseError: false,
    });

    const layer = ref(null);

    return {
      maxDate,
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
          차량번호를<br />
          등록해 주세요
        </PageMainText>
      </PageTextGroup>

      <div>
        <FormList>
          <FormListItem
            titleText="차량번호"
            target="#layerLeaseRentEstimationSystemSaveReviewCarNumberCarNumberInput"
          >
            <FormInvalid :error="state.carNumberError">
              <InputBlock :error="state.carNumberError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="차량번호"
                    id="layerLeaseRentEstimationSystemSaveReviewCarNumberCarNumberInput"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="최초등록일"
            :require="true"
            target="#layerLeaseRentEstimationSystemSaveReviewCarNumberDateButton"
          >
            <FormInvalid :error="state.dateError">
              <InputBlock :error="state.dateError">
                <InputBlockCell :flexible="true">
                  <BasicDatepicker
                    title="최초등록일"
                    id="layerLeaseRentEstimationSystemSaveReviewCarNumberDate"
                    buttonId="layerLeaseRentEstimationSystemSaveReviewCarNumberDateButton"
                    :max="maxDate"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="사용본거지"
            target="#layerLeaseRentEstimationSystemSaveReviewCarNumberBaseButton"
            :selectOnly="true"
          >
            <FormInvalid :error="state.baseError">
              <InputBlock :error="state.baseError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '부산',
                      },
                      {
                        value: '2',
                        text: '대구',
                      },
                      {
                        value: '3',
                        text: '인천',
                      },
                      {
                        value: '4',
                        text: '광주',
                      },
                      {
                        value: '5',
                        text: '수원',
                      },
                      {
                        value: '6',
                        text: '대전',
                      },
                      {
                        value: '7',
                        text: '안산',
                      },
                      {
                        value: '8',
                        text: '서울',
                      },
                    ]"
                    buttonTitle="사용본거지 선택하기"
                    layerTitle="사용본거지를 선택해 주세요"
                    id="layerLeaseRentEstimationSystemSaveReviewCarNumberBase"
                    buttonId="layerLeaseRentEstimationSystemSaveReviewCarNumberBaseButton"
                    defaultValue="1"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>

        <ul :class="[$style['basic-list'], 'row-margin-contents']">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              기타문의사항은 하나캐피탈 고객센터(1800-1110)으로 연락주시기
              바랍니다.
            </div>
          </li>
        </ul>
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>차량번호 등록</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/LeaseRentEstimationSystem/LayerLeaseRentEstimationSystemSaveReviewCarNumber.scss';
</style>
