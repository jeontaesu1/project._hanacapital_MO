<script>
// BF_M05_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
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
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';

import IconDate from '@/assets/images/icon/date.svg?component';
import IconContract from '@/assets/images/icon/contract.svg?component';
import IconRate from '@/assets/images/icon/rate.svg?component';
import IconSend from '@/assets/images/icon/send.svg?component';
import IconConsulting from '@/assets/images/icon/consulting.svg?component';
import IconCalculate from '@/assets/images/icon/calculate.svg?component';
import IconDeposit from '@/assets/images/icon/deposit.svg?component';
import IconInstallation from '@/assets/images/icon/installation.svg?component';
import IconLogoMain from '@/assets/images/icon/logo-main.svg?component';

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
    BasicBox,
    BasicHr,
    StickyBar,
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
    BottomSticky,

    IconDate,
    IconSend,
    IconContract,
    IconCalculate,
    IconConsulting,
    IconDeposit,
    IconInstallation,
    IconRate,
    IconLogoMain,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '일반리스');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => [
        {
          name: 'share',
          onClick: () => {
            alert('공유하기 클릭');
          },
        },
      ]);
      store.ui.header.setTheme(() => 'secondary');
    });

    onUnmounted(() => {
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
          개인사업자 및 법인 대상<br />
          <strong>의료장비, 스크린골프, 설비 등</strong>
        </PageMainText>
      </PageTextGroup>

      <div :class="[$style['illustration-img'], 'row-margin-contents']">
        <img src="@/assets/images/contents/img-lease-loan.png" alt="" />
      </div>

      <BasicBox theme="secondary">
        <div
          :class="[$style['product-detail'], $style['product-detail--small']]"
        >
          <ul :class="$style['product-detail__list']">
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconRate />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">금리</div>
                <div :class="$style['product-detail__desc']">연 0.0 ~ 9.9%</div>
              </div>
            </li>
            <li :class="$style['product-detail__item']">
              <div :class="$style['product-detail__icon']">
                <IconDate />
              </div>
              <div :class="$style['product-detail__block']">
                <div :class="$style['product-detail__title']">기간</div>
                <div :class="$style['product-detail__desc']">
                  12개월 ~ 60개월
                </div>
              </div>
            </li>
          </ul>
        </div>
      </BasicBox>
    </div>

    <UiTab>
      <StickyBar>
        <NavTab :useUiTab="true" :auto="true">
          <NavTabButton link="businessEquipmentLeaseTab001"
            >상품안내</NavTabButton
          >
          <NavTabButton link="businessEquipmentLeaseTab002"
            >진행절차</NavTabButton
          >
          <NavTabButton link="businessEquipmentLeaseTab003"
            >유의사항</NavTabButton
          >
        </NavTab>
      </StickyBar>

      <!-- 상품안내 -->
      <UiTabPanel name="businessEquipmentLeaseTab001">
        <BasicBox theme="tertiary">
          <KeyValue align="left" margin="regular">
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>대상</KeyValueTitle>
              <KeyValueText>개인사업자, 법인</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>금리</KeyValueTitle>
              <KeyValueText>
                <div>연 0.0 ~ 9.9%</div>
                <div class="text-body-5 color-gray-tertiary row-margin-mini">
                  금융소비자 업력, 보증금율, 유예원금, 거치유무<br />에 따라
                  차등 적용됩니다.
                </div>
              </KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>기간</KeyValueTitle>
              <KeyValueText>12개월 ~ 120개월</KeyValueText>
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
            <KeyValueTitle>연체이자율</KeyValueTitle>
            <KeyValueText>
              <div>약정금리+3.00%</div>
              <div
                class="text-body-4 font-weight-light color-gray-tertiary row-margin-mini"
              >
                (법정최고금리 연 20% 이내)
              </div>
              <ul :class="[$style['basic-list'], 'row-margin-item']">
                <li
                  :class="[
                    $style['basic-list__item'],
                    'font-weight-regular',
                    'color-green',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']">※</div>
                  <div :class="$style['basic-list__content']">
                    <div>
                      단, 연체발생시점에 약정이율이 없는 경우 약정금리는 상법상
                      상사법정이율과 상호금융 가계자금대출금리*중 높은 금리 적용
                    </div>

                    <ul :class="[$style['basic-list'], 'row-margin-small']">
                      <li
                        :class="[
                          $style['basic-list__item'],
                          'font-weight-regular',
                          'color-green',
                        ]"
                      >
                        <div :class="$style['basic-list__symbol']">*</div>
                        <div :class="$style['basic-list__content']">
                          <div>
                            한국은행에서 매월 발표하는 가장 최근의 비은행
                            금융기관 가중평균대출금리(신규대출 기준)
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>리스가능범위</KeyValueTitle>
            <KeyValueText>물건가격의 100% 이내</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>보험조건</KeyValueTitle>
            <KeyValueText
              >하나캐피탈 책임부보 또는 이용자 책임부보</KeyValueText
            >
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>상환방법</KeyValueTitle>
            <KeyValueText>원리금균등분할상환</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>이자납부시기</KeyValueTitle>
            <KeyValueText>매월 후취 또는 선취</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>규정손해배상금율</KeyValueTitle>
            <KeyValueText>미회수원금 X 102%</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>취급수수료</KeyValueTitle>
            <KeyValueText>없음</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>종료후처리</KeyValueTitle>
            <KeyValueText>무상양도</KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle :classNames="{ title: 'row-margin-item' }"
              >구비서류</KeyValueTitle
            >
            <KeyValueText>
              <div :class="$style['contents-list']">
                <ol
                  :class="[
                    $style['contents-list__list'],
                    $style['contents-list__list--quinary'],
                  ]"
                >
                  <li :class="$style['contents-list__item']">
                    <div :class="$style['contents-list__head']">
                      <div :class="$style['contents-list__symbol']">1</div>
                      <div :class="$style['contents-list__title']">
                        <div>공통서류</div>
                      </div>
                    </div>
                    <div
                      :class="[
                        $style['contents-list__depth-3'],
                        'row-margin-item',
                      ]"
                    >
                      <ul
                        :class="[
                          $style['basic-list'],
                          $style['basic-list--small-margin'],
                        ]"
                      >
                        <li
                          :class="[
                            $style['basic-list__item'],
                            'text-body-4',
                            'color-black',
                            'font-weight-regular',
                          ]"
                        >
                          <div :class="$style['basic-list__symbol']">-</div>
                          <div :class="$style['basic-list__content']">
                            리스신청서
                          </div>
                        </li>
                        <li
                          :class="[
                            $style['basic-list__item'],
                            'text-body-4',
                            'color-black',
                            'font-weight-regular',
                          ]"
                        >
                          <div :class="$style['basic-list__symbol']">-</div>
                          <div :class="$style['basic-list__content']">
                            리스물건견적서
                          </div>
                        </li>
                        <li
                          :class="[
                            $style['basic-list__item'],
                            'text-body-4',
                            'color-black',
                            'font-weight-regular',
                          ]"
                        >
                          <div :class="$style['basic-list__symbol']">-</div>
                          <div :class="$style['basic-list__content']">
                            사업자등록증 사본
                          </div>
                        </li>
                        <li
                          :class="[
                            $style['basic-list__item'],
                            'text-body-4',
                            'color-black',
                            'font-weight-regular',
                          ]"
                        >
                          <div :class="$style['basic-list__symbol']">-</div>
                          <div :class="$style['basic-list__content']">
                            재무제표증명원
                          </div>
                        </li>
                        <li
                          :class="[
                            $style['basic-list__item'],
                            'text-body-4',
                            'color-black',
                            'font-weight-regular',
                          ]"
                        >
                          <div :class="$style['basic-list__symbol']">-</div>
                          <div :class="$style['basic-list__content']">
                            주민등록등본
                          </div>
                        </li>
                        <li
                          :class="[
                            $style['basic-list__item'],
                            'text-body-4',
                            'color-black',
                            'font-weight-regular',
                          ]"
                        >
                          <div :class="$style['basic-list__symbol']">-</div>
                          <div :class="$style['basic-list__content']">
                            인감 증명서
                          </div>
                        </li>
                        <li
                          :class="[
                            $style['basic-list__item'],
                            'text-body-4',
                            'color-black',
                            'font-weight-regular',
                          ]"
                        >
                          <div :class="$style['basic-list__symbol']">-</div>
                          <div :class="$style['basic-list__content']">
                            신분증 사본
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li :class="$style['contents-list__item']">
                    <div :class="$style['contents-list__head']">
                      <div :class="$style['contents-list__symbol']">2</div>
                      <div :class="$style['contents-list__title']">
                        <div>법인추가서류</div>
                      </div>
                    </div>
                    <div
                      :class="[
                        $style['contents-list__depth-3'],
                        'row-margin-item',
                      ]"
                    >
                      <ul
                        :class="[
                          $style['basic-list'],
                          $style['basic-list--small-margin'],
                        ]"
                      >
                        <li
                          :class="[
                            $style['basic-list__item'],
                            'text-body-4',
                            'color-black',
                            'font-weight-regular',
                          ]"
                        >
                          <div :class="$style['basic-list__symbol']">-</div>
                          <div :class="$style['basic-list__content']">
                            대표이사 연대보증 필수
                          </div>
                        </li>
                        <li
                          :class="[
                            $style['basic-list__item'],
                            'text-body-4',
                            'color-black',
                            'font-weight-regular',
                          ]"
                        >
                          <div :class="$style['basic-list__symbol']">-</div>
                          <div :class="$style['basic-list__content']">
                            법인등기부등본
                          </div>
                        </li>
                        <li
                          :class="[
                            $style['basic-list__item'],
                            'text-body-4',
                            'color-black',
                            'font-weight-regular',
                          ]"
                        >
                          <div :class="$style['basic-list__symbol']">-</div>
                          <div :class="$style['basic-list__content']">
                            법인인감증명서
                          </div>
                        </li>
                        <li
                          :class="[
                            $style['basic-list__item'],
                            'text-body-4',
                            'color-black',
                            'font-weight-regular',
                          ]"
                        >
                          <div :class="$style['basic-list__symbol']">-</div>
                          <div :class="$style['basic-list__content']">
                            주주명부
                          </div>
                        </li>
                        <li
                          :class="[
                            $style['basic-list__item'],
                            'text-body-4',
                            'color-black',
                            'font-weight-regular',
                          ]"
                        >
                          <div :class="$style['basic-list__symbol']">-</div>
                          <div :class="$style['basic-list__content']">
                            정관사본
                          </div>
                        </li>
                        <li
                          :class="[
                            $style['basic-list__item'],
                            'text-body-4',
                            'color-black',
                            'font-weight-regular',
                          ]"
                        >
                          <div :class="$style['basic-list__symbol']">-</div>
                          <div :class="$style['basic-list__content']">
                            이사회결의서 사본
                          </div>
                        </li>
                        <li
                          :class="[
                            $style['basic-list__item'],
                            'text-body-4',
                            'color-black',
                            'font-weight-regular',
                          ]"
                        >
                          <div :class="$style['basic-list__symbol']">-</div>
                          <div :class="$style['basic-list__content']">
                            사업계획서
                          </div>
                        </li>
                        <li
                          :class="[
                            $style['basic-list__item'],
                            'text-body-4',
                            'color-black',
                            'font-weight-regular',
                          ]"
                        >
                          <div :class="$style['basic-list__symbol']">-</div>
                          <div :class="$style['basic-list__content']">
                            회사소개서
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ol>
              </div>
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem>
            <KeyValueTitle>기타</KeyValueTitle>
            <KeyValueText>
              <div>인지세 10,000원</div>
              <p
                class="text-body-4 color-gray-tertiary font-weight-light row-margin-mini"
              >
                (전액 하나캐피탈 부담)
              </p>
            </KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </UiTabPanel>
      <!-- // 상품안내 -->

      <!-- 진행절차 -->
      <UiTabPanel name="businessEquipmentLeaseTab002">
        <div :class="$style['step']">
          <ul :class="$style['step__list']">
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__top']">
                    <div :class="$style['step__badge']">STEP 1</div>
                  </div>
                  <div :class="$style['step__text']">
                    하나캐피탈 일반리스 <strong>상담을 신청</strong>합니다.
                  </div>
                </div>
                <div :class="$style['step__icon']">
                  <IconConsulting />
                </div>
              </div>
            </li>
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__top']">
                    <div :class="$style['step__badge']">STEP 2</div>
                  </div>
                  <div :class="$style['step__text']">
                    신청내용 확인하여 <strong>결과를 통보</strong>합니다.
                  </div>
                </div>
                <div :class="$style['step__icon']">
                  <IconSend />
                </div>
              </div>
            </li>
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__top']">
                    <div :class="$style['step__badge']">STEP 3</div>
                  </div>
                  <div :class="$style['step__text']">
                    계약 시 <strong>온라인 또는 오프라인 약정</strong>을
                    진행합니다.
                  </div>
                </div>
                <div :class="$style['step__icon']">
                  <IconContract />
                </div>
              </div>
            </li>
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__top']">
                    <div :class="$style['step__badge']">STEP 4</div>
                  </div>
                  <div :class="$style['step__text']">
                    고객님께서 <strong>원하시는 기기를 설치</strong>해<br />
                    드리고, 담당 직원이 실사를 합니다.
                  </div>
                </div>
                <div :class="$style['step__icon']">
                  <IconInstallation />
                </div>
              </div>
            </li>
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__top']">
                    <div :class="$style['step__badge']">STEP 5</div>
                  </div>
                  <div :class="$style['step__text']">
                    판매업체에 <strong>기기금액을 입금</strong>해<br />
                    드립니다.
                  </div>
                </div>
                <div :class="$style['step__icon']">
                  <IconDeposit />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </UiTabPanel>
      <!-- // 진행절차 -->

      <!-- 유의사항 -->
      <UiTabPanel name="businessEquipmentLeaseTab003">
        <ul
          :class="[
            $style['basic-list'],
            $style['basic-list--regular'],
            $style['basic-list--regular-margin'],
          ]"
        >
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
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
              'text-body-3',
              'font-weight-medium',
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
              'text-body-3',
              'font-weight-medium',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              개인신용평점 하락 시 금융거래와 관련된 불이익이 발생 할 수
              있습니다.
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'color-black',
              'text-body-3',
              'font-weight-medium',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              일정기간 원리금을 연체할 경우, 모든 원리금을 변제할 의무가 발생할
              수 있습니다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              리스취급이 부적정한 경우(연체금 보유, 개인신용평점 낮음) 대출이
              제한될 수 있습니다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              금융소비자의 신용등급 또는 개인신용평점에 따라 대출한도 및 금리가
              차등 적용됩니다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              금융소비자는 해당상품에 대하여 설명을 받을 권리가 있으며, 그
              설명을 듣고 내용을 충분히 이해한 후 거래하시기 바랍니다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              리스물건의 실제 소유권은 하나캐피탈에 있으며 리스종료 후
              무상양도하는 방식입니다.
            </div>
          </li>
        </ul>
      </UiTabPanel>
      <!-- // 유의사항 -->

      <ul :class="[$style['basic-list'], 'row-margin-contents']">
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            준법심의필 23-196<br />
            (2023.07.03~2024.07.02)
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            여신금융협회 심의필 제 2023-C1h-07374호<br />
            (2023.07.03~2024.07.02)
          </div>
        </li>
      </ul>
    </UiTab>

    <div
      class="flex-box justify-conten-end row-margin-contents row-margin-bottom-none"
    >
      <div class="flex-box__cell">
        <IconLogoMain class="display-block" />
      </div>
    </div>

    <BasicHr
      type="contents"
      theme="quaternary"
      className="row-margin-container"
    />

    <div :class="$style['icon-list']">
      <ul :class="$style['icon-list__list']">
        <li :class="$style['icon-list__item']">
          <button type="button" :class="$style['icon-list__block']">
            <span :class="$style['icon-list__icon']"><IconCalculate /></span>
            <span :class="$style['icon-list__content']">
              <span :class="$style['icon-list__text']">월 납입금 계산</span>
              <span :class="$style['icon-list__title']">대출 계산기</span>
            </span>
          </button>
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
              <BasicButton>견적조회</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/business/BusinessEquipmentLease.scss';
</style>
