<script>
// EL_M02_p002
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import FilterButton from '@/components/ui/button/FilterButton.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import IconArrow from '@/assets/images/icon/dropdown.svg?component';
import IconCalculate from '@/assets/images/icon/calculate.svg?component';

export default {
  components: {
    PageContents,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicButton,
    BasicHr,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormHelpText,
    BasicDatepicker,
    FilterButton,
    RoundStatus,
    TextButton,
    ButtonList,
    ButtonListItem,
    IconCalculate,
    IconArrow,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      filterOpen: false,
      minDate: '2023.04.21',
      maxDate: '2023.04.21',
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '일반리스');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });

    const toggleFilter = () => {
      state.filterOpen = !state.filterOpen;
    };

    return {
      state,
      toggleFilter,
    };
  },
};
</script>

<template>
  <PageContents>
    <section class="contents-wrap">
      <div class="flex-box row-margin-contents">
        <div class="flex-box__cell flex-1">
          <h3 class="text-title-2">현황조회</h3>
        </div>
        <div class="flex-box__cell flex-box__cell--medium">
          <FilterButton
            :active="state.filterOpen"
            :text="`조회 필터 ${state.filterOpen ? '닫기' : '열기'}`"
            :activeText="null"
            @click="toggleFilter"
          />
        </div>
      </div>
      <ul :class="[$style['status-inquiry'], $style['status-inquiry--gap']]">
        <li :class="$style['status-inquiry__item']">
          <button type="button" :class="$style['status-inquiry__category']">
            <span :class="$style['status-inquiry__number']">10</span>
            <span :class="$style['status-inquiry__text']">견적</span>
          </button>
        </li>
        <li :class="$style['status-inquiry__item']">
          <button
            type="button"
            :class="[
              $style['status-inquiry__category'],
              $style['status-inquiry__category--active'],
            ]"
          >
            <span :class="$style['status-inquiry__number']">4</span>
            <span :class="$style['status-inquiry__text']">품의</span>
          </button>
        </li>
      </ul>

      <div v-if="state.filterOpen">
        <FormList>
          <FormListItem titleText="조회기간" :forceFocus="true">
            <BoxCheckList :classNames="{ wrap: 'row-margin-item-group' }">
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="equipmentLeaseStateInternalMemoDateCheck"
                  id="equipmentLeaseStateInternalMemoDateCheck001"
                >
                  <BoxCheckLabel>오늘</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="equipmentLeaseStateInternalMemoDateCheck"
                  id="equipmentLeaseStateInternalMemoDateCheck002"
                >
                  <BoxCheckLabel>1주</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="equipmentLeaseStateInternalMemoDateCheck"
                  id="equipmentLeaseStateInternalMemoDateCheck003"
                >
                  <BoxCheckLabel>1개월</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="equipmentLeaseStateInternalMemoDateCheck"
                  id="equipmentLeaseStateInternalMemoDateCheck004"
                >
                  <BoxCheckLabel>직접설정</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <InputBlock>
              <InputBlockCell :flexible="true">
                <BasicDatepicker
                  title="조회기간 시작 날짜"
                  id="equipmentLeaseStateInternalMemoDateStart"
                  buttonId="equipmentLeaseStateInternalMemoDateStartButton"
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
                  id="equipmentLeaseStateInternalMemoDateEnd"
                  buttonId="equipmentLeaseStateInternalMemoDateEndButton"
                  :min="state.minDate"
                  v-model="state.maxDate"
                />
              </InputBlockCell>
            </InputBlock>
            <FormHelpText
              >최근 3개월 이내, 최대 1개월 단위 조회 가능</FormHelpText
            >
          </FormListItem>
          <FormListItem titleText="조회조건" :forceFocus="true">
            <BoxCheckList :classNames="{ wrap: 'row-margin-item-group' }">
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="salesUsedCarHomeType"
                  id="salesUsedCarHomeType001"
                  :defaultChecked="true"
                >
                  <BoxCheckLabel>전체상품</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="salesUsedCarHomeType"
                  id="salesUsedCarHomeType002"
                >
                  <BoxCheckLabel>의료기</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  :minSide="true"
                  name="salesUsedCarHomeType"
                  id="salesUsedCarHomeType002"
                >
                  <BoxCheckLabel>스크린골프</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
            <InputBlock
              :classNames="{
                wrap: 'row-margin-item-group',
              }"
            >
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="search"
                  title="검색어 입력"
                  placeholder="검색어 입력"
                />
              </InputBlockCell>
            </InputBlock>
          </FormListItem>
        </FormList>

        <div class="row-margin-contents-group">
          <BasicButton :line="true">조회</BasicButton>
        </div>
      </div>

      <BasicHr
        v-if="state.filterOpen"
        className="row-margin-container-medium"
      />

      <ul class="reset-list">
        <li class="row-margin-item-group">
          <BasicBox>
            <div class="flex-box">
              <div class="flex-box__cell flex-1">
                <div class="color-black text-body-4 font-weight-light">
                  2023.01.10
                </div>
                <p class="text-body-1 row-margin-small font-weight-medium">
                  김하나
                </p>
              </div>
              <div class="flex-box__cell flex-box__cell--small">
                <RoundStatus
                  theme="secondary"
                  :classNames="{ wrap: 'display-block' }"
                  >의료기기</RoundStatus
                >
              </div>
            </div>

            <BasicHr
              theme="quaternary"
              type="contents"
              className="row-margin-contents-small"
            />

            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle
                  :classNames="{
                    item: 'text-body-3',
                  }"
                  >약정여부</KeyValueTitle
                >
                <KeyValueText>
                  <span class="color-green font-weight-medium">미완료</span>
                </KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle
                  :classNames="{
                    item: 'text-body-3',
                  }"
                  >물건점검여부</KeyValueTitle
                >
                <KeyValueText>
                  <span class="color-green font-weight-medium">미완료</span>
                </KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle
                  :classNames="{
                    item: 'text-body-3',
                  }"
                  >물건명</KeyValueTitle
                >
                <KeyValueText>울쎄라</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>사업자명</KeyValueTitle>
                <KeyValueText>하나의원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>리스금액</KeyValueTitle>
                <KeyValueText>100,000,000원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>직원명/리스할부팀</KeyValueTitle>
                <KeyValueText>AG: 대표관리부서<br />AG 이름</KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <ButtonList
              :wrap="true"
              :classNames="{ wrap: 'row-margin-contents-small' }"
            >
              <ButtonListItem>
                <BasicButton :line="true" size="small">
                  전자약정 전송
                </BasicButton>
              </ButtonListItem>
              <ButtonListItem>
                <BasicButton :line="true" size="small">
                  물건검수(직원)
                </BasicButton>
              </ButtonListItem>
              <ButtonListItem>
                <BasicButton :line="true" size="small" theme="quaternary">
                  물건검수SMS
                </BasicButton>
              </ButtonListItem>
              <ButtonListItem>
                <BasicButton size="small" theme="tertiary">
                  물건검수완료
                </BasicButton>
              </ButtonListItem>
            </ButtonList>
          </BasicBox>
        </li>
        <li class="row-margin-item-group">
          <BasicBox>
            <div class="flex-box">
              <div class="flex-box__cell flex-1">
                <div class="color-black text-body-4 font-weight-light">
                  2023.01.10
                </div>
                <p class="text-body-1 row-margin-small font-weight-medium">
                  김하나
                </p>
              </div>
              <div class="flex-box__cell flex-box__cell--small">
                <RoundStatus
                  theme="secondary"
                  :classNames="{ wrap: 'display-block' }"
                  >스크린골프</RoundStatus
                >
              </div>
            </div>

            <BasicHr
              theme="quaternary"
              type="contents"
              className="row-margin-contents-small"
            />

            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle
                  :classNames="{
                    item: 'text-body-3',
                  }"
                  >약정여부</KeyValueTitle
                >
                <KeyValueText>
                  <span class="color-green font-weight-medium">
                    완료<br />
                    (동의일: 2023.02.23)
                  </span>
                </KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle
                  :classNames="{
                    item: 'text-body-3',
                  }"
                  >물건점검여부</KeyValueTitle
                >
                <KeyValueText>
                  <span class="color-green font-weight-medium">
                    완료<br />
                    (동의일: 2023.02.23)
                  </span>
                </KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle
                  :classNames="{
                    item: 'text-body-3',
                  }"
                  >물건명</KeyValueTitle
                >
                <KeyValueText>울쎄라</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>사업자명</KeyValueTitle>
                <KeyValueText>하나의원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>리스금액</KeyValueTitle>
                <KeyValueText>100,000,000원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>직원명/리스할부팀</KeyValueTitle>
                <KeyValueText>AG: 대표관리부서<br />AG 이름</KeyValueText>
              </KeyValueItem>
            </KeyValue>

            <ButtonList
              :wrap="true"
              :classNames="{ wrap: 'row-margin-contents-small' }"
            >
              <ButtonListItem>
                <BasicButton :line="true" size="small">
                  전자약정 전송
                </BasicButton>
              </ButtonListItem>
              <ButtonListItem>
                <BasicButton :line="true" size="small">
                  물건검수(직원)
                </BasicButton>
              </ButtonListItem>
              <ButtonListItem>
                <BasicButton :line="true" size="small" theme="quaternary">
                  물건검수SMS
                </BasicButton>
              </ButtonListItem>
              <ButtonListItem>
                <BasicButton size="small" theme="tertiary">
                  물건검수완료
                </BasicButton>
              </ButtonListItem>
            </ButtonList>
          </BasicBox>
        </li>
      </ul>

      <div class="inline-wrap align-center row-margin-item-group">
        <TextButton :classNames="{ wrap: 'text-body-4 color-gray' }">
          더보기
          <template v-slot:rightIcon>
            <IconArrow />
          </template>
        </TextButton>
      </div>
    </section>

    <BasicHr
      theme="tertiary"
      type="contents"
      className="row-margin-container"
    />

    <div :class="$style['icon-list']">
      <ul :class="$style['icon-list__list']">
        <li :class="$style['icon-list__item']">
          <button type="button" :class="$style['icon-list__block']">
            <span :class="$style['icon-list__icon']"><IconCalculate /></span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__title']">리스조건 계산하기</span>
            </span>
          </button>
        </li>
      </ul>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/equipmentLease/EquipmentLeaseStateInternalMemo.scss';
</style>
