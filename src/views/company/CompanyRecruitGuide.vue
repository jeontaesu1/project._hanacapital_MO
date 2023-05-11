<script>
// Company_M08_p014
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';
import StickyBar from '@/components/ui/common/StickyBar.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import BasicBox from '@/components/ui/common/BasicBox.vue';

import IconContract from '@/assets/images/icon/contract.svg?component';
import IconCompleted from '@/assets/images/icon/completed.svg?component';
import IconConsulting from '@/assets/images/icon/consulting.svg?component';
import IconHealthScreenings from '@/assets/images/icon/Health-screenings.svg?component';

export default {
  components: {
    PageContents,
    PageTextGroup,
    PageMainText,
    PageSubText,
    StickyBar,
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
    BasicBox,
    IconContract,
    IconCompleted,
    IconConsulting,
    IconHealthScreenings,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '채용안내');
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
            <NavTabButton link="companyHistoryTab001">인재상</NavTabButton>
            <NavTabButton link="companyHistoryTab002">전형방법</NavTabButton>
          </NavTab>
        </StickyBar>
      </template>

      <!-- Tab : 인재상 -->
      <UiTabPanel name="companyHistoryTab001">
        <PageTextGroup>
          <PageMainText>
            <span class="color-green">POWER on Integrity</span> 라는 핵심가치를
            체득, 실천함으로써 기업 문화를 계승, 발전시키며
            <strong>히나캐피탈의 미래를 이끌어갈 인재</strong>
          </PageMainText>
          <PageSubText>
            구체적으로는 Inergrity와 5가지 핵심가치를 바탕으로 성과 리더십, 조직
            리더십, 혁신 리더십을 실현하는 리더를 뜻합니다.
          </PageSubText>
        </PageTextGroup>

        <section :class="$style['bg']">
          <h3 class="text-head-2 row-margin-item-medium">
            핵심가치 <span class="color-green">INTEGRITY</span>
          </h3>

          <div :class="$style['grid-list']">
            <div :class="$style['grid-list__item']">
              <BasicBox theme="secondary">
                <div class="text-body-1 font-weight-medium">PASSION</div>
                <div class="text-body-4 color-gray row-margin-small">열정</div>
              </BasicBox>
            </div>
            <div :class="$style['grid-list__item']">
              <BasicBox theme="secondary">
                <div class="text-body-1 font-weight-medium">OPENNESS</div>
                <div class="text-body-4 color-gray row-margin-small">
                  열린마음
                </div>
              </BasicBox>
            </div>
            <div :class="$style['grid-list__item']">
              <BasicBox theme="secondary">
                <div class="text-body-1 font-weight-medium">EXCELLENCE</div>
                <div class="text-body-4 color-gray row-margin-small">
                  전문성
                </div>
              </BasicBox>
            </div>
            <div :class="$style['grid-list__item']">
              <BasicBox theme="secondary">
                <div class="text-body-1 font-weight-medium">RESPECT</div>
                <div class="text-body-4 color-gray row-margin-small">
                  존경과 배려
                </div>
              </BasicBox>
            </div>
            <div
              :class="[
                $style['grid-list__item'],
                $style['grid-list__item--full'],
              ]"
            >
              <BasicBox theme="secondary">
                <div class="text-body-1 font-weight-medium">WITH CUSTOMER</div>
                <div class="text-body-4 color-gray row-margin-small">
                  손님 우선
                </div>
              </BasicBox>
            </div>
          </div>
        </section>

        <section class="row-margin-container-medium">
          <h3 class="text-head-2 row-margin-small">하나인재상</h3>
          <p class="text-body-3 color-gray-tertiary font-weight-light">
            비전달성을 위한 전문 역량과 리더십을 겸비한 리더
          </p>

          <ul class="reset-list row-margin-contents">
            <li class="row-margin-item-medium">
              <BasicBox theme="tertiary">
                <h4 class="text-body-1 font-weight-medium">성과 리더십</h4>
                <p class="text-body-4 color-gray row-margin-small">
                  스스로 도전적인 목표를 부여하고 이를 달성하기 위한 강한 의지와
                  실행력을 갖는 것
                </p>

                <div class="flex-box row-margin-item">
                  <div class="flex-box__cell flex-1">
                    <ul
                      :class="[
                        $style['basic-list'],
                        $style['basic-list--small-margin'],
                      ]"
                    >
                      <li :class="$style['basic-list__item']">
                        <div :class="$style['basic-list__symbol']"></div>
                        <div :class="$style['basic-list__content']">
                          성과지향
                        </div>
                      </li>
                      <li :class="$style['basic-list__item']">
                        <div :class="$style['basic-list__symbol']"></div>
                        <div :class="$style['basic-list__content']">
                          휴먼 네트워크
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="flex-box__cell flex-1 flex-box__cell--small">
                    <ul
                      :class="[
                        $style['basic-list'],
                        $style['basic-list--small-margin'],
                      ]"
                    >
                      <li :class="$style['basic-list__item']">
                        <div :class="$style['basic-list__symbol']"></div>
                        <div :class="$style['basic-list__content']">
                          문제해결
                        </div>
                      </li>
                      <li :class="$style['basic-list__item']">
                        <div :class="$style['basic-list__symbol']"></div>
                        <div :class="$style['basic-list__content']">
                          고객지향
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </BasicBox>
            </li>
            <li class="row-margin-item-medium">
              <BasicBox theme="tertiary">
                <h4 class="text-body-1 font-weight-medium">조직 리더십</h4>
                <p class="text-body-4 color-gray row-margin-small">
                  원활한 커뮤니케이션을 바탕으로 조직내 신뢰의 공동체 문화를
                  형성하여 이끌어 가는 것
                </p>

                <div class="flex-box row-margin-item">
                  <div class="flex-box__cell flex-1">
                    <ul
                      :class="[
                        $style['basic-list'],
                        $style['basic-list--small-margin'],
                      ]"
                    >
                      <li :class="$style['basic-list__item']">
                        <div :class="$style['basic-list__symbol']"></div>
                        <div :class="$style['basic-list__content']">
                          신뢰구축
                        </div>
                      </li>
                      <li :class="$style['basic-list__item']">
                        <div :class="$style['basic-list__symbol']"></div>
                        <div :class="$style['basic-list__content']">
                          감성지능
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="flex-box__cell flex-1 flex-box__cell--small">
                    <ul
                      :class="[
                        $style['basic-list'],
                        $style['basic-list--small-margin'],
                      ]"
                    >
                      <li :class="$style['basic-list__item']">
                        <div :class="$style['basic-list__symbol']"></div>
                        <div :class="$style['basic-list__content']">
                          인재육성
                        </div>
                      </li>
                      <li :class="$style['basic-list__item']">
                        <div :class="$style['basic-list__symbol']"></div>
                        <div :class="$style['basic-list__content']">
                          커뮤니케이션
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </BasicBox>
            </li>
            <li class="row-margin-item-medium">
              <BasicBox theme="tertiary">
                <h4 class="text-body-1 font-weight-medium">혁신 리더십</h4>
                <p class="text-body-4 color-gray row-margin-small">
                  경영 환경 변화에 대한 명확한 통찰력을 바탕으로 조직이 나아갈
                  방향을 구체적으로 제시하며 이를 구성원들과 함께 공유하는 것
                </p>

                <div class="flex-box row-margin-item">
                  <div class="flex-box__cell flex-1">
                    <ul
                      :class="[
                        $style['basic-list'],
                        $style['basic-list--small-margin'],
                      ]"
                    >
                      <li :class="$style['basic-list__item']">
                        <div :class="$style['basic-list__symbol']"></div>
                        <div :class="$style['basic-list__content']">
                          변화선도
                        </div>
                      </li>
                      <li :class="$style['basic-list__item']">
                        <div :class="$style['basic-list__symbol']"></div>
                        <div :class="$style['basic-list__content']">
                          전략적 사고
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="flex-box__cell flex-1 flex-box__cell--small">
                    <ul
                      :class="[
                        $style['basic-list'],
                        $style['basic-list--small-margin'],
                      ]"
                    >
                      <li :class="$style['basic-list__item']">
                        <div :class="$style['basic-list__symbol']"></div>
                        <div :class="$style['basic-list__content']">
                          비전제시
                        </div>
                      </li>
                      <li :class="$style['basic-list__item']">
                        <div :class="$style['basic-list__symbol']"></div>
                        <div :class="$style['basic-list__content']">
                          글로벌 마인드
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </BasicBox>
            </li>
          </ul>
        </section>
      </UiTabPanel>
      <!-- // Tab : 인재상 -->

      <!-- Tab : 2004 ~ 2010 -->
      <UiTabPanel name="companyHistoryTab002">
        <div :class="$style['step']">
          <ul :class="$style['step__list']">
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__top']">
                    <div :class="$style['step__badge']">STEP 1</div>
                  </div>
                  <div :class="$style['step__text']">
                    <strong>입사지원서 작성</strong> 후 홈페이지 상에<br />
                    <strong>On-Line 등록</strong>해 접수를 진행합니다.
                  </div>
                  <div class="row-margin-item-small">
                    <ul
                      :class="[
                        $style['basic-list'],
                        $style['basic-list--mini-margin'],
                      ]"
                    >
                      <li :class="$style['basic-list__item']">
                        <div :class="$style['basic-list__symbol']"></div>
                        <div :class="$style['basic-list__content']">
                          채용공고 : 현재 채용중인 분야를 확인하고 곧바로
                          지원하는 방법
                        </div>
                      </li>
                      <li :class="$style['basic-list__item']">
                        <div :class="$style['basic-list__symbol']"></div>
                        <div :class="$style['basic-list__content']">
                          상시입사지원 : 현재 채용하지 않지만 지원을 남겨 향후
                          채용에 대비
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div :class="$style['step__icon']">
                  <IconContract />
                </div>
              </div>
            </li>
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__top']">
                    <div :class="$style['step__badge']">STEP 2</div>
                  </div>
                  <div :class="$style['step__text']">
                    <strong>입사지원서 작성</strong> 후 홈페이지 상에<br />
                    <strong>On-Line 등록</strong>해 접수를 진행합니다.
                  </div>
                  <div class="row-margin-item-small">
                    <ul
                      :class="[
                        $style['basic-list'],
                        $style['basic-list--mini-margin'],
                      ]"
                    >
                      <li :class="$style['basic-list__item']">
                        <div :class="$style['basic-list__symbol']"></div>
                        <div :class="$style['basic-list__content']">
                          채용공고 : 현재 채용중인 분야를 확인하고 곧바로
                          지원하는 방법
                        </div>
                      </li>
                      <li :class="$style['basic-list__item']">
                        <div :class="$style['basic-list__symbol']"></div>
                        <div :class="$style['basic-list__content']">
                          상시입사지원 : 현재 채용하지 않지만 지원을 남겨 향후
                          채용에 대비
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div :class="$style['step__icon']">
                  <IconCompleted />
                </div>
              </div>
            </li>
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__top']">
                    <div :class="$style['step__badge']">STEP 2</div>
                  </div>
                  <div :class="$style['step__text']">
                    <strong>입사지원서 작성</strong> 후 홈페이지 상에<br />
                    <strong>On-Line 등록</strong>해 접수를 진행합니다.
                  </div>
                  <div class="row-margin-item-small">
                    <ul
                      :class="[
                        $style['basic-list'],
                        $style['basic-list--mini-margin'],
                      ]"
                    >
                      <li :class="$style['basic-list__item']">
                        <div :class="$style['basic-list__symbol']"></div>
                        <div :class="$style['basic-list__content']">
                          채용공고 : 현재 채용중인 분야를 확인하고 곧바로
                          지원하는 방법
                        </div>
                      </li>
                      <li :class="$style['basic-list__item']">
                        <div :class="$style['basic-list__symbol']"></div>
                        <div :class="$style['basic-list__content']">
                          상시입사지원 : 현재 채용하지 않지만 지원을 남겨 향후
                          채용에 대비
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div :class="$style['step__icon']">
                  <IconConsulting />
                </div>
              </div>
            </li>
            <li :class="$style['step__item']">
              <div :class="$style['step__inner']">
                <div :class="$style['step__contents']">
                  <div :class="$style['step__top']">
                    <div :class="$style['step__badge']">STEP 2</div>
                  </div>
                  <div :class="$style['step__text']">
                    <strong>입사지원서 작성</strong> 후 홈페이지 상에<br />
                    <strong>On-Line 등록</strong>해 접수를 진행합니다.
                  </div>
                  <div class="row-margin-item-small">
                    <ul
                      :class="[
                        $style['basic-list'],
                        $style['basic-list--mini-margin'],
                      ]"
                    >
                      <li :class="$style['basic-list__item']">
                        <div :class="$style['basic-list__symbol']"></div>
                        <div :class="$style['basic-list__content']">
                          채용공고 : 현재 채용중인 분야를 확인하고 곧바로
                          지원하는 방법
                        </div>
                      </li>
                      <li :class="$style['basic-list__item']">
                        <div :class="$style['basic-list__symbol']"></div>
                        <div :class="$style['basic-list__content']">
                          상시입사지원 : 현재 채용하지 않지만 지원을 남겨 향후
                          채용에 대비
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div :class="$style['step__icon']">
                  <IconHealthScreenings />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </UiTabPanel>
      <!-- // Tab : 2004 ~ 2010 -->
    </PageContents>
  </UiTab>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/company/CompanyRecruitGuide.scss';
</style>
