<script>
// Dcer_M00_l001
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupTitle,
    PopupButton,
    PageTextGroup,
    PageMainText,
    ButtonList,
    ButtonListItem,
    BasicButton,
    UiTab,
    UiTabPanel,
    StickyBar,
    NavTab,
    NavTabButton,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BasicSelect,
    CheckBox,
    CheckBoxObject,
    CheckBoxLabelText,
    BasicBox,
    NoticeText,
  },
  setup() {
    const layer = ref(null);

    const state = reactive({
      tab001NameError: false,
      tab001LicenseError: false,
      tab001TypeError: false,
      tab002NameError: false,
      tab002LicenseError: false,
      tab002TypeError: false,
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
          <PopupTitle>운전자격 검증 요청</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          운전자격 검증을 위하여<br />
          아래 정보를 입력해 주세요
        </PageMainText>
      </PageTextGroup>

      <UiTab>
        <StickyBar>
          <NavTab :useUiTab="true">
            <NavTabButton link="Dcer_M00_l001Tab001">개인</NavTabButton>
            <NavTabButton link="Dcer_M00_l001Tab002">개인사업자</NavTabButton>
          </NavTab>
        </StickyBar>

        <UiTabPanel name="Dcer_M00_l001Tab001">
          <FormList>
            <FormListItem
              titleText="성명"
              target="#Dcer_M00_l001Tab001Name"
              :disabled="true"
            >
              <FormInvalid :error="state.tab001NameError">
                <InputBlock :error="state.tab001NameError">
                  <InputBlockCell :flexible="true" :disabled="true">
                    <BasicInput
                      title="성명"
                      id="Dcer_M00_l001Tab001Name"
                      defaultValue="김하나"
                      :disabled="true"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="운전면허번호"
              target="#Dcer_M00_l001Tab001License"
            >
              <FormInvalid :error="state.tab001LicenseError">
                <InputBlock :error="state.tab001LicenseError">
                  <InputBlockCell>
                    <BasicSelect
                      :option="[
                        {
                          value: '1',
                          text: '서울 (11)',
                        },
                        {
                          value: '2',
                          text: '부산 (12)',
                        },
                        {
                          value: '3',
                          text: '경기 (13)',
                        },
                        {
                          value: '4',
                          text: '강원 (14)',
                        },
                        {
                          value: '5',
                          text: '충북 (15)',
                        },
                        {
                          value: '6',
                          text: '충남 (16)',
                        },
                        {
                          value: '7',
                          text: '전북 (17)',
                        },
                        {
                          value: '8',
                          text: '경남 (18)',
                        },
                        {
                          value: '9',
                          text: '제주 (19)',
                        },
                        {
                          value: '10',
                          text: '대구 (20)',
                        },
                        {
                          value: '11',
                          text: '인천 (21)',
                        },
                        {
                          value: '12',
                          text: '광주 (22)',
                        },
                        {
                          value: '13',
                          text: '대전 (23)',
                        },
                        {
                          value: '14',
                          text: '울산 (24)',
                        },
                      ]"
                      buttonTitle="지역번호 선택하기"
                      layerTitle="운전면허번호를 선택해 주세요"
                      buttonId="Dcer_M00_l001Tab001License"
                      :classNames="{
                        wrap: 'input-width-driving-license',
                      }"
                    />
                  </InputBlockCell>
                  <InputBlockCell :flexible="true" margin="regular">
                    <BasicInput
                      type="number"
                      pattern="\d*"
                      title="운전면허번호 앞 2자리"
                      :useDelete="false"
                    />
                  </InputBlockCell>
                  <InputBlockCell type="sub">-</InputBlockCell>
                  <InputBlockCell
                    :classNames="{
                      cell: 'flex-2',
                    }"
                    margin="regular"
                  >
                    <BasicInput
                      type="number"
                      pattern="\d*"
                      title="운전면허번호 두번째 6자리"
                      :useDelete="false"
                    />
                  </InputBlockCell>
                  <InputBlockCell type="sub">-</InputBlockCell>
                  <InputBlockCell :flexible="true" margin="regular">
                    <BasicInput
                      type="number"
                      pattern="\d*"
                      title="운전면허번호 뒤 2자리"
                      :useDelete="false"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="면허종류"
              target="#Dcer_M00_l001Tab001TypeButton"
              :selectOnly="true"
            >
              <FormInvalid :error="state.tab001TypeError">
                <InputBlock :error="state.tab001TypeError">
                  <InputBlockCell :flexible="true">
                    <BasicSelect
                      :option="[
                        {
                          value: '1',
                          text: '2종 - 보통',
                        },
                        {
                          value: '2',
                          text: '2종 - 소형',
                        },
                        {
                          value: '3',
                          text: '2종 - 원동기',
                        },
                        {
                          value: '4',
                          text: '1종 - 보통',
                        },
                        {
                          value: '5',
                          text: '1종 - 소형',
                        },
                        {
                          value: '6',
                          text: '1종 - 대형',
                        },
                        {
                          value: '7',
                          text: '1종 - 소형 견인차',
                        },
                        {
                          value: '8',
                          text: '1종 - 대형 견인차',
                        },
                        {
                          value: '9',
                          text: '1종 - 구난차',
                        },
                      ]"
                      buttonTitle="조회 상품 선택하기"
                      layerTitle="조회 상품을 선택해 주세요"
                      id="Dcer_M00_l001Tab001Type"
                      buttonId="Dcer_M00_l001Tab001TypeButton"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>
        </UiTabPanel>

        <UiTabPanel name="Dcer_M00_l001Tab002">
          <FormList>
            <FormListItem
              titleText="성명"
              target="#Dcer_M00_l001Tab002Name"
              :disabled="true"
            >
              <FormInvalid :error="state.tab002NameError">
                <InputBlock :error="state.tab002NameError">
                  <InputBlockCell :flexible="true" :disabled="true">
                    <BasicInput
                      title="성명"
                      id="Dcer_M00_l001Tab002Name"
                      defaultValue="김하나"
                      :disabled="true"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="운전면허번호"
              target="#Dcer_M00_l001Tab002License"
            >
              <FormInvalid :error="state.tab002LicenseError">
                <InputBlock :error="state.tab002LicenseError">
                  <InputBlockCell>
                    <BasicSelect
                      :option="[
                        {
                          value: '1',
                          text: '서울 (11)',
                        },
                        {
                          value: '2',
                          text: '부산 (12)',
                        },
                        {
                          value: '3',
                          text: '경기 (13)',
                        },
                        {
                          value: '4',
                          text: '강원 (14)',
                        },
                        {
                          value: '5',
                          text: '충북 (15)',
                        },
                        {
                          value: '6',
                          text: '충남 (16)',
                        },
                        {
                          value: '7',
                          text: '전북 (17)',
                        },
                        {
                          value: '8',
                          text: '경남 (18)',
                        },
                        {
                          value: '9',
                          text: '제주 (19)',
                        },
                        {
                          value: '10',
                          text: '대구 (20)',
                        },
                        {
                          value: '11',
                          text: '인천 (21)',
                        },
                        {
                          value: '12',
                          text: '광주 (22)',
                        },
                        {
                          value: '13',
                          text: '대전 (23)',
                        },
                        {
                          value: '14',
                          text: '울산 (24)',
                        },
                      ]"
                      buttonTitle="지역번호 선택하기"
                      layerTitle="운전면허번호를 선택해 주세요"
                      buttonId="Dcer_M00_l001Tab002License"
                      :classNames="{
                        wrap: 'input-width-driving-license',
                      }"
                    />
                  </InputBlockCell>
                  <InputBlockCell :flexible="true" margin="regular">
                    <BasicInput
                      type="number"
                      pattern="\d*"
                      title="운전면허번호 앞 2자리"
                      :useDelete="false"
                    />
                  </InputBlockCell>
                  <InputBlockCell type="sub">-</InputBlockCell>
                  <InputBlockCell
                    :classNames="{
                      cell: 'flex-2',
                    }"
                    margin="regular"
                  >
                    <BasicInput
                      type="number"
                      pattern="\d*"
                      title="운전면허번호 두번째 6자리"
                      :useDelete="false"
                    />
                  </InputBlockCell>
                  <InputBlockCell type="sub">-</InputBlockCell>
                  <InputBlockCell :flexible="true" margin="regular">
                    <BasicInput
                      type="number"
                      pattern="\d*"
                      title="운전면허번호 뒤 2자리"
                      :useDelete="false"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>

            <FormListItem
              titleText="면허종류"
              target="#Dcer_M00_l001Tab002TypeButton"
              :selectOnly="true"
            >
              <FormInvalid :error="state.tab002TypeError">
                <InputBlock :error="state.tab002TypeError">
                  <InputBlockCell :flexible="true">
                    <BasicSelect
                      :option="[
                        {
                          value: '1',
                          text: '2종 - 보통',
                        },
                        {
                          value: '2',
                          text: '2종 - 소형',
                        },
                        {
                          value: '3',
                          text: '2종 - 원동기',
                        },
                        {
                          value: '4',
                          text: '1종 - 보통',
                        },
                        {
                          value: '5',
                          text: '1종 - 소형',
                        },
                        {
                          value: '6',
                          text: '1종 - 대형',
                        },
                        {
                          value: '7',
                          text: '1종 - 소형 견인차',
                        },
                        {
                          value: '8',
                          text: '1종 - 대형 견인차',
                        },
                        {
                          value: '9',
                          text: '1종 - 구난차',
                        },
                      ]"
                      buttonTitle="조회 상품 선택하기"
                      layerTitle="조회 상품을 선택해 주세요"
                      id="Dcer_M00_l001Tab002Type"
                      buttonId="Dcer_M00_l001Tab002TypeButton"
                    />
                  </InputBlockCell>
                </InputBlock>
                <FormInvalidMessage>Error Message</FormInvalidMessage>
              </FormInvalid>
            </FormListItem>
          </FormList>

          <BasicBox
            theme="septenary"
            className="row-margin-container-medium row-margin-bottom-none"
          >
            <CheckBox id="Dcer_M00_l001CheckBox" theme="tertiary">
              <CheckBoxObject />
              <CheckBoxLabelText>본인 면허증이 아닌경우 체크</CheckBoxLabelText>
            </CheckBox>
          </BasicBox>

          <NoticeText :classNames="{ wrap: 'color-red row-margin-item' }">
            배우자, 직계가족 또는 사업체 직원의 경우, 추가 증빙서류 필요<br />
            (가족관계증명서 또는 주민등록등본, 재직증명서 등)
          </NoticeText>
        </UiTabPanel>
      </UiTab>

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
    </FullPopup>
  </UiLayer>
</template>
