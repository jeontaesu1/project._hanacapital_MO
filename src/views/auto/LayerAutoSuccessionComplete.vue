<script>
// AF_M07_l004
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import IllustObject from '@/components/ui/common/IllustObject.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckObject from '@/components/ui/form/BoxCheckObject.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    PageTextGroup,
    PageMainText,
    PageSubText,
    IllustObject,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckObject,
    BoxCheckList,
    BoxCheckListItem,
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
          승계 신청이<br />
          완료되었습니다
        </PageMainText>
        <PageSubText>
          승계 신청 URL을 발송하고 싶으시면,<br />
          아래 승계 동의 된 차량을 선택한 후<br />
          ‘승계 신청URL 전송’ 버튼을 선택해주세요.
        </PageSubText>
      </PageTextGroup>

      <IllustObject type="complete" />

      <section>
        <h3 class="text-title-2 row-margin-contents">승계 동의 차량</h3>

        <BoxCheckList align="full">
          <BoxCheckListItem>
            <BoxCheck
              :contents="true"
              type="checkbox"
              id="layerAutoSuccessionCompleteCheckList001"
            >
              <template v-slot:left>
                <BoxCheckObject />
              </template>
              <BoxCheckLabel>오토리스 111가 1111</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :contents="true"
              type="checkbox"
              id="layerAutoSuccessionCompleteCheckList002"
            >
              <template v-slot:left>
                <BoxCheckObject />
              </template>
              <BoxCheckLabel>오토리스 222나 2222</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :contents="true"
              type="checkbox"
              id="layerAutoSuccessionCompleteCheckList003"
            >
              <template v-slot:left>
                <BoxCheckObject />
              </template>
              <BoxCheckLabel>오토리스 333다3333</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :contents="true"
              type="checkbox"
              id="layerAutoSuccessionCompleteCheckList004"
            >
              <template v-slot:left>
                <BoxCheckObject />
              </template>
              <BoxCheckLabel>오토리스 11라4444</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>
      </section>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton :minSide="true" theme="tertiary">
              승계신청 URL 전송
            </BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
