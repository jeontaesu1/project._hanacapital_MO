<script>
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import IconCall from '@/assets/images/icon/call.svg?component';
import IconCamera from '@/assets/images/icon/camera.svg?component';
import IconFolder from '@/assets/images/icon/folder.svg?component';
import IconLocation from '@/assets/images/icon/location.svg?component';
import IconDocument from '@/assets/images/icon/document.svg?component';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    IconCall,
    IconCamera,
    IconFolder,
    IconLocation,
    IconDocument,
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
          하나캐피탈 앱 서비스 이용을 위해<br />
          <strong>접근 권한이 필요합니다</strong>
        </PageMainText>
      </PageTextGroup>

      <div :class="[$style['authority']]">
        <ul :class="[$style['authority__list']]">
          <li :class="[$style['authority__item']]">
            <span :class="[$style['authority__icon']]">
              <IconCall />
            </span>
            <div :class="[$style['authority__desc']]">
              <div :class="[$style['authority__desc-block']]">
                <strong :class="[$style['authority__desc-title']]">전화</strong>
                <span class="color-green">(필수)</span>
              </div>
              <div :class="[$style['authority__desc-text']]">
                고객센터 및 기타 상담을 위하여<br />
                전화를 걸 때 사용합니다.
              </div>
            </div>
          </li>
          <li :class="[$style['authority__item']]">
            <span :class="[$style['authority__icon']]">
              <IconCamera />
            </span>
            <div :class="[$style['authority__desc']]">
              <div :class="[$style['authority__desc-block']]">
                <strong :class="[$style['authority__desc-title']]"
                  >카메라</strong
                >
                <span class="color-gray">(선택)</span>
              </div>
              <div :class="[$style['authority__desc-text']]">
                카메라를 통한 사진 파일을<br />
                전송할 때 사용합니다.
              </div>
            </div>
          </li>
          <li :class="[$style['authority__item']]">
            <span :class="[$style['authority__icon']]">
              <IconFolder />
            </span>
            <div :class="[$style['authority__desc']]">
              <div :class="[$style['authority__desc-block']]">
                <strong :class="[$style['authority__desc-title']]"
                  >저장공간</strong
                >
                <span class="color-gray">(선택)</span>
              </div>
              <div :class="[$style['authority__desc-text']]">
                외부 저장소 (메모리)에 저장되어 있는<br />
                데이터를 전송할 때 사용합니다.
              </div>
            </div>
          </li>
          <li :class="[$style['authority__item']]">
            <span :class="[$style['authority__icon']]">
              <IconLocation />
            </span>
            <div :class="[$style['authority__desc']]">
              <div :class="[$style['authority__desc-block']]">
                <strong :class="[$style['authority__desc-title']]">위치</strong>
                <span class="color-gray">(선택)</span>
              </div>
              <div :class="[$style['authority__desc-text']]">
                재고금융 실사 촬영을 등<br />
                현재 위치정보 수집을 할 때 사용합니다.
              </div>
            </div>
          </li>
          <li :class="[$style['authority__item']]">
            <span :class="[$style['authority__icon']]">
              <IconDocument />
            </span>
            <div :class="[$style['authority__desc']]">
              <div :class="[$style['authority__desc-block']]">
                <strong :class="[$style['authority__desc-title']]"
                  >기기 및 앱 기록</strong
                >
                <span class="color-gray">(선택)</span>
              </div>
              <div :class="[$style['authority__desc-text']]">
                전자금융거래 사고 방지를 위해 기기에<br />
                설치된 위협 정보를 수집할 수 있습니다.
              </div>
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
            <BasicButton>확인</BasicButton>
          </ButtonListItem>
        </ButtonList>
      </template>
    </FullPopup>
  </UiLayer>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/infomation/LayerAuthorityAOS.scss';
</style>
