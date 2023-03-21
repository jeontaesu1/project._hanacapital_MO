<script setup>
import BasicButton from '@/components/ui/button/BasicButton.vue';

const datas = [
  {
    subTitle: '공통01',
    subContents: [
      {
        depth1: '레이아웃01',
        depth2: '',
        depth3: '',
        depth4: '',
        depth5: '',
        path: '/a',
        status: 'end',
        create: '2023.03.23',
        log: [
          { date: '2023.03.24', text: '수정사항1' },
          { date: '2023.03.25', text: '수정사항2' },
          { date: '2023.03.26', text: '수정사항3' },
          { date: '2023.03.27', text: '수정사항4' },
        ],
      },
    ],
  },
  {
    subTitle: '공통02',
    subContents: [
      {
        depth1: '레이아웃02-02',
        depth2: '',
        depth3: '',
        depth4: '',
        depth5: '',
        path: '/b',
        status: 'ing',
        create: '2023.03.23',
        log: [
          { date: '2023.03.24', text: '수정사항1' },
          { date: '2023.03.24', text: '수정사항2' },
        ],
      },
      {
        depth1: '레이아웃02-02',
        depth2: '',
        depth3: '',
        depth4: '',
        depth5: '',
        path: '/c',
        status: 'moding',
        create: '2023.03.23',
        log: [
          { date: '2023.03.24', text: '수정사항1' },
          { date: '2023.05.01', text: '수정사항2' },
        ],
      },
    ],
  },
  {
    subTitle: '공통03',
    subContents: [
      {
        depth1: '레이아웃03-01',
        depth2: '',
        depth3: '',
        depth4: '',
        depth5: '',
        path: '/a',
        status: 'end',
        create: '2023.03.23',
        log: '',
      },
      {
        depth1: '레이아웃03-02',
        depth2: '',
        depth3: '',
        depth4: '',
        depth5: '',
        path: '/b',
        status: 'end',
        create: '2023.03.23',
        log: '',
      },
    ],
  },
  {
    subTitle: '공통04',
    subContents: [
      {
        depth1: '레이아웃04-01',
        depth2: '',
        depth3: '',
        depth4: '',
        depth5: '',
        path: '/a',
        status: 'moding',
        create: '2023.03.23',
        log: [{ date: '2023.05.01', text: '수정사항2' }],
      },
      {
        depth1: '레이아웃04-02',
        depth2: '',
        depth3: '',
        depth4: '',
        depth5: '',
        path: '/b',
        status: 'end',
        create: '2023.03.23',
        log: '',
      },
      {
        depth1: '레이아웃04-03',
        depth2: '',
        depth3: '',
        depth4: '',
        depth5: '',
        path: '/b',
        status: 'end',
        create: '2023.03.23',
        log: '',
      },
      {
        depth1: '레이아웃04-04',
        depth2: '',
        depth3: '',
        depth4: '',
        depth5: '',
        path: '/b',
        status: 'end',
        create: '2023.03.23',
        log: '',
      },
      {
        depth1: '레이아웃04-05',
        depth2: '',
        depth3: '',
        depth4: '',
        depth5: '',
        path: '/b',
        status: 'end',
        create: '2023.03.23',
        log: '',
      },
      {
        depth1: '레이아웃04-06',
        depth2: '',
        depth3: '',
        depth4: '',
        depth5: '',
        path: '/b',
        status: 'end',
        create: '2023.03.23',
        log: '',
      },
      {
        depth1: '레이아웃04-07',
        depth2: '',
        depth3: '',
        depth4: '',
        depth5: '',
        path: '/b',
        status: 'end',
        create: '2023.03.23',
        log: '',
      },
    ],
  },
  {
    subTitle: '공통05',
    subContents: [
      {
        depth1: '레이아웃05-01',
        depth2: '',
        depth3: '',
        depth4: '',
        depth5: '',
        path: '/a',
        status: 'end',
        create: '2023.03.23',
        log: '',
      },
      {
        depth1: '레이아웃05-02',
        depth2: '',
        depth3: '',
        depth4: '',
        depth5: '',
        path: '/b',
        status: 'end',
        create: '2023.03.23',
        log: '',
      },
      {
        depth1: '레이아웃05-03',
        depth2: '',
        depth3: '',
        depth4: '',
        depth5: '',
        path: '/b',
        status: 'end',
        create: '2023.03.23',
        log: '',
      },
      {
        depth1: '레이아웃05-04',
        depth2: '',
        depth3: '',
        depth4: '',
        depth5: '',
        path: '/b',
        status: 'end',
        create: '2023.03.23',
        log: '',
      },
      {
        depth1: '레이아웃05-05',
        depth2: '',
        depth3: '',
        depth4: '',
        depth5: '',
        path: '/b',
        status: 'end',
        create: '2023.03.23',
        log: '',
      },
      {
        depth1: '레이아웃05-06',
        depth2: '',
        depth3: '',
        depth4: '',
        depth5: '',
        path: '/b',
        status: 'end',
        create: '2023.03.23',
        log: '',
      },
      {
        depth1: '레이아웃05-07',
        depth2: '',
        depth3: '',
        depth4: '',
        depth5: '',
        path: '/b',
        status: 'end',
        create: '2023.03.23',
        log: '',
      },
    ],
  },
];

