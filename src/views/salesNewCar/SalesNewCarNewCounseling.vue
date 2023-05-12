<script>
// NC_M02_p001
import { onMounted, onUnmounted, reactive } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import FormHelpText from '@/components/ui/form/FormHelpText.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import BasicTextarea from '@/components/ui/form/BasicTextarea.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    NavTab,
    NavTabButton,
    StickyBar,
    UiTabPanel,
    UiTab,
    FormList,
    FormListItem,
    FormInvalid,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormInvalidMessage,
    FormHelpText,
    BasicSelect,
    BasicTextarea,
    BoxCheckList,
    BoxCheckListItem,
    BoxCheck,
    BoxCheckLabel,
    ButtonList,
    ButtonListItem,
    BasicButton,
  },
  setup() {
    const state = reactive({
      nameError001: false,
      birthDateError001: false,
      phoneError001: false,
      yearError: false,
      memoError001: false,
      buisnessLicenseError001: false,
      corporateNameError001: false,
      nameError002: false,
      birthDateError002: false,
      dateError001: false,
      phoneError002: false,
      memoError002: false,
      buisnessLicenseError002: false,
      corporateNameError002: false,
      dateError002: false,
      businessNumberError001: false,
      nameError003: false,
      birthDateError003: false,
      relationError: false,
      phoneError003: false,
      memoError003: false,
    });

    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '신차모바일');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });

    return {
      state,
    };
  },
};
</script>

