<script>
// PF_M02_l005
/**
 아파트 등기부등본 확인 팝업
 */
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import NoticeText from '@/components/ui/text/NoticeText.vue';
import ScrollSection from '@/components/ui/section/ScrollSection.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
    NoticeText,
    ScrollSection,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicInput,
    InputBlock,
    InputBlockCell,
  },
  setup() {
    const layer = ref(null);
    const state = reactive({
      amountError: false,
      periodError: false,
      methodError: false,
      testError001: false,
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
          <PopupTitle>아파트 등기부등본 확인</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <NoticeText :classNames="{ wrap: 'color-red' }">
        3번의 (근)저당권 및 전세권 등 (을구)란의 채권최고액을 확인하시고 부동산
        설정금액란에 설정금액을 입력 바랍니다. 근저당권 설정이 2건 이상인 경우,
        합산 금액을 입력바랍니다. 하단의 확인 버튼을 누르시면 설정금액 입력란이
        나오게 됩니다.
      </NoticeText>

      <div :class="$style['address-box']">
        <div :class="$style['address-box__situation']">집합건물</div>
        <p :class="$style['address-box__text']">
          부산광역시 동구 범일동 830-100 삼익아파트 제15층 제1501호
        </p>
      </div>

      <ScrollSection>
        <template v-slot:head>
          <h2 class="text-body-2">1. 소유지분현황(갑구)</h2>
        </template>

        <!-- table -->
        <div :class="$style['basic-table']">
          <table>
            <thead>
              <tr>
                <th>동거명의인</th>
                <th>주민번호</th>
                <th>최종지분</th>
                <th>주소</th>
                <th>순위번호</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>박지혜<br />(공유자)</td>
                <td>920709-*******</td>
                <td>2분의 1</td>
                <td>
                  채권최고금액 금330,000,000원<br />근저당권자 주식회사 국민은행
                </td>
                <td>박지혜</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //table -->
      </ScrollSection>

      <ScrollSection>
        <template v-slot:head>
          <h2 class="text-body-2">
            2. 소유지분을 제외한 소유권에 관한 사항(갑구)
          </h2>
        </template>

        <!-- table -->
        <div :class="$style['basic-table']">
          <table>
            <thead>
              <tr>
                <th>순위번호</th>
                <th>등기목적</th>
                <th>접수번호</th>
                <th>주소</th>
                <th>대상소유자</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3</td>
                <td>근저당권 설정</td>
                <td>2021년2월5일제4845호</td>
                <td>
                  채권최고금액 금330,000,000원<br />근저당권자 주식회사 국민은행
                </td>
                <td>박지혜</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- //table -->
      </ScrollSection>

      <ScrollSection>
        <template v-slot:head>
          <h2 class="text-body-2">
            2. 소유지분을 제외한 소유권에 관한 사항(갑구)
          </h2>
        </template>
        <template v-slot:foot>
          <p :class="$style['not-table']">기록사항 없음</p>
        </template>
      </ScrollSection>

      <section class="row-margin-contents-group row-margin-bottom-none">
        <h2 class="text-body-2 row-margin-item-small">
          3. (근)저당권 및 전세권 등(을구)
        </h2>
        <p class="text-body-4">
          주요등기사항의 채권최고액을 확인하시고 부동산 설정 금액을 입력해
          주세요.
        </p>
        <p class="text-body-4 color-red">
          근저당권 설정 2건 이상인 경우, 합산 금액 입력
        </p>
      </section>

      <section class="row-margin-item-group row-margin-bottom-none">
        <p :class="$style['not-table']">기록사항 없음</p>
      </section>

      <section class="row-margin-contents-group row-margin-bottom-none">
        <h2 class="text-body-2 row-margin-item-small">
          3. (근)저당권 및 전세권 등(을구)
        </h2>
        <p class="text-body-4">
          주요등기사항의 채권최고액을 확인하시고 부동산 설정 금액을 입력해
          주세요.
        </p>
        <p class="text-body-4 color-red">
          근저당권 설정 2건 이상인 경우, 합산 금액 입력
        </p>
      </section>
      <section class="row-margin-item-small-group row-margin-bottom-none">
        <FormList>
          <FormListItem
            titleText="부동산 설정금액"
            titleOptionalText="(선택)"
            :require="true"
            target="#testInput001"
          >
            <FormInvalid :error="state.testError001">
              <InputBlock :error="state.testError001">
                <InputBlockCell :flexible="true">
                  <BasicInput
                    ref="testInput"
                    id="testInput001"
                    type="number"
                    :useDelete="false"
                    align="right"
                    @keyup="testInputEvent"
                    @focus="testInputEvent"
                    @blur="testInputEvent"
                  />
                </InputBlockCell>
                <template v-slot:innerRight>만원</template>
              </InputBlock>
              <FormInvalidMessage>Error Message</FormInvalidMessage>
            </FormInvalid>
          </FormListItem>
        </FormList>
      </section>

      <section class="row-margin-contents-group row-margin-bottom-none">
        <h2 class="text-body-2 row-margin-item-small">
          4. 표제부(전유 부분의 건물의 표시) 건물내역
        </h2>
        <p class="text-body-4">
          주요등기사항의 채권최고액을 확인하시고 부동산 설정 금액을 입력해
          주세요.
        </p>
      </section>

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

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/LayerPersonalLoanHappinessApartmentCertifiedConfirm.scss';
</style>
