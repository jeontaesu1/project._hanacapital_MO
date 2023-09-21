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
import IconHealthScreenings from '@/assets/images/icon/health-screenings.svg?component';

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
  <UiTab>
    <PageContents>
      <template v-slot:head>
        <StickyBar>
          <NavTab :head="true" :useUiTab="true">
            <NavTabButton link="companyRecruitGuideTab001">인재상</NavTabButton>
            <NavTabButton link="companyRecruitGuideTab002"
              >전형방법</NavTabButton
            >
          </NavTab>
        </StickyBar>
      </template>

      <!-- Tab : 인재상 -->
      <UiTabPanel name="companyRecruitGuideTab001">
        <PageTextGroup :classNames="{ wrap: 'row-margin-container-medium' }">
          <PageMainText>
            <span class="color-green">POWER on Integrity</span> 라는 핵심가치를
            체득, 실천함으로써 기업 문화를 계승, 발전시키며 히나캐피탈의 미래를
            이끌어갈 인재
          </PageMainText>
          <PageSubText>
            구체적으로는 Inergrity와 5가지 핵심가치를 바탕으로 성과 리더십, 조직
            리더십, 혁신 리더십을 실현하는 리더를 뜻합니다.
          </PageSubText>
        </PageTextGroup>

        <section :class="$style['bg']">
          <h3 class="text-head-2 row-margin-contents">
            핵심가치 <span class="color-green">INTEGRITY</span>
          </h3>

          <div :class="$style['grid-list']">
            <ul :class="$style['grid-list__inner']">
              <li :class="$style['grid-list__item']">
                <BasicBox theme="secondary">
                  <p class="text-body-1 font-weight-medium">PASSION</p>
                  <p class="text-body-4 color-gray row-margin-small">열정</p>
                </BasicBox>
              </li>
              <li :class="$style['grid-list__item']">
                <BasicBox theme="secondary">
                  <p class="text-body-1 font-weight-medium">OPENNESS</p>
                  <p class="text-body-4 color-gray row-margin-small">
                    열린마음
                  </p>
                </BasicBox>
              </li>
              <li :class="$style['grid-list__item']">
                <BasicBox theme="secondary">
                  <p class="text-body-1 font-weight-medium">EXCELLENCE</p>
                  <p class="text-body-4 color-gray row-margin-small">전문성</p>
                </BasicBox>
              </li>
              <li :class="$style['grid-list__item']">
                <BasicBox theme="secondary">
                  <p class="text-body-1 font-weight-medium">RESPECT</p>
                  <p class="text-body-4 color-gray row-margin-small">
                    존경과 배려
                  </p>
                </BasicBox>
              </li>
              <li
                :class="[
                  $style['grid-list__item'],
                  $style['grid-list__item--full'],
                ]"
              >
                <BasicBox theme="secondary">
                  <p class="text-body-1 font-weight-medium">WITH CUSTOMER</p>
                  <p class="text-body-4 color-gray row-margin-small">
                    손님 우선
                  </p>
                </BasicBox>
              </li>
            </ul>
          </div>
        </section>

        <section class="row-margin-container-medium">
          <div class="row-margin-contents">
            <h3 class="text-head-2 row-margin-small">하나인재상</h3>
            <p class="text-body-3 color-gray-tertiary font-weight-light">
              비전달성을 위한 전문 역량과 리더십을 겸비한 리더
            </p>
          </div>

          <ul class="reset-list">
            <li class="row-margin-item-medium">
              <BasicBox theme="tertiary">
                <h4 class="text-body-1 font-weight-medium">성과 리더십</h4>
                <p class="text-body-4 color-gray row-margin-small">
                  스스로 도전적인 목표를 부여하고 이를 달성하기 위한 강한 의지와
                  실행력을 갖는 것
                </p>

                <div :class="[$style['grid-basic-list'], 'row-margin-item']">
                  <ul :class="$style['basic-list']">
                    <li :class="$style['basic-list__item']">
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">성과지향</div>
                    </li>
                    <li :class="$style['basic-list__item']">
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">문제해결</div>
                    </li>
                    <li :class="$style['basic-list__item']">
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">
                        휴먼 네트워크
                      </div>
                    </li>
                    <li :class="$style['basic-list__item']">
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">고객지향</div>
                    </li>
                  </ul>
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

                <div :class="[$style['grid-basic-list'], 'row-margin-item']">
                  <ul :class="$style['basic-list']">
                    <li :class="$style['basic-list__item']">
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">신뢰구축</div>
                    </li>
                    <li :class="$style['basic-list__item']">
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">인재육성</div>
                    </li>
                    <li :class="$style['basic-list__item']">
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">감성지능</div>
                    </li>
                    <li :class="$style['basic-list__item']">
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">
                        커뮤니케이션
                      </div>
                    </li>
                  </ul>
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

                <div :class="[$style['grid-basic-list'], 'row-margin-item']">
                  <ul :class="$style['basic-list']">
                    <li :class="$style['basic-list__item']">
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">변화선도</div>
                    </li>
                    <li :class="$style['basic-list__item']">
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">비전제시</div>
                    </li>
                    <li :class="$style['basic-list__item']">
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">
                        전략적 사고
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
              </BasicBox>
            </li>
          </ul>
        </section>
      </UiTabPanel>
      <!-- // Tab : 인재상 -->

      <!-- Tab : 전형방법 -->
      <UiTabPanel name="companyRecruitGuideTab002">
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
                    입사지원서를 토대로<br />
                    <strong>지원자의 기본능력을 평가</strong>합니다.
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
                          이에 따라 입사 지원서를 작성하실 때 전공, 경력사항 및
                          자기소개서 등을 성실하게 작성하여야 하며, 기재사항이
                          허위로 판명될 때에는 합격이 취소됩니다.
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
                    <div :class="$style['step__badge']">STEP 3</div>
                  </div>
                  <div :class="$style['step__text']">
                    서류전형 합격자들을 대상으로<br />
                    <strong>면접을 진행</strong>합니다.
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
                          지원자의 수행능력 및 성실도 등을 검증하기 위해 각
                          지원분야별 임원급 및 해당 부서장을 면접위원으로
                          위촉합니다.
                        </div>
                      </li>
                      <li :class="$style['basic-list__item']">
                        <div :class="$style['basic-list__symbol']"></div>
                        <div :class="$style['basic-list__content']">
                          기본적으로 면접은 4~5명의 그룹면접으로 진행되며,
                          질의응답 형식으로 진행되나 채용 유형에 따라 1인 면접도
                          실시할 수 있습니다.
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
                    <div :class="$style['step__badge']">STEP 4</div>
                  </div>
                  <div :class="$style['step__text']">
                    면접을 전 후하여 회사에서 지정한<br />
                    병원의 종합검진으로
                    <strong
                      >건강진단 결과가 나온 이후 회사규정에 따라 최종 합격
                      여부가 결정</strong
                    >됩니다.
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
                          통상 면접전형 합격자에 대하여 혈액검사를 통한 간
                          장기검사, 혈압, 청력, 시력, X-ray, 검진 등 종합검진을
                          실시합니다.
                        </div>
                      </li>
                      <li :class="$style['basic-list__item']">
                        <div :class="$style['basic-list__symbol']"></div>
                        <div :class="$style['basic-list__content']">
                          건강 진단일 2~3일 전부터 음주는 물론 무리한
                          활동/운동이나 약물복용을 삼가고, 검진 전날 저녁 09:00
                          이후부터 검진 시까지는 공복을 유지하여야 정확한
                          검진결과를 얻을 수 있습니다.
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
      <!-- // Tab : 전형방법 -->
    </PageContents>
  </UiTab>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/company/CompanyRecruitGuide.scss';
</style>
