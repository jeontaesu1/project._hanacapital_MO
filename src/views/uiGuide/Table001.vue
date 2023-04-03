<script>
import PageContents from '@/components/ui/layout/PageContents.vue';
import DataTable from '@/components/ui/table/DataTable.vue';

export default {
  components: {
    PageContents,
    DataTable,
  },
  data() {
    return {
      headers: [
        {
          text: '동거명의인',
          value: 'cohabitant',
        },
        { text: '주민번호', value: 'people' },
        { text: '최종지분', value: 'share' },
        { text: '주소', value: 'address' },
        { text: '순위번호', value: 'ranking' },
      ],
      items: [
        {
          cohabitant: '박지혜 (공유자)',
          people: '999999-32132321',
          share: '2분의1',
          address:
            '부산 광역시 남구 진남로 198번길 9-1, 101동 901호(현대아파트)',
          ranking: '4',
        },
        {
          cohabitant: '박지혜 (공유자)',
          people: '999999-32132321',
          share: '2분의1',
          address:
            '부산 광역시 남구 진남로 198번길 9-1, 101동 901호(현대아파트)',
          ranking: '4',
        },
        {
          cohabitant: '박지혜 (공유자)',
          people: '999999-32132321',
          share: '2분의1',
          address:
            '부산 광역시 남구 진남로 198번길 9-1, 101동 901호(현대아파트)',
          ranking: '4',
        },
        {
          cohabitant: '박지혜 (공유자)',
          people: '999999-32132321',
          share: '2분의1',
          address:
            '부산 광역시 남구 진남로 198번길 9-1, 101동 901호(현대아파트)',
          ranking: '4',
        },
      ],

      headers2: [
        { text: '순위번호', value: 'ranking' },
        { text: '등기목적', value: 'registered' },
        { text: '접수정보', value: 'receipt' },
        { text: '주소', value: 'address' },
        { text: '대상소유자', value: 'name' },
      ],
      items2: [
        {
          ranking: '3',
          registered: '근저당권 설정',
          receipt: '2021년 2월5일 제3838호',
          address:
            '부산 광역시 남구 진남로 198번길 9-1, 101동 901호(현대아파트)',
          name: '박지혜',
        },
        {
          ranking: '3',
          registered: '근저당권 설정',
          receipt: '2021년 2월5일 제3838호',
          address:
            '부산 광역시 남구 진남로 198번길 9-1, 101동 901호(현대아파트)',
          name: '박지혜',
        },
        {
          ranking: '3',
          registered: '근저당권 설정',
          receipt: '2021년 2월5일 제3838호',
          address:
            '부산 광역시 남구 진남로 198번길 9-1, 101동 901호(현대아파트)',
          name: '박지혜',
        },
        {
          ranking: '3',
          registered: '근저당권 설정',
          receipt: '2021년 2월5일 제3838호',
          address:
            '부산 광역시 남구 진남로 198번길 9-1, 101동 901호(현대아파트)',
          name: '박지혜',
        },
      ],
    };
  },
};
</script>

<template>
  <PageContents>
    <DataTable :headers="headers" :items="items" />
    <DataTable :headers="headers2" :items="items2" />
  </PageContents>
</template>
