<script>
// LM_M04_p001
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

export default {
  components: {
    PageContents,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicSelect,
    InputBlock,
    InputBlockCell,
    BasicHr,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      testError001: false,
    });
    const testErrorUpdate001 = (val) => {
      state.testError001 = val;
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '접속통계');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => ['menu']);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });
    return {
      state,
      alert,
      testErrorUpdate001,
    };
  },
};
</script>

<template>
  <PageContents>
    <FormList>
      <FormListItem
        titleText="대출기간"
        target="#testInput010Button"
        :selectOnly="true"
      >
        <FormInvalid :error="state.testError001">
          <InputBlock :error="state.testError001">
            <InputBlockCell :flexible="true">
              <BasicSelect
                :option="[
                  {
                    value: '1',
                    text: '3개월',
                  },
                  {
                    value: '2',
                    text: '6개월',
                  },
                  {
                    value: '3',
                    text: '12개월',
                  },
                  {
                    value: '4',
                    text: '24개월',
                  },
                  {
                    value: '5',
                    text: '36개월',
                  },
                  {
                    value: '6',
                    text: '48개월',
                  },
                  {
                    value: '7',
                    text: '60개월',
                  },
                  {
                    value: '8',
                    text: '72개월',
                  },
                  {
                    value: '9',
                    text: '84개월',
                  },
                  {
                    value: '10',
                    text: '96개월',
                  },
                  {
                    value: '11',
                    text: '108개월',
                  },
                  {
                    value: '12',
                    text: '120개월',
                  },
                ]"
                buttonTitle="대출기간 선택하기"
                layerTitle="대출기간을 선택해 주세요"
                id="testInput010"
                buttonId="testInput010Button"
              />
            </InputBlockCell>
          </InputBlock>
          <FormInvalidMessage>Error Message</FormInvalidMessage>
        </FormInvalid>
      </FormListItem>
    </FormList>

    <BasicHr className="row-margin-container-medium" />

    <!-- table -->
    <div :class="$style['basic-table']">
      <table>
        <thead>
          <tr>
            <th>월</th>
            <th>방문자</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td :class="$style['monthly']">1</td>
            <td>1</td>
          </tr>
          <tr>
            <td :class="$style['monthly']">1</td>
            <td>1</td>
          </tr>
          <tr>
            <td :class="$style['monthly']">1</td>
            <td>1</td>
          </tr>
          <tr>
            <td :class="$style['monthly']">1</td>
            <td>1</td>
          </tr>
          <tr>
            <td :class="$style['monthly']">1</td>
            <td>1</td>
          </tr>
          <tr>
            <td :class="$style['monthly']">1</td>
            <td>1</td>
          </tr>
          <tr>
            <td :class="$style['monthly']">1</td>
            <td>1</td>
          </tr>
          <tr>
            <td :class="$style['monthly']">1</td>
            <td>1</td>
          </tr>
          <tr>
            <td :class="$style['monthly']">1</td>
            <td>1</td>
          </tr>
          <tr>
            <td :class="$style['monthly']">1</td>
            <td>1</td>
          </tr>
          <tr>
            <td :class="$style['monthly']">1</td>
            <td>1</td>
          </tr>
          <tr>
            <td :class="$style['monthly']">1</td>
            <td>1</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>합계</td>
            <td>1</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <!-- //table -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/lm-blog/LMBlogAccessStatistics.scss';
</style>
