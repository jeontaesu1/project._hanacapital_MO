<script>
// Customer_M08_p002
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';

export default {
  components: {
    PageContents,
    BasicHr,
    FormList,
    FormListItem,
    InputBlock,
    InputBlockCell,
    BasicSelect,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '정책 및 약관');
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
    <FormList>
      <FormListItem
        titleText="시행일 이력"
        target="#customerClauseDetailDateButton"
        :selectOnly="true"
      >
        <InputBlock>
          <InputBlockCell :flexible="true">
            <BasicSelect
              :option="[
                {
                  value: '1',
                  text: '2022.10.25',
                },
                {
                  value: '2',
                  text: '2022.04.17',
                },
                {
                  value: '3',
                  text: '2022.01.10',
                },
              ]"
              buttonTitle="시행일을 선택해 주세요"
              layerTitle="시행일을 선택해 주세요"
              id="customerClauseDetailDate"
              buttonId="customerClauseDetailDateButton"
              defaultValue="1"
            />
          </InputBlockCell>
        </InputBlock>
      </FormListItem>
    </FormList>

    <BasicHr className="row-margin-container-medium" />

    <div :class="$style['board-detail']">
      <div :class="$style['board-detail__head']">
        <h2 :class="$style['board-detail__title']">
          정책 및 약관 제목 노출 (글자수 제한 없음)
        </h2>
      </div>
      <section :class="$style['board-detail__contents']">
        정책 및 약관 내용 노출(글자수 제한 없음)
      </section>
    </div>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/CustomerClauseDetail.scss';
</style>
