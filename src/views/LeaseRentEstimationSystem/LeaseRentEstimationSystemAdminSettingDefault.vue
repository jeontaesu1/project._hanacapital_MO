<script>
// LR_M05_p010
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckObject from '@/components/ui/form/BoxCheckObject.vue';

export default {
  components: {
    PageContents,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicSelect,
    InputBlock,
    InputBlockCell,
    BasicInput,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BasicHr,
    BoxCheckList,
    BoxCheckListItem,
    BoxCheck,
    BoxCheckObject,
    BoxCheckLabel,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      brandError: false,
      modelError: false,
      lineUpError: false,
      trimError: false,
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '기본 설정');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });

    return {
      state,
    };
  },
};
</script>

<template>
  <PageContents>
    <div class="row-margin-contents">
      <div class="text-title-2 font-weight-bold row-margin-small">
        모델 설정
      </div>
      <div class="text-body-3 color-red font-weight-light">
        적색 표시는 단종된 상태입니다.
      </div>
    </div>

    <div>
      <FormList>
        <FormListItem
          titleText="브랜드"
          target="#leaseRentEstimationSystemAdminSettingDefaultBrandButton"
          :selectOnly="true"
        >
          <FormInvalid :error="state.brandError">
            <InputBlock :error="state.brandError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '111 현대',
                    },
                    {
                      value: '2',
                      text: '112 제네시스',
                    },
                    {
                      value: '3',
                      text: '121 기아',
                    },
                    {
                      value: '4',
                      text: '131 쉐보레',
                    },
                    {
                      value: '5',
                      text: '141 쌍용',
                    },
                    {
                      value: '6',
                      text: '151 르노코리아',
                    },
                  ]"
                  buttonTitle="브랜드 선택하기"
                  layerTitle="브랜드를 선택해 주세요"
                  id="leaseRentEstimationSystemAdminSettingDefaultBrand"
                  buttonId="leaseRentEstimationSystemAdminSettingDefaultBrandButton"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <!--  Case : 브랜드 선택시 노출 -->
        <FormListItem titleText="브랜드 고유번호" :disabled="true">
          <InputBlock :disabled="true">
            <InputBlockCell :flexible="true">
              <BasicInput defaultValue="221" :disabled="true" />
            </InputBlockCell>
          </InputBlock>

          <ButtonList
            align="left"
            :classNames="{ wrap: 'row-margin-contents' }"
          >
            <ButtonListItem>
              <BasicButton :line="true" theme="quaternary" size="mini">
                렌트 숨김
              </BasicButton>
            </ButtonListItem>
            <ButtonListItem>
              <BasicButton :line="true" theme="quaternary" size="mini">
                리스 숨김
              </BasicButton>
            </ButtonListItem>
            <ButtonListItem>
              <BasicButton :line="true" theme="quaternary" size="mini">
                할부 숨김
              </BasicButton>
            </ButtonListItem>
          </ButtonList>
        </FormListItem>
        <!-- // Case : 브랜드 선택시 노출 -->

        <FormListItem
          titleText="모델"
          target="#leaseRentEstimationSystemAdminSettingDefaultModelButton"
          :selectOnly="true"
        >
          <FormInvalid :error="state.modelError">
            <InputBlock :error="state.modelError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '11027 캐스퍼',
                    },
                    {
                      value: '2',
                      text: '10406 올 뉴 아반떼',
                    },
                    {
                      value: '3',
                      text: '10515 올 뉴 아반떼 HEV',
                    },
                    {
                      value: '4',
                      text: '11018 아반떼-N',
                    },
                    {
                      value: '5',
                      text: '10278 벨로스터-N',
                    },
                    {
                      value: '6',
                      text: '10324 신형쏘나타',
                    },
                  ]"
                  buttonTitle="모델 선택하기"
                  layerTitle="모델을 선택해 주세요"
                  id="leaseRentEstimationSystemAdminSettingDefaultModel"
                  buttonId="leaseRentEstimationSystemAdminSettingDefaultModelButton"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <!--  Case : 모델 선택시 노출 -->
        <FormListItem titleText="모델 고유번호" :disabled="true">
          <InputBlock :disabled="true">
            <InputBlockCell :flexible="true">
              <BasicInput defaultValue="11079" :disabled="true" />
            </InputBlockCell>
          </InputBlock>

          <ButtonList
            align="left"
            :classNames="{ wrap: 'row-margin-contents row-margin-bottom-none' }"
          >
            <ButtonListItem>
              <BasicButton :line="true" theme="quaternary" size="mini">
                렌트 숨김
              </BasicButton>
            </ButtonListItem>
            <ButtonListItem>
              <BasicButton :line="true" theme="quaternary" size="mini">
                리스 숨김
              </BasicButton>
            </ButtonListItem>
            <ButtonListItem>
              <BasicButton :line="true" theme="quaternary" size="mini">
                할부 숨김
              </BasicButton>
            </ButtonListItem>
          </ButtonList>
        </FormListItem>
        <!-- // Case : 모델 선택시 노출 -->

        <FormListItem
          titleText="라인업"
          target="#leaseRentEstimationSystemAdminSettingDefaultLineUpButton"
          :selectOnly="true"
        >
          <FormInvalid :error="state.lineUpError">
            <InputBlock :error="state.lineUpError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '111796 2022년형 가솔린 1.0',
                    },
                    {
                      value: '2',
                      text: '111797 2022년형 가솔린 1.0 터보',
                    },
                    {
                      value: '3',
                      text: '112115 2022년형 가솔린 1.0 밴',
                    },
                    {
                      value: '4',
                      text: '112117 2022년형 가솔린 1.0 터보 밴',
                    },
                  ]"
                  buttonTitle="라인업 선택하기"
                  layerTitle="라인업을 선택해 주세요"
                  id="leaseRentEstimationSystemAdminSettingDefaultLineUp"
                  buttonId="leaseRentEstimationSystemAdminSettingDefaultLineUpButton"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <!-- Case : 라인업 선택시 노출 -->
        <FormListItem titleText="라인업 고유번호" :disabled="true">
          <InputBlock :disabled="true">
            <InputBlockCell :flexible="true">
              <BasicInput defaultValue="221" :disabled="true" />
            </InputBlockCell>
          </InputBlock>

          <ButtonList
            align="left"
            :classNames="{ wrap: 'row-margin-contents row-margin-bottom-none' }"
          >
            <ButtonListItem>
              <BasicButton :line="true" theme="quaternary" size="mini">
                렌트 숨김
              </BasicButton>
            </ButtonListItem>
            <ButtonListItem>
              <BasicButton :line="true" theme="quaternary" size="mini">
                리스 숨김
              </BasicButton>
            </ButtonListItem>
            <ButtonListItem>
              <BasicButton :line="true" theme="quaternary" size="mini">
                할부 숨김
              </BasicButton>
            </ButtonListItem>
          </ButtonList>
        </FormListItem>
        <!-- // Case : 라인업 선택시 노출 -->

        <FormListItem
          titleText="트림"
          target="#leaseRentEstimationSystemAdminSettingDefaultTrimButton"
          :selectOnly="true"
        >
          <FormInvalid :error="state.trimError">
            <InputBlock :error="state.trimError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '1040728 디 에센셜 a',
                    },
                    {
                      value: '2',
                      text: '1036116 스마트 a',
                    },
                    {
                      value: '3',
                      text: '1036117 모던 a',
                    },
                    {
                      value: '4',
                      text: '1036118 인스퍼레이션 a',
                    },
                  ]"
                  buttonTitle="트림 선택하기"
                  layerTitle="트림을 선택해 주세요"
                  id="leaseRentEstimationSystemAdminSettingDefaultTrim"
                  buttonId="leaseRentEstimationSystemAdminSettingDefaultTrimButton"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <!-- Case : 트림 선택시 노출 -->
        <FormListItem titleText="트림 고유번호" :disabled="true">
          <InputBlock :disabled="true">
            <InputBlockCell :flexible="true">
              <BasicInput defaultValue="1038389" :disabled="true" />
            </InputBlockCell>
          </InputBlock>

          <ButtonList
            align="left"
            :classNames="{ wrap: 'row-margin-contents row-margin-bottom-none' }"
          >
            <ButtonListItem>
              <BasicButton :line="true" theme="quaternary" size="mini">
                렌트 숨김
              </BasicButton>
            </ButtonListItem>
            <ButtonListItem>
              <BasicButton :line="true" theme="quaternary" size="mini">
                리스 숨김
              </BasicButton>
            </ButtonListItem>
            <ButtonListItem>
              <BasicButton :line="true" theme="quaternary" size="mini">
                할부 숨김
              </BasicButton>
            </ButtonListItem>
          </ButtonList>
        </FormListItem>
        <!-- // Case : 트림 선택시 노출 -->
      </FormList>
    </div>

    <BasicHr class="row-margin-container-medium" />

    <div>
      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-contents">렌트 설정</h3>

        <div>
          <section class="row-margin-container-medium">
            <h4 class="text-body-2 row-margin-item-medium">브랜드 숨김</h4>

            <BoxCheckList align="full">
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="rentalBrandBoxCheck_001"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>벤틀리 235</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="rentalBrandBoxCheck_002"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>롤스로이스 223</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="rentalBrandBoxCheck_003"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>테슬라 441</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="rentalBrandBoxCheck_004"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>페라리 262</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="rentalBrandBoxCheck_005"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>람보르기니 234</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
          </section>

          <section class="row-margin-container-medium">
            <h4 class="text-body-2 row-margin-item-medium">모델 숨김</h4>

            <BoxCheckList align="full">
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="rentalModelBoxCheck_001"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>현대 넥쏘 10273</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="rentalModelBoxCheck_002"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>르노코리아 뉴 마스터 10405</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="rentalModelBoxCheck_003"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>벤츠 AMG GT 10503</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="rentalModelBoxCheck_004"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>현대 쏠라티 10350</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
          </section>

          <section class="row-margin-container-medium">
            <h4 class="text-body-2 row-margin-item-medium">라인업 숨김</h4>

            <BoxCheckList align="full">
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="rentalLineUpBoxCheck_001"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>
                    현대 더 뉴 코나 2021년형 가솔리 1.6 터보 N Line 2WD (개소세
                    5% 기준) 105605
                  </BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="rentalLineUpBoxCheck_002"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>
                    제네시스 Electrified GV70 2022년형 EV (개소세 5% 기준)
                    1121180
                  </BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
          </section>

          <section class="row-margin-container-medium">
            <h4 class="text-body-2 row-margin-item-medium">트림 숨김</h4>

            <BoxCheckList align="full">
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="rentalTrimBoxCheck_001"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>
                    현대 스타리아 2021년형 투어러 디젤 2.2 11인승 스마트 2WD M
                    1030158
                  </BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="rentalTrimBoxCheck_002"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>
                    제네시스 Electrified GV80 2022년형 EV (개소세 5% 기준) AWD a
                    1034936
                  </BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
          </section>
        </div>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-contents">리스 설정</h3>

        <div>
          <section class="row-margin-container-medium">
            <h4 class="text-body-2 row-margin-item-medium">브랜드 숨김</h4>

            <BoxCheckList align="full">
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="leaseBrandBoxCheck_001"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>벤틀리 235</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="leaseBrandBoxCheck_002"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>롤스로이스 223</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="leaseBrandBoxCheck_003"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>테슬라 441</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="leaseBrandBoxCheck_004"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>페라리 262</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="leaseBrandBoxCheck_005"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>람보르기니 234</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
          </section>

          <section class="row-margin-container-medium">
            <h4 class="text-body-2 row-margin-item-medium">모델 숨김</h4>

            <BoxCheckList align="full">
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="leaseModelBoxCheck_001"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>현대 넥쏘 10273</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="leaseModelBoxCheck_002"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>르노코리아 뉴 마스터 10405</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="leaseModelBoxCheck_003"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>벤츠 AMG GT 10503</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="leaseModelBoxCheck_004"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>현대 쏠라티 10350</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
          </section>

          <section class="row-margin-container-medium">
            <h4 class="text-body-2 row-margin-item-medium">라인업 숨김</h4>

            <BoxCheckList align="full">
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="leaseLineUpBoxCheck_001"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>
                    현대 더 뉴 코나 2021년형 가솔리 1.6 터보 N Line 2WD (개소세
                    5% 기준) 105605
                  </BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="leaseLineUpBoxCheck_002"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>
                    제네시스 Electrified GV70 2022년형 EV (개소세 5% 기준)
                    1121180
                  </BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
          </section>

          <section class="row-margin-container-medium">
            <h4 class="text-body-2 row-margin-item-medium">트림 숨김</h4>

            <BoxCheckList align="full">
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="leaseTrimBoxCheck_001"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>
                    현대 스타리아 2021년형 투어러 디젤 2.2 11인승 스마트 2WD M
                    1030158
                  </BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="leaseTrimBoxCheck_002"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>
                    제네시스 Electrified GV80 2022년형 EV (개소세 5% 기준) AWD a
                    1034936
                  </BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
          </section>
        </div>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-contents">할부 설정</h3>

        <div>
          <section class="row-margin-container-medium">
            <h4 class="text-body-2 row-margin-item-medium">브랜드 숨김</h4>

            <BoxCheckList align="full">
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="installmentBrandBoxCheck_001"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>벤틀리 235</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="installmentBrandBoxCheck_002"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>롤스로이스 223</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="installmentBrandBoxCheck_003"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>테슬라 441</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="installmentBrandBoxCheck_004"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>페라리 262</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="installmentBrandBoxCheck_005"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>람보르기니 234</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
          </section>

          <section class="row-margin-container-medium">
            <h4 class="text-body-2 row-margin-item-medium">모델 숨김</h4>

            <BoxCheckList align="full">
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="installmentModelBoxCheck_001"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>현대 넥쏘 10273</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="installmentModelBoxCheck_002"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>르노코리아 뉴 마스터 10405</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="installmentModelBoxCheck_003"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>벤츠 AMG GT 10503</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="installmentModelBoxCheck_004"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>현대 쏠라티 10350</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
          </section>

          <section class="row-margin-container-medium">
            <h4 class="text-body-2 row-margin-item-medium">라인업 숨김</h4>

            <BoxCheckList align="full">
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="installmentLineUpBoxCheck_001"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>
                    현대 더 뉴 코나 2021년형 가솔리 1.6 터보 N Line 2WD (개소세
                    5% 기준) 105605
                  </BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="installmentLineUpBoxCheck_002"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>
                    제네시스 Electrified GV70 2022년형 EV (개소세 5% 기준)
                    1121180
                  </BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
          </section>

          <section class="row-margin-container-medium">
            <h4 class="text-body-2 row-margin-item-medium">트림 숨김</h4>

            <BoxCheckList align="full">
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="installmentTrimBoxCheck_001"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>
                    현대 스타리아 2021년형 투어러 디젤 2.2 11인승 스마트 2WD M
                    1030158
                  </BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :contents="true"
                  type="checkbox"
                  id="installmentTrimBoxCheck_002"
                  :classNames="{ block: 'align-items-start' }"
                >
                  <template v-slot:left>
                    <BoxCheckObject />
                  </template>
                  <BoxCheckLabel>
                    제네시스 Electrified GV80 2022년형 EV (개소세 5% 기준) AWD a
                    1034936
                  </BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
          </section>
        </div>
      </section>
    </div>

    <template v-slot:foot>
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton>변경</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>
  </PageContents>
</template>
