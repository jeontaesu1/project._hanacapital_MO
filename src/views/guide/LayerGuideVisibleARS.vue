<script>
// Common_M00_l022
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    NoticeText,
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
          <strong>
            보이는 ARS서비스를 제공하기 위하여<br />
            고객님의 정보제공동의가 필요합니다
          </strong>
        </PageMainText>
      </PageTextGroup>

      <BasicBox>
        <KeyValue>
          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>제공되는 정보</KeyValueTitle>
            <KeyValueText> 휴대전화번호, 앱푸시ID </KeyValueText>
          </KeyValueItem>

          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>제공받는 자</KeyValueTitle>
            <KeyValueText>(주)콜게이트</KeyValueText>
          </KeyValueItem>

          <KeyValueItem :classNames="{ item: 'text-body-3' }">
            <KeyValueTitle>제공기간</KeyValueTitle>
            <KeyValueText> 동의 철회 시 또는 앱삭제시까지 </KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <p class="text-body-3 color-gray row-margin-contents">
        정보 제공 시 ‘보이는ARS’등 화면 서비스가 적용된<br />
        모든 콜센터에서 서비스가 제공되므로<br />
        이를 원하지 않으실 경우<br />
        동의를 하지 않으셔도 무방합니다.<br /><br />
        ‘보이는ARS’ 에서는 통화 중 화면서비스 이용을 위해 ‘다른 앱 위에 표시되는
        앱’ 권한 허용이 꼭 필요합니다.<br /><br />
        권한을 허용하지 않을 경우 통화 시에 필요한 화면 서비스가 제공되지
        않습니다.
      </p>

      <NoticeText
        >설정하기 선택 후 권한을 ON으로 설정하신 다음, 단말기의 이전 버튼을 눌러
        주세요.</NoticeText
      >

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
