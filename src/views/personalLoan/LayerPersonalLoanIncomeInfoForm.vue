<script>
// PF_M01_l003
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicDatepicker from '@/components/ui/form/BasicDatepicker.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
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
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    FormList,
    FormListItem,
    FormHelpText,
    FormInvalid,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BasicDatepicker,
    FormInvalidMessage,
    ButtonList,
    ButtonListItem,
    BasicButton,
    NoticeText,
  },
  setup() {
    const state = reactive({
      workNameError: false,
      joiningDateError: false,
      workIncomeError: false,
      buisnessNameError: false,
      buisnessLicenseError: false,
      buisnessDateError: false,
      buisnessAddressError: false,
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
          <strong>
            소득정보를<br />
            입력해 주세요
          </strong>
        </PageMainText>
        <PageSubText>
          실제 정보와 상이할 경우 한도 및 금리가<br />
          달라질 수 있습니다.
        </PageSubText>
      </PageTextGroup>

      <FormList>
        <FormListItem titleText="소득구분" :forceFocus="true">
          <BoxCheckList>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerPersonalLoanIncomeInfoFormType"
                id="layerPersonalLoanIncomeInfoFormType001"
                :defaultChecked="true"
              >
                <BoxCheckLabel>급여소득자</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerPersonalLoanIncomeInfoFormType"
                id="layerPersonalLoanIncomeInfoFormType002"
              >
                <BoxCheckLabel>자영업자</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
            <BoxCheckListItem>
              <BoxCheck
                :minSide="true"
                name="layerPersonalLoanIncomeInfoFormType"
                id="layerPersonalLoanIncomeInfoFormType003"
              >
                <BoxCheckLabel>기타</BoxCheckLabel>
              </BoxCheck>
            </BoxCheckListItem>
          </BoxCheckList>
        </FormListItem>
      </FormList>

      <!-- Case : 급여소득자 선택 시 노출 -->
      <div class="row-margin-container-medium row-margin-bottom-none">
        <section>
          <!-- Case : 원큐자동차담보대출에서 공공마이데이터 정보 미출력 시, 문구 노출 -->
          <div class="row-margin-contents">
            <h3 class="text-title-2 row-margin-small">
              추가한도 입력정보
              <span :class="$style['sub']">(선택)</span>
            </h3>
            <p class="text-body-3 color-gray-tertiary font-weight-light">
              직장정보를 입력하면 한도를 높일 수 있습니다.
            </p>
          </div>
          <!-- // Case : 원큐자동차담보대출에서 공공마이데이터 정보 미출력 시, 문구 노출 -->

          <FormList>
            <FormListItem
              titleText="직장명"
              target="#layerPersonalLoanIncomeInfoFormWorkNameSearch"
            >
              <FormInvalid :error="state.workNameError">
                <InputBlock :error="state.workNameError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="직장명"
                      :disabled="true"
                      id="layerPersonalLoanIncomeInfoFormWorkName"
                    />
                  </InputBlockCell>
                  <template v-slot:right>
                    <BasicButton
                      size="mini"
                      theme="tertiary"
                      id="layerPersonalLoanIncomeInfoFormWorkNameSearch"
                      >직장 검색</BasicButton
                    >
                  </template>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="입사일"
              target="#layerPersonalLoanIncomeInfoFormJoiningDateButton"
            >
              <FormInvalid :error="state.joiningDateError">
                <InputBlock :error="state.joiningDateError">
                  <InputBlockCell :flexible="true">
                    <BasicDatepicker
                      title="입사일"
                      id="layerPersonalLoanIncomeInfoFormJoiningDate"
                      buttonId="layerPersonalLoanIncomeInfoFormJoiningDateButton"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="연소득"
              target="#layerPersonalLoanIncomeInfoFormWorkIncome"
            >
              <FormInvalid :error="state.workIncomeError">
                <InputBlock :error="state.workIncomeError">
                  <InputBlockCell :flexible="true">
                    <BasicInput
                      title="연소득"
                      id="layerPersonalLoanIncomeInfoFormWorkIncome"
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
              </FormInvalid>
            </FormListItem>
          </FormList>
        </section>
      </div>
      <!-- // Case : 급여소득자 선택 시 노출 -->

      <!-- Case : 자영업자 선택 시 노출 -->
      <div class="row-margin-contents row-margin-bottom-none">
        <FormList>
          <FormListItem
            titleText="상호명"
            target="#layerPersonalLoanIncomeInfoFormBuisnessName"
          >
            <FormInvalid :error="state.buisnessNameError">
              <InputBlock :error="state.buisnessNameError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="상호명"
                    id="layerPersonalLoanIncomeInfoFormBuisnessName"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="사업자번호"
            target="#layerPersonalLoanIncomeInfoFormBuisnessLicense"
          >
            <FormInvalid :error="state.buisnessLicenseError">
              <InputBlock :error="state.buisnessLicenseError">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="사업자번호"
                    id="layerPersonalLoanIncomeInfoFormBuisnessLicense"
                  />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton size="mini" theme="quaternary">확인</BasicButton>
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>‘-’를 제외하고 입력해주세요.</FormHelpText>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="사업개시일"
            target="#layerPersonalLoanIncomeInfoFormBuisnessDateButton"
          >
            <FormInvalid :error="state.buisnessDateError">
              <InputBlock :error="state.buisnessDateError">
                <InputBlockCell :flexible="true">
                  <BasicDatepicker
                    title="사업개시일"
                    id="layerPersonalLoanIncomeInfoFormBuisnessDate"
                    buttonId="layerPersonalLoanIncomeInfoFormBuisnessDateButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <!-- Case : 사업자 주택담보대출에서 진입 시, 노출 -->
          <FormListItem
            titleText="사업자주소"
            :forceFocus="true"
            target="#layerPersonalLoanIncomeInfoFormBuisnessAddressSearch"
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
                    id="layerPersonalLoanIncomeInfoFormBuisnessAddressSearch"
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
          <!-- // Case : 사업자 주택담보대출에서 진입 시, 노출 -->
        </FormList>
      </div>
      <!-- // Case : 자영업자 선택 시 노출 -->

      <!-- Case : 기타 선택 시 노출 -->
      <div class="row-margin-item-group row-margin-bottom-none">
        <NoticeText :classNames="{ wrap: 'row-margin-item-group' }">
          급여소득자, 자영업자가 아니어도 한도조회를 신청할 수 있습니다.
        </NoticeText>
      </div>
      <!-- // Case : 기타 선택 시 노출 -->

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

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/LayerPersonalLoanIncomeInfoForm.scss';
</style>
