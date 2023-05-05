<script>
// MI_M01_l003
import { ref, reactive } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import FormInvalid from '@/components/ui/form/FormInvalid.vue';
import FormInvalidMessage from '@/components/ui/form/FormInvalidMessage.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

export default {
  components: {
    UiLayer,
    PopupButton,
    FullPopup,
    FullPopupHead,
    PageTextGroup,
    PageMainText,
    InputBlock,
    InputBlockCell,
    BasicInput,
    FormList,
    FormListItem,
    FormInvalid,
    FormInvalidMessage,
    BasicButton,
    ButtonList,
    ButtonListItem,
  },
  setup() {
    const state = reactive({
      phoneError001: false,
      phoneError002: false,
      phoneError003: false,
      phoneError004: false,
      phoneError005: false,
      phoneError006: false,
      phoneError007: false,
      phoneError008: false,
      phoneError009: false,
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
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <PageTextGroup>
        <PageMainText>
          신용카드 인증을 위해<br />
          <strong>이름을 입력해 주세요</strong>
        </PageMainText>
      </PageTextGroup>

      <div>
        <ul :class="$style['basic-list']">
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              SMS안내 수신 시 사용할 연락처를 확인하시고 변경할 수 있어요.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              연락처 변경 시, 각 계약별로 설정되어 있는 SMS안내 연락처도 함께
              변경 돼요.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              각 계약별로 설정된 SMS안내 확인은
              <span class="font-weight-medium">대출상세 > 결제/청구 정보</span>
              메뉴를 이용하세요.
            </div>
          </li>
          <li :class="$style['basic-list__item']">
            <div :class="$style['basic-list__symbol']"></div>
            <div :class="$style['basic-list__content']">
              스탁론은 고객센터 1800-1110을 통해 변경하세요.
            </div>
          </li>
        </ul>
      </div>

      <FormList>
        <!-- case : 개인 회원일 경우 노출 -->
        <FormListItem titleText="휴대전화" target="#layerMyInfoEditPhone001">
          <FormInvalid :error="state.phoneError001">
            <InputBlock :error="state.phoneError001">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="휴대전화"
                  id="layerMyInfoEditPhone001"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="자택전화" target="#layerMyInfoEditPhone002">
          <FormInvalid :error="state.phoneError002">
            <InputBlock :error="state.phoneError002">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="자택전화"
                  id="layerMyInfoEditPhone002"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem titleText="직장전화" target="#layerMyInfoEditPhone003">
          <FormInvalid :error="state.phoneError003">
            <InputBlock :error="state.phoneError003">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="직장전화"
                  id="layerMyInfoEditPhone003"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
        <!-- // case : 개인 회원일 경우 노출 -->

        <!-- // case : 개인사업자/법인 회원일 경우 노출 -->
        <FormListItem
          titleText="대표자 사무실"
          target="#layerMyInfoEditPhone004"
        >
          <FormInvalid :error="state.phoneError004">
            <InputBlock :error="state.phoneError004">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="대표자 사무실"
                  id="layerMyInfoEditPhone004"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="대표자 휴대전화"
          target="#layerMyInfoEditPhone005"
        >
          <FormInvalid :error="state.phoneError005">
            <InputBlock :error="state.phoneError005">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="대표자 휴대전화"
                  id="layerMyInfoEditPhone005"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="담당자1 사무실"
          target="#layerMyInfoEditPhone006"
        >
          <FormInvalid :error="state.phoneError006">
            <InputBlock :error="state.phoneError006">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="담당자1 사무실"
                  id="layerMyInfoEditPhone006"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="담당자1 휴대전화"
          target="#layerMyInfoEditPhone007"
        >
          <FormInvalid :error="state.phoneError007">
            <InputBlock :error="state.phoneError007">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="담당자1 휴대전화"
                  id="layerMyInfoEditPhone007"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="담당자2 사무실"
          target="#layerMyInfoEditPhone008"
        >
          <FormInvalid :error="state.phoneError008">
            <InputBlock :error="state.phoneError008">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="담당자2 사무실"
                  id="layerMyInfoEditPhone008"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>

        <FormListItem
          titleText="담당자2 휴대전화"
          target="#layerMyInfoEditPhone009"
        >
          <FormInvalid :error="state.phoneError009">
            <InputBlock :error="state.phoneError009">
              <InputBlockCell :flexible="true">
                <BasicInput
                  type="number"
                  pattern="\d*"
                  title="담당자2 휴대전화"
                  id="layerMyInfoEditPhone009"
                />
              </InputBlockCell>
            </InputBlock>
            <FormInvalidMessage>Error Message</FormInvalidMessage>
          </FormInvalid>
        </FormListItem>
      </FormList>

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
@import '@/assets/scss/views/myInfo/LayerMyInfoEditPhone.scss';
</style>
