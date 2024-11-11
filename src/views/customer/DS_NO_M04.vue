<script>
// DS_NO_M04
import { onMounted, onUnmounted } from 'vue';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '소멸시효 완성채권 유의사항');
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
      <!-- s: 241010 추가 -->
      <PageTextGroup>
        <PageMainText>
          소멸시효 완성채권 추심 관련<br />
          금융소비자 유의사항
        </PageMainText>
      </PageTextGroup>
      <!-- e:// 241010 추가 -->
      <section class="row-margin-contents-group">
        <div :class="$style['contents-list']">
          <ol
            :class="[
              $style['contents-list__list'],
              $style['contents-list__list--senary'],
            ]"
          >
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">1</div>
                <div
                  :class="
                    ($style['contents-list__title'],
                    'font-weight-light text-body-3')
                  "
                >
                  추심착수 예정통지서에 기재된 채권자, 채권추심인 및 채무사실
                  등이 정확한지 확인하여야 합니다.<br />필요시 채무확인서 등
                  관련자료를 요청하여 기초 채무사실을 꼼꼼히 확인하여야 합니다.
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">2</div>
                <div
                  :class="
                    ($style['contents-list__title'],
                    'font-weight-light text-body-3')
                  "
                >
                  소멸시효는 「민법」 제162조 및 「상법」 제64조 등에 따라
                  채권자가 권리를 행사할 수 있음에도 불구하고 권리를 행사하지
                  아니한 사실상태가 일정기간 계속되는 경우 그 권리의 소멸을
                  인정하는 제도입니다. 3년(통신채권 등) 또는 5년(대출채권 등)
                  이상 채권자로부터 연락(유선, 우편, 소제기 등)을 받지
                  못하였다면, 소멸시효가 완성되었을 가능성이 크므로 소멸시효
                  완성 여부를 확인*할 필요가 있습니다.<br />
                  * 크레딧포유(신용정보원), 나이스지키미(나이스평가정보),
                  올크레딧(KCB), 신용회복위원회에서 조회 가능
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">3</div>
                <div
                  :class="
                    ($style['contents-list__title'],
                    'font-weight-light text-body-3')
                  "
                >
                  소멸시효 완성 사실이 확인되는 경우, 변제할 의사가 없다면
                  채권자 등에게 구두 또는 서면으로 소멸시효 완성사실을 주장하고
                  채무상환을 거절할 수 있습니다. 채무자가 채무를 일부
                  변제하거나, 변제하겠다는 각서 및 확인서 등을 작성하는 경우,
                  작성일로부터 소멸시효 기간이 재산정될 수 있으므로 유의하여야
                  합니다.
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">4</div>
                <div
                  :class="
                    ($style['contents-list__title'],
                    'font-weight-light text-body-3')
                  "
                >
                  법원으로부터 지급명령을 받은 경우에도 변제할 의사가 없다면
                  채권매각통지서를 받은 경우와 마찬가지로 채권자, 채무액은 물론
                  소멸시효 완성 여부를 꼼꼼히 따져볼 필요가 있습니다.<br />소멸시효
                  완성 사실이 확인되는 경우, 변제할 의사가 없다면 지급명령을
                  받은 날로부터 2주 이내에 지급명령을 한 법원에 이의신청을
                  하여야 합니다.
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">5</div>
                <div
                  :class="
                    ($style['contents-list__title'],
                    'font-weight-light text-body-3')
                  "
                >
                  채권자, 채권 매입기관 또는 채권추심인 등이 일부만 갚으면
                  원금을 감면하여 주겠다고 회유하는 경우, 완성된 소멸시효를
                  부활시키고자 하는 의도가 있을 수 있으므로, 변제할 의사가
                  없다면 채권자, 채무금액 및 소멸시효 완성여부 등을 신중히
                  확인할 필요가 있습니다.<br />소액이라도 변제하는 경우
                  소멸시효가 부활할 수 있으므로, 소멸시효 완성 사실이 확인되는
                  경우, 소멸시효 완성을 주장하고 상환하지 아니할 수 있습니다.
                </div>
              </div>
            </li>
          </ol>
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
