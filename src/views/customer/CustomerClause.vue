<script>
// Customer_M08_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
export default {
  components: {
    PageContents,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '정책 및 약관');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => ['menu']);
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
    <UiAccordion
      tagName="ul"
      :classNames="{ wrap: $style['contents-list__list'] }"
    >
      <UiAccordionItem :classNames="{ item: $style['contents-list__item'] }">
        <div
          :class="[
            $style['logs__block'],
            $style['logs__block--secondary'],
            $style['logs__block--regular'],
          ]"
        >
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-body-1 font-weight-medium">
                온라인 서비스 이용약관
              </h3>
            </div>
            <div :class="$style['logs__right']">
              <button type="button" :class="$style['logs__link']">
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>
        </div>
      </UiAccordionItem>
      <UiAccordionItem
        :classNames="{ item: $style['contents-list__item'] }"
        :initialOpen="true"
      >
        <div :class="$style['contents-list__head']">
          <div :class="$style['contents-list__title']">휴대폰 인증약관</div>
          <div :class="$style['contents-list__right']">
            <UiAccordionOpener
              :classNames="{ button: $style['contents-list__opener'] }"
            />
          </div>
        </div>

        <UiAccordionLayer>
          <div :class="$style['agree-list__term-contents']">
            <ul :class="$style['agree-list__list']">
              <li :class="$style['agree-list__term-item']">
                <div :class="$style['agree-list__head']">
                  <div class="text-body-2 font-weight-medium">
                    본인확인 이용약관
                  </div>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li :class="$style['agree-list__term-item']">
                <div :class="$style['agree-list__head']">
                  <div class="text-body-2 font-weight-medium">
                    개인정보 수집·이용, 취급위탁 동의
                  </div>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li :class="$style['agree-list__term-item']">
                <div :class="$style['agree-list__head']">
                  <div class="text-body-2 font-weight-medium">
                    통신사 본인확인 이용약관 동의
                  </div>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li :class="$style['agree-list__term-item']">
                <div :class="$style['agree-list__head']">
                  <div class="text-body-2 font-weight-medium">
                    고유식별정보 처리 동의
                  </div>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </UiAccordionLayer>
      </UiAccordionItem>
      <UiAccordionItem
        :classNames="{ item: $style['contents-list__item'] }"
        :initialOpen="true"
      >
        <div :class="$style['contents-list__head']">
          <div :class="$style['contents-list__title']">
            하나멤버스 서비스 이용약관
          </div>
          <div :class="$style['contents-list__right']">
            <UiAccordionOpener
              :classNames="{ button: $style['contents-list__opener'] }"
            />
          </div>
        </div>

        <UiAccordionLayer>
          <div :class="$style['agree-list__term-contents']">
            <ul :class="$style['agree-list__list']">
              <li :class="$style['agree-list__term-item']">
                <div :class="$style['agree-list__head']">
                  <div class="text-body-2 font-weight-medium">
                    서비스 이용약관
                  </div>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li :class="$style['agree-list__term-item']">
                <div :class="$style['agree-list__head']">
                  <div class="text-body-2 font-weight-medium">
                    개인(신용)정보 선택적 수집·이용 동의
                  </div>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li :class="$style['agree-list__term-item']">
                <div :class="$style['agree-list__head']">
                  <div class="text-body-2 font-weight-medium">
                    개인(신용)정보 선택적 제공 동의
                  </div>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li :class="$style['agree-list__term-item']">
                <div :class="$style['agree-list__head']">
                  <div class="text-body-2 font-weight-medium">
                    개인(신용)정보 필수적 수집·이용 동의
                  </div>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li :class="$style['agree-list__term-item']">
                <div :class="$style['agree-list__head']">
                  <div class="text-body-2 font-weight-medium">
                    개인(신용)정보 필수적 제공 동의
                  </div>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </UiAccordionLayer>
      </UiAccordionItem>

      <UiAccordionItem
        :classNames="{ item: $style['contents-list__item'] }"
        :initialOpen="true"
      >
        <div :class="$style['contents-list__head']">
          <div :class="$style['contents-list__title']">금융약관</div>
          <div :class="$style['contents-list__right']">
            <UiAccordionOpener
              :classNames="{ button: $style['contents-list__opener'] }"
            />
          </div>
        </div>

        <UiAccordionLayer>
          <div :class="$style['agree-list__term-contents']">
            <ul :class="$style['agree-list__list']">
              <li :class="$style['agree-list__term-item']">
                <div :class="$style['agree-list__head']">
                  <div class="text-body-2 font-weight-medium">
                    전자금융거래확인
                  </div>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li :class="$style['agree-list__term-item']">
                <div :class="$style['agree-list__head']">
                  <div class="text-body-2 font-weight-medium">
                    여신거래기본약관
                  </div>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li :class="$style['agree-list__term-item']">
                <div :class="$style['agree-list__head']">
                  <div class="text-body-2 font-weight-medium">자동이체약관</div>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li :class="$style['agree-list__term-item']">
                <div :class="$style['agree-list__head']">
                  <div class="text-body-2 font-weight-medium">
                    전설기계/상용차 대출 약관
                  </div>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li :class="$style['agree-list__term-item']">
                <div :class="$style['agree-list__head']">
                  <div class="text-body-2 font-weight-medium">렌터카 약관</div>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li :class="$style['agree-list__term-item']">
                <div :class="$style['agree-list__head']">
                  <div class="text-body-2 font-weight-medium">
                    렌터카 승계 약관
                  </div>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li :class="$style['agree-list__term-item']">
                <div :class="$style['agree-list__head']">
                  <div class="text-body-2 font-weight-medium">
                    시설대여(리스) 약관
                  </div>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li :class="$style['agree-list__term-item']">
                <div :class="$style['agree-list__head']">
                  <div class="text-body-2 font-weight-medium">
                    일반신용대출약관
                  </div>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li :class="$style['agree-list__term-item']">
                <div :class="$style['agree-list__head']">
                  <div class="text-body-2 font-weight-medium">
                    일반할부금융약관
                  </div>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li :class="$style['agree-list__term-item']">
                <div :class="$style['agree-list__head']">
                  <div class="text-body-2 font-weight-medium">
                    자동차리스 표준약관
                  </div>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li :class="$style['agree-list__term-item']">
                <div :class="$style['agree-list__head']">
                  <div class="text-body-2 font-weight-medium">
                    자동차오토론(대출)약관
                  </div>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li :class="$style['agree-list__term-item']">
                <div :class="$style['agree-list__head']">
                  <div class="text-body-2 font-weight-medium">
                    자동차할부금융 약관
                  </div>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li :class="$style['agree-list__term-item']">
                <div :class="$style['agree-list__head']">
                  <div class="text-body-2 font-weight-medium">
                    중고차 자동차대출표준약관
                  </div>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li :class="$style['agree-list__term-item']">
                <div :class="$style['agree-list__head']">
                  <div class="text-body-2 font-weight-medium">할부금융약관</div>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li :class="$style['agree-list__term-item']">
                <div :class="$style['agree-list__head']">
                  <div class="text-body-2 font-weight-medium">
                    전세자금대출약관
                  </div>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </UiAccordionLayer>
      </UiAccordionItem>
      <UiAccordionItem :classNames="{ item: $style['contents-list__item'] }">
        <div
          :class="[
            $style['logs__block'],
            $style['logs__block--secondary'],
            $style['logs__block--regular'],
          ]"
        >
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-body-1 font-weight-medium">개인정보 처리방침</h3>
            </div>
            <div :class="$style['logs__right']">
              <button type="button" :class="$style['logs__link']">
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>
        </div>
      </UiAccordionItem>
      <UiAccordionItem :classNames="{ item: $style['contents-list__item'] }">
        <div
          :class="[
            $style['logs__block'],
            $style['logs__block--secondary'],
            $style['logs__block--regular'],
          ]"
        >
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-body-1 font-weight-medium">고객정보 취급방침</h3>
            </div>
            <div :class="$style['logs__right']">
              <button type="button" :class="$style['logs__link']">
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>
        </div>
      </UiAccordionItem>
      <UiAccordionItem
        :classNames="{ item: $style['contents-list__item'] }"
        :initialOpen="true"
      >
        <div :class="$style['contents-list__head']">
          <div :class="$style['contents-list__title']">
            개인(신용)정보관리보호
          </div>
          <div :class="$style['contents-list__right']">
            <UiAccordionOpener
              :classNames="{ button: $style['contents-list__opener'] }"
            />
          </div>
        </div>

        <UiAccordionLayer>
          <div :class="$style['agree-list__term-contents']">
            <ul :class="$style['agree-list__list']">
              <li :class="$style['agree-list__term-item']">
                <div :class="$style['agree-list__head']">
                  <div class="text-body-2 font-weight-medium">
                    개인(신용)정보 필수적 조회 동의
                  </div>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li :class="$style['agree-list__term-item']">
                <div :class="$style['agree-list__head']">
                  <div class="text-body-2 font-weight-medium">
                    개인(신용)정보 필수적 제공 동의
                  </div>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li :class="$style['agree-list__term-item']">
                <div :class="$style['agree-list__head']">
                  <div class="text-body-2 font-weight-medium">
                    개인(신용)정보 선택적 수집·이용 동의
                  </div>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li :class="$style['agree-list__term-item']">
                <div :class="$style['agree-list__head']">
                  <div class="text-body-2 font-weight-medium">
                    고객권리안내문
                  </div>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li :class="$style['agree-list__term-item']">
                <div :class="$style['agree-list__head']">
                  <div class="text-body-2 font-weight-medium">
                    개인(신용)정보 필수적 수집·이용 동의
                  </div>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li :class="$style['agree-list__term-item']">
                <div :class="$style['agree-list__head']">
                  <div class="text-body-2 font-weight-medium">
                    신용정보활용체제
                  </div>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </UiAccordionLayer>
      </UiAccordionItem>
      <UiAccordionItem
        :classNames="{ item: $style['contents-list__item'] }"
        :initialOpen="true"
      >
        <div :class="$style['contents-list__head']">
          <div :class="$style['contents-list__title']">위탁·제휴 현황</div>
          <div :class="$style['contents-list__right']">
            <UiAccordionOpener
              :classNames="{ button: $style['contents-list__opener'] }"
            />
          </div>
        </div>

        <UiAccordionLayer>
          <div :class="$style['agree-list__term-contents']">
            <ul :class="$style['agree-list__list']">
              <li :class="$style['agree-list__term-item']">
                <div :class="$style['agree-list__head']">
                  <div class="text-body-2 font-weight-medium">
                    제 3자 제공 현황
                  </div>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
              <li :class="$style['agree-list__term-item']">
                <div :class="$style['agree-list__head']">
                  <div class="text-body-2 font-weight-medium">
                    업무 위탁 현황
                  </div>
                  <div :class="$style['agree-list__right']">
                    <button type="button" :class="$style['agree-list__link']">
                      <span :class="$style['agree-list__link-text']">
                        상세보기
                      </span>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </UiAccordionLayer>
      </UiAccordionItem>
      <UiAccordionItem :classNames="{ item: $style['contents-list__item'] }">
        <div
          :class="[
            $style['logs__block'],
            $style['logs__block--secondary'],
            $style['logs__block--regular'],
          ]"
        >
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-body-1 font-weight-medium">
                이메일주소 무단수집거부
              </h3>
            </div>
            <div :class="$style['logs__right']">
              <button type="button" :class="$style['logs__link']">
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>
        </div>
      </UiAccordionItem>
      <UiAccordionItem :classNames="{ item: $style['contents-list__item'] }">
        <div
          :class="[
            $style['logs__block'],
            $style['logs__block--secondary'],
            $style['logs__block--regular'],
          ]"
        >
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-body-1 font-weight-medium">
                하나RE 멤버십약관 서비스 이용약관
              </h3>
            </div>
            <div :class="$style['logs__right']">
              <button type="button" :class="$style['logs__link']">
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>
        </div>
      </UiAccordionItem>
      <UiAccordionItem :classNames="{ item: $style['contents-list__item'] }">
        <div
          :class="[
            $style['logs__block'],
            $style['logs__block--secondary'],
            $style['logs__block--regular'],
          ]"
        >
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-body-1 font-weight-medium">
                하나캐피탈 멤버십 약관
              </h3>
            </div>
            <div :class="$style['logs__right']">
              <button type="button" :class="$style['logs__link']">
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>
        </div>
      </UiAccordionItem>
      <UiAccordionItem :classNames="{ item: $style['contents-list__item'] }">
        <div
          :class="[
            $style['logs__block'],
            $style['logs__block--secondary'],
            $style['logs__block--regular'],
          ]"
        >
          <div :class="$style['logs__row']">
            <div :class="$style['logs__contents']">
              <h3 class="text-body-1 font-weight-medium">
                영상정보처리기기 관리방침
              </h3>
            </div>
            <div :class="$style['logs__right']">
              <button type="button" :class="$style['logs__link']">
                <span :class="$style['logs__link-text']">상세보기</span>
              </button>
            </div>
          </div>
        </div>
      </UiAccordionItem>
    </UiAccordion>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/CustomerClause.scss';
</style>
