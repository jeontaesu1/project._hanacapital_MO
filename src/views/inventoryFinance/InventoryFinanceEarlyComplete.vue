<script>
// IF_M03_p004
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

import IconCustomer from '@/assets/images/icon/customer-center.svg?component';
import IconTell from '@/assets/images/icon/tell.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    PageSubText,
    IllustObject,
    BasicHr,
    ButtonList,
    ButtonListItem,
    BasicButton,
    IconCustomer,
    IconTell,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '재고금융 중도상환');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
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
    <PageTextGroup>
      <PageMainText>
        중도상환 신청 접수가<br />
        <strong>완료되었습니다</strong>
      </PageMainText>
      <PageSubText>
        고객님 감사합니다.<br />
        문의사항이 있으시면 고객센터로 연락바랍니다.
      </PageSubText>
    </PageTextGroup>

    <IllustObject type="complete" />

    <BasicHr
      theme="quaternary"
      type="contents"
      className="row-margin-container"
    />

    <div :class="$style['icon-list']">
      <ul :class="$style['icon-list__list']">
        <li :class="$style['icon-list__item']">
          <div :class="$style['icon-list__block']">
            <div :class="$style['icon-list__icon']"><IconCustomer /></div>
            <div :class="$style['icon-list__content']">
              <div :class="$style['icon-list__title']">고객센터</div>
              <div :class="$style['icon-list__text']">평일 09:00 ~ 19:00</div>
            </div>
            <BasicButton
              tagName="a"
              size="mini"
              :line="true"
              theme="quaternary"
              :classNames="{ wrap: $style['icon-list__button'] }"
              href="tel:1800-1110"
            >
              <template v-slot:leftIcon>
                <IconTell />
              </template>
              1800-1110
            </BasicButton>
          </div>
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
          <BasicButton>확인</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/inventoryFinance/InventoryFinanceEarlyComplete.scss';
</style>
