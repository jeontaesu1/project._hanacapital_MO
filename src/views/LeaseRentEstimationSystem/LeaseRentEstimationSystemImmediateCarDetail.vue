<script>
// LR_M02_p008 (즉시출고)
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiLoadingStore } from '@/stores/ui/loading';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import IconCopy from '@/assets/images/icon/copy.svg?component';
import IconArrow from '@/assets/images/icon/dropdown.svg?component';

export default {
  components: {
    PageContents,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    UiAccordion,
    TextButton,
    RoundStatus,
    IconCopy,
    IconArrow,
  },
  setup() {
    const store = {
      ui: {
        loading: useUiLoadingStore(),
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      exteriorETCError: false,
      exteriorETCPriceError: false,
      interiorETCError: false,
      interiorETCPriceError: false,
      optionETCError: false,
      optionETCPriceError: false,
      deliveryDiscountPriceError: false,
      deliveryDiscountRatioError: false,
      deliveryManufacturerPriceError: false,
      carQuantityError001: false,
      carQuantityError002: false,
      contractNumberError001: false,
      contractNumberError002: false,
      contractNumberError003: false,
      carIdNumberError001: false,
      carIdNumberError002: false,
      carIdNumberError003: false,
      dateError001: false,
      dateError002: false,
      dateError003: false,
    });

    // DD : 아코디언 열때 Ajax 통신시 예시 : start
    const testAjax = () => {
      return new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 1000)
      );
    };

    const testAccordionToggle = (props, call) => {
      const { opened, open, close } = props;

      if (!opened) {
        const result = call();

        store.ui.loading.show();

        result.then(() => {
          open();
          store.ui.loading.hide();
        });
      } else {
        close();
      }
    };
    // DD : 아코디언 열때 Ajax 통신시 예시 : end

    // DD : 아코디언 내 폼 선택/적용 후 현재 아코디언 닫기 및 다음 아코디언 여는 함수 예시 : start
    const testAaccordionClose = (props, itemProps, nextKey) => {
      const { items } = props;
      const { close } = itemProps;
      const nextItem = nextKey && items.find((item) => item.key === nextKey);

      close();

      if (nextItem) {
        testAccordionToggle(
          { ...nextItem, opened: nextItem.getOpened() },
          testAjax
        );
      }
    };
    // DD : 아코디언 내 폼 선택/적용 후 현재 아코디언 닫기 및 다음 아코디언 여는 함수 예시 : end

    // DD : 이미 체크 된 라디오 버튼 재 클릭 시 체크 해제 함수 예시 : start
    const eChange = new Event('change');
    const testTimer = {};
    const testRadioClick = (e) => {
      const el = e.target;
      const { id, checked } = el;

      testTimer[id] = setTimeout(() => {
        if (checked) {
          el.checked = false;
          el.dispatchEvent(eChange);
        }
      }, 50);
    };
    const testRadioChange = (e) => {
      const el = e.target;
      const { id } = el;

      clearTimeout(testTimer[id]);
    };
    // DD : 이미 체크 된 라디오 버튼 재 클릭 시 체크 해제 함수 예시 : end

    onMounted(() => {
      store.ui.header.setTitle(() => '즉시출고');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => ['menu']);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });

    return {
      state,
      testAjax,
      testAccordionToggle,
      testAaccordionClose,
      testRadioClick,
      testRadioChange,
    };
  },
};
</script>

