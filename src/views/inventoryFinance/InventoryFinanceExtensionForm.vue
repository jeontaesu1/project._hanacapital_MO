<script>
// IF_M04_p003
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import UnitText from '@/components/ui/text/UnitText.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import FormList from '@/components/ui/form/FormList.vue';
import FormListItem from '@/components/ui/form/FormListItem.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import BankLogo from '@/components/ui/imageData/BankLogo.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    StepProgress,
    StickyBar,
    BasicBox,
    UnitText,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicHr,
    FormList,
    FormListItem,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckList,
    BoxCheckListItem,
    BankLogo,
    ButtonList,
    ButtonListItem,
    BasicButton,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '재고금융 만기연장');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });
  },
};
</script>

<template>
  <PageContents>
    <template v-slot:head>
      <StickyBar>
        <StepProgress :total="5" :current="3" />
      </StickyBar>
    </template>

    <PageTextGroup>
      <PageMainText>
        만기연장 조건을<br />
        <strong>선택해 주세요</strong>
      </PageMainText>
    </PageTextGroup>

    <BasicBox>
      <KeyValue margin="regular-small">
        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>만기연장 예정일자</KeyValueTitle>
          <KeyValueText>2019.03.05</KeyValueText>
        </KeyValueItem>

        <KeyValueItem
          :classNames="{
            item: 'text-body-3',
          }"
        >
          <KeyValueTitle>입금 신청일자</KeyValueTitle>
          <KeyValueText>2019.06.05</KeyValueText>
        </KeyValueItem>
      </KeyValue>
    </BasicBox>

    <BasicHr className="row-margin-container-medium" />

    <div>
      <section class="row-margin-contents-group">
        <h2 class="text-title-2 row-margin-contents">필수 상환금액 계산</h2>

        <FormList>
          <FormListItem titleText="원금상환비율" :forceFocus="true">
            <BoxCheckList>
              <BoxCheckListItem>
                <BoxCheck
                  name="inventoryFinanceExtensionFormRatio"
                  id="inventoryFinanceExtensionFormRatio001"
                  :defaultChecked="true"
                >
                  <BoxCheckLabel>30%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  name="inventoryFinanceExtensionFormRatio"
                  id="inventoryFinanceExtensionFormRatio002"
                >
                  <BoxCheckLabel>20%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
              <BoxCheckListItem>
                <BoxCheck
                  name="inventoryFinanceExtensionFormRatio"
                  id="inventoryFinanceExtensionFormRatio003"
                >
                  <BoxCheckLabel>10%</BoxCheckLabel>
                </BoxCheck>
              </BoxCheckListItem>
            </BoxCheckList>
          </FormListItem>
        </FormList>

        <BasicBox className="row-margin-contents">
          <KeyValue verticalAlign="center">
            <KeyValueItem :classNames="{ item: 'text-body-3' }">
              <KeyValueTitle :classNames="{ title: 'color-black' }">
                총 차량가격
              </KeyValueTitle>
              <KeyValueText>
                <UnitText rightUnit="원" align="right">1,545,750</UnitText>
              </KeyValueText>
            </KeyValueItem>
          </KeyValue>
          <BasicHr
            type="contents"
            theme="quaternary"
            className="row-margin-contents-small"
          />
          <KeyValue margin="regular-small">
            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>원금상환</KeyValueTitle>
              <KeyValueText>
                <span class="color-green">1,300,000 원</span>
              </KeyValueText>
            </KeyValueItem>

            <KeyValueItem
              :classNames="{
                item: 'text-body-3',
              }"
            >
              <KeyValueTitle>이자상환</KeyValueTitle>
              <KeyValueText>245,750 원</KeyValueText>
            </KeyValueItem>
          </KeyValue>
        </BasicBox>
      </section>

      <section class="row-margin-contents-group">
        <h2 class="text-title-2 row-margin-contents">입금정보</h2>

        <KeyValue>
          <KeyValueItem>
            <KeyValueTitle>결제방법</KeyValueTitle>
            <KeyValueText>입금가상계좌</KeyValueText>
          </KeyValueItem>
        </KeyValue>

        <section class="row-margin-contents">
          <h2
            class="text-body-2 color-gray-secondary font-weight-regular row-margin-item"
          >
            입금가상계좌
          </h2>

          <BasicBox theme="senary">
            <KeyValue align="left" margin="regular" size="regular">
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>
                  <div class="flex-box">
                    <div class="flex-box__cell">
                      <BankLogo size="small" code="004" />
                    </div>
                    <div class="flex-box__cell flex-box__cell--mini">국민</div>
                  </div>
                </KeyValueTitle>
                <KeyValueText> 123-456-78901234 </KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>
                  <div class="flex-box">
                    <div class="flex-box__cell">
                      <BankLogo size="small" code="011" />
                    </div>
                    <div class="flex-box__cell flex-box__cell--mini">농협</div>
                  </div>
                </KeyValueTitle>
                <KeyValueText> 123-456-78901234 </KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>
                  <div class="flex-box">
                    <div class="flex-box__cell">
                      <BankLogo size="small" code="020" />
                    </div>
                    <div class="flex-box__cell flex-box__cell--mini">우리</div>
                  </div>
                </KeyValueTitle>
                <KeyValueText> 123-456-78901234 </KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>
                  <div class="flex-box">
                    <div class="flex-box__cell">
                      <BankLogo size="small" code="081" />
                    </div>
                    <div class="flex-box__cell flex-box__cell--mini">하나</div>
                  </div>
                </KeyValueTitle>
                <KeyValueText> 123-456-78901234 </KeyValueText>
              </KeyValueItem>
              <KeyValueItem
                :classNames="{
                  item: 'text-body-3',
                }"
              >
                <KeyValueTitle>
                  <div class="flex-box">
                    <div class="flex-box__cell">
                      <BankLogo size="small" code="088" />
                    </div>
                    <div class="flex-box__cell flex-box__cell--mini">신한</div>
                  </div>
                </KeyValueTitle>
                <KeyValueText>123-456-78901234-1234567890-12345</KeyValueText>
              </KeyValueItem>
            </KeyValue>
          </BasicBox>
        </section>
      </section>
    </div>

    <template v-slot:foot>
      <ButtonList
        :classNames="{
          wrap: 'row-margin-none',
        }"
      >
        <ButtonListItem>
          <BasicButton :line="true" theme="quaternary">이전</BasicButton>
        </ButtonListItem>
        <ButtonListItem>
          <BasicButton>다음</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </template>
  </PageContents>
</template>
