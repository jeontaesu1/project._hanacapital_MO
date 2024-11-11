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

export default {
  components: {
    PageContents,
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
    StickyBar,
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
            <NavTabButton link="companyGroupTab001">비전과 미션</NavTabButton>
            <NavTabButton link="companyGroupTab002">핵심가치</NavTabButton>
            <NavTabButton link="companyGroupTab003">관계사</NavTabButton>
          </NavTab>
        </StickyBar>
      </template>

    <!-- S: 240516 수정 -->
      <!-- 비전과 미션 -->
      <UiTabPanel name="companyGroupTab001">
        <section class="section01">
          <div :class="$style['image-view']">
            <img src="@/assets/images/contents/company-1-1.png" alt="" />
            <img src="@/assets/images/contents/company-1-2.png" alt="" />
          </div>
          <div class="content_wrap">
            <!-- 미션 -->
            <div class="content_box mission">
              <div class="content_img mission_img01">
                <img src="@/assets/images/contents/mission-1.png" alt="" />
              </div>
              <div class="content_desc">
                <p class="desc">
                  하나금융그룹의 미션은 시대적 요구와 변화에 적극적으로<br />
                  동참하며 기업의 사회적 책임을 다하겠다는 의지의<br />
                  선언입니다.
                </p>
                <p class="desc">
                  하나금융그룹은 보다 나은 사회를 만들기 위해, 함께 노력하는<br />
                  모든 이해관계자가 성장할 수 있는 활동을 지원하고,<br />
                  지속 가능한 성장과 사회적 책임을 균형 있게 이루어 나가는<br />
                  ‘행복한 성장’을 추구합니다.
                </p>
                <p class="desc">
                  지금껏 그래왔듯이 하나금융그룹은 본연의 역할을<br />
                  충실히 수행하면서 모든 이해관계자들과는 성장 이익을<br />
                  함께 나누고 금융을 통한 공유가치 창출을 통해<br />
                  사회구성원들의 행복 추구에 적극 동참할 것입니다.
                </p>
              </div>
            </div>
            <!-- // 미션 -->

            <!-- 2030 비전 -->
            <div class="content_box vision">
              <div class="content_title">
                <p class="title">2030 비전</p>
              </div>
              <div class="content_desc">
                <div class="sub_title_wrap">
                  <p class="sub_title">
                    하나로 연결된 모두의 금융<br />
                    All Connected in Hana Finance
                  </p>
                  <p class="desc">
                    하나만의 혁신적인 플랫폼을 통해 모든 사람이 마음껏 금융을<br />
                    즐기고 신뢰를 바탕으로 금융의 새로운 가치를 창출하자는<br />
                    의미를 담고 있습니다.
                  </p>
                  <p class="desc">
                    '하나'만의 방식으로 '연결'하여 '모두'가 함께 누리게 될<br />
                    금융 그 이상의 '금융'
                  </p>
                  <p class="desc">
                    새로운 서비스와 인재들을 연결해 진화된 금융 세상을<br />
                    실현시키는 하나의 노력이 시작됩니다.
                  </p>
                </div>

                <div class="group">
                  <p class="title">하나로</p>
                  <p class="desc">
                    빠르고 과감한 도전정신을 기반으로 변화를 주도하며<br />
                    디지털 시대에 누구에게나 쉽고 편리한 새로운<br />
                    경험을 제공하고 올바른 금융을<br />실천하겠다는 신뢰와<br />
                    혁신의 의지를 나타냅니다.
                  </p>
                  <p class="desc">
                    쉽고 편리한 서비스, 새롭고 차별화된 손님 경험, 지속
                    가능하고<br />
                    신뢰할 수 있는 가치를 하나만의 방식으로<br />
                    실현해 나갈 것입니다.
                  </p>
                  <div class="content_img vision_img">
                    <img src="@/assets/images/contents/vision-1.png" alt="" />
                  </div>
                </div>

                <div class="group">
                  <p class="title">연결된</p>
                  <p class="desc">
                    언제, 어디서나, 누구에게나 함께 연결되고, 현재와 미래를<br />
                    이어주는, 금융을 넘어 모두가 필요로 하는 가치를<br />
                    맺어주는 것을 의미합니다.
                  </p>
                  <p class="desc">
                    디지털 금융 혁신을 통해, 한층 더 진화된 금융 플랫폼을<br />
                    구현하여 언제/어디서나/누구나 필요로 하는 금융서비스를<br />
                    제공하여 새로운 세상을 만들어 나간다는 하나금융그룹의<br />
                    다짐입니다.
                  </p>
                  <div class="content_img vision_img">
                    <img src="@/assets/images/contents/vision-2.png" alt="" />
                  </div>
                </div>

                <div class="group">
                  <p class="title">모두의 금융</p>
                  <p class="desc">
                    언제, 어디서나, 누구에게나 함께 연결되고, 현재와 미래를<br />
                    이어주는, 금융을 넘어 모두가 필요로 하는 가치를<br />
                    맺어주는 것을 의미합니다.
                  </p>
                  <p class="desc">
                    디지털 금융 혁신을 통해, 한층 더 진화된 금융 플랫폼을<br />
                    구현하여 언제/어디서나/누구나 필요로 하는 금융서비스를<br />
                    제공하여 새로운 세상을 만들어 나간다는 하나금융그룹의<br />
                    다짐입니다.
                  </p>
                  <div class="content_img vision_img">
                    <img src="@/assets/images/contents/vision-3.png" alt="" />
                  </div>
                </div>
                <div class="desc_wrap">
                  <p class="desc">
                    하나금융그룹은 1971년 창립 이래 변화무쌍한 전략과<br />
                    적극적인 사업모델 전환으로 시장 변화에 따른 무수한<br />
                    경영 위기들을 극복하여 국내 선도 금융 그룹으로<br />
                    자리매김하였으며, 최근 금융 사업을 둘러싼 대내외 환경의<br />
                    급격한 변화에 적극적이고 효과적으로 대응하기 위해 새로운<br />
                    비전과 전략목표를 수립하게 되었습니다.
                  </p>
                  <p class="desc">
                    하나금융그룹의 비전은 1. 하나만의 방식으로 2. 시공/미래/<br />가치를
                    연결하여 3. 모두가 함께 누리게 될 금융 그 이상의<br />
                    금융의 의미를 담았습니다. 이를 통해 혁신적인 플랫폼으로<br />
                    모든 사람들 이 마음껏 금융을 즐기고, 신뢰를 바탕으로 한<br />
                    금융의 새로운 가치를<br />
                    창출해 나아가고자 합니다.
                  </p>
                  <p class="desc">
                    손님 중심 미래형 혁신 사업모델을 기반으로 단순 성장
                    중심이<br />
                    아닌 가치 중심 도약을 추구하여 손님, 주주, 사회와 함께<br />
                    대한민국을 넘어 아시아 No.1 금융그룹이 될 수 있도록<br />
                    노력할 것입니다.
                  </p>
                </div>
              </div>
            </div>
            <!-- // 2030 비전 -->

            <!-- 전략목표 -->
            <div class="content_box value">
              <div class="content_title">
                <p class="title">전략목표</p>
              </div>
              <div class="content_desc">
                <div class="group">
                  <p class="title"><span>O.N.E.</span> value 2030</p>
                  <div class="content_img value_img01">
                    <img src="@/assets/images/contents/value-1.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <!-- // 전략목표 -->
          </div>
        </section>
      </UiTabPanel>
      <!-- // 비전과 미션 -->

      <!-- 핵심가치 -->
      <UiTabPanel name="companyGroupTab002">
        <section class="section02">
          <div class="desc-wrap row-margin-contents-group">
            <h3 class="text-title-1 font-weight-medium row-margin-item">
              POWER on Integrity
            </h3>
            <p class="text-body-3 font-weight-light color-gray-tertiary">
              <strong>하나금융그룹</strong>은 하나인만의 생각하는 방식,
              창조적이고 강력한 기업문화를 가지고 있습니다. 하나인들이 공유하고
              실천하는 핵심가치는 기업 활동에 있어서 가치판단과 행동의 기준이
              되는 가장 소중한 무형자산입니다.
            </p>
          </div>
          <div :class="$style['image-view']">
            <img src="@/assets/images/contents/company-2.png" alt="" />
          </div>
          <p class="desc color-gray-tertiary text-body-3 font-weight-light">
            하나금융그룹 핵심가치는 손님을 우선으로 하는 <br />
            기업과 개인의 가치판단 및 행동의 기준입니다.
          </p>
        </section>
      </UiTabPanel>
      <!-- // 핵심가치 -->

      <!-- 관계사 -->
      <UiTabPanel name="companyGroupTab003">
        <section class="section03">
          <h2 class="hanaFG_logo">
            <img src="@/assets/images/contents/hanaFG_logo.png" alt="" />
          </h2>
          <p class="desc">
            * 백분율은 모회사가 보유한 해당 자회사의 지분율입니다.<br />
            (2023년 12월 31일 기준)
          </p>
          <div :class="$style['image-view']" class="content_imgWrap">
            <img src="@/assets/images/contents/company-3-1.png" alt="" />
            <img src="@/assets/images/contents/company-3-2.png" alt="" />
          </div>
          <div class="ratio_wrap">
            <ol>
              <li>1) 지분율 : 하나금융티아이 95.1%, 하나캐피탈 4.9%</li>
              <li>2) 지분율 : 하나캐피탈 55%, 인도네시아KEB하나은행 30%</li>
              <li>3) 지분율 : 하나캐피탈 75%, 하나은행 25%</li>
            </ol>
          </div>
        </section>
      </UiTabPanel>
      <!-- // 관계사 -->
    </PageContents>
  </UiTab>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/company/CompanyGroup.scss';
