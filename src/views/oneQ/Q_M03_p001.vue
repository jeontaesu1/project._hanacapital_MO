<script>
// Q_M03_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiLayoutStore } from '@/stores/ui/layout';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BottomSticky,
    TextButton,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        layout: useUiLayoutStore(),
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.layout.setUseFooter(false);

      store.ui.header.setTitle(() => '오토리스 다이렉트');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
      store.ui.header.setTheme(() => 'secondary');
    });

    onUnmounted(() => {
      store.ui.layout.setUseFooter();

      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
      store.ui.header.setTheme();
    });
  },
};
</script>

<template>
  <PageContents :class="$style['bg-wrap']">
    <div :class="$style['bg']">
      <PageTextGroup>
        <PageMainText>
          비용은 낮추고<br />
          견적은 빠르게!
        </PageMainText>
      </PageTextGroup>

      <div :class="[$style['illustration-img'], 'row-margin-contents']">
        <img src="@/assets/images/contents/img-direct-autolease.png" alt="" />
      </div>

      <div class="row-margin-container-medium">
        <section>
          <h3 class="text-body-2 row-margin-item-regular">대상차종</h3>

          <div :class="$style['car-list']">
            <ul :class="$style['car-list__list']">
              <li :class="$style['car-list__item']">
                <div :class="$style['car-list__box']">국산</div>
                <div :class="$style['car-list__text']">현대, 기아, 쌍용 등</div>
              </li>
              <li :class="$style['car-list__item']">
                <div :class="$style['car-list__box']">수입</div>
                <div :class="$style['car-list__text']">
                  벤츠, BMW, 아우디, 폭스바겐<br />
                  포르쉐, 볼보, 랜드로버, 재규어 등
                </div>
              </li>
            </ul>
          </div>

          <div
            :class="[
              $style['estimate-list'],
              $style['estimate-list--product'],
              'row-margin-contents',
            ]"
          >
            <UiAccordion
              :once="true"
              :classNames="{ wrap: $style['estimate-list__list'] }"
            >
              <UiAccordionItem
                :classNames="{ item: $style['estimate-list__item'] }"
              >
                <div
                  :class="[
                    $style['estimate-list__head'],
                    $style['estimate-list__head--none'],
                  ]"
                >
                  <div :class="$style['estimate-list__block']">
                    <div :class="$style['estimate-list__left']">
                      <h3
                        :class="[
                          $style['estimate-list__title'],
                          'font-weight-medium',
                          'text-body-3',
                        ]"
                      >
                        상품안내
                      </h3>
                    </div>
                  </div>
                  <div :class="$style['estimate-list__arrow']">
                    <UiAccordionOpener
                      :classNames="{
                        button: $style['estimate-list__green--opener'],
                      }"
                    />
                  </div>
                </div>

                <UiAccordionLayer
                  :classNames="{ layer: $style['estimate-list__layer'] }"
                >
                  <div
                    :class="[
                      $style['estimate-list__contents'],
                      $style['estimate-list__contents--line'],
                    ]"
                  >
                    <KeyValue direction="vertical" margin="regular">
                      <KeyValueItem>
                        <KeyValueTitle>
                          <div
                            class="text-body-3 color-black font-weight-medium"
                          >
                            상품
                          </div>
                        </KeyValueTitle>
                        <KeyValueText>
                          <div
                            class="text-body-4 color-gray-secondary font-weight-regular"
                          >
                            오토리스
                          </div>
                        </KeyValueText>
                      </KeyValueItem>
                      <KeyValueItem>
                        <KeyValueTitle>
                          <div
                            class="text-body-3 color-black font-weight-medium"
                          >
                            대상
                          </div>
                        </KeyValueTitle>
                        <KeyValueText>
                          <div
                            class="text-body-4 color-gray-secondary font-weight-regular"
                          >
                            개인, 개인사업자, 법인
                          </div>
                        </KeyValueText>
                      </KeyValueItem>
                      <KeyValueItem>
                        <KeyValueTitle>
                          <div
                            class="text-body-3 color-black font-weight-medium"
                          >
                            금리
                          </div>
                        </KeyValueTitle>
                        <KeyValueText>
                          <div
                            class="text-body-4 color-gray-secondary font-weight-regular"
                          >
                            금융리스 연 최저 6.6% ~ 9.1%<br />
                            (금융소비자의 개인신용평점에 따라 차증 적용)<br />
                            연체이자율 :<br />
                            - 금융리스 : 약정이자율+3%<br />
                            (법정최고금리 연 20% 이내)<br />
                            - 운용리스 : 연 20%
                          </div>
                        </KeyValueText>
                      </KeyValueItem>
                      <KeyValueItem>
                        <KeyValueTitle>
                          <div
                            class="text-body-3 color-black font-weight-medium"
                          >
                            이자납부시기
                          </div>
                        </KeyValueTitle>
                        <KeyValueText>
                          <div
                            class="text-body-4 color-gray-secondary font-weight-regular"
                          >
                            매월 후취
                          </div>
                        </KeyValueText>
                      </KeyValueItem>
                      <KeyValueItem>
                        <KeyValueTitle>
                          <div
                            class="text-body-3 color-black font-weight-medium"
                          >
                            기간
                          </div>
                        </KeyValueTitle>
                        <KeyValueText>
                          <div
                            class="text-body-4 color-gray-secondary font-weight-regular"
                          >
                            12 ~ 60개월
                          </div>
                        </KeyValueText>
                      </KeyValueItem>
                      <KeyValueItem>
                        <KeyValueTitle>
                          <div
                            class="text-body-3 color-black font-weight-medium"
                          >
                            상환방법
                          </div>
                        </KeyValueTitle>
                        <KeyValueText>
                          <div
                            class="text-body-4 color-gray-secondary font-weight-regular"
                          >
                            원리금균등상환
                          </div>
                        </KeyValueText>
                      </KeyValueItem>
                      <KeyValueItem>
                        <KeyValueTitle>
                          <div
                            class="text-body-3 color-black font-weight-medium"
                          >
                            차량소유권
                          </div>
                        </KeyValueTitle>
                        <KeyValueText>
                          <div
                            class="text-body-4 color-gray-secondary font-weight-regular"
                          >
                            하나캐피탈(단, 이용자명의 시 저당설정 추가)
                          </div>
                        </KeyValueText>
                      </KeyValueItem>
                      <KeyValueItem>
                        <KeyValueTitle>
                          <div
                            class="text-body-3 color-black font-weight-medium"
                          >
                            수수료
                          </div>
                        </KeyValueTitle>
                        <KeyValueText>
                          <div :class="$style['auto-table']">
                            <table>
                              <colgroup>
                                <col style="width: 70px" />
                                <col />
                              </colgroup>
                              <tbody>
                                <tr>
                                  <th>
                                    <div>손해배상금</div>
                                  </th>
                                  <td class="align-left color-gray">
                                    <ul class="reset-list">
                                      <li class="row-margin-item-group">
                                        주1) 중도해지손해배상금<br />
                                        미회수원금 X 중도해지손해배상금률<br />
                                        미회수원금 X 최고요율(80)% X <br />
                                        (잔여기간 월수/리스기간 전체월수)
                                      </li>
                                      <li class="row-margin-item-group">
                                        주2)
                                        규정손해배상금(차량인수-운용리스)<br />
                                        미회수원금 X 규정손해배상금률<br />
                                        미회수원금 X 최고요율(20)% X <br />
                                        (잔여기간 월수/리스기간 전체월수)
                                      </li>
                                      <li class="row-margin-item-group">
                                        주3)
                                        규정손해배상금(차량인수-금융리스)<br />
                                        미회수원금 X 최고요율(3)% X<br />
                                        (잔여기간 월수/리스기간 전체월수)
                                      </li>
                                    </ul>
                                    <ul
                                      :class="[
                                        $style['basic-list'],
                                        $style['basic-list--small-margin'],
                                        'row-margin-item-group',
                                      ]"
                                    >
                                      <li
                                        :class="[
                                          $style['basic-list__item'],
                                          'text-caption-1',
                                          'font-weight-regular',
                                          'color-gray',
                                        ]"
                                      >
                                        <div
                                          :class="$style['basic-list__symbol']"
                                        >
                                          ※
                                        </div>
                                        <div
                                          :class="$style['basic-list__content']"
                                        >
                                          단, 금융리스의 경우 대부업법에서
                                          정하는 최고이자율을 초과하지 않는
                                          범위로 합니다.
                                        </div>
                                      </li>
                                    </ul>
                                  </td>
                                </tr>
                                <tr>
                                  <th>
                                    <div>승계수수료</div>
                                  </th>
                                  <td class="align-left color-gray">
                                    <div>
                                      운용리스, 금융리스<br />
                                      미회수원금의 1% (승계수수료 최고요율)<br />
                                      X (잔여기간 월수/리스기간 전체월수)<br />
                                      (min : 500,000원, max : 900,000원)
                                    </div>
                                    <ul
                                      :class="[
                                        $style['basic-list'],
                                        $style['basic-list--small-margin'],
                                        'row-margin-item-group',
                                      ]"
                                    >
                                      <li
                                        :class="[
                                          $style['basic-list__item'],
                                          'text-caption-1',
                                          'font-weight-regular',
                                          'color-gray',
                                        ]"
                                      >
                                        <div
                                          :class="$style['basic-list__symbol']"
                                        >
                                          ※
                                        </div>
                                        <div
                                          :class="$style['basic-list__content']"
                                        >
                                          단, 금융리스의 경우 대부업법에서
                                          정하는 최고이자율을 초과하지 않는
                                          범위로 합니다.
                                        </div>
                                      </li>
                                    </ul>
                                  </td>
                                </tr>
                                <tr>
                                  <th>
                                    <div>기타비용</div>
                                  </th>
                                  <td class="align-left color-gray">
                                    <ul
                                      :class="[
                                        $style['basic-list'],
                                        $style['basic-list--regular'],
                                      ]"
                                    >
                                      <li
                                        :class="[
                                          $style['basic-list__item'],
                                          'text-caption-1',
                                          'color-gray-senary',
                                          'font-weight-regular',
                                        ]"
                                      >
                                        <div
                                          :class="$style['basic-list__symbol']"
                                        ></div>
                                        <div
                                          :class="$style['basic-list__content']"
                                        >
                                          저당설정(이용자명의 시 저당설정 추가)
                                        </div>
                                      </li>
                                    </ul>
                                    <ul
                                      :class="[
                                        $style['basic-list'],
                                        $style['basic-list--small-margin'],
                                      ]"
                                    >
                                      <li
                                        :class="[
                                          $style['basic-list__item'],
                                          'text-caption-1',
                                          'font-weight-regular',
                                          'color-gray',
                                        ]"
                                      >
                                        <div
                                          :class="$style['basic-list__symbol']"
                                        >
                                          -
                                        </div>
                                        <div
                                          :class="$style['basic-list__content']"
                                        >
                                          설정금액 : 대출원금의 0~100%
                                        </div>
                                      </li>
                                    </ul>
                                    <ul
                                      :class="[
                                        $style['basic-list'],
                                        $style['basic-list--small-margin'],
                                      ]"
                                    >
                                      <li
                                        :class="[
                                          $style['basic-list__item'],
                                          'text-caption-1',
                                          'font-weight-regular',
                                          'color-gray',
                                        ]"
                                      >
                                        <div
                                          :class="$style['basic-list__symbol']"
                                        >
                                          ※
                                        </div>
                                        <div
                                          :class="$style['basic-list__content']"
                                        >
                                          근저당설정은 개인신용평점에 따라 차등
                                          적용
                                        </div>
                                      </li>
                                    </ul>
                                    <ul
                                      :class="[
                                        $style['basic-list'],
                                        $style['basic-list--small-margin'],
                                      ]"
                                    >
                                      <li
                                        :class="[
                                          $style['basic-list__item'],
                                          'text-caption-1',
                                          'font-weight-regular',
                                          'color-gray',
                                        ]"
                                      >
                                        <div
                                          :class="$style['basic-list__symbol']"
                                        >
                                          ※
                                        </div>
                                        <div
                                          :class="$style['basic-list__content']"
                                        >
                                          근저당설정비용 당사 부담 / 해지비용
                                          금융소비자 부담
                                        </div>
                                      </li>
                                    </ul>
                                    <ul
                                      :class="[
                                        $style['basic-list'],
                                        $style['basic-list--regular'],
                                        $style['basic-list--large-margin'],
                                        'row-margin-item-group',
                                        'row-margin-bottom-none',
                                      ]"
                                    >
                                      <li
                                        :class="[
                                          $style['basic-list__item'],
                                          'text-caption-1',
                                          'color-gray-senary',
                                          'font-weight-regular',
                                        ]"
                                      >
                                        <div
                                          :class="$style['basic-list__symbol']"
                                        ></div>
                                        <div
                                          :class="$style['basic-list__content']"
                                        >
                                          인지세
                                        </div>
                                      </li>
                                    </ul>
                                    <ul
                                      :class="[
                                        $style['basic-list'],
                                        $style['basic-list--small-margin'],
                                      ]"
                                    >
                                      <li
                                        :class="[
                                          $style['basic-list__item'],
                                          'text-caption-1',
                                          'font-weight-regular',
                                          'color-gray',
                                        ]"
                                      >
                                        <div
                                          :class="$style['basic-list__symbol']"
                                        >
                                          -
                                        </div>
                                        <div
                                          :class="$style['basic-list__content']"
                                        >
                                          하나캐피탈과 금융소비자 각각 50% 부담
                                          (인지세 1만원)
                                        </div>
                                      </li>
                                    </ul>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </KeyValueText>
                      </KeyValueItem>
                    </KeyValue>

                    <ul
                      :class="[
                        $style['basic-list'],
                        $style['basic-list--medium-margin'],
                        'row-margin-item-group',
                      ]"
                    >
                      <li
                        :class="[
                          $style['basic-list__item'],
                          'font-weight-regular',
                          'color-gray',
                        ]"
                      >
                        <div :class="$style['basic-list__symbol']">※</div>
                        <div :class="$style['basic-list__content']">
                          주1) ‘중도해지손해배상금’은 고객이 계약의 중도해지를
                          이유로
                          <span class="color-black font-weight-medium"
                            >자동차를 반환</span
                          >하고자 할 때 ‘자동차리스 표준약관’ 제24조에 따라
                          금융회사에 발생한 손해를 배상하기 위하여 지급해야 하는
                          금액을 의미합니다.
                        </div>
                      </li>
                      <li
                        :class="[
                          $style['basic-list__item'],
                          'font-weight-regular',
                          'color-gray',
                        ]"
                      >
                        <div :class="$style['basic-list__symbol']">※</div>
                        <div :class="$style['basic-list__content']">
                          주2) ‘규정손해배상금’은 고객이 계약의 중도해지를
                          이유로
                          <span class="color-black font-weight-medium"
                            >자동차를 매입</span
                          >하고자 할 때 ‘자동차리스 표준약관’ 제23조에 따라
                          금융회사에 발생한 손해를 배상하가기 위하여 지급해야
                          하는 금액을 의미합니다.
                        </div>
                      </li>
                    </ul>

                    <section>
                      <h3
                        class="text-body-3 font-weight-medium row-margin-mini"
                      >
                        만기시 유의사항
                      </h3>
                      <p
                        class="text-body-4 color-gray-secondary font-weight-regular"
                      >
                        만기시 차량을 매입하실 경우 손님의 명의로 이전하는데
                        필요한 취득세 등의 제세공과금이 발생할 수 있으며, 이는
                        손님이 부담하셔야 합니다.<br />
                        운용리스의 경우, 만기 차량 반납시 사고이력 또는
                        약정주행거리 초과에 따라 별도의 감가비용이 추가로 발생할
                        수 있습니다.<br />
                        차량반납 시 유의사항을 꼭 확인하여 주시기 랍니다.
                      </p>
                    </section>

                    <div class="inline-wrap row-margin-item-group">
                      <TextButton :underline="true" theme="tertiary"
                        >차량 반납 시 유의사항</TextButton
                      >
                    </div>
                  </div>
                </UiAccordionLayer>
              </UiAccordionItem>
              <UiAccordionItem
                :classNames="{ item: $style['estimate-list__item'] }"
              >
                <div
                  :class="[
                    $style['estimate-list__head'],
                    $style['estimate-list__head--none'],
                  ]"
                >
                  <div :class="$style['estimate-list__block']">
                    <div :class="$style['estimate-list__left']">
                      <h3
                        :class="[
                          $style['estimate-list__title'],
                          'font-weight-medium',
                          'text-body-3',
                        ]"
                      >
                        상품안내
                      </h3>
                    </div>
                  </div>
                  <div :class="$style['estimate-list__arrow']">
                    <UiAccordionOpener
                      :classNames="{
                        button: $style['estimate-list__green--opener'],
                      }"
                    />
                  </div>
                </div>

                <UiAccordionLayer
                  :classNames="{ layer: $style['estimate-list__layer'] }"
                >
                  <section
                    :class="[
                      $style['estimate-list__contents'],
                      $style['estimate-list__contents--line'],
                    ]"
                  >
                    <KeyValue
                      direction="vertical"
                      :classNames="{
                        wrap: 'row-margin-contents',
                      }"
                    >
                      <KeyValueItem>
                        <KeyValueTitle
                          :classNames="{
                            title: 'color-black font-weight-medium',
                          }"
                          >상품</KeyValueTitle
                        >
                        <KeyValueText>오토리스</KeyValueText>
                      </KeyValueItem>
                    </KeyValue>
                  </section>
                </UiAccordionLayer>
              </UiAccordionItem>
            </UiAccordion>
          </div>
        </section>
      </div>
    </div>

    <template v-slot:foot>
      <BottomSticky>
        <div class="bottom-wrap">
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton>상담신청</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/oneQ/Q_M03_p001.scss';
</style>
