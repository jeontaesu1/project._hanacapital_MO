<script>
// AF_M02_l009
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
      nameError001: false,
      numberError001: false,
      accountError001: false,
      domesticError001: false,
      bankNameError001: false,
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
            titleText="판매대리점 (브랜드 : 현대)"
            target="#layerAutoLeaseOrderDomesticAgencyButton001"
            :selectOnly="true"
          >
            <FormInvalid :error="state.domesticError001">
              <InputBlock :error="state.domesticError001">
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
                    buttonTitle="판매대리점를 선택해 주세요"
                    layerTitle="판매대리점를 선택해 주세요"
                    id="layerAutoLeaseOrderDomesticAgency001"
                    buttonId="layerAutoLeaseOrderDomesticAgencyButton001"
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
            target="#layerAutoLeaseOrderDomesticName001"
          >
            <FormInvalid :error="state.nameError001">
              <InputBlock :error="state.nameError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="이름"
                    id="layerAutoLeaseOrderDomesticName001"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="연락처"
            target="#layerAutoLeaseOrderDomesticNumber001"
          >
            <FormInvalid :error="state.numberError001">
              <InputBlock :error="state.numberError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    title="연락처"
                    id="layerAutoLeaseOrderDomesticNumber001"
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
            target="#layerAutoLeaseOrderDomesticAccount001"
          >
            <FormInvalid :error="state.accountError001">
              <InputBlock :error="state.accountError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    id="layerAutoLeaseOrderDomesticAccount001"
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
            target="#layerAutoLeaseOrderDomesticBankName"
          >
            <FormInvalid :error="state.bankNameError001">
              <InputBlock :error="state.bankNameError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="예금주명"
                    id="layerAutoLeaseOrderDomesticBankName"
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
