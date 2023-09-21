<script>
// My_M05_l001
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    StepProgress,
    InputBlock,
    InputBlockCell,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    NoticeText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BasicBox,
    BasicSelect,
  },
  setup() {
    const state = reactive({
      reasonError: false,
      documentError: false,
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
  <UiLayer ref="layer" type="full" v-slot="layerSlotProps">
    <FullPopup>
      <template v-slot:head>
        <FullPopupHead>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
        <StepProgress :total="4" :current="1" />
      </template>

      <PageTextGroup>
        <PageMainText>
          <strong>
            신청 정보를<br />
            입력해 주세요
          </strong>
        </PageMainText>
      </PageTextGroup>

      <BasicBox>
        <h3 class="text-body-1 font-weight-medium row-margin-small">
          오토할부 20고5678
        </h3>
        <p class="text-body-5 color-gray font-weight-light row-margin-mini">
          벤츠 S-Class 세단 가솔린 3.0 S350 Long 자동
        </p>
      </BasicBox>

      <div class="row-margin-contents-group">
        <FormList>
          <FormListItem
            titleText="금리인하신청사유"
            target="#layerMyLoanInterestRateCutRequestFormReasonButton"
            :selectOnly="true"
          >
            <FormInvalid :error="state.reasonError">
              <InputBlock :error="state.reasonError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '소득증가',
                      },
                      {
                        value: '2',
                        text: '재산증가',
                      },
                      {
                        value: '3',
                        text: '기타 소득증가',
                      },
                      {
                        value: '4',
                        text: '신용평점(등급)개선',
                      },
                      {
                        value: '5',
                        text: '재무상태 개선',
                      },
                      {
                        value: '6',
                        text: '기타 신용도 상승',
                      },
                      {
                        value: '7',
                        text: '기타',
                      },
                    ]"
                    buttonTitle="금리인하신청 사유 선택하기"
                    layerTitle="금리인하신청 사유를 선택해 주세요"
                    id="layerMyLoanInterestRateCutRequestFormReason"
                    buttonId="layerMyLoanInterestRateCutRequestFormReasonButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="제출서류"
            target="#layerMyLoanInterestRateCutRequestFormDocumentButton"
            :selectOnly="true"
          >
            <FormInvalid :error="state.documentError">
              <InputBlock :error="state.documentError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '없음',
                      },
                      {
                        value: '2',
                        text: '제출서류명1',
                      },
                      {
                        value: '3',
                        text: '제출서류명1',
                      },
                    ]"
                    buttonTitle="제출서류를 선택하기"
                    layerTitle="제출서류를 선택해 주세요"
                    id="layerMyLoanInterestRateCutRequestFormDocument"
                    buttonId="layerMyLoanInterestRateCutRequestFormDocumentButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <div class="row-margin-item">
                <NoticeText :classNames="{ wrap: 'row-margin-item' }">
                  제출가능한 항목을 선택해 주세요.
                </NoticeText>
                <NoticeText :classNames="{ wrap: 'row-margin-item' }"
                  >당사는 신청인의 신용상태 개선을 확인하기 위해 추가서류를
                  요청할 수 있습니다.</NoticeText
                >
              </div>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </div>

      <BasicBox theme="tertiary">
        <p class="text-body-4 color-gray-secondary">
          본인은 상기 항목의 내용을 사실대로 기재하였고, 귀사의 신용평가시스템에
          따른 결과에 이의를 제기하지 않겠습니다.
        </p>
      </BasicBox>

      <p
        class="row-margin-item-group align-right text-body-4 font-weight-medium color-gray-secondary"
      >
        위 내역이 사실과 다름이 없음을 확인합니다.
      </p>
      <p class="align-right text-body-3 font-weight-light color-gray">
        2023년 01월 05일
      </p>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton :line="true" theme="quaternary">취소</BasicButton>
          </ButtonListItem>
          <ButtonListItem>
            <BasicButton>다음</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
