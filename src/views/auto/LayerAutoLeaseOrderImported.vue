<script>
// AF_M02_l008
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    PageTextGroup,
    PageMainText,
    FormList,
    FormListItem,
    FormInvalid,
    InputBlock,
    InputBlockCell,
    BasicSelect,
    FormInvalidMessage,
    BasicInput,
    NoticeText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    FormHelpText,
  },
  setup() {
    const layer = ref(null);

    const state = reactive({
      importedDealerError: false,
      importedAgencyError: false,
      importedNameError: false,
      importedNumberError: false,
      importedAccountError: false,
      importedBankNameError: false,
    });

    return {
      layer,
      state,
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
          판매사 정보를<br />
          <strong>확인해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <section>
        <FormList>
          <FormListItem
            titleText="딜러사 (브랜드 : 현대)"
            target="#layerAutoLeaseOrderImportedDealerButton"
            :selectOnly="true"
          >
            <FormInvalid :error="state.importedDealerError">
              <InputBlock :error="state.importedDealerError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '한성자동차㈜',
                      },
                      {
                        value: '2',
                        text: '주식회사진모터스',
                      },
                      {
                        value: '3',
                        text: '중앙모터스㈜',
                      },
                      {
                        value: '4',
                        text: '교학모터스㈜',
                      },
                      {
                        value: '5',
                        text: '경남자동차판매㈜',
                      },
                    ]"
                    buttonTitle="딜러사를 선택해 주세요"
                    layerTitle="딜러사를 선택해 주세요"
                    id="layerAutoLeaseOrderImportedDealer"
                    buttonId="layerAutoLeaseOrderImportedDealerButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="전시장 (판매대리점)"
            target="#layerAutoLeaseOrderImportedAgencyButton"
            :selectOnly="true"
          >
            <FormInvalid :error="state.importedAgencyError">
              <InputBlock :error="state.importedAgencyError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '강남지점',
                      },
                      {
                        value: '2',
                        text: '서초지점',
                      },
                      {
                        value: '3',
                        text: '잠실지점',
                      },
                    ]"
                    buttonTitle="전시장(판매대리점)을 선택해 주세요"
                    layerTitle="전시장(판매대리점)을 선택해 주세요"
                    id="layerAutoLeaseOrderImportedAgency"
                    buttonId="layerAutoLeaseOrderImportedAgencyButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </section>

      <section class="row-margin-container-medium">
        <h3 class="text-title-2 row-margin-contents">카매니저 정보</h3>

        <FormList :classNames="{ wrap: 'row-margin-contents' }">
          <FormListItem
            titleText="이름"
            target="#layerAutoLeaseOrderImportedName"
          >
            <FormInvalid :error="state.importedNameError">
              <InputBlock :error="state.importedNameError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="이름"
                    id="layerAutoLeaseOrderImportedName"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="연락처"
            target="#layerAutoLeaseOrderImportedNumber"
          >
            <FormInvalid :error="state.importedNumberError">
              <InputBlock :error="state.importedNumberError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    title="연락처"
                    id="layerAutoLeaseOrderImportedNumber"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>

        <NoticeText>
          최종 차량가, 대금 송금계좌, 인도일 등의 필수 정보 확인을 위해 상사
          직원이 연락 예정입니다.
        </NoticeText>
        <NoticeText class="row-margin-item">
          카매니저에게 해당 내용 전달 부탁드립니다.
        </NoticeText>
      </section>

      <section>
        <h3 class="text-title-2 row-margin-contents">차량대금 송금 계좌</h3>

        <FormList :classNames="{ wrap: 'row-margin-contents' }">
          <!-- 은행사 셀렉트 추가 -->

          <FormListItem
            titleText="계좌번호"
            target="#layerAutoLeaseOrderImportedAccount"
          >
            <FormInvalid :error="state.importedAccountError">
              <InputBlock :error="state.importedAccountError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    id="layerAutoLeaseOrderImportedAccount"
                    type="number"
                  />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton size="mini" theme="tertiary">
                    계좌확인
                  </BasicButton>
                </template>
              </InputBlock>
              <FormInvalidMessage
                >계좌번호를 다시 입력해 주세요</FormInvalidMessage
              >
              <FormHelpText>-없이 숫자만 입력</FormHelpText>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="예금주명"
            target="#layerAutoLeaseOrderImportedBankName"
          >
            <FormInvalid :error="state.importedBankNameError">
              <InputBlock :error="state.importedBankNameError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="예금주명"
                    id="layerAutoLeaseOrderImportedBankName"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>

        <NoticeText>딜러사 계좌를 꼭 확인해야 오 입금이 안됩니다.</NoticeText>
      </section>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton theme="secondary">저장</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
