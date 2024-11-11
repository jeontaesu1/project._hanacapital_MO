<script>
// DS_NO_M05
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';

export default {
  components: {
    PageContents,
    NoticeText,
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
      store.ui.header.setTitle(() => '추심에 관한 개인금융채무자의 권리');
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
          채권추심자의 의무와 추심에 관한<br />
          개인금융채무자의 권리
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
                  채권추심자는 각 채권별로 7일에 7회를 초과하여 개인금융채권의
                  추심을 위한 연락*을 해서는 안됩니다.<br />

                  <NoticeText class="text-body-5 row-margin-item-medium">
                    약관 또는 법령 또는 가이드라인에 의하여 채무자에게 통지해야
                    하는 사항을 통지하거나 채무자의 문의에 대한 답변 또는 요청에
                    따른 통지로 같은 날 이루어진 통지는 추심연락으로 보지 않음
                  </NoticeText>

                  <section class="row-margin-contents">
                    <h5 class="text-body-3 font-weight-medium">
                      추심연락횟수에서 제외되는 사항
                    </h5>

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
                          채권자, 채무금액, 연체금액 및 연체기간 등 추심대상
                          채권에 관한 사항의 단순통지로 별도의 상환독촉을
                          포함하지 않는 경우(단 1일 1회만 제외)
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
                          채권추심자가 개인금융채무자를 방문하였으나
                          부재중이어서 만나지 못한 경우 등 추심연락이
                          개인금융채무자에게 도달하지 않은 경우(단, 방문의 경우
                          7일에 2회만 제외)
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
                          채무자가 전화를 받은 뒤 일방적으로 끊는 등 독촉에
                          필요한 통화를 마치지 못한 경우로서 같은 날 이루어진
                          2회 이내의 전화 통화 
                        </div>
                      </li>
                    </ul>
                  </section>
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
                  채권추심자는 채무자가 아래의 사실에 해당된다고 채무자로부터
                  확인한 경우 그 확인한 날로부터 7일간 추심연락을 해서는
                  안됩니다.

                  <section class="row-margin-contents">
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
                          채무자가 「재난 및 안전관리 기본법」제61조에 따른
                          재난지원 대상에 포함되는 경우
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
                          채무자 또는 그 직계 존·비속, 배우자 또는 그 직계
                          존·비속이 사고·질병 등으로 수술을 받거나 기타 입원한
                          경우(단, 동일한 사유로 인한 추심연락 유예는 1회에
                          한함)
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
                          채무자 또는 그 직계 존·비속, 배우자 또는 그 직계
                          존·비속의 혼인·장례(단, 동일한 사유로 인한 추심연락
                          유예는 1회에 한함)
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
                          천재지변으로 추심연락에 응하는 것이 명백하게 곤란 경우
                        </div>
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
            </li>
            <li :class="$style['contents-list__item']">
              <div :class="$style['contents-list__head']">
                <div :class="$style['contents-list__symbol']">3</div>
                <div
                  :class="
                    ($style['contents-list__title'],
                    'font-weight-light text-body-3 color-gray font-weight-regular')
                  "
                >
                  채무자는 1주 28시간 이하로 추심연락을 하지 않도록 요청할 수
                  있으며, 특정주소에의 방문, 특정 전화번호로의 전화 또는
                  문자메시지 전송, 특정 이메일 계정으로의 이메일 전송, 특정
                  팩스번호로의 전송 등 추심연락 수단 중 3가지 이하의 수단을
                  정하여 추심연락을 하지 않도록 요청할 수 있습니다.(단, 전화와
                  방문은 동시에 제한할 수 없음)
                </div>
              </div>
            </li>
          </ol>
          <p class="text-body-3 row-margin-item-medium font-weight-light">
            ※ 위 내용에 대한 자세한 사항은 홈페이지 OO(www.=======)에서 확인할
            수 있으며 고객센터(☏OOO)에서 안내받을 수 있습니다.
          </p>
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