<template>
  <PageContents>
    <div>
      <section class="row-margin-container-medium row-margin-bottom-none">
        <div
          :class="[
            $style['inline-alert'],
            $style['inline-alert--error'],
            'alert-bg',
          ]"
        >
          <p :class="$style['inline-alert__text']">
            지점 문의를 통한 선점 확인 필수
          </p>
        </div>

        <h2 class="text-title-2 row-margin-contents">
          캐스퍼
          <RoundStatus class="marginLeft" theme="secondary">2대</RoundStatus>
        </h2>

        <!-- Case : 차량 선택 전 -->
        <!-- <div :class="$style['empty']">
          <p :class="$style['empty__text']">
            모델을 선택하시고 목록에 추가하세요.
          </p>
        </div> -->
        <!-- // Case : 차량 선택 전 -->

        <!-- Case : 차량 선택 후 -->
        <ul class="reset-list">
          <!-- Case : 전송하기 버튼 클릭 전 -->
          <li class="row-margin-item-group">
            <section :class="$style['estimate-list']">
              <div :class="$style['estimate-list__top']">
                <div class="flex-box">
                  <div class="flex-box__cell flex-1">
                    <h3 :class="$style['estimate-list__title']">1번 상품</h3>
                  </div>
                </div>
              </div>

              <UiAccordion
                :classNames="{ wrap: $style['estimate-list__list'] }"
              >
                <!-- 계약번호 -->
                <li :class="$style['estimate-list__item']">
                  <div :class="$style['estimate-list__head']">
                    <div :class="$style['estimate-list__block']">
                      <div :class="$style['estimate-list__left']">
                        <KeyValue align="left" size="regular">
                          <KeyValueItem :classNames="{ item: 'text-body-3' }">
                            <KeyValueTitle class="keyValue-title">
                              <div class="text-body-4">계약번호</div>
                            </KeyValueTitle>
                            <KeyValueText>
                              <TextButton
                                theme="secondary"
                                :underline="true"
                                :iconFillAll="true"
                              >
                                A3624AX001243
                                <IconCopy class="ic-copy" />
                              </TextButton>
                            </KeyValueText>
                          </KeyValueItem>
                        </KeyValue>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- // 계약번호 -->

                <!-- 차량사양 -->
                <li :class="$style['estimate-list__item']">
                  <div :class="$style['estimate-list__head']">
                    <div :class="$style['estimate-list__block']">
                      <div :class="$style['estimate-list__left']">
                        <KeyValue align="left" size="regular">
                          <KeyValueItem :classNames="{ item: 'text-body-3' }">
                            <KeyValueTitle class="keyValue-title">
                              <div class="text-body-4">차량사양</div>
                            </KeyValueTitle>
                            <KeyValueText>
                              <div class="flex-box align-items-start">
                                <div class="flex-box__cell flex-1">
                                  캐스퍼 자가용 기본 4인승<br />
                                  가솔리1.0 인스퍼레이션 오토 23MY, <br />
                                  무옵션 기타 칼라 추가 상세내용 등등
                                </div>
                              </div>
                            </KeyValueText>
                          </KeyValueItem>
                        </KeyValue>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- // 차량사양 -->

                <!-- 차량가격 -->
                <li :class="$style['estimate-list__item']">
                  <div :class="$style['estimate-list__head']">
                    <div :class="$style['estimate-list__block']">
                      <div :class="$style['estimate-list__left']">
                        <KeyValue align="left" size="regular">
                          <KeyValueItem :classNames="{ item: 'text-body-3' }">
                            <KeyValueTitle class="keyValue-title">
                              <div class="text-body-4">차량가격</div>
                            </KeyValueTitle>
                            <KeyValueText> 18,500,000원 </KeyValueText>
                          </KeyValueItem>
                        </KeyValue>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- // 차량가격 -->

                <!-- 배정지점1 -->
                <li :class="$style['estimate-list__item']">
                  <div :class="$style['estimate-list__head']">
                    <div :class="$style['estimate-list__block']">
                      <div :class="$style['estimate-list__left']">
                        <KeyValue align="left" size="regular">
                          <KeyValueItem :classNames="{ item: 'text-body-3' }">
                            <KeyValueTitle class="keyValue-title">
                              <div class="text-body-4">배정지점1</div>
                            </KeyValueTitle>
                            <KeyValueText>
                              <div class="flex-box align-items-start">
                                <div class="flex-box__cell flex-1">지점명</div>
                              </div>
                            </KeyValueText>
                          </KeyValueItem>
                        </KeyValue>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- // 배정지점1 -->

                <!-- 배정지점2 -->
                <li :class="$style['estimate-list__item']">
                  <div :class="$style['estimate-list__head']">
                    <div :class="$style['estimate-list__block']">
                      <div :class="$style['estimate-list__left']">
                        <KeyValue align="left" size="regular">
                          <KeyValueItem :classNames="{ item: 'text-body-3' }">
                            <KeyValueTitle class="keyValue-title">
                              <div class="text-body-4">배정지점2</div>
                            </KeyValueTitle>
                            <KeyValueText>
                              <div class="flex-box align-items-start">
                                <div class="flex-box__cell flex-1"></div>
                              </div>
                            </KeyValueText>
                          </KeyValueItem>
                        </KeyValue>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- // 배정지점2 -->
              </UiAccordion>
            </section>
          </li>

          <li class="row-margin-item-group">
            <section :class="$style['estimate-list']">
              <div :class="$style['estimate-list__top']">
                <div class="flex-box">
                  <div class="flex-box__cell flex-1">
                    <h3 :class="$style['estimate-list__title']">2번 상품</h3>
                  </div>
                </div>
              </div>

              <UiAccordion
                :classNames="{ wrap: $style['estimate-list__list'] }"
              >
                <!-- 계약번호 -->
                <li :class="$style['estimate-list__item']">
                  <div :class="$style['estimate-list__head']">
                    <div :class="$style['estimate-list__block']">
                      <div :class="$style['estimate-list__left']">
                        <KeyValue align="left" size="regular">
                          <KeyValueItem :classNames="{ item: 'text-body-3' }">
                            <KeyValueTitle class="keyValue-title">
                              <div class="text-body-4">계약번호</div>
                            </KeyValueTitle>
                            <KeyValueText>
                              <TextButton
                                theme="secondary"
                                :underline="true"
                                :iconFillAll="true"
                              >
                                A3624AX001243
                                <IconCopy class="ic-copy" />
                              </TextButton>
                            </KeyValueText>
                          </KeyValueItem>
                        </KeyValue>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- // 계약번호 -->

                <!-- 차량사양 -->
                <li :class="$style['estimate-list__item']">
                  <div :class="$style['estimate-list__head']">
                    <div :class="$style['estimate-list__block']">
                      <div :class="$style['estimate-list__left']">
                        <KeyValue align="left" size="regular">
                          <KeyValueItem :classNames="{ item: 'text-body-3' }">
                            <KeyValueTitle class="keyValue-title">
                              <div class="text-body-4">차량사양</div>
                            </KeyValueTitle>
                            <KeyValueText>
                              <div class="flex-box align-items-start">
                                <div class="flex-box__cell flex-1">
                                  캐스퍼 자가용 기본 4인승<br />
                                  가솔리1.0 인스퍼레이션 오토 23MY, <br />
                                  무옵션 기타 칼라 추가 상세내용 등등
                                </div>
                              </div>
                            </KeyValueText>
                          </KeyValueItem>
                        </KeyValue>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- // 차량사양 -->

                <!-- 차량가격 -->
                <li :class="$style['estimate-list__item']">
                  <div :class="$style['estimate-list__head']">
                    <div :class="$style['estimate-list__block']">
                      <div :class="$style['estimate-list__left']">
                        <KeyValue align="left" size="regular">
                          <KeyValueItem :classNames="{ item: 'text-body-3' }">
                            <KeyValueTitle class="keyValue-title">
                              <div class="text-body-4">차량가격</div>
                            </KeyValueTitle>
                            <KeyValueText> 18,500,000원 </KeyValueText>
                          </KeyValueItem>
                        </KeyValue>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- // 차량가격 -->

                <!-- 배정지점1 -->
                <li :class="$style['estimate-list__item']">
                  <div :class="$style['estimate-list__head']">
                    <div :class="$style['estimate-list__block']">
                      <div :class="$style['estimate-list__left']">
                        <KeyValue align="left" size="regular">
                          <KeyValueItem :classNames="{ item: 'text-body-3' }">
                            <KeyValueTitle class="keyValue-title">
                              <div class="text-body-4">배정지점1</div>
                            </KeyValueTitle>
                            <KeyValueText>
                              <div class="flex-box align-items-start">
                                <div class="flex-box__cell flex-1">지점명</div>
                              </div>
                            </KeyValueText>
                          </KeyValueItem>
                        </KeyValue>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- // 배정지점1 -->

                <!-- 배정지점2 -->
                <li :class="$style['estimate-list__item']">
                  <div :class="$style['estimate-list__head']">
                    <div :class="$style['estimate-list__block']">
                      <div :class="$style['estimate-list__left']">
                        <KeyValue align="left" size="regular">
                          <KeyValueItem :classNames="{ item: 'text-body-3' }">
                            <KeyValueTitle class="keyValue-title">
                              <div class="text-body-4">배정지점2</div>
                            </KeyValueTitle>
                            <KeyValueText>
                              <div class="flex-box align-items-start">
                                <div class="flex-box__cell flex-1"></div>
                              </div>
                            </KeyValueText>
                          </KeyValueItem>
                        </KeyValue>
                      </div>
                    </div>
                  </div>
                </li>
                <!-- // 배정지점2 -->
              </UiAccordion>
            </section>
          </li>
          <!-- //Case : 전송하기 버튼 클릭 전 -->
        </ul>
        <!-- // Case : 차량 선택 후 -->

        <div class="inline-wrap align-center row-margin-item-group">
          <TextButton :classNames="{ wrap: 'text-body-4 color-gray' }">
            더보기
            <template v-slot:rightIcon>
              <IconArrow />
            </template>
          </TextButton>
        </div>
      </section>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemImmediateCarDetail.scss';
@import '@/assets/scss/views/uiGuide/GuideComponentModule.scss';
</style>

<style lang="scss" scoped>
.ic-copy {
  width: 16px;
  height: 16px;
}

.keyValue-title {
  width: 60px !important;
}

.marginLeft {
  margin-left: 6px;
}

.alert-bg {
  background-color: rgba(255, 255, 255, 0);
  padding: 0 0 6px 20px;

  &:before {
    content: '';
    top: 0;
    left: 0;
  }
}
</style>
