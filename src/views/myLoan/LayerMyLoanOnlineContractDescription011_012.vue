<script>
// PF_M09_l005 연장 담보 내용확인
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
// import PageSubText from '@/components/ui/text/PageSubText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
// import NoticeText from '@/components/ui/text/NoticeText.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    // PageSubText,
    BasicHr,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    // NoticeText,
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
          연장하고자 하는 상품의<br />
          담보제공 내용을 확인해주세요
        </PageMainText>
      </PageTextGroup>

      <section>
        <BasicBox>
          <BasicBoxHead>
            <BasicBoxHeadLeft>
              <h3 class="text-body-1 font-weight-medium">
                개인사업자아파트담보대출
              </h3>
            </BasicBoxHeadLeft>
          </BasicBoxHead>

          <KeyValue>
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>대출번호</KeyValueTitle>
              <KeyValueText>123123123213원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>대출일자</KeyValueTitle>
              <KeyValueText>24.01.05</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>대출금액</KeyValueTitle>
              <KeyValueText>5,000,000원</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>만기일자</KeyValueTitle>
              <KeyValueText>25.01.05</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>채무자</KeyValueTitle>
              <KeyValueText>김하나</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>담보제공자(소유자)</KeyValueTitle>
              <KeyValueText>김둘</KeyValueText>
            </KeyValueItem>
          </KeyValue>
          <BasicHr
            theme="quaternary"
            type="contents"
            className="marginTopBottom"
          />
          <h5 class="BasicBox-subTitle">근저당권 설정 내역</h5>
          <KeyValue>
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>물건지 주소</KeyValueTitle>
              <KeyValueText>서울시 서초구 테헤란로<br />123123123</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>근저당권 종류</KeyValueTitle>
              <KeyValueText>한정근담보</KeyValueText>
            </KeyValueItem>

            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle>근저당권 결산기</KeyValueTitle>
              <KeyValueText>장래지정형</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
        <ul
          :class="[
            $style['basic-list'],
            $style['basic-list--regular'],
            $style['basic-list--large-margin'],
            'marginTop24',
          ]"
        >
          <li
            :class="[
              $style['basic-list__item'],
              'color-gray',
              'text-body-3',
              'font-weight-regular',
            ]"
          >
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              위 내용을 확인 하였습니다.
            </div>
          </li>
        </ul>
      </section>

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
@import '@/assets/scss/views/myLoan/LayerMyLoanOnlineContractDescription011_012.scss';
</style>

<style lang="scss" scoped>
.marginTop24 {
  margin-top: 24px;
}
.marginTopBottom {
  margin: 20px 0;
}
.BasicBox-subTitle {
  font-weight: 400;
  font-size: 15px;
}
</style>
