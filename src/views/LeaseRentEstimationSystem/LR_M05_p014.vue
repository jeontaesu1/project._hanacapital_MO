<script>
// LR_M05_p014
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import BoxCheckList from '@/components/ui/form/BoxCheckList.vue';
import BoxCheck from '@/components/ui/form/BoxCheck.vue';
import BoxCheckLabel from '@/components/ui/form/BoxCheckLabel.vue';
import BoxCheckObject from '@/components/ui/form/BoxCheckObject.vue';
import BoxCheckListItem from '@/components/ui/form/BoxCheckListItem.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import RoundStatus from '@/components/ui/text/RoundStatus.vue';
import KeyValue from '@/components/ui/text/KeyValue.vue';
import KeyValueItem from '@/components/ui/text/KeyValueItem.vue';
import KeyValueTitle from '@/components/ui/text/KeyValueTitle.vue';
import KeyValueText from '@/components/ui/text/KeyValueText.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';

export default {
  components: {
    PageContents,
    BoxCheckList,
    BoxCheck,
    BoxCheckLabel,
    BoxCheckObject,
    BoxCheckListItem,
    ButtonList,
    ButtonListItem,
    BasicButton,
    BasicHr,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    RoundStatus,
    KeyValue,
    KeyValueItem,
    KeyValueTitle,
    KeyValueText,
    BasicBox,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '팝업/보조금 관리');
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
    <section>
      <h3 class="text-title-2 font-weight-bold row-margin-contents">
        전기차 보조금 지원지역 설정
      </h3>

      <BoxCheckList :wrap="true">
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="checkbox"
            name="LR_M05_p014_check"
            id="LR_M05_p014_check001"
          >
            <template v-slot:left>
              <BoxCheckObject />
            </template>
            <BoxCheckLabel>서울특별시</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="checkbox"
            name="LR_M05_p014_check"
            id="LR_M05_p014_check002"
          >
            <template v-slot:left>
              <BoxCheckObject />
            </template>
            <BoxCheckLabel>부산광역시</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="checkbox"
            name="LR_M05_p014_check"
            id="LR_M05_p014_check003"
          >
            <template v-slot:left>
              <BoxCheckObject />
            </template>
            <BoxCheckLabel>대구광역시</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="checkbox"
            name="LR_M05_p014_check"
            id="LR_M05_p014_check004"
          >
            <template v-slot:left>
              <BoxCheckObject />
            </template>
            <BoxCheckLabel>인천광역시</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="checkbox"
            name="LR_M05_p014_check"
            id="LR_M05_p014_check005"
          >
            <template v-slot:left>
              <BoxCheckObject />
            </template>
            <BoxCheckLabel>대전광역시</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="checkbox"
            name="LR_M05_p014_check"
            id="LR_M05_p014_check006"
          >
            <template v-slot:left>
              <BoxCheckObject />
            </template>
            <BoxCheckLabel>광주광역시</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
        <BoxCheckListItem>
          <BoxCheck
            :contents="true"
            type="checkbox"
            name="LR_M05_p014_check"
            id="LR_M05_p014_check007"
          >
            <template v-slot:left>
              <BoxCheckObject />
            </template>
            <BoxCheckLabel>수원특례시</BoxCheckLabel>
          </BoxCheck>
        </BoxCheckListItem>
      </BoxCheckList>

      <ButtonList
        :classNames="{
          wrap: 'row-margin-container-medium',
        }"
      >
        <ButtonListItem>
          <BasicButton>설정 저장</BasicButton>
        </ButtonListItem>
      </ButtonList>
    </section>

    <BasicHr class="row-margin-container-medium" />

    <section>
      <h3 class="text-title-2 font-weight-bold row-margin-contents">
        팝업 관리
      </h3>

      <UiAccordion>
        <!-- Case : 노출 -->
        <UiAccordionItem :classNames="{ item: 'row-margin-item-group' }">
          <BasicBox>
            <div class="flex-box">
              <div class="flex-box__cell flex-1">
                <p
                  class="text-body-4 color-green font-weight-medium row-margin-small"
                >
                  로그인
                </p>
                <h4 class="text-body-1 font-weight-medium ellipsis">
                  공지사항
                </h4>
                <p class="text-body-4 color-gray row-margin-small">
                  2023.04.01~2023.04.01
                </p>
              </div>
              <div class="flex-box__cell">
                <RoundStatus :block="true" theme="secondary">
                  노출
                </RoundStatus>
              </div>
              <div class="flex-box__cell">
                <UiAccordionOpener
                  :classNames="{
                    button: $style['opener'],
                  }"
                />
              </div>
            </div>

            <UiAccordionLayer>
              <div :class="$style['contents']">
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>페이지</KeyValueTitle>
                    <KeyValueText>이용가능</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>최종수정자</KeyValueTitle>
                    <KeyValueText>hana123</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>최종수정일</KeyValueTitle>
                    <KeyValueText>2023.01.23</KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
                  <ButtonListItem>
                    <BasicButton size="small" theme="tertiary">
                      보기
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton size="small">수정</BasicButton>
                  </ButtonListItem>
                </ButtonList>
              </div>
            </UiAccordionLayer>
          </BasicBox>
        </UiAccordionItem>

        <UiAccordionItem :classNames="{ item: 'row-margin-item-group' }">
          <BasicBox>
            <div class="flex-box">
              <div class="flex-box__cell flex-1">
                <p
                  class="text-body-4 color-green font-weight-medium row-margin-small"
                >
                  리스견적(시승차)
                </p>
                <h4 class="text-body-1 font-weight-medium ellipsis">
                  모바일견적 이용불가 안내
                </h4>
                <p class="text-body-4 color-gray row-margin-small">
                  2023.04.01~2023.04.01
                </p>
              </div>
              <div class="flex-box__cell">
                <RoundStatus :block="true" theme="secondary">
                  노출
                </RoundStatus>
              </div>
              <div class="flex-box__cell">
                <UiAccordionOpener
                  :classNames="{
                    button: $style['opener'],
                  }"
                />
              </div>
            </div>

            <UiAccordionLayer>
              <div :class="$style['contents']">
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>페이지</KeyValueTitle>
                    <KeyValueText>이용가능</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>최종수정자</KeyValueTitle>
                    <KeyValueText>hana123</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>최종수정일</KeyValueTitle>
                    <KeyValueText>2023.01.23</KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
                  <ButtonListItem>
                    <BasicButton size="small" theme="tertiary">
                      보기
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton size="small">수정</BasicButton>
                  </ButtonListItem>
                </ButtonList>
              </div>
            </UiAccordionLayer>
          </BasicBox>
        </UiAccordionItem>

        <UiAccordionItem :classNames="{ item: 'row-margin-item-group' }">
          <BasicBox>
            <div class="flex-box">
              <div class="flex-box__cell flex-1">
                <p
                  class="text-body-4 color-green font-weight-medium row-margin-small"
                >
                  리스견적(중고차)
                </p>
                <h4 class="text-body-1 font-weight-medium ellipsis">
                  모바일견적 이용불가 안내
                </h4>
                <p class="text-body-4 color-gray row-margin-small">
                  2023.04.01~2023.04.01
                </p>
              </div>
              <div class="flex-box__cell">
                <RoundStatus :block="true" theme="secondary">
                  노출
                </RoundStatus>
              </div>
              <div class="flex-box__cell">
                <UiAccordionOpener
                  :classNames="{
                    button: $style['opener'],
                  }"
                />
              </div>
            </div>

            <UiAccordionLayer>
              <div :class="$style['contents']">
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>페이지</KeyValueTitle>
                    <KeyValueText>이용가능</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>최종수정자</KeyValueTitle>
                    <KeyValueText>hana123</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>최종수정일</KeyValueTitle>
                    <KeyValueText>2023.01.23</KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
                  <ButtonListItem>
                    <BasicButton size="small" theme="tertiary">
                      보기
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton size="small">수정</BasicButton>
                  </ButtonListItem>
                </ButtonList>
              </div>
            </UiAccordionLayer>
          </BasicBox>
        </UiAccordionItem>
        <!-- // Case : 노출 -->

        <!-- Case : 중지 -->
        <UiAccordionItem :classNames="{ item: 'row-margin-item-group' }">
          <BasicBox>
            <div class="flex-box">
              <div class="flex-box__cell flex-1">
                <p
                  class="text-body-4 color-green font-weight-medium row-margin-small"
                >
                  렌트견적
                </p>
                <h4 class="text-body-1 font-weight-medium ellipsis">
                  공지사항
                </h4>
                <p class="text-body-4 color-gray row-margin-small">
                  2023.04.01~2023.04.01
                </p>
              </div>
              <div class="flex-box__cell">
                <RoundStatus :block="true">중지</RoundStatus>
              </div>
              <div class="flex-box__cell">
                <UiAccordionOpener
                  :classNames="{
                    button: $style['opener'],
                  }"
                />
              </div>
            </div>

            <UiAccordionLayer>
              <div :class="$style['contents']">
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>페이지</KeyValueTitle>
                    <KeyValueText>이용가능</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>최종수정자</KeyValueTitle>
                    <KeyValueText>hana123</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>최종수정일</KeyValueTitle>
                    <KeyValueText>2023.01.23</KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
                  <ButtonListItem>
                    <BasicButton size="small" theme="tertiary">
                      보기
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton size="small">수정</BasicButton>
                  </ButtonListItem>
                </ButtonList>
              </div>
            </UiAccordionLayer>
          </BasicBox>
        </UiAccordionItem>

        <UiAccordionItem :classNames="{ item: 'row-margin-item-group' }">
          <BasicBox>
            <div class="flex-box">
              <div class="flex-box__cell flex-1">
                <p
                  class="text-body-4 color-green font-weight-medium row-margin-small"
                >
                  선구매견적
                </p>
                <h4 class="text-body-1 font-weight-medium ellipsis">
                  공지사항
                </h4>
                <p class="text-body-4 color-gray row-margin-small">
                  2023.04.01~2023.04.01
                </p>
              </div>
              <div class="flex-box__cell">
                <RoundStatus :block="true">중지</RoundStatus>
              </div>
              <div class="flex-box__cell">
                <UiAccordionOpener
                  :classNames="{
                    button: $style['opener'],
                  }"
                />
              </div>
            </div>

            <UiAccordionLayer>
              <div :class="$style['contents']">
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>페이지</KeyValueTitle>
                    <KeyValueText>이용가능</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>최종수정자</KeyValueTitle>
                    <KeyValueText>hana123</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>최종수정일</KeyValueTitle>
                    <KeyValueText>2023.01.23</KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
                  <ButtonListItem>
                    <BasicButton size="small" theme="tertiary">
                      보기
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton size="small">수정</BasicButton>
                  </ButtonListItem>
                </ButtonList>
              </div>
            </UiAccordionLayer>
          </BasicBox>
        </UiAccordionItem>

        <UiAccordionItem :classNames="{ item: 'row-margin-item-group' }">
          <BasicBox>
            <div class="flex-box">
              <div class="flex-box__cell flex-1">
                <p
                  class="text-body-4 color-green font-weight-medium row-margin-small"
                >
                  리스견적(신차)
                </p>
                <h4 class="text-body-1 font-weight-medium ellipsis">
                  모바일견적 이용불가 안내
                </h4>
                <p class="text-body-4 color-gray row-margin-small">
                  2023.04.01~2023.04.01
                </p>
              </div>
              <div class="flex-box__cell">
                <RoundStatus :block="true">중지</RoundStatus>
              </div>
              <div class="flex-box__cell">
                <UiAccordionOpener
                  :classNames="{
                    button: $style['opener'],
                  }"
                />
              </div>
            </div>

            <UiAccordionLayer>
              <div :class="$style['contents']">
                <KeyValue margin="regular">
                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>페이지</KeyValueTitle>
                    <KeyValueText>이용가능</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>최종수정자</KeyValueTitle>
                    <KeyValueText>hana123</KeyValueText>
                  </KeyValueItem>

                  <KeyValueItem
                    :classNames="{
                      item: 'text-body-3',
                    }"
                  >
                    <KeyValueTitle>최종수정일</KeyValueTitle>
                    <KeyValueText>2023.01.23</KeyValueText>
                  </KeyValueItem>
                </KeyValue>

                <ButtonList :classNames="{ wrap: 'row-margin-contents-small' }">
                  <ButtonListItem>
                    <BasicButton size="small" theme="tertiary">
                      보기
                    </BasicButton>
                  </ButtonListItem>
                  <ButtonListItem>
                    <BasicButton size="small">수정</BasicButton>
                  </ButtonListItem>
                </ButtonList>
              </div>
            </UiAccordionLayer>
          </BasicBox>
        </UiAccordionItem>
        <!-- // Case : 중지 -->
      </UiAccordion>
    </section>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/LeaseRentEstimationSystem/LR_M05_p014.scss';
</style>
