<script>
// Common_M00_l014
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import ContentsButton from '@/components/ui/button/ContentsButton.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    BasicHr,
    SearchButton,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    ContentsButton,
  },
  setup() {
    const state = reactive({
      selected: false,
      address: '인천 서구 청라동',
    });

    const layer = ref(null);

    const select = (val) => {
      state.selected = val;
    };

    return {
      state,
      layer,
      select,
    };
  },
};
</script>

<template>
  <UiLayer ref="layer" type="full" v-slot="layerSlotProps">
    <FullPopup>
      <template v-slot:head>
        <FullPopupHead>
          <PopupTitle>주소검색</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <!-- 검색 -->
      <div v-if="!state.selected" class="contents-wrap">
        <div>
          <h3 class="text-body-3 row-margin-item-medium">통합검색</h3>
          <InputBlock type="search">
            <InputBlockCell :flexible="true">
              <BasicInput
                type="search"
                title="주소 검색어"
                placeholder="주소 검색"
              />
            </InputBlockCell>
            <InputBlockCell type="search">
              <SearchButton />
            </InputBlockCell>
          </InputBlock>
          <section :class="[$style['notice-section'], 'row-margin-contents']">
            <h3 :class="$style['notice-section__title']">검색예시</h3>
            <ul :class="[$style['basic-list'], $style['basic-list--regular']]">
              <li :class="$style['basic-list__item']">
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  도로명 + 건물번호 : 에코로 181
                </div>
              </li>
              <li :class="$style['basic-list__item']">
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  건물명 : 하나금융그룹 통합데이타센터
                </div>
              </li>
              <li :class="$style['basic-list__item']">
                <div :class="$style['basic-list__symbol']"></div>
                <div :class="$style['basic-list__content']">
                  읍/면/동/리 + 번지 : 청라동 7-5
                </div>
              </li>
            </ul>
          </section>
        </div>

        <!-- DD : 검색 후 노출 -->
        <BasicHr className="row-margin-container-medium" />

        <div class="contents-wrap">
          <p class="text-body-4 font-weight-light color-gray-secondary">
            <strong class="font-weight-medium color-green">999</strong> 건
          </p>
          <BasicHr
            theme="quaternary"
            type="contents"
            className="row-margin-item-medium"
          />

          <!-- Case : 결과 없을 때 -->
          <div :class="$style['empty']">
            <p :class="$style['empty__text']">검색된 결과가 없습니다.</p>
          </div>
          <!-- // Case : 결과 없을 때 -->

          <!-- Case : 결과 있을 때 -->
          <ul :class="[$style['address-list'], 'row-margin-item-medium']">
            <li v-for="i in 3" :key="i" :class="$style['address-list__item']">
              <div :class="$style['address-list__block']">
                <div :class="$style['address-list__title']">16997</div>
                <KeyValue align="left" margin="mini" size="regular">
                  <KeyValueItem :classNames="{ item: 'text-body-4' }">
                    <KeyValueTitle>도로명</KeyValueTitle>
                    <KeyValueText
                      >인천 서구 에코로 181 하나금융그룹데이터센터</KeyValueText
                    >
                  </KeyValueItem>

                  <KeyValueItem :classNames="{ item: 'text-body-4' }">
                    <KeyValueTitle>지번</KeyValueTitle>
                    <KeyValueText>인천 서구 청라동 7-5</KeyValueText>
                  </KeyValueItem>
                </KeyValue>
                <button
                  type="button"
                  :class="$style['address-list__button']"
                  @click="select(true)"
                >
                  <span class="for-a11y">선택</span>
                </button>
              </div>
            </li>
          </ul>
          <!-- // Case : 결과 있을 때 -->
        </div>
        <!-- // DD : 검색 후 노출 -->
      </div>
      <!-- // 검색 -->

      <!-- 상세주소 입력 -->
      <div v-if="state.selected" class="contents-wrap">
        <div>
          <PageTextGroup>
            <PageMainText>
              <strong>상세주소를</strong><br />
              입력해 주세요
            </PageMainText>
          </PageTextGroup>

          <FormList>
            <FormListItem
              titleText="기본주소"
              :forceFocus="true"
              :disabled="true"
            >
              <InputBlock>
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="기본주소"
                    v-model="state.address"
                    :disabled="true"
                  />
                </InputBlockCell>
                <template v-slot:right>
                  <BasicButton
                    size="mini"
                    theme="quaternary"
                    @click="select(false)"
                  >
                    주소 재선택
                  </BasicButton>
                </template>
              </InputBlock>
            </FormListItem>

            <FormListItem
              titleText="나머지 주소"
              target="#layerSearchAddressDetail"
            >
              <InputBlock>
                <InputBlockCell :flexible="true">
                  <BasicInput
                    title="나머지 주소"
                    id="layerSearchAddressDetail"
                  />
                </InputBlockCell>
              </InputBlock>
            </FormListItem>
          </FormList>

          <ButtonList :class="$style['row-margin-container-medium']">
            <ButtonListItem>
              <BasicButton>확인</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>

        <!-- DD : 확인 버튼 누른 후 노출 -->
        <BasicHr className="row-margin-container-medium" />

        <div class="contents-wrap">
          <PageTextGroup>
            <PageMainText>
              <strong>아래 해당하는 주소를</strong><br />
              선택해 주세요
            </PageMainText>
          </PageTextGroup>
          <ul :class="[$style['address-list'], $style['address-list--select']]">
            <li :class="$style['address-list__item']">
              <ContentsButton>
                <div :class="$style['address-list__block']">
                  <div :class="$style['address-list__title']">16997</div>
                  <KeyValue align="left" margin="mini" size="medium">
                    <KeyValueItem
                      :classNames="{ item: 'text-body-4 color-black' }"
                    >
                      <KeyValueTitle>도로명</KeyValueTitle>
                      <KeyValueText>인천 서구 에코로 181</KeyValueText>
                    </KeyValueItem>

                    <KeyValueItem
                      :classNames="{ item: 'text-body-4 color-black' }"
                    >
                      <KeyValueTitle>입력 주소</KeyValueTitle>
                      <KeyValueText>하나금융그룹 로비</KeyValueText>
                    </KeyValueItem>
                  </KeyValue>
                </div>
              </ContentsButton>
            </li>
            <li :class="$style['address-list__item']">
              <ContentsButton>
                <div :class="$style['address-list__block']">
                  <div :class="$style['address-list__title']">16997</div>
                  <KeyValue align="left" margin="mini" size="medium">
                    <KeyValueItem
                      :classNames="{ item: 'text-body-4 color-black' }"
                    >
                      <KeyValueTitle>지번</KeyValueTitle>
                      <KeyValueText>인천 서구 청라동 7-5</KeyValueText>
                    </KeyValueItem>

                    <KeyValueItem
                      :classNames="{ item: 'text-body-4 color-black' }"
                    >
                      <KeyValueTitle>입력 주소</KeyValueTitle>
                      <KeyValueText>하나금융그룹 로비</KeyValueText>
                    </KeyValueItem>
                  </KeyValue>
                </div>
              </ContentsButton>
            </li>
          </ul>
        </div>
        <!-- // DD : 확인 버튼 누른 후 노출 -->
      </div>
      <!-- // 상세주소 입력 -->
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/searchAddress/LayerSearchAddress.scss';
</style>
