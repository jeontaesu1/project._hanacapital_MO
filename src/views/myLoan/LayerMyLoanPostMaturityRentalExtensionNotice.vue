<script>
// My_M08_l009
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

import IconCustomer from '@/assets/images/icon/customer-center.svg?component';
import IconTell from '@/assets/images/icon/tell.svg?component';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PopupButton,
    BasicHr,
    BasicButton,
    IconCustomer,
    IconTell,
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
          <PopupTitle>만기후 연장 안내</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <div>
        <section class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">안내사항</h3>

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
                'text-body-4',
              ]"
            >
              <div :class="$style['basic-list__symbol']"></div>
              <div :class="$style['basic-list__content']">
                금융상품판매대리·중개업자는<br />
                ① 하나캐피탈㈜로부터 제공받는 소정의 수수료 이외에 별도의
                수수료를 요구하거나 수취할 수 없습니다.<br />
                ② 금융소비자를 대신하여 계약을 체결할 수 없습니다.<br />
                ③ 금융소비자로부터 청약, 해지 등 계약에 관한 의사표시를 수령할
                권한이 없습니다.
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
                하나캐피탈㈜만이 금융소비자 및 계약체결에 관한 정보를
                보유·관리할 수 있습니다.
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
                금융상품판매대리·중개업자가 금융상품모집 등의 업무를 수행함에
                있어 해당 업무를 제3자에게 (재)위탁하거나 그러한 행위로 인하여
                수수료·보수 그 밖의 대가를 지급할 수 없습니다.
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
                ① 금융상품판매대리·중개업자의 「금융소비자 보호에 관한 법률」등
                위반행위로 금융소비자에게 손해가 발생한 경우 하나캐피탈㈜ 및
                해당 금융상품판매대리·중개업자에게 손해배상 책임이 인정될 수
                있습니다.<br />
                ② 다만, 하나캐피탈㈜가 해당 금융상품판매대리·중개업자의 선임과
                그 업무감독에 대하여 적절한 주의를 하였고 손해 방지에 노력한
                경우에는 하나캐피탈㈜가 면책될 수 있습니다.
              </div>
            </li>
          </ul>
        </section>
      </div>

      <template v-slot:foot>
        <BasicHr
          type="contents"
          theme="quaternary"
          className="row-margin-container"
        />

        <div :class="[$style['icon-list'], $style['bottom-list']]">
          <ul :class="$style['icon-list__list']">
            <li :class="$style['icon-list__item']">
              <div :class="$style['icon-list__block']">
                <div :class="$style['icon-list__icon']"><IconCustomer /></div>
                <div :class="$style['icon-list_›_content']">
                  <div :class="$style['icon-list__title']">재렌트 상담</div>
                  <div
                    :class="[$style['icon-list__text'], 'font-weight-light']"
                  >
                    (유)에이치서비스플랫폼
                  </div>
                </div>
                <BasicButton
                  tagName="a"
                  size="mini"
                  :line="true"
                  theme="quaternary"
                  :classNames="{ wrap: $style['icon-list__button'] }"
                  href="tel:1800-9560"
                >
                  <template v-slot:leftIcon>
                    <IconTell />
                  </template>
                  1800-9560
                </BasicButton>
              </div>
            </li>
          </ul>
        </div>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanPostMaturityRentalExtensionNotice.scss';
</style>
