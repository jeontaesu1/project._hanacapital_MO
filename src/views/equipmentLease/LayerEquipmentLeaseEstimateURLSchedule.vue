<script>
// EL_M01_l005
import { ref } from 'vue';

import UiLayer from '@/components/ui/layer/UiLayer.vue';
import PopupTitle from '@/components/ui/layer/PopupTitle.vue';
import PopupButton from '@/components/ui/layer/PopupButton.vue';
import FullPopup from '@/components/ui/layer/FullPopup.vue';
import FullPopupHead from '@/components/ui/layer/FullPopupHead.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicBoxHead from '@/components/ui/common/BasicBoxHead.vue';
import BasicBoxHeadLeft from '@/components/ui/common/BasicBoxHeadLeft.vue';
import BasicBoxHeadRight from '@/components/ui/common/BasicBoxHeadRight.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

export default {
  components: {
    UiLayer,
    PopupTitle,
    PopupButton,
    FullPopup,
    FullPopupHead,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BasicBox,
    BasicBoxHead,
    BasicBoxHeadLeft,
    BasicBoxHeadRight,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    UnitText,
    BasicHr,
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
          <PopupTitle>예상 상환스케쥴</PopupTitle>
          <template v-slot:right>
            <PopupButton @click="layerSlotProps.close()" />
          </template>
        </FullPopupHead>
      </template>

      <BasicBox>
        <BasicBoxHead>
          <BasicBoxHeadLeft>
            <h3 class="text-body-3 font-weight-regular">월 납입액</h3>
          </BasicBoxHeadLeft>
          <BasicBoxHeadRight>
            <UnitText verticalAlign="center" rightUnit="원" align="right">
              333,389
            </UnitText>
          </BasicBoxHeadRight>
        </BasicBoxHead>

        <KeyValue margin="regular">
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>대출원금</KeyValueTitle>
            <KeyValueText>1,000,000 원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>이자합계</KeyValueTitle>
            <KeyValueText>167 원</KeyValueText>
          </KeyValueItem>
          <KeyValueItem
            :classNames="{
              item: 'text-body-3',
            }"
          >
            <KeyValueTitle>총 상환금액</KeyValueTitle>
            <KeyValueText>1,000,167 원</KeyValueText>
          </KeyValueItem>
        </KeyValue>
      </BasicBox>

      <BasicHr className="row-margin-container-medium" />

      <section>
        <ul :class="$style['bill-list']">
          <li :class="$style['bill-list__item']">
            <div :class="$style['bill-list__block']">
              <div :class="$style['bill-list__head']">
                <div :class="$style['bill-list__detail']">
                  <span :class="$style['bill-list__detail-item']">1회차</span>
                </div>
                <div :class="$style['bill-list__amount']">1,232,456,345 원</div>
              </div>
              <div :class="$style['bill-list__contents']">
                <div :class="$style['bill-list__contents-left']">
                  <dl :class="$style['bill-list__contents-list']">
                    <div :class="$style['bill-list__contents-item']">
                      <dt :class="$style['bill-list__contents-key']">원금</dt>
                      <dd :class="$style['bill-list__contents-value']">
                        912,232,321 원
                      </dd>
                    </div>
                    <div :class="$style['bill-list__contents-item']">
                      <dt :class="$style['bill-list__contents-key']">이자</dt>
                      <dd :class="$style['bill-list__contents-value']">
                        902,123,223 원
                      </dd>
                    </div>
                  </dl>
                </div>
                <div :class="$style['bill-list__contents-right']">
                  <dl :class="$style['bill-list__contents-list']">
                    <div :class="$style['bill-list__contents-item']">
                      <dt :class="$style['bill-list__contents-key']">잔액</dt>
                      <dd :class="$style['bill-list__contents-value']">
                        982,232,123 원
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </li>
          <li :class="$style['bill-list__item']">
            <div :class="$style['bill-list__block']">
              <div :class="$style['bill-list__head']">
                <div :class="$style['bill-list__detail']">
                  <span :class="$style['bill-list__detail-item']">2회차</span>
                </div>
                <div :class="$style['bill-list__amount']">1,232,456,345 원</div>
              </div>
              <div :class="$style['bill-list__contents']">
                <div :class="$style['bill-list__contents-left']">
                  <dl :class="$style['bill-list__contents-list']">
                    <div :class="$style['bill-list__contents-item']">
                      <dt :class="$style['bill-list__contents-key']">원금</dt>
                      <dd :class="$style['bill-list__contents-value']">
                        912,232,321 원
                      </dd>
                    </div>
                    <div :class="$style['bill-list__contents-item']">
                      <dt :class="$style['bill-list__contents-key']">이자</dt>
                      <dd :class="$style['bill-list__contents-value']">
                        902,123,223 원
                      </dd>
                    </div>
                  </dl>
                </div>
                <div :class="$style['bill-list__contents-right']">
                  <dl :class="$style['bill-list__contents-list']">
                    <div :class="$style['bill-list__contents-item']">
                      <dt :class="$style['bill-list__contents-key']">잔액</dt>
                      <dd :class="$style['bill-list__contents-value']">
                        982,232,123 원
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </li>
          <li :class="$style['bill-list__item']">
            <div :class="$style['bill-list__block']">
              <div :class="$style['bill-list__head']">
                <div :class="$style['bill-list__detail']">
                  <span :class="$style['bill-list__detail-item']">3회차</span>
                </div>
                <div :class="$style['bill-list__amount']">1,232,456,345 원</div>
              </div>
              <div :class="$style['bill-list__contents']">
                <div :class="$style['bill-list__contents-left']">
                  <dl :class="$style['bill-list__contents-list']">
                    <div :class="$style['bill-list__contents-item']">
                      <dt :class="$style['bill-list__contents-key']">원금</dt>
                      <dd :class="$style['bill-list__contents-value']">
                        912,232,321 원
                      </dd>
                    </div>
                    <div :class="$style['bill-list__contents-item']">
                      <dt :class="$style['bill-list__contents-key']">이자</dt>
                      <dd :class="$style['bill-list__contents-value']">
                        902,123,223 원
                      </dd>
                    </div>
                  </dl>
                </div>
                <div :class="$style['bill-list__contents-right']">
                  <dl :class="$style['bill-list__contents-list']">
                    <div :class="$style['bill-list__contents-item']">
                      <dt :class="$style['bill-list__contents-key']">잔액</dt>
                      <dd :class="$style['bill-list__contents-value']">
                        982,232,123 원
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </li>
        </ul>
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
@import '@/assets/scss/views/equipmentLease/LayerEquipmentLeaseEstimateSchedule.scss';
</style>
