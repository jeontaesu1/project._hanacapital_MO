<script>
// Company_M08_p013
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';

import IconHyendaiRentalCare from '@/assets/images/icon/hyendai-rental-care.svg?component';
import IconBuilding from '@/assets/images/icon/building.svg?component';
import IconCar from '@/assets/images/icon/car.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    TextButton,
    RoundStatus,
    BasicHr,
    BasicBox,
    IconHyendaiRentalCare,
    IconBuilding,
    IconCar,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '윤리강령');
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
    <PageTextGroup>
      <PageMainText>
        이 모든 질문에<br />
        <strong>“예”라고 답할 수 있으면 행하십시오</strong>
      </PageMainText>
      <PageSubText>
        스스로 판단하기 어려운 사항은<br />
        윤리 또는 준법담당 부서에 의견을 물을 수 있습니다.
      </PageSubText>
    </PageTextGroup>

    <section :class="$style['bg']">
      <h3 class="text-head-2 row-margin-item-medium">
        윤리적 판단을 위한 질문
      </h3>

      <ul class="reset-list">
        <li class="row-margin-item-medium">
          <BasicBox theme="secondary">
            <p class="text-body-1 font-weight-medium align-center">
              내 결정이 Code One에 부합하는가?
            </p>
          </BasicBox>
        </li>
        <li class="row-margin-item-medium">
          <BasicBox theme="secondary">
            <p class="text-body-1 font-weight-medium align-center">
              내 행동이 다른 임직원이나 언론에 공개 되어도 문제가 없겠는가?
            </p>
          </BasicBox>
        </li>
        <li class="row-margin-item-medium">
          <BasicBox theme="secondary">
            <p class="text-body-1 font-weight-medium align-center">
              다른 사람이 이 자리에 있더라도 똑같은 판단을 내리겠는가?
            </p>
          </BasicBox>
        </li>
      </ul>
    </section>

    <section class="row-margin-container-medium">
      <h3 class="text-head-2 row-margin-item-medium">제 1장 임직원의 자세</h3>

      <div :class="$style['contents-list']">
        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">상품안내</h3>

          <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                대출한도 : 최저 100만원 ~ 최대 1억원
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                금리 : 고정 연 4.9% ~ 18.9%
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                대출기간 : 12개월 ~ 120개월
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                연체이자율 :
                <strong class="font-weight-medium"
                  >약정이율+3% (법정최고금리 연 20% 이내)</strong
                >
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                <div>중도상환수수료</div>
                <ul
                  :class="[
                    $style['basic-list'],
                    $style['basic-list--regular'],
                    'row-margin-item',
                  ]"
                >
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
                      e하나신용대출 : 0%
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
                      행복아파트론 · 원큐자동차담보대출 대출일로부터 3년 이내
                      상환 시 적용, 중도상환수수료율 2%
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
                      <div>중도상환수수료 산식</div>

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
                            'font-weight-regular',
                            'color-gray-tertiary',
                          ]"
                        >
                          <div :class="$style['basic-list__symbol']">※</div>
                          <div :class="$style['basic-list__content']">
                            만기 1년 이상 :<br />
                            중도상환원금 × 1% + 중도상환원금 × (중도상환수수료율
                            - 1%) × 잔존기간/(대출기간-30일)
                          </div>
                        </li>
                        <li
                          :class="[
                            $style['basic-list__item'],
                            'font-weight-regular',
                            'color-gray-tertiary',
                          ]"
                        >
                          <div :class="$style['basic-list__symbol']">※</div>
                          <div :class="$style['basic-list__content']">
                            만기 1년 미만 :<br />
                            중도상환원금 × (중도상환수수료율) ×
                            잔존기간/(대출기간-30일)
                          </div>
                        </li>
                        <li
                          :class="[
                            $style['basic-list__item'],
                            'font-weight-regular',
                            'color-gray-tertiary',
                          ]"
                        >
                          <div :class="$style['basic-list__symbol']">※</div>
                          <div :class="$style['basic-list__content']">
                            잔존기간 :<br />
                            30일 미만 상환 시 '대출사용기간'을 30일로 간주
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                상환방법 및 이자 납부시기 : 원리금균등분할상환, 매월 후취
              </div>
            </li>
            <li
              :class="[
                $style['basic-list__item'],
                'color-black',
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                <div>
                  인지세는 5천만원 초과 실행 시 발생하며 하나캐피탈과
                  금융소비자가 50%씩 부담합니다.
                </div>
                <ul
                  :class="[
                    $style['basic-list'],
                    $style['basic-list--regular'],
                    'row-margin-item',
                  ]"
                >
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
                </ul>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/company/CompanyHumanRightsDeclarationStructure.scss';
</style>
