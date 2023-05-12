<script>
// Company_M08_p015
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import UiTab from '@/components/ui/tab/UiTab.vue';
import NavTab from '@/components/ui/tab/NavTab.vue';
import NavTabButton from '@/components/ui/tab/NavTabButton.vue';
import UiTabPanel from '@/components/ui/tab/UiTabPanel.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import PageSubText from '@/components/ui/text/PageSubText.vue';

import IconCall from '@/assets/images/icon/call.svg?component';
import IconCarSecurityBackground from '@/assets/images/icon/personal-terms-background.svg?component';
import IconCertification from '@/assets/images/icon/certification.svg?component';
import IconCertificationPerson from '@/assets/images/icon/certification-person.svg?component';
import IconCamera from '@/assets/images/icon/camera.svg?component';
import IconFolder from '@/assets/images/icon/folder.svg?component';
import IconLocation from '@/assets/images/icon/location.svg?component';
import IconDocument from '@/assets/images/icon/document.svg?component';
import IconMaximum from '@/assets/images/icon/maximum.svg?component';
import IconCompany from '@/assets/images/icon/company.svg?component';
import IconCommisionRate from '@/assets/images/icon/commission-rate.svg?component';
import IconCarSecurity from '@/assets/images/icon/car-security.svg?component';

export default {
  components: {
    PageContents,
    UiTab,
    UiTabPanel,
    NavTab,
    NavTabButton,
    PageTextGroup,
    PageMainText,
    PageSubText,
    IconCall,
    IconCertification,
    IconCertificationPerson,
    IconCamera,
    IconFolder,
    IconLocation,
    IconDocument,
    IconMaximum,
    IconCompany,
    IconCommisionRate,
    IconCarSecurity,
    IconCarSecurityBackground,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '인사/복리후생');
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
    <UiTab>
      <NavTab :useUiTab="true">
        <NavTabButton link="companyPersonnelWelfareNavTab001_001">
          인사제도
        </NavTabButton>
        <NavTabButton link="companyPersonnelWelfareNavTab001_002">
          복리후생
        </NavTabButton>
      </NavTab>

      <UiTabPanel name="companyPersonnelWelfareNavTab001_001">
        <div :class="$style['authority']">
          <ul :class="$style['authority__list']">
            <li :class="$style['authority__item']">
              <div :class="$style['authority__icon']">
                <IconCarSecurityBackground />
              </div>
              <div :class="$style['authority__contents']">
                <div :class="$style['authority__head']">
                  <div :class="$style['authority__title']">평가제도</div>
                </div>
                <div :class="$style['authority__text']">
                  해당 직무와 관련한 업무 수행을 근거로 하며, 사원 개개인의 핵심
                  역량과 성과, 업적에 대한 직무 수행 능력 평가를 정확하게
                  실시하여 사원들이 자신의 능력을 개발시키도록 유도하고
                  있습니다.<br />
                  또한 평가에 근거하여 공정하게 처우 보상 육성하여 근무의욕을
                  높이고 업무 능률을 향상시키고자 노력하고 있습니다.
                </div>
              </div>
            </li>
            <li :class="$style['authority__item']">
              <div :class="$style['authority__icon']">
                <IconCertificationPerson />
              </div>
              <div :class="$style['authority__contents']">
                <div :class="$style['authority__head']">
                  <div :class="$style['authority__title']">승진제도</div>
                </div>
                <div :class="$style['authority__text']">
                  합리적이고 공정하게 평가된 결과를 바탕으로 하여 직무 년수 등에
                  구애 받지 않고 개인의 능력에 따라 승진할 수 있는 제도적 기반을
                  마련하여 사원 개개인이 자신의 역량을 마음껏 발휘할 수 있도록
                  하고 있습니다.
                </div>
              </div>
            </li>
            <li :class="$style['authority__item']">
              <div :class="$style['authority__icon']">
                <IconCertification />
              </div>
              <div :class="$style['authority__contents']">
                <div :class="$style['authority__head']">
                  <div :class="$style['authority__title']">HR포인트제도</div>
                </div>
                <div :class="$style['authority__text']">
                  사내활동 등 직원의 꾸준한 노력에 대해 HR포인트를 부여하며,
                  사내활동의 적극적인 참여를 유도하여 정당한 성과귀속을 통한
                  건강한 직장문화를 정착시키고자 노력하고 있습니다.<br />
                  HR포인트는 사내 각종 인사선발 시 보조적인 지표로 활용하고
                  있습니다.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </UiTabPanel>

      <UiTabPanel name="companyPersonnelWelfareNavTab001_002">
        <PageTextGroup>
          <PageMainText>
            최고의 고객만족은<br />
            <strong>최고의 직원만족부터!</strong>
          </PageMainText>
          <PageSubText>
            다양한 복리후생을 통해 하나캐피탈 직원으로서의<br />
            자부심을 느낄 수 있도록 지원하고 있습니다.
          </PageSubText>
        </PageTextGroup>

        <div :class="$style['authority']">
          <ul :class="$style['authority__list']">
            <li :class="$style['authority__item']">
              <div :class="$style['authority__icon']">
                <IconCall />
              </div>
              <div :class="$style['authority__contents']">
                <div :class="$style['authority__head']">
                  <div :class="$style['authority__title']">
                    경조금 및 경조 휴가
                  </div>
                </div>
                <div :class="$style['authority__text']">
                  사원등과 함께 기쁨과 슬픔을 나누기 위해 임직원 및 가족들의
                  회갑, 결혼, 사망 시 경조금 및 휴가를 부여하고 있습니다. 더불어
                  축하 및 근조화환을 지원하고 있습니다.
                </div>
              </div>
            </li>
            <li :class="$style['authority__item']">
              <div :class="$style['authority__icon']">
                <IconCamera />
              </div>
              <div :class="$style['authority__contents']">
                <div :class="$style['authority__head']">
                  <div :class="$style['authority__title']">의료비 지원</div>
                </div>
                <div :class="$style['authority__text']">
                  사원 본인과 가족의 질병 및 부상 등으로 발생하는 의료비에 대해
                  지원을 하여 안정된 가정과 회사생활을 영위함으로써 근무의욕을
                  불러 일으키고, 회사에 대한 자긍심을 가질 수 있도록 하고
                  있습니다.
                </div>
              </div>
            </li>
            <li :class="$style['authority__item']">
              <div :class="$style['authority__icon']">
                <IconFolder />
              </div>
              <div :class="$style['authority__contents']">
                <div :class="$style['authority__head']">
                  <div :class="$style['authority__title']">
                    자녀 학자금 지원
                  </div>
                </div>
                <div :class="$style['authority__text']">
                  사원 자녀의 중 고 대학교 전 과정 수업료와 육성회비를 포함한
                  등록금을 지원하고 있습니다.
                </div>
              </div>
            </li>
            <li :class="$style['authority__item']">
              <div :class="$style['authority__icon']">
                <IconLocation />
              </div>
              <div :class="$style['authority__contents']">
                <div :class="$style['authority__head']">
                  <div :class="$style['authority__title']">
                    콘도 미니엄 운영
                  </div>
                </div>
                <div :class="$style['authority__text']">
                  마우나오션 리조트, 한화콘도를 비롯한 전국 각 지역의 휴양시설을
                  저렴한 가격으로 이용하여 사원들이 심신 단련 및 휴식을 취할 수
                  있도록 지원하고 있습니다.
                </div>
              </div>
            </li>
            <li :class="$style['authority__item']">
              <div :class="$style['authority__icon']">
                <IconDocument />
              </div>
              <div :class="$style['authority__contents']">
                <div :class="$style['authority__head']">
                  <div :class="$style['authority__title']">복지카드 발급</div>
                </div>
                <div :class="$style['authority__text']">
                  분기별 복지포인트 지급으로 복지증진과 만족도 재고를 위해
                  노력하고 있습니다.
                </div>
              </div>
            </li>
            <li :class="$style['authority__item']">
              <div :class="$style['authority__icon']">
                <IconMaximum />
              </div>
              <div :class="$style['authority__contents']">
                <div :class="$style['authority__head']">
                  <div :class="$style['authority__title']">자기개발비 지급</div>
                </div>
                <div :class="$style['authority__text']">
                  건강한 정신, 건강한 신체를 위한 어학 및 체력단련비를 지원하고
                  있습니다.
                </div>
              </div>
            </li>
            <li :class="$style['authority__item']">
              <div :class="$style['authority__icon']">
                <IconCompany />
              </div>
              <div :class="$style['authority__contents']">
                <div :class="$style['authority__head']">
                  <div :class="$style['authority__title']">
                    건강관리 프로그램
                  </div>
                </div>
                <div :class="$style['authority__text']">
                  매년 체계적인 건강검진/관리 시스템을 통하여 사원의 건강한 삶의
                  질 향상을 위해 노력하고 있습니다.<br />
                  또한 금연캠페인 및 사내 스포츠 동호회를 통하여 젊고 건강한
                  하나인을 만들어 갑니다.
                </div>
              </div>
            </li>
            <li :class="$style['authority__item']">
              <div :class="$style['authority__icon']">
                <IconCommisionRate />
              </div>
              <div :class="$style['authority__contents']">
                <div :class="$style['authority__head']">
                  <div :class="$style['authority__title']">
                    단체 보장성보험 가입
                  </div>
                </div>
                <div :class="$style['authority__text']">
                  단체보장성 보험 가입을 통하여 사원이 중대질병 및 사고발생으로
                  인한 금전적 부담으로부터 안정을 보장받을 수 있도록 지원하고
                  있습니다.
                </div>
              </div>
            </li>
            <li :class="$style['authority__item']">
              <div :class="$style['authority__icon']">
                <IconCarSecurity />
              </div>
              <div :class="$style['authority__contents']">
                <div :class="$style['authority__head']">
                  <div :class="$style['authority__title']">
                    기타 여가생활 지원
                  </div>
                </div>
                <div :class="$style['authority__text']">
                  <ul
                    :class="[
                      $style['basic-list'],
                      $style['basic-list--mini-margin'],
                    ]"
                  >
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'font-weight-regular',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">
                        Work & Life Balance 문화 지향, 각종 문화 & 여행 할인
                        서비스 제공
                      </div>
                    </li>
                    <li
                      :class="[
                        $style['basic-list__item'],
                        'font-weight-regular',
                      ]"
                    >
                      <div :class="$style['basic-list__symbol']"></div>
                      <div :class="$style['basic-list__content']">
                        다양한 사내동호회 활동 지원
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </UiTabPanel>
    </UiTab>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/company/CompanyPersonnelWelfare.scss';
</style>
