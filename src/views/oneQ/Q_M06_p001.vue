<script>
// Q_M06_p001
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

      store.ui.header.setTitle(() => '행복아파트론');
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
        무담보∙무설정<br />
        아파트 소유자 신용대출
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
                본인 또는 배우자 공동명의<br />
                아파트 소유자
              </td>
            </tr>
            <tr>
              <th class="text-body-4 color-black align-left">한도</th>
              <td class="text-body-3 align-left">최대 2억원 (최저 300만원)</td>
            </tr>
            <tr>
              <th class="text-body-4 color-black align-left">금리</th>
              <td class="text-body-3 align-left underline">연 5.9% ~ 19.9%</td>
            </tr>
            <tr>
              <th class="text-body-4 color-black align-left">기간</th>
              <td class="text-body-3 align-left">12개월 ~ 84개월</td>
            </tr>
            <tr>
              <th class="text-body-4 color-black align-left">상환방법</th>
              <td class="text-body-3 align-left">
                <ul
                  :class="[
                    $style['basic-list'],
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
                      신청금액 1억원 미만 : 원리금균등분할상환
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
                      신청금액 1억원 이상 : 원리금균등분할상환/만기일시상환 중
                      택 1
                    </div>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <th class="text-body-4 color-black align-left">
                중도상환 수수료
              </th>
              <td class="text-body-3 align-left">
                대출실행일 기준 경과기간에 따라<br />
                차등 적용되며, 3년 경과시 면제<br /><br />
                ※ 중도상환수수료율 2%
              </td>
            </tr>
            <tr>
              <th class="text-body-4 color-black align-left">
                연체<br />
                이자율<br />
              </th>
              <td class="text-body-3 align-left underline">
                약정이율 + 3%<br />
                (법정 최고금리 연 20% 이내)
              </td>
            </tr>
            <tr>
              <th class="text-body-4 color-black align-left">이자부과 시기</th>
              <td class="text-body-3 align-left">매월 후취</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="row-margin-contents">
        <section>
          <h3 class="text-body-2 row-margin-item-regular">상품추가 안내</h3>
          <ul
            :class="[
              $style['basic-list'],
              $style['basic-list--regular'],
              $style['basic-list--regular-margin'],
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
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                대출 부대비용 : 5천만원 초과 실행 시, 인지세발생<br />
                (인지세는 하나캐피탈과 금융소비자가 50%씩 부담)<br />
                - 대출금액 5천만원 초과 1억원 이하 : 7만원<br />
                - 대출금액 1억원 초과 10억원 이하 : 15만원
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
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                중도상환수수료 산식<br />
                - 만기 1년 이상 : 중도상환원금X1%+중도상환원금
                X(중도상환수수료율-1%)X 잔존기간/(대출기간-30일)<br />
                - 만기 1년 미만 :
                중도상환원금X(중도상환수수료율)X잔존기간/(대출기간-30일)<br />
                ※ 잔존기간 : 30일 미만 상환 시 ‘대출 사용기간’을 30일로 간주
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
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                기타안내 : 행복아파트론으로 진행 불가 시, 아파트론 상품으로
                자동전환되어 진행
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
                계약을 체결하기 전에 상품 설명서와 약관을 확인하시기 바랍니다.
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
                금융소비자의 개인신용평점에 따라 대출한도 및 금리가 차등
                적용됩니다.
              </div>
            </li>
          </ul>
        </section>
      </div>
      <ul :class="[$style['basic-list'], 'row-margin-contents']">
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            준법심의필 23-271 (2023.08.07 ~ 2024.08.06)
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            여신금융협회 심의필 제 2023-L1h-09034호<br />
            (2023.08.07~2024.08.06)
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
@import '@/assets/scss/views/oneQ/Q_M06_p001.scss';
</style>
