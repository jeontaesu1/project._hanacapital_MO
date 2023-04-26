<script>
// My_M02_l001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    PopupButton,
    PageTextGroup,
    PageMainText,
    BasicBox,
  },
  setup() {
    const layer = ref(null);

    return {
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
          <strong>필요한 증명서를</strong><br />
          선택하세요
        </PageMainText>
      </PageTextGroup>

      <ul :class="$style['logs']">
        <li :class="[$style['logs__item'], 'row-margin-item-group']">
          <BasicBox theme="quinary">
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <div class="font-weight-medium">상환스케줄</div>
              </div>
              <div div :class="$style['logs__right']">
                <button
                  type="button"
                  :class="$style['logs__link']"
                  @click="layer001Open"
                >
                  <span :class="$style['logs__link-text']">상세보기</span>
                </button>
              </div>
            </div>
          </BasicBox>
        </li>

        <li :class="[$style['logs__item'], 'row-margin-item-group']">
          <BasicBox theme="quinary">
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <div class="font-weight-medium">온라인청구서</div>
              </div>
              <div div :class="$style['logs__right']">
                <button
                  type="button"
                  :class="$style['logs__link']"
                  @click="layer001Open"
                >
                  <span :class="$style['logs__link-text']">상세보기</span>
                </button>
              </div>
            </div>
          </BasicBox>
        </li>

        <li :class="[$style['logs__item'], 'row-margin-item-group']">
          <BasicBox theme="quinary">
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <div class="font-weight-medium">금융거래확인서</div>
              </div>
              <div div :class="$style['logs__right']">
                <button
                  type="button"
                  :class="$style['logs__link']"
                  @click="layer001Open"
                >
                  <span :class="$style['logs__link-text']">상세보기</span>
                </button>
              </div>
            </div>
          </BasicBox>
        </li>

        <li :class="[$style['logs__item'], 'row-margin-item-group']">
          <BasicBox theme="quinary">
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <div class="font-weight-medium">대출거래 및 잔액내역서</div>
              </div>
              <div div :class="$style['logs__right']">
                <button
                  type="button"
                  :class="$style['logs__link']"
                  @click="layer001Open"
                >
                  <span :class="$style['logs__link-text']">상세보기</span>
                </button>
              </div>
            </div>
          </BasicBox>
        </li>

        <li :class="[$style['logs__item'], 'row-margin-item-group']">
          <BasicBox theme="quinary">
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <div class="font-weight-medium">완납확인서</div>
              </div>
              <div div :class="$style['logs__right']">
                <button
                  type="button"
                  :class="$style['logs__link']"
                  @click="layer001Open"
                >
                  <span :class="$style['logs__link-text']">상세보기</span>
                </button>
              </div>
            </div>
          </BasicBox>
        </li>

        <li :class="[$style['logs__item'], 'row-margin-item-group']">
          <BasicBox theme="quinary">
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <div class="font-weight-medium">리스/렌터카 계약사실확인서</div>
              </div>
              <div div :class="$style['logs__right']">
                <button
                  type="button"
                  :class="$style['logs__link']"
                  @click="layer001Open"
                >
                  <span :class="$style['logs__link-text']">상세보기</span>
                </button>
              </div>
            </div>
          </BasicBox>
        </li>

        <li :class="[$style['logs__item'], 'row-margin-item-group']">
          <BasicBox theme="quinary">
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <div class="font-weight-medium">리스/렌터카 종료확인서</div>
              </div>
              <div div :class="$style['logs__right']">
                <button
                  type="button"
                  :class="$style['logs__link']"
                  @click="layer001Open"
                >
                  <span :class="$style['logs__link-text']">상세보기</span>
                </button>
              </div>
            </div>
          </BasicBox>
        </li>

        <li :class="[$style['logs__item'], 'row-margin-item-group']">
          <BasicBox theme="quinary">
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <div class="font-weight-medium">계산서/세금계산서</div>
              </div>
              <div div :class="$style['logs__right']">
                <button
                  type="button"
                  :class="$style['logs__link']"
                  @click="layer001Open"
                >
                  <span :class="$style['logs__link-text']">상세보기</span>
                </button>
              </div>
            </div>
          </BasicBox>
        </li>

        <li :class="[$style['logs__item'], 'row-margin-item-group']">
          <BasicBox theme="quinary">
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <div class="font-weight-medium">입금내역서</div>
              </div>
              <div div :class="$style['logs__right']">
                <button
                  type="button"
                  :class="$style['logs__link']"
                  @click="layer001Open"
                >
                  <span :class="$style['logs__link-text']">상세보기</span>
                </button>
              </div>
            </div>
          </BasicBox>
        </li>

        <li :class="[$style['logs__item'], 'row-margin-item-group']">
          <BasicBox theme="quinary">
            <div :class="$style['logs__row']">
              <div :class="$style['logs__contents']">
                <div class="font-weight-medium">스탁론약정서</div>
              </div>
              <div div :class="$style['logs__right']">
                <button
                  type="button"
                  :class="$style['logs__link']"
                  @click="layer001Open"
                >
                  <span :class="$style['logs__link-text']">상세보기</span>
                </button>
              </div>
            </div>
          </BasicBox>
        </li>
      </ul>

      <ul :class="[$style['basic-list'], 'row-margin-contents']">
        <li :class="[$style['basic-list__item'], 'color-gray-secondary']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            증명서 발급 시 오늘 날짜로 발급되며, 일부 증명서는 ‘본인인증’이
            필요합니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'color-gray-secondary']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            발급 오류 시 사용중인 모바일 환경 문제가 있을 수 있으니
            고객센터(1588-1110)로 연락바랍니다.
          </div>
        </li>
      </ul>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/myLoan/LayerMyLoanCertificate.scss';
</style>
