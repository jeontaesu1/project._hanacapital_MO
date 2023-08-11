<script>
// AF_M00_l001
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import RoundButton from '@/components/ui/button/RoundButton.vue';
import CarEmblem from '@/components/ui/imageData/CarEmblem.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import RoundTab from '@/components/ui/tab/RoundTab.vue';
import RoundTabButton from '@/components/ui/tab/RoundTabButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

import IconTell from '@/assets/images/icon/tell.svg?component';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    RoundButton,
    CarEmblem,
    InputBlock,
    InputBlockCell,
    BasicInput,
    SearchButton,
    UiTab,
    UiTabPanel,
    RoundTab,
    RoundTabButton,
    ButtonList,
    ButtonListItem,
    BasicButton,
    IconTell,
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
            <div class="flex-box">
              <div class="flex-box__cell">
                <RoundButton tagName="a" href="tel:1800-1110">
                  <template v-slot:leftIcon>
                    <IconTell />
                  </template>
                  상담원 연결
                </RoundButton>
              </div>
              <div class="flex-box__cell flex-box__cell--regular">
                <PopupButton @click="layerSlotProps.close()" />
              </div>
            </div>
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          자동차 제조사를<br />
          <strong>선택해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <InputBlock>
        <InputBlockCell :flexible="true">
          <BasicInput
            type="search"
            title="자동차명 검색어"
            placeholder="자동차명으로 검색"
          />
        </InputBlockCell>
        <InputBlockCell type="search">
          <SearchButton />
        </InputBlockCell>
      </InputBlock>

      <UiTab :classNames="{ wrap: 'row-margin-container-medium' }">
        <RoundTab
          :useUiTab="true"
          :classNames="{ wrap: 'row-margin-item-group' }"
        >
          <RoundTabButton link="layerAutoEstimateSelectBrand1_001">
            국산
          </RoundTabButton>
          <RoundTabButton link="layerAutoEstimateSelectBrand1_002">
            수입
          </RoundTabButton>
        </RoundTab>

        <UiTabPanel name="layerAutoEstimateSelectBrand1_001">
          <div :class="$style['bank-brand']">
            <ul :class="$style['bank-brand__list']">
              <li :class="$style['bank-brand__item']">
                <button type="button" :class="$style['bank-brand__block']">
                  <span :class="$style['bank-brand__logo']">
                    <CarEmblem
                      src="/images/_dummy/car-emblem.png"
                      size="medium"
                    />
                  </span>
                  <span :class="$style['bank-brand__text']">현대</span>
                </button>
              </li>
              <li :class="$style['bank-brand__item']">
                <button type="button" :class="$style['bank-brand__block']">
                  <span :class="$style['bank-brand__logo']">
                    <CarEmblem
                      src="/images/_dummy/car-emblem.png"
                      size="medium"
                    />
                  </span>
                  <span :class="$style['bank-brand__text']">기아</span>
                </button>
              </li>
              <li :class="$style['bank-brand__item']">
                <button type="button" :class="$style['bank-brand__block']">
                  <span :class="$style['bank-brand__logo']">
                    <CarEmblem
                      src="/images/_dummy/car-emblem.png"
                      size="medium"
                    />
                  </span>
                  <span :class="$style['bank-brand__text']">르노삼성</span>
                </button>
              </li>
              <li :class="$style['bank-brand__item']">
                <button type="button" :class="$style['bank-brand__block']">
                  <span :class="$style['bank-brand__logo']">
                    <CarEmblem
                      src="/images/_dummy/car-emblem.png"
                      size="medium"
                    />
                  </span>
                  <span :class="$style['bank-brand__text']">쌍용</span>
                </button>
              </li>
              <li :class="$style['bank-brand__item']">
                <button type="button" :class="$style['bank-brand__block']">
                  <span :class="$style['bank-brand__logo']">
                    <CarEmblem
                      src="/images/_dummy/car-emblem.png"
                      size="medium"
                    />
                  </span>
                  <span :class="$style['bank-brand__text']">쉐보레</span>
                </button>
              </li>
              <li :class="$style['bank-brand__item']">
                <button type="button" :class="$style['bank-brand__block']">
                  <span :class="$style['bank-brand__logo']">
                    <CarEmblem
                      src="/images/_dummy/car-emblem.png"
                      size="medium"
                    />
                  </span>
                  <span :class="$style['bank-brand__text']">제네시스</span>
                </button>
              </li>
              <li :class="$style['bank-brand__item']">
                <button type="button" :class="$style['bank-brand__block']">
                  <span :class="$style['bank-brand__logo']">
                    <CarEmblem
                      src="/images/_dummy/car-emblem.png"
                      size="medium"
                    />
                  </span>
                  <span :class="$style['bank-brand__text']">대창모터스</span>
                </button>
              </li>
            </ul>
          </div>
        </UiTabPanel>

        <UiTabPanel name="layerAutoEstimateSelectBrand1_002">
          <ul :class="$style['bank-brand__list']">
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">타타대우</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">벤츠</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">BMW</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">아우디</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">도요타</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">폭스바겐</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">혼다</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">포드</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">크라이슬러</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">볼보</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">푸조</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">GM</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">재규어</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">랜드로버</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">포르쉐</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">마세라티</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">페라리</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">람보르기니</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">벤틀리</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">애스톤마틴</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">시트로엥</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">캐딜락</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">렉서스</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">롤스로이스</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">링컨</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">미니</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">인피니티</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">지프</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">맥라렌</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">닷지</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">애스턴마틴</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">토요타</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">테슬라</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">할리데이비슨</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">맥라렌</span>
              </button>
            </li>
            <li :class="$style['bank-brand__item']">
              <button type="button" :class="$style['bank-brand__block']">
                <span :class="$style['bank-brand__logo']">
                  <CarEmblem
                    src="/images/_dummy/car-emblem.png"
                    size="medium"
                  />
                </span>
                <span :class="$style['bank-brand__text']">에스턴마틴</span>
              </button>
            </li>
          </ul>
        </UiTabPanel>
      </UiTab>

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
@import '@/assets/scss/views/auto/LayerAutoEstimateSelectBrand.scss';
</style>
