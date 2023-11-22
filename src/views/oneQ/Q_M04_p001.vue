<script>
// Q_M04_p001
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

      store.ui.header.setTitle(() => '중고차오토론');
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
          스마트한<br />
          중고차 구입자금 대출
        </PageMainText>
      </PageTextGroup>

      <div :class="[$style['illustration-img'], 'row-margin-contents']">
        <img src="@/assets/images/contents/img-used-car-autoloan.png" alt="" />
      </div>
    </div>

    <div class="row-margin-container-medium">
      <BasicBox theme="tertiary">
        <KeyValue align="left" margin="regular">
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>대상</KeyValueTitle>
            <KeyValueText>
              <div>
                개인(개인사업자) 및 법인사용자<br />
                사업자 또는 법인일 경우 전화상담 신청이 필요합니다.
              </div>
              <div class="text-body-5 color-gray-tertiary row-margin-mini">
                (하나캐피탈 고객센터 : 1800-1110)
              </div>
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>한도</KeyValueTitle>
            <KeyValueText>
              <div>차량가격 이내</div>
              <div class="text-body-5 color-gray-tertiary row-margin-mini">
                (개인신용평점 및 차량가격에 따라 차등적용)
              </div>
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>금리</KeyValueTitle>
            <KeyValueText>연 최저 6.9% ~ 최고 16.5%</KeyValueText>
          </KeyValueItem>

          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>기간</KeyValueTitle>
            <KeyValueText>24개월 ~ 72개월</KeyValueText>
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
          <KeyValueTitle>이자납부시기</KeyValueTitle>
          <KeyValueText>매월 후취</KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>저당설정</KeyValueTitle>
          <KeyValueText>
            <div>대출금액의 10%, 30%, 50%</div>
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
                  'color-gray-tertiary',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']">※</div>
                <div :class="$style['basic-list__content']">
                  근저당설정은 금융소비자의 개인신용평점에 따라 차등 적용됩니다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-gray-tertiary',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']">※</div>
                <div :class="$style['basic-list__content']">
                  설정비용은 당사가 부담하며 설정해지 비용은 금융소비자가
                  부담합니다.
                </div>
              </li>
            </ul>
          </KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle
            >중도상환수수료(대출일로부터 3년이내 상환 시 적용)</KeyValueTitle
          >
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
                  'color-gray-tertiary',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']">※</div>
                <div :class="$style['basic-list__content']">
                  잔존기간 : 30일 미만 상환 시 '대출 사용기간'을 30일로 간주
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-gray-tertiary',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']">※</div>
                <div :class="$style['basic-list__content']">
                  중도상환수수료율 2%
                </div>
              </li>
            </ul>
          </KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>연체이자율</KeyValueTitle>
          <KeyValueText>
            <div>약정이율+3%,</div>
            <div
              class="text-body-4 font-weight-light color-gray-tertiary row-margin-mini"
            >
              (법정최고금리 연 20% 이내)
            </div>
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
            담보물건, 담보종류 등에 따라 대출조건이 차등 적용되며 담보물이
            부적합할 경우 대출이 제한될 수 있습니다.
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
          <KeyValueTitle>기타비용</KeyValueTitle>
          <KeyValueText>
            <p class="text-body-4 color-gray-tertiary font-weight-light">
              (인지세는 하나캐피탈과 금융소비자가 50%씩 부담합니다.)
            </p>

            <ul :class="[$style['basic-list'], 'row-margin-item']">
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-4',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']">-</div>
                <div :class="$style['basic-list__content']">
                  대출금액 5천만원 이하 : 비과세
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-4',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']">-</div>
                <div :class="$style['basic-list__content']">
                  대출금액 5천만원 초과 1억원 이하 : 7만원
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-4',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']">-</div>
                <div :class="$style['basic-list__content']">
                  대출금액 1억원 초과 10억원 이하 : 15만원
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'text-body-4',
                  'font-weight-regular',
                ]"
              >
                <div :class="$style['basic-list__symbol']">-</div>
                <div :class="$style['basic-list__content']">
                  대출금액 10억원 초과 : 35만원
                </div>
              </li>
            </ul>
          </KeyValueText>
        </KeyValueItem>
      </KeyValue>

      <ul :class="[$style['basic-list'], 'row-margin-contents']">
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            준법심의필 23-169<br />
            (2023.06.02 ~ 2024.04.30)
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
