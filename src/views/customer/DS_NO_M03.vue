<script>
// DS_NO_M03
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
// import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
// import PageMainText from '@/components/ui/text/PageMainText.vue';
// import PageSubText from '@/components/ui/text/PageSubText.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';

export default {
  components: {
    PageContents,
    // PageTextGroup,
    // PageMainText,
    // PageSubText,
    NoticeText,
    BasicBox,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '불법채권추심 대응요령');
      store.ui.header.setLeftButtons(() => []);
      store.ui.header.setRightButtons(() => ['close']);
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
    <section>
      <section class="row-margin-contents">
        <BasicBox theme="undenary">
          <NoticeText class="text-body-4">
            채권추심 과정에서 아래와 같은 사실이 발생하는 경우 담당부서<b
              >(전화번호 : 02-000-0000)</b
            >로 연락하시면 도움을 드리도록 하겠습니다.
          </NoticeText>
        </BasicBox>
      </section>

      <section class="row-margin-contents-group">
        <div :class="$style['contents-list']">
          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              1. 채권추심자의 신분이 의심스러운 경우
            </h4>
            <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-4',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  채권추심자가 방문, 전화 등으로 최초 접촉 시 신분 확인이 가능한
                  증표(사원증 또는 신용정보업종사원증)를 제시하여 줄 것을
                  요구하고, 이를 제시하지 못하거나 사진 미부착․훼손 등 신원이
                  의심스러운 경우 소속회사나 관련 협회(예:신용정보협회,
                  www.cica.or.kr)에 재직여부 등을 확인하시기 바랍니다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-4',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  채권추심자는 검찰․법원 등 사법당국을 사칭하거나 법무사,
                  법원집행관, 법원집행관대리 등 사실과 다른 직함을 사용할 수
                  없습니다. (예시) 채권추심자가 법률담당관, 법원집행관,
                  소송대리인 등으로 허위 기재한 명함을 사용하거나 그 명의로
                  독촉장을 발송
                </div>
              </li>
            </ul>
          </section>
          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              2. 추심채권이 추심제한 요건에 해당하는 경우
            </h4>
            <p class="text-body-3 color-gray-tertiary font-weight-light">
              본인의 채무가 추심제한 요건에 해당하는지 확인하고 추심제한 대상인
              경우 채권추심자에게 서면으로 추심중단을 요청(전화요청 시 통화내용
              녹음)하고 이를 확인할 수 있는 증빙자료를 제시하여 주시기 바랍니다.
              채무자가 채무확인서를 발급하여 줄 것을 채권추심자에게 요청하면
              소멸시효 완성여부에 대하여 확인하실 수 있습니다. 채권추심자가
              채무확인서를 제시하지 못하는 경우 채권추심을 즉시 중단할 것을
              요청할 수 있습니다.
            </p>

            <section class="row-margin-contents">
              <h5 class="text-body-3 font-weight-medium">채권추심 제한대상</h5>

              <ul
                :class="[
                  $style['basic-list'],
                  $style['basic-list--regular'],
                  'row-margin-item-medium',
                ]"
              >
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-4',
                    'color-black',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    채무조정 절차가 끝나지 않은 개인금융채권(단,
                    채권금융회사등에 같은 채무에 대한 채무조정을 2회 이상 요청한
                    경우 제외)
                  </div>
                </li>
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-4',
                    'color-black',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    채무자가 사망하여 채권의 상속여부가 확정되지 않거나,
                    상속인의 상속포기 사실을 확인하는 경우
                  </div>
                </li>
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-4',
                    'color-black',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    채권의 존재여부나 범위에 대해 소송이 계속 중인 개인금융채권
                  </div>
                </li>
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-4',
                    'color-black',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    세 번이상 양도된 채권(단, 개인금융채권 양도인에게 재양도하는
                    경우, 자산유동화를 위하여 양도하는 경우, 공공기관 및
                    공공기관이 출자·출연한 회사에 양도하는 경우 등 제외)
                  </div>
                </li>
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-4',
                    'color-black',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    개인금융채무자가 채무확인서를 요청하였음에도 교부되지 아니한
                    경우
                  </div>
                </li>
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-4',
                    'color-black',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    채권원인서류가 존재하지 않거나 명의도용, 대출사기에 의한
                    채권 및 이에 준하는 채권으로서 채권·채무관계가 불명확한 채권
                  </div>
                </li>
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-4',
                    'color-black',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    소멸시효 완성 채권
                  </div>
                </li>
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-4',
                    'color-black',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    채권자변동정보가 종합신용정보집중기관에 제공되지 아니한
                    개인금융채권
                  </div>
                </li>
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-4',
                    'color-black',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    개인회생절차개시결정 또는 중지·금지명령 사실을 확인하는 경우
                  </div>
                </li>
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-4',
                    'color-black',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    채무조정 신청 사실을 확인하는 경우
                  </div>
                </li>
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-4',
                    'color-black',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    채무조정의 합의가 성립된 후 합의의 효력이 상실되지 아니한
                    경우
                  </div>
                </li>
                <li
                  :class="[
                    $style['basic-list__item'],
                    'text-body-4',
                    'color-black',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']"></div>
                  <div :class="$style['basic-list__content']">
                    「국민기초생활보장법」제2조제2호에 따른 수급자 및
                    「장애인고용촉진 및 직업재활법」제2조제2호에 따른
                    중증장애인의 개인금융채권
                  </div>
                </li>
              </ul>
            </section>
          </section>
          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              3. 가족 등 제3자에게 채무사실을 알리는 경우
            </h4>
            <p class="text-body-3 color-gray-tertiary font-weight-light">
              채권추심자는 정당한 사유 없이 가족을 포함한 제3자에게 채무사실을
              직접 알리거나 확인시켜주는 행위를 할 수 없습니다.
            </p>
          </section>
          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              4. 가족에게 연락하여 채무변제를 요구하는 경우
            </h4>
            <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-4',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  채권추심자는 채무자의 가족․친지에게 연락하여 대위변제하여 줄
                  것을 요구할 수 없습니다.
                </div>
              </li>
              <li
                :class="[
                  $style['basic-list__item'],
                  'text-body-4',
                  'color-black',
                ]"
              >
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  또한, 가족 등 제3자가 대위변제 의사를 표시하였다고 하여
                  채무자의 의사에 반하여 변제를 요구할 수 없습니다. (예시)아들을
                  평생 빚쟁이로 살지 아니하도록 하기 위하여 부모가 대신
                  상환하도록 대위변제를 강요하는 행위
                </div>
              </li>
            </ul>
          </section>
          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              5. 채권추심회사 명의로 압류·경매 등 법적조치를 하겠다고 하는 경우
            </h4>
            <p class="text-body-3 color-gray-tertiary font-weight-light">
              채권추심회사는 압류․경매 또는 채무불이행정보 등록 등의 조치를 직접
              취할 수 없으며 법적절차를 직접 진행하겠다고 채무자에게 안내할 수
              없습니다. 다만, 채권자 또는 채권자협의회에 의하여 법적조치가
              진행될 수 있다고 안내하는 행위는 가능합니다.
            </p>
          </section>
          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              6. 채권추심자가 채무대납 등을 제의하는 경우
            </h4>
            <p class="text-body-3 color-gray-tertiary font-weight-light">
              채권추심자는 채무를 대납하겠다고 제안하거나 대부업자, 사채업자
              등을 통하여 자금을 마련하도록 권유할 수 없습니다.<br />
              (예시) 채권추심자가 자신의 자금으로 채무를 변제한 후 채무자에게
              이자를 요구하는 행위
            </p>
          </section>
          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              7. 채권자 또는 채권추심회사 명의의 계좌이외의 계좌로 입금을
              요구하는 경우
            </h4>
            <p class="text-body-3 color-gray-tertiary font-weight-light">
              채권추심자가 현금을 수령하거나 본인의 계좌로 입금을 요구하는 것은
              금지되어 있습니다.
            </p>
          </section>
          <section class="row-margin-contents">
            <h4 class="text-body-2 row-margin-item-medium">
              8. 채권추심자가 구두로 채무감면 사실을 안내하는 경우
            </h4>
            <p class="text-body-3 color-gray-tertiary font-weight-light">
              채권자가 채무감면을 결정한 경우 채권추심자는 그 사실을 반드시
              서면(필요시 DM 발송 가능)으로 사전 교부해야 하므로 채무감면 사실을
              서면으로 요청할 수 있습니다. 
            </p>
          </section>
        </div>
      </section>
    </section>
  </PageContents>
</template>

<style lang="scss">
@import '@/assets/scss/views/uiGuide/GuideComponent.scss';
</style>

<style lang="scss" module>
@import '@/assets/scss/views/customer/CustomerFinancialConsumerProtectionInterestRateCutRequestInfo.scss';
@import '@/assets/scss/views/uiGuide/GuideComponentModule.scss';
</style>
