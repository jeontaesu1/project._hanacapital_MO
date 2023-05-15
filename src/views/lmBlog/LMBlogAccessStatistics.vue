<script>
// LM_M04_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

export default {
  components: {
    PageContents,
    FormList,
    FormListItem,
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

    onMounted(() => {
      store.ui.header.setTitle(() => '접속통계');
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
        titleText="통계년도"
        target="#lmBlogAccessStatisticsYearButton"
        forceFocus="true"
      >
        <InputBlock>
          <InputBlockCell :flexible="true">
            <BasicSelect
              :option="[
                {
                  value: '1',
                  text: '2022',
                },
                {
                  value: '2',
                  text: '2021',
                },
                {
                  value: '3',
                  text: '2020',
                },
                {
                  value: '4',
                  text: '2019',
                },
                {
                  value: '5',
                  text: '2018',
                },
                {
                  value: '6',
                  text: '2017',
                },
              ]"
              buttonTitle="통계년도 선택하기"
              layerTitle="통계년도를 선택해 주세요"
              id="lmBlogAccessStatisticsYear"
              buttonId="lmBlogAccessStatisticsYearButton"
              defaultValue="1"
            />
          </InputBlockCell>
        </InputBlock>
      </FormListItem>
    </FormList>

    <BasicHr className="row-margin-container-medium" />

    <!-- table -->
    <div :class="$style['basic-table']">
      <table>
        <colgroup>
          <col style="width: 120px" />
          <col />
        </colgroup>
        <thead>
          <tr>
            <th>월</th>
            <th>방문자</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 12" :key="i">
            <td>{{ i }}</td>
            <td>11</td>
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
@import '@/assets/scss/views/lmBlog/LMBlogAccessStatistics.scss';
</style>
