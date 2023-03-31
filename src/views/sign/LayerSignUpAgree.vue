<script>
import { ref } from 'vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import UiLayer from '@/components/ui/layer/UiLayer.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';

export default {
  components: {
    UiLayer,
    FullPopup,
    FullPopupHead,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    ButtonList,
    ButtonListItem,
    BasicButton,
    PageTextGroup,
    PageMainText,
    PopupButton,
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
          회원가입 약관에<br />
          <strong>동의해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <div :class="$style['agree-list']">
        <ul :class="$style['agree-list__container']">
          <li :class="$style['agree-list__all']">
            <div :class="$style['agree-list__all-head']">
              <CheckBox
                id="layerSignUpAppAgreeAll"
                :classNames="{ wrap: $style['agree-list__all-checkbox'] }"
              >
                <CheckBoxObject />
                <CheckBoxLabelText>전체동의(선택 동의 포함)</CheckBoxLabelText>
              </CheckBox>
            </div>

            <div :class="$style['agree-list__all-contents']">
              <ul :class="$style['agree-list__depth']">
                <li :class="$style['agree-list__depth-item']">
                  <div :class="$style['agree-list__depth-head']">
                    <CheckBox
                      id="layerSignUpAppAgree001"
                      :classNames="{
                        wrap: $style['agree-list__depth-checkbox'],
                      }"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText
                        >서비스 이용약관 전체동의</CheckBoxLabelText
                      >
                    </CheckBox>
                  </div>

                  <div :class="$style['agree-list__depth-contents']">
                    <ul :class="$style['agree-list__list']">
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="layerSignUpAppAgree001_001"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="tertiary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText
                              >온라인 서비스 이용약관</CheckBoxLabelText
                            >
                          </CheckBox>
                          <div :class="$style['agree-list__right']">
                            <button
                              type="button"
                              :class="$style['agree-list__link']"
                            >
                              <span :class="$style['agree-list__link-text']">
                                상세보기
                              </span>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="layerSignUpAppAgree001_002"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="tertiary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText
                              >개인정보 필수적 수집·이용동의</CheckBoxLabelText
                            >
                          </CheckBox>
                          <div :class="$style['agree-list__right']">
                            <button
                              type="button"
                              :class="$style['agree-list__link']"
                            >
                              <span :class="$style['agree-list__link-text']">
                                상세보기
                              </span>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="layerSignUpAppAgree001_003"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="tertiary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText>
                              개인(신용)정보 제3자 제공 동의<br />
                              (SSO 서비스)
                            </CheckBoxLabelText>
                          </CheckBox>
                          <div :class="$style['agree-list__right']">
                            <button
                              type="button"
                              :class="$style['agree-list__link']"
                            >
                              <span :class="$style['agree-list__link-text']">
                                상세보기
                              </span>
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>

                <li :class="$style['agree-list__depth-item']">
                  <div :class="$style['agree-list__depth-head']">
                    <CheckBox
                      id="layerSignUpAppAgree002"
                      :classNames="{
                        wrap: $style['agree-list__depth-checkbox'],
                      }"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText>
                        <span class="color-gray-secondary">(선택)</span>
                        하나캐피탈 멤버십 가입 필수 전체 동의
                      </CheckBoxLabelText>
                    </CheckBox>
                  </div>

                  <div :class="$style['agree-list__depth-contents']">
                    <ul :class="$style['agree-list__list']">
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="layerSignUpAppAgree002_001"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="tertiary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText>
                              하나캐피탈 멤버십 회원 약관
                            </CheckBoxLabelText>
                          </CheckBox>
                          <div :class="$style['agree-list__right']">
                            <button
                              type="button"
                              :class="$style['agree-list__link']"
                            >
                              <span :class="$style['agree-list__link-text']">
                                상세보기
                              </span>
                            </button>
                          </div>
                        </div>
                      </li>
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="layerSignUpAppAgree002_002"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="tertiary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText>
                              개인(신용)정보 필수적 수집·이용 동의
                            </CheckBoxLabelText>
                          </CheckBox>
                        </div>
                        <ul
                          :class="[
                            $style['agree-list__list'],
                            $style['agree-list__list--secondary'],
                          ]"
                        >
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="layerSignUpAppAgree002_002_001"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="quinary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText
                                  >개인(신용)정보 필수적
                                  수집·이용</CheckBoxLabelText
                                >
                              </CheckBox>
                              <div :class="$style['agree-list__right']">
                                <button
                                  type="button"
                                  :class="$style['agree-list__link']"
                                >
                                  <span
                                    :class="$style['agree-list__link-text']"
                                  >
                                    상세보기
                                  </span>
                                </button>
                              </div>
                            </div>
                          </li>
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="layerSignUpAppAgree002_002_002"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="quinary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText
                                  >고유식별번호 필수적
                                  수집·이용</CheckBoxLabelText
                                >
                              </CheckBox>
                              <div :class="$style['agree-list__right']">
                                <button
                                  type="button"
                                  :class="$style['agree-list__link']"
                                >
                                  <span
                                    :class="$style['agree-list__link-text']"
                                  >
                                    상세보기
                                  </span>
                                </button>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="layerSignUpAppAgree002_003"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="tertiary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText>
                              개인(신용)정보 필수적 조회 동의
                            </CheckBoxLabelText>
                          </CheckBox>
                        </div>
                        <ul
                          :class="[
                            $style['agree-list__list'],
                            $style['agree-list__list--secondary'],
                          ]"
                        >
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="layerSignUpAppAgree002_003_001"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="quinary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText
                                  >개인(신용)정보 필수적 조회
                                  동의</CheckBoxLabelText
                                >
                              </CheckBox>
                              <div :class="$style['agree-list__right']">
                                <button
                                  type="button"
                                  :class="$style['agree-list__link']"
                                >
                                  <span
                                    :class="$style['agree-list__link-text']"
                                  >
                                    상세보기
                                  </span>
                                </button>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="layerSignUpAppAgree002_004"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="tertiary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText>
                              개인(신용)정보 필수적 제공 동의
                            </CheckBoxLabelText>
                          </CheckBox>
                        </div>
                        <ul
                          :class="[
                            $style['agree-list__list'],
                            $style['agree-list__list--secondary'],
                          ]"
                        >
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="layerSignUpAppAgree002_004_001"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="quinary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText>
                                  개인(신용)정보 필수적 제공<br />
                                  (신용정보회사)
                                </CheckBoxLabelText>
                              </CheckBox>
                              <div :class="$style['agree-list__right']">
                                <button
                                  type="button"
                                  :class="$style['agree-list__link']"
                                >
                                  <span
                                    :class="$style['agree-list__link-text']"
                                  >
                                    상세보기
                                  </span>
                                </button>
                              </div>
                            </div>
                          </li>
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="layerSignUpAppAgree002_004_002"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="quinary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText>
                                  개인(신용)정보 필수적 제공<br />
                                  (하나손해보험㈜)
                                </CheckBoxLabelText>
                              </CheckBox>
                              <div :class="$style['agree-list__right']">
                                <button
                                  type="button"
                                  :class="$style['agree-list__link']"
                                >
                                  <span
                                    :class="$style['agree-list__link-text']"
                                  >
                                    상세보기
                                  </span>
                                </button>
                              </div>
                            </div>
                          </li>
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="layerSignUpAppAgree002_004_003"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="quinary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText>
                                  고유식별번호 필수적 수집·이용<br />
                                  (하나손해보험㈜)
                                </CheckBoxLabelText>
                              </CheckBox>
                              <div :class="$style['agree-list__right']">
                                <button
                                  type="button"
                                  :class="$style['agree-list__link']"
                                >
                                  <span
                                    :class="$style['agree-list__link-text']"
                                  >
                                    상세보기
                                  </span>
                                </button>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>

                <li :class="$style['agree-list__depth-item']">
                  <div :class="$style['agree-list__depth-head']">
                    <CheckBox
                      id="layerSignUpAppAgree003"
                      :classNames="{
                        wrap: $style['agree-list__depth-checkbox'],
                      }"
                    >
                      <CheckBoxObject />
                      <CheckBoxLabelText>
                        <span class="color-gray-secondary">(선택)</span>
                        하나캐피탈 멤버십 가입 선택 전체 동의
                      </CheckBoxLabelText>
                    </CheckBox>
                  </div>

                  <div :class="$style['agree-list__depth-contents']">
                    <ul :class="$style['agree-list__list']">
                      <li :class="$style['agree-list__item']">
                        <div :class="$style['agree-list__head']">
                          <CheckBox
                            id="layerSignUpAppAgree003_001"
                            :classNames="{
                              wrap: $style['agree-list__checkbox'],
                            }"
                            theme="tertiary"
                          >
                            <CheckBoxObject />
                            <CheckBoxLabelText>
                              개인(신용)정보 선택적 수집·이용 동의
                            </CheckBoxLabelText>
                          </CheckBox>
                          <div :class="$style['agree-list__right']">
                            <button
                              type="button"
                              :class="$style['agree-list__link']"
                            >
                              <span :class="$style['agree-list__link-text']">
                                상세보기
                              </span>
                            </button>
                          </div>
                        </div>

                        <ul
                          :class="[
                            $style['agree-list__list'],
                            $style['agree-list__list--secondary'],
                          ]"
                        >
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="layerSignUpAppAgree003_001_001"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="quinary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText
                                  >금융상품 안내 및 이용권유를 위한
                                  수집·이용</CheckBoxLabelText
                                >
                              </CheckBox>
                              <div :class="$style['agree-list__right']">
                                <button
                                  type="button"
                                  :class="$style['agree-list__link']"
                                >
                                  <span
                                    :class="$style['agree-list__link-text']"
                                  >
                                    상세보기
                                  </span>
                                </button>
                              </div>
                            </div>
                          </li>
                          <li :class="$style['agree-list__item']">
                            <div :class="$style['agree-list__head']">
                              <CheckBox
                                id="layerSignUpAppAgree003_001_002"
                                :classNames="{
                                  wrap: $style['agree-list__checkbox'],
                                }"
                                theme="quinary"
                              >
                                <CheckBoxObject />
                                <CheckBoxLabelText
                                  >전자적 매체를 통한 광고성 정보의
                                  수신</CheckBoxLabelText
                                >
                              </CheckBox>
                              <div :class="$style['agree-list__right']">
                                <button
                                  type="button"
                                  :class="$style['agree-list__link']"
                                >
                                  <span
                                    :class="$style['agree-list__link-text']"
                                  >
                                    상세보기
                                  </span>
                                </button>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>다음</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/sign/LayerSignUpAgree.scss';
</style>
