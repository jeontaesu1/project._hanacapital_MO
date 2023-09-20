<script>
// EL_M02_l009
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import RadioButton from '@/components/ui/form/RadioButton.vue';
import RadioButtonLabelText from '@/components/ui/form/RadioButtonLabelText.vue';
import RadioButtonObject from '@/components/ui/form/RadioButtonObject.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    FullPopup,
    FullPopupHead,
    PopupButton,
    BasicBox,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    RadioButton,
    RadioButtonLabelText,
    RadioButtonObject,
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
          <PopupTitle>리스물건 점검보고서</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <div>
        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">계약정보</h3>

          <BasicBox className="row-margin-contents">
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>계약번호</KeyValueTitle>
                <KeyValueText>A00000000</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>리스이용자</KeyValueTitle>
                <KeyValueText>김하나</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>점검일자</KeyValueTitle>
                <KeyValueText>2023.01.01</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>실행번호</KeyValueTitle>
                <KeyValueText>202212-0101-202</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>취득원가</KeyValueTitle>
                <KeyValueText>100,000,000원</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>실행일자</KeyValueTitle>
                <KeyValueText>2023.01.01</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>설치장소</KeyValueTitle>
                <KeyValueText>자동설정</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">점검물건</h3>

          <BasicBox className="row-margin-contents">
            <KeyValue margin="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>물건명</KeyValueTitle>
                <KeyValueText>레이져</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>모델명</KeyValueTitle>
                <KeyValueText>프로레이져</KeyValueText>
              </KeyValueItem>

              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>공급자</KeyValueTitle>
                <KeyValueText>공급사1 외</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-title-2 row-margin-contents">
            리스물건 점검 확인사항
          </h3>

          <div :class="$style['contents-list']">
            <ol
              :class="[
                $style['contents-list__list'],
                $style['contents-list__list--quinary'],
              ]"
            >
              <li
                :class="[
                  $style['contents-list__item'],
                  'row-margin-item-group',
                ]"
              >
                <div :class="$style['contents-list__head']">
                  <div :class="$style['contents-list__symbol']">1</div>
                  <div :class="$style['contents-list__title']">
                    <div class="row-margin-item">
                      리스물건은 계약서상 지정된 장소에 설치되어 있습니다.
                    </div>

                    <div class="flex-box">
                      <div class="flex-box__cell">
                        <RadioButton
                          theme="tertiary"
                          align="center"
                          name="EL_M02_l009_check001"
                          id="EL_M02_l009_check001_001"
                          :defaultChecked="true"
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>예</RadioButtonLabelText>
                        </RadioButton>
                      </div>
                      <div class="flex-box__cell flex-box__cell--large">
                        <RadioButton
                          theme="tertiary"
                          align="center"
                          name="EL_M02_l009_check001"
                          id="EL_M02_l009_check001_002"
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>아니오</RadioButtonLabelText>
                        </RadioButton>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                :class="[
                  $style['contents-list__item'],
                  'row-margin-item-group',
                ]"
              >
                <div :class="$style['contents-list__head']">
                  <div :class="$style['contents-list__symbol']">2</div>
                  <div :class="$style['contents-list__title']">
                    <div class="row-margin-item">
                      리스물건은 고객님께 인도되어 정상 가동되고 있습니다.
                    </div>

                    <div class="flex-box">
                      <div class="flex-box__cell">
                        <RadioButton
                          theme="tertiary"
                          align="center"
                          name="EL_M02_l009_check002"
                          id="EL_M02_l009_check002_001"
                          :defaultChecked="true"
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>예</RadioButtonLabelText>
                        </RadioButton>
                      </div>
                      <div class="flex-box__cell flex-box__cell--large">
                        <RadioButton
                          theme="tertiary"
                          align="center"
                          name="EL_M02_l009_check002"
                          id="EL_M02_l009_check002_002"
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>아니오</RadioButtonLabelText>
                        </RadioButton>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                :class="[
                  $style['contents-list__item'],
                  'row-margin-item-group',
                ]"
              >
                <div :class="$style['contents-list__head']">
                  <div :class="$style['contents-list__symbol']">3</div>
                  <div :class="$style['contents-list__title']">
                    <div class="row-margin-item">
                      검수대상 리스물건은 견적서상의 리스물건과 일치
                      합니다.(모델명, 제조번호, 제조일자)
                    </div>

                    <div class="flex-box">
                      <div class="flex-box__cell">
                        <RadioButton
                          theme="tertiary"
                          align="center"
                          name="EL_M02_l009_check003"
                          id="EL_M02_l009_check003_001"
                          :defaultChecked="true"
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>예</RadioButtonLabelText>
                        </RadioButton>
                      </div>
                      <div class="flex-box__cell flex-box__cell--large">
                        <RadioButton
                          theme="tertiary"
                          align="center"
                          name="EL_M02_l009_check003"
                          id="EL_M02_l009_check003_002"
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>아니오</RadioButtonLabelText>
                        </RadioButton>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                :class="[
                  $style['contents-list__item'],
                  'row-margin-item-group',
                ]"
              >
                <div :class="$style['contents-list__head']">
                  <div :class="$style['contents-list__symbol']">4</div>
                  <div :class="$style['contents-list__title']">
                    <div class="row-margin-item">
                      설치된 리스물건은 하나캐피탈의 표식(스티커)이 부착되어
                      있습니다.
                    </div>

                    <div class="flex-box">
                      <div class="flex-box__cell">
                        <RadioButton
                          theme="tertiary"
                          align="center"
                          name="EL_M02_l009_check004"
                          id="EL_M02_l009_check004_001"
                          :defaultChecked="true"
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>예</RadioButtonLabelText>
                        </RadioButton>
                      </div>
                      <div class="flex-box__cell flex-box__cell--large">
                        <RadioButton
                          theme="tertiary"
                          align="center"
                          name="EL_M02_l009_check004"
                          id="EL_M02_l009_check004_002"
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>아니오</RadioButtonLabelText>
                        </RadioButton>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                :class="[
                  $style['contents-list__item'],
                  'row-margin-item-group',
                ]"
              >
                <div :class="$style['contents-list__head']">
                  <div :class="$style['contents-list__symbol']">5</div>
                  <div :class="$style['contents-list__title']">
                    <div class="row-margin-item">
                      설치된 리스물건에 타사의 리스물건임을 표시하는
                      표식(스티커)이 부착되어 있나요?
                    </div>

                    <div class="flex-box">
                      <div class="flex-box__cell">
                        <RadioButton
                          theme="tertiary"
                          align="center"
                          name="EL_M02_l009_check005"
                          id="EL_M02_l009_check005_001"
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>예</RadioButtonLabelText>
                        </RadioButton>
                      </div>
                      <div class="flex-box__cell flex-box__cell--large">
                        <RadioButton
                          theme="tertiary"
                          align="center"
                          name="EL_M02_l009_check005"
                          id="EL_M02_l009_check005_002"
                          :defaultChecked="true"
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>아니오</RadioButtonLabelText>
                        </RadioButton>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                :class="[
                  $style['contents-list__item'],
                  'row-margin-item-group',
                ]"
              >
                <div :class="$style['contents-list__head']">
                  <div :class="$style['contents-list__symbol']">6</div>
                  <div :class="$style['contents-list__title']">
                    <div class="row-margin-item">
                      물건 검수 시 중복리스 및 공리스가 아님을 확인 하였습니다.
                    </div>

                    <div class="flex-box">
                      <div class="flex-box__cell">
                        <RadioButton
                          theme="tertiary"
                          align="center"
                          name="EL_M02_l009_check006"
                          id="EL_M02_l009_check006_001"
                          :defaultChecked="true"
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>예</RadioButtonLabelText>
                        </RadioButton>
                      </div>
                      <div class="flex-box__cell flex-box__cell--large">
                        <RadioButton
                          theme="tertiary"
                          align="center"
                          name="EL_M02_l009_check006"
                          id="EL_M02_l009_check006_002"
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>아니오</RadioButtonLabelText>
                        </RadioButton>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li
                :class="[
                  $style['contents-list__item'],
                  'row-margin-item-group',
                ]"
              >
                <div :class="$style['contents-list__head']">
                  <div :class="$style['contents-list__symbol']">7</div>
                  <div :class="$style['contents-list__title']">
                    <div class="row-margin-item">
                      리스물건 상태에 대해 확인합니다.
                    </div>

                    <div class="flex-box">
                      <div class="flex-box__cell">
                        <RadioButton
                          theme="tertiary"
                          align="center"
                          name="EL_M02_l009_check007"
                          id="EL_M02_l009_check007_001"
                          :defaultChecked="true"
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>상</RadioButtonLabelText>
                        </RadioButton>
                      </div>
                      <div class="flex-box__cell flex-box__cell--large">
                        <RadioButton
                          theme="tertiary"
                          align="center"
                          name="EL_M02_l009_check007"
                          id="EL_M02_l009_check007_002"
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>중</RadioButtonLabelText>
                        </RadioButton>
                      </div>
                      <div class="flex-box__cell flex-box__cell--large">
                        <RadioButton
                          theme="tertiary"
                          align="center"
                          name="EL_M02_l009_check007"
                          id="EL_M02_l009_check007_003"
                        >
                          <RadioButtonObject />
                          <RadioButtonLabelText>하</RadioButtonLabelText>
                        </RadioButton>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ol>
          </div>

          <!-- Case : 손님일 경우 -->
          <div class="row-margin-contents">
            <p class="text-body-4 align-right">
              검수자 및 리스 이용자 김하나 (인)
            </p>
            <p class="text-body-4 align-right row-margin-item-group">
              서울시 강남구 테헤란로 127, 하나금융그룹<br />
              강남사옥 17-20층 하나캐피탈주식회사<br />
              대표이사 박승오
            </p>
          </div>
          <!-- // Case : 손님일 경우 -->

          <!-- Case : 직원일 경우 -->
          <div class="row-margin-contents">
            <p class="text-body-4 align-right">검수자 000팀 김하나 (인)</p>
          </div>
          <!-- //Case : 직원일 경우 -->
        </section>
      </div>

      <template v-slot:foot>
        <ButtonList
          :classNames="{
            wrap: 'row-margin-none',
          }"
        >
          <ButtonListItem>
            <BasicButton>확인했습니다</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/equipmentLease/EL_M02_l009.scss';
</style>
