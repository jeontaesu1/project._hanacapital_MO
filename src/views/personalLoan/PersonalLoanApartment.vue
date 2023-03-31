<script>
import { onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import KeyValueList from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';

import IconMoney from '@/assets/images/icon/money.svg?component';
import IconRate from '@/assets/images/icon/rate.svg?component';
import IconDate from '@/assets/images/icon/date.svg?component';
import IconCalculate from '@/assets/images/icon/calculate.svg?component';
import IconSearchMoney from '@/assets/images/icon/search-money.svg?component';
import IconPersonalTerms from '@/assets/images/icon/personal-terms.svg?component';
import IconSend from '@/assets/images/icon/send.svg?component';
import IconDeposit from '@/assets/images/icon/deposit.svg?component';
import ImgSample from '@/assets/images/_dummy/illustration-sample.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    PageSubText,
    KeyValueList,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicHr,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicBox,
    IconMoney,
    IconRate,
    IconDate,
    IconCalculate,
    IconSearchMoney,
    IconPersonalTerms,
    IconSend,
    IconDeposit,
    ImgSample,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '아파트론');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => ['share']);
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
    <div :class="[$style['bg']]">
      <PageTextGroup>
        <PageMainText>
          아파트 소유자를 위한<br />
          <strong>무담보 아파트 신용대출</strong>
        </PageMainText>
        <PageSubText>행복아파트론 미진행 고객용</PageSubText>
      </PageTextGroup>

      <div :class="[$style['illustrationImg'], 'row-margin-contents']">
        <ImgSample />
      </div>

      <BasicBox theme="secondary">
        <div
          :class="[$style['product-detail'], $style['product-detail--small']]"
        >
          <ul :class="[$style['product-detail__list']]">
            <li :class="[$style['product-detail__item']]">
              <div :class="[$style['product-detail__icon']]">
                <IconMoney></IconMoney>
              </div>
              <div :class="[$style['product-detail__block']]">
                <span :class="[$style['product-detail__title']]">최대한도</span>
                <div :class="[$style['product-detail__desc']]">
                  <span :class="[$style['product-detail__desc-text']]">
                    5,000만원
                  </span>
                </div>
              </div>
            </li>
            <li :class="[$style['product-detail__item']]">
              <div :class="[$style['product-detail__icon']]">
                <IconRate></IconRate>
              </div>
              <div :class="[$style['product-detail__block']]">
                <span :class="[$style['product-detail__title']]">금리</span>
                <div :class="[$style['product-detail__desc']]">
                  <span :class="[$style['product-detail__desc-text']]">
                    연 5.9~18.9%
                  </span>
                </div>
              </div>
            </li>
            <li :class="[$style['product-detail__item']]">
              <div :class="[$style['product-detail__icon']]">
                <IconDate></IconDate>
              </div>
              <div :class="[$style['product-detail__block']]">
                <span :class="[$style['product-detail__title']]">기간</span>
                <div :class="[$style['product-detail__desc']]">
                  <span :class="[$style['product-detail__desc-text']]">
                    12개월 ~ 120개월
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </BasicBox>
    </div>

    <!-- [DD] 상품안내 탭 영역 -->
    <div :class="['row-margin-contents']">
      <BasicBox theme="tertiary">
        <KeyValueList align="left">
          <KeyValueItem>
            <KeyValueTitle>대상</KeyValueTitle>
            <KeyValueText>
              아파트를 소유한 손님
              <div :class="$style['small-sub']">본인 또는 배우자 공동명의</div>
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>한도</KeyValueTitle>
            <KeyValueText>최소 300만원 ~ 최대 5천만원</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>금리</KeyValueTitle>
            <KeyValueText> 연 5.9% ~ 18.9%</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>기간</KeyValueTitle>
            <KeyValueText> 12개월 ~ 120개월</KeyValueText>
          </KeyValueItem>
        </KeyValueList>
      </BasicBox>

      <KeyValueList
        direction="vertical"
        :classNames="{
          wrap: 'row-margin-contents',
        }"
      >
        <KeyValueItem>
          <KeyValueTitle>상환방법</KeyValueTitle>
          <KeyValueText>
            <ul
              :class="[
                $style['basic-list'],
                $style['basic-list--regular'],
                $style['basic-list--mini-margin'],
              ]"
            >
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'font-weight-regular',
                  'text-body-2',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  원리금균등분할상환
                </div>
              </li>
            </ul>
          </KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>중도상환수수료</KeyValueTitle>
          <KeyValueText>
            대출실행일 기준 경과기간에 따라 차등 적용되며,<br />
            3년 경과 시 면제
            <ul :class="[$style['basic-list'], 'row-margin-item']">
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'font-weight-regular',
                  'text-body-4',
                ]"
              >
                <div :class="$style['basic-list__symbol']">-</div>
                <div :class="$style['basic-list__content']">
                  1년 이상 : 중도상환원금 X 1% + 중도상환원금 X
                  (중도상환수수료율 - 1%) X 잔존기간/(대출기간 - 30일)
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'color-black',
                  'font-weight-regular',
                  'text-body-4',
                ]"
              >
                <div :class="$style['basic-list__symbol']">-</div>
                <div :class="$style['basic-list__content']">
                  1년 미만 : 중도상환원금 X (중도상환수수료율) X
                  잔존기간/(대출기간 - 30일)
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
                  'color-tertiary',
                  'font-weight-regular',
                  'text-body-5',
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
                  'color-tertiary',
                  'font-weight-regular',
                  'text-body-5',
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
            약정이율 + 3%
            <div :class="$style['sub']">(법정최고금리 연 20% 이내)</div>
          </KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>이자부과시기</KeyValueTitle>
          <KeyValueText> 매월 후취 </KeyValueText>
        </KeyValueItem>

        <KeyValueItem>
          <KeyValueTitle>기타</KeyValueTitle>
          <KeyValueText :classNames="{ text: 'font-weight-medium' }">
            내부 기준에 따라 행복아파트론으로 진행 불가 시,<br />
            아파트론 상품으로 자동전환되며, 아파트론 상품에서
            <span class="color-green">행복아파트론</span>
            상품으로 재전환은 불가함
          </KeyValueText>
        </KeyValueItem>
      </KeyValueList>
    </div>
    <!-- //[DD] 상품안내 탭 영역 -->

    <!-- [DD] 진행절차 탭 영역 -->
    <div :class="['row-margin-contents']">
      <div :class="[$style['step']]">
        <ul :class="[$style['step__list']]">
          <li :class="[$style['step__item']]">
            <div :class="[$style['step__inner']]">
              <div :class="[$style['step__contents']]">
                <span :class="[$style['step__badge']]">
                  <span :class="[$style['step__badge-text']]">STEP 1</span>
                </span>
                <div :class="[$style['step__text']]">
                  본인인증 및 손님의 정보로<br />
                  <strong>대출한도를 조회</strong>합니다.
                </div>
              </div>
              <div :class="[$style['step__icon']]">
                <IconSearchMoney />
              </div>
            </div>
          </li>
          <li :class="[$style['step__item']]">
            <div :class="[$style['step__inner']]">
              <div :class="[$style['step__contents']]">
                <span :class="[$style['step__badge']]">
                  <span :class="[$style['step__badge-text']]">STEP 2</span>
                </span>
                <div :class="[$style['step__text']]">
                  한도 확인 후, 신청정보를 입력하여<br />
                  <strong>약정을 진행</strong>합니다.
                </div>
              </div>
              <div :class="[$style['step__icon']]">
                <IconPersonalTerms />
              </div>
            </div>
          </li>
          <li :class="[$style['step__item']]">
            <div :class="[$style['step__inner']]">
              <div :class="[$style['step__contents']]">
                <span :class="[$style['step__badge']]">
                  <span :class="[$style['step__badge-text']]">STEP 3</span>
                </span>
                <div :class="[$style['step__text']]">
                  제출하신 정보로 최종심사 후<br />
                  손님께 <strong>결과를 안내</strong>해드립니다.
                </div>
              </div>
              <div :class="[$style['step__icon']]">
                <IconSend />
              </div>
            </div>
          </li>
          <li :class="[$style['step__item']]">
            <div :class="[$style['step__inner']]">
              <div :class="[$style['step__contents']]">
                <span :class="[$style['step__badge']]">
                  <span :class="[$style['step__badge-text']]">STEP 4</span>
                </span>
                <div :class="[$style['step__text']]">
                  계좌로 <strong>대출금을 입금</strong>해드립니다.
                </div>
              </div>
              <div :class="[$style['step__icon']]">
                <IconDeposit />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- //[DD] 진행절차 탭 영역 -->

    <!-- [DD] 유의사항 탭 영역 -->
    <div :class="['row-margin-contents']">
      <ul
        :class="[
          $style['basic-list'],
          $style['basic-list--regular'],
          'row-margin-contents',
        ]"
      >
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
            대출취급이 부적정한 경우(연체금 보유, 개인신용평점 낮음) 대출이
            제한될 수 있습니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-3']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            금융소비자의 개인신용평점에 따라 대출한도 및 금리가 차등 적용됩니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-3']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            금융소비자는 해당상품에 대하여 설명을 받을 권리가 있으며, 그 설명을
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
      </ul>
    </div>
    <!-- //[DD] 유의사항 탭 영역 -->

    <ul :class="[$style['basic-list']]">
      <li :class="$style['basic-list__item']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          준법심의필 22-126<br />
          (2022.02.24~2023.02.23)
        </div>
      </li>
      <li :class="$style['basic-list__item']">
        <div :class="$style['basic-list__symbol']"></div>
        <div :class="$style['basic-list__content']">
          여신금융협회 심의필 제2022-L1h-01490호<br />
          (2022.02.24~2023.02.23)
        </div>
      </li>
    </ul>

    <BasicHr
      type="contents"
      theme="quaternary"
      className="row-margin-container"
    />

    <div :class="$style['icon-list']">
      <ul :class="$style['icon-list__list']">
        <li :class="$style['icon-list__item']">
          <button type="button" :class="$style['icon-list__block']">
            <div :class="$style['icon-list__icon']"><IconCalculate /></div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__text']">월 납입금 계산</div>
              <div :class="$style['icon-list__title']">대출 계산기</div>
            </div>
          </button>
        </li>
      </ul>
    </div>

    <template v-slot:foot>
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton>한도조회</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/PersonalLoanApartment.scss';
</style>
