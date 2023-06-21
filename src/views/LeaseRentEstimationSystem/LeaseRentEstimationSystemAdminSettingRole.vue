<script>
// LR_M05_p009
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckObject from '@/components/ui/form/BoxCheckObject.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import DeleteButton from '@/components/ui/button/DeleteButton.vue';

export default {
  components: {
    PageContents,
    FormList,
    FormListItem,
    FormInvalid,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormInvalidMessage,
    BoxCheckList,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckObject,
    BoxCheckListItem,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicHr,
    BasicBox,
    DeleteButton,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      idError: false,
    });

    onMounted(() => {
      store.ui.header.setTitle(() => '관리 지정');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });

    return {
      state,
    };
  },
};
</script>

<template>
  <PageContents>
    <div>
      <FormList>
        <FormListItem
          titleText="아이디"
          target="#leaseRentEstimationSystemAdminSettingRoleId"
        >
          <FormInvalid :error="state.idError">
            <InputBlock :error="state.idError">
              <InputBlockCell :flexible="true">
                <BasicInput
                  title="아이디"
                  id="leaseRentEstimationSystemAdminSettingRoleId"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

      <BoxCheckList :wrap="true" :classNames="{ wrap: 'row-margin-contents' }">
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="checkbox"
            name="leaseRentEstimationSystemAdminSettingRoleBoxCheck"
            id="leaseRentEstimationSystemAdminSettingRoleBoxCheck001"
          >
            <template v-slot:left>
              <BoxCheckObject />
            </template>
            <BoxCheckLabel>관리자</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="checkbox"
            name="leaseRentEstimationSystemAdminSettingRoleBoxCheck"
            id="leaseRentEstimationSystemAdminSettingRoleBoxCheck002"
          >
            <template v-slot:left>
              <BoxCheckObject />
            </template>
            <BoxCheckLabel>선구매 등록</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="checkbox"
            name="leaseRentEstimationSystemAdminSettingRoleBoxCheck"
            id="leaseRentEstimationSystemAdminSettingRoleBoxCheck003"
          >
            <template v-slot:left>
              <BoxCheckObject />
            </template>
            <BoxCheckLabel>시승차 허용</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="checkbox"
            name="leaseRentEstimationSystemAdminSettingRoleBoxCheck"
            id="leaseRentEstimationSystemAdminSettingRoleBoxCheck004"
          >
            <template v-slot:left>
              <BoxCheckObject />
            </template>
            <BoxCheckLabel>선구매 제한</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="checkbox"
            name="leaseRentEstimationSystemAdminSettingRoleBoxCheck"
            id="leaseRentEstimationSystemAdminSettingRoleBoxCheck005"
          >
            <template v-slot:left>
              <BoxCheckObject />
            </template>
            <BoxCheckLabel>렌트 제한</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="checkbox"
            name="leaseRentEstimationSystemAdminSettingRoleBoxCheck"
            id="leaseRentEstimationSystemAdminSettingRoleBoxCheck006"
          >
            <template v-slot:left>
              <BoxCheckObject />
            </template>
            <BoxCheckLabel>리스 제한</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="checkbox"
            name="leaseRentEstimationSystemAdminSettingRoleBoxCheck"
            id="leaseRentEstimationSystemAdminSettingRoleBoxCheck007"
          >
            <template v-slot:left>
              <BoxCheckObject />
            </template>
            <BoxCheckLabel>할부 제한</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="checkbox"
            name="leaseRentEstimationSystemAdminSettingRoleBoxCheck"
            id="leaseRentEstimationSystemAdminSettingRoleBoxCheck008"
          >
            <template v-slot:left>
              <BoxCheckObject />
            </template>
            <BoxCheckLabel>중고리스 허용</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>
    </div>

    <ButtonList
      :classNames="{
        wrap: 'row-margin-container-medium',
      }"
    >
      <ButtonListItem>
        <BasicButton>권한 설정</BasicButton>
      </ButtonListItem>
    </ButtonList>

    <!-- Case : 권한 설정 선택시 리스트 노출 -->
    <div>
      <BasicHr className="row-margin-container-medium" />

      <section>
        <h3 class="text-title-2 row-margin-contents">등록된 권한 리스트</h3>

        <ul class="reset-list">
          <li v-for="i in 5" :key="i" class="row-margin-item-group">
            <BasicBox>
              <div class="flex-box row-margin-small">
                <div class="flex-box__cell flex-1">
                  <div class="text-body-1 font-weight-medium">A10000</div>
                </div>
                <div class="flex-box__cell flex-box__cell--small">
                  <DeleteButton />
                </div>
              </div>
              <div class="text-body-4">
                관리자 권한, 선구매 등록, 시승차 견적 허용, 중고 리스 허용
              </div>
            </BasicBox>
          </li>
        </ul>
      </section>
    </div>
    <!-- // Case : 권한 설정 선택시 리스트 노출 -->
  </PageContents>
</template>
