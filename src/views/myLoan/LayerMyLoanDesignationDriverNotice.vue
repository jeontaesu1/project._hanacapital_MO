<script>
// My_M01_l006
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
  },
  setup() {
    const layer = ref(null);

    return {
      layer,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="full" v-slot="layerSlotProps">
    <FullPopup>
      <template v-slot:head>
        <FullPopupHead>
          <PopupTitle>지정운전자 등록안내 및 유의사항</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <section class="row-margin-contents-group">
        <h3 class="text-body-2 row-margin-item-medium">등록안내 및 유의사항</h3>

        <ul
          :class="[
            $style['basic-list'],
            $style['basic-list--regular'],
            $style['basic-list--regular-margin'],
          ]"
        >
          <li :class="[$style['basic-list__item'], 'color-red', 'text-body-3']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              법인은 PC홈페이지를 통해서만 신청가능합니다.
            </div>
          </li>
          <li :class="[$style['basic-list__item'], 'color-red', 'text-body-3']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              지정운정자 삭제는 고객센터(1800-1110)로 문의바랍니다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              렌터카 차량의 운전자는 계약시의 보험조건을 준수하여야 하며,
              운전경력이 1년 이상이어야 하며, 유효한 운전면허증을 소지하여야
              합니다.
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              기본 운전자 외 2인에 한하여 추가로 지정운전자를 지정할 수
              있습니다. (단, 법인고객이 '임직원 운전자 한정운전 특약'가입하는
              경우 제외)
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h3 class="text-body-2 row-margin-item-medium">기본 운전자 범위</h3>

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
              <div>법인 고객이 임직원운전자 한정특약에 미가입한 경우</div>
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
                    임원일 경우 직계가족 포함
                  </div>
                </li>
                <li
                  :class="[
                    $style['basic-list__item'],
                    'color-red',
                    'text-body-4',
                    'font-weight-regular',
                  ]"
                >
                  <div :class="$style['basic-list__symbol']">-</div>
                  <div :class="$style['basic-list__content']">
                    배우자, 직계존/비속 주민등록등본 또는 가족관계증명서 상 증빙
                    필수
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
                    법인 소속직원(파견 및 파트타임 직원 포함) 외 지정운전자
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              <div>법인고객이 임직원운전자 한정특약에 가입한 경우</div>
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
                    법인 소속 임직원(파견 및 파트타임 직원 포함)에 한함
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              개인의 경우 배우자, 직계가족 및 보험조건을 준수한 지정운전자
              2인(개인사업자의 경우, 임직원 포함)
            </div>
          </li>
          <li
            :class="[$style['basic-list__item'], 'color-black', 'text-body-3']"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              대리운전의 경우 종합보험(대인, 대물, 자손, 자차) 처리 가능한 자에
              한함.
            </div>
          </li>
        </ul>
        <ul
          :class="[
            $style['basic-list'],
            'row-margin-item-group',
            'color-gray-tertiary',
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
              상세내용은 약관 제3조 및 계약서를 참고해주세요.
            </div>
          </li>
        </ul>
      </section>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton @click="layerSlotProps.close()"
              >네, 모두 확인했습니다</BasicButton
            >
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanDesignationDriverNotice.scss';
</style>
