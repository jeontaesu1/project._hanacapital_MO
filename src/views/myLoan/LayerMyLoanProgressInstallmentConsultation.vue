<script>
// PF_M10_l006
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import IconCertificationPerson from '@/assets/images/icon/certification-person.svg?component';
import IconPersonalTerms from '@/assets/images/icon/personal-terms.svg?component';
import IconSend from '@/assets/images/icon/send.svg?component';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    PageSubText,
    BasicButton,
    ButtonList,
    ButtonListItem,

    IconCertificationPerson,
    IconPersonalTerms,
    IconSend,
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
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          <strong>할부상담안내를</strong><br />
          받아보세요
        </PageMainText>
        <PageSubText>
          하나캐피탈 할부금융 이용을 위하여 사전 상담을<br />
          통해 가능여부를 확인하는 서비스입니다.
        </PageSubText>
        <PageSubText>
          판매점에 품목 코드를 안내 받으시고,<br />
          아래 내용을 확인하시여 진행 바랍니다.
        </PageSubText>
      </PageTextGroup>

      <section>
        <h3 class="font-weight-bold text-body-2 row-margin-item-group">
          할부상담 절차
        </h3>

        <div :class="$style['step']">
          <ul :class="$style['step__list']">
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__top']">
                    <div :class="$style['step__badge']">STEP 1</div>
                  </div>
                  <div :class="$style['step__text']">
                    본인 확인을 위한 <strong>본인인증</strong>을 합니다.
                  </div>
                </div>
                <div :class="$style['step__icon']">
                  <IconCertificationPerson />
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
                    <strong>고객정보와 할부신청정보</strong>를 입력합니다.
                  </div>
                </div>
                <div :class="$style['step__icon']">
                  <IconPersonalTerms />
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
                    신청내용에 대한 <strong>결과를 확인</strong>합니다.
                  </div>
                </div>
                <div :class="$style['step__icon']">
                  <IconSend />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section :class="[$style['notice-section'], 'row-margin-contents']">
        <h3 :class="$style['notice-section__title']">이용 안내</h3>

        <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              법인고객님은 본 서비스 이용이 불가합니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              본인 명의 휴대전화 또는 신용(체크) 카드를 소유자만 가능합니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              할부 상담을 위하여 신분증을 지참하시어야 합니다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              반드시 할부금융을 이용하려는 고객님께서 진행을 하셔야 합니다.
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
            <BasicButton>시작하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanProgressInstallmentConsultation.scss';
</style>
