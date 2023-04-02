<script>
import { ref } from 'vue';

import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import UiLayer from '@/components/ui/layer/UiLayer.vue';
import AlertPopup from '@/components/ui/layer/AlertPopup.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

import IconCustomerCenter from '@/assets/images/icon/customer-center.svg?component';

export default {
  components: {
    BasicButton,
    UiLayer,
    AlertPopup,
    ButtonList,
    ButtonListItem,
    IllustObject,
    BasicHr,
    IconCustomerCenter,
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
  <UiLayer ref="layer" type="alert" v-slot="layerSlotProps">
    <AlertPopup>
      <div :class="$style['error-top']">
        <IllustObject
          type="error"
          :classNames="{ wrap: $style['error-top__illust'] }"
        />
        <p :class="$style['error-top__text']">
          서비스를 일부<br />
          이용할 수 없습니다
        </p>
      </div>

      <BasicHr
        theme="quaternary"
        type="contents"
        className="row-margin-contents"
      />

      <div :class="$style['icon-list']">
        <ul :class="$style['icon-list__list']">
          <li :class="$style['icon-list__item']">
            <button type="button" :class="$style['icon-list__block']">
              <div :class="$style['icon-list__icon']">
                <IconCustomerCenter />
              </div>
              <div :class="$style['icon-list__content']">
                <div :class="$style['icon-list__title']">고객센터</div>
              </div>
            </button>
          </li>
        </ul>
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton @click="layerSlotProps.close()">확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </AlertPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/error/LayerErrorAlert.scss';
</style>
