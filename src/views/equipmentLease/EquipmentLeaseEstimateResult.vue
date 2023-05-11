<script>
// EL_M01_p002
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    PageSubText,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicBox,
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
    StickyBar,
    BasicBoxHead,
    BasicBoxHeadLeft,
    TextButton,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '설비리스 견적서');
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
    <PageTextGroup>
      <PageMainText>김하나 고객님</PageMainText>
      <PageSubText>
        아래와 같이 설비리스 조건을 제시드리며, 세부 사항은 담당자에게 문의하여
        주시기 바랍니다.
      </PageSubText>
    </PageTextGroup>

    <!-- case: 복수 견적일 경우 탭 노출 -->
    <UiTab>
      <StickyBar>
        <NavTab :useUiTab="true">
          <NavTabButton link="equipmentLeaseEstimateResultTab001">
            견적1
          </NavTabButton>
          <NavTabButton link="equipmentLeaseEstimateResultTab002">
            견적2
          </NavTabButton>
          <NavTabButton link="equipmentLeaseEstimateResultTab003">
            견적3
          </NavTabButton>
        </NavTab>
      </StickyBar>

      <UiTabPanel name="equipmentLeaseEstimateResultTab001">
        <section class="row-margin-container-medium">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-body-1 font-weight-medium">
                  OOO레이져글자수열다섯글자수
                </h3>
              </BasicBoxHeadLeft>
            </BasicBoxHead>

            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>취득원가</KeyValueTitle>
                <KeyValueText>99,999,000원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>기간</KeyValueTitle>
                <KeyValueText>24개월</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>상환금리</KeyValueTitle>
                <KeyValueText>5%</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>보증금</KeyValueTitle>
                <KeyValueText>20% (2,000,000 원)</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>잔존가치</KeyValueTitle>
                <KeyValueText>20% (2,000,000 원)</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>유예원금</KeyValueTitle>
                <KeyValueText>20% (2,000,000 원)</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>월리스료</KeyValueTitle>
                <KeyValueText>100,000,000원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>총납입액</KeyValueTitle>
                <KeyValueText>100,000,000원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>이자총액</KeyValueTitle>
                <KeyValueText>100,000,000원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>보험조건</KeyValueTitle>
                <KeyValueText>이용자책임부보</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>납입방식</KeyValueTitle>
                <KeyValueText>1개월 후불</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>상환스케줄</KeyValueTitle>
                <KeyValueText>
                  <div class="inline-wrap align-right">
                    <TextButton :underline="true" theme="secondary">
                      상세보기
                    </TextButton>
                  </div>
                </KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>

        <section>
          <h3 class="text-title-2 row-margin-contents">견적정보</h3>

          <BasicBox>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>견적번호</KeyValueTitle>
                <KeyValueText>A00000000001</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>영업사원</KeyValueTitle>
                <KeyValueText>이두리</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>연락처</KeyValueTitle>
                <KeyValueText>
                  M 010-1234-5678<br />
                  T 02-1234-5678
                </KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>Fax</KeyValueTitle>
                <KeyValueText>02-2037-3211</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>
      </UiTabPanel>

      <UiTabPanel name="equipmentLeaseEstimateResultTab002">
        <section class="row-margin-container-medium">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-body-1 font-weight-medium">
                  OOO레이져글자수열다섯글자수
                </h3>
              </BasicBoxHeadLeft>
            </BasicBoxHead>

            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>취득원가</KeyValueTitle>
                <KeyValueText>99,999,000원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>기간</KeyValueTitle>
                <KeyValueText>24개월</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>상환금리</KeyValueTitle>
                <KeyValueText>5%</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>보증금</KeyValueTitle>
                <KeyValueText>20% (2,000,000 원)</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>잔존가치</KeyValueTitle>
                <KeyValueText>20% (2,000,000 원)</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>유예원금</KeyValueTitle>
                <KeyValueText>20% (2,000,000 원)</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>월리스료</KeyValueTitle>
                <KeyValueText>100,000,000원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>총납입액</KeyValueTitle>
                <KeyValueText>100,000,000원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>이자총액</KeyValueTitle>
                <KeyValueText>100,000,000원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>보험조건</KeyValueTitle>
                <KeyValueText>이용자책임부보</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>납입방식</KeyValueTitle>
                <KeyValueText>1개월 후불</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>상환스케줄</KeyValueTitle>
                <KeyValueText>
                  <div class="inline-wrap align-right">
                    <TextButton :underline="true" theme="secondary">
                      상세보기
                    </TextButton>
                  </div>
                </KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>

        <section>
          <h3 class="text-title-2 row-margin-contents">견적정보</h3>

          <BasicBox>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>견적번호</KeyValueTitle>
                <KeyValueText>A00000000001</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>영업사원</KeyValueTitle>
                <KeyValueText>이두리</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>연락처</KeyValueTitle>
                <KeyValueText>
                  M 010-1234-5678<br />
                  T 02-1234-5678
                </KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>Fax</KeyValueTitle>
                <KeyValueText>02-2037-3211</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>
      </UiTabPanel>

      <UiTabPanel name="equipmentLeaseEstimateResultTab003">
        <section class="row-margin-container-medium">
          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <h3 class="text-body-1 font-weight-medium">
                  OOO레이져글자수열다섯글자수
                </h3>
              </BasicBoxHeadLeft>
            </BasicBoxHead>

            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>취득원가</KeyValueTitle>
                <KeyValueText>99,999,000원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>기간</KeyValueTitle>
                <KeyValueText>24개월</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>상환금리</KeyValueTitle>
                <KeyValueText>5%</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>보증금</KeyValueTitle>
                <KeyValueText>20% (2,000,000 원)</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>잔존가치</KeyValueTitle>
                <KeyValueText>20% (2,000,000 원)</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>유예원금</KeyValueTitle>
                <KeyValueText>20% (2,000,000 원)</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>월리스료</KeyValueTitle>
                <KeyValueText>100,000,000원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>총납입액</KeyValueTitle>
                <KeyValueText>100,000,000원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>이자총액</KeyValueTitle>
                <KeyValueText>100,000,000원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>보험조건</KeyValueTitle>
                <KeyValueText>이용자책임부보</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>납입방식</KeyValueTitle>
                <KeyValueText>1개월 후불</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>상환스케줄</KeyValueTitle>
                <KeyValueText>
                  <div class="inline-wrap align-right">
                    <TextButton :underline="true" theme="secondary">
                      상세보기
                    </TextButton>
                  </div>
                </KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>

        <section>
          <h3 class="text-title-2 row-margin-contents">견적정보</h3>

          <BasicBox>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>견적번호</KeyValueTitle>
                <KeyValueText>A00000000001</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>영업사원</KeyValueTitle>
                <KeyValueText>이두리</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>연락처</KeyValueTitle>
                <KeyValueText>
                  M 010-1234-5678<br />
                  T 02-1234-5678
                </KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>Fax</KeyValueTitle>
                <KeyValueText>02-2037-3211</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>
      </UiTabPanel>
    </UiTab>
    <!-- // case: 복수 견적일 경우 탭 노출 -->

    <!-- case: 단일 견적일 경우 노출 -->
    <section class="row-margin-container-medium">
      <BasicBox>
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <h3 class="text-body-1 font-weight-medium">
              OOO레이져글자수열다섯글자수
            </h3>
          </BasicBoxHeadLeft>
        </BasicBoxHead>

        <KeyValue margin="regular">
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>취득원가</KeyValueTitle>
            <KeyValueText>99,999,000원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>기간</KeyValueTitle>
            <KeyValueText>24개월</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>상환금리</KeyValueTitle>
            <KeyValueText>5%</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>보증금</KeyValueTitle>
            <KeyValueText>20% (2,000,000 원)</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>잔존가치</KeyValueTitle>
            <KeyValueText>20% (2,000,000 원)</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>유예원금</KeyValueTitle>
            <KeyValueText>20% (2,000,000 원)</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>월리스료</KeyValueTitle>
            <KeyValueText>100,000,000원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>총납입액</KeyValueTitle>
            <KeyValueText>100,000,000원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>이자총액</KeyValueTitle>
            <KeyValueText>100,000,000원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>보험조건</KeyValueTitle>
            <KeyValueText>이용자책임부보</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>납입방식</KeyValueTitle>
            <KeyValueText>1개월 후불</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>상환스케줄</KeyValueTitle>
            <KeyValueText>
              <div class="inline-wrap align-right">
                <TextButton :underline="true" theme="secondary">
                  상세보기
                </TextButton>
              </div>
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>
    </section>

    <section>
      <h3 class="text-title-2 row-margin-contents">견적정보</h3>

      <BasicBox>
        <KeyValue margin="regular">
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>견적번호</KeyValueTitle>
            <KeyValueText>A00000000001</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>영업사원</KeyValueTitle>
            <KeyValueText>이두리</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>연락처</KeyValueTitle>
            <KeyValueText>
              M 010-1234-5678<br />
              T 02-1234-5678
            </KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>Fax</KeyValueTitle>
            <KeyValueText>02-2037-3211</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>
    </section>
    <!-- // case: 단일 견적일 경우 노출 -->

    <template v-slot:foot>
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton>견적 전송하기</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>
  </PageContents>
</template>
