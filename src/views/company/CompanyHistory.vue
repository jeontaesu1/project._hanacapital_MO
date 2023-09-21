<script>
// Company_M08_p003
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    StickyBar,
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '연혁');
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
  <UiTab>
    <PageContents>
      <template v-slot:head>
        <StickyBar>
          <NavTab :head="true" :useUiTab="true">
            <NavTabButton link="companyHistoryTab001">2011 ~ 현재</NavTabButton>
            <NavTabButton link="companyHistoryTab002">2004 ~ 2010</NavTabButton>
          </NavTab>
        </StickyBar>
      </template>

      <!-- Tab : 2011 ~ 현재 -->
      <UiTabPanel name="companyHistoryTab001">
        <PageTextGroup>
          <PageMainText>도전하는 하나캐피탈</PageMainText>
        </PageTextGroup>

        <ul class="reset-list">
          <li class="row-margin-contents">
            <h3 class="text-body-2 row-margin-item-medium">2021</h3>
            <KeyValue align="left" margin="regular-small">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>7월</KeyValueTitle>
                <KeyValueText>유상증자 (납입자본금 1,462억)</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>3월</KeyValueTitle>
                <KeyValueText
                  >미얀마 현지법인 “Hana Microfinance Limited” 유상증자 참여
                  (지분 75%)</KeyValueText
                >
              </KeyValueItem>
            </KeyValue>
          </li>
          <li class="row-margin-contents">
            <h3 class="text-body-2 row-margin-item-medium">2020</h3>
            <KeyValue align="left" margin="regular-small">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>11월</KeyValueTitle>
                <KeyValueText>하나원큐드림카 VER.2 오픈</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>7월</KeyValueTitle>
                <KeyValueText
                  >업권 최초 내구재 할부 영업지원 플랫폼 ‘원큐하나로‘
                  오픈</KeyValueText
                >
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>6월</KeyValueTitle>
                <KeyValueText>인도네시아 ‘SHF’ 유상증자 참여 94억</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>1월</KeyValueTitle>
                <KeyValueText
                  >미얀마 진출 “Hana Microfinance Limited” 신주 인수 (지분
                  55%)</KeyValueText
                >
              </KeyValueItem>
            </KeyValue>
          </li>
          <li class="row-margin-contents">
            <h3 class="text-body-2 row-margin-item-medium">2019</h3>
            <KeyValue align="left" margin="regular-small">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>11월</KeyValueTitle>
                <KeyValueText
                  >중고차 온라인 쇼핑 플랫폼 하나원큐드림카 오픈</KeyValueText
                >
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>3월</KeyValueTitle>
                <KeyValueText>유상증자 (납입자본금 1,174억)</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </li>
          <li class="row-margin-contents">
            <h3 class="text-body-2 row-margin-item-medium">2018</h3>
            <KeyValue align="left" margin="regular-small">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>2월</KeyValueTitle>
                <KeyValueText
                  >㈜하나금융지주 완전 자회사 편입 (지분율 100%)</KeyValueText
                >
              </KeyValueItem>
            </KeyValue>
          </li>
          <li class="row-margin-contents">
            <h3 class="text-body-2 row-margin-item-medium">2017</h3>
            <KeyValue align="left" margin="regular-small">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>6월</KeyValueTitle>
                <KeyValueText>전산본부 청라 이전</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>5월</KeyValueTitle>
                <KeyValueText>손님용 모바일앱 ‘원큐캐피탈‘ 오픈</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </li>
          <li class="row-margin-contents">
            <h3 class="text-body-2 row-margin-item-medium">2015</h3>
            <KeyValue align="left" margin="regular-small">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>8월</KeyValueTitle>
                <KeyValueText>
                  <ul class="reset-list">
                    <li class="row-margin-item-medium">
                      신용등급 상향 (회사채 AA-, CP A1)
                    </li>
                    <li class="row-margin-item-medium">
                      유상증자 (납입자본금 824억)
                    </li>
                  </ul>
                </KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>6월</KeyValueTitle>
                <KeyValueText>인도네시아 ‘SHF’ 유상증자 참여 70억</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>3월</KeyValueTitle>
                <KeyValueText>서초지점 오픈</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </li>
          <li class="row-margin-contents">
            <h3 class="text-body-2 row-margin-item-medium">2013</h3>
            <KeyValue align="left" margin="regular-small">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>1월</KeyValueTitle>
                <KeyValueText>강남지점 오픈</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </li>
          <li class="row-margin-contents">
            <h3 class="text-body-2 row-margin-item-medium">2012</h3>
            <KeyValue align="left" margin="regular-small">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>7월</KeyValueTitle>
                <KeyValueText>인천/대전/광주 지점 승격</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </li>
          <li class="row-margin-contents">
            <h3 class="text-body-2 row-margin-item-medium">2011</h3>
            <KeyValue align="left" margin="regular-small">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>2월</KeyValueTitle>
                <KeyValueText>신용등급 상향 (회사채 A+, CP A2+)</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </li>
        </ul>
      </UiTabPanel>
      <!-- // Tab : 2011 ~ 현재 -->

      <!-- Tab : 2004 ~ 2010 -->
      <UiTabPanel name="companyHistoryTab002">
        <PageTextGroup>
          <PageMainText>우리의 시작</PageMainText>
        </PageTextGroup>

        <ul class="reset-list">
          <li class="row-margin-contents">
            <h3 class="text-body-2 row-margin-item-medium">2010</h3>
            <KeyValue align="left" margin="regular-small">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>11월</KeyValueTitle>
                <KeyValueText>광주사무소 오픈</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>9월</KeyValueTitle>
                <KeyValueText>대전사무소 오픈</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>1월</KeyValueTitle>
                <KeyValueText>인천사무소 오픈</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </li>
          <li class="row-margin-contents">
            <h3 class="text-body-2 row-margin-item-medium">2008</h3>
            <KeyValue align="left" margin="regular-small">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>6월</KeyValueTitle>
                <KeyValueText>부산지점 오픈</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>5월</KeyValueTitle>
                <KeyValueText>대구지점 오픈</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>4월</KeyValueTitle>
                <KeyValueText>유상증자 (납입자본금 724억)</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </li>
          <li class="row-margin-contents">
            <h3 class="text-body-2 row-margin-item-medium">2007</h3>
            <KeyValue align="left" margin="regular-small">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>4월</KeyValueTitle>
                <KeyValueText>
                  <ul class="reset-list">
                    <li class="row-margin-item-medium">
                      ㈜하나금융지주 자회사 편입
                    </li>
                    <li class="row-margin-item-medium">
                      유상증자 (납입자본금 611억)
                    </li>
                    <li class="row-margin-item-medium">
                      신용등급 상향 (회사채 A0, CP A20)
                    </li>
                  </ul>
                </KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </li>
          <li class="row-margin-contents">
            <h3 class="text-body-2 row-margin-item-medium">2006</h3>
            <KeyValue align="left" margin="regular-small">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>11월</KeyValueTitle>
                <KeyValueText>
                  <ul class="reset-list">
                    <li class="row-margin-item-medium">
                      유상증자 (납입자본금 432억)
                    </li>
                    <li class="row-margin-item-medium">
                      신용등급 상향 (회사채 A-, CP A2-)
                    </li>
                  </ul>
                </KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>3월</KeyValueTitle>
                <KeyValueText>신용등급 상향 (회사채 BBB+, CP A3+)</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </li>
          <li class="row-margin-contents">
            <h3 class="text-body-2 row-margin-item-medium">2005</h3>
            <KeyValue align="left" margin="regular-small">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>8월</KeyValueTitle>
                <KeyValueText>유상증자 (납입자본금 360억)</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>6월</KeyValueTitle>
                <KeyValueText>신용등급 상향 (회사채 BBB0, CP A30)</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>4월</KeyValueTitle>
                <KeyValueText>하나캐피탈㈜로 상호변경</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </li>
          <li class="row-margin-contents">
            <h3 class="text-body-2 row-margin-item-medium">2004</h3>
            <KeyValue align="left" margin="regular-small">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>12월</KeyValueTitle>
                <KeyValueText
                  >㈜하나금융지주 손자회사 편입 (하나은행의
                  자회사)</KeyValueText
                >
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>9월</KeyValueTitle>
                <KeyValueText>하나은행에서 코오롱캐피탈㈜ 인수</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </li>
        </ul>
      </UiTabPanel>
      <!-- // Tab : 2004 ~ 2010 -->
    </PageContents>
  </UiTab>
</template>
