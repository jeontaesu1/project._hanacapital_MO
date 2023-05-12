<script>
// PF_M09_l002
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    PageTextGroup,
    PageMainText,
    PageSubText,
    NavTab,
    NavTabButton,
    StickyBar,
    UiTabPanel,
    UiTab,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    FormHelpText,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    TextButton,
    BasicBox,
    NoticeText,
  },
  setup() {
    const state = reactive({
      setAmountError001: false,
      limitAmountError001: false,
      buisnessNameError: false,
      buisnessLicenseError: false,
      buisnessAddressError: false,
      setAmountError002: false,
      limitAmountError002: false,
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
      </template>

      <PageTextGroup>
        <PageMainText>
          <strong>대출정보를</strong><br />
          입력해주세요
        </PageMainText>
        <PageSubText>
          실제 정보와 상이할 경우<br />
          한도 및 금리가 달라질 수 있습니다.
        </PageSubText>
      </PageTextGroup>

      <UiTab>
        <StickyBar>
          <NavTab :useUiTab="true" auto="true">
            <NavTabButton link="layerPersonalLoanBusinessHouseFormTab001">
              자영업자
            </NavTabButton>
            <NavTabButton link="layerPersonalLoanBusinessHouseFormTab002">
              기타
            </NavTabButton>
          </NavTab>
        </StickyBar>

        <!-- Tab : 자영업자 -->
        <UiTabPanel name="layerPersonalLoanBusinessHouseFormTab001">
          <FormList>
            <FormListItem titleText="아파트 정보" :forceFocus="true">
              <BasicButton :line="true">아파트 검색</BasicButton>

              <!-- DD : 아파트 검색 완료 후 노출 -->
              <BasicBox
                className="row-margin-item-group row-margin-bottom-none"
              >
                <p class="text-body-3">
                  인천광역시 연수구 송도동 39-1<br />
                  더샵 랜드마크시티 [158.67/134.3㎡]
                </p>
              </BasicBox>
              <!-- // DD : 아파트 검색 완료 후 노출 -->

              <NoticeText :classNames="{ wrap: 'row-margin-item' }">
                본인 소유 또는 배우자 공동 소유만 대출 진행이 가능합니다.
              </NoticeText>

              <CheckBox
                id="layerPersonalLoanBusinessHouseFormCheck001"
                theme="tertiary"
              >
                <CheckBoxObject />
                <CheckBoxLabelText>소유지 거주중</CheckBoxLabelText>
              </CheckBox>
            </FormListItem>

            <FormListItem
              titleText="부동산 설정금액"
              titleOptionalText="(필수)"
              target="#layerPersonalLoanBusinessHouseFormSetAmount001"
            >
              <FormInvalid :error="state.setAmountError001">
                <InputBlock :error="state.setAmountError001">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      id="layerPersonalLoanBusinessHouseFormSetAmount001"
                      pattern="\d*"
                      title="부동산 설정금액 (필수)"
                      :useDelete="false"
                      align="right"
                    />
                  </InputBlockCell>
                  <template v-slot:innerRight>
                    <div class="text-body-3">만원</div>
                  </template>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
                <!-- Case : 값 입력후 노출 -->
                <FormHelpText
                  :classNames="{
                    wrap: 'align-right',
                  }"
                  >일억원</FormHelpText
                >
                <!-- // Case : 값 입력후 노출 -->
                <div class="flex-box align-items-start row-margin-item">
                  <div class="flex-box__cell flex-1">
                    <NoticeText>
                      금액 확인이 필요한 경우,
                      <span class="color-black">[등기부등본 조회]</span> 버튼
                      클릭 후, 조회된 금액을 입력해 주세요. 등기부등본 미조회 시
                      다음단계 신청이 불가합니다.
                    </NoticeText>
                  </div>
                  <div class="flex-box__cell flex-box__cell--medium">
                    <TextButton
                      theme="secondary"
                      :underline="true"
                      :block="true"
                    >
                      등기부등본 조회
                    </TextButton>
                  </div>
                </div>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="희망한도"
              target="#layerPersonalLoanBusinessHouseFormLimitAmount001"
            >
              <FormInvalid :error="state.limitAmountError001">
                <InputBlock :error="state.limitAmountError001">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="희망한도"
                      id="layerPersonalLoanBusinessHouseFormLimitAmount001"
                      pattern="\d*"
                      :useDelete="false"
                      align="right"
                    />
                  </InputBlockCell>
                  <template v-slot:innerRight>
                    <div class="text-body-3">만원</div>
                  </template>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
                <!-- Case : 값 입력후 노출 -->
                <FormHelpText
                  :classNames="{
                    wrap: 'align-right',
                  }"
                  >일억원</FormHelpText
                >
                <!-- // Case : 값 입력후 노출 -->
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="상호명"
              target="#layerPersonalLoanBusinessHouseFormBuisnessName"
            >
              <FormInvalid :error="state.buisnessNameError">
                <InputBlock :error="state.buisnessNameError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="상호명"
                      id="layerPersonalLoanBusinessHouseFormBuisnessName"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
                <FormHelpText>사업장 상호를 입력해주세요.</FormHelpText>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="사업자번호"
              target="#layerPersonalLoanBusinessHouseFormBuisnessLicense"
            >
              <FormInvalid :error="state.buisnessLicenseError">
                <InputBlock :error="state.buisnessLicenseError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      pattern="\d*"
                      title="사업자번호"
                      id="layerPersonalLoanBusinessHouseFormBuisnessLicense"
                    />
                  </InputBlockCell>
                  <template v-slot:right>
                    <BasicButton size="mini" theme="quaternary"
                      >확인</BasicButton
                    >
                  </template>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
                <FormHelpText>‘-’를 제외하고 입력해주세요.</FormHelpText>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="사업자주소"
              :forceFocus="true"
              target="#layerPersonalLoanBusinessHouseFormBuisnessAddressSearch"
            >
              <FormInvalid :error="state.buisnessAddressError">
                <InputBlock :error="state.buisnessAddressError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="사업자주소 우편번호"
                      :disabled="true"
                      defaultValue="01000"
                    />
                  </InputBlockCell>
                  <template v-slot:right>
                    <BasicButton
                      size="mini"
                      theme="tertiary"
                      id="layerPersonalLoanBusinessHouseFormBuisnessAddressSearch"
                      >검색</BasicButton
                    >
                  </template>
                </InputBlock>
                <!-- DD : 주소 검색 및 입력 후 노출 -->
                <InputBlock
                  :error="state.buisnessAddressError"
                  :classNames="{
                    wrap: 'row-margin-item-group row-margin-bottom-none',
                  }"
                >
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="사업자주소 도로명 주소"
                      :disabled="true"
                      defaultValue="인천 서구 에코로 181"
                    />
                  </InputBlockCell>
                </InputBlock>
                <InputBlock
                  :error="state.buisnessAddressError"
                  :classNames="{
                    wrap: 'row-margin-item-group row-margin-bottom-none',
                  }"
                >
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="사업자주소 상세 주소"
                      :disabled="true"
                      defaultValue="하나금융 로비"
                    />
                  </InputBlockCell>
                </InputBlock>
                <!-- // DD : 주소 검색 및 입력 후 노출 -->
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>
        </UiTabPanel>
        <!-- // Tab : 자영업자 -->

        <!-- Tab : 기타 -->
        <UiTabPanel name="layerPersonalLoanBusinessHouseFormTab002">
          <FormList>
            <FormListItem titleText="아파트 정보" :forceFocus="true">
              <BasicButton :line="true">아파트 검색</BasicButton>

              <!-- DD : 아파트 검색 완료 후 노출 -->
              <BasicBox
                className="row-margin-item-group row-margin-bottom-none"
              >
                <p class="text-body-3">
                  인천광역시 연수구 송도동 39-1<br />
                  더샵 랜드마크시티 [158.67/134.3㎡]
                </p>
              </BasicBox>
              <!-- // DD : 아파트 검색 완료 후 노출 -->

              <NoticeText :classNames="{ wrap: 'row-margin-item' }">
                본인 소유 또는 배우자 공동 소유만 대출 진행이 가능합니다.
              </NoticeText>

              <CheckBox
                id="layerPersonalLoanBusinessHouseFormCheck002"
                theme="tertiary"
              >
                <CheckBoxObject />
                <CheckBoxLabelText>소유지 거주중</CheckBoxLabelText>
              </CheckBox>
            </FormListItem>

            <FormListItem
              titleText="부동산 설정금액"
              titleOptionalText="(필수)"
              target="#layerPersonalLoanBusinessHouseFormSetAmount002"
            >
              <FormInvalid :error="state.setAmountError002">
                <InputBlock :error="state.setAmountError002">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      id="layerPersonalLoanBusinessHouseFormSetAmount002"
                      pattern="\d*"
                      title="부동산 설정금액 (필수)"
                      :useDelete="false"
                      align="right"
                    />
                  </InputBlockCell>
                  <template v-slot:innerRight>
                    <div class="text-body-3">만원</div>
                  </template>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
                <!-- Case : 값 입력후 노출 -->
                <FormHelpText
                  :classNames="{
                    wrap: 'align-right',
                  }"
                  >일억원</FormHelpText
                >
                <!-- // Case : 값 입력후 노출 -->
                <div class="flex-box align-items-start row-margin-item">
                  <div class="flex-box__cell flex-1">
                    <NoticeText :classNames="{ wrap: 'row-margin-item' }">
                      금액 확인이 필요한 경우,
                      <span class="color-black">[등기부등본 조회]</span> 버튼
                      클릭 후, 조회된 금액을 입력해 주세요. 등기부등본 미조회 시
                      다음단계 신청이 불가합니다.
                    </NoticeText>
                  </div>
                  <div class="flex-box__cell flex-box__cell--medium">
                    <TextButton
                      theme="secondary"
                      :underline="true"
                      :block="true"
                    >
                      등기부등본 조회
                    </TextButton>
                  </div>
                </div>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="희망한도"
              target="#layerPersonalLoanBusinessHouseFormLimitAmount002"
            >
              <FormInvalid :error="state.limitAmountError002">
                <InputBlock :error="state.limitAmountError002">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="희망한도"
                      id="layerPersonalLoanBusinessHouseFormLimitAmount002"
                      pattern="\d*"
                      :useDelete="false"
                      align="right"
                    />
                  </InputBlockCell>
                  <template v-slot:innerRight>
                    <div class="text-body-3">만원</div>
                  </template>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
                <!-- Case : 값 입력후 노출 -->
                <FormHelpText
                  :classNames="{
                    wrap: 'align-right',
                  }"
                  >일억원</FormHelpText
                >
                <!-- // Case : 값 입력후 노출 -->
              </FormInvalid>
            </FormListItem>
          </FormList>
        </UiTabPanel>
        <!-- // Tab : 기타 -->
      </UiTab>

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
            <BasicButton>확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>
