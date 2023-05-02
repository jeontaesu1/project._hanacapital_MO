<script>
// MI_M01_p002
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import LinkGreen from '@/assets/images/icon/link-green.svg?component';

export default {
  components: {
    PageContents,
    BasicBox,
    TextButton,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    LinkGreen,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '내정보 변경');
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
      <div class="flex-box row-margin-contents">
        <div class="flex-box__cell flex-1">
          <h3 class="text-title-2">청구정보</h3>
        </div>
        <div class="flex-box__cell">
          <TextButton theme="secondary">
            <span class="text-body-4">변경</span>
            <template v-slot:rightIcon>
              <LinkGreen />
            </template>
          </TextButton>
        </div>
      </div>

      <BasicBox>
        <KeyValue margin="regular">
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>등본지</KeyValueTitle>
            <KeyValueText>
              12345<br />
              경기 성남시 분당구 중앙공원로<br />
              20 하나아파트 853동 4590호
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>실거주지</KeyValueTitle>
            <KeyValueText>
              12345<br />
              경기 성남시 분당구 중앙공원로<br />
              20 하나아파트 853동 4590호
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>직장주소</KeyValueTitle>
            <KeyValueText>
              12345<br />
              경기 성남시 분당구 중앙공원로<br />
              20 하나아파트 853동 4590호
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>기타주소1</KeyValueTitle>
            <KeyValueText>
              12345<br />
              경기 성남시 분당구 중앙공원로<br />
              20 하나아파트 853동 4590호
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>기타주소2</KeyValueTitle>
            <KeyValueText>
              12345<br />
              경기 성남시 분당구 중앙공원로<br />
              20 하나아파트 853동 4590호
            </KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>이메일</KeyValueTitle>
            <KeyValueText>hana@test.com</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>
    </section>

    <section class="row-margin-container-medium">
      <div class="flex-box row-margin-contents">
        <div class="flex-box__cell flex-1">
          <h3 class="text-title-2">연락처 정보</h3>
        </div>
        <div class="flex-box__cell">
          <TextButton theme="secondary">
            <span class="text-body-4">변경</span>
            <template v-slot:rightIcon>
              <LinkGreen />
            </template>
          </TextButton>
        </div>
      </div>

      <BasicBox>
        <KeyValue margin="regular">
          <!-- Case: 개인회원일 경우 노출 -->
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>휴대전화</KeyValueTitle>
            <KeyValueText>010-1234-5678</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>자택전화</KeyValueTitle>
            <KeyValueText>031-123-4567</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>직장전화</KeyValueTitle>
            <KeyValueText>02-123-4567</KeyValueText>
          </KeyValueItem>
          <!-- // Case: 개인 회원일 경우 노출 -->

          <!-- Case: 개인사업자/법인 회원일 경우 노출 -->
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>대표자 사무실</KeyValueTitle>
            <KeyValueText>02-123-4567</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>대표자 휴대전화</KeyValueTitle>
            <KeyValueText>010-1234-5678</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>담당자1 사무실</KeyValueTitle>
            <KeyValueText>02-123-4567</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>담당자1 휴대전화</KeyValueTitle>
            <KeyValueText>010-1234-5678</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>담당자2 사무실</KeyValueTitle>
            <KeyValueText>02-123-4567</KeyValueText>
          </KeyValueItem>

          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>담당자2 휴대전화</KeyValueTitle>
            <KeyValueText>010-1234-5678</KeyValueText>
          </KeyValueItem>
          <!-- // Case: 개인사업자/법인 회원일 경우 노출 -->
        </KeyValue>
      </BasicBox>
    </section>
  </PageContents>
</template>
