<script>
import { onMounted, onUnmounted, reactive } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import TextButton from '@/components/ui/button/TextButton.vue';

import IconArrow from '@/assets/images/icon/dropdown.svg?component';

export default {
  components: {
    PageContents,
    InputBlock,
    InputBlockCell,
    BasicSelect,
    BasicInput,
    BasicHr,
    TextButton,

    IconArrow,
  },
  setup() {
    const state = reactive({
      noticeError: false,
      searchError: false,
    });

    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '공지사항');
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
    <InputBlock :error="state.noticeError">
      <InputBlockCell>
        <BasicSelect
          :option="[
            {
              value: '1',
              text: '전체',
            },
            {
              value: '2',
              text: '제목',
            },
            {
              value: '3',
              text: '내용',
            },
          ]"
          buttonTitle="검색 조건 선택하기"
          layerTitle="검색 조건을 선택해 주세요"
          id="CustomerNoticeList01"
          buttonId="CustomerNoticeListButton01"
          :classNames="{
            wrap: 'input-width-category',
          }"
          defaultValue="1"
        />
      </InputBlockCell>
      <InputBlockCell :flexible="true" margin="regular">
        <BasicInput title="검색" id="CustomerNoticeList02" />
      </InputBlockCell>
    </InputBlock>

    <BasicHr
      :class="$style['margin-top-medium']"
      className="row-margin-contents"
    />

    <div :class="$style['board']">
      <!-- case : 검색 결과 없을 때 -->
      <div :class="$style['empty']">
        <p :class="$style['empty__text']">검색된 결과가 없습니다.</p>
      </div>
      <!-- //case : 검색 결과 없을 때 -->

      <div :class="$style['board__list']">
        <div :class="$style['board__item']">
          <button type="button" :class="$style['board__link']">
            <div :class="$style['board__title']">
              <p :class="$style['board__title-text']">
                전화권유 상담원 현황전화권유 상담원 현황전화권유 상담원 현황
              </p>
            </div>
            <div :class="$style['board__text']">2022.10.25</div>
          </button>
        </div>
        <div :class="$style['board__item']">
          <button type="button" :class="$style['board__link']">
            <div :class="$style['board__title']">
              <p :class="$style['board__title-text']">전화권유 상담원 현황</p>
            </div>
            <div :class="$style['board__text']">2022.10.25</div>
          </button>
        </div>
        <div :class="$style['board__item']">
          <button type="button" :class="$style['board__link']">
            <div :class="$style['board__title']">
              <p :class="$style['board__title-text']">전화권유 상담원 현황</p>
            </div>
            <div :class="$style['board__text']">2022.10.25</div>
          </button>
        </div>
        <div :class="$style['board__item']">
          <button type="button" :class="$style['board__link']">
            <div :class="$style['board__title']">
              <p :class="$style['board__title-text']">전화권유 상담원 현황</p>
            </div>
            <div :class="$style['board__text']">2022.10.25</div>
          </button>
        </div>
        <div :class="$style['board__item']">
          <button type="button" :class="$style['board__link']">
            <div :class="$style['board__title']">
              <p :class="$style['board__title-text']">전화권유 상담원 현황</p>
            </div>
            <div :class="$style['board__text']">2022.10.25</div>
          </button>
        </div>
        <div :class="$style['board__item']">
          <button type="button" :class="$style['board__link']">
            <div :class="$style['board__title']">
              <p :class="$style['board__title-text']">전화권유 상담원 현황</p>
            </div>
            <div :class="$style['board__text']">2022.10.25</div>
          </button>
        </div>
        <div :class="$style['board__item']">
          <button type="button" :class="$style['board__link']">
            <div :class="$style['board__title']">
              <p :class="$style['board__title-text']">전화권유 상담원 현황</p>
            </div>
            <div :class="$style['board__text']">2022.10.25</div>
          </button>
        </div>
        <div :class="$style['board__item']">
          <button type="button" :class="$style['board__link']">
            <div :class="$style['board__title']">
              <p :class="$style['board__title-text']">전화권유 상담원 현황</p>
            </div>
            <div :class="$style['board__text']">2022.10.25</div>
          </button>
        </div>
        <div :class="$style['board__item']">
          <button type="button" :class="$style['board__link']">
            <div :class="$style['board__title']">
              <p :class="$style['board__title-text']">전화권유 상담원 현황</p>
            </div>
            <div :class="$style['board__text']">2022.10.25</div>
          </button>
        </div>
        <div :class="$style['board__item']">
          <button type="button" :class="$style['board__link']">
            <div :class="$style['board__title']">
              <p :class="$style['board__title-text']">전화권유 상담원 현황</p>
            </div>
            <div :class="$style['board__text']">2022.10.25</div>
          </button>
        </div>
      </div>

      <div :class="$style['board__bottom']">
        <div class="inline-wrap align-center row-margin-contents">
          <TextButton
            :classNames="{ wrap: 'text-body-4 color-gray' }"
            :iconFillAll="true"
          >
            더보기
            <template v-slot:rightIcon>
              <IconArrow />
            </template>
          </TextButton>
        </div>
      </div>
    </div>
  </PageContents>
</template>
<style lang="scss" module>
@import '@/assets/scss/views/customer/CustomerNoticeList.scss';
</style>
