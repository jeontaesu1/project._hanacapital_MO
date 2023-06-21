<script>
// LR_M05_p007
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import SwitchCheckBox from '@/components/ui/form/SwitchCheckBox.vue';

export default {
  components: {
    PageContents,
    BoxCheckList,
    BoxCheckListItem,
    BoxCheck,
    BoxCheckLabel,
    SwitchCheckBox,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '홈 설정');
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
    <section>
      <h3 class="text-title-2 row-margin-contents">홈 기본 화면</h3>

      <BoxCheckList>
        <BoxCheckListItem>
          <BoxCheck
            :minSide="true"
            name="leaseRentEstimationSystemAdminSettingHomeCheck"
            id="leaseRentEstimationSystemAdminSettingHomeCheck001"
            :defaultChecked="true"
          >
            <BoxCheckLabel>하나원큐오토</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :minSide="true"
            name="leaseRentEstimationSystemAdminSettingHomeCheck"
            id="leaseRentEstimationSystemAdminSettingHomeCheck002"
          >
            <BoxCheckLabel>국산차 할부</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :minSide="true"
            name="leaseRentEstimationSystemAdminSettingHomeCheck"
            id="leaseRentEstimationSystemAdminSettingHomeCheck003"
          >
            <BoxCheckLabel>중고 할부</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>
    </section>

    <section class="row-margin-container-medium">
      <div class="flex-box row-margin-contents">
        <div class="flex-box__cell">
          <h3 class="text-title-2">하단 메뉴 설정</h3>
        </div>
        <div class="flex-box__cell flex-box__cell--small">
          <div class="text-body-3">(1개 이상 필수)</div>
        </div>
      </div>

      <ul :class="$style['switch-list']">
        <li :class="$style['switch-list__item']">
          <div :class="$style['switch-list__title']">렌트</div>
          <div :class="$style['switch-list__right']">
            <SwitchCheckBox
              id="leaseRentEstimationSystemAdminSettingHome001"
              :classNames="{ wrap: $style['switch-list__check'] }"
            />
          </div>
        </li>
        <li :class="$style['switch-list__item']">
          <div :class="$style['switch-list__title']">신차 리스</div>
          <div :class="$style['switch-list__right']">
            <SwitchCheckBox
              id="leaseRentEstimationSystemAdminSettingHome002"
              :classNames="{ wrap: $style['switch-list__check'] }"
            />
          </div>
        </li>
        <li :class="$style['switch-list__item']">
          <div :class="$style['switch-list__title']">중고 리스</div>
          <div :class="$style['switch-list__right']">
            <SwitchCheckBox
              id="leaseRentEstimationSystemAdminSettingHome003"
              :classNames="{ wrap: $style['switch-list__check'] }"
            />
          </div>
        </li>
        <li :class="$style['switch-list__item']">
          <div :class="$style['switch-list__title']">국산 할부</div>
          <div :class="$style['switch-list__right']">
            <SwitchCheckBox
              id="leaseRentEstimationSystemAdminSettingHome004"
              :classNames="{ wrap: $style['switch-list__check'] }"
            />
          </div>
        </li>
        <li :class="$style['switch-list__item']">
          <div :class="$style['switch-list__title']">수입 할부</div>
          <div :class="$style['switch-list__right']">
            <SwitchCheckBox
              id="leaseRentEstimationSystemAdminSettingHome005"
              :classNames="{ wrap: $style['switch-list__check'] }"
            />
          </div>
        </li>
        <li :class="$style['switch-list__item']">
          <div :class="$style['switch-list__title']">중고 할부</div>
          <div :class="$style['switch-list__right']">
            <SwitchCheckBox
              id="leaseRentEstimationSystemAdminSettingHome006"
              :classNames="{ wrap: $style['switch-list__check'] }"
            />
          </div>
        </li>
      </ul>
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/LeaseRentEstimationSystem/LeaseRentEstimationSystemAdminSettingHome.scss';
</style>
