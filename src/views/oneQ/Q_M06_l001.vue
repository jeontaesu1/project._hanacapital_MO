ss
<script>
// Q_M06_l001
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';

import IconQCallMint from '@/assets/images/icon/call-mint.svg?component';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    FormList,
    FormListItem,
    FormInvalid,
    InputBlock,
    InputBlockCell,
    FormInvalidMessage,
    BasicSelect,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BasicBox,
    IconQCallMint,
  },
  setup() {
    const layer = ref(null);

    const state = reactive({
      areaError001: false,
      areaError002: false,
      areaError003: false,
      apartmentError001: false,
      sizeError: false,
    });

    return {
      layer,
      state,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="full" v-slot="layerSlotProps">
    <FullPopup>
      <template v-slot:head>
        <FullPopupHead>
          <PopupTitle>아파트 시세 검색</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <section>
        <h3 class="text-title-2 row-margin-contents">지역 정보</h3>

        <FormList>
          <FormListItem
            titleText="시/도"
            target="#q_M06_l001_areaButton001"
            :selectOnly="true"
          >
            <FormInvalid :error="state.areaError001">
              <InputBlock :error="state.areaError001">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '서울특별시',
                      },
                      {
                        value: '2',
                        text: '경기도',
                      },
                      {
                        value: '3',
                        text: '부산광역시',
                      },
                      {
                        value: '4',
                        text: '대구광역시',
                      },
                      {
                        value: '5',
                        text: '인천광역시',
                      },
                      {
                        value: '6',
                        text: '광주광역시',
                      },
                      {
                        value: '7',
                        text: '대전광역시',
                      },
                      {
                        value: '8',
                        text: '울산광역시',
                      },
                      {
                        value: '9',
                        text: '세종특별자치시',
                      },
                      {
                        value: '10',
                        text: '강원도',
                      },
                      {
                        value: '11',
                        text: '충청북도',
                      },
                      {
                        value: '12',
                        text: '충청남도',
                      },
                      {
                        value: '13',
                        text: '전라북도',
                      },
                      {
                        value: '14',
                        text: '전라남도',
                      },
                      {
                        value: '15',
                        text: '경상북도',
                      },
                      {
                        value: '16',
                        text: '경상남도',
                      },
                      {
                        value: '17',
                        text: '제주특별자치도',
                      },
                    ]"
                    buttonTitle="시/도 선택하기"
                    layerTitle="시/도를 선택해 주세요"
                    id="q_M06_l001_area001"
                    buttonId="q_M06_l001_areaButton001"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="시/군/구"
            target="#q_M06_l001_areaButton002"
            :selectOnly="true"
          >
            <FormInvalid :error="state.areaError002">
              <InputBlock :error="state.areaError002">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '강남구',
                      },
                      {
                        value: '2',
                        text: '강동구',
                      },
                      {
                        value: '3',
                        text: '강북구',
                      },
                      {
                        value: '4',
                        text: '강서구',
                      },
                      {
                        value: '5',
                        text: '관악구',
                      },
                      {
                        value: '6',
                        text: '광진구',
                      },
                      {
                        value: '7',
                        text: '구로구',
                      },
                      {
                        value: '8',
                        text: '금천구',
                      },
                      {
                        value: '9',
                        text: '노원구',
                      },
                      {
                        value: '10',
                        text: '도봉구',
                      },
                      {
                        value: '11',
                        text: '동대문구',
                      },
                      {
                        value: '12',
                        text: '동작구',
                      },
                      {
                        value: '13',
                        text: '마포구',
                      },
                      {
                        value: '14',
                        text: '서대문구',
                      },
                      {
                        value: '15',
                        text: '서초구',
                      },
                      {
                        value: '16',
                        text: '성동구',
                      },
                      {
                        value: '17',
                        text: '성북구',
                      },
                    ]"
                    buttonTitle="시/군/구 선택하기"
                    layerTitle="시/군/구를 선택해 주세요"
                    id="q_M06_l001_area002"
                    buttonId="q_M06_l001_areaButton002"
                  />
                </InputBlockCell>
              </InputBlock>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="읍/면/동/리"
            target="#q_M06_l001_areaButton003"
            :selectOnly="true"
          >
            <FormInvalid :error="state.areaError003">
              <InputBlock :error="state.areaError003">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '미아동',
                      },
                      {
                        value: '2',
                        text: '번동',
                      },
                      {
                        value: '3',
                        text: '수유동',
                      },
                      {
                        value: '4',
                        text: '우이동',
                      },
                    ]"
                    buttonTitle="읍/면/동/리 선택하기"
                    layerTitle="읍/면/동/리를 선택해 주세요"
                    id="q_M06_l001_area003"
                    buttonId="q_M06_l001_areaButton003"
                  />
                </InputBlockCell>
              </InputBlock>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-contents">아파트정보</h3>

        <FormList>
          <FormListItem
            titleText="아파트"
            target="#q_M06_l001_apartmentButton001"
            :selectOnly="true"
          >
            <FormInvalid :error="state.apartmentError001">
              <InputBlock :error="state.apartmentError001">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: 'LG개포자이',
                      },
                    ]"
                    buttonTitle="아파트 선택하기"
                    layerTitle="아파트 선택해 주세요"
                    id="q_M06_l001_apartment001"
                    buttonId="q_M06_l001_apartmentButton001"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="평형"
            target="#q_M06_l001_sizeButton"
            :selectOnly="true"
          >
            <FormInvalid :error="state.sizeError">
              <InputBlock :error="state.sizeError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '158.67',
                      },
                      {
                        value: '2',
                        text: '76.67',
                      },
                    ]"
                    buttonTitle="평당 선택하기"
                    layerTitle="평당을 선택해 주세요"
                    id="q_M06_l001_size"
                    buttonId="q_M06_l001_sizeButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </section>

      <BasicBox theme="thirteenth" className="row-margin-contents">
        <div class="flex-box justify-conten-center">
          <div :class="$style['product-detail']">
            <ul :class="$style['product-detail__list']">
              <li :class="$style['product-detail__item']">
                <div :class="$style['product-detail__icon']">
                  <IconQCallMint />
                </div>
                <div :class="$style['product-detail__block']">
                  <div :class="$style['product-detail__title']">
                    전화바로연결
                  </div>
                  <div :class="$style['product-detail__desc']">1599-7942</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="text-body-3 row-margin-item-medium align-center">
          아파트 검색이 되지 않는 경우는<br />
          전화상담을 통해 대출신청을 도와드립니다.
        </div>
      </BasicBox>

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
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/oneQ/Q_M06_l001.scss';
</style>
