<script>
// My_M03_b003
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import ToastPopup from '@/components/ui/layer/ToastPopup.vue';
import ToastPopupHead from '@/components/ui/layer/ToastPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';

export default {
  components: {
    UiLayer,
    ToastPopup,
    ToastPopupHead,
    PopupTitle,
    BasicButton,
    ButtonList,
    ButtonListItem,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BoxCheckList,
    BoxCheckListItem,
    BoxCheck,
    BoxCheckLabel,
  },
  setup() {
    const state = reactive({
      typeError: false,
    });

    const layer = ref(null);

    return {
      state,
      layer,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="toast" :backgroundClose="true">
    <ToastPopup>
      <template v-slot:head>
        <ToastPopupHead>
          <PopupTitle>추가설명을 받으시겠어요? </PopupTitle>
        </ToastPopupHead>
      </template>

      <p class="text-body-3 color-gray-tertiary row-margin-item-group">
        아래의 정보 수집은 금융소비자에 대한 적합한 구매 권유를 하기 위함입니다.
        귀하가 아래의 정보제공에 동의하시면 상품에 대한 불이익 사항을 다른
        정보보다 우선하여 설명 받을 수 있습니다.
      </p>

      <div>
        <BoxCheckList>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="layerMyLoanOnlineContractFurtherExplanationExplanation"
              id="layerMyLoanOnlineContractFurtherExplanationExplanation001"
            >
              <BoxCheckLabel>받음</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
          <BoxCheckListItem>
            <BoxCheck
              :minSide="true"
              name="layerMyLoanOnlineContractFurtherExplanationExplanation"
              id="layerMyLoanOnlineContractFurtherExplanationExplanation002"
              :defaultChecked="true"
            >
              <BoxCheckLabel>받지않음</BoxCheckLabel>
            </BoxCheck>
          </BoxCheckListItem>
        </BoxCheckList>

        <!-- Case: '받음' 선택 시 노출 -->
        <FormList :classNames="{ wrap: 'row-margin-contents-group' }">
          <FormListItem titleText="고객정보" :forceFocus="true">
            <FormInvalid :error="state.typeError">
              <BoxCheckList :wrap="true">
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="layerMyLoanOnlineContractFurtherExplanationType"
                    id="layerMyLoanOnlineContractFurtherExplanationType001"
                    :defaultChecked="true"
                  >
                    <BoxCheckLabel>65세 이상 고령층</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="layerMyLoanOnlineContractFurtherExplanationType"
                    id="layerMyLoanOnlineContractFurtherExplanationType002"
                  >
                    <BoxCheckLabel>은퇴자</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="layerMyLoanOnlineContractFurtherExplanationType"
                    id="layerMyLoanOnlineContractFurtherExplanationType003"
                  >
                    <BoxCheckLabel>주부</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="layerMyLoanOnlineContractFurtherExplanationType"
                    id="layerMyLoanOnlineContractFurtherExplanationType004"
                  >
                    <BoxCheckLabel>기타</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
        <!-- //Case: '받음' 선택 시 노출 -->
      </div>

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
    </ToastPopup>
  </UiLayer>
</template>
