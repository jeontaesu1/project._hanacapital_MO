<script>
// BF_M06_l003
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
    PageTextGroup,
    PageMainText,
    BoxCheck,
    BoxCheckLabel,
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
          상담을 원하시는 상품을<br />
          <strong>선택해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <!-- Case : 덴티움 -->
      <BoxCheckList align="full">
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="radio"
            name="BF_M06_l003_product_001"
            id="BF_M06_l003_product_001_001"
          >
            <BoxCheckLabel>임플란트</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>
      <!-- // Case : 덴티움 -->

      <!-- Case : 신흥 -->
      <BoxCheckList align="full">
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="radio"
            name="BF_M06_l003_product_002"
            id="BF_M06_l003_product_002_001"
          >
            <BoxCheckLabel>임플란트+체어</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="radio"
            name="BF_M06_l003_product_002"
            id="BF_M06_l003_product_002_002"
          >
            <BoxCheckLabel>임플란트</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>
      <!-- // Case : 신흥 -->

      <!-- Case : 네오바이오텍 -->
      <BoxCheckList align="full">
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="radio"
            name="BF_M06_l003_product_003"
            id="BF_M06_l003_product_003_001"
          >
            <BoxCheckLabel>임플란트+치과기공장비</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="radio"
            name="BF_M06_l003_product_003"
            id="BF_M06_l003_product_003_002"
          >
            <BoxCheckLabel>치기공소장비</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="radio"
            name="BF_M06_l003_product_003"
            id="BF_M06_l003_product_003_003"
          >
            <BoxCheckLabel>임플란트</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="radio"
            name="BF_M06_l003_product_003"
            id="BF_M06_l003_product_003_004"
          >
            <BoxCheckLabel>임플란트+체어</BoxCheckLabel>
            <div class="text-body-5 color-gray-secondary row-margin-small">
              부분이자
            </div>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>
      <!-- // Case : 네오바이오텍 -->

      <!-- Case : 네오임플란트 -->
      <BoxCheckList align="full">
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="radio"
            name="BF_M06_l003_product_004"
            id="BF_M06_l003_product_004_001"
          >
            <BoxCheckLabel>임플란트 10개월</BoxCheckLabel>
            <div class="text-body-5 color-gray-secondary row-margin-small">
              무이자
            </div>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="radio"
            name="BF_M06_l003_product_004"
            id="BF_M06_l003_product_004_002"
          >
            <BoxCheckLabel>임플란트 5개월</BoxCheckLabel>
            <div class="text-body-5 color-gray-secondary row-margin-small">
              무이자
            </div>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="radio"
            name="BF_M06_l003_product_004"
            id="BF_M06_l003_product_004_003"
          >
            <BoxCheckLabel>임플란트+체어</BoxCheckLabel>
            <div class="text-body-5 color-gray-secondary row-margin-small">
              부분이자24개월
            </div>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="radio"
            name="BF_M06_l003_product_004"
            id="BF_M06_l003_product_004_004"
          >
            <BoxCheckLabel>임플란트+체어</BoxCheckLabel>
            <div class="text-body-5 color-gray-secondary row-margin-small">
              부분이자36개월
            </div>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="radio"
            name="BF_M06_l003_product_004"
            id="BF_M06_l003_product_004_005"
          >
            <BoxCheckLabel>치과용체어+임플란트36개월</BoxCheckLabel>
            <div class="text-body-5 color-gray-secondary row-margin-small">
              유이자
            </div>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="radio"
            name="BF_M06_l003_product_004"
            id="BF_M06_l003_product_004_006"
          >
            <BoxCheckLabel>임플란트 20개월</BoxCheckLabel>
            <div class="text-body-5 color-gray-secondary row-margin-small">
              무이자
            </div>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="radio"
            name="BF_M06_l003_product_004"
            id="BF_M06_l003_product_004_007"
          >
            <BoxCheckLabel>임플란트15개월</BoxCheckLabel>
            <div class="text-body-5 color-gray-secondary row-margin-small">
              무이자
            </div>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="radio"
            name="BF_M06_l003_product_004"
            id="BF_M06_l003_product_004_008"
          >
            <BoxCheckLabel>임플란트12개월</BoxCheckLabel>
            <div class="text-body-5 color-gray-secondary row-margin-small">
              무이자
            </div>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="radio"
            name="BF_M06_l003_product_004"
            id="BF_M06_l003_product_004_009"
          >
            <BoxCheckLabel>임플란트+체어</BoxCheckLabel>
            <div class="text-body-5 color-gray-secondary row-margin-small">
              무이자 15개월
            </div>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>
      <!-- // Case : 네오임플란트 -->

      <!-- Case : 포인트닉스 -->
      <BoxCheckList align="full">
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="radio"
            name="BF_M06_l003_product_005"
            id="BF_M06_l003_product_005_001"
          >
            <BoxCheckLabel>임플란트</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>
      <!-- // Case : 포인트닉스 -->

      <!-- Case : 유비케어 -->
      <BoxCheckList align="full">
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="radio"
            name="BF_M06_l003_product_006"
            id="BF_M06_l003_product_006_001"
          >
            <BoxCheckLabel>병원용 키호스크 단말기</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>
      <!-- // Case : 유비케어 -->

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-contents-small',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">이전</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>다음</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
