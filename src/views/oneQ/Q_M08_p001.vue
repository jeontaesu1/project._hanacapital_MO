<script>
// Q_M08_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiCommonStore } from '@/stores/ui/common';
import { useUiLayoutStore } from '@/stores/ui/layout';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    BottomSticky,
  },
  setup() {
    const store = {
      ui: {
        common: useUiCommonStore(),
        layout: useUiLayoutStore(),
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.layout.setUseFooter(false);

      store.ui.header.setTitle(() => '우수고객추가대출');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => []);
    });

    onUnmounted(() => {
      store.ui.layout.setUseFooter();

      store.ui.header.setTitle();
      store.ui.header.setLeftButtons();
      store.ui.header.setRightButtons();
    });
  },
};
</script>

<template>
  <PageContents>
    <PageTextGroup>
      <PageMainText>
        하나캐피탈 우수고객 전용<br />
        추가(신용)대출 금융서비스 입니다.
      </PageMainText>
    </PageTextGroup>

    <div :class="$style['contents-wrap']">
      <div :class="$style['basic-table']">
        <table>
          <colgroup>
            <col style="width: 78px" />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th class="text-body-4 color-black align-left">대상</th>
              <td class="text-body-3 align-left">
                하나캐피탈 대출 우수고객 및<br />
                하나캐피탈 멤버십 가입회원
              </td>
            </tr>
            <tr>
              <th class="text-body-4 color-black align-left">한도</th>
              <td class="text-body-3 align-left">
                최대 5천만원 (최저 300만원)
              </td>
            </tr>
            <tr>
              <th class="text-body-4 color-black align-left">금리</th>
              <td class="text-body-3 align-left underline">
                연 5.9% ~ 최고 16.9%<br />
                연체이자율 : 약정이율 + 3%<br />
                (법정 최고금리 연 20% 이내)
              </td>
            </tr>
            <tr>
              <th class="text-body-4 color-black align-left">기간</th>
              <td class="text-body-3 align-left">12개월 ~ 120개월</td>
            </tr>
            <tr>
              <th class="text-body-4 color-black align-left">상환방법</th>
              <td class="text-body-3 align-left">원리금균등분할상환</td>
            </tr>
            <tr>
              <th class="text-body-4 color-black align-left">
                중도상환 수수료
              </th>
              <td class="text-body-3 align-left">없음</td>
            </tr>
            <tr>
              <th class="text-body-4 color-black align-left">이자부과 시기</th>
              <td class="text-body-3 align-left">매월 후취</td>
            </tr>
            <tr>
              <th class="text-body-4 color-black align-left">기타</th>
              <td class="text-body-3 align-left">
                소득 및 재직 확인 필요시<br />
                건강보험 스크래핑으로 진행<br />
                (스크래핑 정보 확인 불가 시<br />
                건강보험자격득실확인서,<br />
                건강보험료 납부확인서 제출)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <ul
        :class="[
          $style['basic-list'],
          $style['basic-list--regular'],
          'row-margin-contents',
        ]"
      >
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-3']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            계약을 체결하기 전에 자세한 내용은 상품설명서와 약관을 읽어보시기
            바랍니다.
          </div>
        </li>
        <li
          :class="[
            $style['basic-list__item'],
            'color-black',
            'font-weight-medium',
            'text-body-3',
          ]"
        >
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            상환능력에 비해 대출금이 과도할 경우 귀하의 신용등급 또는
            개인신용평점이 하락할 수 있습니다.
          </div>
        </li>
        <li
          :class="[
            $style['basic-list__item'],
            'color-black',
            'font-weight-medium',
            'text-body-3',
          ]"
        >
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            개인신용평점 하락 시 금융거래와 관련된 불이익이 발생할 수 있습니다.
          </div>
        </li>
        <li
          :class="[
            $style['basic-list__item'],
            'color-black',
            'font-weight-medium',
            'text-body-3',
          ]"
        >
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            일정기간 원리금을 연체할 경우, 모든 원리금을 변제할 의무가 발생할 수
            있습니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-3']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            대출취급이 부적정한 경우 (연체금 보유, 개인신용평점 낮음) 대출이
            제한될 수 있습니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-3']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            금융소비자는 해당 상품 또는 서비스에 대하여 설명을 받을 권리가
            있으며, 그 설명을 듣고 내용을 충분히 이해한 후 거래하시기 바랍니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-3']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            금리인하요구권 및 대출계약 철회권에 대한 자세한 사항은 홈페이지에서
            확인하시기 바랍니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-3']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            금융소비자의 개인신용평점에 따라 대출한도 및 금리가 차등 적용됩니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-3']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            개인신용상태 및 금융서비스 이용기간 경과 시 이용이 제한될 수
            있습니다.
          </div>
        </li>
        <li :class="[$style['basic-list__item'], 'color-black', 'text-body-3']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            금융서비스 이용기간은 당사 사정에 따라 변경될 수 있습니다.
          </div>
        </li>
      </ul>

      <ul :class="[$style['basic-list'], 'row-margin-contents']">
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            준법심의필 23-50 (2023.02.15 ~ 2024.02.14)
          </div>
        </li>
        <li :class="$style['basic-list__item']">
          <div :class="$style['basic-list__symbol']"></div>
          <div :class="$style['basic-list__content']">
            여신금융협회 심의필 제 2023-L1h-01310호<br />
            (2023.02.15~2024.02.14)
          </div>
        </li>
      </ul>
    </div>

    <template v-slot:foot>
      <BottomSticky>
        <div class="bottom-wrap">
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton>한도조회</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/oneQ/Q_M08_p001.scss';
</style>
