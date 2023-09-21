<script>
// MY_M03_l022(MY_M03_l022pa1)
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import CarThumb from '@/components/ui/imageData/CarThumb.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    PopupTitle,
    StepProgress,
    PageTextGroup,
    PageMainText,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    CarThumb,
    CarEmblem,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
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
          <PopupTitle>온라인약정</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
        <StepProgress :total="3" :current="1" />
      </template>

      <PageTextGroup>
        <PageMainText>
          <strong>
            약정 정보를<br />
            확인해 주세요
          </strong>
        </PageMainText>
      </PageTextGroup>

      <div>
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">차량정보</h3>

          <BasicBox>
            <BasicBoxHead>
              <BasicBoxHeadLeft>
                <div class="flex-box row-margin-mini">
                  <div class="flex-box__cell">
                    <CarEmblem
                      src="/images/_dummy/car-emblem.png"
                      name="현대"
                    />
                  </div>
                  <div class="flex-box__cell flex-box__cell--small">
                    <p class="text-body-4 font-weight-light">2020년식</p>
                  </div>
                </div>
                <h3 class="text-body-1 font-weight-medium">10나9999</h3>
                <p class="text-body-4 color-gray row-margin-small">
                  가솔린 1.0 에센셜
                </p>
              </BasicBoxHeadLeft>
              <BasicBoxHeadRight>
                <CarThumb src="/images/_dummy/car-thumb.png" />
              </BasicBoxHeadRight>
            </BasicBoxHead>
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>유종</KeyValueTitle>
                <KeyValueText>가솔린</KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>차대번호</KeyValueTitle>
                <KeyValueText>WAFDKSL123123</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">승계 신청 확약</h3>

          <ul class="reset-list">
            <li class="row-margin-item-group">
              <CheckBox
                id="layerMyLoanOnlineContractConfirm003CheckBox01"
                theme="tertiary"
                :classNames="{ wrap: 'color-gray-tertiary' }"
              >
                <CheckBoxObject />
                <CheckBoxLabelText>
                  <div class="color-black">포괄적 승계동의</div>
                  양도인(승계전 이용자)이 하나캐피탈에 부담하는 현재 및 장래의
                  모든 채무 및 렌트이용자의 지위를 포괄적으로 승계하기로 합니다.
                </CheckBoxLabelText>
              </CheckBox>
            </li>
            <li class="row-margin-item-group">
              <CheckBox
                id="layerMyLoanOnlineContractConfirm003CheckBox02"
                theme="tertiary"
                :classNames="{ wrap: 'color-gray-tertiary' }"
              >
                <CheckBoxObject />
                <CheckBoxLabelText>
                  <div class="color-black">범칙금/과태료제세공과금</div>
                  렌터카 계약일부터 승계완료시까지 상기 차량과 관련하여 발생한
                  범칙금/과태료, 기타비용 등에 대해서는 본인 책임하에 부담할
                  것을 확약합니다.
                </CheckBoxLabelText>
              </CheckBox>
            </li>
            <li class="row-margin-item-group">
              <CheckBox
                id="layerMyLoanOnlineContractConfirm003CheckBox03"
                theme="tertiary"
                :classNames="{ wrap: 'color-gray-tertiary' }"
              >
                <CheckBoxObject />
                <CheckBoxLabelText>
                  <div class="color-black">기타사항</div>
                  기타 예상하지 못한 사유로 인하여 차량의 인도가 이루어지지
                  아니하거나 지연되는 경우 또는 취소되는 경우에도 본인이 모든
                  책임을 부담할 것을 확약합니다.<br />
                  ※승계계약 취소 불가(청약철회대상 아님)
                </CheckBoxLabelText>
              </CheckBox>
            </li>
          </ul>
        </section>
      </div>

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
            <BasicButton>약정하기</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
