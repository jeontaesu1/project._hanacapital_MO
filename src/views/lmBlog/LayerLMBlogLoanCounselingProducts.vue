<script>
// LM_M01_l010
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    FullPopup,
    FullPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
    PageTextGroup,
    PageMainText,
    StepProgress,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
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
          <PopupTitle>대출상담</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
        <StepProgress :total="3" :current="3" />
      </template>

      <PageTextGroup>
        <PageMainText>
          <strong>신청할 상품을</strong><br />
          선택하세요
        </PageMainText>
      </PageTextGroup>

      <BoxCheckList align="full">
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            name="layerLMBlogLoanCounselingProducts"
            id="layerLMBlogLoanCounselingProducts001"
            :defaultChecked="true"
          >
            <BoxCheckLabel :classNames="{ label: 'row-margin-item' }"
              >아파트론</BoxCheckLabel
            >
            <KeyValue margin="mini">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>대출한도</KeyValueTitle>
                <KeyValueText>20,000만원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>금리</KeyValueTitle>
                <KeyValueText>
                  <span class="color-green">13.2%</span>
                </KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>신청대출기간</KeyValueTitle>
                <KeyValueText>
                  <span class="color-green">36개월</span>
                </KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>최대대출기간</KeyValueTitle>
                <KeyValueText>60개월</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BoxCheck>
        </BoxCheckListItem>

        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            name="layerLMBlogLoanCounselingProducts"
            id="layerLMBlogLoanCounselingProducts002"
          >
            <BoxCheckLabel :classNames="{ label: 'row-margin-item' }"
              >e하나신용대출</BoxCheckLabel
            >
            <KeyValue margin="mini">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>대출한도</KeyValueTitle>
                <KeyValueText>20,000만원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>금리</KeyValueTitle>
                <KeyValueText>
                  <span class="color-green">13.2%</span>
                </KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>신청대출기간</KeyValueTitle>
                <KeyValueText>
                  <span class="color-green">36개월</span>
                </KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>최대대출기간</KeyValueTitle>
                <KeyValueText>60개월</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BoxCheck>
        </BoxCheckListItem>

        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            name="layerLMBlogLoanCounselingProducts"
            id="layerLMBlogLoanCounselingProducts003"
          >
            <BoxCheckLabel :classNames="{ label: 'row-margin-item' }"
              >행복아파트론</BoxCheckLabel
            >
            <KeyValue margin="mini">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>대출한도</KeyValueTitle>
                <KeyValueText>20,000만원</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>금리</KeyValueTitle>
                <KeyValueText>
                  <span class="color-green">13.2%</span>
                </KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>신청대출기간</KeyValueTitle>
                <KeyValueText>
                  <span class="color-green">36개월</span>
                </KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-5',
                }"
              >
                <KeyValueTitle>최대대출기간</KeyValueTitle>
                <KeyValueText>60개월</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>

      <ul :class="[$style['basic-list'], 'row-margin-contents']">
        <li :class="[$style['basic-list__item']]">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            해당 금리는 신청대출기간 기준이며 대출기간 변경 시, 변경될 수
            있습니다.
          </div>
        </li>
      </ul>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/lm-blog/LayerLMBlogLoanCounselingProducts.scss';
</style>
