<script>
// My_M03_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import FilterTab from '@/components/ui/tab/FilterTab.vue';
import FilterTabButton from '@/components/ui/tab/FilterTabButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicProgress from '@/components/ui/progress/BasicProgress.vue';

export default {
  components: {
    PageContents,
    FilterTab,
    FilterTabButton,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    RoundStatus,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicProgress,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '진행상태조회');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });
  },
};
</script>

<template>
  <PageContents>
    <FilterTab>
      <FilterTabButton tagName="button" type="button" :active="true"
        >전체 21</FilterTabButton
      >
      <FilterTabButton tagName="button" type="button"
        >개인금융 1
      </FilterTabButton>
      <FilterTabButton tagName="button" type="button"
        >오토금융 20
      </FilterTabButton>
    </FilterTab>

    <!-- Case : 신용대출 - 상담 -->
    <BasicBox :className="$style['box']">
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <div :class="$style['division-info']">
            <ul :class="$style['division-info__list']">
              <li :class="$style['division-info__item']">
                <div class="color-black text-body-4 font-weight-light">
                  2023.01.10
                </div>
              </li>
              <li :class="$style['division-info__item']">
                <div class="color-green text-body-4 font-weight-medium">
                  개인금융
                </div>
              </li>
            </ul>
          </div>
          <h3 class="text-body-1 font-weight-medium row-margin-small ellipsis">
            e하나신용대출
          </h3>
        </BasicBoxHeadLeft>
        <BasicBoxHeadRight>
          <RoundStatus :classNames="{ wrap: 'display-block' }" theme="undenary">
            신규
          </RoundStatus>
        </BasicBoxHeadRight>
      </BasicBoxHead>
      <KeyValue margin="regular">
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }">
            최대한도
          </KeyValueTitle>
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            5,000,000 원
          </KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }">
            예상금리
          </KeyValueTitle>
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            10.9% (60개월 기준)
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>

      <div
        :class="[
          $style['inline-alert'],
          $style['inline-alert--complete'],
          'row-margin-contents-small',
        ]"
      >
        <p :class="$style['inline-alert__text']">한도조회가 완료되었습니다.</p>
      </div>

      <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
        <ButtonListItem>
          <BasicButton size="small">대출 신청하기</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </BasicBox>
    <!-- //Case : 신용대출 - 상담 -->

    <!-- Case : 신용대출 - 심사중 -->
    <BasicBox :className="$style['box']">
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <div :class="$style['division-info']">
            <ul :class="$style['division-info__list']">
              <li :class="$style['division-info__item']">
                <div class="color-black text-body-4 font-weight-light">
                  2023.01.10
                </div>
              </li>
              <li :class="$style['division-info__item']">
                <div class="color-green text-body-4 font-weight-medium">
                  개인금융
                </div>
              </li>
            </ul>
          </div>
          <h3 class="text-body-1 font-weight-medium row-margin-small ellipsis">
            e하나신용대출
          </h3>
        </BasicBoxHeadLeft>
        <BasicBoxHeadRight>
          <RoundStatus :classNames="{ wrap: 'display-block' }" theme="undenary">
            연장
          </RoundStatus>
        </BasicBoxHeadRight>
      </BasicBoxHead>
      <KeyValue margin="regular">
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }"
            >대출금액/기간</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            4,000,000 원 / 36개월
          </KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }">
            대출금리
          </KeyValueTitle>
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            10.9%
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>

      <div
        :class="[
          $style['inline-alert'],
          $style['inline-alert--complete'],
          'row-margin-contents-small',
        ]"
      >
        <p :class="$style['inline-alert__text']">
          진행중인 대출건에 대해 심사중입니다.
        </p>
      </div>
    </BasicBox>
    <!-- //Case : 신용대출 - 심사중 -->

    <!-- Case : 신용대출 - 약정 -->
    <BasicBox :className="$style['box']">
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <div :class="$style['division-info']">
            <ul :class="$style['division-info__list']">
              <li :class="$style['division-info__item']">
                <div class="color-black text-body-4 font-weight-light">
                  2023.01.10
                </div>
              </li>
              <li :class="$style['division-info__item']">
                <div class="color-green text-body-4 font-weight-medium">
                  개인금융
                </div>
              </li>
            </ul>
          </div>
          <h3 class="text-body-1 font-weight-medium row-margin-small ellipsis">
            e하나신용대출
          </h3>
        </BasicBoxHeadLeft>
        <BasicBoxHeadRight>
          <RoundStatus :classNames="{ wrap: 'display-block' }" theme="undenary">
            승계
          </RoundStatus>
        </BasicBoxHeadRight>
      </BasicBoxHead>
      <KeyValue margin="regular">
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }">
            대출금액/기간
          </KeyValueTitle>
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            4,000,000 원 / 36개월
          </KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }">
            대출금리
          </KeyValueTitle>
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            10.9%
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>

      <BasicProgress
        :total="4"
        :current="1"
        :classNames="{ wrap: 'row-margin-contents-small' }"
      />

      <div
        :class="[
          $style['inline-alert'],
          $style['inline-alert--complete'],
          'row-margin-contents-small',
        ]"
      >
        <p :class="$style['inline-alert__text']">
          약정중입니다. (적합성·적정성 확인서)
        </p>
      </div>

      <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
        <ButtonListItem>
          <BasicButton size="small">약정하기</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </BasicBox>
    <!-- //Case : 신용대출 - 약정 -->

    <!-- Case : 일반할부금융 - 약정 -->
    <BasicBox :className="$style['box']">
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <div :class="$style['division-info']">
            <ul :class="$style['division-info__list']">
              <li :class="$style['division-info__item']">
                <div class="color-black text-body-4 font-weight-light">
                  2023.01.10
                </div>
              </li>
              <li :class="$style['division-info__item']">
                <div class="color-green text-body-4 font-weight-medium">
                  개인금융
                </div>
              </li>
            </ul>
          </div>
          <h3 class="text-body-1 font-weight-medium row-margin-small ellipsis">
            의료기할부
          </h3>
        </BasicBoxHeadLeft>
        <BasicBoxHeadRight>
          <RoundStatus :classNames="{ wrap: 'display-block' }" theme="undenary">
            신규
          </RoundStatus>
        </BasicBoxHeadRight>
      </BasicBoxHead>
      <KeyValue margin="regular">
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }">
            대출금액/기간
          </KeyValueTitle>
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            24,990,000원/36개월
          </KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }">
            월납부금액
          </KeyValueTitle>
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            300,000원
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>

      <div
        :class="[
          $style['inline-alert'],
          $style['inline-alert--complete'],
          'row-margin-contents-small',
        ]"
      >
        <p :class="$style['inline-alert__text']">
          약정을 진행하실 수 있습니다.
        </p>
      </div>

      <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
        <ButtonListItem>
          <BasicButton size="small">약정하기</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </BasicBox>

    <BasicBox :className="$style['box']">
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <div :class="$style['division-info']">
            <ul :class="$style['division-info__list']">
              <li :class="$style['division-info__item']">
                <div class="color-black text-body-4 font-weight-light">
                  2023.01.10
                </div>
              </li>
              <li :class="$style['division-info__item']">
                <div class="color-green text-body-4 font-weight-medium">
                  개인금융
                </div>
              </li>
            </ul>
          </div>
          <h3 class="text-body-1 font-weight-medium row-margin-small ellipsis">
            내구재할부
          </h3>
        </BasicBoxHeadLeft>
        <BasicBoxHeadRight>
          <RoundStatus :classNames="{ wrap: 'display-block' }" theme="undenary">
            신규
          </RoundStatus>
        </BasicBoxHeadRight>
      </BasicBoxHead>
      <KeyValue margin="regular">
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }"
            >대출금액/기간</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            24,990,000원/36개월
          </KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }"
            >월납부금액</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            300,000원
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>

      <BasicProgress
        :total="4"
        :current="1"
        :classNames="{ wrap: 'row-margin-contents-small' }"
      />

      <div
        :class="[
          $style['inline-alert'],
          $style['inline-alert--complete'],
          'row-margin-contents-small',
        ]"
      >
        <p :class="$style['inline-alert__text']">
          약정중입니다. (적합성·적정성 확인서)
        </p>
      </div>

      <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
        <ButtonListItem>
          <BasicButton size="small">약정하기</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </BasicBox>
    <!-- //Case : 일반할부금융 - 약정 -->

    <!-- Case : 오토금융 - 접수 -->
    <BasicBox :className="$style['box']">
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <div :class="$style['division-info']">
            <ul :class="$style['division-info__list']">
              <li :class="$style['division-info__item']">
                <div class="color-black text-body-4 font-weight-light">
                  2023.01.10
                </div>
              </li>
              <li :class="$style['division-info__item']">
                <div class="color-green text-body-4 font-weight-medium">
                  오토금융
                </div>
              </li>
            </ul>
          </div>
          <h3 class="text-body-1 font-weight-medium row-margin-small ellipsis">
            오토리스
          </h3>
          <p class="text-body-4 color-gray row-margin-small">
            현대 올 뉴 아반떼(CN7)/인스퍼레이션
          </p>
        </BasicBoxHeadLeft>
        <BasicBoxHeadRight>
          <RoundStatus :classNames="{ wrap: 'display-block' }" theme="undenary">
            연장
          </RoundStatus>
        </BasicBoxHeadRight>
      </BasicBoxHead>
      <KeyValue margin="regular">
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }"
            >차량가격</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            24,990,000원
          </KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }"
            >신청금액</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-body-3' }"
            >24,990,000원</KeyValueText
          >
        </KeyValueItem>
      </KeyValue>

      <div
        :class="[
          $style['inline-alert'],
          $style['inline-alert--complete'],
          'row-margin-contents-small',
        ]"
      >
        <p :class="$style['inline-alert__text']">계약이 접수되었습니다.</p>
      </div>
    </BasicBox>
    <!-- //Case : 오토금융 - 접수 -->

    <!-- Case : 오토금융 - 상담/심사 -->
    <BasicBox :className="$style['box']">
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <div :class="$style['division-info']">
            <ul :class="$style['division-info__list']">
              <li :class="$style['division-info__item']">
                <div class="color-black text-body-4 font-weight-light">
                  2023.01.10
                </div>
              </li>
              <li :class="$style['division-info__item']">
                <div class="color-green text-body-4 font-weight-medium">
                  오토금융
                </div>
              </li>
            </ul>
          </div>
          <h3 class="text-body-1 font-weight-medium row-margin-small ellipsis">
            오토리스
          </h3>
          <p class="text-body-4 color-gray row-margin-small">
            현대 올 뉴 아반떼(CN7)/인스퍼레이션
          </p>
        </BasicBoxHeadLeft>
        <BasicBoxHeadRight>
          <RoundStatus :classNames="{ wrap: 'display-block' }" theme="undenary">
            연장
          </RoundStatus>
        </BasicBoxHeadRight>
      </BasicBoxHead>
      <KeyValue margin="regular">
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }"
            >대출금액/기간</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            24,990,000원/36개월
          </KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }"
            >월납부금액</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            300,000원
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>

      <div
        :class="[
          $style['inline-alert'],
          $style['inline-alert--complete'],
          'row-margin-contents-small',
        ]"
      >
        <p :class="$style['inline-alert__text']">
          약정을 진행하실 수 있습니다.
        </p>
      </div>

      <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
        <ButtonListItem>
          <BasicButton size="small">약정하기</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </BasicBox>
    <!-- //Case : 오토금융 - 상담/심사 -->

    <!-- Case : 오토금융 - 약정 -->
    <BasicBox :className="$style['box']">
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <div :class="$style['division-info']">
            <ul :class="$style['division-info__list']">
              <li :class="$style['division-info__item']">
                <div class="color-black text-body-4 font-weight-light">
                  2023.01.10
                </div>
              </li>
              <li :class="$style['division-info__item']">
                <div class="color-green text-body-4 font-weight-medium">
                  오토금융
                </div>
              </li>
            </ul>
          </div>
          <h3 class="text-body-1 font-weight-medium row-margin-small ellipsis">
            오토리스
          </h3>
          <p class="text-body-4 color-gray row-margin-small">
            현대 올 뉴 아반떼(CN7)/인스퍼레이션
          </p>
        </BasicBoxHeadLeft>
        <BasicBoxHeadRight>
          <RoundStatus :classNames="{ wrap: 'display-block' }" theme="undenary">
            정상
          </RoundStatus>
        </BasicBoxHeadRight>
      </BasicBoxHead>
      <KeyValue margin="regular">
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }"
            >이용기간</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            36개월
          </KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }"
            >월납부금액</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            770,800원
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>

      <BasicProgress
        :total="4"
        :current="1"
        :classNames="{ wrap: 'row-margin-contents-small' }"
      />

      <div
        :class="[
          $style['inline-alert'],
          $style['inline-alert--complete'],
          'row-margin-contents-small',
        ]"
      >
        <p :class="$style['inline-alert__text']">
          약정중입니다. (적합성·적정성 확인서)
        </p>
      </div>

      <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
        <ButtonListItem>
          <BasicButton size="small">약정하기</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </BasicBox>
    <!-- //Case : 오토금융 - 약정 -->

    <!-- Case : 오토금융 - 심사완료 -->
    <BasicBox :className="$style['box']">
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <div :class="$style['division-info']">
            <ul :class="$style['division-info__list']">
              <li :class="$style['division-info__item']">
                <div class="color-black text-body-4 font-weight-light">
                  2023.01.10
                </div>
              </li>
              <li :class="$style['division-info__item']">
                <div class="color-green text-body-4 font-weight-medium">
                  오토금융
                </div>
              </li>
            </ul>
          </div>
          <h3 class="text-body-1 font-weight-medium row-margin-small ellipsis">
            오토리스
          </h3>
          <p class="text-body-4 color-gray row-margin-small">
            현대 올 뉴 아반떼(CN7)/인스퍼레이션
          </p>
        </BasicBoxHeadLeft>
        <BasicBoxHeadRight>
          <RoundStatus :classNames="{ wrap: 'display-block' }" theme="undenary">
            연장
          </RoundStatus>
        </BasicBoxHeadRight>
      </BasicBoxHead>
      <KeyValue margin="regular">
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }"
            >대출금액/기간</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            24,990,000원/36개월
          </KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }"
            >월납부금액</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            300,000원
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>

      <div
        :class="[
          $style['inline-alert'],
          $style['inline-alert--complete'],
          'row-margin-contents-small',
        ]"
      >
        <p :class="$style['inline-alert__text']">
          심사가 완료되었습니다.<br />심사 결과는 전화로 안내드릴 예정입니다.
        </p>
      </div>

      <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
        <ButtonListItem>
          <BasicButton size="small">약정하기</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </BasicBox>
    <!-- //Case : 오토금융 - 심사완료 -->

    <!-- Case : 오토금융 - 계약준비중 -->
    <BasicBox :className="$style['box']">
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <div :class="$style['division-info']">
            <ul :class="$style['division-info__list']">
              <li :class="$style['division-info__item']">
                <div class="color-black text-body-4 font-weight-light">
                  2023.01.10
                </div>
              </li>
              <li :class="$style['division-info__item']">
                <div class="color-green text-body-4 font-weight-medium">
                  오토금융
                </div>
              </li>
            </ul>
          </div>
          <h3 class="text-body-1 font-weight-medium row-margin-small ellipsis">
            오토리스
          </h3>
          <p class="text-body-4 color-gray row-margin-small">
            현대 올 뉴 아반떼(CN7)/인스퍼레이션
          </p>
        </BasicBoxHeadLeft>
        <BasicBoxHeadRight>
          <RoundStatus :classNames="{ wrap: 'display-block' }" theme="undenary">
            연장
          </RoundStatus>
        </BasicBoxHeadRight>
      </BasicBoxHead>
      <KeyValue margin="regular">
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }"
            >대출금액/기간</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            24,990,000원/36개월
          </KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }"
            >월납부금액</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            300,000원
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>

      <div
        :class="[
          $style['inline-alert'],
          $style['inline-alert--complete'],
          'row-margin-contents-small',
        ]"
      >
        <p :class="$style['inline-alert__text']">
          계약 체결을 위해 준비 중에 있습니다.<br />준비가 완료되는대로 계약
          진행 예정입니다.
        </p>
      </div>

      <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
        <ButtonListItem>
          <BasicButton size="small">약정하기</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </BasicBox>
    <!-- //Case : 오토금융 - 계약준비중 -->

    <!-- Case : 오토금융 - 계약진행중 -->
    <BasicBox :className="$style['box']">
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <div :class="$style['division-info']">
            <ul :class="$style['division-info__list']">
              <li :class="$style['division-info__item']">
                <div class="color-black text-body-4 font-weight-light">
                  2023.01.10
                </div>
              </li>
              <li :class="$style['division-info__item']">
                <div class="color-green text-body-4 font-weight-medium">
                  오토금융
                </div>
              </li>
            </ul>
          </div>
          <h3 class="text-body-1 font-weight-medium row-margin-small ellipsis">
            오토리스
          </h3>
          <p class="text-body-4 color-gray row-margin-small">
            현대 올 뉴 아반떼(CN7)/인스퍼레이션
          </p>
        </BasicBoxHeadLeft>
        <BasicBoxHeadRight>
          <RoundStatus :classNames="{ wrap: 'display-block' }" theme="undenary">
            연장
          </RoundStatus>
        </BasicBoxHeadRight>
      </BasicBoxHead>
      <KeyValue margin="regular">
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }"
            >대출금액/기간</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            24,990,000원/36개월
          </KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }"
            >월납부금액</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            300,000원
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>

      <div
        :class="[
          $style['inline-alert'],
          $style['inline-alert--complete'],
          'row-margin-contents-small',
        ]"
      >
        <p :class="$style['inline-alert__text']">
          계약이 진행 중에 있습니다.<br />
          전자약정을 하시면 보다 빠른 진행이 가능합니다.
        </p>
      </div>

      <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
        <ButtonListItem>
          <BasicButton size="small">약정하기</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </BasicBox>
    <!-- //Case : 오토금융 - 계약진행중 -->

    <!-- Case : 오토금융 - 취소 -->
    <BasicBox :className="$style['box']">
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <div :class="$style['division-info']">
            <ul :class="$style['division-info__list']">
              <li :class="$style['division-info__item']">
                <div class="color-black text-body-4 font-weight-light">
                  2023.01.10
                </div>
              </li>
              <li :class="$style['division-info__item']">
                <div class="color-green text-body-4 font-weight-medium">
                  오토금융
                </div>
              </li>
            </ul>
          </div>
          <h3 class="text-body-1 font-weight-medium row-margin-small ellipsis">
            오토리스
          </h3>
          <p class="text-body-4 color-gray row-margin-small">
            현대 올 뉴 아반떼(CN7)/인스퍼레이션
          </p>
        </BasicBoxHeadLeft>
        <BasicBoxHeadRight>
          <RoundStatus :classNames="{ wrap: 'display-block' }" theme="undenary">
            연장
          </RoundStatus>
        </BasicBoxHeadRight>
      </BasicBoxHead>
      <KeyValue margin="regular">
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }"
            >대출금액/기간</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            24,990,000원/36개월
          </KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }"
            >월납부금액</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            300,000원
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>

      <div
        :class="[
          $style['inline-alert'],
          $style['inline-alert--complete'],
          'row-margin-contents-small',
        ]"
      >
        <p :class="$style['inline-alert__text']">계약이 취소되었습니다.</p>
      </div>

      <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
        <ButtonListItem>
          <BasicButton size="small">약정하기</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </BasicBox>
    <!-- //Case : 오토금융 - 취소 -->

    <!-- Case : 오토금융 - 차량출고중 -->
    <BasicBox :className="$style['box']">
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <div :class="$style['division-info']">
            <ul :class="$style['division-info__list']">
              <li :class="$style['division-info__item']">
                <div class="color-black text-body-4 font-weight-light">
                  2023.01.10
                </div>
              </li>
              <li :class="$style['division-info__item']">
                <div class="color-green text-body-4 font-weight-medium">
                  오토금융
                </div>
              </li>
            </ul>
          </div>
          <h3 class="text-body-1 font-weight-medium row-margin-small ellipsis">
            오토리스
          </h3>
          <p class="text-body-4 color-gray row-margin-small">
            현대 올 뉴 아반떼(CN7)/인스퍼레이션
          </p>
        </BasicBoxHeadLeft>
        <BasicBoxHeadRight>
          <RoundStatus :classNames="{ wrap: 'display-block' }" theme="undenary">
            연장
          </RoundStatus>
        </BasicBoxHeadRight>
      </BasicBoxHead>
      <KeyValue margin="regular">
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }"
            >대출금액/기간</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            24,990,000원/36개월
          </KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }"
            >월납부금액</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            300,000원
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>

      <div
        :class="[
          $style['inline-alert'],
          $style['inline-alert--complete'],
          'row-margin-contents-small',
        ]"
      >
        <p :class="$style['inline-alert__text']">
          차량이 출고 중에 있습니다.<br />
          차량 출고 및 등록이 완료되는대로 고객님께 차량을 인도드릴 예정입니다.
        </p>
      </div>

      <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
        <ButtonListItem>
          <BasicButton size="small">약정하기</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </BasicBox>
    <!-- //Case : 오토금융 - 차량출고중 -->

    <!-- Case : 오토금융 - 완료 -->
    <BasicBox :className="$style['box']">
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <div :class="$style['division-info']">
            <ul :class="$style['division-info__list']">
              <li :class="$style['division-info__item']">
                <div class="color-black text-body-4 font-weight-light">
                  2023.01.10
                </div>
              </li>
              <li :class="$style['division-info__item']">
                <div class="color-green text-body-4 font-weight-medium">
                  오토금융
                </div>
              </li>
            </ul>
          </div>
          <h3 class="text-body-1 font-weight-medium row-margin-small ellipsis">
            오토리스
          </h3>
          <p class="text-body-4 color-gray row-margin-small">
            현대 올 뉴 아반떼(CN7)/인스퍼레이션
          </p>
        </BasicBoxHeadLeft>
        <BasicBoxHeadRight>
          <RoundStatus :classNames="{ wrap: 'display-block' }" theme="undenary">
            연장
          </RoundStatus>
        </BasicBoxHeadRight>
      </BasicBoxHead>
      <KeyValue margin="regular">
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }"
            >대출금액/기간</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            24,990,000원/36개월
          </KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }"
            >월납부금액</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            300,000원
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>

      <div
        :class="[
          $style['inline-alert'],
          $style['inline-alert--complete'],
          'row-margin-contents-small',
        ]"
      >
        <p :class="$style['inline-alert__text']">계약이 완료되었습니다.</p>
      </div>

      <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
        <ButtonListItem>
          <BasicButton size="small">약정하기</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </BasicBox>
    <!-- //Case : 오토금융 - 완료 -->

    <!-- Case : 오토금융 - 그 외 -->
    <BasicBox :className="$style['box']">
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <div :class="$style['division-info']">
            <ul :class="$style['division-info__list']">
              <li :class="$style['division-info__item']">
                <div class="color-black text-body-4 font-weight-light">
                  2023.01.10
                </div>
              </li>
              <li :class="$style['division-info__item']">
                <div class="color-green text-body-4 font-weight-medium">
                  오토금융
                </div>
              </li>
            </ul>
          </div>
          <h3 class="text-body-1 font-weight-medium row-margin-small ellipsis">
            오토리스
          </h3>
          <p class="text-body-4 color-gray row-margin-small">
            현대 올 뉴 아반떼(CN7)/인스퍼레이션
          </p>
        </BasicBoxHeadLeft>
        <BasicBoxHeadRight>
          <RoundStatus :classNames="{ wrap: 'display-block' }" theme="undenary">
            연장
          </RoundStatus>
        </BasicBoxHeadRight>
      </BasicBoxHead>
      <KeyValue margin="regular">
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }"
            >대출금액/기간</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            24,990,000원/36개월
          </KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }"
            >월납부금액</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            300,000원
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>

      <div
        :class="[
          $style['inline-alert'],
          $style['inline-alert--complete'],
          'row-margin-contents-small',
        ]"
      >
        <p :class="$style['inline-alert__text']">처리중입니다.</p>
      </div>

      <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
        <ButtonListItem>
          <BasicButton size="small">약정하기</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </BasicBox>
    <!-- //Case : 오토금융 - 그 외 -->

    <!-- Case : 다이렉트 오토(리스) - 품의완료 -->
    <BasicBox :className="$style['box']">
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <div :class="$style['division-info']">
            <ul :class="$style['division-info__list']">
              <li :class="$style['division-info__item']">
                <div class="color-black text-body-4 font-weight-light">
                  2023.01.10
                </div>
              </li>
              <li :class="$style['division-info__item']">
                <div class="color-green text-body-4 font-weight-medium">
                  오토금융
                </div>
              </li>
            </ul>
          </div>
          <h3 class="text-body-1 font-weight-medium row-margin-small ellipsis">
            오토리스
          </h3>
          <p class="text-body-4 color-gray row-margin-small">
            현대 올 뉴 아반떼(CN7)/인스퍼레이션
          </p>
        </BasicBoxHeadLeft>
        <BasicBoxHeadRight>
          <RoundStatus :classNames="{ wrap: 'display-block' }" theme="undenary">
            연장
          </RoundStatus>
        </BasicBoxHeadRight>
      </BasicBoxHead>
      <KeyValue margin="regular">
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }"
            >대출금액/기간</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            24,990,000원/36개월
          </KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }"
            >월납부금액</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            300,000원
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>

      <div
        :class="[
          $style['inline-alert'],
          $style['inline-alert--complete'],
          'row-margin-contents-small',
        ]"
      >
        <p :class="$style['inline-alert__text']">
          약정을 진행하실 수 있습니다.
        </p>
      </div>

      <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
        <ButtonListItem>
          <BasicButton size="small">약정하기</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </BasicBox>

    <BasicBox :className="$style['box']">
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <div :class="$style['division-info']">
            <ul :class="$style['division-info__list']">
              <li :class="$style['division-info__item']">
                <div class="color-black text-body-4 font-weight-light">
                  2023.01.10
                </div>
              </li>
              <li :class="$style['division-info__item']">
                <div class="color-green text-body-4 font-weight-medium">
                  오토금융
                </div>
              </li>
            </ul>
          </div>
          <h3 class="text-body-1 font-weight-medium row-margin-small ellipsis">
            오토리스
          </h3>
          <p class="text-body-4 color-gray row-margin-small">
            현대 올 뉴 아반떼(CN7)/인스퍼레이션
          </p>
        </BasicBoxHeadLeft>
        <BasicBoxHeadRight>
          <RoundStatus :classNames="{ wrap: 'display-block' }" theme="undenary">
            신규
          </RoundStatus>
        </BasicBoxHeadRight>
      </BasicBoxHead>
      <KeyValue margin="regular">
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }"
            >이용기간</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            36개월
          </KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }"
            >월납부금액</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            770,800원
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>

      <BasicProgress
        :total="4"
        :current="1"
        :classNames="{ wrap: 'row-margin-contents-small' }"
      />

      <div
        :class="[
          $style['inline-alert'],
          $style['inline-alert--complete'],
          'row-margin-contents-small',
        ]"
      >
        <p :class="$style['inline-alert__text']">
          약정중입니다. (적합성·적정성 확인서)
        </p>
      </div>

      <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
        <ButtonListItem>
          <BasicButton size="small">약정하기</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </BasicBox>
    <!-- //Case : 다이렉트 오토(리스) - 품의완료 -->

    <!-- Case : 다이렉트 오토(리스) - 약정완료 -->
    <BasicBox :className="$style['box']">
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <div :class="$style['division-info']">
            <ul :class="$style['division-info__list']">
              <li :class="$style['division-info__item']">
                <div class="color-black text-body-4 font-weight-light">
                  2023.01.10
                </div>
              </li>
              <li :class="$style['division-info__item']">
                <div class="color-green text-body-4 font-weight-medium">
                  오토금융
                </div>
              </li>
            </ul>
          </div>
          <h3 class="text-body-1 font-weight-medium row-margin-small ellipsis">
            오토리스
          </h3>
          <p class="text-body-4 color-gray row-margin-small">
            현대 올 뉴 아반떼(CN7)/인스퍼레이션
          </p>
        </BasicBoxHeadLeft>
        <BasicBoxHeadRight>
          <RoundStatus :classNames="{ wrap: 'display-block' }" theme="undenary">
            신규
          </RoundStatus>
        </BasicBoxHeadRight>
      </BasicBoxHead>
      <KeyValue margin="regular">
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }"
            >대출금액/기간</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            24,990,000원/36개월
          </KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }"
            >월납부금액</KeyValueTitle
          >
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            300,000원
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>

      <div
        :class="[
          $style['inline-alert'],
          $style['inline-alert--complete'],
          'row-margin-contents-small',
        ]"
      >
        <p :class="$style['inline-alert__text']">
          약정 완료 되었습니다.<br />
          담담자 확인 후 송금 예정입니다.
        </p>
      </div>

      <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
        <ButtonListItem>
          <BasicButton size="small" theme="tertiary" :minSide="true">
            약정내용 확인
          </BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton size="small" theme="tertiary" :minSide="true">
            서류 등록
          </BasicButton>
        </ButtonListItem>
      </ButtonList>
    </BasicBox>
    <!-- //Case : 다이렉트 오토(리스) - 약정완료 -->

    <!-- Case : 다이렉트 오토(리스) - 대금지급 -->
    <BasicBox :className="$style['box']">
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <div :class="$style['division-info']">
            <ul :class="$style['division-info__list']">
              <li :class="$style['division-info__item']">
                <div class="color-black text-body-4 font-weight-light">
                  2023.01.10
                </div>
              </li>
              <li :class="$style['division-info__item']">
                <div class="color-green text-body-4 font-weight-medium">
                  오토금융
                </div>
              </li>
            </ul>
          </div>
          <h3 class="text-body-1 font-weight-medium row-margin-small ellipsis">
            오토리스
          </h3>
          <p class="text-body-4 color-gray row-margin-small">
            현대 올 뉴 아반떼(CN7)/인스퍼레이션
          </p>
        </BasicBoxHeadLeft>
        <BasicBoxHeadRight>
          <RoundStatus :classNames="{ wrap: 'display-block' }" theme="undenary">
            신규
          </RoundStatus>
        </BasicBoxHeadRight>
      </BasicBoxHead>
      <KeyValue margin="regular">
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }">
            대출금액/기간
          </KeyValueTitle>
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            24,990,000원/36개월
          </KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }">
            월납부금액
          </KeyValueTitle>
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            300,000원
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>

      <div
        :class="[
          $style['inline-alert'],
          $style['inline-alert--complete'],
          'row-margin-contents-small',
        ]"
      >
        <p :class="$style['inline-alert__text']">
          송금 완료 되었습니다.<br />
          차량 출고 및 등록 안내 드릴 예정입니다.
        </p>
      </div>

      <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
        <ButtonListItem>
          <BasicButton size="small" theme="tertiary" :minSide="true"
            >약정내용 확인</BasicButton
          >
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton size="small" theme="tertiary" :minSide="true"
            >서류등록</BasicButton
          >
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton size="small" theme="tertiary" :minSide="true"
            >차량번호 등록</BasicButton
          >
        </ButtonListItem>
      </ButtonList>
    </BasicBox>
    <!-- //Case : 다이렉트 오토(리스) - 대금지급 -->

    <!-- Case : 다이렉트 오토(렌트) - 심사승인 -->
    <BasicBox :className="$style['box']">
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <div :class="$style['division-info']">
            <ul :class="$style['division-info__list']">
              <li :class="$style['division-info__item']">
                <div class="color-black text-body-4 font-weight-light">
                  2023.01.10
                </div>
              </li>
              <li :class="$style['division-info__item']">
                <div class="color-green text-body-4 font-weight-medium">
                  오토금융
                </div>
              </li>
            </ul>
          </div>
          <h3 class="text-body-1 font-weight-medium row-margin-small ellipsis">
            렌터카
          </h3>
          <p class="text-body-4 color-gray row-margin-small">
            현대 올 뉴 아반떼(CN7)/인스퍼레이션
          </p>
        </BasicBoxHeadLeft>
        <BasicBoxHeadRight>
          <RoundStatus :classNames="{ wrap: 'display-block' }" theme="undenary">
            신규
          </RoundStatus>
        </BasicBoxHeadRight>
      </BasicBoxHead>
      <KeyValue margin="regular">
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }">
            대출금액/기간
          </KeyValueTitle>
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            24,990,000원/36개월
          </KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }">
            월납부금액
          </KeyValueTitle>
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            300,000원
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>

      <div
        :class="[
          $style['inline-alert'],
          $style['inline-alert--complete'],
          'row-margin-contents-small',
        ]"
      >
        <p :class="$style['inline-alert__text']">심사 승인 되었어요.</p>
      </div>

      <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
        <ButtonListItem>
          <BasicButton size="small" :minSide="true">견적서 보기</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton size="small" :minSide="true">견적 이어하기</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </BasicBox>
    <!-- // Case : 다이렉트 오토(렌트) - 심사승인 -->

    <!-- Case : 다이렉트 오토(렌트) - 발주신청완료 -->
    <BasicBox :className="$style['box']">
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <div :class="$style['division-info']">
            <ul :class="$style['division-info__list']">
              <li :class="$style['division-info__item']">
                <div class="color-black text-body-4 font-weight-light">
                  2023.01.10
                </div>
              </li>
              <li :class="$style['division-info__item']">
                <div class="color-green text-body-4 font-weight-medium">
                  오토금융
                </div>
              </li>
            </ul>
          </div>
          <h3 class="text-body-1 font-weight-medium row-margin-small ellipsis">
            렌터카
          </h3>
          <p class="text-body-4 color-gray row-margin-small">
            현대 올 뉴 아반떼(CN7)/인스퍼레이션
          </p>
        </BasicBoxHeadLeft>
        <BasicBoxHeadRight>
          <RoundStatus :classNames="{ wrap: 'display-block' }" theme="undenary">
            신규
          </RoundStatus>
        </BasicBoxHeadRight>
      </BasicBoxHead>
      <KeyValue margin="regular">
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }">
            대출금액/기간
          </KeyValueTitle>
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            24,990,000원/36개월
          </KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }">
            월납부금액
          </KeyValueTitle>
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            300,000원
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>

      <div
        :class="[
          $style['inline-alert'],
          $style['inline-alert--complete'],
          'row-margin-contents-small',
        ]"
      >
        <p :class="$style['inline-alert__text']">발주신청이 완료 되었어요.</p>
      </div>

      <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
        <ButtonListItem>
          <BasicButton size="small" :minSide="true">견적서 보기</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </BasicBox>
    <!-- // Case : 다이렉트 오토(렌트) - 발주신청완료 -->

    <!-- Case : 다이렉트 오토(렌트) - 배정완료 -->
    <BasicBox :className="$style['box']">
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <div :class="$style['division-info']">
            <ul :class="$style['division-info__list']">
              <li :class="$style['division-info__item']">
                <div class="color-black text-body-4 font-weight-light">
                  2023.01.10
                </div>
              </li>
              <li :class="$style['division-info__item']">
                <div class="color-green text-body-4 font-weight-medium">
                  오토금융
                </div>
              </li>
            </ul>
          </div>
          <h3 class="text-body-1 font-weight-medium row-margin-small ellipsis">
            렌터카
          </h3>
          <p class="text-body-4 color-gray row-margin-small">
            현대 올 뉴 아반떼(CN7)/인스퍼레이션
          </p>
        </BasicBoxHeadLeft>
        <BasicBoxHeadRight>
          <RoundStatus :classNames="{ wrap: 'display-block' }" theme="undenary">
            신규
          </RoundStatus>
        </BasicBoxHeadRight>
      </BasicBoxHead>
      <KeyValue margin="regular">
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }">
            대출금액/기간
          </KeyValueTitle>
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            24,990,000원/36개월
          </KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }">
            월납부금액
          </KeyValueTitle>
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            300,000원
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>

      <div
        :class="[
          $style['inline-alert'],
          $style['inline-alert--complete'],
          'row-margin-contents-small',
        ]"
      >
        <p :class="$style['inline-alert__text']">
          약정을 진행하실 수 있습니다.
        </p>
      </div>

      <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
        <ButtonListItem>
          <BasicButton size="small" :minSide="true">약정하기</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </BasicBox>

    <BasicBox :className="$style['box']">
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <div :class="$style['division-info']">
            <ul :class="$style['division-info__list']">
              <li :class="$style['division-info__item']">
                <div class="color-black text-body-4 font-weight-light">
                  2023.01.10
                </div>
              </li>
              <li :class="$style['division-info__item']">
                <div class="color-green text-body-4 font-weight-medium">
                  오토금융
                </div>
              </li>
            </ul>
          </div>
          <h3 class="text-body-1 font-weight-medium row-margin-small ellipsis">
            렌터카
          </h3>
          <p class="text-body-4 color-gray row-margin-small">
            현대 올 뉴 아반떼(CN7)/인스퍼레이션
          </p>
        </BasicBoxHeadLeft>
        <BasicBoxHeadRight>
          <RoundStatus :classNames="{ wrap: 'display-block' }" theme="undenary">
            신규
          </RoundStatus>
        </BasicBoxHeadRight>
      </BasicBoxHead>
      <KeyValue margin="regular">
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }">
            대출금액/기간
          </KeyValueTitle>
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            24,990,000원/36개월
          </KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }">
            월납부금액
          </KeyValueTitle>
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            300,000원
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>

      <div
        :class="[
          $style['inline-alert'],
          $style['inline-alert--complete'],
          'row-margin-contents-small',
        ]"
      >
        <p :class="$style['inline-alert__text']">약정중 진행 중입니다.</p>
      </div>

      <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
        <ButtonListItem>
          <BasicButton size="small" :minSide="true">약정하기</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </BasicBox>
    <!-- // Case : 다이렉트 오토(렌트) - 배정완료 -->

    <!-- Case : 다이렉트 오토(렌트) - 약정완료 -->
    <BasicBox :className="$style['box']">
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <div :class="$style['division-info']">
            <ul :class="$style['division-info__list']">
              <li :class="$style['division-info__item']">
                <div class="color-black text-body-4 font-weight-light">
                  2023.01.10
                </div>
              </li>
              <li :class="$style['division-info__item']">
                <div class="color-green text-body-4 font-weight-medium">
                  오토금융
                </div>
              </li>
            </ul>
          </div>
          <h3 class="text-body-1 font-weight-medium row-margin-small ellipsis">
            렌터카
          </h3>
          <p class="text-body-4 color-gray row-margin-small">
            현대 올 뉴 아반떼(CN7)/인스퍼레이션
          </p>
        </BasicBoxHeadLeft>
        <BasicBoxHeadRight>
          <RoundStatus :classNames="{ wrap: 'display-block' }" theme="undenary">
            신규
          </RoundStatus>
        </BasicBoxHeadRight>
      </BasicBoxHead>
      <KeyValue margin="regular">
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }">
            대출금액/기간
          </KeyValueTitle>
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            24,990,000원/36개월
          </KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }">
            월납부금액
          </KeyValueTitle>
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            300,000원
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>

      <div
        :class="[
          $style['inline-alert'],
          $style['inline-alert--complete'],
          'row-margin-contents-small',
        ]"
      >
        <p :class="$style['inline-alert__text']">약정이 완료 되었어요.</p>
      </div>

      <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
        <ButtonListItem>
          <BasicButton size="small" :minSide="true">약정내용 확인</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </BasicBox>
    <!-- // Case : 다이렉트 오토(렌트) - 약정완료 -->

    <!-- Case : 다이렉트 오토(렌트) - 대금지급 -->
    <BasicBox :className="$style['box']">
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <div :class="$style['division-info']">
            <ul :class="$style['division-info__list']">
              <li :class="$style['division-info__item']">
                <div class="color-black text-body-4 font-weight-light">
                  2023.01.10
                </div>
              </li>
              <li :class="$style['division-info__item']">
                <div class="color-green text-body-4 font-weight-medium">
                  오토금융
                </div>
              </li>
            </ul>
          </div>
          <h3 class="text-body-1 font-weight-medium row-margin-small ellipsis">
            렌터카
          </h3>
          <p class="text-body-4 color-gray row-margin-small">
            현대 올 뉴 아반떼(CN7)/인스퍼레이션
          </p>
        </BasicBoxHeadLeft>
        <BasicBoxHeadRight>
          <RoundStatus :classNames="{ wrap: 'display-block' }" theme="undenary">
            신규
          </RoundStatus>
        </BasicBoxHeadRight>
      </BasicBoxHead>
      <KeyValue margin="regular">
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }">
            대출금액/기간
          </KeyValueTitle>
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            24,990,000원/36개월
          </KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }">
            월납부금액
          </KeyValueTitle>
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            300,000원
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>

      <div
        :class="[
          $style['inline-alert'],
          $style['inline-alert--complete'],
          'row-margin-contents-small',
        ]"
      >
        <p :class="$style['inline-alert__text']">송금이 완료 되었어요.</p>
      </div>

      <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
        <ButtonListItem>
          <BasicButton size="small" :minSide="true">약정내용 확인</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </BasicBox>
    <!-- // Case : 다이렉트 오토(렌트) - 대금지급 -->

    <!-- Case : 다이렉트 오토(렌트) - 차량입고 -->
    <BasicBox :className="$style['box']">
      <BasicBoxHead>
        <BasicBoxHeadLeft>
          <div :class="$style['division-info']">
            <ul :class="$style['division-info__list']">
              <li :class="$style['division-info__item']">
                <div class="color-black text-body-4 font-weight-light">
                  2023.01.10
                </div>
              </li>
              <li :class="$style['division-info__item']">
                <div class="color-green text-body-4 font-weight-medium">
                  오토금융
                </div>
              </li>
            </ul>
          </div>
          <h3 class="text-body-1 font-weight-medium row-margin-small ellipsis">
            렌터카
          </h3>
          <p class="text-body-4 color-gray row-margin-small">
            현대 올 뉴 아반떼(CN7)/인스퍼레이션
          </p>
        </BasicBoxHeadLeft>
        <BasicBoxHeadRight>
          <RoundStatus :classNames="{ wrap: 'display-block' }" theme="undenary">
            신규
          </RoundStatus>
        </BasicBoxHeadRight>
      </BasicBoxHead>
      <KeyValue margin="regular">
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }">
            대출금액/기간
          </KeyValueTitle>
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            24,990,000원/36개월
          </KeyValueText>
        </KeyValueItem>
        <KeyValueItem>
          <KeyValueTitle :classNames="{ title: 'text-body-3' }">
            월납부금액
          </KeyValueTitle>
          <KeyValueText :classNames="{ text: 'text-body-3' }">
            300,000원
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>

      <div
        :class="[
          $style['inline-alert'],
          $style['inline-alert--complete'],
          'row-margin-contents-small',
        ]"
      >
        <p :class="$style['inline-alert__text']">
          차량이 입고 되었어요.<br />
          탁송정보를 입력해 주세요.
        </p>
      </div>

      <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
        <ButtonListItem>
          <BasicButton size="small" :minSide="true">탁송정보 입력</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </BasicBox>
    <!-- // Case : 다이렉트 오토(렌트) - 차량입고 -->

    <!-- Case : 결과 없을 때 -->
    <div :class="$style['empty']">
      <p :class="$style['empty__text']">
        진행중인 상품이<br />
        없습니다.
      </p>
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
    <!-- //Case : 결과 없을 때 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/MyLoanProgress.scss';
</style>
