<script>
import { ref, inject } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';

import IconPerson from '@/assets/images/icon/person.svg?component';
import IconBuilding from '@/assets/images/icon/building.svg?component';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    IconPerson,
    IconBuilding,
  },
  setup() {
    const identificationSystem = inject('identificationSystem', {});

    const layer = ref(null);

    return {
      identificationSystem,
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
          <strong>회원 유형을</strong><br />
          선택해 주세요
        </PageMainText>
      </PageTextGroup>

      <div :class="$style['icon-list']">
        <ul :class="$style['icon-list__list']">
          <li :class="$style['icon-list__item']">
            <button
              type="button"
              :class="$style['icon-list__block']"
              @click="identificationSystem.layerIdentificationMethodSelectOpen"
            >
              <div :class="$style['icon-list__icon']"><IconPerson /></div>
              <div :class="$style['icon-list__content']">
                <div :class="$style['icon-list__title']">개인 (개인사업자)</div>
              </div>
            </button>
          </li>
          <li :class="$style['icon-list__item']">
            <button
              type="button"
              :class="$style['icon-list__block']"
              @click="identificationSystem.layerIdentificationBusinessOpen"
            >
              <div :class="$style['icon-list__icon']"><IconBuilding /></div>
              <div :class="$style['icon-list__content']">
                <div :class="$style['icon-list__title']">법인</div>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/identification/LayerIdentificationTypeSelect.scss';
</style>
