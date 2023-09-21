<script>
// Company_M08_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    ButtonList,
    ButtonListItem,
    BasicButton,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '회사소개');
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
        모두의 기쁨 그 하나를 위하여<br />
        하나캐피탈은<br />
        오늘도 한걸음 더 뛰겠습니다
      </PageMainText>
    </PageTextGroup>

    <div>
      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-small">회사소개</h3>
        <p class="text-body-3 color-gray-tertiary font-weight-light">
          새로운 가치를 Value Network<br />
          저희가 당신의 미래를 함께 열어가겠습니다.
        </p>

        <ButtonList :wrap="true" :classNames="{ wrap: 'row-margin-contents' }">
          <ButtonListItem>
            <BasicButton
              size="small"
              theme="quaternary"
              tagName="RouterLink"
              to="/company/ceo"
            >
              CEO 인사말
            </BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton
              size="small"
              theme="quaternary"
              tagName="RouterLink"
              to="/company/history"
              >연혁</BasicButton
            >
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton
              size="small"
              theme="quaternary"
              tagName="RouterLink"
              to="/company/business-areas"
              >사업분야</BasicButton
            >
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton
              size="small"
              theme="quaternary"
              tagName="RouterLink"
              to="/company/ir-list"
              >IR 정보</BasicButton
            >
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton
              size="small"
              theme="quaternary"
              tagName="RouterLink"
              to="/company/sustainable-management-list"
            >
              지속가능경영
            </BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton
              size="small"
              theme="quaternary"
              tagName="RouterLink"
              to="/company/group"
            >
              하나금융그룹
            </BasicButton>
          </ButtonListItem>
        </ButtonList>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-small">윤리경영</h3>
        <p class="text-body-3 color-gray-tertiary font-weight-light">
          함께 성장하며 행복을 나누는 금융을 실현하기 위해 윤리적 가치를
          최우선으로 합니다.
        </p>

        <ButtonList :wrap="true" :classNames="{ wrap: 'row-margin-contents' }">
          <ButtonListItem>
            <BasicButton
              size="small"
              theme="quaternary"
              tagName="RouterLink"
              to="/company/ethics-charter"
              >윤리현장</BasicButton
            >
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton
              size="small"
              theme="quaternary"
              tagName="RouterLink"
              to="/company/ethics-code"
              >윤리강령</BasicButton
            >
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton
              size="small"
              theme="quaternary"
              tagName="RouterLink"
              to="/company/human-rights-declaration"
            >
              인권선언문
            </BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton
              size="small"
              theme="quaternary"
              tagName="RouterLink"
              to="/company/human-rights-declaration-structure"
            >
              인권선언문 구성체계
            </BasicButton>
          </ButtonListItem>
        </ButtonList>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-small">채용정보</h3>
        <p class="text-body-3 color-gray-tertiary font-weight-light">
          미래를 함께 개척할 인재를 위해 항상 문은 열려있습니다.
        </p>

        <ButtonList :wrap="true" :classNames="{ wrap: 'row-margin-contents' }">
          <ButtonListItem>
            <BasicButton
              size="small"
              theme="quaternary"
              tagName="RouterLink"
              to="/company/recruit-guide"
              >채용안내</BasicButton
            >
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton
              size="small"
              theme="quaternary"
              tagName="RouterLink"
              to="/company/personnel-welfare"
            >
              인사/복리후생
            </BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton
              size="small"
              theme="quaternary"
              tagName="RouterLink"
              to="/company/recruit-list"
              >채용공고</BasicButton
            >
          </ButtonListItem>
        </ButtonList>
      </section>
    </div>
  </PageContents>
</template>
