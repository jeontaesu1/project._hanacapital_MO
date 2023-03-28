<script>
import { ref, onMounted, onUpdated, onUnmounted } from 'vue';

const datas = () => [
  /*
  {
    depth1: '',
    datas: [
      {
        depth2: '',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/',
        status: 'ing', // ing, end, moding, confirm
        create: '2023.03.24',
        log: [
          {
            // { date: '2023.03.24', text: '' },
          }
        ],
      },
    ],
  },
  */
  {
    depth1: '공통',
    datas: [
      {
        depth2: '레이아웃',
        depth3: 'Type 001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/layout-001',
        status: 'end',
        create: '2023.03.24',
        log: [],
      },
      {
        depth2: '레이아웃',
        depth3: 'Type 02',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/layout-002',
        status: 'end',
        create: '2023.03.24',
        log: [],
      },
      {
        depth2: '레이아웃',
        depth3: 'Type 03',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/layout-003',
        status: 'end',
        create: '2023.03.24',
        log: [],
      },
      {
        depth2: '본인인증',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/identification-001',
        status: 'end',
        create: '2023.03.24',
        log: [],
      },
      {
        depth2: '본인인증',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/identification-002',
        status: 'end',
        create: '2023.03.24',
        log: [],
      },
    ],
  },
  {
    depth1: '홈',
    datas: [
      {
        depth2: '',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/home',
        status: '',
        create: '',
        log: [],
      },
    ],
  },
  {
    depth1: '전체메뉴',
    datas: [
      {
        depth2: '',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/menu',
        status: '',
        create: '',
        log: [],
      },
    ],
  },
  {
    depth1: '회원관리',
    datas: [
      {
        depth2: '로그인(WEB)',
        depth3: '아이디\n공동인증서',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sign/signin',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '로그인(WEB)',
        depth3: '아이디',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/guide/sign-in-001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '로그인(WEB)',
        depth3: '공동인증서',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/guide/sign-in-certificate-001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '아이디 찾기(WEB)',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/sign-find-id-001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '비밀번호 찾기(WEB)',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/sign-reset-password-001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '회원가입(WEB)',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/sign-up-001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '회원가입(APP)',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sign/signup-app',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '회원가입(APP)',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/sign-up-app-001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '간편비밀번호 불러오기(APP)',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sign/load-pin',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '간편비밀번호 불러오기(APP)',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/sign-load-pin-001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '로그인(APP)',
        depth3: '간편비밀번호',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/guide/sign-in-pin-001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '로그인(APP)',
        depth3: '간편비밀번호 초기화',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/guide/sign-reset-pin-001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '로그인(APP)',
        depth3: '생체 인식',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/guide/sign-in-biometrics-001',
        status: '',
        create: '',
        log: [],
      },
    ],
  },
  {
    depth1: '개인금융',
    datas: [
      {
        depth2: 'e하나신용대출',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/e-hana',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: 'e하나신용대출',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/personal-loan-e-hana-001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '행복아파트론',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/happiness-apartment',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '행복아파트론',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/personal-loan-happiness-apartment-001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '아파트론',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/apartment',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '원큐자동차담보대출',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/one-q-auto',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '원큐자동차담보대출',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/personal-loan-one-q-auto-001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '우수고객추가대출',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/best-customer',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '우수고객추가대출',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/personal-loan-best-customer-001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: 'e임대주택론(임대보증금 담보대출)',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/e-rental-house',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '스탁론',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/stock',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '스탁론',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/personal-loan-stock-001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '의료기할부',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/medical-appliances',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '사업자주택담보대출',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/business-house',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '사업자주택담보대출',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/personal-loan-business-house-001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '내구소비재할부',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/consumer-durables',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '통합 한도조회',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/personal-loan-etc-001',
        status: '',
        create: '',
        log: [],
      },
    ],
  },
  {
    depth1: '고객센터',
    datas: [
      {
        depth2: '고객상담',
        depth3: '안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/counseling-info',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '고객상담',
        depth3: '상담내용 작성',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/counseling-regist',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '고객상담',
        depth3: '완료',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/counseling-regist-complete',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '공지사항',
        depth3: '리스트',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/notice-list',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '공지사항',
        depth3: '상세',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/notice-detail',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '이벤트',
        depth3: '리스트',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/event-list',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '이벤트',
        depth3: '상세',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/event-detail',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '지점안내',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/branch-list',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '고객센터 ARS안내',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/ars',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '전화상담신청',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/reservation-counseling',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '전화상담신청',
        depth3: '완료',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/reservation-counseling-complete',
        status: '',
        create: '',
        log: [],
      },
    ],
  },
];

