<script>
// Q_M07_p001
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
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicHr,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicBox,
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

      store.ui.header.setTitle(() => '원큐자동차담보대출');
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
  <PageContents>
    <div :class="$style['bg']">
      <PageTextGroup>
        <PageMainText>
          내 차만 있다면<br />
          특별 한도와 금리 혜택까지
        </PageMainText>
      </PageTextGroup>

      <div :class="[$style['illustration-img'], 'row-margin-contents']">
        <img src="@/assets/images/contents/img-1q-carloan.png" alt="" />
      </div>
    </div>

    <div class="row-margin-container-medium">
      <BasicBox theme="tertiary">
        <KeyValue align="left" margin="regular">
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>대상</KeyValueTitle>
            <KeyValueText>
              <div>본인 명의 차량 3개월 이상 소유자</div>
              <div class="text-body-5 color-gray-tertiary row-margin-mini">
                출고 10년 이내로 제한
              </div>
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>한도</KeyValueTitle>
            <KeyValueText>최대 1억원 (최저 300만원)</KeyValueText>
          </KeyValueItem>

          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>금리</KeyValueTitle>
            <KeyValueText>연 5.9% ~ 19.9%</KeyValueText>
          </KeyValueItem>

          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>기간</KeyValueTitle>
            <KeyValueText>12개월 ~ 84개월</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <KeyValue
        direction="vertical"
        :classNames="{
          wrap: 'row-margin-contents',
        }"
      >
        <KeyValueItem>
          <KeyValueTitle>상환방법</KeyValueTitle>
          <KeyValueText>원리금균등분할상환</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>저당설정</KeyValueTitle>
          <KeyValueText>
            <div>당사 1순위 설정</div>
            <div
              class="text-body-4 font-weight-light color-gray-tertiary row-margin-mini"
            >
              (차량 시세의 최대 80%)
            </div>
          </KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>중도상환수수료</KeyValueTitle>
          <KeyValueText>
            <div>
              대출실행일 기준 경과기간에 따라 차등 적용되며,<br />
              3년 경과 시 면제
            </div>
            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--small-margin'],
                'row-margin-item',
              ]"
            >
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-5',
                  'font-weight-regular',
                  'color-gray-tertiary',
                ]"
              >
                <div :class="$style['basic-list__symbol']">※</div>
                <div :class="$style['basic-list__content']">
                  중도상환수수료율 : 2%
                </div>
              </li>
            </ul>
          </KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>연체이자율</KeyValueTitle>
          <KeyValueText>
            <div class="font-weight-bold">약정이율 + 3%</div>
            <div
              class="text-body-4 font-weight-bold color-gray-tertiary row-margin-mini"
            >
              (법정최고금리 연 20% 이내)
            </div>
          </KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>이자부과시기</KeyValueTitle>
          <KeyValueText>매월 후취</KeyValueText>
        </KeyValueItem>
      </KeyValue>

      <BasicHr
        type="contents"
        theme="quaternary"
        className="row-margin-container"
      />

      <KeyValue
        direction="vertical"
        :classNames="{
          wrap: 'row-margin-contents',
        }"
      >
        <KeyValueItem>
          <KeyValueTitle>저당설정</KeyValueTitle>
          <KeyValueText>
            <ul :class="[$style['basic-list'], 'row-margin-item']">
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-4',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']">-</div>
                <div :class="$style['basic-list__content']">
                  근저당설정비용 : 당사 부담
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-4',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']">-</div>
                <div :class="$style['basic-list__content']">
                  근저당 설정 해지비용 : 손님 부담
                </div>
              </li>
            </ul>
          </KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>대출 부대비용</KeyValueTitle>
          <KeyValueText>
            5천만원 초과 실행 시, 인지세발생<br />
            (인지세는 하나캐피탈과 금융소비자가 50%씩 부담)
            <ul :class="[$style['basic-list'], 'row-margin-item']">
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-4',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']">-</div>
                <div :class="$style['basic-list__content']">
                  대출금액 5천만원 초과 1억원 이하 : 7만원
                </div>
              </li>
            </ul>
          </KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>중도상환수수료 산식</KeyValueTitle>
          <KeyValueText>
            <ul :class="[$style['basic-list'], 'row-margin-item']">
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-4',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']">-</div>
                <div :class="$style['basic-list__content']">
                  만기 1년 이상 : 중도상환원금X1%+중도상환원금
                  X(중도상환수수료율-1%)X 잔존기간/(대출기간-30일)
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-4',
                  'font-weight-regular',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']">-</div>
                <div :class="$style['basic-list__content']">
                  만기 1년 미만 :
                  중도상환원금X(중도상환수수료율)X잔존기간/(대출기간-30일)
                </div>
              </li>
            </ul>
            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--small-margin'],
                'row-margin-item',
              ]"
            >
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-5',
                  'font-weight-regular',
                  'color-gray-tertiary',
                ]"
              >
                <div :class="$style['basic-list__symbol']">※</div>
                <div :class="$style['basic-list__content']">
                  잔존기간 : 30일 미만 상환 시 '대출 사용기간'을 30일로 간주
                </div>
              </li>
            </ul>
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>

      <BasicHr
        type="contents"
        theme="quaternary"
        className="row-margin-container"
      />

      <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-3']">
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
            개인신용평점 하락 시 금융거래와 관련된 불이익이 발생할 수 있습니다.
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
            일정기간 원리금을 연체할 경우, 모든 원리금을 변제할 의무가 발생할 수
            있습니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-3']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            대출취급이 부적정한 경우 (연체금 보유, 개인신용평점 낮음) 취급이
            제한될 수 있습니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-3']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            금융소비자는 해당 상품에 대하여 설명을 받을 권리가 있으며, 그 설명을
            듣고 내용을 충분히 이해한 후 거래하시기 바랍니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-3']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            금리인하요구권 및 대출계약 철회권에 대한 자세한 사항은 당사
            홈페이지에서 확인하시기 바랍니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-3']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            금융소비자의 신용등급 또는 개인신용평점에 따라 대출한도 및 금리가
            차등 적용됩니다.
          </div>
        </li>
      </ul>

      <ul :class="[$style['basic-list'], 'row-margin-contents']">
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            준법심의필 23-49<br />
            (2023.02.15 ~ 2024.02.14)
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            여신금융협회 심의필 제 2023-L1h-01311호<br />
            (2023.02.15~2024.02.14)
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
@import '@/assets/scss/views/oneQ/Q_M08_p001.scss';
</style>
