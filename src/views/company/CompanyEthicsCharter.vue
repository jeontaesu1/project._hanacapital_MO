<script>
// Company_M08_p010
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    BasicBox,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '하나캐피탈 캐릭터');
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
    <PageTextGroup class="pageGroup">
      <h2 class="character_title">
        하나캐피탈 캐릭터 <span class="color-green">'별웅이'</span>
      </h2>
      <PageMainText class="character_desc">
        하나캐피탈의 새로운 캐릭터
        <span class="color-green">'별웅이'</span>를<br />
        소개합니다.
      </PageMainText>
    </PageTextGroup>

    <section>
      <div class="character-wrap">
        <div class="character-img">
          <img src="@/assets/images/contents/character-1.png" alt="별웅이" />
        </div>
      </div>
      <div class="character-wrap">
        <p class="title">별웅이 응용동작</p>
        <div class="character-img img02">
          <img
            src="@/assets/images/contents/character-2.png"
            alt="별웅이 응용동작"
          />
        </div>
      </div>
    </section>
  </PageContents>
</template>

<style lang="scss" scoped>
.pageGroup {
  margin-bottom: 0;

  .character_title {
    font-size: 20px;
    line-height: 28px;
    font-weight: 500;
  }
  .character_desc {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
  }
}

.character-wrap {
  .title {
    font-size: 15px;
    font-weight: 700;
    margin: 0;
    margin-top: 24px;
  }
  .desc {
    font-size: 13px;
    font-weight: 300;
    line-height: 20px;
    margin-top: 12px;

    .color-green {
      font-weight: 500;
    }
  }
  .character-img {
    padding: 20px 39px;
    margin-top: 24px;
    border: 1px solid #eaeaea;
    border-radius: 8px;

    &.img02 {
      padding: 0;
    }
    img {
      display: block;
      max-width: 100%;
      height: auto;
      margin: 0 auto;
    }
  }
}
</style>