</style>

<style lang="scss" scoped>
/* 비전과 미션 */
.section01 {
  .content_wrap {
    margin-top: 60px;

    .content_box {
      /* 공통 */
      .content_img {
        img {
          display: block;
          max-width: 100%;
          height: auto;
          margin: 0 auto;
        }
      }
      .content_desc {
        .desc {
          font-size: 13px;
          font-weight: 300;
          line-height: 19.5px;
          margin: 16px 0;
        }
      }
      .content_title {
        .title {
          font-size: 20px;
          line-height: 28px;
          font-weight: 700;
        }
      }
      /* // 공통 */

      &.mission {
        .content_img {
          &:after {
            content: '';
            display: block;
            height: 1px;
            background: #e0e0e0;
            margin: 60px 0 40px;
          }
        }
      }

      &.vision {
        margin-top: 60px;

        .content_desc {
          .sub_title_wrap {
            margin-top: 30px;
            .sub_title {
              color: #00a69e;
              font-size: 18px;
              font-weight: 700;
            }
            &:after {
              content: '';
              display: block;
              height: 1px;
              background: #eaeaea;
              margin: 30px 0;
            }
          }
        }

        .group {
          .title {
            font-size: 20px;
            line-height: 28px;
            font-weight: 700;
          }
          .vision_img {
            padding: 40px 58px;
          }
          &:nth-of-type(4) {
            .desc {
              margin-top: 24px;
            }
            .vision_img {
              padding-bottom: 0;
            }
            &:after {
              content: '';
              display: block;
              height: 1px;
              background: #eaeaea;
              margin: 30px 0;
            }
          }
        }
      }

      &.value {
        margin-top: 60px;

        .group {
          margin-top: 30px;
          .title {
            font-size: 18px;
            font-weight: 700;
            span {
              color: #e56267;
            }
          }
          .value_img01 {
            padding: 40px 20px 0;
          }
        }
      }
    }
  }
}
/* // 비전과 미션 */

/* 핵심가치 */
.section02 {
  .text-body-3 {
    strong {
      color: #15181f;
    }
  }
  .desc {
    text-align: center;
    margin-top: 40px;
  }
}
/* // 핵심가치 */

/* 관계사 */
.section03 {
  .hanaFG_logo {
    margin: 0;
    height: 30px;
    img {
      height: 100%;
    }
  }
  .desc {
    text-align: right;
    font-size: 12px;
    color: #8f8f8f;
    margin: 16px 0;
  }
  .content_imgWrap {
    img:nth-of-type(2) {
      margin-top: -1px;
    }
  }
  .ratio_wrap {
    margin-top: 16px;

    ol {
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        font-size: 12px;
        color: #8f8f8f;
        line-height: 18px;
      }
    }
  }
}

/* 관계사 */
</style>
<!-- E: 240516 수정 -->
