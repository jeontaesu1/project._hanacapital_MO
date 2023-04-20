<script>
// AF_M07_l013
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PageTextGroup,
    PageMainText,
    PageSubText,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    BasicHr,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    CarThumb,
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
          <PopupTitle>위임장</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>하나캐피탈㈜ 귀중</PageMainText>
        <PageSubText>
          본인은 상기인에게 금번 하나캐피탈㈜와 체결하는 자동차 승계계약과
          관련하여 승계신청과 관련한 일체의 행위를 위임합니다. (승계신청,
          심사결과안내 등)
        </PageSubText>
      </PageTextGroup>

      <div>
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">차량정보</h3>

          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <p class="text-body-4 font-weight-light row-margin-mini">
                  2020년식
                </p>
                <h3 class="text-body-1 font-weight-medium">
                  운용리스 11가1111
                </h3>
                <p class="text-body-4 color-gray row-margin-small">
                  쏘나타 뉴 라이즈 1.6T-Gdi 스마트 (마이 스마트 핏)
                </p>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <CarThumb src="/images/_dummy/car-thumb.png" />
              </BasicBoxHeadRight>
            </BasicBoxHead>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>차대번호</KeyValueTitle>
                <KeyValueText>KMHEL00CPYA000001</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>

        <!-- Case : 리스일 경우 노출 -->
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">리스 조건</h3>

          <ul :class="$style['logs']">
            <li :class="$style['logs__item']">
              <div :class="$style['logs__block']">
                <div :class="$style['logs__row']">
                  <div div :class="$style['logs__contents']">
                    <h4 class="text-body-1 font-weight-medium">운용리스</h4>
                  </div>
                  <div div :class="$style['logs__right']">
                    <button type="button" :class="$style['logs__link']">
                      <span :class="$style['logs__link-text']">상세보기</span>
                    </button>
                  </div>
                </div>

                <BasicHr
                  type="contents"
                  theme="quaternary"
                  className="row-margin-contents-small"
                />

                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>월 리스료</KeyValueTitle>
                    <KeyValueText>500,000 원</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>잔여기간</KeyValueTitle>
                    <KeyValueText>00개월</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>승계 수수료 (인지대 포함)</KeyValueTitle>
                    <KeyValueText>5,000,000 원</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </div>
            </li>
          </ul>
        </section>
        <!-- // Case : 리스일 경우 노출 -->

        <!-- Case : 렌트일 경우 노출 -->
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">렌트 조건</h3>

          <ul :class="$style['logs']">
            <li :class="$style['logs__item']">
              <div :class="$style['logs__block']">
                <div :class="$style['logs__row']">
                  <div div :class="$style['logs__contents']">
                    <h4 class="text-body-1 font-weight-medium">렌터카</h4>
                  </div>
                  <div div :class="$style['logs__right']">
                    <button type="button" :class="$style['logs__link']">
                      <span :class="$style['logs__link-text']">상세보기</span>
                    </button>
                  </div>
                </div>

                <BasicHr
                  type="contents"
                  theme="quaternary"
                  className="row-margin-contents-small"
                />

                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>월 렌트료</KeyValueTitle>
                    <KeyValueText>500,000 원</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>잔여기간</KeyValueTitle>
                    <KeyValueText>00개월</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>승계 수수료 (인지대 포함)</KeyValueTitle>
                    <KeyValueText>5,000,000 원</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </div>
            </li>
          </ul>
        </section>
        <!-- // Case : 렌트일 경우 노출 -->

        <section>
          <h3 class="text-title-2 row-margin-contents">승계 조건</h3>

          <!-- Case : 동일한 조건으로 승계 희망 -->
          <BasicBox>
            <h4 class="text-body-2 font-weight-regular row-margin-small">
              동일한 조건으로 승계 희망
            </h4>
            <p class="text-body-4 color-gray-secondary">
              현재 계약자의 이용 조건을 동일하게 승계합니다.
            </p>
          </BasicBox>
          <!-- // Case : 동일한 조건으로 승계 희망 -->

          <!-- Case : 전액선납으로 승계 희망 -->
          <BasicBox>
            <h4 class="text-body-2 font-weight-regular row-margin-small">
              전액선납으로 승계 희망
            </h4>
            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--small-margin'],
              ]"
            >
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-gray-secondary',
                  'text-body-4',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']">-</div>
                <div :class="$style['basic-list__content']">
                  승계 후 전액선납하는 정산비용이 발생합니다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-gray-secondary',
                  'text-body-4',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']">-</div>
                <div :class="$style['basic-list__content']">
                  승계 후 만기일자 이후 손님 명의로 자동차 소유권 이전 등록
                  절차가 이루어집니다.
                </div>
              </li>
            </ul>
            <!-- // Case : 전액선납으로 승계 희망 -->
          </BasicBox>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">수임자 및 위임자</h3>

          <ul class="reset-list">
            <li class="row-margin-item-group">
              <BasicBox>
                <BasicBoxHead>
                  <BasicBoxHeadLeft>
                    <h4 class="text-body-1 font-weight-medium">수임자</h4>
                  </BasicBoxHeadLeft>
                </BasicBoxHead>
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>성명</KeyValueTitle>
                    <KeyValueText>김하나</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>생년월일</KeyValueTitle>
                    <KeyValueText>1999.01.23</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>휴대폰번호</KeyValueTitle>
                    <KeyValueText>010-####-5678</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </BasicBox>
            </li>

            <li class="row-margin-item-group">
              <BasicBox>
                <BasicBoxHead>
                  <BasicBoxHeadLeft>
                    <h4 class="text-body-1 font-weight-medium">위임자</h4>
                  </BasicBoxHeadLeft>
                </BasicBoxHead>
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>성명</KeyValueTitle>
                    <KeyValueText>김위임</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>생년월일</KeyValueTitle>
                    <KeyValueText>1999.01.23</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>휴대폰번호</KeyValueTitle>
                    <KeyValueText>010-####-5678</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </BasicBox>
            </li>
          </ul>

          <p
            class="text-body-3 font-weight-light align-right row-margin-contents"
          >
            2021년 09월 17일
          </p>
        </section>
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton theme="secondary">위임 동의하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/LayerAutoSuccessionAttorneyConfirm.scss';
</style>
