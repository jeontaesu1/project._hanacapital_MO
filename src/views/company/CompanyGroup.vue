<script>
// Company_M08_p009
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

export default {
  components: {
    PageContents,
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
    StickyBar,
    BasicBox,
    BasicHr,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '하나금융그룹');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => ['menu']);
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
  <UiTab>
    <PageContents>
      <template v-slot:head>
        <StickyBar>
          <NavTab :head="true" :useUiTab="true">
            <NavTabButton link="testNavTab001_001">비전과 미션</NavTabButton>
            <NavTabButton link="testNavTab001_002">핵심가치</NavTabButton>
            <NavTabButton link="testNavTab001_003">관계사</NavTabButton>
          </NavTab>
        </StickyBar>
      </template>

      <UiTabPanel name="testNavTab001_001">
        <section>
          <h3 class="text-title-1 font-weight-medium row-margin-item">
            하나로 연결된 모두의 금융
          </h3>
          <p
            class="row-margin-top-none row-margin-contents-group text-body-3 font-weight-light color-gray-tertiary"
          >
            위대한 성공의 시작점에는 늘 가슴 뛰는 비전이 있었습니다.
            하나금융그룹은 그룹 구성원 모두가 참여하는 상향식 의견수렴
            (bottom-up) 방식을 통하여, 그룹의 존재이유인 미션, 새로운 10년의
            비전, 그리고 모든 가치판단의 기준이 될 핵심가치를 다시 한 번 새롭게
            정립하였습니다. 하나금융그룹은 이제 새로운 비전과 가치를 바탕으로
            하나인으로서 자부심을 안고 더 나은 미래를 향해 나아갈 것입니다.
          </p>
          <BasicBox theme="octonary">
            <div
              class="row-margin-bottom-none align-center font-weight-regular color-green"
            >
              미션
            </div>
            <p class="row-margin-item align-center font-weight-medium">
              함께 성장하며 행복을 나누는 금융
            </p>
            <p
              class="row-margin-top-none row-margin-bottom-none align-center font-weight-light text-body-4 color-gray"
            >
              GROWING TOGETHER, SHARING HAPPINESS
            </p>
          </BasicBox>
          <BasicBox theme="nonary" class="row-margin-item-medium">
            <div
              class="row-margin-bottom-none align-center font-weight-regular color-navy"
            >
              2030비전
            </div>
            <p class="row-margin-item align-center font-weight-medium">
              하나로 연결된 모두의 금융
            </p>
            <p
              class="row-margin-top-none row-margin-bottom-none align-center font-weight-light text-body-4 color-gray"
            >
              All Connected in Hana Finance
            </p>
          </BasicBox>
        </section>
        <section class="row-margin-contents-group">
          <h3 class="text-title-2 font-weight-bold row-margin-contents">
            주요테마 <span class="color-green">C-O-N-NE-C-T</span>
          </h3>
          <ul class="reset-list">
            <li class="row-margin-item-medium">
              <BasicBox
                theme="senary"
                class="row-margin-item font-weight-medium text-body-1"
              >
                <span class="display-block row-margin-small"
                  ><span class="color-green">C</span>loser to customers</span
                >
                <span class="color-gray text-body-4 font-weight-regular"
                  >미래생태계 구축</span
                >
              </BasicBox>
            </li>
            <li class="row-margin-item-medium">
              <BasicBox
                theme="senary"
                class="row-margin-item font-weight-medium text-body-1"
              >
                <span class="display-block row-margin-small"
                  ><span class="color-green">O</span>ne lifelong
                  partnership</span
                >
                <span class="color-gray text-body-4 font-weight-regular"
                  >손님 생애 관리 금융제공</span
                >
              </BasicBox>
            </li>
            <li class="row-margin-item-medium">
              <BasicBox
                theme="senary"
                class="row-margin-item font-weight-medium text-body-1"
              >
                <span class="display-block row-margin-small"
                  ><span class="color-green">N</span>est generation CIB</span
                >
                <span class="color-gray text-body-4 font-weight-regular"
                  >테크 기반 기업 손님 확대</span
                >
              </BasicBox>
            </li>
            <li class="row-margin-item-medium">
              <BasicBox
                theme="senary"
                class="row-margin-item font-weight-medium text-body-1"
              >
                <span class="display-block row-margin-small"
                  ><span class="color-green">N</span>Ew perspectives on
                  value</span
                >
                <span class="color-gray text-body-4 font-weight-regular"
                  >ESG 경영</span
                >
              </BasicBox>
            </li>
            <li class="row-margin-item-medium">
              <BasicBox
                theme="senary"
                class="row-margin-item font-weight-medium text-body-1"
              >
                <span class="display-block row-margin-small"
                  ><span class="color-green">C</span>ultivate investment
                  capabilities</span
                >
                <span class="color-gray text-body-4 font-weight-regular"
                  >투자 기반 역량 확보</span
                >
              </BasicBox>
            </li>
            <li class="row-margin-item-medium">
              <BasicBox
                theme="senary"
                class="row-margin-item font-weight-medium text-body-1"
              >
                <span class="display-block row-margin-small"
                  ><span class="color-green">T</span>ransmit tech DNA</span
                >
                <span class="color-gray text-body-4 font-weight-regular"
                  >데이터, 디지털역량,혁신조직등 빅태크 DNA 내재화</span
                >
              </BasicBox>
            </li>
          </ul>
        </section>
        <section>
          <h3 class="text-title-2 font-weight-bold row-margin-contents">
            핵심가치 <span class="color-green">INTEGRITY</span>
          </h3>
          <div :class="$style['core-value']">
            <ul :class="$style['core-value__list']">
              <li :class="$style['core-value__item']">
                <BasicBox
                  theme="senary"
                  class="row-margin-item font-weight-medium text-body-1"
                >
                  <span class="display-block row-margin-small">PASSION</span>
                  <span class="color-gray text-body-4 font-weight-regular"
                    >열정</span
                  >
                </BasicBox>
              </li>
              <li :class="$style['core-value__item']">
                <BasicBox
                  theme="senary"
                  class="row-margin-item font-weight-medium text-body-1"
                >
                  <span class="display-block row-margin-small">OPENNESS</span>
                  <span class="color-gray text-body-4 font-weight-regular"
                    >열린마음</span
                  >
                </BasicBox>
              </li>
              <li :class="$style['core-value__item']">
                <BasicBox
                  theme="senary"
                  class="row-margin-item font-weight-medium text-body-1"
                >
                  <span class="display-block row-margin-small">EXCELLENCE</span>
                  <span class="color-gray text-body-4 font-weight-regular"
                    >전문성</span
                  >
                </BasicBox>
              </li>
              <li :class="$style['core-value__item']">
                <BasicBox
                  theme="senary"
                  class="row-margin-item font-weight-medium text-body-1"
                >
                  <span class="display-block row-margin-small">RESPECT</span>
                  <span class="color-gray text-body-4 font-weight-regular"
                    >존경과 배려</span
                  >
                </BasicBox>
              </li>
              <li :class="$style['core-value__item']">
                <BasicBox
                  theme="senary"
                  class="row-margin-item font-weight-medium text-body-1"
                >
                  <span class="display-block row-margin-small"
                    >WITH CUSTOMER</span
                  >
                  <span class="color-gray text-body-4 font-weight-regular"
                    >손님 우선</span
                  >
                </BasicBox>
              </li>
            </ul>
          </div>
        </section>
        <BasicHr
          theme="tertiary"
          type="contents"
          className="row-margin-container-medium"
        />
        <section>
          <h3 class="text-title-1 font-weight-medium row-margin-contents-group">
            하나금융그룹 비전
          </h3>
          <h4 class="text-title-2 font-weight-bold row-margin-contents">
            신뢰받고 앞서가는 글로벌 금융 그룹
          </h4>
          <p class="text-body-4 font-weight-light row-margin-contents">
            하나금융그룹은 뉴 노멀시대 진입에 따른 국내외 금융 환경의 변화와
            2012년 2월 외환은행이 하나금융그룹의 새 가족이 됨에 따라 현재의 그룹
            위상과 잠재력에 부합하는 새로운 역할과 지향점을 필요로 하고, 새로운
            비전, 미션, 가치체계를 정립하게 되었습니다.
          </p>
          <p class="text-body-4 font-weight-light row-margin-contents">
            그룹의 비전은 모든 이해관계자를 대상으로 견고한 신뢰를 쌓겠다는 강한
            신념을 담고 있습니다. 하나금융그룹은 폭넓은 기반의 손님에게 장기적
            관점에서의 민족을 제공하고, 임직원에게는 더 나은 근무환경, 지속적인
            소통과 일관된 경영활동으로 견고한 신뢰관계를 만들어갈 것입니다.
          </p>

          <h4
            class="text-title-2 font-weight-bold row-margin-container-medium row-margin-bottom-none"
          >
            신뢰받고 앞서가는 글로벌 금융 그룹
          </h4>
          <p class="text-body-4 font-weight-light row-margin-contents">
            하나금융그룹은 1971년 창립 이래 변화무쌍한 전략과 적극적인 사업모델
            전환으로 시장 변화에 따른 무수한 경영위기들을 극복하여 국내 Top3
            선도 금융그룹으로 자리매김하였으며. 최근 금융사업을 둘러싼 대내외
            환경의 급격한 변화에 적극적이고 효과적으로 대응하기 위해 새로운
            비전과 전략목표를 수립하게 되었습니다.
          </p>

          <p class="text-body-4 font-weight-light row-margin-contents">
            하나금융그룹의 비전은 하나만의 혁신적인 플랫폼을 통해 모든 사람들이
            마음껏 금융을 즐기고, 신뢰를 바탕으로 한 금융의 새로운 가치를
            창출하자는 의미를 담고 있습니다.
          </p>

          <p class="text-body-4 font-weight-light row-margin-contents">
            이를 통해 그룹이 나아가야 할 3대 방향을 혁신, 신뢰, 플랫폼으로
            설정하고 ‘1. 하나만의 방식으로 2. 시공/미래/가치를 연결하여 3.
            모두가 함께 누리게 될 금융 그 이상의 금융’의 의미를 담았습니다.
          </p>

          <p class="text-body-4 font-weight-light row-margin-contents">
            또한 손님 중심 미래형 혁신 사업모델을 기반으로 단순 성장 중심이 아닌
            가치 중심 도약을 추구하여 손님, 주주, 사회와 함께 대한민국을 넘어
            아시아 No.1 금융그룹이 될 수 있도록 노력할 것입니다.
          </p>
        </section>
        <BasicHr
          theme="tertiary"
          type="contents"
          className="row-margin-container-medium"
        />
        <section>
          <h3 class="text-title-1 font-weight-medium row-margin-item">
            비전달성을 위한 전략목표 O.N.E Value 2030
          </h3>

          <p
            class="text-body-3 font-weight-light row-margin-contents-group row-margin-top-none"
          >
            외형 성장이 아닌 실적 이익 중심의 목표
          </p>
          <ul class="reset-list">
            <li class="row-margin-item-medium">
              <BasicBox
                theme="senary"
                class="row-margin-item font-weight-medium"
              >
                <h4 class="row-margin-small font-weight-medium text-body-1">
                  <span class="color-green">O</span>ur value<br />가장 손님중심
                  그룹
                </h4>
                <p
                  class="color-gray text-body-4 font-weight-regular row-margin-none"
                >
                  손님을 우선하는 하나만의 가치를 실현
                </p>
                <ul
                  :class="[
                    $style['basic-list'],
                    $style['basic-list--small-margin'],
                    'row-margin-item',
                  ]"
                >
                  <li :class="$style['basic-list__item']">
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      손님 가치를 실현하는 방식의 대전환 금융과 비금융을
                      아우르는 손님 중심의 솔루션 제공
                    </div>
                  </li>
                  <li :class="$style['basic-list__item']">
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      손님에 대한 총체적 이해를 바탕으로 손님 경험 극대화 추구
                    </div>
                  </li>
                </ul>
              </BasicBox>
            </li>
            <li class="row-margin-item-medium">
              <BasicBox
                theme="senary"
                class="row-margin-item font-weight-medium"
              >
                <h4 class="row-margin-small font-weight-medium text-body-1">
                  <span class="color-green">N</span>ew value<br />
                  가장 인정받는 그룹
                </h4>
                <p
                  class="color-gray text-body-4 font-weight-regular row-margin-none"
                >
                  지속가능경영 실현으로 새로운 가치를 제공
                </p>
                <ul
                  :class="[
                    $style['basic-list'],
                    $style['basic-list--small-margin'],
                    'row-margin-item',
                  ]"
                >
                  <li :class="$style['basic-list__item']">
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      소극적인 Fast-Follower가 아닌 ESG Frontier로 전환
                    </div>
                  </li>
                  <li :class="$style['basic-list__item']">
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      공유 가치 창출을 통해 손님, 직원, 주주, 사회 등 모든 이의
                      행복을 추구
                    </div>
                  </li>
                </ul>
              </BasicBox>
            </li>
            <li class="row-margin-item-medium">
              <BasicBox
                theme="senary"
                class="row-margin-item font-weight-medium"
              >
                <h4 class="row-margin-small font-weight-medium text-body-1">
                  <span class="color-green">E</span>xtra value<br />
                  가장 혁신적인 그룹
                </h4>
                <p
                  class="color-gray text-body-4 font-weight-regular row-margin-none"
                >
                  변화에 적극적으로 대응하여 더 나은 가치를 창출
                </p>
                <ul
                  :class="[
                    $style['basic-list'],
                    $style['basic-list--small-margin'],
                    'row-margin-item',
                  ]"
                >
                  <li :class="$style['basic-list__item']">
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      업의 경계를 뛰어넘는 적극적인 투자로 미래 역량 확보
                    </div>
                  </li>
                  <li :class="$style['basic-list__item']">
                    <div :class="$style['basic-list__symbol']"></div>
                    <div :class="$style['basic-list__content']">
                      변화에 적극적으로 대응할 수 있는 인력, 기술, 조직,
                      기업문화 등 핵심 기반 구축
                    </div>
                  </li>
                </ul>
              </BasicBox>
            </li>
          </ul>
        </section>
        <BasicHr
          theme="tertiary"
          type="contents"
          className="row-margin-container-medium"
        />
        <section>
          <h3 class="text-title-1 font-weight-medium row-margin-item">
            Vision Emblem
          </h3>
          <p
            class="text-body-3 font-weight-light color-gray-tertiary row-margin-contents-group row-margin-top-none"
          >
            하늘색은 믿음과 신뢰, 앞서감입니다.<br />
            지구본은 글로벌 무대를 상징합니다.<br />그리고 최고가 되겠다는
            의지를 담은 숫자 1
          </p>
          <div :class="$style['step']">
            <ul :class="$style['step__list']">
              <li class="row-margin-item-medium">
                <BasicBox
                  theme="senary"
                  class="row-margin-item font-weight-medium text-body-1"
                >
                  <div class="flex-box">
                    <div class="flex-box__cell">d</div>
                    <div class="flex-box__cell flex-box__cell--medium">
                      <h4 class="row-margin-small font-weight-medium">
                        하늘색 컬러
                      </h4>
                      <p
                        class="color-gray text-body-4 font-weight-regular row-margin-none"
                      >
                        믿음, 신뢰, 앞서감
                      </p>
                    </div>
                  </div>
                </BasicBox>
              </li>
              <li class="row-margin-item-medium">
                <BasicBox
                  theme="senary"
                  class="row-margin-item font-weight-medium text-body-1"
                >
                  <div class="flex-box">
                    <div class="flex-box__cell">d</div>
                    <div class="flex-box__cell flex-box__cell--medium">
                      <h4 class="row-margin-small font-weight-medium">지구</h4>
                      <p
                        class="color-gray text-body-4 font-weight-regular row-margin-none"
                      >
                        지구본 모양으로서 글로벌 무대를 상징
                      </p>
                    </div>
                  </div>
                </BasicBox>
              </li>
              <li class="row-margin-item-medium row-margin-bottom-none">
                <BasicBox
                  theme="senary"
                  class="row-margin-item font-weight-medium text-body-1"
                >
                  <div class="flex-box">
                    <div class="flex-box__cell">d</div>
                    <div class="flex-box__cell flex-box__cell--medium">
                      <h4 class="row-margin-small font-weight-medium">
                        숫자 1
                      </h4>
                      <p
                        class="color-gray text-body-4 font-weight-regular row-margin-none"
                      >
                        최고가 되겠다는 의미인 숫자 1
                      </p>
                    </div>
                  </div>
                </BasicBox>
              </li>
            </ul>
          </div>
          <p
            class="text-title-1 font-weight-light align-center row-margin-item-group row-margin-bottom-none"
          >
            신뢰받고 앞서가는<br /><strong class="font-weight-medium"
              >글로벌 금융그룹, 하나금융그룹</strong
            >
          </p>
          <p
            class="text-body-3 font-weight-light align-center color-gray-tertiary row-margin-item"
          >
            비전에 대한 공감, 비전이 실현될 때의<br />감탄을 담은 느낌표 형상
          </p>
        </section>
      </UiTabPanel>

      <UiTabPanel name="testNavTab001_002">
        <section>
          <h3 class="text-title-1 font-weight-medium row-margin-item">
            <span class="color-green">POWER</span> on Integrity
          </h3>
          <p
            class="row-margin-top-none row-margin-contents-group font-weight-light text-body-3 color-gray-tertiary"
          >
            하나금융그룹은 하나인만의 생각하는 방식, 창조적이고 강력한
            기업문화를 가지고 있습니다. 하나인들이 공유하고 실천하는 핵심가치는
            기업 활동에 있어서 가치판단과 행동의 기준이 되는 가장 소중한
            무형자산입니다.
          </p>
          <div :class="$style['step']">
            <ul :class="$style['step__list']">
              <li class="row-margin-item-medium">
                <BasicBox
                  theme="senary"
                  class="row-margin-item font-weight-medium text-body-1"
                >
                  <span class="display-block row-margin-small"
                    ><span class="color-green">P</span>assion 열정</span
                  >
                  <span class="color-gray text-body-4 font-weight-regular"
                    >책임감 있게 최선을 다하고 변화와 혁신으로 더 나은 가치를
                    추구하는 것</span
                  >
                </BasicBox>
              </li>
              <li class="row-margin-item-medium">
                <BasicBox
                  theme="senary"
                  class="row-margin-item font-weight-medium text-body-1"
                >
                  <span class="display-block row-margin-small"
                    ><span class="color-green">O</span>penness 열린마음</span
                  >
                  <span class="color-gray text-body-4 font-weight-regular"
                    >유연하고 편견없이 사람이나 상황을 이해하고 공감하는
                    것</span
                  >
                </BasicBox>
              </li>
              <li class="row-margin-item-medium">
                <BasicBox
                  theme="senary"
                  class="row-margin-item font-weight-medium text-body-1"
                >
                  <span class="display-block row-margin-small"
                    ><span class="color-green">W</span>ith customer
                    손님우선</span
                  >
                  <span class="color-gray text-body-4 font-weight-regular"
                    >손님을 최우선으로 삼는 마음으로 그들의 필요를 탐구하고
                    채워주는 것</span
                  >
                </BasicBox>
              </li>
              <li class="row-margin-item-medium">
                <BasicBox
                  theme="senary"
                  class="row-margin-item font-weight-medium text-body-1"
                >
                  <span class="display-block row-margin-small"
                    ><span class="color-green">E</span>xcellence 전문성</span
                  >
                  <span class="color-gray text-body-4 font-weight-regular"
                    >최고의 고객 신뢰를 얻기 위해 각자의 분야에서 차별화된
                    역량을 개발하는 것</span
                  >
                </BasicBox>
              </li>
              <li class="row-margin-item-medium">
                <BasicBox
                  theme="senary"
                  class="row-margin-item font-weight-medium text-body-1"
                >
                  <span class="display-block row-margin-small"
                    ><span class="color-green">R</span>espect 존중과 배려</span
                  >
                  <span class="color-gray text-body-4 font-weight-regular"
                    >개인역량발휘와 상호협력을 위한 기본자세로 상대방 입장에서
                    생각하고 대하는 것</span
                  >
                </BasicBox>
              </li>
            </ul>
          </div>
          <p
            class="text-title-1 font-weight-light align-center row-margin-item-group row-margin-bottom-none"
          >
            Integrity
          </p>
          <p
            class="text-body-1 font-weight-medium align-center row-margin-mini row-margin-bottom-none"
          >
            정직 · 성실 · 투명
          </p>
          <p
            class="text-body-3 font-weight-light align-center color-gray-tertiary row-margin-item"
          >
            금융인의 기본적인 윤리로 항상 맡은 바를<br />
            정직하고 성실하게 이행하는 것
          </p>
        </section>
      </UiTabPanel>

      <UiTabPanel name="testNavTab001_003">
        <section>
          <h3 class="text-title-1 font-weight-medium row-margin-item">
            하나금융지주
          </h3>
          <p
            class="row-margin-top-none row-margin-contents-group font-weight-light text-body-3 color-gray-tertiary"
          >
            그룹경영전략, 재무관리
          </p>
          <ul class="reset-list">
            <li class="row-margin-item-group">
              <BasicBox
                theme="septenary"
                radius="secondary"
                class="row-margin-item font-weight-medium text-body-1"
              >
                <h4 class="row-margin-small font-weight-medium">
                  <span class="color-green">O</span>ur value<br />가장 손님중심
                  그룹
                </h4>
                <p
                  class="color-gray text-body-4 font-weight-regular row-margin-none"
                >
                  손님을 우선하는 하나만의 가치를 실현
                </p>
              </BasicBox>
            </li>
          </ul>
        </section>
      </UiTabPanel>
    </PageContents>
  </UiTab>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/company/CompanyGroup.scss';
</style>
