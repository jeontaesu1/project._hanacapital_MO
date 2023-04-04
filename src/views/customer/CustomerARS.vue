<script>
import { onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import IconTell from '@/assets/images/icon/tell.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    PageSubText,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IconTell,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '고객센터 ARS');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => ['']);
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
      <PageMainText>
        <strong>
          하나캐피탈 고객센터 ARS<br />
          안내 메뉴를 확인하시고,<br />
        </strong>
        보다 편리한 상담을 진행하세요
      </PageMainText>
      <PageSubText>
        각 단계별로 메뉴를 클릭하여 확인할 수 있습니다.
      </PageSubText>
    </PageTextGroup>

    <div class="text-body-5 color-gray font-weight-medium">이용요금 안내</div>
    <ul :class="[$style['basic-list'], 'row-margin-small']">
      <li :class="$style['basic-list__item']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          전국 어디서나 시내전화 요금으로 이용가능(유선전화 기준 3분당 39원,
          VAT별도/국내 전용기준)
        </div>
      </li>
      <li :class="$style['basic-list__item']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          070 인터넷 전화 및 이동전화는 해당 통신사 이용요금 기준
        </div>
      </li>
    </ul>

    <div :class="[$style['ars-list'], 'row-margin-contents-group']">
      <UiAccordion :classNames="{ wrap: $style['ars-list__container'] }">
        <UiAccordionItem
          :classNames="{ item: $style['ars-list__all'] }"
          :initialOpen="true"
        >
          <div :class="$style['ars-list__all-head']">
            <div :class="$style['ars-list__all-block']">
              <div :class="[$style['contents-list'], 'font-weight-medium']">
                <div :class="$style['contents-list__item']">
                  <div :class="$style['contents-list__symbol']">1</div>
                  <div :class="$style['contents-list__content']">
                    신규/추가대출 문의
                  </div>
                </div>
              </div>
            </div>
            <div :class="$style['ars-list__right']">
              <UiAccordionOpener :class="$style['ars-list__opener']" />
            </div>
          </div>

          <UiAccordionLayer>
            <div :class="$style['ars-list__all-contents']">
              <ul
                :class="[
                  $style['contents-list'],
                  $style['contents-list--medium-margin'],
                  'font-weight-medium',
                ]"
              >
                <li :class="$style['contents-list__item']">
                  <div
                    :class="[
                      $style['contents-list__symbol'],
                      $style['contents-list__symbol--square'],
                    ]"
                  >
                    1
                  </div>
                  <div
                    :class="[$style['contents-list__content'], 'text-body-2']"
                  >
                    신용대출상담
                  </div>
                </li>
                <li :class="$style['contents-list__item']">
                  <div
                    :class="[
                      $style['contents-list__symbol'],
                      $style['contents-list__symbol--square'],
                    ]"
                  >
                    2
                  </div>
                  <div
                    :class="[$style['contents-list__content'], 'text-body-2']"
                  >
                    자동차금융 상담
                  </div>
                </li>
                <li :class="$style['contents-list__item']">
                  <div
                    :class="[
                      $style['contents-list__symbol'],
                      $style['contents-list__symbol--square'],
                    ]"
                  >
                    3
                  </div>
                  <div
                    :class="[$style['contents-list__content'], 'text-body-2']"
                  >
                    담보대출 상담
                  </div>
                </li>
                <li :class="$style['contents-list__item']">
                  <div
                    :class="[
                      $style['contents-list__symbol'],
                      $style['contents-list__symbol--square'],
                    ]"
                  >
                    4
                  </div>
                  <div
                    :class="[$style['contents-list__content'], 'text-body-2']"
                  >
                    건설상용 상담
                  </div>
                </li>
                <li :class="$style['contents-list__item']">
                  <div
                    :class="[
                      $style['contents-list__symbol'],
                      $style['contents-list__symbol--square'],
                    ]"
                  >
                    5
                  </div>
                  <div
                    :class="[$style['contents-list__content'], 'text-body-2']"
                  >
                    의료기 산업기계 상담
                  </div>
                </li>
                <li :class="$style['contents-list__item']">
                  <div
                    :class="[
                      $style['contents-list__symbol'],
                      $style['contents-list__symbol--square'],
                    ]"
                  >
                    6
                  </div>
                  <div
                    :class="[$style['contents-list__content'], 'text-body-2']"
                  >
                    주식자금대출 상담
                  </div>
                </li>
                <li :class="$style['contents-list__item']">
                  <div
                    :class="[
                      $style['contents-list__symbol'],
                      $style['contents-list__symbol--square'],
                    ]"
                  >
                    0
                  </div>
                  <div
                    :class="[$style['contents-list__content'], 'text-body-2']"
                  >
                    상담원 연결
                  </div>
                </li>
              </ul>
            </div>
          </UiAccordionLayer>
        </UiAccordionItem>
        <UiAccordionItem
          :classNames="{ item: $style['ars-list__all'] }"
          :initialOpen="true"
        >
          <div :class="$style['ars-list__all-head']">
            <div :class="$style['ars-list__all-block']">
              <div :class="[$style['contents-list'], 'font-weight-medium']">
                <div :class="$style['contents-list__item']">
                  <div :class="$style['contents-list__symbol']">2</div>
                  <div :class="$style['contents-list__content']">
                    당사이용고객
                  </div>
                </div>
              </div>
            </div>
            <div :class="$style['ars-list__right']">
              <UiAccordionOpener :class="$style['ars-list__opener']" />
            </div>
          </div>

          <UiAccordionLayer>
            <div :class="$style['ars-list__all-contents']">
              <UiAccordion :classNames="{ wrap: $style['ars-list__depth'] }">
                <UiAccordionItem
                  :classNames="{ item: $style['ars-list__depth-item'] }"
                  :initialOpen="true"
                >
                  <div :class="$style['ars-list__depth-head']">
                    <div :class="$style['ars-list__depth-block']">
                      <div
                        :class="[
                          $style['contents-list'],
                          $style['contents-list--medium-margin'],
                          'font-weight-medium',
                        ]"
                      >
                        <div :class="$style['contents-list__item']">
                          <div
                            :class="[
                              $style['contents-list__symbol'],
                              $style['contents-list__symbol--square'],
                            ]"
                          >
                            1
                          </div>
                          <div
                            :class="[
                              $style['contents-list__content'],
                              'text-body-2',
                            ]"
                          >
                            기존 거래정보 확인
                          </div>
                        </div>
                      </div>
                    </div>

                    <div :class="$style['ars-list__right']">
                      <UiAccordionOpener :class="$style['ars-list__opener']" />
                    </div>
                  </div>

                  <UiAccordionLayer>
                    <div :class="$style['ars-list__depth-contents']">
                      <ul
                        :class="[
                          $style['contents-list'],
                          $style['contents-list--normal-margin'],
                        ]"
                      >
                        <li :class="[$style['contents-list__item']]">
                          <div
                            :class="[
                              $style['contents-list__symbol'],
                              $style['contents-list__symbol--small'],
                            ]"
                          >
                            1
                          </div>
                          <div
                            :class="[
                              $style['contents-list__content'],
                              'text-body-3',
                            ]"
                          >
                            당월결제금액
                          </div>
                        </li>
                        <li :class="$style['contents-list__item']">
                          <div
                            :class="[
                              $style['contents-list__symbol'],
                              $style['contents-list__symbol--small'],
                            ]"
                          >
                            2
                          </div>
                          <div
                            :class="[
                              $style['contents-list__content'],
                              'text-body-3',
                            ]"
                          >
                            최근입금내역
                          </div>
                        </li>
                        <li :class="$style['contents-list__item']">
                          <div
                            :class="[
                              $style['contents-list__symbol'],
                              $style['contents-list__symbol--small'],
                            ]"
                          >
                            3
                          </div>
                          <div
                            :class="[
                              $style['contents-list__content'],
                              'text-body-3',
                            ]"
                          >
                            중도상환안내
                          </div>
                        </li>
                        <li :class="$style['contents-list__item']">
                          <div
                            :class="[
                              $style['contents-list__symbol'],
                              $style['contents-list__symbol--small'],
                            ]"
                          >
                            4
                          </div>
                          <div
                            :class="[
                              $style['contents-list__content'],
                              'text-body-3',
                            ]"
                          >
                            승계 및 연장문의
                          </div>
                        </li>
                        <UiAccordion
                          :classNames="{
                            wrap: $style['ars-list__2depth'],
                          }"
                        >
                          <UiAccordionItem
                            :classNames="{
                              item: $style['ars-list__2depth-item'],
                            }"
                            :initialOpen="true"
                          >
                            <div :class="$style['ars-list__2depth-head']">
                              <div :class="$style['ars-list__2depth-block']">
                                <div
                                  :class="[
                                    $style['contents-list'],
                                    $style['contents-list--regular-margin'],
                                  ]"
                                >
                                  <div :class="[$style['contents-list__item']]">
                                    <div
                                      :class="[
                                        $style['contents-list__symbol'],
                                        $style['contents-list__symbol--small'],
                                      ]"
                                    >
                                      5
                                    </div>
                                    <div
                                      :class="[
                                        $style['contents-list__content'],
                                        'text-body-3',
                                      ]"
                                    >
                                      하나멤버스 상담
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div :class="$style['ars-list__right']">
                                <UiAccordionOpener
                                  :class="$style['ars-list__opener']"
                                />
                              </div>
                            </div>
                            <UiAccordionLayer>
                              <div :class="$style['ars-list__2depth-contents']">
                                <ul
                                  :class="[
                                    $style['contents-list'],
                                    $style['contents-list--normal-margin'],
                                    'color-gray',
                                  ]"
                                >
                                  <li :class="[$style['contents-list__item']]">
                                    <div
                                      :class="[
                                        $style['contents-list__symbol'],
                                        $style['contents-list__symbol--small'],
                                      ]"
                                    >
                                      1
                                    </div>
                                    <div
                                      :class="[
                                        $style['contents-list__content'],
                                        'text-body-4',
                                      ]"
                                    >
                                      당사 하나멤버스 회원조회
                                    </div>
                                  </li>
                                  <li :class="$style['contents-list__item']">
                                    <div
                                      :class="[
                                        $style['contents-list__symbol'],
                                        $style['contents-list__symbol--small'],
                                      ]"
                                    >
                                      2
                                    </div>
                                    <div
                                      :class="[
                                        $style['contents-list__content'],
                                        'text-body-4',
                                      ]"
                                    >
                                      하나멤버스 회원가입
                                    </div>
                                  </li>
                                  <li :class="$style['contents-list__item']">
                                    <div
                                      :class="[
                                        $style['contents-list__symbol'],
                                        $style['contents-list__symbol--small'],
                                      ]"
                                    >
                                      3
                                    </div>
                                    <div
                                      :class="[
                                        $style['contents-list__content'],
                                        'text-body-4',
                                      ]"
                                    >
                                      관계사 연결
                                    </div>
                                  </li>
                                  <li :class="$style['contents-list__item']">
                                    <div
                                      :class="[
                                        $style['contents-list__symbol'],
                                        $style['contents-list__symbol--small'],
                                      ]"
                                    >
                                      0
                                    </div>
                                    <div
                                      :class="[
                                        $style['contents-list__content'],
                                        'text-body-4',
                                      ]"
                                    >
                                      상담원 연결
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </UiAccordionLayer>
                          </UiAccordionItem>
                        </UiAccordion>
                      </ul>
                    </div>
                  </UiAccordionLayer>
                </UiAccordionItem>
                <UiAccordionItem
                  :classNames="{ item: $style['ars-list__depth-item'] }"
                  :initialOpen="true"
                >
                  <div :class="$style['ars-list__depth-head']">
                    <div :class="$style['ars-list__depth-block']">
                      <div
                        :class="[
                          $style['contents-list'],
                          $style['contents-list--medium-margin'],
                          'font-weight-medium',
                        ]"
                      >
                        <div :class="$style['contents-list__item']">
                          <div
                            :class="[
                              $style['contents-list__symbol'],
                              $style['contents-list__symbol--square'],
                            ]"
                          >
                            0
                          </div>
                          <div
                            :class="[
                              $style['contents-list__content'],
                              'text-body-2',
                            ]"
                          >
                            상담원연결
                          </div>
                        </div>
                      </div>
                    </div>
                    <div :class="$style['ars-list__right']">
                      <UiAccordionOpener :class="$style['ars-list__opener']" />
                    </div>
                  </div>

                  <UiAccordionLayer>
                    <div :class="$style['ars-list__depth-contents']">
                      <ul
                        :class="[
                          $style['contents-list'],
                          $style['contents-list--normal-margin'],
                        ]"
                      >
                        <li :class="[$style['contents-list__item']]">
                          <div
                            :class="[
                              $style['contents-list__symbol'],
                              $style['contents-list__symbol--small'],
                            ]"
                          >
                            1
                          </div>
                          <div
                            :class="[
                              $style['contents-list__content'],
                              'text-body-3',
                            ]"
                          >
                            자동차금융 상담
                          </div>
                        </li>
                        <li :class="$style['contents-list__item']">
                          <div
                            :class="[
                              $style['contents-list__symbol'],
                              $style['contents-list__symbol--small'],
                            ]"
                          >
                            2
                          </div>
                          <div
                            :class="[
                              $style['contents-list__content'],
                              'text-body-3',
                            ]"
                          >
                            개인금융 상담
                          </div>
                        </li>
                      </ul>
                    </div>
                  </UiAccordionLayer>
                </UiAccordionItem>
              </UiAccordion>
            </div>
          </UiAccordionLayer>
        </UiAccordionItem>
        <UiAccordionItem
          :classNames="{ item: $style['ars-list__all'] }"
          :initialOpen="true"
        >
          <div :class="$style['ars-list__all-head']">
            <div :class="$style['ars-list__all-block']">
              <div :class="[$style['contents-list'], 'font-weight-medium']">
                <div :class="$style['contents-list__item']">
                  <div :class="$style['contents-list__symbol']">3</div>
                  <div :class="$style['contents-list__content']">기타상담</div>
                </div>
              </div>
            </div>
            <div :class="$style['ars-list__right']">
              <UiAccordionOpener :class="$style['ars-list__opener']" />
            </div>
          </div>

          <UiAccordionLayer>
            <div :class="$style['ars-list__all-contents']">
              <ul
                :class="[
                  $style['contents-list'],
                  $style['contents-list--medium-margin'],
                  'font-weight-medium',
                ]"
              >
                <li :class="$style['contents-list__item']">
                  <div
                    :class="[
                      $style['contents-list__symbol'],
                      $style['contents-list__symbol--square'],
                    ]"
                  >
                    1
                  </div>
                  <div
                    :class="[$style['contents-list__content'], 'text-body-2']"
                  >
                    불법대출 및 보이스피싱
                  </div>
                </li>
                <li :class="$style['contents-list__item']">
                  <div
                    :class="[
                      $style['contents-list__symbol'],
                      $style['contents-list__symbol--square'],
                    ]"
                  >
                    2
                  </div>
                  <div
                    :class="[$style['contents-list__content'], 'text-body-2']"
                  >
                    당사이용 고객이 아닌경우
                  </div>
                </li>
                <li :class="$style['contents-list__item']">
                  <div
                    :class="[
                      $style['contents-list__symbol'],
                      $style['contents-list__symbol--square'],
                    ]"
                  >
                    3
                  </div>
                  <div
                    :class="[$style['contents-list__content'], 'text-body-2']"
                  >
                    상담원연결
                  </div>
                </li>
              </ul>
            </div>
          </UiAccordionLayer>
        </UiAccordionItem>
        <UiAccordionItem :classNames="{ item: $style['ars-list__all'] }">
          <div :class="$style['ars-list__all-head']">
            <div :class="$style['ars-list__all-block']">
              <div :class="[$style['contents-list'], 'font-weight-medium']">
                <div :class="$style['contents-list__item']">
                  <div :class="$style['contents-list__symbol']">0</div>
                  <div :class="$style['contents-list__content']">
                    상담원연결
                  </div>
                </div>
              </div>
            </div>
          </div>
        </UiAccordionItem>
      </UiAccordion>
    </div>

    <template v-slot:foot>
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton tagName="a" theme="primary" href="tel:1800-1110">
            <template v-slot:leftIcon>
              <IconTell />
            </template>
            1800-1110
          </BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/CustomerARS.scss';
</style>
