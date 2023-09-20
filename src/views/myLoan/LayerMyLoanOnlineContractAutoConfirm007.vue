<script>
// AF_M99_l010
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PopupButton,
    PageTextGroup,
    PageMainText,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    CarEmblem,
    CarThumb,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    ButtonList,
    ButtonListItem,
    BasicButton,
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
          <PopupTitle>온라인약정</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          <strong>
            약정 정보를<br />
            확인해 주세요
          </strong>
        </PageMainText>
      </PageTextGroup>

      <div>
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">차량 정보</h3>

          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <div class="row-margin-mini">
                  <CarEmblem src="/images/_dummy/car-emblem.png" name="현대" />
                </div>
                <h3 class="text-body-1 font-weight-medium">캐스퍼</h3>
                <p class="text-body-4 color-gray row-margin-small">
                  가솔린 1.0 에센셜
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
                <KeyValueTitle>유종</KeyValueTitle>
                <KeyValueText>가솔린</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>

        <section class="row-margin-container-medium">
          <div class="flex-box row-margin-contents">
            <div class="flex-box__cell">
              <h3 class="text-title-2">상품 정보</h3>
            </div>
            <div class="flex-box__cell--small align-self-end">
              <div class="text-body-3 font-weight-regular">(VAT 포함)</div>
            </div>
          </div>

          <BasicBox>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>렌트기간</KeyValueTitle>
                <KeyValueText>36개월</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>정비상품</KeyValueTitle>
                <KeyValueText>Self</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>약정주행거리</KeyValueTitle>
                <KeyValueText>20,000 km</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>종료시 처리</KeyValueTitle>
                <KeyValueText>반납/구매/연장</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>보증금</KeyValueTitle>
                <KeyValueText>0 원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>선납금</KeyValueTitle>
                <KeyValueText>0 원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>보증보험증권</KeyValueTitle>
                <KeyValueText>0 원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>추정잔존가치</KeyValueTitle>
                <KeyValueText>9,064,000 원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>매회 렌트료</KeyValueTitle>
                <KeyValueText>460,350 원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>선납 렌트료</KeyValueTitle>
                <KeyValueText>60,350 원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>납입 렌트료</KeyValueTitle>
                <KeyValueText>
                  <span class="color-green font-weight-medium">400,000 원</span>
                </KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">보험 정보</h3>

          <BasicBox>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>부보/계약주체</KeyValueTitle>
                <KeyValueText>-</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>운전자 연령</KeyValueTitle>
                <KeyValueText>만 26세 이상</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>의무가입사항</KeyValueTitle>
                <KeyValueText>대인배상Ⅰ(책임)/대인배상 Ⅱ(무한)</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>
                  필수선택사항<br />
                  (대물배상 사고)
                </KeyValueTitle>
                <KeyValueText>1억원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>
                  필수선택사항<br />
                  (자기신체사고)
                </KeyValueTitle>
                <KeyValueText>
                  사망. 후유장애1억원<br />
                  / 부상15백만원
                </KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>
                  필수선택사항<br />
                  (자기차량손해)
                </KeyValueTitle>
                <KeyValueText>자차손해면책제도</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">이전</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>다음</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
