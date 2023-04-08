<script>
// PF_M02_l005
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
    const state = reactive({
      amountError: false,
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
          <PopupTitle>아파트 등기부등본 확인</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <div>
        <NoticeText :classNames="{ wrap: 'color-red' }">
          3번의 (근)저당권 및 전세권 등 (을구)란의 채권최고액을 확인하시고
          부동산 설정금액란에 설정금액을 입력 바랍니다. 근저당권 설정이 2건
          이상인 경우, 합산 금액을 입력바랍니다. 하단의 확인 버튼을 누르시면
          설정금액 입력란이 나오게 됩니다.
        </NoticeText>

        <div :class="[$style['address-box'], 'row-margin-contents-group']">
          <div :class="$style['address-box__situation']">집합건물</div>
          <p :class="$style['address-box__text']">
            부산광역시 동구 범일동 830-100 삼익아파트 제15층 제1501호
          </p>
        </div>

        <ScrollSection :classNames="{ wrap: 'row-margin-contents-group' }">
          <template v-slot:head>
            <h2 class="text-body-2">1. 소유지분현황(갑구)</h2>
          </template>

          <!-- table -->
          <div :class="$style['basic-table']">
            <table>
              <colgroup>
                <col style="width: 76px" />
                <col style="width: 83px" />
                <col style="width: 74px" />
                <col style="width: 226px" />
                <col style="width: 60px" />
              </colgroup>
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
                    부산광역시 남구 진남로198번길 9-1, 101동 901호(현대아파트)
                  </td>
                  <td>4</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- //table -->
        </ScrollSection>

        <ScrollSection :classNames="{ wrap: 'row-margin-contents-group' }">
          <template v-slot:head>
            <h2 class="text-body-2">
              2. 소유지분을 제외한 소유권에 관한 사항(갑구)
            </h2>
          </template>

          <!-- Case : 기록사항 없을 때 -->
          <!--
          <p :class="$style['not-table']">기록사항 없음</p>
          -->
          <!-- // Case : 기록사항 없을 때 -->

          <!-- Case : 기록사항 있을 때 -->
          <!-- table -->
          <div :class="$style['basic-table']">
            <table>
              <colgroup>
                <col style="width: 60px" />
                <col style="width: 80px" />
                <col style="width: 113px" />
                <col style="width: 201px" />
                <col style="width: 71px" />
              </colgroup>
              <thead>
                <tr>
                  <th>순위번호</th>
                  <th>등기목적</th>
                  <th>접수번호</th>
                  <th>주요등기사항</th>
                  <th>대상소유자</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3</td>
                  <td>근저당권 설정</td>
                  <td>2021년2월5일<br />제4845호</td>
                  <td>
                    채권최고금액 금330,000,000원<br />근저당권자 주식회사
                    국민은행
                  </td>
                  <td>박지혜</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- // table -->
          <!-- // Case : 기록사항 있을 때 -->
        </ScrollSection>

        <section class="row-margin-contents-group">
          <h2 class="text-body-2 row-margin-item-small">
            3. (근)저당권 및 전세권 등(을구)
          </h2>
          <p class="text-body-4">
            주요등기사항의 채권최고액을 확인하시고 부동산 설정 금액을 입력해
            주세요.<br />
            <span class="color-red">
              근저당권 설정 2건 이상인 경우, 합산 금액 입력
            </span>
          </p>

          <!-- Case : 기록사항 없을 때 -->
          <div class="row-margin-item-medium">
            <p :class="$style['not-table']">기록사항 없음</p>
          </div>
          <!-- // Case : 기록사항 없을 때 -->

          <!-- Case : 기록사항 있을 때 -->
          <div class="row-margin-item-medium">
            <FormList>
              <FormListItem
                titleText="부동산 설정금액"
                titleOptionalText="(선택)"
                target="#layerPersonalLoanHappinessApartmentCertifiedConfirmAmount"
              >
                <FormInvalid :error="state.amountError">
                  <InputBlock :error="state.amountError">
                    <InputBlockCell :flexible="true">
                      <BasicInput
                        id="layerPersonalLoanHappinessApartmentCertifiedConfirmAmount"
                        pattern="\d*"
                        title="부동산 설정금액 (선택)"
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
            <ScrollSection :classNames="{ wrap: 'row-margin-contents' }">
              <!-- table -->
              <div :class="$style['basic-table']">
                <table>
                  <colgroup>
                    <col style="width: 60px" />
                    <col style="width: 80px" />
                    <col style="width: 113px" />
                    <col style="width: 201px" />
                    <col style="width: 71px" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>순위번호</th>
                      <th>등기목적</th>
                      <th>접수번호</th>
                      <th>주요등기사항</th>
                      <th>대상소유자</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>3</td>
                      <td>근저당권 설정</td>
                      <td>2021년2월5일<br />제4845호</td>
                      <td>
                        채권최고금액 금330,000,000원<br />근저당권자 주식회사
                        국민은행
                      </td>
                      <td>박지혜</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- // table -->
            </ScrollSection>
          </div>
          <!-- // Case : 기록사항 있을 때 -->
        </section>

        <section class="row-margin-contents-group">
          <h2 class="text-body-2 row-margin-item-small">
            4. 표제부(전유 부분의 건물의 표시) 건물내역
          </h2>
          <p class="text-body-4">철근콘크리트조60.69㎡</p>
        </section>
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
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/personalLoan/LayerPersonalLoanHappinessApartmentCertifiedConfirm.scss';
</style>