// Convert date to milliSecond
function convertDateToMilliSecond(formattedDate) {
  return new Date(formattedDate.replaceAll('.', '-')).getTime();
}

// Convert milliSecond to date
function convertMilliSecondToDate(milliSecond) {
  const dateObj = new Date(milliSecond);
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const date = String(dateObj.getDate()).padStart(2, '0');
  return year + '.' + month + '.' + date;
}

// Get recent day of parameter Array
function getMaxMilliSecondFromLogArray(logArray) {
  const milliSeconds = logArray.map((log) =>
    convertDateToMilliSecond(log.date)
  );
  const maxMilliSecond = Math.max(...milliSeconds);
  return maxMilliSecond;
}

// All modify date Array
const logs = datas
  .map((data) => data.subContents)
  .flat()
  .map((subContent) => subContent.log)
  .filter((log) => !!log)
  .flat();

// Recent day of all modify date Array
const maxMilliSecond = getMaxMilliSecondFromLogArray(logs);

// Button link to section
let clickedTimer = null;
const LinkButtonActive = (e) => {
  const Link = e.target.parentElement.getAttribute('href');
  const target = document.querySelector(Link);
  const allTarget = document.getElementsByClassName('index-section');

  for (var i = 0; i < allTarget.length; i++) {
    allTarget[i].classList.remove('clicked');
  }
  clearTimeout(clickedTimer);
  clickedTimer = setTimeout(function () {
    target.classList.add('clicked');
  }, 100);
};
</script>

<template>
  <div class="contIndex">
    <div class="index-wrap">
      <div class="index">
        <h1 class="index-title">하나캐피탈 모바일 리빌드</h1>
        <div class="index-gnb">
          <div class="index-links">
            <div class="index-links__inner">
              <BasicButton
                tag="RouterLink"
                size="mini"
                inline="true"
                to="/guide-component"
                >컴포넌트 가이드</BasicButton
              >
            </div>
          </div>
        </div>
        <div class="index-bottom">
          <div class="index-links">
            <div class="index-links__inner" id="nav">
              <BasicButton
                v-for="(data, i) in datas"
                :key="i"
                theme="secondary"
                tag="a"
                size="mini"
                inline="true"
                :href="`#section${i}`"
                @click="LinkButtonActive"
                >{{ data.subTitle }}</BasicButton
              >
            </div>
          </div>
        </div>
        <div class="index-datas" id="indexTable">
          <div
            class="index-section"
            v-for="(data, i) in datas"
            :key="i"
            :id="`section${i}`"
          >
            <h2 class="index-section__title">{{ data.subTitle }}</h2>
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
                    <th>depth1</th>
                    <th>depth2</th>
                    <th>depth3</th>
                    <th>depth4</th>
                    <th>depth5</th>
                    <th>path</th>
                    <th>status</th>
                    <th>create</th>
                    <th>update</th>
                    <th>log</th>
                  </tr>
                </thead>
                <tbody v-for="(subContent, i) in data.subContents" :key="i">
                  <tr>
                    <td>{{ subContent.depth1 }}</td>
                    <td>{{ subContent.depth2 }}</td>
                    <td>{{ subContent.depth3 }}</td>
                    <td>{{ subContent.depth4 }}</td>
                    <td>{{ subContent.depth5 }}</td>
                    <td>
                      <RouterLink :to="subContent.path">
                        {{ subContent.path }}
                      </RouterLink>
                    </td>
                    <td>
                      <span
                        class="index-status index-status--end"
                        v-if="subContent.status === 'end'"
                        >작업완료</span
                      >
                      <span
                        class="index-status index-status--ing"
                        v-else-if="subContent.status === 'ing'"
                        >작업중</span
                      >
                      <span
                        class="index-status index-status--moding"
                        v-else-if="subContent.status === 'moding'"
                        >수정중</span
                      >
                    </td>
                    <td>{{ subContent.create }}</td>
                    <td
                      :class="{
                        'is-emphasis':
                          !!subContent.log &&
                          getMaxMilliSecondFromLogArray(subContent.log) ===
                            maxMilliSecond,
                      }"
                    >
                      {{
                        subContent.log &&
                        convertMilliSecondToDate(
                          getMaxMilliSecondFromLogArray(subContent.log)
                        )
                      }}
                    </td>
                    <td>
                      <ul class="index-log">
                        <li
                          v-for="(logItem, i) in subContent.log"
                          :key="i"
                          class="index-log__item"
                          :class="{
                            'is-emphasis':
                              !!logItem &&
                              convertDateToMilliSecond(logItem.date) ===
                                maxMilliSecond,
                          }"
                        >
                          <div class="index-log__item__date">
                            <span>{{ logItem.date }}</span>
                          </div>
                          {{ logItem.text }}
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
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/views/uiGuide/GuideIndex.scss';
</style>
