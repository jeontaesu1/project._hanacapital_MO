<script>
// AF_M02_l005
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
/*
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import KeyValueList from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
*/
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    PageTextGroup,
    PageMainText,
    IllustObject,
    BasicHr,
    /*
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    KeyValueList,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    */
    ButtonList,
    ButtonListItem,
    BasicButton,
  },
  setup() {
    const layer = ref(null);

    return {
      layer,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="full" v-slot="layerSlotProps">
    <FullPopup>
      <template v-slot:head>
        <FullPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          김하나님, 요청하신 견적으로<br />
          <strong>진행이 어렵습니다</strong>
        </PageMainText>
      </PageTextGroup>

      <IllustObject type="fail" :classNames="{ wrap: $style['illust'] }" />

      <BasicHr
        type="contents"
        theme="quaternary"
        className="row-margin-container"
      />

      <PageTextGroup>
        <PageMainText>
          아래 조건으로<br />
          <strong>진행이 가능해요!</strong>
        </PageMainText>
      </PageTextGroup>

      <!--
      <BasicBox>
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <h3 class="text-body-2 font-weight-medium">
              승인조건으로 재견적 하기
            </h3>
          </BasicBoxHeadLeft>
          <BasicBoxHeadRight>
            <div class="inline-wrap">
              <TextButton
                iconSize="regular"
                :classNames="{ wrap: 'color-gray' }"
              >
                <template v-slot:rightIcon>
                  <IconArrow />
                </template>
              </TextButton>
            </div>
          </BasicBoxHeadRight>
        </BasicBoxHead>
        <KeyValueList>
          <KeyValueItem class="text-body-5">
            <KeyValueTitle>선납금 + 보증금</KeyValueTitle>
            <KeyValueText>20% (22,145,111원)</KeyValueText>
          </KeyValueItem>
        </KeyValueList>
      </BasicBox>
      -->

      <section :class="[$style['notice-section'], 'row-margin-contents-group']">
        <h3 :class="$style['notice-section__title']">진행방법</h3>
        <ol :class="$style['basic-list']">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']">1.</div>
            <div :class="$style['basic-list__content']">
              재견적하여 보증금 or 선수금을 더 넣어 본다.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']">2.</div>
            <div :class="$style['basic-list__content']">
              한도증액 신청을 하여 정밀심사를 진행한다.<br />
              <span class="color-blue"
                >(한도증액 신청은 별도 서류를 징구합니다.)</span
              >
            </div>
          </li>
        </ol>
      </section>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">다음에</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton theme="secondary">상담원 연결</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/auto/LayerAutoLeaseEvaluationFailLimit.scss';
</style>
