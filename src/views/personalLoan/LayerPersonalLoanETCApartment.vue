<script>
// PF_M11_l003
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
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
    PageSubText,
    BoxCheckList,
    BoxCheckListItem,
    BoxCheck,
    BoxCheckLabel,
    BasicBox,
    TextButton,
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
          입력한 정보에 따라<br />
          <strong>다양한 한도와 금리를 찾아드려요</strong>
        </PageMainText>
        <PageSubText>
          많은 정보를 입력할수록 좋은 조건이 제공됩니다.
        </PageSubText>
      </PageTextGroup>

      <section>
        <h3 class="text-body-2 font-weight-bold row-margin-item-medium">
          본인/배우자 공동명의 아파트
        </h3>
        <BoxCheckList>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="layerPersonalLoanETCApartmentCheck"
              id="layerPersonalLoanETCApartmentCheck001"
              :defaultChecked="true"
            >
              <BoxCheckLabel>있음</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="layerPersonalLoanETCApartmentCheck"
              id="layerPersonalLoanETCApartmentCheck002"
            >
              <BoxCheckLabel>없음</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>
      </section>

      <!-- Case: ‘있음’ 선택_아파트정보 수집된 경우 -->
      <BasicBox className="row-margin-item-group">
        <div class="flex-box">
          <div class="flex-box__cell flex-1">
            <p class="text-body-3">
              인천광역시 연수구 송도동 39-1<br />
              더샵 랜드마크시티 [158.67/134.3㎡]
            </p>

            <div class="flex-box text-body-5 row-margin-mini">
              <div class="flex-box__cell color-gray-secondary">
                부동산 설정 금액
              </div>
              <div class="flex-box__cell color-gray-tertiary">5,000만원</div>
            </div>
          </div>
          <TextButton
            :classNames="{ text: 'display-block color-gray' }"
            underline="true"
            >변경</TextButton
          >
        </div>
      </BasicBox>
      <!-- // Case: ‘있음’ 선택_아파트정보 수집된 경우 -->

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
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
