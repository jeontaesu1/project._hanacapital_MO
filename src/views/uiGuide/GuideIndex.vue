<script>
import { ref, onMounted, onUpdated, onUnmounted } from 'vue';

const datas = () => [
  /*
  {
    title: '',
    datas: [
      {
        depth1: '',
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
    title: '공통',
    datas: [
      {
        depth1: '레이아웃',
        depth2: 'Type 001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/layout-001',
        status: 'end',
        create: '2023.03.24',
        log: [],
      },
      {
        depth1: '레이아웃',
        depth2: 'Type 02',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/layout-002',
        status: 'end',
        create: '2023.03.24',
        log: [],
      },
      {
        depth1: '레이아웃',
        depth2: 'Type 03',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/layout-003',
        status: 'end',
        create: '2023.03.24',
        log: [],
      },
      {
        depth1: '본인인증',
        depth2: '',
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
        depth1: '본인인증',
        depth2: '팝업',
        depth3: '',
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
    title: '홈',
    datas: [
      {
        depth1: '홈',
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
    title: '전체메뉴',
    datas: [
      {
        depth1: '전체메뉴',
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
    title: '회원관리',
    datas: [
      {
        depth1: '로그인',
        depth2: '',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sign/signin',
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

    const renderVal = (datas, i, key) => {
      const val = datas[i][key];
      const prevIndex = i - 1;

      if (prevIndex >= 0 && datas[prevIndex] && datas[prevIndex][key] === val) {
        return '';
      } else {
        return val.replace(/\n/g, '<br>');
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
                {{ item.title }}
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
            <h2 class="index-section__title">{{ item.title }}</h2>
            <div class="index-table">
              <table>
                <colgroup>
                  <col width="160px" />
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
                    <th>depth1</th>
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
                    <td>{{ renderVal(item.datas, i, 'depth1') }}</td>
                    <td>{{ renderVal(item.datas, i, 'depth2') }}</td>
                    <td>{{ renderVal(item.datas, i, 'depth3') }}</td>
                    <td>{{ renderVal(item.datas, i, 'depth4') }}</td>
                    <td>{{ renderVal(item.datas, i, 'depth5') }}</td>
                    <td>{{ renderVal(item.datas, i, 'depth6') }}</td>
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
