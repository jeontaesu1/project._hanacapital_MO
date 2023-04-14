<script>
// My_M03_l004
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PageTextGroup,
    PageMainText,
    PageSubText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    StepProgress,
    BasicBox,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
  },
  setup() {
    const state = reactive({
      nameError: false,
      idNumberError: false,
      licenseError: false,
      dateError: false,
    });

    const layer = ref(null);

    return {
      state,
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
          <PopupTitle>온라인 약정</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
        <StepProgress :total="3" :current="1" />
      </template>

      <PageTextGroup>
        <PageMainText>
          금융상품 판매 대리·중개업자의<br />
          <strong>고지의무수행 확인서를 확인해 주세요</strong>
        </PageMainText>
        <PageSubText>
          본 확인서는 「금융소비자 보호에 관한 법률」 제26조 등에 의거하여
          금융상품 판매 대리ㆍ중개업자가 고객님께 고지해야 하는 사항을 정확히
          수행했는지 확인하기 위해 활용됩니다.
        </PageSubText>
        <PageSubText>
          아래 사항에 대하여 확인하신 후, 고지 여부를 체크하여 서명해 주시기
          바랍니다.
        </PageSubText>
      </PageTextGroup>

      <BasicBox>
        <ol
          :class="[
            $style['basic-list'],
            $style['basic-list--normal-margin'],
            $style['basic-list--fixed-width'],
          ]"
        >
          <li
            :class="[
              $style['basic-list__item'],
              'text-body-3',
              'color-gray-tertiary',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']">1-1.</div>
            <div :class="$style['basic-list__content']">
              (온라인 업자가 아닌 대출모집인의 경우) 금융상품 판매
              대리·중개업자가 고객님에게 등록증을 제시하고, 하나캐피탈주식회사에
              전속된 대리·중개업자임을 고지하였습니다.
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'text-body-3',
              'color-gray-tertiary',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']">1-2.</div>
            <div :class="$style['basic-list__content']">
              (리스·할부모집인, 온라인 업자 대출모집인등 기타의 경우) 금융상품
              판매 대리·중개업자가 고객님에게 등록증을 제시하고,
              하나캐피탈주식회사에 비전 속 대리·중개업자임을 고지하였습니다.
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'text-body-3',
              'color-gray-tertiary',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']">2-1.</div>
            <div :class="$style['basic-list__content']">
              금융상품 판매 대리·중개업자는 하나캐피탈주식회사로부터 금융상품
              모집 및 계약서 징구등의 업무를 위탁받아 수행하며, 금융상품 계약
              체결권을 부여받지 아니한 경우, 금융상품 계약을 체결할 수 없습니다.
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'text-body-3',
              'color-gray-tertiary',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']">2-2.</div>
            <div :class="$style['basic-list__content']">
              금융상품 판매 대리·중개업자는 하나캐피탈주식회사로부터 제공받는
              소정의 수수료이외에 금품, 그 밖의 재산상 이익을 요구하거나 수취할
              수 없습니다.
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'text-body-3',
              'color-gray-tertiary',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']">3.</div>
            <div :class="$style['basic-list__content']">
              고객님께서 제공한 신용정보 또는 개인 정보는 하나캐피탈주식회사가
              보유·관리합니다.
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'text-body-3',
              'color-gray-tertiary',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']">4-1.</div>
            <div :class="$style['basic-list__content']">
              하나캐피탈 주식회사가 고의 또는 과실로 금융소비자보호에 관한
              법률을 위반하여 고객님에게 손해를 발생시킨 경우에는 그 손해를
              배상할 책임이 있습니다.
            </div>
          </li>
          <li
            :class="[
              $style['basic-list__item'],
              'text-body-3',
              'color-gray-tertiary',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']">4-2.</div>
            <div :class="$style['basic-list__content']">
              금융상품 판매 대리·중개업자가 대리·중개 업무를 할 때 고객님에게
              손해를 발생시킨 경우, 하나캐피탈주식회사 및 해당 금융상품 판매
              대리·중개업자에게 손해배상 책임이 인정될 수 있습니다. 다만,
              하나캐피탈주식회사가 해당 금융상품판매 대리·중개업자의 선임과 그
              업무 감독에 대하여 적절한 주의를 하였고 손해를 방지하기 위하여
              노력한 경우에는 하나캐피탈주식회사가 면책될 수 있습니다.
            </div>
          </li>
        </ol>
      </BasicBox>

      <CheckBox
        id="LayerMyLoanNoticeDutyChk01"
        theme="secondary"
        :classNames="{ wrap: $style['chk'] }"
      >
        <CheckBoxObject />
        <CheckBoxLabelText
          :classNames="{
            text: ['font-weight-regular', 'text-body-3'],
          }"
        >
          본인은 위 모든 사항에 대하여 금융상품 판매 대리· 중개업자로부터 사전에
          고지 받았습니다.
        </CheckBoxLabelText>
      </CheckBox>

      <BasicBox theme="senary" class="row-margin-contents-group">
        <div class="color-gray-secondary text-body-4">
          위 고지 여부 확인 내용은 사실과 다름 없으며 본인이 직접 작성하였음을
          확인합니다.
        </div>
      </BasicBox>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractNoticeDuty.scss';
</style>
