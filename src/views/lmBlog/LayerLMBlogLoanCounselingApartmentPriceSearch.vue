<script>
// LM_M01_l011
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
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import IconCustomer from '@/assets/images/icon/customer-center.svg?component';
import IconTell from '@/assets/images/icon/tell.svg?component';

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
    FormInvalidMessage,
    BasicSelect,
    BasicInput,
    BasicHr,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IconCustomer,
    IconTell,
  },
  setup() {
    const layer = ref(null);

    const state = reactive({
      areaError001: false,
      areaError002: false,
      areaError003: false,
      addressError: false,
      supplyError: false,
      dedicatedError: false,
      buyError: false,
      leaseError: false,
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
          <PopupTitle>아파트 시세검색</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <div>
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">지역선택</h3>

          <FormList>
            <FormListItem
              titleText="시/도"
              target="#layerLMBlogLoanCounselingApartmentPriceSearchAreaButton001"
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
                          value: '177',
                          text: '제주특별자치도',
                        },
                      ]"
                      buttonTitle="시/도 선택하기"
                      layerTitle="시/도를 선택해 주세요"
                      id="layerLMBlogLoanCounselingApartmentPriceSearchArea001"
                      buttonId="layerLMBlogLoanCounselingApartmentPriceSearchAreaButton001"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="시/군/구"
              target="#layerLMBlogLoanCounselingApartmentPriceSearchAreaButton002"
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
                      id="layerLMBlogLoanCounselingApartmentPriceSearchArea002"
                      buttonId="layerLMBlogLoanCounselingApartmentPriceSearchAreaButton002"
                    />
                  </InputBlockCell>
                </InputBlock>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="읍/면/동/리"
              target="#layerLMBlogLoanCounselingApartmentPriceSearchAreaButton003"
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
                      id="layerLMBlogLoanCounselingApartmentPriceSearchArea003"
                      buttonId="layerLMBlogLoanCounselingApartmentPriceSearchAreaButton003"
                    />
                  </InputBlockCell>
                </InputBlock>
              </FormInvalid>
            </FormListItem>
          </FormList>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">아파트정보</h3>

          <FormList :classNames="{ wrap: 'row-margin-contents-group' }">
            <FormListItem
              titleText="아파트 상세주소"
              target="#layerLMBlogLoanCounselingApartmentPriceSearchAddress"
            >
              <FormInvalid :error="state.addressError">
                <InputBlock :error="state.addressError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="아파트 상세주소"
                      id="layerLMBlogLoanCounselingApartmentPriceSearchAddress"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="공급면적"
              target="#layerLMBlogLoanCounselingApartmentPriceSearchSupply01"
            >
              <FormInvalid :error="state.supplyError">
                <InputBlock :error="state.supplyError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      align="right"
                      :useDelete="false"
                      pattern="\d*"
                      title="공급면적"
                      id="layerLMBlogLoanCounselingApartmentPriceSearchSupply01"
                    />
                  </InputBlockCell>
                  <template v-slot:innerRight>
                    <div class="text-body-3">㎡</div>
                  </template>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="전용면적"
              target="#layerLMBlogLoanCounselingApartmentPriceSearchDedicated"
            >
              <FormInvalid :error="state.dedicatedError">
                <InputBlock :error="state.dedicatedError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      align="right"
                      :useDelete="false"
                      pattern="\d*"
                      title="전용면적"
                      id="layerLMBlogLoanCounselingApartmentPriceSearchDedicated"
                    />
                  </InputBlockCell>
                  <template v-slot:innerRight>
                    <div class="text-body-3">㎡</div>
                  </template>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">아파트시세</h3>

          <FormList>
            <FormListItem
              titleText="매매가"
              titleOptionalText="(분양가, 감정가액)"
              target="#layerLMBlogLoanCounselingApartmentPriceSearchBuy"
            >
              <FormInvalid :error="state.buyError">
                <InputBlock :error="state.buyError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      align="right"
                      :useDelete="false"
                      pattern="\d*"
                      title="매매가(분양가, 감정가액)"
                      id="layerLMBlogLoanCounselingApartmentPriceSearchBuy"
                    />
                  </InputBlockCell>
                  <template v-slot:innerRight>
                    <div class="text-body-3">만원</div>
                  </template>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="전세가"
              titleOptionalText="(상한가)"
              target="#layerLMBlogLoanCounselingApartmentPriceSearchLease"
              :disabled="true"
            >
              <FormInvalid :error="state.leaseError">
                <InputBlock :error="state.leaseError" :disabled="true">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      align="right"
                      :useDelete="false"
                      pattern="\d*"
                      title="전세가(상한가)"
                      id="layerLMBlogLoanCounselingApartmentPriceSearchLease"
                      :disabled="true"
                    />
                  </InputBlockCell>
                  <template v-slot:innerRight>
                    <div class="text-body-3">만원</div>
                  </template>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>
        </section>

        <ul :class="[$style['basic-list'], 'row-margin-container-medium']">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              아파트 검색이 되지 않는 경우에는 전화 상담을 통해 대출 신청을
              도와드립니다.
            </div>
          </li>
        </ul>
      </div>

      <BasicHr
        type="contents"
        theme="quaternary"
        className="row-margin-container"
      />

      <div :class="$style['icon-list']">
        <ul :class="$style['icon-list__list']">
          <li :class="$style['icon-list__item']">
            <div :class="$style['icon-list__block']">
              <div :class="$style['icon-list__icon']"><IconCustomer /></div>
              <div :class="$style['icon-list__content']">
                <div :class="$style['icon-list__title']">고객센터</div>
                <div :class="$style['icon-list__text']">평일 09:00 ~ 18:00</div>
              </div>
              <BasicButton
                tagName="a"
                size="mini"
                :line="true"
                theme="quaternary"
                :classNames="{ wrap: $style['icon-list__button'] }"
                href="tel:1599-7942"
              >
                <template v-slot:leftIcon>
                  <IconTell />
                </template>
                1599-7942
              </BasicButton>
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
            <BasicButton>확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/lmBlog/LayerLMBlogLoanCounselingApartmentPriceSearch.scss';
</style>
