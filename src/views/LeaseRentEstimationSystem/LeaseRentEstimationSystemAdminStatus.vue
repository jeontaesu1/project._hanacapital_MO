<script>
// LR_M05_p006
import { reactive, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';

import IconHomeSetting from '@/assets/images/icon/home-setting.svg?component';
import IconSettingDecide from '@/assets/images/icon/setting-decide.svg?component';
import IconBasicSetting from '@/assets/images/icon/basic-setting.svg?component';
import IconSend from '@/assets/images/icon/send.svg?component';

export default {
  components: {
    RouterLink,
    PageContents,
    BasicButton,
    BasicHr,
    InputBlock,
    InputBlockCell,
    BasicDatepicker,
    BasicSelect,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    IconHomeSetting,
    IconSettingDecide,
    IconBasicSetting,
    IconSend,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      conditionError: false,
      dateError: false,
      minDate: '2023.04.21',
      maxDate: '2023.04.21',
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '관리자');
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
    <div :class="[$style['share-list'], $style['share-list--col-3']]">
      <ul :class="$style['share-list__list']">
        <li :class="$style['share-list__item']">
          <RouterLink :class="$style['share-list__button']" to="">
            <span :class="$style['share-list__icon']">
              <IconHomeSetting />
            </span>
            <span :class="$style['share-list__text']">홈 설정</span>
          </RouterLink>
        </li>
        <li :class="$style['share-list__item']">
          <RouterLink :class="$style['share-list__button']" to="">
            <span :class="$style['share-list__icon']">
              <IconSettingDecide />
            </span>
            <span :class="$style['share-list__text']">관리지정</span>
          </RouterLink>
        </li>
        <li :class="$style['share-list__item']">
          <RouterLink :class="$style['share-list__button']" to="">
            <span :class="$style['share-list__icon']">
              <IconBasicSetting />
            </span>
            <span :class="$style['share-list__text']">기본설정</span>
          </RouterLink>
        </li>
        <li :class="$style['share-list__item']">
          <RouterLink :class="$style['share-list__button']" to="">
            <span :class="$style['share-list__icon']">
              <IconSend />
            </span>
            <span :class="$style['share-list__text']">자동차DB전송</span>
          </RouterLink>
        </li>
        <li :class="$style['share-list__item']">
          <RouterLink :class="$style['share-list__button']" to="">
            <span :class="$style['share-list__icon']">
              <IconHomeSetting />
            </span>
            <span :class="$style['share-list__text']">팝업/보조금</span>
          </RouterLink>
        </li>
      </ul>
    </div>

    <BasicHr className="row-margin-container-medium"></BasicHr>

    <section>
      <div class="flex-box row-margin-contents">
        <div class="flex-box__cell">
          <h2 class="text-title-2">현황조회</h2>
        </div>
        <div class="flex-box__cell flex-box__cell--small">
          <div class="text-body-3">(견적일 기준)</div>
        </div>
      </div>

      <BoxCheckList>
        <BoxCheckListItem>
          <BoxCheck
            :minSide="true"
            name="leaseRentEstimationSystemAdminStatus_check"
            id="leaseRentEstimationSystemAdminStatus_check001"
            :defaultChecked="true"
          >
            <BoxCheckLabel>하나원큐오토</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :minSide="true"
            name="leaseRentEstimationSystemAdminStatus_check"
            id="leaseRentEstimationSystemAdminStatus_check002"
          >
            <BoxCheckLabel>국산차 할부</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :minSide="true"
            name="leaseRentEstimationSystemAdminStatus_check"
            id="leaseRentEstimationSystemAdminStatus_check003"
          >
            <BoxCheckLabel>중고 할부</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>

      <FormList :classNames="{ wrap: 'row-margin-contents-group' }">
        <!-- Case : 국산차 할부, 중고 할부 선택시 미노출 -->
        <FormListItem
          titleText="조회조건"
          target="#leaseRentEstimationSystemAdminStatusConditionButton"
          :selectOnly="true"
        >
          <FormInvalid :error="state.conditionError">
            <InputBlock :error="state.conditionError">
              <InputBlockCell :flexible="true">
                <BasicSelect
                  :option="[
                    {
                      value: '1',
                      text: '전체',
                    },
                    {
                      value: '2',
                      text: '렌트',
                    },
                    {
                      value: '3',
                      text: '신차 리스',
                    },
                    {
                      value: '4',
                      text: '수입차 할부',
                    },
                    {
                      value: '5',
                      text: '시승차',
                    },
                    {
                      value: '6',
                      text: '선구매',
                    },
                    {
                      value: '7',
                      text: '중고차 리스',
                    },
                  ]"
                  buttonTitle="조회조건 선택하기"
                  layerTitle="현황조회 조건을 선택해 주세요"
                  id="leaseRentEstimationSystemAdminStatusCondition001"
                  buttonId="leaseRentEstimationSystemAdminStatusConditionButton"
                  defaultValue="1"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- // Case : 국산차 할부, 중고 할부 선택시 미노출 -->

        <FormListItem titleText="조회기간" :forceFocus="true">
          <FormInvalid :error="state.dateError">
            <InputBlock :error="state.dateError">
              <InputBlockCell :flexible="true">
                <BasicDatepicker
                  title="조회기간 시작 날짜"
                  id="leaseRentEstimationSystemAdminStatusDateStart"
                  buttonId="leaseRentEstimationSystemAdminStatusDateStartButton"
                  :max="state.maxDate"
                  v-model="state.minDate"
                />
              </InputBlockCell>
              <InputBlockCell margin="regular">
                <div class="text-body-3">~</div>
              </InputBlockCell>
              <InputBlockCell :flexible="true" margin="regular">
                <BasicDatepicker
                  title="조회기간 종료 날짜"
                  id="leaseRentEstimationSystemAdminStatusDateEnd"
                  buttonId="leaseRentEstimationSystemAdminStatusDateEndButton"
                  :min="state.minDate"
                  v-model="state.maxDate"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <BasicButton
        :line="true"
        :classNames="{
          wrap: 'row-margin-container-medium row-margin-bottom-none',
        }"
      >
        조회
      </BasicButton>

      <!-- Case : 하나원큐오토 -->
      <ul :class="[$style['status-inquiry'], 'row-margin-contents-group']">
        <li :class="$style['status-inquiry__item']">
          <button type="button" :class="$style['status-inquiry__category']">
            <span :class="$style['status-inquiry__number']">10</span>
            <span :class="$style['status-inquiry__text']">가견적</span>
          </button>
        </li>
        <li :class="$style['status-inquiry__item']">
          <button type="button" :class="$style['status-inquiry__category']">
            <span :class="$style['status-inquiry__number']">4</span>
            <span :class="$style['status-inquiry__text']">견적</span>
          </button>
        </li>
        <li :class="$style['status-inquiry__item']">
          <button type="button" :class="$style['status-inquiry__category']">
            <span :class="$style['status-inquiry__number']">3</span>
            <span :class="$style['status-inquiry__text']">심사</span>
          </button>
        </li>
        <li :class="$style['status-inquiry__item']">
          <button type="button" :class="$style['status-inquiry__category']">
            <span :class="$style['status-inquiry__number']">2</span>
            <span :class="$style['status-inquiry__text']">품의</span>
          </button>
        </li>
        <li :class="$style['status-inquiry__item']">
          <button type="button" :class="$style['status-inquiry__category']">
            <span :class="$style['status-inquiry__number']">1</span>
            <span :class="$style['status-inquiry__text']">인도</span>
          </button>
        </li>
      </ul>
      <!-- // Case : 하나원큐오토 -->

      <!-- Case : 국산차 할부, 중고 할부 -->
      <ul :class="[$style['status-inquiry'], 'row-margin-contents-group']">
        <li :class="$style['status-inquiry__item']">
          <button type="button" :class="$style['status-inquiry__category']">
            <span :class="$style['status-inquiry__number']">10</span>
            <span :class="$style['status-inquiry__text']">전체</span>
          </button>
        </li>
        <li :class="$style['status-inquiry__item']">
          <button type="button" :class="$style['status-inquiry__category']">
            <span :class="$style['status-inquiry__number']">4</span>
            <span :class="$style['status-inquiry__text']">신용동의</span>
          </button>
        </li>
        <li :class="$style['status-inquiry__item']">
          <button type="button" :class="$style['status-inquiry__category']">
            <span :class="$style['status-inquiry__number']">3</span>
            <span :class="$style['status-inquiry__text']">상담</span>
          </button>
        </li>
        <li :class="$style['status-inquiry__item']">
          <button type="button" :class="$style['status-inquiry__category']">
            <span :class="$style['status-inquiry__number']">2</span>
            <span :class="$style['status-inquiry__text']">계약</span>
          </button>
        </li>
        <li :class="$style['status-inquiry__item']">
          <button type="button" :class="$style['status-inquiry__category']">
            <span :class="$style['status-inquiry__number']">1</span>
            <span :class="$style['status-inquiry__text']">송금</span>
          </button>
        </li>
      </ul>
      <!-- // Case : 국산차 할부, 중고 할부 -->
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemAdminStatus.scss';
</style>