export default {
  setup() {
    const tableDatas = datas();
    const statusText = {
      ing: '작업중',
      end: '작업완료',
      moding: '수정중',
      confirm: '검수완료',
    };
    const dates = (() => {
      const array = [];

      const add = (date) => {
        if (
          typeof date === 'string' &&
          date.length &&
          array.indexOf(date) === -1
        ) {
          array.push(date);
        }
      };

      tableDatas.forEach((item) => {
        item.datas.forEach((data) => {
          add(data.create);

          data.log.sort((a, b) => {
            var dateA = a.date.toUpperCase();
            var dateB = b.date.toUpperCase();
            if (dateA < dateB) {
              return -1;
            }
            if (dateA > dateB) {
              return 1;
            }
            return 0;
          });

          data.log.forEach((log) => {
            add(log.date);
          });
        });
      });

      array.sort();

      return array;
    })();
    const latestDate = dates[dates.length - 1];

    const renderVal = (datas, i, key, testKey) => {
      const val = datas[i][key];
      const testVal = testKey && datas[i][testKey];
      const prevIndex = i - 1;
      const result = val.replace(/\n/g, '<br>');

      if (!(prevIndex >= 0 && datas[prevIndex])) return result;

      const noRender = datas[prevIndex][key] === val;

      if (testVal) {
        if (testVal === datas[prevIndex][testKey] && noRender) {
          return '';
        } else {
          return result;
        }
      } else {
        if (noRender) {
          return '';
        } else {
          return result;
        }
      }
    };

    const bottomBar = ref(null);
    const fake = ref(null);

    const update = () => {
      if (bottomBar.value && fake.value) {
        const height = bottomBar.value.offsetHeight;
        fake.value.style.height = `${height}px`;
      }
    };

    const scroll = () => {
      const html = document.getElementsByTagName('html')[0];

      if (html && bottomBar.value) {
        bottomBar.value.style.marginLeft = `-${html.scrollLeft}px`;
      }
    };

    const resize = () => {
      scroll();
      update();
    };

    const load = () => {
      resize();
    };

    onMounted(() => {
      update();

      window.addEventListener('load', load);
      window.addEventListener('scroll', scroll);
      window.addEventListener('resize', resize);
    });

    onUpdated(() => {
      update();
    });

    onUnmounted(() => {
      window.removeEventListener('load', load);
      window.removeEventListener('scroll', scroll);
      window.removeEventListener('resize', resize);
    });

    return {
      bottomBar,
      fake,
      tableDatas,
      statusText,
      latestDate,
      renderVal,
    };
  },
};
</script>

<template>
  <div class="contIndex">
    <div class="index-wrap">
      <div class="index">
        <h1 class="index-title">하나캐피탈 - 모바일</h1>
        <div class="index-gnb">
          <div class="index-links">
            <div class="index-links__inner">
              <a href="/guide/component" target="_blank" class="index-button">
                컴포넌트 가이드
              </a>
            </div>
          </div>
        </div>
        <div class="index-bottom" ref="bottomBar">
          <div class="index-links">
            <div class="index-links__inner">
              <a
                v-for="(item, i) in tableDatas"
                :key="i"
                :href="`#section${i}`"
                class="index-button"
              >
                {{ item.depth1 }}
              </a>
            </div>
          </div>
        </div>
        <div class="index-datas" id="indexTable">
          <div
            class="index-section"
            v-for="(item, i) in tableDatas"
            :key="i"
            :id="`section${i}`"
          >
            <h2 class="index-section__title">{{ item.depth1 }}</h2>
            <div class="index-table">
              <table>
                <colgroup>
                  <col width="160px" />
                  <col width="160px" />
                  <col width="160px" />
                  <col width="160px" />
                  <col width="160px" />
                  <col />
                  <col width="100px" />
                  <col width="100px" />
                  <col width="110px" />
                  <col width="300px" />
                </colgroup>
                <thead>
                  <tr>
                    <th>depth2</th>
                    <th>depth3</th>
                    <th>depth4</th>
                    <th>depth5</th>
                    <th>depth6</th>
                    <th>path</th>
                    <th>status</th>
                    <th>create</th>
                    <th>update</th>
                    <th>log</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(data, i) in item.datas" :key="i">
                    <td v-html="renderVal(item.datas, i, 'depth2')"></td>
                    <td
                      v-html="renderVal(item.datas, i, 'depth3', 'depth2')"
                    ></td>
                    <td
                      v-html="renderVal(item.datas, i, 'depth4', 'depth3')"
                    ></td>
                    <td
                      v-html="renderVal(item.datas, i, 'depth5', 'depth4')"
                    ></td>
                    <td
                      v-html="renderVal(item.datas, i, 'depth6', 'depth5')"
                    ></td>
                    <td>
                      <a :href="data.path" target="_blank">
                        {{ data.path }}
                      </a>
                    </td>
                    <td>
                      <span
                        v-if="data.status.length"
                        :class="`index-status index-status--${data.status}`"
                      >
                        {{ statusText[data.status] }}
                      </span>
                    </td>
                    <td
                      :class="{
                        'is-emphasis': latestDate === data.create,
                      }"
                    >
                      {{ data.create }}
                    </td>
                    <td></td>
                    <td>
                      <ul v-if="data.log.length" class="index-log">
                        <li
                          v-for="(log, i) in data.log"
                          :key="i"
                          :class="[
                            'index-log__item',
                            {
                              'is-emphasis': latestDate === log.date,
                            },
                          ]"
                        >
                          <div class="index-log__item__date">
                            <span>[{{ log.date }}]</span>
                          </div>
                          {{ log.text }}
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="index-fake-botttom" ref="fake"></div>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/views/uiGuide/GuideIndex.scss';
</style>
