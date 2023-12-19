<script>
// Q_M04_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiLayoutStore } from '@/stores/ui/layout';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BottomSticky,
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

      store.ui.header.setTitle(() => '중고차오토론');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.layout.setUseFooter();

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
        스마트한<br />
        중고차 구입자금 대출
      </PageMainText>
    </PageTextGroup>

    <div :class="$style['contents-wrap']">
      <div :class="$style['basic-table']">
        <table>
          <colgroup>
            <col style="width: 78px" />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th class="text-body-4 color-black align-left">대상</th>
              <td class="text-body-3 align-left">
                <div>개인(사업자) 및 법인사용자</div>
                <ul
                  :class="[$style['basic-list'], $style['basic-list--regular']]"
                >
                  <li
                    :class="[
                      $style['basic-list__item'],
                      'text-body-5',
                      'color-gray-tertiary',
                      'font-weight-regular',
                    ]"
                  >
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      사업자 또는 법인일 경우 전화상담 신청이 필요합니다.
                      (하나캐피탈 고객센터 : 1800-1110)
                    </div>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th class="text-body-4 color-black align-left">한도</th>
              <td class="text-body-3 align-left">
                차량가격 이내<br />
                (개인신용평점 및 차량가격에 따라 차등적용)
              </td>
            </tr>
            <tr>
              <th class="text-body-4 color-black align-left">금리</th>
              <td class="text-body-3 align-left">연 최저 6.9% ~ 최고 16.5%</td>
            </tr>
            <tr>
              <th class="text-body-4 color-black align-left">기간</th>
              <td class="text-body-3 align-left">24개월 ~ 72개월</td>
            </tr>
            <tr>
              <th class="text-body-4 color-black align-left">상환방법</th>
              <td class="text-body-3 align-left">원리금균등분할상환</td>
            </tr>
            <tr>
              <th class="text-body-4 color-black align-left">이자납부 시기</th>
              <td class="text-body-3 align-left">매월 후취</td>
            </tr>
            <tr>
              <th class="text-body-4 color-black align-left">저당설정</th>
              <td class="text-body-3 align-left">
                <div>대출금액의 10%, 30%, 50%</div>
                <ul
                  :class="[
                    $style['basic-list'],
                    $style['basic-list--regular'],
                    $style['basic-list--none-margin'],
                  ]"
                >
                  <li
                    :class="[
                      $style['basic-list__item'],
                      'text-body-5',
                      'color-gray-tertiary',
                      'font-weight-regular',
                    ]"
                  >
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      근저당설정은 금융소비자의 개인신용평점에 따라 차등
                      적용됩니다.
                    </div>
                  </li>
                  <li
                    :class="[
                      $style['basic-list__item'],
                      'text-body-5',
                      'color-gray-tertiary',
                      'font-weight-regular',
                    ]"
                  >
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      설정비용은 당사가 부담하며 설정해지 비용은 금융소비자가
                      부담합니다.
                    </div>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th class="text-body-4 color-black align-left">
                중도상환수수료(대출일로부터 3년이내 상환 시 적용)
              </th>
              <td class="text-body-3 align-left">
                <ul
                  :class="[
                    $style['basic-list'],
                    $style['basic-list--regular'],
                    $style['basic-list--none-margin'],
                  ]"
                >
                  <li
                    :class="[
                      $style['basic-list__item'],
                      'color-black',
                      'text-body-3',
                      'font-weight-regular',
                    ]"
                  >
                    <div :class="$style['basic-list__symbol']">-</div>
                    <div :class="$style['basic-list__content']">
                      만기 1년 이상 : 중도상환원금 X 1% + 중도상환원금 X
                      (중도상환수수료율-1%) X 잔존기간 / (대출기간-30일)
                    </div>
                  </li>
                  <li
                    :class="[
                      $style['basic-list__item'],
                      'color-black',
                      'text-body-3',
                      'font-weight-regular',
                    ]"
                  >
                    <div :class="$style['basic-list__symbol']">-</div>
                    <div :class="$style['basic-list__content']">
                      만기 1년 미만 : 중도상환원금 X (중도상환수수료율) X
                      잔존기간 / (대출기간-30일)
                    </div>
                  </li>
                </ul>
                <ul
                  :class="[
                    $style['basic-list'],
                    $style['basic-list--regular'],
                    $style['basic-list--none-margin'],
                  ]"
                >
                  <li
                    :class="[
                      $style['basic-list__item'],
                      'text-body-5',
                      'color-gray-tertiary',
                      'font-weight-regular',
                    ]"
                  >
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      잔존기간 : 30일 미만 상환 시 ‘대출 사용기간’을 30일로 간주
                    </div>
                  </li>
                  <li
                    :class="[
                      $style['basic-list__item'],
                      'text-body-5',
                      'color-gray-tertiary',
                      'font-weight-regular',
                    ]"
                  >
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      중도상환수수료율 2%
                    </div>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th class="text-body-4 color-black align-left">
                연체<br />
                이자율
              </th>
              <td class="text-body-3 align-left underline">
                약정이율 + 3%<br />
                (법정 최고금리 연 20% 이내)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="row-margin-contents">
        <section class="row-margin-contents">
          <h3 class="text-body-2 row-margin-item-regular">상품추가 안내</h3>
          <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-3',
                'font-weight-regular',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                인지세는 하나캐피탈과 금융소비자가 50% 부담합니다.<br />
                - 대출금액 5천만원 이하 : 비과세<br />
                - 대출금액 5천만원 초과 1억원 이하 : 7만원<br />
                - 대출금액 1억원 초과 10억원 이하 : 15만원
              </div>
            </li>
          </ul>
        </section>

        <section class="row-margin-contents">
          <h3 class="text-body-2 row-margin-item-regular">유의사항</h3>
          <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-3',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                계약을 체결하기 전에 자세한 내용은 상품설명서와 약관을
                읽어보시기 바랍니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'font-weight-medium',
                'text-body-3',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                상환능력에 비해 대출금이 과도할 경우 귀하의 신용등급 또는
                개인신용평점이 하락할 수 있습니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'font-weight-medium',
                'text-body-3',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                개인신용평점 하락 시 금융거래와 관련된 불이익이 발생할 수
                있습니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'font-weight-medium',
                'text-body-3',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                일정기간 원리금을 연체할 경우, 모든 원리금을 변제할 의무가
                발생할 수 있습니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-3',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                대출취급이 부적정한 경우 (연체금 보유, 개인신용평점 낮음) 대출이
                제한될 수 있습니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-3',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                담보물건, 담보종류 등에 따라 대출조건이 차등 적용되며 담보물이
                부적합할 경우 대출이 제한될 수 있습니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-3',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                금융소비자는 해당 상품에 대하여 설명을 받을 권리가 있으며, 그
                설명을 듣고 내용을 충분히 이해한 후 거래하시기 바랍니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-3',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                금리인하요구권 및 대출계약 철회권에 대한 자세한 사항은
                홈페이지에서 확인하시기 바랍니다.
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-3',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                금융소비자의 신용등급 또는 개인신용평점에 따라 대출한도 및
                금리가 차등 적용됩니다.
              </div>
            </li>
          </ul>
        </section>
      </div>
      <ul :class="[$style['basic-list'], 'row-margin-contents']">
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            준법심의필 23-169 (2023.06.02 ~ 2024.04.30)
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            여신금융협회 심의필 제 2023-C1h-06107호<br />
            (2023.06.02~2024.04.30)
          </div>
        </li>
      </ul>
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
              <BasicButton>한도조회</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/oneQ/Q_M04_p001.scss';
</style>