<template>
  <PageContents>
    <PageTextGroup>
      <PageMainText>
        손님 정보를<br />
        <strong>입력해 주세요</strong>
      </PageMainText>
    </PageTextGroup>

    <UiTab>
      <StickyBar>
        <NavTab :useUiTab="true" :auto="true">
          <NavTabButton link="salesNewCarNewCounselingTab001"
            >개인</NavTabButton
          >
          <NavTabButton link="salesNewCarNewCounselingTab002"
            >개인사업자</NavTabButton
          >
          <NavTabButton link="salesNewCarNewCounselingTab003"
            >법인사업자</NavTabButton
          >
        </NavTab>
      </StickyBar>

      <!-- Tab : 개인 -->
      <UiTabPanel name="salesNewCarNewCounselingTab001">
        <FormList>
          <FormListItem
            titleText="성명"
            target="#salesNewCarNewCounselingName001"
          >
            <FormInvalid :error="state.nameError001">
              <InputBlock :error="state.nameError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="성명"
                    id="salesNewCarNewCounselingName001"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="생년월일"
            target="#salesNewCarNewCounselingBirthDate001"
          >
            <FormInvalid :error="state.birthDateError001">
              <InputBlock :error="state.birthDateError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="생년월일"
                    id="salesNewCarNewCounselingBirthDate001"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>숫자만 입력해 주세요. (예:19900123)</FormHelpText>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="휴대폰번호"
            target="#salesNewCarNewCounselingPhone001"
          >
            <FormInvalid :error="state.phoneError001">
              <InputBlock :error="state.phoneError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="휴대폰번호"
                    id="salesNewCarNewCounselingPhone001"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>-없이 숫자만 입력해 주세요.</FormHelpText>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="근속/사업년수"
            target="#salesNewCarNewCounselingYearButton"
            :selectOnly="true"
          >
            <FormInvalid :error="state.yearError">
              <InputBlock :error="state.yearError">
                <InputBlockCell :flexible="true">
                  <BasicSelect
                    :option="[
                      {
                        value: '1',
                        text: '06개월 이하',
                      },
                      {
                        value: '2',
                        text: '01년 이하',
                      },
                      {
                        value: '3',
                        text: '02년 이하',
                      },
                      {
                        value: '4',
                        text: '03년 이하',
                      },
                      {
                        value: '5',
                        text: '04년 이하',
                      },
                      {
                        value: '6',
                        text: '05년 이하',
                      },
                      {
                        value: '7',
                        text: '06년 이하',
                      },
                      {
                        value: '8',
                        text: '07년 이하',
                      },
                      {
                        value: '9',
                        text: '08년 이하',
                      },
                      {
                        value: '10',
                        text: '09년 이하',
                      },
                      {
                        value: '11',
                        text: '10년 이하',
                      },
                      {
                        value: '12',
                        text: '10년 초과',
                      },
                      {
                        value: '13',
                        text: '무응답',
                      },
                    ]"
                    buttonTitle="근속년수 선택하기"
                    layerTitle="근속년수를 선택해 주세요"
                    id="salesNewCarNewCounselingYear"
                    buttonId="salesNewCarNewCounselingYearButton"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <BasicTextarea
            :error="state.memoError001"
            titleText="메모"
            titleOptionalText="(매매상사, 직원명, 연락처를 입력하세요.)"
            :maxlength="20"
            title="메모"
          >
            <template v-slot:bottom>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>최대 20자 이내로 입력해주세요.</FormHelpText>
            </template>
          </BasicTextarea>
        </FormList>

        <div class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">신용조회동의 요청</h3>

          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton theme="tertiary">ARS연결</BasicButton>
            </ButtonListItem>
            <ButtonListItem>
              <BasicButton theme="secondary">URL전송</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </UiTabPanel>
      <!-- // Tab : 개인 -->

      <!-- Tab : 개인사업자 -->
      <UiTabPanel name="salesNewCarNewCounselingTab002">
        <FormList>
          <FormListItem
            titleText="사업자번호"
            target="#salesNewCarNewCounselingBuisnessLicense001"
          >
            <FormInvalid :error="state.buisnessLicenseError001">
              <InputBlock :error="state.buisnessLicenseError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="사업자번호"
                    id="salesNewCarNewCounselingBuisnessLicense001"
                  />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton size="mini" theme="tertiary">조회</BasicButton>
                  <!-- Case : 사업자번호 조회 후 노출 -->
                  <BasicButton size="mini" theme="quaternary">
                    초기화
                  </BasicButton>
                  <!-- // Case : 사업자번호 조회 후 노출 -->
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>10자리 숫자만 입력해 주세요.</FormHelpText>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="회사명"
            target="#salesNewCarNewCounselingCorporateName001"
          >
            <FormInvalid :error="state.corporateNameError001">
              <InputBlock :error="state.corporateNameError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="회사명"
                    id="salesNewCarNewCounselingCorporateName001"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="대표자 이름"
            target="#salesNewCarNewCounselingName002"
          >
            <FormInvalid :error="state.nameError002">
              <InputBlock :error="state.nameError002">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="대표자 이름"
                    id="salesNewCarNewCounselingName002"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="대표자 생년월일"
            target="#salesNewCarNewCounselingBirthDate002"
          >
            <FormInvalid :error="state.birthDateError002">
              <InputBlock :error="state.birthDateError002">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="대표자 생년월일"
                    id="salesNewCarNewCounselingBirthDate002"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="설립일자"
            target="#salesNewCarNewCounselingDate001"
          >
            <FormInvalid :error="state.dateError001">
              <InputBlock :error="state.dateError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="설립일자"
                    id="salesNewCarNewCounselingDate001"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="대표자 휴대폰번호"
            target="#salesNewCarNewCounselingPhone002"
          >
            <FormInvalid :error="state.phoneError002">
              <InputBlock :error="state.phoneError002">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="대표자 휴대폰번호"
                    id="salesNewCarNewCounselingPhone002"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>-없이 숫자만 입력해 주세요.</FormHelpText>
            </FormInvalid>
          </FormListItem>

          <BasicTextarea
            :error="state.memoError002"
            titleText="메모"
            titleOptionalText="(매매상사, 직원명, 연락처를 입력하세요.)"
            :maxlength="20"
            title="메모"
          >
            <template v-slot:bottom>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>최대 20자 이내로 입력해주세요.</FormHelpText>
            </template>
          </BasicTextarea>
        </FormList>

        <div class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">신용조회동의 요청</h3>

          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton theme="tertiary">ARS연결</BasicButton>
            </ButtonListItem>
            <ButtonListItem>
              <BasicButton theme="secondary">URL전송</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </UiTabPanel>
      <!-- // Tab : 개인사업자 -->

      <!-- Tab : 법인사업자 -->
      <UiTabPanel name="salesNewCarNewCounselingTab003">
        <FormList>
          <FormListItem
            titleText="사업자번호"
            target="#salesNewCarNewCounselingBuisnessLicense002"
          >
            <FormInvalid :error="state.buisnessLicenseError002">
              <InputBlock :error="state.buisnessLicenseError002">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="사업자번호"
                    id="salesNewCarNewCounselingBuisnessLicense002"
                  />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton size="mini" theme="tertiary">조회</BasicButton>
                  <!-- Case : 사업자번호 조회 후 노출 -->
                  <BasicButton size="mini" theme="quaternary">
                    초기화
                  </BasicButton>
                  <!-- // Case : 사업자번호 조회 후 노출 -->
                </template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>10자리 숫자만 입력해 주세요.</FormHelpText>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="회사명"
            target="#salesNewCarNewCounselingCorporateName002"
          >
            <FormInvalid :error="state.corporateNameError002">
              <InputBlock :error="state.corporateNameError002">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="회사명"
                    id="salesNewCarNewCounselingCorporateName002"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="설립일자"
            target="#salesNewCarNewCounselingDate002"
          >
            <FormInvalid :error="state.dateError002">
              <InputBlock :error="state.dateError002">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="설립일자"
                    id="salesNewCarNewCounselingDate002"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="법인등록번호"
            target="#salesNewCarNewCounselingBusinessNumber001"
          >
            <FormInvalid :error="state.businessNumberError001">
              <InputBlock :error="state.businessNumberError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="법인등록번호"
                    id="salesNewCarNewCounselingBusinessNumber001"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="연대보증인 이름"
            target="#salesNewCarNewCounselingName003"
          >
            <FormInvalid :error="state.nameError003">
              <InputBlock :error="state.nameError003">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="연대보증인 이름"
                    id="salesNewCarNewCounselingName003"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="연대보증인 생년월일"
            target="#salesNewCarNewCounselingBirthDate003"
          >
            <FormInvalid :error="state.birthDateError003">
              <InputBlock :error="state.birthDateError003">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="연대보증인 생년월일"
                    id="salesNewCarNewCounselingBirthDate003"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>
                -없이 숫자만 입력해 주세요. (예:19900123)
              </FormHelpText>
            </FormInvalid>
          </FormListItem>

          <FormListItem titleText="관계" :forceFocus="true">
            <FormInvalid :error="state.relationError">
              <BoxCheckList>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="salesNewCarNewCounselingRelation"
                    id="salesNewCarNewCounselingRelation001"
                    :defaultChecked="true"
                  >
                    <BoxCheckLabel>대표자</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="salesNewCarNewCounselingRelation"
                    id="salesNewCarNewCounselingRelation002"
                  >
                    <BoxCheckLabel>과점주주</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
                <BoxCheckListItem>
                  <BoxCheck
                    :minSide="true"
                    name="salesNewCarNewCounselingRelation"
                    id="salesNewCarNewCounselingRelation003"
                  >
                    <BoxCheckLabel>배우자</BoxCheckLabel>
                  </BoxCheck>
                </BoxCheckListItem>
              </BoxCheckList>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>

          <FormListItem
            titleText="연대보증인 휴대폰번호"
            target="#salesNewCarNewCounselingPhone003"
          >
            <FormInvalid :error="state.phoneError003">
              <InputBlock :error="state.phoneError003">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    type="number"
                    pattern="\d*"
                    title="연대보증인 휴대폰번호"
                    id="salesNewCarNewCounselingPhone003"
                  />
                </InputBlockCell>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>-없이 숫자만 입력해 주세요.</FormHelpText>
            </FormInvalid>
          </FormListItem>

          <BasicTextarea
            :error="state.memoError003"
            titleText="메모"
            titleOptionalText="(매매상사, 직원명, 연락처를 입력하세요.)"
            :maxlength="20"
            title="메모"
          >
            <template v-slot:bottom>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
              <FormHelpText>최대 20자 이내로 입력해주세요.</FormHelpText>
            </template>
          </BasicTextarea>
        </FormList>

        <div class="row-margin-contents-group">
          <h3 class="text-body-2 row-margin-item-medium">신용조회동의 요청</h3>

          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton theme="tertiary">ARS연결</BasicButton>
            </ButtonListItem>
            <ButtonListItem>
              <BasicButton theme="secondary">URL전송</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </UiTabPanel>
      <!-- // Tab : 법인사업자 -->
    </UiTab>

    <template v-slot:foot>
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton :line="true" theme="quaternary">목록</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>
  </PageContents>
</template>
