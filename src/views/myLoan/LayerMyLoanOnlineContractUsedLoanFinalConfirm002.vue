<script>
// AF_M98_l011
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    PopupTitle,
    StepProgress,
    PageTextGroup,
    PageMainText,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    TextButton,
    NoticeText,
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
        <StepProgress :total="8" :current="4" />
      </template>

      <PageTextGroup>
        <PageMainText>
          약정 정보를<br />
          확인해 주세요
        </PageMainText>
      </PageTextGroup>

      <div>
        <!-- S: 240514 수정 -->
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">계약자 정보(법인)</h3>

          <BasicBox>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>상호명</KeyValueTitle>
                <KeyValueText>(주)하나캐피탈</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>사업자번호</KeyValueTitle>
                <KeyValueText>123-12-12345</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>법인등록번호</KeyValueTitle>
                <KeyValueText> 123456-1234567 </KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>이메일</KeyValueTitle>
                <KeyValueText>abcd@hanafn.com</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>청구서 수령방법</KeyValueTitle>
                <KeyValueText> 이메일</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>
        <!-- // E: 240514 수정 -->

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">
            할부금 지급 및 수령 위임 동의
          </h3>

          <BasicBox>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>성명(상호)</KeyValueTitle>
                <KeyValueText>김하나</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>은행명</KeyValueTitle>
                <KeyValueText>하나은행</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>계좌번호</KeyValueTitle>
                <KeyValueText>****123123123123</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>대출금액</KeyValueTitle>
                <KeyValueText>24,990,000 원</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">
            자동차 근저당 설정계약서
          </h3>

          <div>
            <section class="row-margin-contents-group">
              <h4 class="text-body-2 row-margin-item-medium">
                채권자 겸 근저당권자
              </h4>

              <BasicBox>
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>주소</KeyValueTitle>
                    <KeyValueText>
                      88733<br />
                      인천 서구 청라1동 11, 청라동
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>상호</KeyValueTitle>
                    <KeyValueText>하나캐피탈</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </BasicBox>
            </section>

            <section class="row-margin-contents-group">
              <h4 class="text-body-2 row-margin-item-medium">
                근저당권 설정인
              </h4>

              <BasicBox>
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>주소</KeyValueTitle>
                    <KeyValueText>
                      88733<br />
                      인천 서구 청라1동 11, 청라동
                    </KeyValueText>
                  </KeyValueItem>
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
                    <KeyValueText>1998.01.23</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </BasicBox>
            </section>

            <section class="row-margin-contents-group">
              <h4 class="text-body-2 row-margin-item-medium">채무자</h4>

              <BasicBox>
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>주소</KeyValueTitle>
                    <KeyValueText>
                      88733<br />
                      인천 서구 청라1동 11, 청라동
                    </KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>성명</KeyValueTitle>
                    <KeyValueText>홍길동</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>생년월일</KeyValueTitle>
                    <KeyValueText>1998.01.23</KeyValueText>
                  </KeyValueItem>
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>
                      설정금액<br />
                      (채권가액)
                    </KeyValueTitle>
                    <KeyValueText>
                      금 100,000,000 원정<br />
                      (100,000,000 원)
                    </KeyValueText>
                  </KeyValueItem>
                </KeyValue>
              </BasicBox>
            </section>
          </div>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">자동차의 표시</h3>

          <BasicBox className="row-margin-item-group">
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <p class="text-body-4 font-weight-light row-margin-mini">
                  2020년식
                </p>

                <h3 class="text-body-1 font-weight-medium">123가1234</h3>
                <p class="text-body-4 color-gray row-margin-small">
                  올 뉴 아반떼/인스퍼레이션
                </p>
              </BasicBoxHeadLeft>
            </BasicBoxHead>

            <KeyValue>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>차대번호</KeyValueTitle>
                <KeyValueText>ASDFSD1231ASDF</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>

        <!-- S: 240514 수정 -->
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">보증인 정보</h3>

          <BasicBox>
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
                <KeyValueText>YYYY.MM.DD</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>휴대폰번호</KeyValueTitle>
                <KeyValueText>010 #### ####</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>등본지</KeyValueTitle>
                <KeyValueText>서울 서초구 방배로 131</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>신청인과의 관계</KeyValueTitle>
                <KeyValueText>대표이사</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">보증종류</h3>

          <BasicBox>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>보증종류</KeyValueTitle>
                <KeyValueText>특정근보증</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>보증기간</KeyValueTitle>
                <KeyValueText>60개월</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>보증채무 최고액</KeyValueTitle>
                <KeyValueText>13,000 원</KeyValueText>
              </KeyValueItem>
            </KeyValue>
            <p
              class="text-body-4 font-weight-light color-gray-tertiary mt16"
              align="right"
            >
              (대출금액의 130%, 장애인, 영업목적을 위한 자동차 구입시 100%)
            </p>
          </BasicBox>
        </section>
        <!-- // E: 240514 수정 -->
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
            <BasicButton>약정하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<!-- S: 240514 수정 -->
<style lang="scss" scoped>
.mt16 {
  margin-top: 16px;
}
</style>
<!-- // E: 240514 수정 -->
