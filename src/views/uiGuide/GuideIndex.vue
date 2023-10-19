<script>
import { ref, computed, onMounted, onUpdated, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

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
        status: 'ing', // ing, partend, end, moding, confirm
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
        depth2: '로딩',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/loading-001',
        status: 'end',
        create: '2023.05.16',
        log: [
          {
            date: '2023.09.27',
            text: '모션 변경',
          },
        ],
      },
      {
        depth2: '레이아웃',
        depth3: 'Type 1',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/layout-001',
        status: 'end',
        create: '2023.03.24',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
          {
            date: '2023.09.26',
            text: '푸터 신용대출상담, 고객센터 정보 삭제',
          },
        ],
      },
      {
        depth2: '레이아웃',
        depth3: 'Type 2',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/layout-002',
        status: 'end',
        create: '2023.03.24',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
        ],
      },
      {
        depth2: '레이아웃',
        depth3: 'Type 3',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/layout-003',
        status: 'end',
        create: '2023.03.24',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
        ],
      },
      {
        depth2: '얼럿',
        depth3: '버튼 한개',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/alert-001',
        status: 'end',
        create: '2023.05.12',
        log: [],
      },
      {
        depth2: '얼럿',
        depth3: '버튼 두개',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/alert-002',
        status: 'end',
        create: '2023.05.12',
        log: [],
      },
      {
        depth2: '얼럿',
        depth3: '타이틀만 있는 경우',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/alert-003',
        status: 'end',
        create: '2023.05.12',
        log: [],
      },
      {
        depth2: '얼럿',
        depth3: '텍스트만 있는 경우',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/alert-004',
        status: 'end',
        create: '2023.05.12',
        log: [],
      },
      {
        depth2: '토스트 얼럿',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/toast-alert-001',
        status: 'end',
        create: '2023.05.12',
        log: [
          {
            date: '2023.09.14',
            text: '방향 및 위치 변경',
          },
        ],
      },
      {
        depth2: '본인인증\nCommon_M00_p003',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/identification-001',
        status: 'end',
        create: '2023.03.24',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '본인인증\nCommon_M00_p003',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/identification-002',
        status: 'end',
        create: '2023.03.24',
        log: [
          {
            date: '2023.05.05',
            text: '팝업 추가\n- 메뉴진입 본인인증 안내',
          },
          {
            date: '2023.05.19',
            text: '팝업 추가\n- 간편인증 선택 팝업\n-간편인증 이용약관 동의',
          },
          {
            date: '2023.07.19',
            text: 'Common_M00_l002\n통신사 셀렉트에 placeholder 추가',
          },
          {
            date: '2023.08.29',
            text: '- Common_M00_b001\n인증완료 케이스 추가\n- Common_M00_b050\n추가인증 팝업 추가',
          },
          {
            date: '2023.08.30',
            text: '- Common_M00_l004\n생년월일에 placeholder 추가\n- Common_M00_l002\n생년월일에 placeholder 추가\n- Common_M00_l050 팝업 추가\n- Common_M00_l051 팝업 추가\n- Common_M00_l052 팝업 추가\n- Common_M00_l053 팝업 추가\n- Common_M00_l054 팝업 추가',
          },
          {
            date: '2023.08.31',
            text: '- Common_M00_l002\n인증번호 텍스트필드 수정',
          },
          {
            date: '2023.09.01',
            text: '- Common_M00_l050\n풀 팝업으로 변경\n- Common_M00_l051\n풀 팝업으로 변경\n- Common_M00_l052\n풀 팝업으로 변경\n- Common_M00_l053\n풀 팝업으로 변경\n- Common_M00_l054\n풀 팝업으로 변경',
          },
          {
            date: '2023.09.14',
            text: '- Common_M00_l002\n이름 입력 필드 옆에 다음 버튼 추가',
          },
          {
            date: '2023.09.15',
            text: '- Common_M00_l002\n다른 방법으로 인증하기 버튼 추가',
          },
          {
            date: '2023.09.18',
            text: '- Common_M00_b052\n문구 간격 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- Common_M00_l051\n- Common_M00_l052\n- Common_M00_l053\n- Common_M00_l054\n- Common_M00_l033\n- Common_M00_l030\n- Common_M00_b005\n- Common_M00_l002\n- Common_M00_l029',
          },
          {
            date: '2023.09.25',
            text: '생년월일 입력 전 빈 동그라미 보이는 기능 적용\n- Common_M00_l002\n- Common_M00_l004',
          },
          {
            date: '2023.10.11',
            text: '- Common_M00_l002\n이름 입력 필드 옆에 다음 버튼 너비 수정',
          },
          {
            date: '2023.10.17',
            text: '- Common_M00_l002\n이름 입력 필드 옆에 다음 버튼 텍스트 크기 및 너비 수정',
          },
          {
            date: '2023.10.19',
            text: '내용 전체 및 타이틀 정렬 수정\n- Common_M00_l050\n- Common_M00_l051\n- Common_M00_l052\n- Common_M00_l053\n- Common_M00_l054\n 팝업 추가\n- Common_M00_l055',
          },
        ],
      },
      {
        depth2: '신분증 촬영 및 정보 입력',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/id-shoot-001',
        status: 'end',
        create: '2023.04.07',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- Common_M00_l007\n- Common_M00_l008\n- Common_M00_l006',
          },
        ],
      },
      {
        depth2: '신분증 촬영 및 정보 입력',
        depth3: '운전면허증',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/ui-guide/id-shoot-002',
        status: 'end',
        create: '2023.04.07',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- Common_M00_l010\n- Common_M00_l011\n- Common_M00_l009',
          },
        ],
      },
      {
        depth2: '대출계산기',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/loan-calculator-001',
        status: 'end',
        create: '2023.03.31',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- Common_M00_b014',
          },
          {
            date: '2023.10.04',
            text: 'Common_M00_l016 대출금액 항목 금액 표기\n Common_M00_b014 만기 일시상환 케이스 추가 ',
          },
        ],
      },
      {
        depth2: '직장검색',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/search-workplace-001',
        status: 'end',
        create: '2023.04.19',
        log: [],
      },
      {
        depth2: '날짜입력\nCommon_M00_p009',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/enter-date-001',
        status: 'end',
        create: '2023.04.21',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '주소검색',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/search-address-001',
        status: 'end',
        create: '2023.04.14',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- Common_M00_l014',
          },
          {
            date: '2023.09.22',
            text: 'Common_M00_l014 표준화 주소 없는 케이스 추가',
          },
        ],
      },
      {
        depth2: '약관동의',
        depth3: '상세',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/ui-guide/clause-detail-001',
        status: 'end',
        create: '2023.03.31',
        log: [
          {
            date: '2023.08.25',
            text: 'Common_M00_l001 타이틀 말줄임 처리 및 내용 아이프레임 처리',
          },
          {
            date: '2023.10.12',
            text: 'Common_M00_l001 타이틀 정렬 및 말줄임 수정',
          },
          {
            date: '2023.10.19',
            text: 'Common_M00_l001 타이틀 좌우 여백 제거',
          },
        ],
      },
      {
        depth2: '안내팝업',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/guide-001',
        status: 'end',
        create: '2023.03.31',
        log: [
          { date: '2023.04.07', text: '앱 설치 안내 팝업 추가' },
          {
            date: '2023.07.21',
            text: '팝업추가\n- 접속대기 안내 팝업\n- 초과접속 안내 팝업',
          },
          {
            date: '2023.08.24',
            text: 'Common_M00_b018, Common_M00_b019 딤 영역 클릭 시 닫히는 기능 제거',
          },
          {
            date: '2023.08.25',
            text: 'Common_M00_b017 약관 내용 추가',
          },
          {
            date: '2023.09.18',
            text: 'Common_M00_l022 화면삭제',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- Common_M00_l021',
          },
        ],
      },
      {
        depth2: '오류안내',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/error-001',
        status: 'end',
        create: '2023.03.31',
        log: [
          {
            date: '2023.09.18',
            text: 'Common_M00_l027 시간 수정\nCommon_M00_l028 시간 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- Common_M00_l027',
          },
        ],
      },
      {
        depth2: '404 오류안내\nCommon_M00_p011',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/errorContents/Common_M00_p011',
        status: 'end',
        create: '2023.10.13',
        log: [],
      },
      {
        depth2: '앱 중계 페이지',
        depth3: '1Q 캐피탈\nCommon_M00_p007',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/redirect-app',
        status: 'end',
        create: '2023.03.31',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
          {
            date: '2023.10.19',
            text: '팝업 추가\n- Common_M00_p100\n Common_M00_p007 페이지에서 팝업으로 변경, 앱 설치 아이콘 교체',
          },
        ],
      },
      {
        depth2: '앱 중계 페이지',
        depth3: '앱프리\nCommon_M00_p008',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/redirect/app-free',
        status: 'end',
        create: '2023.03.31',
        log: [
          {
            date: '2023.09.21',
            text: ' 타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '검색',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/search-001',
        status: 'end',
        create: '2023.04.14',
        log: [
          {
            date: '2023.09.18',
            text: 'Common_M00_l019 이벤트 배너 반영 및 공지사항 날짜 표기법 변경',
          },
        ],
      },
      {
        depth2: '서류등록',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/regist-document-001',
        status: 'end',
        create: '2023.05.12',
        log: [
          {
            date: '2023.07.21',
            text: '- Common_M00_l040 문구 수정',
          },
          {
            date: '2023.08.29',
            text: '- Common_M00_l040 상단 "파일을 첨부하신 뒤에 해당 박스를 클릭하시면 미리보기 가능합니다." 문구 제거',
          },
          {
            date: '2023.09.18',
            text: 'Common_M00_l040 날짜 표기법 변경\nCommon_M00_l043 화면 삭제',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- Common_M00_l040',
          },
        ],
      },
      {
        depth2: '온보딩\nCommon_M00_p010',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/onboarding/home',
        status: 'end',
        create: '2023.06.23',
        log: [
          {
            date: '2023.09.14',
            text: '이미지 및 배경색 변경',
          },
        ],
      },
    ],
  },
  {
    depth1: '스플래시',
    datas: [
      {
        depth2: 'Common_M00_p006',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/splash',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
    ],
  },
  {
    depth1: '메인',
    datas: [
      {
        depth2: 'WEB',
        depth3: '홈\nMain_M01_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/main/home-001',
        status: 'end',
        create: '2023.06.02',
        log: [
          {
            date: '2023.07.24',
            text: 'v1.4 설계서 반영',
          },
          {
            date: '2023.08.02',
            text: '헤더 로고 추가',
          },
          {
            date: '2023.08.29',
            text: '배너 통이미지로 변경',
          },
          {
            date: '2023.08.31',
            text: '핫딜 영역 수정\n상단 유저명 클릭 기능 제거',
          },
          {
            date: '2023.09.26',
            text: '화면 구성 변경',
          },
          {
            date: '2023.10.10',
            text: '"중고차 구입 자금 대출" 영역 버튼 컬러 수정',
          },
          {
            date: '2023.10.11',
            text: '상품명 옆에 “외 N건” 텍스트 추가',
          },
          {
            date: '2023.10.16',
            text: '다이렉트 자동차보험 영역 문구 수정 및 배너 변경',
          },
          {
            date: '2023.10.17',
            text: '메인 타이틀 케이스 추가',
          },
          {
            date: '2023.10.18',
            text: '배너 영역 타입 변경',
          },
          {
            date: '2023.10.19',
            text: '배너 영역 background 추가',
          },
        ],
      },
      {
        depth2: 'WEB',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/main-001',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: 'APP',
        depth3: '홈\nMain_M02_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/main/home-002',
        status: 'end',
        create: '2023.06.02',
        log: [
          {
            date: '2023.07.24',
            text: 'v1.4 설계서 반영',
          },
          {
            date: '2023.08.29',
            text: '배너 통이미지로 변경',
          },
          {
            date: '2023.08.31',
            text: '핫딜 영역 수정\n상단 유저명 클릭 기능 제거',
          },
          {
            date: '2023.09.26',
            text: '화면 구성 변경',
          },
          {
            date: '2023.10.10',
            text: '"중고차 구입 자금 대출" 영역 버튼 컬러 수정',
          },
          {
            date: '2023.10.11',
            text: '상품명 옆에 “외 N건” 텍스트 추가',
          },
          {
            date: '2023.10.16',
            text: '"이런 서비스는 어때요?" 영역 문구 수정',
          },
          {
            date: '2023.10.17',
            text: '메인 타이틀 케이스 추가',
          },
          {
            date: '2023.10.18',
            text: '배너 영역 타입 변경',
          },
          {
            date: '2023.10.19',
            text: '배너 영역 background 추가',
          },
        ],
      },
      {
        depth2: 'APP',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/main-002',
        status: 'end',
        create: '2023.05.19',
        log: [
          {
            date: '2023.07.21',
            text: '팝업추가\n- 혜택 알림 수신 유도\n- 운세 알림 수신 유도',
          },
          {
            date: '2023.09.05',
            text: 'Main_M05_l002 동영상 타입, 이미지 타입 케이스 추가',
          },
          {
            date: '2023.09.12',
            text: 'Main_M05_l001 페이지 변경으로 삭제',
          },
        ],
      },
      {
        depth2: 'APP',
        depth3: '알림함\nMain_M06_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/main/push',
        status: 'end',
        create: '2023.05.26',
        log: [],
      },
      {
        depth2: 'APP',
        depth3: '렌탈 서비스\nMain_M07_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/main/rental',
        status: 'end',
        create: '2023.05.19',
        log: [
          {
            date: '2023.08.30',
            text: '컨텐츠 구성 변경',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: 'APP',
        depth3: '중고차 렌터카\nMain_M07_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/main/used-rental',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: 'APP',
        depth3: '오늘의 운세\nMain_M07_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/main/fortune',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: 'APP',
        depth3: '내대출\nMain_M03_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/main/my-loan',
        status: 'end',
        create: '2023.07.28',
        log: [
          {
            date: '2023.08.02',
            text: '"내대출" 타이틀 제거',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
          {
            date: '2023.10.18',
            text: '배너 영역 타입 변경',
          },
          {
            date: '2023.10.19',
            text: '배너 영역 background 추가',
          },
        ],
      },
      {
        depth2: 'APP',
        depth3: '내대출\nMain_M03_p001',
        depth4: '계약미보유,\n종료계약만 보유',
        depth5: '',
        depth6: '',
        path: '/main/my-loan-empty',
        status: 'end',
        create: '2023.07.28',
        log: [
          {
            date: '2023.08.02',
            text: '"내대출" 타이틀 제거',
          },
          {
            date: '2023.09.06',
            text: '"종료계약만 보유" 케이스 추가',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
          {
            date: '2023.10.16',
            text: '"행복아파트론", "원큐자동차담보대출", "스탁론" 영역 문구 수정',
          },
        ],
      },
      {
        depth2: 'APP',
        depth3: '상품\nMain_M04_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/main/product',
        status: 'end',
        create: '2023.05.19',
        log: [
          {
            date: '2023.08.29',
            text: '"지금 가입하면 최대 1만원 지원!" 영역 별도 버튼으로 변경',
          },
          {
            date: '2023.09.05',
            text: '설계서에 맞춰 소스 전면 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
          {
            date: '2023.09.25',
            text: '"제휴" 탭 배너 형식 에서 다른 상품 목록과 동일 UI로 변경',
          },
          {
            date: '2023.10.16',
            text: '"전체" 탭 삭제 및 "신용대출", "자동차" 탭 리스트 추가',
          },
        ],
      },
      {
        depth2: 'APP',
        depth3: '혜택\nMain_M05_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/main/benefit',
        status: 'end',
        create: '2023.05.19',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: 'APP',
        depth3: '혜택\nMain_M05_p001',
        depth4: '이벤트 상세\nMain_M05_l001',
        depth5: '',
        depth6: '',
        path: '/main/Main_M05_l001',
        status: 'end',
        create: '2023.09.12',
        log: [
          {
            date: '2023.09.12',
            text: '레이어 팝업에서 페이지로 변경',
          },
        ],
      },
      {
        depth2: 'APP',
        depth3: '이벤트 전체\nMain_M05_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/main/Main_M05_p002',
        status: 'end',
        create: '2023.10.13',
        log: [],
      },
      {
        depth2: 'APP',
        depth3: '보험 한눈에 보기\nMain_M07_p004',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/main/Main_M07_p004',
        status: 'end',
        create: '2023.07.21',
        log: [
          {
            date: '2023.08.30',
            text: '컨텐츠 구성 변경',
          },
          {
            date: '2023.09.05',
            text: '변경 된 디자인 가이드 반영',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
          {
            date: '2023.10.11',
            text: '유의사항 영역 추가',
          },
        ],
      },
      {
        depth2: 'APP',
        depth3: '부동산/자동차 시세\nMain_M09_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/main/Main_M09_p001',
        status: 'end',
        create: '2023.07.21',
        log: [
          {
            date: '2023.09.06',
            text: '슬라이드 기능 스크롤 방식으로 변경',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
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
        status: 'end',
        create: '2023.04.19',
        log: [
          {
            date: '2023.08.02',
            text: '로그인 후 유저명 폰트 두께 수정',
          },
          {
            date: '2023.08.03',
            text: '메뉴 구성 추가 및 변경\n로그인 버튼 누른 후 영업용 메뉴 확인 가능',
          },
          {
            date: '2023.09.14',
            text: '메뉴 아이콘 삭제',
          },
          {
            date: '2023.09.15',
            text: '검색 레이어 연결',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
          {
            date: '2023.10.17',
            text: '"공지사항" 버튼 삭제, "홈" 버튼 추가, 버튼 순서 변경 ',
          },
        ],
      },
    ],
  },
  {
    depth1: '회원관리',
    datas: [
      {
        depth2: '로그인(WEB)\nMember_M01_p001\nMember_M02_p001',
        depth3: '아이디\n공동인증서',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sign/signin',
        status: 'end',
        create: '2023.04.07',
        log: [
          {
            date: '2023.09.15',
            text: '하단 앱 연결 링크 구성 변경',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '로그인(WEB)\nMember_M01_p001\nMember_M02_p001',
        depth3: '아이디',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/ui-guide/sign-in-001',
        status: 'end',
        create: '2023.03.31',
        log: [
          {
            date: '2023.04.07',
            text: '팝업 추가\n- 비밀번호 3개월 경과 안내\n- 통합 ID 선택',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- Member_M01_l002\n- Member_M01_l001',
          },
        ],
      },
      {
        depth2: '로그인(WEB)\nMember_M01_p001\nMember_M02_p001',
        depth3: '공동인증서',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/ui-guide/sign-in-certificate-001',
        status: 'end',
        create: '2023.04.07',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- Member_M02_l001',
          },
        ],
      },
      {
        depth2: '아이디 찾기(WEB)',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/sign-find-id-001',
        status: 'end',
        create: '2023.03.31',
        log: [{ date: '2023.04.07', text: '팝업 추가\n- 아이디 확인' }],
      },
      {
        depth2: '비밀번호 찾기(WEB)',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/sign-reset-password-001',
        status: 'end',
        create: '2023.03.31',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- Member_M04_l003\n- Member_M04_l001',
          },
        ],
      },
      {
        depth2: '회원가입(WEB)',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/sign-up-001',
        status: 'end',
        create: '2023.03.31',
        log: [
          { date: '2023.04.07', text: '팝업 추가\n- 약관동의' },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- Member_M05_l001\n- Member_M05_l005\n- Member_M05_l004',
          },
        ],
      },
      {
        depth2: '회원가입(APP)\nMember_M06_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sign/signup-app',
        status: 'end',
        create: '2023.04.07',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '회원가입(APP)\nMember_M06_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/sign-up-app-001',
        status: 'end',
        create: '2023.04.07',
        log: [
          {
            date: '2023.05.26',
            text: '팝업 추가\n- 둘러보기',
          },
          {
            date: '2023.09.15',
            text: '배경색 변경\n- Member_M06_l002\n- Member_M06_l003',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- Member_M06_l001\n- Member_M06_l004\n- Member_M06_l003\n- Member_M06_l002',
          },
        ],
      },
      {
        depth2: '간편비밀번호 불러오기(APP)\nMember_M07_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sign/load-pin',
        status: 'end',
        create: '2023.04.07',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
        ],
      },
      {
        depth2: '간편비밀번호 불러오기(APP)\nMember_M07_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/sign-load-pin-001',
        status: 'end',
        create: '2023.03.31',
        log: [
          {
            date: '2023.04.07',
            text: '팝업 추가\n- 비밀번호 입력\n- 가입 완료',
          },
          {
            date: '2023.09.15',
            text: '배경색 변경\n- Member_M07_l001',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- Member_M07_l003\n- Member_M07_l001',
          },
        ],
      },
      {
        depth2: '로그인(APP)',
        depth3: '간편비밀번호',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/ui-guide/sign-in-pin-001',
        status: 'end',
        create: '2023.03.31',
        log: [
          {
            date: '2023.04.07',
            text: '팝업 추가\n- 간편비밀번호 로그인',
          },
          {
            date: '2023.08.11',
            text: 'Member_M08_l001 닫기 버튼 삭제',
          },
          {
            date: '2023.09.15',
            text: '배경색 변경\n- Member_M08_l001',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- Member_M08_l001',
          },
        ],
      },
      {
        depth2: '로그인(APP)',
        depth3: '간편비밀번호 초기화',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/ui-guide/sign-reset-pin-001',
        status: 'end',
        create: '2023.03.31',
        log: [
          {
            date: '2023.04.07',
            text: '팝업 추가\n- 간편비밀번호 초기화\n- 새 비밀번호 입력\n- 새 비밀번호 재입력',
          },
          {
            date: '2023.08.11',
            text: 'Member_M09_l001 닫기 버튼 삭제',
          },
          {
            date: '2023.09.15',
            text: '배경색 변경\n- Member_M09_l002\n- Member_M09_l003',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- Member_M09_l001\n- Member_M09_l003\n- Member_M09_l002',
          },
        ],
      },
      {
        depth2: '로그인(APP)',
        depth3: '생체 인식',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/ui-guide/sign-in-biometrics-001',
        status: 'end',
        create: '2023.04.07',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- Member_M10_l001\n- Member_M10_l004\n- Member_M10_l002',
          },
        ],
      },
    ],
  },
  {
    depth1: '개인금융',
    datas: [
      {
        depth2: '공통',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/personal-loan-001',
        status: 'end',
        create: '2023.05.12',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- PF_M01_l003',
          },
        ],
      },
      {
        depth2: 'e하나신용대출\nPF_M01_p001',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/e-hana',
        status: 'end',
        create: '2023.06.28',
        log: [
          {
            date: '2023.07.14',
            text: '상품안내 내용 수정',
          },
          {
            date: '2023.08.29',
            text: '컨텐츠 문구 수정 및 하단 로고 추가',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
          {
            date: '2023.10.18',
            text: '"진행절차" 탭 스탭 수정 및 준법심의필 추가',
          },
        ],
      },
      {
        depth2: 'e하나신용대출\nPF_M01_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/personal-loan-e-hana-001',
        status: 'end',
        create: '2023.03.31',
        log: [
          {
            date: '2023.04.07',
            text: '팝업 추가\n- e하나신용대출(연계) 안내',
          },
          {
            date: '2023.08.11',
            text: 'PF_M01_l002 소득정보 약관 삭제\nPF_M01_l006 전화번호 수정\nPF_M01_l007 버튼 문구 수정\nPF_M01_l009 전화번호 수정',
          },
          {
            date: '2023.08.24',
            text: 'PF_M01_l007 버튼 문구 수정',
          },
          {
            date: '2023.08.29',
            text: 'PF_M01_b003 컨텐츠 간격 수정\n고객센터 시간 수정\n- PF_M01_l006\n- PF_M01_l009',
          },
          {
            date: '2023.09.18',
            text: 'PF_M01_l008 상품안내 영역 문구 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- PF_M01_l009\n- PF_M01_l001\n- PF_M01_l002\n- PF_M01_l009\n- PF_M01_l006\n- PF_M01_l005\n- PF_M01_l007\n- PF_M01_l008\n- PF_M01_l004',
          },
        ],
      },
      {
        depth2: '행복아파트론\nPF_M02_p001',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/happiness-apartment',
        status: 'end',
        create: '2023.06.28',
        log: [
          {
            date: '2023.07.14',
            text: '상품안내 내용 수정',
          },
          {
            date: '2023.08.29',
            text: '하단 로고 추가',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
          {
            date: '2023.10.18',
            text: '"상환방법" 항목 타입 수정, "기타" 항목 띄어쓰기 수정, "진행절차" step2 문구 수정, 준법심의필 추가',
          },
          {
            date: '2023.10.19',
            text: '"최대한도" , "한도" 항목 문구 수정, "상품안내" 탭 항목 텍스트 크기 수정',
          },
        ],
      },
      {
        depth2: '행복아파트론\nPF_M02_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/personal-loan-happiness-apartment-001',
        status: 'end',
        create: '2023.03.31',
        log: [
          {
            date: '2023.04.07',
            text: '팝업 추가\n- 아파트 등기부등본\n- 아파트 등기부등본 확인',
          },
          {
            date: '2023.04.14',
            text: '팝업 추가\n- 아파트 검색',
          },
          {
            date: '2023.05.19',
            text: '팝업 추가\n-  아파트 정보 입력',
          },
          {
            date: '2023.08.11',
            text: 'PF_M02_l001 약관 내용 수정',
          },
          {
            date: '2023.08.21',
            text: '팝업 추가\n- PF_M02_b201 아파트 평형 선택 팝업',
          },
          {
            date: '2023.09.18',
            text: 'PF_M02_l003 검색 후 노출 내용 정리(주석 처리)',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- PF_M02_l003\n- PF_M02_l001\n- PF_M02_l007\n- PF_M02_l006\n- PF_M02_l003\n- PF_M02_l002',
          },
        ],
      },
      {
        depth2: '아파트론\nPF_M03_p001',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/apartment',
        status: 'end',
        create: '2023.06.28',
        log: [
          {
            date: '2023.07.19',
            text: '상품안내 내용 수정',
          },
          {
            date: '2023.08.29',
            text: '하단 로고 추가',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
          {
            date: '2023.10.18',
            text: '"진행절차" 스탭 수정, 준법심의필 추가',
          },
          {
            date: '2023.10.19',
            text: '"진행절차" 스탭 5단계로 수정',
          },
        ],
      },
      {
        depth2: '원큐자동차담보대출\nPF_M04_p001',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/one-q-auto',
        status: 'end',
        create: '2023.06.28',
        log: [
          {
            date: '2023.07.14',
            text: '상품안내 내용 수정',
          },
          {
            date: '2023.08.29',
            text: '하단 로고 추가',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
          {
            date: '2023.10.18',
            text: '"상품안내" 탭 기간 및 한도 항목 문구 수정, "진행절차" 탭 스탭 문구 수정, "유의사항" 탭 유의사항 순서 변경, 준법심의필 추가',
          },
        ],
      },
      {
        depth2: '원큐자동차담보대출\nPF_M04_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/personal-loan-one-q-auto-001',
        status: 'end',
        create: '2023.03.31',
        log: [
          {
            date: '2023.05.19',
            text: '팝업 추가\n-   차량 정보 입력',
          },
          {
            date: '2023.08.29',
            text: 'PF_M04_b003 컨텐츠 간격 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- PF_M04_l001\n- PF_M04_l002\n- PF_M04_l004\n- PF_M04_l003',
          },
        ],
      },
      {
        depth2: '우수고객추가대출\nPF_M05_p001',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/best-customer',
        status: 'end',
        create: '2023.06.28',
        log: [
          {
            date: '2023.07.19',
            text: '상품안내 내용 수정',
          },
          {
            date: '2023.08.29',
            text: '하단 로고 추가',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
          {
            date: '2023.10.11',
            text: '헤더 우측 아이콘 변경',
          },
          {
            date: '2023.10.18',
            text: '"진행절차" 탭 step2 문구 수정, 준법심의필 추가',
          },
        ],
      },
      {
        depth2: '우수고객추가대출\nPF_M05_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/personal-loan-best-customer-001',
        status: 'end',
        create: '2023.03.31',
        log: [
          {
            date: '2023.05.19',
            text: '팝업 추가\n- 우수고객추가대출 안내_상품안내',
          },
          {
            date: '2023.08.11',
            text: 'PF_M05_l003 컨텐츠 및 약관 내용 수정\nPF_M05_l004 컨텐츠 내용 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- PF_M05_l001\n- PF_M05_l002\n- PF_M05_l004\n- PF_M05_l003',
          },
        ],
      },
      {
        depth2: 'e임대주택론(임대보증금 담보대출)\nPF_M06_p001',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/e-rental-house',
        status: 'end',
        create: '2023.06.28',
        log: [
          {
            date: '2023.07.19',
            text: '상품안내 내용 수정',
          },
          {
            date: '2023.08.29',
            text: '하단 로고 추가',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
          {
            date: '2023.10.18',
            text: '금리/기간 항목 문구 수정, "상품안내" 탭 금리/기간 항목 문구 수정 및 내용 전체 텍스트 굵기 수정, "진행절차" 탭 step2 텍스트 굵기 수정, 준법심의필 추가',
          },
        ],
      },
      {
        depth2: '스탁론\nPF_M07_p001',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/stock',
        status: 'end',
        create: '2023.06.28',
        log: [
          {
            date: '2023.07.19',
            text: '상품안내 내용 수정',
          },
          {
            date: '2023.08.29',
            text: '하단 로고 추가',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.19',
            text: '계좌운용규칙 열람 버튼 추가',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
          {
            date: '2023.10.18',
            text: '"상품안내" 탭 이용가이드 항목 추가, "유의사항" 탭 문구 수정 및 추가',
          },
        ],
      },
      {
        depth2: '스탁론\nPF_M07_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/personal-loan-stock-001',
        status: 'end',
        create: '2023.03.31',
        log: [
          {
            date: '2023.04.07',
            text: '팝업 추가\n- 연장신청 약관동의\n- 연장신청 계약선택\n- 연장신청 상품 만기현황 확인\n- 중도상환신청 계약선택\n- 중도상환금액 조회\n- 중도상환 신청확인\n- 중도상환 조건 입력',
          },
          {
            date: '2023.08.11',
            text: 'PF_M07_l006 유의사항 문구 수정\nPF_M07_l007 전화번호 오타 수정\nPF_M07_l009 단위 수정',
          },
          {
            date: '2023.08.29',
            text: 'PF_M07_l007 텍스트 크기 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- PF_M07_l010\n- PF_M07_l009\n- PF_M07_l006\n- PF_M07_l001\n- PF_M07_l004\n- PF_M07_l002',
          },
        ],
      },
      {
        depth2: '사업자주택담보대출\nPF_M09_p001',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/business-house',
        status: 'end',
        create: '2023.06.28',
        log: [
          {
            date: '2023.07.19',
            text: '상품안내 내용 수정',
          },
          {
            date: '2023.08.29',
            text: '하단 로고 추가',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
          {
            date: '2023.10.18',
            text: '"상품안내" 탭 한도/금리/기간 항목 문구 수정, 제출서류 항목 위치 변경, "상품안내" 탭 step1,2 문구 수정, 준법심의필 추가',
          },
        ],
      },
      {
        depth2: '사업자주택담보대출\nPF_M09_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/personal-loan-business-house-001',
        status: 'end',
        create: '2023.03.31',
        log: [
          {
            date: '2023.05.12',
            text: '팝업 추가\n- 주택정보 입력',
          },
          {
            date: '2023.08.29',
            text: 'PF_M09_b002 버튼명 변경',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- PF_M09_l001\n- PF_M09_l002',
          },
        ],
      },
      {
        depth2: '내구소비재할부\nPF_M10_p001',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/consumer-durables',
        status: 'end',
        create: '2023.06.28',
        log: [
          {
            date: '2023.07.19',
            text: '상품안내 내용 수정',
          },
          {
            date: '2023.08.29',
            text: '하단 로고 추가',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
          {
            date: '2023.10.18',
            text: '금리/기간 항목 문구 수정, "상품안내" 탭 금리/기간 항목 문구 수정 및 내용 전체 텍스트 굵기 수정, "진행절차" 탭 step4 텍스트 굵기 수정, 준법심의필 추가',
          },
        ],
      },
      {
        depth2: '통합 한도조회',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/personal-loan-etc-001',
        status: 'end',
        create: '2023.03.31',
        log: [
          {
            date: '2023.04.07',
            text: '팝업 추가\n- 한도/금리 확인\n- 아파트 검색',
          },
          {
            date: '2023.05.19',
            text: '팝업 추가\n- 한도조회 입력\n- 아파트 등기부등본 확인',
          },
          {
            date: '2023.08.24',
            text: 'PF_M11_l007 컨텐츠 수정 및 아이콘 추가',
          },
          {
            date: '2023.09.18',
            text: 'PF_M11_l004 검색 후 노출 내용 정리(주석 처리)',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- PF_M11_l001\n- PF_M11_l003\n- PF_M11_l002\n- PF_M11_l007\n- PF_M11_l004\n- PF_M11_l005',
          },
        ],
      },
    ],
  },
  {
    depth1: '고객센터',
    datas: [
      {
        depth2: 'FAQ\nCustomer_M01_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/faq',
        status: 'end',
        create: '2023.04.07',
        log: [
          {
            date: '2023.09.18',
            text: '검색결과 없을 경우 문구 수정',
          },
        ],
      },
      {
        depth2: '고객상담',
        depth3: '안내\nCustomer_M02_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/counseling-info',
        status: 'end',
        create: '2023.04.07',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '고객상담',
        depth3: '상담내용 작성\nCustomer_M02_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/counseling-regist',
        status: 'end',
        create: '2023.04.07',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '고객상담',
        depth3: '완료\nCustomer_M02_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/counseling-regist-complete',
        status: 'end',
        create: '2023.04.07',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
        ],
      },
      {
        depth2: '공지사항',
        depth3: '리스트\nCustomer_M03_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/notice-list',
        status: 'end',
        create: '2023.04.07',
        log: [],
      },
      {
        depth2: '공지사항',
        depth3: '상세\nCustomer_M03_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/notice-detail',
        status: 'end',
        create: '2023.04.07',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 여백 조정',
          },
        ],
      },
      {
        depth2: '지점안내\nCustomer_M05_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/branch-list',
        status: 'end',
        create: '2023.04.07',
        log: [
          {
            date: '2023.08.11',
            text: '팝업 문구 수정',
          },
        ],
      },
      {
        depth2: '고객센터 ARS안내\nCustomer_M07_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/ars',
        status: 'end',
        create: '2023.04.07',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '전화상담신청\nETC_M01_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/reservation-counseling',
        status: 'end',
        create: '2023.04.07',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
        ],
      },
      {
        depth2: '전화상담신청\nETC_M01_p001',
        depth3: '완료\nETC_M01_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/reservation-counseling-complete',
        status: 'end',
        create: '2023.04.07',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
        ],
      },
      {
        depth2: '정책및약관\nCustomer_M08_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/clause',
        status: 'end',
        create: '2023.05.16',
        log: [],
      },
      {
        depth2: '정책및약관\nCustomer_M08_p001',
        depth3: '상세\nCustomer_M08_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/clause-detail',
        status: 'end',
        create: '2023.05.16',
        log: [],
      },
      {
        depth2: '금융소비자보호\nCustomer_M09_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/financial-consumer-protection',
        status: 'end',
        create: '2023.05.12',
        log: [],
      },
      {
        depth2: '금융소비자보호\nCustomer_M09_p001',
        depth3: '금융소비자보호헌장\nCustomer_M09_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/financial-consumer-protection-charter',
        status: 'end',
        create: '2023.05.12',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '금융소비자보호\nCustomer_M09_p001',
        depth3: '금융소비자보호조직\nCustomer_M09_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/financial-consumer-protection-organization',
        status: 'end',
        create: '2023.05.12',
        log: [],
      },
      {
        depth2: '금융소비자보호\nCustomer_M09_p001',
        depth3: '금융소비자보호체계\nCustomer_M09_p004',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/financial-consumer-protection-system',
        status: 'end',
        create: '2023.05.12',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '금융소비자보호\nCustomer_M09_p001',
        depth3: '금융소비자보호웹진\nCustomer_M09_p005',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/financial-consumer-protection-webzine',
        status: 'end',
        create: '2023.05.12',
        log: [],
      },
      {
        depth2: '금융소비자보호\nCustomer_M09_p001',
        depth3: '금융소비자보호공시\nCustomer_M09_p006',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/financial-consumer-protection-notice-list',
        status: 'end',
        create: '2023.05.12',
        log: [],
      },
      {
        depth2: '금융소비자보호\nCustomer_M09_p001',
        depth3: '금융소비자보호공시\nCustomer_M09_p006',
        depth4: '상세\nCustomer_M09_p007',
        depth5: '',
        depth6: '',
        path: '/customer/financial-consumer-protection-notice-view',
        status: 'end',
        create: '2023.05.12',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 여백 조정',
          },
        ],
      },
      {
        depth2: '금융소비자보호\nCustomer_M09_p001',
        depth3: '금리인하요구권안내\nCustomer_M09_p008',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/financial-consumer-protection-interest-rate-cut-request-info',
        status: 'end',
        create: '2023.05.12',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '금융소비자보호\nCustomer_M09_p001',
        depth3: '청약 철회권 안내\nCustomer_M09_p009',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/financial-consumer-protection-withdraw-subscription-info',
        status: 'end',
        create: '2023.05.12',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '금융소비자보호\nCustomer_M09_p001',
        depth3: '중도상환수수료 면제\nCustomer_M09_p010',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/financial-consumer-protection-exemption-early-redemption-fee',
        status: 'end',
        create: '2023.05.12',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '금융소비자보호\nCustomer_M09_p001',
        depth3: '금융소비자보호자료\nCustomer_M09_p011',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/customer/financial-consumer-protection-data',
        status: 'end',
        create: '2023.05.12',
        log: [],
      },
      {
        depth2: '금융소비자보호\nCustomer_M09_p001',
        depth3: '금융소비자보호자료\nCustomer_M09_p011',
        depth4: '상세\nCustomer_M09_p012',
        depth5: '',
        depth6: '',
        path: '/customer/financial-consumer-protection-data-detail',
        status: 'end',
        create: '2023.05.12',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 여백 조정',
          },
        ],
      },
    ],
  },
  {
    depth1: '재고금융 (영업용)',
    datas: [
      {
        depth2: '홈\nIF_M01_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/home',
        status: 'end',
        create: '2023.05.16',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '한도조회\nIF_M08_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/loan-limit-inquiry',
        status: 'end',
        create: '2023.05.16',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.18',
            text: '탭 -> 라디오 버튼으로 변경',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '한도조회\nIF_M08_p001',
        depth3: '차량선택\nIF_M08_p002\nIF_M08_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/loan-limit-inquiry-search',
        status: 'end',
        create: '2023.05.26',
        log: [
          {
            date: '2023.09.01',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '한도조회\nIF_M08_p001',
        depth3: '결과\nIF_M08_p004',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/loan-limit-inquiry-complete',
        status: 'end',
        create: '2023.05.16',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
          {
            date: '2023.09.25',
            text: '하단 버튼 구성 변경',
          },
        ],
      },
      {
        depth2: '중도상환',
        depth3: '목록\nIF_M03_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/early-list',
        status: 'end',
        create: '2023.04.21',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '중도상환',
        depth3: '조건입력\nIF_M03_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/early-form',
        status: 'end',
        create: '2023.04.21',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '중도상환',
        depth3: '시뮬레이션\nIF_M03_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/early-simulation',
        status: 'end',
        create: '2023.04.14',
        log: [
          {
            date: '2023.08.11',
            text: '단계 수정',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '중도상환',
        depth3: '즉시출금/가상계좌 입력 내용 확인\nIF_M03_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/early-confirm',
        status: 'end',
        create: '2023.04.14',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '중도상환',
        depth3: '신청완료\nIF_M03_p004',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/early-complete',
        status: 'end',
        create: '2023.04.07',
        log: [
          {
            date: '2023.08.29',
            text: '고객센터 시간 수정',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '중도상환',
        depth3: '신청실패\nIF_M03_p004',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/early-fail',
        status: 'end',
        create: '2023.04.07',
        log: [
          {
            date: '2023.08.29',
            text: '고객센터 시간 수정',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '중도상환',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/inventory-finance-early-001',
        status: 'end',
        create: '2023.04.14',
        log: [
          {
            date: '2023.04.21',
            text: '팝업 추가\n- 중도상환 입금 예약 신청_가상계좌 입금',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- IF_M03_l002\n- IF_M03_l003',
          },
          {
            date: '2023.10.06',
            text: '차량정보 및 계약상품명 항목 추가\n- IF_M03_l002\n- IF_M03_l003 ',
          },
        ],
      },
      {
        depth2: '만기연장',
        depth3: '목록\nIF_M04_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/extension-list',
        status: 'end',
        create: '2023.04.21',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '만기연장',
        depth3: '내역확인\nIF_M04_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/extension-view',
        status: 'end',
        create: '2023.04.14',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '만기연장',
        depth3: '조건입력\nIF_M04_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/extension-form',
        status: 'end',
        create: '2023.05.26',
        log: [
          {
            date: '2023.08.11',
            text: '결제방법 문구 수정',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '만기연장',
        depth3: '입력 내용 확인\nIF_M04_p004',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/extension-confirm',
        status: 'end',
        create: '2023.04.14',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.18',
            text: '원금잔액 항목 삭제',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '만기연장',
        depth3: '약정완료\nIF_M04_p005',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/extension-complete',
        status: 'end',
        create: '2023.04.07',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
        ],
      },
      {
        depth2: '만기연장',
        depth3: '약정실패\nIF_M04_p005',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/extension-fail',
        status: 'end',
        create: '2023.04.07',
        log: [
          {
            date: '2023.08.29',
            text: '고객센터 시간 수정',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '추가서류등록\nIF_M05_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/add-documents',
        status: 'end',
        create: '2023.04.07',
        log: [
          {
            date: '2023.08.11',
            text: '대출신청금액 문구 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '종료채권\nIF_M06_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/termination-bonds',
        status: 'end',
        create: '2023.04.21',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '신청현황',
        depth3: '목록\nIF_M02_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/state-list',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '신청현황',
        depth3: '정보입력\nIF_M02_p004',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/state-add-info',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.14',
            text: '대출신청금액 인풋 포커스 및 키패드 오픈시 스크롤 이동 되는 기능 제거',
          },
          {
            date: '2023.09.18',
            text: '서류등록 영역 추가 및 버튼 문구 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '대출약정\nIF_M02_p007',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/loan-agreement',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
          {
            date: '2023.10.13',
            text: '재고금융 확약서 버튼 타입 수정',
          },
        ],
      },
      {
        depth2: '대출약정\nIF_M02_p007',
        depth3: '완료\nIF_M02_p008',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/loan-agreement-complete',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '대출약정\nIF_M02_p007',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/inventory-finance-loan-agreement-001',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.05.16',
            text: '팝업 추가\n- 대출신청 확인',
          },
          {
            date: '2023.06.23',
            text: '팝업 추가\n- 서류확인',
          },
          {
            date: '2023.08.11',
            text: 'IF_M02_l001 서브타이틀 오타 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- IF_M02_l001',
          },
        ],
      },
      {
        depth2: '진행상태조회(URL)',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/inventory-finance-url-state-001',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.06.23',
            text: '팝업 추가\n- 재고금융 한도거래 확약서\n- 재고금융 건별 대출 관련 위임장',
          },
          {
            date: '2023.06.28',
            text: '팝업 추가\n- 필수서류확인',
          },
          {
            date: '2023.08.11',
            text: '- MY_M03_l022a2 버튼 문구 수정\n- AF_M98_l012 신청인 문구 수정\n- AF_M98_l013 생년월일 삭제',
          },
          {
            date: '2023.08.29',
            text: '- MY_M03_l022a2 수임인 정보 생년월일 삭제',
          },
          {
            date: '2023.09.18',
            text: '- AF_M98_l012 하단 신청인 매매상사명 노출로 변경\n- MY_M03_l022a1 계약자 정보 -> 대출자 정보 문구 수정\n- MY_M03_l022a2 계약자 정보 -> 대출자 정보 문구 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- AF_M98_l008\n- MY_M03_l022a1\n- MY_M03_l022a2\n- AF_M98_l007\n- AF_M98_l012\n- AF_M98_l013',
          },
        ],
      },
    ],
  },
  {
    depth1: 'LM 블로그 (영업용)',
    datas: [
      {
        depth2: '대출상담\nLM_M01_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lm-blog/loan-counseling',
        status: 'end',
        create: '2023.04.21',
        log: [
          {
            date: '2023.08.11',
            text: '상단 버튼 문구 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '대출상담\nLM_M01_p001',
        depth3: '계약정보\nLM_M01_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lm-blog/loan-counseling-form',
        status: 'end',
        create: '2023.04.19',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.18',
            text: '부동산 설정금액 항목 하단 안내 문구 레이아웃 변경',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
          {
            date: '2023.10.05',
            text: '사업자 정보 영역 버튼 추가 및 사업개시일자 항목 캘린더 타입으로 변경',
          },
          {
            date: '2023.10.11',
            text: '입사년도, 입사월 항목 삭제, 입사일 항목 추가 및 연소득 항목 금액 표기',
          },
        ],
      },
      {
        depth2: '대출상담\nLM_M01_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/lm-blog-loan-counseling-001',
        status: 'end',
        create: '2023.04.07',
        log: [
          {
            date: '2023.04.14',
            text: '팝업 추가\n- 아파트 검색\n- 사업자선택\n- 한도/금리 확인',
          },
          {
            date: '2023.08.29',
            text: 'LM_M01_l011 고객센터 시간 수정',
          },
          {
            date: '2023.09.18',
            text: 'PF_M02_l003 검색 후 노출 내용 정리(주석 처리)\nLM_M01_l011 전세가 항목 삭제',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- LM_M01_l010\n- LM_M01_l008',
          },
        ],
      },
      {
        depth2: '빠른상담신청 내역\nLM_M02_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lm-blog/quick-counseling',
        status: 'end',
        create: '2023.04.21',
        log: [],
      },
      {
        depth2: 'SMS 상담요청 내역\nLM_M03_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lm-blog/sms-counseling',
        status: 'end',
        create: '2023.04.21',
        log: [],
      },
      {
        depth2: 'SMS 상담요청 내역\nLM_M03_p001',
        depth3: '상세\nLM_M03_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lm-blog/sms-counseling-detail',
        status: 'end',
        create: '2023.04.19',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 여백 조정',
          },
        ],
      },
      {
        depth2: '접속통계\nLM_M04_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lm-blog/access-statistics',
        status: 'end',
        create: '2023.04.07',
        log: [],
      },
      {
        depth2: '현황조회\nLM_M05_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lm-blog/status-inquiry',
        status: 'end',
        create: '2023.04.21',
        log: [
          {
            date: '2023.08.29',
            text: '조회기간 영역 수정',
          },
          {
            date: '2023.09.18',
            text: '탭 문구 수정 및 컨텐츠 구성 수정',
          },
        ],
      },
    ],
  },
  {
    depth1: 'LM 블로그 - 개인 (영업용)',
    datas: [
      {
        depth2: '홈\nLM_M06_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lm-blog-personal/home',
        status: 'end',
        create: '2023.04.21',
        log: [],
      },
      {
        depth2: '전체메뉴\nLM_M06_p002',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lm-blog-personal/menu',
        status: 'end',
        create: '2023.04.07',
        log: [],
      },
      {
        depth2: '빠른 대출 상담\nLM_M06_p004',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lm-blog-personal/quick-counseling',
        status: 'end',
        create: '2023.04.07',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: 'SMS 상담\nLM_M06_p005',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lm-blog-personal/sms-counseling',
        status: 'end',
        create: '2023.04.07',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '찾아오시는 길\nLM_M06_p006',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lm-blog-personal/map',
        status: 'end',
        create: '2023.04.07',
        log: [
          {
            date: '2023.10.10',
            text: '지도 영역 고정 높이로 수정',
          },
        ],
      },
    ],
  },
  {
    depth1: '중고차 (영업용)',
    datas: [
      {
        depth2: '팝업',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/sales-used-car-001',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.05.10',
            text: '팝업 추가\n- 매매상사 약정 현황 조회\n- 차량정보 팝업\n- 수수료차감 팝업\n- 매매상사(차량 소유자)계좌 조회\n- 매매상사(차량 소유자)계좌 등록',
          },
          {
            date: '2023.06.13',
            text: '팝업 추가\n- 제휴 협약 동의 팝업',
          },
          {
            date: '2023.06.23',
            text: '팝업 추가\n- 실천 서약서 동의 팝업',
          },
          {
            date: '2023.07.28',
            text: '버튼 색상 수정\n- UC_M03_l001\n- UC_M03_l002',
          },
          {
            date: '2023.08.11',
            text: 'UC_M08_l001 중복 내용 삭제 및 제5조 내용 추가 및 따옴표 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- UC_M08_l001\n- UC_M08_l002\n- UC_M03_l004',
          },
          {
            date: '2023.10.04',
            text: 'UC_M06_l001 버튼 컬러 수정 및 차량 로고 삭제',
          },
          {
            date: '2023.10.13',
            text: 'UC_M03_l002 입력필드 버튼 수정 및 금액 삭제 버튼 활성화, 금리/수수료 항목 테이블로 수정\n UC_M06_l001 차량정보 영역 연식 추가 및 구조 변경',
          },
        ],
      },
      {
        depth2: '홈\nUC_M01_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sales-used-car/home',
        status: 'end',
        create: '2023.05.12',
        log: [
          {
            date: '2023.08.11',
            text: '명함 노출 삭제',
          },
          {
            date: '2023.08.24',
            text: '약정 가능 건 체크박스 추가',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.10.04',
            text: '조회조건 영역 케이스 추가, 계약중 버튼 케이스 추가, 단계 수정 및 삭제',
          },
          {
            date: '2023.10.19',
            text: '하단에 top버튼 추가',
          },
        ],
      },
      {
        depth2: '신규상담\nUC_M02_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sales-used-car/new-counseling',
        status: 'end',
        create: '2023.05.10',
        log: [
          {
            date: '2023.07.28',
            text: '카운팅 추가',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 여백 조정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '상담등록\nUC_M03_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sales-used-car/counseling',
        status: 'end',
        create: '2023.05.10',
        log: [
          {
            date: '2023.07.31',
            text: '외국인/개인사업자 케이스 추가',
          },
          {
            date: '2023.09.05',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.10.04',
            text: '대출신청금액 및 차량구입금액 안내문구 타입 변경, 금액 표기, 차량 로고 삭제, 대출기간 옵션 추가',
          },
          {
            date: '2023.10.13',
            text: '차량정보 영역 전체 수정, 차량구입 및 대출신청 금액 항목 버튼 수정, 금액 삭제 버튼 활성화',
          },
          {
            date: '2023.10.19',
            text: '차량정보 영역 제조사 로고 추가',
          },
        ],
      },
      {
        depth2: '상담등록\nUC_M03_p001',
        depth3: '완료\nUC_M03_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sales-used-car/counseling-complete',
        status: 'end',
        create: '2023.05.10',
        log: [
          {
            date: '2023.07.26',
            text: '차량 이미지 삭제',
          },
          {
            date: '2023.07.28',
            text: '버튼 색상 수정',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '상담등록\nUC_M03_p001',
        depth3: '자동승인\nUC_M03_p004',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sales-used-car/counseling-auto-complete',
        status: 'end',
        create: '2023.05.10',
        log: [
          {
            date: '2023.07.26',
            text: '차량 이미지 삭제',
          },
          {
            date: '2023.07.28',
            text: '버튼 색상 수정',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
          {
            date: '2023.10.04',
            text: '서브타이틀 컬러 및 굵기 수정',
          },
        ],
      },
      {
        depth2: '상담등록\nUC_M03_p001',
        depth3: '실패\nUC_M03_p002',
        depth4: '기본',
        depth5: '',
        depth6: '',
        path: '/sales-used-car/counseling-fail-001',
        status: 'end',
        create: '2023.05.10',
        log: [
          {
            date: '2023.07.28',
            text: '버튼 색상 수정',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
        ],
      },
      {
        depth2: '상담등록\nUC_M03_p001',
        depth3: '실패\nUC_M03_p002',
        depth4: '고객정보 확인 불가',
        depth5: '',
        depth6: '',
        path: '/sales-used-car/counseling-fail-002',
        status: 'end',
        create: '2023.05.10',
        log: [
          {
            date: '2023.07.28',
            text: '버튼 색상 수정',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
        ],
      },
      {
        depth2: '상담등록\nUC_M03_p001',
        depth3: '실패\nUC_M03_p002',
        depth4: '대출신청금액이 큰 경우',
        depth5: '',
        depth6: '',
        path: '/sales-used-car/counseling-fail-003',
        status: 'end',
        create: '2023.05.10',
        log: [
          {
            date: '2023.07.28',
            text: '버튼 색상 수정',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
        ],
      },
      {
        depth2: '상담등록\nUC_M03_p001',
        depth3: '실패\nUC_M03_p002',
        depth4: '사업자정보가 없는 경우',
        depth5: '',
        depth6: '',
        path: '/sales-used-car/counseling-fail-004',
        status: 'end',
        create: '2023.05.10',
        log: [
          {
            date: '2023.07.28',
            text: '버튼 색상 수정',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
        ],
      },
      {
        depth2: '상담등록\nUC_M03_p001',
        depth3: '실패\nUC_M03_p002',
        depth4: '파일 업로드 실패',
        depth5: '',
        depth6: '',
        path: '/sales-used-car/counseling-fail-005',
        status: 'end',
        create: '2023.05.10',
        log: [
          {
            date: '2023.07.28',
            text: '버튼 색상 수정',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
        ],
      },
      {
        depth2: '상담등록\nUC_M03_p001',
        depth3: '불가능\nUC_M03_p005',
        depth4: '기본',
        depth5: '',
        depth6: '',
        path: '/sales-used-car/counseling-impossible-001',
        status: 'end',
        create: '2023.05.10',
        log: [
          {
            date: '2023.07.26',
            text: '차량 이미지 삭제',
          },
          {
            date: '2023.07.28',
            text: '버튼 색상 수정',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '상담등록\nUC_M03_p001',
        depth3: '불가능\nUC_M03_p005',
        depth4: '일반심사\n일반심사A\n정밀심사\n예외심사',
        depth5: '',
        depth6: '',
        path: '/sales-used-car/counseling-impossible-002',
        status: 'end',
        create: '2023.05.10',
        log: [
          {
            date: '2023.07.26',
            text: '차량 이미지 삭제',
          },
          {
            date: '2023.07.28',
            text: '버튼 색상 수정',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '상담변경\nUC_M04_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sales-used-car/counseling-edit',
        status: 'end',
        create: '2023.05.10',
        log: [
          {
            date: '2023.07.28',
            text: '버튼 색상 수정',
          },
          {
            date: '2023.09.05',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.10.04',
            text: '대출신청금액 및 차량구입금액 안내문구 타입 변경, 금액 표기, 차량 로고 삭제 ',
          },
        ],
      },
      {
        depth2: '매매상사 온라인약정',
        depth3: '본인확인\nUC_M08_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sales-used-car/affiliate',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.07.28',
            text: '버튼 색상 수정',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '매매상사 온라인약정',
        depth3: '정보 확인\nUC_M08_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sales-used-car/affiliate-confirm',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.07.28',
            text: '버튼 색상 수정',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '매매상사 온라인약정',
        depth3: '계좌 정보 선택\nUC_M08_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sales-used-car/affiliate-form',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.07.28',
            text: '버튼 색상 수정',
          },
          {
            date: '2023.07.31',
            text: '타이틀 수정 및 컨텐츠 추가',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '매매상사 온라인약정',
        depth3: '완료\nUC_M08_p004',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sales-used-car/affiliate-complete',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.07.28',
            text: '버튼 색상 수정',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
        ],
      },
    ],
  },
  {
    depth1: '신차 (영업용)',
    datas: [
      {
        depth2: '팝업',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/sales-new-car-001',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.05.12',
            text: '팝업 추가\n- 차량번호 등록\n- 판매점 조회\n- 판매사원 조회',
          },
          {
            date: '2023.07.28',
            text: '버튼 색상 수정\n- NC_M01_l002',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- NC_M06_b001',
          },
        ],
      },
      {
        depth2: '홈\nNC_M01_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sales-new-car/home',
        status: 'end',
        create: '2023.05.10',
        log: [
          {
            date: '2023.07.26',
            text: '팝업 추가\n- 직원 정보 영역 삭제',
          },
          {
            date: '2023.07.28',
            text: '버튼 및 문구 색상 수정',
          },
          {
            date: '2023.08.10',
            text: '신용동의 단계 금액 노출 삭제',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.18',
            text: '금액 단위 수정',
          },
          {
            date: '2023.09.21',
            text: '상담변경 버튼 타입 수정',
          },
          {
            date: '2023.09.27',
            text: '상호명 및 버튼 케이스 추가, 항목 순서 변경, 자동승인 케이스 삭제',
          },
        ],
      },
      {
        depth2: '신규상담\nNC_M02_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sales-new-car/new-counseling',
        status: 'end',
        create: '2023.05.12',
        log: [
          {
            date: '2023.08.02',
            text: '컨텐츠 구성 변경',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 여백 조정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '상담등록\nNC_M03_p002',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sales-new-car/counseling',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.07.28',
            text: '버튼 및 문구 색상 수정',
          },
          {
            date: '2023.08.10',
            text: '컨텐츠 수정 및 케이스 추가',
          },
          {
            date: '2023.08.29',
            text: '사업자번호 영역 버튼 문구 수정',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.18',
            text: '대출기간 케이스 추가',
          },
          {
            date: '2023.09.27',
            text: '서류등록 및 대표자 휴대폰번호 항목 삭제',
          },
          {
            date: '2023.10.12',
            text: '세부모델 및 트림 선택 영역 아코디언으로 변경',
          },
        ],
      },
      {
        depth2: '상담등록\nNC_M03_p002',
        depth3: '완료\nNC_M03_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sales-new-car/counseling-complete',
        status: 'end',
        create: '2023.05.12',
        log: [
          {
            date: '2023.07.28',
            text: '버튼 색상 수정',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '상담등록\nNC_M03_p002',
        depth3: '대출불가\nNC_M03_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sales-new-car/counseling-fail',
        status: 'end',
        create: '2023.05.12',
        log: [
          {
            date: '2023.07.28',
            text: '버튼 색상 수정',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '계약등록\nNC_M04_p002',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sales-new-car/add-contract',
        status: 'end',
        create: '2023.05.12',
        log: [
          {
            date: '2023.07.28',
            text: '버튼 색상 수정',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.27',
            text: '개인사업자 및 법인사업자 항목 순서 변경',
          },
        ],
      },
      {
        depth2: '계약등록\nNC_M04_p002',
        depth3: '완료\nNC_M04_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sales-new-car/add-contract-complete',
        status: 'end',
        create: '2023.05.12',
        log: [
          {
            date: '2023.07.28',
            text: '버튼 색상 수정',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '차량/저당 미등록 채권 안내\nNC_M08_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/sales-new-car/unregistered-bonds',
        status: 'end',
        create: '2023.05.12',
        log: [
          {
            date: '2023.08.10',
            text: '컨텐츠 간격 수정',
          },
        ],
      },
    ],
  },
  {
    depth1: '재고금융실사 (영업용)',
    datas: [
      {
        depth2: 'IF_M11_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance-check/home',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.08.11',
            text: '버튼 문구 수정',
          },
          {
            date: '2023.10.06',
            text: '실사필요 케이스 추가',
          },
        ],
      },
      {
        depth2: '팝업',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/inventory-finance-check-001',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.08.21',
            text: '- IF_M11_l002 placeholder 보완',
          },
        ],
      },
    ],
  },
  {
    depth1: '리스/렌트 견적시스템 (영업용)',
    datas: [
      {
        depth2: '공통',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/lease-rent-estimation-system-002',
        status: 'end',
        create: '2023.06.16',
        log: [
          {
            date: '2023.06.23',
            text: '팝업 추가\n- 견적서 진행사항 안내',
          },
          {
            date: '2023.07.21',
            text: 'LR_M00_l008 AS-IS 샘플 적용\nLR_M00_l003 AS-IS 샘플 적용',
          },
          {
            date: '2023.07.24',
            text: 'LR_M03_l001 내용 수정\nLR_M05_b007 팝업 추가',
          },
          {
            date: '2023.08.02',
            text: '팝업 추가\n- 가격표 보기 팝업\n- 카탈로그 보기 팝업',
          },
          {
            date: '2023.08.03',
            text: '- LR_M00_l003 연락처 ON/OFF 추가\n- LR_M00_l008 연락처 ON/OFF 추가',
          },
          {
            date: '2023.08.11',
            text: '- LR_M00_l017 슬라이드에서 처음/마지막일때 이전/다음 버튼 미노출 기능 추가',
          },
          {
            date: '2023.08.25',
            text: '- LR_M00_l002 AG가 발송한 case 추가\n- My_M03_l004a1 팝업 추가',
          },
          {
            date: '2023.08.29',
            text: 'LR_M00_l010 법인사업자 탭 내 항목 추가 및 수정',
          },
          {
            date: '2023.09.07',
            text: 'LR_M00_l010 법인사업자 탭 내 대표 취임일자 항목 추가',
          },
          {
            date: '2023.09.14',
            text: 'LR_M00_l010 버튼 사이즈 수정 및 관계 영역 항목 추가',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- LR_M00_l016\n- LR_M00_l010\n- LR_M00_l002\n- My_M03_l004a1',
          },
          {
            date: '2023.10.17',
            text: 'LR_M00_l010 "조회", "초기화" 버튼 너비 및 텍스트 크기 수정',
          },
        ],
      },
      {
        depth2: '공통',
        depth3: '견적서 보기\nLR_M00_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lease-rent-estimation-system/view-estimation',
        status: 'end',
        create: '2023.06.16',
        log: [
          {
            date: '2023.07.21',
            text: 'LR_M00_p003 AS-IS 샘플 적용',
          },
          {
            date: '2023.08.03',
            text: '연락처 ON/OFF 추가',
          },
        ],
      },
      {
        depth2: '홈 (저장,심사)\nLR_M04_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lease-rent-estimation-system/save-review',
        status: 'end',
        create: '2023.06.02',
        log: [
          {
            date: '2023.08.10',
            text: '컨텐츠 수정 및 케이스 추가',
          },
          {
            date: '2023.08.11',
            text: '소수점 자릿수 수정 및 품의확정 케이스 추가',
          },
          {
            date: '2023.08.25',
            text: '버튼 가이드 추가',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.06',
            text: '고객구분 뱃지 추가',
          },
          {
            date: '2023.09.12',
            text: '목록 구성 변경',
          },
          {
            date: '2023.09.14',
            text: '간격 수정',
          },
          {
            date: '2023.09.18',
            text: '목록 내 버튼 케이스 정리',
          },
          {
            date: '2023.09.19',
            text: '견적 상태 이후 리스트 월 납입금 항목 추가\n수수료 케이스 추가\n메모 항목 길어질 경우 말줄임 처리',
          },
        ],
      },
      {
        depth2: '홈 (저장,심사)\nLR_M04_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/lease-rent-estimation-system-001',
        status: 'end',
        create: '2023.06.02',
        log: [
          {
            date: '2023.08.08',
            text: 'LR_M04_b001 폼 추가 및 버튼 문구 수정',
          },
          {
            date: '2023.08.29',
            text: 'LR_M04_b001\n"최초등록일" 미래 날짜 선택 불가 적용\n"사용본거지" 디폴트 값 적용',
          },
          {
            date: '2023.09.07',
            text: 'LR_M04_b003 팝업 추가',
          },
          {
            date: '2023.09.18',
            text: 'LR_M04_l001 필수 입력 표시 추가',
          },
          {
            date: '2023.09.19',
            text: 'LR_M04_l001 인도 요청일 주말 선택시 얼럿 처리 예시 소스 추가',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- LR_M04_b001\n- LR_M04_l001',
          },
        ],
      },
      {
        depth2: '홈 (저장,심사)\nLR_M04_p001',
        depth3: '품의등록(렌트)\nLR_M04_p004',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lease-rent-estimation-system/save-review-approval-request-rent',
        status: 'end',
        create: '2023.06.02',
        log: [
          {
            date: '2023.08.10',
            text: '국산/수입차 케이스 추가',
          },
          {
            date: '2023.08.11',
            text: '서류등록 타이틀 문구 수정',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.18',
            text: '진행일정, 상품명 항목 개인일때만 노출로 변경\n서류등록 영역 타이틀 문구 수정',
          },
        ],
      },
      {
        depth2: '홈 (저장,심사)\nLR_M04_p001',
        depth3: '품의등록(리스, 할부)\nLR_M04_p005',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lease-rent-estimation-system/save-review-approval-request-lease',
        status: 'end',
        create: '2023.06.02',
        log: [
          {
            date: '2023.08.11',
            text: '서류등록 타이틀 문구 수정',
          },
          {
            date: '2023.08.21',
            text: '국산, 수입, 할부 등 케이스 정리 및 추가',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.01',
            text: '"차량대금 송금계좌" 수입할부_오토할부 케이스 추가',
          },
          {
            date: '2023.09.18',
            text: '상품명 항목 개인일때만 노출로 변경',
          },
          {
            date: '2023.10.05',
            text: '계약자 정보 영역 뱃지 추가',
          },
        ],
      },
      {
        depth2: '신차',
        depth3: '렌트',
        depth4: '견적\nLR_M02_p001',
        depth5: '',
        depth6: '',
        path: '/lease-rent-estimation-system/rent',
        status: 'end',
        create: '2023.06.08',
        log: [
          {
            date: '2023.07.21',
            text: 'AS-IS 샘플 적용',
          },
          {
            date: '2023.07.28',
            text: '오타 수정',
          },
          {
            date: '2023.08.03',
            text: '모델, 트림 항목에 "재고한정" 케이스 추가\n브랜드 항목에 기타 옵션 추가\n연락처 ON/OFF 추가',
          },
          {
            date: '2023.08.14',
            text: '하단 버튼 케이스 추가\n수수료 항목 수정',
          },
          {
            date: '2023.08.16',
            text: '보험 영역 수정\n약정주행거리 영역 수정',
          },
          {
            date: '2023.08.18',
            text: '상품 선택 -> 견적 선택 문구 수정',
          },
          {
            date: '2023.08.21',
            text: '수수료 표기 방법 변경\n일부 버튼 사이즈 변경',
          },
          {
            date: '2023.08.24',
            text: '제휴사 항목 추가',
          },
          {
            date: '2023.08.25',
            text: '계산중 로딩 아이콘 사이즈 변경',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.08.31',
            text: '용품 항목에 안내 문구 추가',
          },
          {
            date: '2023.09.18',
            text: '외장 항목에 안내문구 케이스 추가\n도착지 항목 내 버튼 순서 변경\n임직원 한정 운전특약 항목 법인일때 케이스 추가\n옵션 선택 항목에 선택된 옵션 조합 불가 케이스 추가 및 폰트 사이즈 조정',
          },
        ],
      },
      {
        depth2: '신차',
        depth3: '리스',
        depth4: '견적\nLR_M02_p002',
        depth5: '',
        depth6: '',
        path: '/lease-rent-estimation-system/lease',
        status: 'end',
        create: '2023.06.13',
        log: [
          {
            date: '2023.07.21',
            text: 'AS-IS 샘플 적용',
          },
          {
            date: '2023.08.03',
            text: '모델, 트림 항목에 "재고한정" 케이스 추가\n브랜드 항목에 기타 옵션 추가\n연락처 ON/OFF 추가',
          },
          {
            date: '2023.08.10',
            text: '상단에 [제원, 가격표, 카탈로그] 버튼 추가',
          },
          {
            date: '2023.08.14',
            text: '하단 버튼 케이스 추가\n용품지원 항목 삭제\n수수료 항목 수정',
          },
          {
            date: '2023.08.16',
            text: '약정주행거리 영역 수정',
          },
          {
            date: '2023.08.18',
            text: '상품 선택 -> 견적 선택 문구 수정',
          },
          {
            date: '2023.08.21',
            text: '수수료 표기 방법 변경\n일부 버튼 사이즈 변경\n"월 납입금" 표기 방법 변경',
          },
          {
            date: '2023.08.25',
            text: '계산중 로딩 아이콘 사이즈 변경',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.08.31',
            text: '할인/탁송료 영역 케이스 추가',
          },
          {
            date: '2023.09.06',
            text: '할인/탁송료 특판출고 라디오 버튼 문구 수정\n보조금 항목 아코디언으로 변경',
          },
          {
            date: '2023.09.08',
            text: '추가 수수료 항목 라디오 버튼 케이스 추가',
          },
          {
            date: '2023.09.18',
            text: '외장 항목에 안내문구 케이스 추가 및 불필요 문구 삭제\n도착지 항목 내 버튼 순서 변경\n옵션 선택 항목에 선택된 옵션 조합 불가 케이스 추가 및 폰트 사이즈 조정\n공채지역 항목 버튼 구성 변경\n기타비용 항목 라디오 버튼 추가',
          },
          {
            date: '2023.09.19',
            text: '선수금 항목 label 제거 및 비율 출력란 추가',
          },
        ],
      },
      {
        depth2: '신차',
        depth3: '할부',
        depth4: '견적\nLR_M02_p003',
        depth5: '',
        depth6: '',
        path: '/lease-rent-estimation-system/installment',
        status: 'end',
        create: '2023.06.23',
        log: [
          {
            date: '2023.07.21',
            text: 'AS-IS 샘플 적용',
          },
          {
            date: '2023.08.03',
            text: '모델, 트림 항목에 "재고한정" 케이스 추가\n브랜드 항목에 기타 옵션 추가\n연락처 ON/OFF 추가',
          },
          {
            date: '2023.08.10',
            text: '상단에 [제원, 가격표, 카탈로그] 버튼 추가',
          },
          {
            date: '2023.08.14',
            text: '하단 버튼 케이스 추가\n용품지원 항목 삭제\n수수료 항목 수정',
          },
          {
            date: '2023.08.16',
            text: '등록명의 영역 체크박스 스타일 변경',
          },
          {
            date: '2023.08.18',
            text: '상품 선택 -> 견적 선택 문구 수정',
          },
          {
            date: '2023.08.21',
            text: '수수료 표기 방법 변경\n일부 버튼 사이즈 변경\n"월 납입금" 표기 방법 변경',
          },
          {
            date: '2023.08.25',
            text: '계산중 로딩 아이콘 사이즈 변경',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.08.31',
            text: '수수료 항목 구성 변경',
          },
          {
            date: '2023.09.18',
            text: '외장 항목에 안내문구 케이스 추가 및 불필요 문구 삭제\n옵션 선택 항목에 선택된 옵션 조합 불가 케이스 추가 및 html 구조 수정\n공채지역 항목 버튼 구성 변경',
          },
        ],
      },
      {
        depth2: '신차',
        depth3: '시승차',
        depth4: '견적\nLR_M02_p004',
        depth5: '',
        depth6: '',
        path: '/lease-rent-estimation-system/test-drive-car',
        status: 'end',
        create: '2023.06.23',
        log: [
          {
            date: '2023.07.21',
            text: 'AS-IS 샘플 적용',
          },
          {
            date: '2023.08.03',
            text: '모델, 트림 항목에 "재고한정" 케이스 추가\n브랜드 항목에 기타 옵션 추가\n연락처 ON/OFF 추가',
          },
          {
            date: '2023.08.10',
            text: '상단에 [제원, 가격표, 카탈로그] 버튼 추가',
          },
          {
            date: '2023.08.14',
            text: '하단 버튼 케이스 추가\n용품지원 항목 삭제\n수수료 항목 수정',
          },
          {
            date: '2023.08.16',
            text: '약정주행거리 영역 수정',
          },
          {
            date: '2023.08.18',
            text: '상품 선택 -> 견적 선택 문구 수정',
          },
          {
            date: '2023.08.21',
            text: '수수료 표기 방법 변경\n일부 버튼 사이즈 변경\n"월 납입금" 표기 방법 변경',
          },
          {
            date: '2023.08.25',
            text: '계산중 로딩 아이콘 사이즈 변경',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.18',
            text: '외장 항목에 안내문구 케이스 추가\n옵션 선택 항목에 선택된 옵션 조합 불가 케이스 추가 및 폰트 사이즈 조정',
          },
          {
            date: '2023.09.19',
            text: '선수금 항목 label 제거 및 비율 출력란 추가',
          },
        ],
      },
      {
        depth2: '신차',
        depth3: '선구매',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/ui-guide/lease-rent-estimation-system-003',
        status: 'end',
        create: '2023.06.21',
        log: [],
      },
      {
        depth2: '신차',
        depth3: '선구매',
        depth4: '견적\nLR_M02_p008',
        depth5: '',
        depth6: '',
        path: '/lease-rent-estimation-system/pre-purchase',
        status: 'end',
        create: '2023.06.21',
        log: [
          {
            date: '2023.07.21',
            text: 'AS-IS 샘플 적용',
          },
          {
            date: '2023.07.28',
            text: '오타 수정',
          },
          {
            date: '2023.08.03',
            text: '모델, 트림 항목에 "재고한정" 케이스 추가\n브랜드 항목에 기타 옵션 추가\n연락처 ON/OFF 추가',
          },
          {
            date: '2023.08.14',
            text: '하단 버튼 케이스 추가\n수수료 항목 수정',
          },
          {
            date: '2023.08.16',
            text: '보험 영역 수정\n약정주행거리 영역 수정',
          },
          {
            date: '2023.08.18',
            text: '상품 선택 -> 견적 선택 문구 수정',
          },
          {
            date: '2023.08.21',
            text: '수수료 표기 방법 변경\n일부 버튼 사이즈 변경',
          },
          {
            date: '2023.08.25',
            text: '계산중 로딩 아이콘 사이즈 변경',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.08.31',
            text: '용품 항목에 안내 문구 추가',
          },
          {
            date: '2023.09.18',
            text: '외장 항목에 안내문구 케이스 추가\n도착지 항목 내 버튼 순서 변경\n옵션 선택 항목에 선택된 옵션 조합 불가 케이스 추가 및 폰트 사이즈 조정',
          },
        ],
      },
      {
        depth2: '신차',
        depth3: '선구매',
        depth4: '차량 선택\nLR_M02_p005',
        depth5: '',
        depth6: '',
        path: '/lease-rent-estimation-system/pre-purchase-choose-car',
        status: 'end',
        create: '2023.06.21',
        log: [
          {
            date: '2023.09.18',
            text: '제조사 엠블럼 추가',
          },
        ],
      },
      {
        depth2: '신차',
        depth3: '선구매',
        depth4: '차량 등록\nLR_M02_p006',
        depth5: '',
        depth6: '',
        path: '/lease-rent-estimation-system/pre-purchase-regist-car',
        status: 'end',
        create: '2023.06.21',
        log: [
          {
            date: '2023.08.21',
            text: '일부 버튼 사이즈 변경',
          },
          {
            date: '2023.09.18',
            text: '외장 항목에 안내문구 케이스 추가\n옵션 선택 항목에 선택된 옵션 조합 불가 케이스 추가 및 폰트 사이즈 조정',
          },
        ],
      },
      {
        depth2: '신차',
        depth3: '선구매',
        depth4: '차량 상세\nLR_M02_p007',
        depth5: '',
        depth6: '',
        path: '/lease-rent-estimation-system/pre-purchase-car-detail',
        status: 'end',
        create: '2023.06.21',
        log: [],
      },
      {
        depth2: '중고차',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/lease-rent-estimation-system-004',
        status: 'end',
        create: '2023.06.21',
        log: [],
      },
      {
        depth2: '중고차',
        depth3: '리스 견적\nLR_M03_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lease-rent-estimation-system/used-lease',
        status: 'end',
        create: '2023.06.21',
        log: [
          {
            date: '2023.07.21',
            text: 'AS-IS 샘플 적용',
          },
          {
            date: '2023.08.03',
            text: '연락처 ON/OFF 추가',
          },
          {
            date: '2023.08.14',
            text: '하단 버튼 케이스 추가\n용품지원 항목 삭제\n수수료 항목 수정\n차량 선택 영역 구성 변경',
          },
          {
            date: '2023.08.16',
            text: '약정주행거리 영역 수정',
          },
          {
            date: '2023.08.18',
            text: '상품 선택 -> 견적 선택 문구 수정',
          },
          {
            date: '2023.08.21',
            text: '수수료 표기 방법 변경\n일부 버튼 사이즈 변경\n"월 납입금" 표기 방법 변경\n차량 선택 영역 케이스 수정\n판매가격 영역 배경 제거',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.08.25',
            text: '계산중 로딩 아이콘 사이즈 변경',
          },
          {
            date: '2023.09.07',
            text: '차량선택 항목 케이스 수정',
          },
          {
            date: '2023.09.19',
            text: '선수금 항목 label 제거 및 비율 출력란 추가',
          },
        ],
      },
      {
        depth2: '서비스',
        depth3: '내정보\nLR_M05_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lease-rent-estimation-system/my-info',
        status: 'end',
        create: '2023.06.23',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 여백 조정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '서비스',
        depth3: '공지사항(즉시출고)',
        depth4: '목록\nLR_M05_p002',
        depth5: '',
        depth6: '',
        path: '/lease-rent-estimation-system/notice-list',
        status: 'end',
        create: '2023.06.23',
        log: [
          {
            date: '2023.09.18',
            text: '건수 출력 영역 간격 수정',
          },
        ],
      },
      {
        depth2: '서비스',
        depth3: '공지사항(즉시출고)',
        depth4: '상세\nLR_M05_p003',
        depth5: '',
        depth6: '',
        path: '/lease-rent-estimation-system/notice-detail',
        status: 'end',
        create: '2023.06.23',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 여백 조정',
          },
        ],
      },
      {
        depth2: '서비스',
        depth3: '공지사항(즉시출고)',
        depth4: '글쓰기\nLR_M05_p004',
        depth5: '',
        depth6: '',
        path: '/lease-rent-estimation-system/notice-edit',
        status: 'end',
        create: '2023.06.30',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
        ],
      },
      {
        depth2: '서비스',
        depth3: '이용약관\nLR_M05_p005',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lease-rent-estimation-system/terms-of-use',
        status: 'end',
        create: '2023.07.05',
        log: [],
      },
      {
        depth2: '서비스',
        depth3: '관리자',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/ui-guide/lease-rent-estimation-system-005',
        status: 'end',
        create: '2023.07.24',
        log: [],
      },
      {
        depth2: '서비스',
        depth3: '관리자',
        depth4: '이용현황\nLR_M05_p006',
        depth5: '',
        depth6: '',
        path: '/lease-rent-estimation-system/admin-status',
        status: 'end',
        create: '2023.06.23',
        log: [
          {
            date: '2023.08.10',
            text: '컨텐츠 구성 수정',
          },
          {
            date: '2023.09.18',
            text: '조회 조건 항목 구성 수정',
          },
        ],
      },
      {
        depth2: '서비스',
        depth3: '관리자',
        depth4: '홈 설정\nLR_M05_p007',
        depth5: '',
        depth6: '',
        path: '/lease-rent-estimation-system/admin-setting-home',
        status: 'end',
        create: '2023.06.23',
        log: [],
      },
      {
        depth2: '서비스',
        depth3: '관리자',
        depth4: '관리지정\nLR_M05_p009',
        depth5: '',
        depth6: '',
        path: '/lease-rent-estimation-system/admin-setting-role',
        status: 'end',
        create: '2023.06.23',
        log: [
          {
            date: '2023.08.17',
            text: '버튼 추가 및 컨텐츠 구성 수정',
          },
        ],
      },
      {
        depth2: '서비스',
        depth3: '관리자',
        depth4: '기본 설정\nLR_M05_p010',
        depth5: '',
        depth6: '',
        path: '/lease-rent-estimation-system/admin-setting-default',
        status: 'end',
        create: '2023.06.23',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.05',
            text: '리스특판 체크박스 추가',
          },
          {
            date: '2023.09.22',
            text: '단종된 케이스 추가',
          },
        ],
      },
      {
        depth2: '서비스',
        depth3: '관리자',
        depth4: '자동차 DB 전송\nLR_M05_p013',
        depth5: '',
        depth6: '',
        path: '/lease-rent-estimation-system/LR_M05_p013',
        status: 'end',
        create: '2023.07.24',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '서비스',
        depth3: '관리자',
        depth4: '팝업/보조금 관리\nLR_M05_p014',
        depth5: '',
        depth6: '',
        path: '/lease-rent-estimation-system/LR_M05_p014',
        status: 'end',
        create: '2023.07.24',
        log: [
          {
            date: '2023.07.28',
            text: '팝업 관리 영역 화면별 내용 추가',
          },
        ],
      },
      {
        depth2: '서비스',
        depth3: '관리자',
        depth4: '팝업/보조금 관리 수정\nLR_M05_p015',
        depth5: '',
        depth6: '',
        path: '/lease-rent-estimation-system/LR_M05_p015',
        status: 'end',
        create: '2023.07.24',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
        ],
      },
    ],
  },
  {
    depth1: '설비리스 (영업용)',
    datas: [
      {
        depth2: '팝업',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/equipment-lease-001',
        status: 'end',
        create: '2023.05.12',
        log: [
          {
            date: '2023.06.23',
            text: '팝업 추가\n-  견적보기 팝업\n-  신용정보조회동의\n-  사전동의 완료',
          },
          {
            date: '2023.07.07',
            text: '팝업 추가\n- 물건점검 SMS 정보 입력 팝업\n- 본인확인(URL진입)\n- 리스물건 점검보고서\n- 물건점검 완료',
          },
          {
            date: '2023.07.19',
            text: '- EL_M02_l007 일부 폼 포멧 변경\n- EL_M02_l008 문구 수정\n- EL_M02_l010 문구 수정',
          },
          {
            date: '2023.08.11',
            text: 'EL_M02_l009 줄바꿈 수정',
          },
          {
            date: '2023.08.29',
            text: '- EL_M01_l001\n상단 정보(월납입액, 대출원금, 이자합계, 총상환금액) 영역 삭제\n- EL_M01_l005\n상단 정보(월납입액, 대출원금, 이자합계, 총상환금액) 영역 삭제',
          },
          {
            date: '2023.08.31',
            text: '컨텐츠 구성 변경\n- EL_M01_l004\n- EL_M02_l004 ',
          },
          {
            date: '2023.09.15',
            text: 'EL_M02_l009 리스물건 점검 확인사항 영역 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- EL_M02_l007\n- EL_M02_l008\n- EL_M02_l010\n- EL_M01_l002\n- EL_M01_l004\n- EL_M02_l005\n- EL_M02_l002\n- EL_M02_l004\n- EL_M02_l003\n- EL_M02_l001',
          },
        ],
      },
      {
        depth2: '견적계산기\nEL_M01_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/equipment-lease/estimate',
        status: 'end',
        create: '2023.05.19',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
        ],
      },
      {
        depth2: '견적계산기\nEL_M01_p001',
        depth3: '견적서 확인\nEL_M01_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/equipment-lease/estimate-result',
        status: 'end',
        create: '2023.05.12',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.08.31',
            text: '컨텐츠 구성 변경',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '현황조회',
        depth3: '견적\nEL_M02_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/equipment-lease/state-estimate',
        status: 'end',
        create: '2023.05.16',
        log: [
          {
            date: '2023.07.28',
            text: '의료기기 케이스 추가',
          },
        ],
      },
      {
        depth2: '현황조회',
        depth3: '품의\nEL_M02_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/equipment-lease/state-internal-memo',
        status: 'end',
        create: '2023.05.16',
        log: [
          {
            date: '2023.07.28',
            text: '조회결과 케이스 추가',
          },
        ],
      },
    ],
  },
  {
    depth1: '설정',
    datas: [
      {
        depth2: '홈\nSetting_M00_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/setting/home',
        status: 'end',
        create: '2023.04.21',
        log: [],
      },
      {
        depth2: 'PUSH 알림 설정\nSetting_M01_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/setting/push',
        status: 'end',
        create: '2023.04.07',
        log: [],
      },
      {
        depth2: '공동인증서 가져오기\nSetting_M02_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/setting/certificate-import',
        status: 'end',
        create: '2023.04.07',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '공동인증서 내보내기\nSetting_M02_p003',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/setting/certificate-export',
        status: 'end',
        create: '2023.04.07',
        log: [
          {
            date: '2023.08.29',
            text: '확인 버튼 삭제',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '간편비밀번호 (재)등록',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/setting-reset-pin-001',
        status: 'end',
        create: '2023.04.07',
        log: [
          {
            date: '2023.09.15',
            text: '배경색 변경\n- Setting_M03_l002\n- Setting_M03_l003\n- Setting_M03_l004',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- Setting_M03_l001\n- Setting_M03_l004\n- Setting_M03_l002\n- Setting_M03_l003',
          },
        ],
      },
      {
        depth2: '얼굴인증 (재)등록',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/setting-reset-face-001',
        status: 'end',
        create: '2023.04.07',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- Setting_M04_l001\n- Setting_M04_l002',
          },
        ],
      },
      {
        depth2: '지문인증 (재)등록',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/setting-reset-fingerprint-001',
        status: 'end',
        create: '2023.04.07',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- Setting_M05_l001\n- Setting_M05_l003',
          },
        ],
      },
      {
        depth2: 'Face ID (재)등록',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/setting-reset-face-id-001',
        status: 'end',
        create: '2023.04.07',
        log: [
          {
            date: '2023.08.11',
            text: '- Setting_M06_l001 유의사항 문구 수정\n- Setting_M06_l003 유의사항 문구 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- Setting_M06_l001\n- Setting_M06_l003',
          },
        ],
      },
      {
        depth2: '하나 원사인 이용안내\nSetting_M07_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/setting/hana-one-sign-guide',
        status: 'end',
        create: '2023.05.12',
        log: [],
      },
    ],
  },
  {
    depth1: '오토금융',
    datas: [
      {
        depth2: '견적',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/auto-estimate-001',
        status: 'end',
        create: '2023.05.12',
        log: [
          {
            date: '2023.05.16',
            text: '팝업 추가\n- 진행이력 팝업\n- 이탈 안내팝업\n- 리스/렌트 비교 정보 팝업\n- 이용자 유형 선택 팝업\n- 제조사 선택\n- 종류 선택',
          },
          {
            date: '2023.07.21',
            text: 'AF_M00_l015 AS-IS 샘플 적용',
          },
          {
            date: '2023.07.28',
            text: 'AF_M00_l015 타이틀 수정',
          },
          {
            date: '2023.08.03',
            text: 'AF_M02_l001 헤더에 차바구니 버튼 추가',
          },
          {
            date: '2023.08.10',
            text: 'AF_M00_l001 다음 버튼 추가',
          },
          {
            date: '2023.08.21',
            text: '- AF_M00_l005 placeholder 보완\n- AF_M00_l006 placeholder 보완\n- AF_M00_l007 placeholder 보완',
          },
          {
            date: '2023.08.25',
            text: '보증금, 선납금 영역 직접입력 버튼 추가\n- AF_M01_l001\n- AF_M02_l001',
          },
          {
            date: '2023.09.14',
            text: 'AF_M00_l001 안내문구 추가',
          },
          {
            date: '2023.09.18',
            text: 'AF_M00_l009 종료시간 옵션 추가',
          },
          {
            date: '2023.09.19',
            text: '- AF_M00_l005 서브 타이틀 삭제 및 선택 안함 옵션 추가\nAF_M00_l006 서브 타이틀 삭제 및 선택 안함 옵션 삭제\nAF_M02_l001 잔존가치 안내문구 추가\nAF_M01_l001 잔존가치 안내문구 추가',
          },
          {
            date: '2023.09.21',
            text: 'AF_M00_l008 상품안내 내용 추가\n타이틀 텍스트 굵기 수정\n- AF_M00_l011\n- AF_M00_l007\n- AF_M00_l009\n- AF_M00_l016\n- AF_M02_l001\n- AF_M01_l001\n- AF_M00_l001\n- AF_M00_l006\n- AF_M00_l004\n- AF_M00_l003\n- AF_M00_l005\n- AF_M00_l008\n- AF_M00_l018\n- AF_M00_l012',
          },
          {
            date: '2023.09.25',
            text: 'AF_M00_l008 오토리스 상품안내 문구 수정',
          },
          {
            date: '2023.09.27',
            text: 'AF_M00_l011 입력항목 추가 및 개업 연월일 항목 삭제',
          },
          {
            date: '2023.10.05',
            text: 'AF_M00_l011 대표자명 항목 삭제 및 초기화 버튼 수정',
          },
          {
            date: '2023.10.17',
            text: 'AF_M00_l008 "상세보기" 탭으로 타입 변경, "오토리스" 금리 영역 문구 및 너비 수정, 중도해지수수료” 항목 “월렌트료”에 따옴표 수정',
          },
          {
            date: '2023.10.18',
            text: 'AF_M00_l008 장기렌트카 문구 수정, 오토리스 상품안내 문구 오타 수정, 장기렌터카 기간 항목 문구 수정',
          },
        ],
      },
      {
        depth2: '장기렌터카\nAF_M01_p001',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/auto/long-rental',
        status: 'end',
        create: '2023.06.30',
        log: [
          {
            date: '2023.07.19',
            text: '상품안내 내용 수정',
          },
          {
            date: '2023.08.29',
            text: '차량정보 영역 삭제\n하단 로고 추가',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.01',
            text: '하단 버튼 구성 변경',
          },
          {
            date: '2023.09.14',
            text: '준법심의필 문구 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
          {
            date: '2023.10.18',
            text: '상품안내 기간 항목 수정',
          },
        ],
      },
      {
        depth2: '장기렌터카\nAF_M01_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/auto-long-rental-001',
        status: 'end',
        create: '2023.04.14',
        log: [
          {
            date: '2023.04.21',
            text: '팝업 추가\n- 인도요청 정보입력',
          },
          {
            date: '2023.06.23',
            text: '팝업 추가\n- 발주완료 견적 만료 안내\n- 발주차량 정보 변동 안내',
          },
          {
            date: '2023.07.26',
            text: '- AF_M01_l005 컨텐츠 구성 변경\n- AF_M01_l006 고객센터 시간 수정 ',
          },
          {
            date: '2023.08.11',
            text: '- AF_M01_l005 케이스 추가\n- AF_M01_l010 문구수정',
          },
          {
            date: '2023.08.29',
            text: 'AF_M01_l008 문구수정',
          },
          {
            date: '2023.09.18',
            text: '- AF_M01_l010 서브 타이틀 및 라인 삭제\n- AF_M01_l009 탁송도착지 영역 삭제\n- AF_M01_l011 탁송도착지 영역 삭제\n- AF_M01_l012 필수 입력 표시 추가',
          },
          {
            date: '2023.09.20',
            text: 'AF_M01_l011 색상 옵션 길어지면 줄바꿈 처리',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- AF_M01_l011\n- AF_M01_l012\n- AF_M01_l013\n- AF_M01_l005\n- AF_M01_l006\n- AF_M01_l008\n- AF_M01_l010\n- AF_M01_l009',
          },
          {
            date: '2023.09.22',
            text: '외장색상, 내장색상, 옵션 항목 길어지면 줄바꿈 처리\n- AF_M01_l009\n- AF_M01_l011',
          },
          {
            date: '2023.10.11',
            text: 'AF_M01_l011 매회/선납/납입 렌트료 항목 추가',
          },
        ],
      },
      {
        depth2: '오토리스\nAF_M02_p001',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/auto/lease',
        status: 'end',
        create: '2023.06.30',
        log: [
          {
            date: '2023.07.19',
            text: '상품안내 내용 수정',
          },
          {
            date: '2023.08.29',
            text: '하단 로고 추가',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.01',
            text: '하단 버튼 구성 변경',
          },
          {
            date: '2023.09.14',
            text: '준법심의필 문구 수정',
          },
          {
            date: '2023.09.18',
            text: '문구 수정 및 항목 추가',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
          {
            date: '2023.09.25',
            text: '상품안내 문구 수정',
          },
          {
            date: '2023.10.16',
            text: '금융리스 및 상품안내 영역 항목 추가, 기타 영역 레벨 수정, 유의사항 문구 수정',
          },
          {
            date: '2023.10.17',
            text: '"상품안내" 탭 금융리스 영역 문구 및 너비 수정',
          },
          {
            date: '2023.10.18',
            text: '상품안내 "초과운행료", "연체이자율" 항목 문구 수정',
          },
        ],
      },
      {
        depth2: '오토리스\nAF_M02_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/auto-lease-001',
        status: 'end',
        create: '2023.04.14',
        log: [
          {
            date: '2023.07.26',
            text: '- AF_M02_l005 컨텐츠 구성 변경\n- AF_M02_l006 고객센터 시간 수정 ',
          },
          {
            date: '2023.08.11',
            text: '- AF_M02_l005 케이스 추가 ',
          },
          {
            date: '2023.09.18',
            text: '- AF_M02_l014 운용리스, 금융리스 케이스 정리\n- AF_M02_l008 하단 버튼 문구 수정\n- AF_M02_l011 케이스 추가 및 정리\n- AF_M02_l009 하단 버튼 문구 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- AF_M02_l014\n- AF_M02_l005\n- AF_M02_l006\n- AF_M02_l011\n- AF_M02_l009\n- AF_M02_l008',
          },
        ],
      },
      {
        depth2: '오토할부\nAF_M03_p001',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/auto/instalment',
        status: 'end',
        create: '2023.06.30',
        log: [
          {
            date: '2023.07.19',
            text: '상품안내 내용 수정',
          },
          {
            date: '2023.08.29',
            text: '하단 로고 추가',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '오토론\nAF_M04_p001',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/auto/loan',
        status: 'end',
        create: '2023.06.30',
        log: [
          {
            date: '2023.07.19',
            text: '상품안내 내용 수정',
          },
          {
            date: '2023.08.29',
            text: '타이틀 문구 수정\n하단 로고 추가',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '원큐다이렉트 오토론\nAF_M05_p001',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/auto/one-q-loan',
        status: 'end',
        create: '2023.06.30',
        log: [
          {
            date: '2023.07.19',
            text: '상품안내 내용 수정',
          },
          {
            date: '2023.08.29',
            text: '하단 로고 추가',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '원큐다이렉트 오토론\nAF_M05_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/auto-one-q-loan-001',
        status: 'end',
        create: '2023.04.19',
        log: [
          {
            date: '2023.07.26',
            text: '팝업 추가\n- 대출신청 불가',
          },
          {
            date: '2023.08.29',
            text: 'AF_M05_l003 고객센터 시간 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- AF_M05_l002\n- AF_M05_l004\n- AF_M05_l003\n- AF_M05_l001\n- AF_M05_l004',
          },
        ],
      },
      {
        depth2: '중고차오토론\nAF_M06_p001',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/auto/used-loan',
        status: 'end',
        create: '2023.06.30',
        log: [
          {
            date: '2023.07.19',
            text: '상품안내 내용 수정',
          },
          {
            date: '2023.08.29',
            text: '기간 영역 문구 수정\n하단 로고 추가',
          },
          {
            date: '2023.09.14',
            text: '하단 버튼 추가',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '중고차오토론\nAF_M06_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/auto-used-loan-001',
        status: 'end',
        create: '2023.04.19',
        log: [
          {
            date: '2023.06.16',
            text: '팝업 추가\n- 한도조회 정보 입력',
          },
          {
            date: '2023.08.11',
            text: 'AF_M06_l001 컨텐츠 구성 변경 및 버튼 추가',
          },
          {
            date: '2023.08.29',
            text: 'AF_M06_l012 컨텐츠 간격 수정',
          },
          {
            date: '2023.09.18',
            text: '- AF_M06_l003 차량 이미지 삭제 및 내역 없을 때 문구 수정\n- AF_M06_l011 차량 이미지 삭제 및 조회 결과 영역 문구 수정\n- AF_M06_l005 차량 이미지 삭제 및 대출기간 추가\n- AF_M06_l007 차량 이미지 삭제 및 버튼 구성 변경\n- AF_M06_l008 차량 이미지 삭제, 재선택 버튼 위치 변경, 대출기간 옵션 추가, 하단 버튼 케이스 추가\n- AF_M06_l009 화면 삭제',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- AF_M06_l006\n- AF_M06_l007_승인\n-AF_M06_l007_진행불가 \n- AF_M06_l011\n- AF_M06_l008\n- AF_M06_l005\n- AF_M06_l012\n- AF_M06_l002\n- AF_M06_l001',
          },
          {
            date: '2023.09.25',
            text: 'AF_M06_l002 테이블 영역 너비 및 금액 수정',
          },
          {
            date: '2023.10.13',
            text: '차량구입 및 대출신청 금액 항목 버튼 추가, 금액 삭제 버튼 활성화\n- AF_M06_l005\n- AF_M06_l008',
          },
        ],
      },
      {
        depth2: '오토승계\nAF_M07_p001',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/auto/succession',
        status: 'end',
        create: '2023.06.30',
        log: [
          {
            date: '2023.07.19',
            text: '상품안내 내용 수정',
          },
          {
            date: '2023.08.29',
            text: '하단 로고 추가',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '오토승계\nAF_M07_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/auto-succession-001',
        status: 'end',
        create: '2023.04.19',
        log: [
          {
            date: '2023.04.21',
            text: '팝업 추가\n- 본인인증\n- 양수인 신청\n- 리스 승계 상세정보\n- 리스상세조건\n- 렌트 승계 상세정보\n- 렌트상세조건\n- 양수인 정보입력\n- 신용정보조회동의\n- 위임동의 요청 완료\n- 양수인/신청인 본인확인\n- 양수인/신청인 본인확인\n- 위임동의 완료\n- 심사서류 등록\n- 위임장 동의\n- 양수인 신청완료',
          },
          {
            date: '2023.05.19',
            text: '팝업 추가\n- 승계신청 완료',
          },
          {
            date: '2023.08.11',
            text: 'AF_M07_l008 서브타이틀 및 컨텐츠 타이틀 문구 수정',
          },
          {
            date: '2023.08.29',
            text: 'AF_M07_l001 텍스트 크기 수정\nAF_M07_l008 렌트조건 영역 문구 수정',
          },
          {
            date: '2023.09.18',
            text: '- AF_M07_l006 차량정보 결과 한개 노출로 변경\n- AF_M07_l012 승계 조건 케이스 추가',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- AF_M07_l018\n- AF_M07_l011\n- AF_M07_l009\n- AF_M07_l010\n- AF_M07_l016\n- AF_M07_l007\n- AF_M07_l008\n- AF_M07_l006\n- AF_M07_l012\n- AF_M07_l014\n- AF_M07_l013\n- AF_M07_l004\n- AF_M07_l002\n- AF_M07_l001_승계유의사항 확인\n- AF_M07_l005',
          },
        ],
      },
      {
        depth2: '핫딜\nAF_M43_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/auto/hot-deal',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.08.29',
            text: '컨텐츠 색상 수정',
          },
          {
            date: '2023.09.06',
            text: '슬라이드 기능 컴포넌트 화',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n컨텐츠 구성 변경',
          },
          {
            date: '2023.09.22',
            text: '컨텐츠 타이틀 여백 및 아이콘 위치 변경',
          },
          {
            date: '2023.10.16',
            text: '하단 "상품안내", "진행절차", "유의사항" 탭 추가',
          },
          {
            date: '2023.10.17',
            text: '“중도해지수수료” 항목 “월렌트료”에 따옴표 수정',
          },
        ],
      },
      {
        depth2: '차바구니\nAF_M44_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/auto/car-cart',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '차바구니\nAF_M44_p001',
        depth3: '등록없음',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/auto/car-cart-empty',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '차바구니\nAF_M44_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/auto-car-cart-001',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.05.16',
            text: '팝업 추가\n- 제조사 선택\n- 차종 선택',
          },
          {
            date: '2023.09.18',
            text: 'AF_M44_l001 하단 버튼 문구 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- AF_M44_l004\n- AF_M44_l001\n- AF_M44_l002\n- AF_M44_l003',
          },
        ],
      },
    ],
  },
  {
    depth1: '기업금융',
    datas: [
      {
        depth2: '의료비∙설비',
        depth3: '설비리스',
        depth4: '상품안내\nBF_M05_p001',
        depth5: '',
        depth6: '',
        path: '/business/equipment-lease',
        status: 'end',
        create: '2023.06.30',
        log: [
          {
            date: '2023.07.19',
            text: '상품안내 내용 수정',
          },
          {
            date: '2023.08.29',
            text: '하단 로고 추가',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
          {
            date: '2023.10.18',
            text: '금리 항목 문구 수정, "상품안내" 전체 내용 및 텍스트 굵기 수정, 준법심의필 문구 수정, "진행절차" step4 문구 수정',
          },
        ],
      },
      {
        depth2: '의료비∙설비',
        depth3: '설비리스',
        depth4: '견적서 진행사항 안내\nBF_M05_l022',
        depth5: '',
        depth6: '',
        path: '/business/BF_M05_l022',
        status: 'end',
        create: '2023.08.07',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '의료비∙설비',
        depth3: '설비리스',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/ui-guide/business-equipment-lease-001',
        status: 'end',
        create: '2023.05.16',
        log: [
          {
            date: '2023.07.07',
            text: '팝업 추가\n- 상품선택\n- 사업자 정보 입력\n- 서비스이용약관동의\n- 심사결과(시스템심사)\n- 심사결과(정밀심사)\n- 심사결과(부결)\n- 견적서보기',
          },
          {
            date: '2023.07.19',
            text: '- BF_M05_l015 디폴트 체크 값 제거\n- BF_M05_l019 문구수정\n- BF_M05_l020 로고 추가',
          },
          {
            date: '2023.07.21',
            text: 'BF_M05_l020 AS-IS 샘플 적용',
          },
          {
            date: '2023.08.02',
            text: '- BF_M05_l001 문구 수정 및 버튼 추가\n- BF_M05_l003 문구 수정\n- BF_M05_l021 팝업 추가\n- BF_M5_l00105_l022 팝업 추가',
          },
          {
            date: '2023.08.07',
            text: 'BF_M05_l022 페이지로 변경하면서 삭제',
          },
          {
            date: '2023.08.10',
            text: 'BF_M05_l001 케이스 추가',
          },
          {
            date: '2023.08.29',
            text: 'BF_M05_l001 상환금리 영역 문구 수정',
          },
          {
            date: '2023.09.11',
            text: 'BF_M05_l014 이미지 교체',
          },
          {
            date: '2023.09.18',
            text: 'BF_M05_l020 상환금리 영역 단위 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- BF_M05_l014\n- BF_M05_l015\n- BF_M05_l016\n- BF_M05_l017\n- BF_M05_l018\n- BF_M05_l019\n- BF_M05_l001\n- BF_M05_l002\n- BF_M05_l003',
          },
          {
            date: '2023.10.05',
            text: 'BF_M05_l001 금액 입력 폼 하단에 금액 표시 추가\n BF_M05_l002 개인(신용)정보 선택적 수집, 이용동의 삭제\n BF_M05_l005 문구 및 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '의료비∙설비',
        depth3: '일반할부',
        depth4: '상품안내\nBF_M06_p001',
        depth5: '',
        depth6: '',
        path: '/business/general-installment',
        status: 'end',
        create: '2023.07.12',
        log: [
          {
            date: '2023.07.19',
            text: '상품안내 내용 수정',
          },
          {
            date: '2023.08.29',
            text: '하단 로고 추가',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
          {
            date: '2023.10.18',
            text: '"상품안내" 탭 내용 전체 문구 및 텍스트 굵기 수정, "진행절차" 탭 step4 문구 수정',
          },
        ],
      },
      {
        depth2: '의료비∙설비',
        depth3: '일반할부',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/ui-guide/business-general-installment-001',
        status: 'end',
        create: '2023.07.12',
        log: [
          {
            date: '2023.09.11',
            text: 'BF_M06_l001 이미지 교체',
          },
          {
            date: '2023.09.19',
            text: 'BF_M06_l002 네오임플란트 로고 교체',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- BF_M06_l001\n- BF_M06_l002\n- BF_M06_l003\n- BF_M06_l004\n- BF_M06_l005 \n- BF_M06_l006\n- BF_M06_l007\n- BF_M06_l008\n- BF_M06_l009\n- BF_M06_l010\n- BF_M06_l011\n- BF_M06_l012\n- BF_M06_l013',
          },
          {
            date: '2023.10.05',
            text: 'BF_M06_l006 신청금액 항목 하단에 금액 표시 추가',
          },
        ],
      },
    ],
  },
  {
    depth1: '내 대출',
    datas: [
      {
        depth2: '홈\nMy_M01_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-loan/home',
        status: 'end',
        create: '2023.04.21',
        log: [
          {
            date: '2023.07.26',
            text: '더보기 버튼 추가',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
          {
            date: '2023.10.18',
            text: '배너 영역 타입 변경',
          },
          {
            date: '2023.10.19',
            text: '배너 영역 background 추가',
          },
        ],
      },
      {
        depth2: '홈\nMy_M01_p001',
        depth3: '계약미보유,\n종료계약만 보유',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-loan/empty',
        status: 'end',
        create: '2023.04.21',
        log: [
          {
            date: '2023.08.25',
            text: '종료계약만 보유 케이스 추가',
          },
          {
            date: '2023.09.05',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.06',
            text: '"종료계약만 보유" 케이스 노출법 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
          {
            date: '2023.10.17',
            text: '"행복아파트론", "원큐자동차담보대출", "스탁론" 문구 수정',
          },
        ],
      },
      {
        depth2: '홈\nMy_M01_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/my-loan-home-001',
        status: 'end',
        create: '2023.04.28',
        log: [
          {
            date: '2023.06.16',
            text: '팝업 추가\n- 종료된 계약 팝업',
          },
          {
            date: '2023.08.11',
            text: '- My_M08_l001 오타 및 간격 수정',
          },
          {
            date: '2023.08.31',
            text: '- My_M01_b001 풀팝업으로 변경 및 컨텐츠 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- My_M01_b001\n- My_M08_l001',
          },
        ],
      },
      {
        depth2: '상세계약현황\nMy_M01_p002',
        depth3: '개인금융',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-loan/detail-personal',
        status: 'end',
        create: '2023.04.21',
        log: [
          {
            date: '2023.08.31',
            text: '- 버튼 컬러 변경',
          },
        ],
      },
      {
        depth2: '상세계약현황\nMy_M01_p002',
        depth3: '스탁론',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-loan/detail-stock',
        status: 'end',
        create: '2023.04.21',
        log: [
          {
            date: '2023.08.31',
            text: '- 버튼 컬러 및 순서 변경',
          },
        ],
      },
      {
        depth2: '상세계약현황\nMy_M01_p002',
        depth3: '중도금대출',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-loan/detail-intermediate',
        status: 'end',
        create: '2023.04.21',
        log: [
          {
            date: '2023.08.31',
            text: '- 버튼 컬러 변경',
          },
        ],
      },
      {
        depth2: '상세계약현황\nMy_M01_p002',
        depth3: '오토금융',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-loan/detail-auto',
        status: 'end',
        create: '2023.04.21',
        log: [
          {
            date: '2023.08.31',
            text: '- 버튼 컬러 및 순서 변경',
          },
        ],
      },
      {
        depth2: '상세계약현황\nMy_M01_p002',
        depth3: '일반할부',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-loan/detail-instalment',
        status: 'end',
        create: '2023.04.21',
        log: [
          {
            date: '2023.08.31',
            text: '- 버튼 컬러 변경',
          },
        ],
      },
      {
        depth2: '상세계약현황\nMy_M01_p002',
        depth3: '의료기할부',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-loan/detail-medical-instalment',
        status: 'end',
        create: '2023.04.21',
        log: [
          {
            date: '2023.08.31',
            text: '- 버튼 컬러 변경',
          },
        ],
      },
      {
        depth2: '결제/청구정보',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/my-loan-detail-payment-001',
        status: 'end',
        create: '2023.04.14',
        log: [
          { date: '2023.05.19', text: '화면 페이지에서 팝업으로 변경' },
          {
            date: '2023.08.11',
            text: 'My_M01_p004 결제방법 -> 계좌정보 문구 수정',
          },
          {
            date: '2023.09.07',
            text: 'My_M01_p004 결제청구정보 가상계좌, 자동이체계좌 컨텐츠 수정',
          },
          {
            date: '2023.09.08',
            text: 'My_M01_p004 자동이체계좌 "가상계좌 정보" 항목 오프너 영역 수정',
          },
        ],
      },
      {
        depth2: '정비이력',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/my-loan-maintenance-history-001',
        status: 'end',
        create: '2023.04.14',
        log: [
          { date: '2023.05.19', text: '화면 페이지에서 팝업으로 변경' },
          { date: '2023.08.29', text: 'My_M01_p005 컨텐츠 간격 수정' },
        ],
      },
      {
        depth2: '범칙금',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/my-loan-penalty-001',
        status: 'end',
        create: '2023.04.21',
        log: [
          { date: '2023.05.19', text: '화면 페이지에서 팝업으로 변경' },
          { date: '2023.08.11', text: 'My_M01_p006 조회 버튼 추가' },
          { date: '2023.08.29', text: 'My_M01_p006 컨텐츠 간격 수정' },
        ],
      },
      {
        depth2: '자동차세',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/my-loan-car-tax-001',
        status: 'end',
        create: '2023.04.21',
        log: [
          { date: '2023.05.19', text: '화면 페이지에서 팝업으로 변경' },
          { date: '2023.08.11', text: 'My_M01_p007 조회 버튼 추가' },
        ],
      },
      {
        depth2: '지정운전자',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/my-loan-designation-driver-001',
        status: 'end',
        create: '2023.04.14',
        log: [
          {
            date: '2023.05.19',
            text: '팝업 추가\n- 지정운전자-등록 전\n- 지정운전자-등록 후',
          },
          {
            date: '2023.08.29',
            text: 'My_M01_l006 텍스트 크기 수정\nMy_M01_l007 서브 텍스트 굵기 수정\nMy_M01_l008 서브 텍스트 굵기 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- My_M01_p008\n- My_M01_l007\n- My_M01_l009\n- My_M01_l010\n- My_M01_l012\n- My_M01_l011',
          },
        ],
      },
      {
        depth2: '진행상태조회\nMy_M03_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-loan/progress',
        status: 'end',
        create: '2023.04.14',
        log: [
          {
            date: '2023.09.05',
            text: '프로그레스바 위치 변경\n하단 버튼 플로팅 기능 적용\n리스트 ul, li 태그 추가\n더보기 버튼 추가',
          },
          {
            date: '2023.09.18',
            text: '금액 단위 수정 및 다이렉트 오토(렌트) 케이스 추가',
          },
        ],
      },
      {
        depth2: '진행상태조회\nMy_M03_p001',
        depth3: '본인인증\nMy_M03_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-loan/progress-identification',
        status: 'end',
        create: '2023.04.14',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '진행상태조회\nMy_M03_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/my-loan-progress-001',
        status: 'end',
        create: '2023.04.14',
        log: [
          {
            date: '2023.04.21',
            text: '팝업 추가\n- 약관동의',
          },
          {
            date: '2023.04.28',
            text: '팝업 추가\n- 계약서류 조회\n- 이메일 전송\n- 신용정보조회동의\n- 신용정보조회동의 완료\n- 본인확인(URL진입)\n- 계약정보확인\n- 물품수령정보\n- 동의하기\n- 확인완료\n- 할부상담신청\n- 한도조회결과\n- 할부신청정보입력\n- 품목 검색\n- 할부상담 결과안내',
          },
          {
            date: '2023.05.05',
            text: '팝업 추가\n- 약정 정보 확인\n- 계약정보 최종확인\n- 주문서\n- 리스계약확인서\n- 약정완료\n- 약정실패',
          },
          {
            date: '2023.06.28',
            text: '팝업 추가\n- 계약서류 다운로드',
          },
          {
            date: '2023.09.18',
            text: 'PF_M10_l008 할부신청기간 항목 옵션 추가',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- My_M03_l001\n- My_M03_l027\n- My_M03_l028\n- My_M03_l029\n- PF_M10_l006\n- PF_M10_l010\n- PF_M10_l007\n- PF_M10_l010\n- PF_M10_l008\n- PF_M10_l001\n- PF_M10_l004\n- PF_M10_l005\n- PF_M10_l002\n- PF_M10_l003',
          },
        ],
      },
      {
        depth2: '진행상태조회\nMy_M03_p001',
        depth3: '온라인약정',
        depth4: '팝업 001',
        depth5: '',
        depth6: '',
        path: '/ui-guide/my-loan-progress-002',
        status: 'end',
        create: '2023.04.14',
        log: [
          {
            date: '2023.04.21',
            text: '팝업 추가\n- 약관동의\n- 추가설명 여부\n- 약관상세_중고차 대출사기 방지 안내문\n- 약관상세_대출상담사 설명 확인서\n- 계약신청 정보입력\n- 청구 정보입력\n- 결제 정보입력\n- 결제 정보입력\n- 추가 정보입력\n- 기약정 안내_진행\n- 기약정 안내_완료\n- 금융조건 정보입력\n- 1원계좌 인증\n- 계약정보 최종확인\n- 계약사항 확인\n- 자동송금\n- 약정완료 신용대출\n- 약정완료 중도금대출\n- 약정완료 일반할부금융\n- 약정완료 자동송금대상(영업시간 내)\n- 약정완료 자동송금대상(영업시간 외)\n- 약정실패 신용대출\n- 약정실패 중도금대출\n- 약정실패 일반할부금\n- 약정실패 Fraud대상자\n- 약정실패 오류\n- 금리인하요구권 안내\n- 청약철회권 안내\n- 상품설명서 확인 안내(공통)\n- 상품설명에 대한 확인(공통)\n- 승계 본인확인\n- 승계확약 확인\n- 승계확약서 확인\n- 승계 약정 중요사항 확인',
          },
          {
            date: '2023.05.05',
            text: '팝업 추가\n- 승계확약서_오토리스\n- 승계확약서_오토리스\n- 계약정보 최종확인_리스 승계 후\n- 계약정보 최종확인_장기렌터카 승계전\n- 계약정보 최종확인_장기렌터카 신규/승계후/연장',
          },
          {
            date: '2023.05.26',
            text: '팝업 추가\n- 약관상세_실제소유자 확인\n- 약관상세_할부금 지급 안내\n- 약관상세_청약의 철회권 안내\n- 약관상세_신용점수 하락가능 안내\n- 약관상세_기한 이익상실 안내\n- 약관상세_금리인하 요구권 안내',
          },
          {
            date: '2023.06.13',
            text: '팝업 추가\n- 할부금융 안내 - CO 코드일 경우\n- 할부금융 안내 - LO 코드일 경우',
          },
          {
            date: '2023.07.19',
            text: '- My_M03_l017 화면 구성 변경\n- My_M03_l004 취소 버튼 추가',
          },
          {
            date: '2023.08.02',
            text: '팝업 추가\n- 적합성·적정성 확인서 (프로그레스바 없음)',
          },
          {
            date: '2023.08.11',
            text: '- MY_M03_l022pa2 컨텐츠 타이틀 문구 수정\n- My_M03_l003 버튼 문구 수정',
          },
          {
            date: '2023.08.24',
            text: '케이스 추가\n- My_M03_l016\n- My_M03_l017\n- My_M03_l018',
          },
          {
            date: '2023.08.29',
            text: 'My_M03_l012 텍스트 굵기 수정\n컨텐츠 간격 수정\n- My_M03_b014\n- My_M03_b015\n- My_M03_l025\nMy_M03_l024 고객센터 시간 수정\nMy_M03_l005 페이지 변경으로 삭제',
          },
          {
            date: '2023.09.06',
            text: 'My_M03_l033 팝업 추가',
          },
          {
            date: '2023.09.07',
            text: 'My_M03_l031 문구 수정 및 이미지 변경',
          },
          {
            date: '2023.09.14',
            text: 'My_M03_l031 타이틀 문구 띄어쓰기 수정',
          },
          {
            date: '2023.09.15',
            text: 'My_M03_l018 예금주명 입력 항목 추가 및 계좌번호 확인 버튼 삭제\nMy_M03_l031 인증시간 및 재요청 버튼 삭제',
          },
          {
            date: '2023.09.18',
            text: 'My_M03_l005 타이틀 수정 및 금액 표기 통일, 신용등급 선택 항목 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- My_M03_l031\n- My_M03_l020\n- My_M03_l006\n- My_M03_l017\n- My_M03_l005\n- My_M03_l023_신용대출\n- My_M03_l023_중도금대출\n- My_M03_l023_일반할부금융\n- My_M03_l023_자동송금대상\n- My_M03_l023_약정실패 신용대출\n- My_M03_l023_약정실패 중도금대출\n- My_M03_l023_약정실패 일반할부금\n- My_M03_l023_약정실패 오류\n- My_M03_l022\n- MY_M03_l022le1\n- MY_M03_l022pa1\n- MY_M03_l022pa2\n- My_M03_l016\n- My_M03_l200\n- My_M03_l018\n- My_M03_l021\n- My_M03_l019\n- My_M03_l013\n- My_M03_l004\n- My_M03_l003\n- My_M03_l002\n- My_M03_l024\n- My_M03_l025\n- My_M03_l026\n- MY_M03_l026a\n- AF_M98_l005\n- My_M03_l033',
          },
        ],
      },
      {
        depth2: '진행상태조회\nMy_M03_p001',
        depth3: '온라인약정',
        depth4: '팝업 002',
        depth5: '',
        depth6: '',
        path: '/ui-guide/my-loan-progress-012',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.05.12',
            text: '팝업 추가\n- 중고차 오토론_약관동의\n- 계약정보 최종확인_중고차오토론\n- 계약정보 최종확인_약정정보확인\n- 약정완료_오토금융\n- 중도상환 수수료 산식 팝업\n- 약관상세_할부금 수령 위임안내\n- 계약정보 최종확인_중고차 할부\n- 계약정보 최종확인_약정정보확인 중고차할부',
          },
          {
            date: '2023.05.26',
            text: '팝업 추가\n- 약정완료',
          },
          {
            date: '2023.07.19',
            text: '- BF_M04_l002 띄어쓰기 수정\n- BF_M04_l019 문구 케이스 추가\n- BF_M04_l014 문구 케이스 추가',
          },
          {
            date: '2023.07.21',
            text: 'BF_M04_l003 약관 추가\n팝업 추가\n- 채무인수 확약서\n-적합성·적정성 확인서\n-약관동의\n-계약정보 최종확인\n-약정완료\n-고객서류등록',
          },
          {
            date: '2023.07.31',
            text: '- BF_M04_l002 띄어쓰기 수정',
          },
          {
            date: '2023.08.11',
            text: '- MY_M07_b007 타이틀 문구 및 간격 수정\n- BF_M05_l007 생년월일 항목 삭제 및 오타 수정\n- BF_M05_l008 리스물건 점검보고서 삭제 및 문구 수정\n- BF_M05_l011 장비견적서 삭제\n- AF_M98_l003 제조사 로고 삭제 및 파일업로드 추가\n- AF_M98_l011 제조사 로고 삭제',
          },
          {
            date: '2023.08.21',
            text: 'BF_M04_l007 약관 추가',
          },
          {
            date: '2023.08.29',
            text: '컨텐츠 간격 수정\n- AF_M98_b001 \n- My_M07_b00\n- BF_M04_l016\n서브 텍스트 색상 및 굵기 수정\n- AF_M98_l004\n- AF_M99_l009\nBF_M05_l009 컨텐츠 텍스트 색상 수정',
          },
          {
            date: '2023.09.18',
            text: '- AF_M99_l004 대출조건 영역 문구 및 띄어쓰기 수정\n- BF_M04_l003 상위 약관(서비스 이용약관 전체동의) 추가\n- BF_M05_l009 리스물건 주문 상세내역 추가\n- BF_M05_l013 서브 타이틀 문구 수정 및 버튼 변경\n- BF_M04_l025 화면 삭제\n- BF_M05_l006 화면 삭제',
          },
          {
            date: '2023.09.19',
            text: '항목 추가 및 삭제, 문구 수정, 컨텐츠 추가\n- AF_M99_l007\n- AF_M99_l010',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- BF_M04_l027\n- BF_M06_l019\n- BF_M06_l022\n- BF_M06_l023\n- BF_M06_l024\n- BF_M06_l025\n- AF_M99_l008\n- AF_M99_l003\n- AF_M99_l004\n- AF_M99_l005\n- AF_M99_l006\n- AF_M99_l007\n- AF_M99_l010\n- AF_M99_l009\n- BF_M04_l007\n- BF_M04_l012\n- BF_M04_l011\n- BF_M04_l011\n- BF_M04_l004\n- BF_M04_l008\n- BF_M04_l009\n- BF_M04_l010\n- BF_M04_l012\n- BF_M04_l001\n- BF_M04_l002\n- BF_M04_l016\n- BF_M04_l021\n- BF_M04_l023\n- BF_M04_l022\n- BF_M04_l020\n- BF_M04_l019\n- BF_M04_l017\n- BF_M04_l015\n- BF_M04_l003\n- BF_M04_l013\n- BF_M04_l014\n- BF_M05_l013\n- BF_M05_l007\n- BF_M05_l013\n- BF_M05_l010\n- BF_M05_l009\n- BF_M05_l008\n- AF_M98_l001\n- AF_M98_l004\n- AF_M98_l002\n- AF_M98_l010\n- AF_M98_l003\n- AF_M98_l011',
          },
          {
            date: '2023.10.04',
            text: 'AF_M99_l003 파일업로드 항목 추가',
          },
        ],
      },
      {
        depth2: '진행상태조회\nMy_M03_p001',
        depth3: '온라인약정',
        depth4: '상품설명서 001 (일반신용대출)',
        depth5: '팝업',
        depth6: '',
        path: '/ui-guide/my-loan-progress-003',
        status: 'end',
        create: '2023.04.26',
        log: [
          {
            date: '2023.08.24',
            text: 'My_M99_l001 문구 및 레벨 수정',
          },
          {
            date: '2023.09.15',
            text: 'My_M99_l001 테이블 정렬 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- My_M03_l201\n- My_M03_l202\n- My_M03_l203\n- My_M03_l204\n- My_M03_l205\n- My_M03_l206\n- My_M03_l207\n- My_M03_l208\n- My_M03_l209\n- My_M03_l210\n- My_M99_l001',
          },
          {
            date: '2023.09.25',
            text: '이미지 변경\n- My_M03_l202\n- My_M03_l203',
          },
        ],
      },
      {
        depth2: '진행상태조회\nMy_M03_p001',
        depth3: '온라인약정',
        depth4: '상품설명서 002 (일반할부금융)',
        depth5: '팝업',
        depth6: '',
        path: '/ui-guide/my-loan-progress-004',
        status: 'end',
        create: '2023.04.26',
        log: [
          {
            date: '2023.08.24',
            text: 'My_M99_l003 문구 및 레벨 수정',
          },
          {
            date: '2023.08.29',
            text: 'My_M03_l212 오타 수정',
          },
          {
            date: '2023.09.15',
            text: 'My_M99_l003 테이블 정렬 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- My_M03_l211\n- My_M03_l212\n- My_M03_l213\n- My_M03_l214\n- My_M03_l215\n- My_M03_l216\n- My_M03_l217\n- My_M03_l218\n- My_M03_l219\n- My_M03_l220\n- My_M03_l221\n- My_M03_l222\n- My_M99_l003',
          },
        ],
      },
      {
        depth2: '진행상태조회\nMy_M03_p001',
        depth3: '온라인약정',
        depth4: '상품설명서 003 (중도금대출)',
        depth5: '팝업',
        depth6: '',
        path: '/ui-guide/my-loan-progress-005',
        status: 'end',
        create: '2023.04.26',
        log: [
          {
            date: '2023.08.24',
            text: '문구 및 레벨 수정\n- My_M99_l004\n- My_M99_l005',
          },
          {
            date: '2023.09.15',
            text: '테이블 정렬 수정 및 값 출력 영역 여백 제거\n- My_M99_l004\n- My_M99_l005',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- My_M03_l223\n- My_M03_l224\n- My_M03_l225\n- My_M03_l226\n- My_M03_l227\n- My_M03_l228\n- My_M03_l229\n- My_M03_l230\n- My_M99_l004\n- My_M99_l005',
          },
        ],
      },
      {
        depth2: '진행상태조회\nMy_M03_p001',
        depth3: '온라인약정',
        depth4: '상품설명서 004 (자동차오토론)',
        depth5: '팝업',
        depth6: '',
        path: '/ui-guide/my-loan-progress-006',
        status: 'end',
        create: '2023.04.26',
        log: [
          {
            date: '2023.08.24',
            text: 'My_M99_l006 문구 및 레벨 수정, 항목 추가',
          },
          {
            date: '2023.09.15',
            text: 'My_M99_l006 테이블 정렬 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- My_M03_l231\n- My_M03_l232\n- My_M03_l233\n- My_M03_l234\n- My_M03_l235\n- My_M03_l236\n- My_M03_l237\n- My_M03_l238\n- My_M03_l239\n- My_M03_l240\n- My_M03_l241\n- My_M99_l006',
          },
          {
            date: '2023.10.10',
            text: 'My_M99_l006 텍스트 굵기 및 레벨, 문구 수정',
          },
        ],
      },
      {
        depth2: '진행상태조회\nMy_M03_p001',
        depth3: '온라인약정',
        depth4: '상품설명서 005 (중고차오토론)',
        depth5: '팝업',
        depth6: '',
        path: '/ui-guide/my-loan-progress-007',
        status: 'end',
        create: '2023.04.26',
        log: [
          {
            date: '2023.08.24',
            text: 'My_M03_l054 문구 및 레벨 수정, 항목 추가',
          },
          {
            date: '2023.09.15',
            text: 'My_M03_l054 테이블 정렬 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- My_M03_l242\n- My_M03_l243\n- My_M03_l244\n- My_M03_l245\n- My_M03_l246\n- My_M03_l247\n- My_M03_l248\n- My_M03_l249\n- My_M03_l250\n- My_M03_l251\n- My_M03_l252\n- My_M03_l054',
          },
        ],
      },
      {
        depth2: '진행상태조회\nMy_M03_p001',
        depth3: '온라인약정',
        depth4: '상품설명서 006 (자동차할부금융)',
        depth5: '팝업',
        depth6: '',
        path: '/ui-guide/my-loan-progress-008',
        status: 'end',
        create: '2023.04.26',
        log: [
          {
            date: '2023.08.24',
            text: 'My_M99_l007 문구 및 레벨 수정, 항목 추가',
          },
          {
            date: '2023.09.15',
            text: 'My_M99_l007 테이블 정렬 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- My_M03_l253\n- My_M03_l254\n- My_M03_l255\n- My_M03_l256\n- My_M03_l257\n- My_M03_l258\n- My_M03_l259\n- My_M03_l260\n- My_M03_l261\n- My_M03_l262\n- My_M03_l263\n- My_M99_l007',
          },
          {
            date: '2023.10.10',
            text: 'My_M99_l007 텍스트 굵기 및 레벨, 문구 수정',
          },
          {
            date: '2023.10.17',
            text: 'My_M99_l007 "해당여부" 테이블 너비 수정',
          },
        ],
      },
      {
        depth2: '진행상태조회\nMy_M03_p001',
        depth3: '온라인약정',
        depth4: '상품설명서 007 (자동차금융리스)',
        depth5: '팝업',
        depth6: '',
        path: '/ui-guide/my-loan-progress-009',
        status: 'end',
        create: '2023.04.26',
        log: [
          {
            date: '2023.08.11',
            text: 'My_M03_l271 컨텐츠 내 문구 수정',
          },
          {
            date: '2023.08.24',
            text: 'My_M99_l008 문구 및 레벨 수정, 항목 추가',
          },
          {
            date: '2023.09.15',
            text: 'My_M99_l008 테이블 정렬 수정 및 값 출력 영역 여백 제거',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- My_M03_l264\n- My_M03_l265\n- My_M03_l266\n- My_M03_l267\n- My_M03_l268\n- My_M03_l269\n- My_M03_l270\n- My_M03_l271\n- My_M03_l272\n- My_M03_l273\n- My_M03_l274\n- My_M99_l008',
          },
          {
            date: '2023.10.10',
            text: 'My_M99_l008 텍스트 굵기 및 레벨, 문구 수정',
          },
        ],
      },
      {
        depth2: '진행상태조회\nMy_M03_p001',
        depth3: '온라인약정',
        depth4: '상품설명서 008 (자동차운용리스)',
        depth5: '팝업',
        depth6: '',
        path: '/ui-guide/my-loan-progress-010',
        status: 'end',
        create: '2023.04.26',
        log: [
          {
            date: '2023.08.11',
            text: 'My_M03_l282 컨텐츠 내 문구 수정',
          },
          {
            date: '2023.08.24',
            text: 'My_M99_l009 문구 및 레벨 수정, 항목 추가',
          },
          {
            date: '2023.09.15',
            text: 'My_M99_l009 테이블 정렬 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- My_M03_l275\n- My_M03_l276\n- My_M03_l277\n- My_M03_l278\n- My_M03_l279\n- My_M03_l280\n- My_M03_l281\n- My_M03_l282\n- My_M03_l283\n- My_M03_l284\n- My_M03_l285\n- My_M99_l009',
          },
          {
            date: '2023.10.10',
            text: 'My_M99_l009 텍스트 굵기 및 레벨, 문구 수정',
          },
        ],
      },
      {
        depth2: '진행상태조회\nMy_M03_p001',
        depth3: '온라인약정',
        depth4: '상품설명서 009 (일반리스)',
        depth5: '팝업',
        depth6: '',
        path: '/ui-guide/my-loan-progress-011',
        status: 'end',
        create: '2023.04.26',
        log: [
          {
            date: '2023.08.11',
            text: 'My_M03_l287 컨텐츠 내 문구 수정',
          },
          {
            date: '2023.08.24',
            text: '문구 및 레벨 수정\n- My_M99_l010\n- My_M99_l011',
          },
          {
            date: '2023.09.15',
            text: '테이블 정렬 수정 및 값 출력 영역 여백 제거 \n- My_M99_l010\n- My_M99_l011',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- My_M03_l286\n- My_M03_l287\n- My_M03_l288\n- My_M03_l289\n- My_M03_l290\n- My_M03_l291\n- My_M03_l292\n- My_M03_l293\n- My_M03_l294\n- My_M03_l295\n- My_M03_l296\n- My_M99_l010\n- My_M99_l011',
          },
        ],
      },
      {
        depth2: '진행상태조회\nMy_M03_p001',
        depth3: '온라인약정',
        depth4: '적합성·적정성 확인서\nMy_M03_l005',
        depth5: '',
        depth6: '',
        path: '/my-loan/My_M03_l005',
        status: 'end',
        create: '2023.08.29',
        log: [
          {
            date: '2023.08.29',
            text: '페이지로 변경',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.18',
            text: '타이틀 수정 및 금액 표기 통일, 신용등급 선택 항목 수정',
          },
        ],
      },
      {
        depth2: '진행상태조회\nMy_M03_p001',
        depth3: '온라인약정(제휴할부)',
        depth4: '본인인증\nBF_M06_l017',
        depth5: '',
        depth6: '',
        path: '/my-loan/BF_M06_l017',
        status: 'end',
        create: '2023.07.21',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '진행상태조회\nMy_M03_p001',
        depth3: '온라인약정(제휴할부)',
        depth4: '진행상태조회\nBF_M06_l018',
        depth5: '',
        depth6: '',
        path: '/my-loan/BF_M06_l018',
        status: 'end',
        create: '2023.07.21',
        log: [
          {
            date: '2023.09.05',
            text: '프로그레스바 위치 변경\n하단 버튼 플로팅 기능 적용\n리스트 ul, li 태그 추가\n더보기 버튼 추가',
          },
        ],
      },
      {
        depth2: '중도상환신청',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/my-loan-intermediate-001',
        status: 'end',
        create: '2023.04.14',
        log: [
          {
            date: '2023.08.29',
            text: 'My_M01_l014 > My_M01_l015(중도상환신청 유의사항)\n전화번호 오타 수정',
          },
          {
            date: '2023.09.18',
            text: '- My_M01_l014 > My_M01_l015(중도상환신청 유의사항) 신청 가능 상품 문구 수정\n- My_M01_l017 타이틀 케이스 추가',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- My_M01_l014\n- My_M01_l017\n- My_M01_l016',
          },
        ],
      },
      {
        depth2: '증명서 조회/발급',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/my-loan-certificate-001',
        status: 'end',
        create: '2023.04.28',
        log: [
          {
            date: '2023.06.16',
            text: '팝업 추가\n- 입금내역서 조회',
          },
          {
            date: '2023.08.25',
            text: 'MY_M02_l008 컨텐츠 다건 케이스 추가',
          },
          {
            date: '2023.09.12',
            text: '더보기 버튼 추가\n- My_M02_l002\n- My_M02_l006\n- My_M02_l009\n- My_M02_l010\n- My_M02_l011\n- My_M02_l012\n- My_M02_l013\n- My_M02_l015\n- My_M02_l016',
          },
          {
            date: '2023.09.18',
            text: 'My_M02_l016 결제예정금액 -> 대출잔액 문구 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- My_M02_l001\n- My_M02_l017\n- My_M02_l010\n- My_M02_l014\n- My_M02_l013\n- My_M02_l011\n- My_M02_l012\n- My_M02_l009\n- My_M02_l007\n- My_M02_l006\n- My_M02_l015\n- My_M02_l003\n- My_M02_l002\n- My_M02_l016',
          },
        ],
      },
      {
        depth2: '근저당설정 조회/해지',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/my-loan-mortgage-001',
        status: 'end',
        create: '2023.04.28',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- My_M04_l004',
          },
        ],
      },
      {
        depth2: '만기후처리',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/my-loan-post-maturity-001',
        status: 'end',
        create: '2023.04.28',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- My_M08_l005\n- My_M08_l006\n- My_M08_l008_렌트',
          },
        ],
      },
      {
        depth2: '만기후처리',
        depth3: '렌탈',
        depth4: '신청전\nMy_M08_p001',
        depth5: '',
        depth6: '',
        path: '/my-loan/post-maturity-rental-before',
        status: 'end',
        create: '2023.04.28',
        log: [
          {
            date: '2023.08.11',
            text: '일부 문구 삭제 및 띄어쓰기 수정',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
          {
            date: '2023.10.10',
            text: '"연장" 탭 상품안내 영역 띄어쓰기 수정 및 항목 추가, 유의사항 및 준법심의필 문구 수정',
          },
        ],
      },
      {
        depth2: '만기후처리',
        depth3: '렌탈',
        depth4: '신청후\nMy_M08_p002',
        depth5: '',
        depth6: '',
        path: '/my-loan/post-maturity-rental-after',
        status: 'end',
        create: '2023.04.28',
        log: [
          {
            date: '2023.08.11',
            text: '일부 문구 삭제 및 띄어쓰기 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
          {
            date: '2023.10.10',
            text: '"연장" 탭 상품안내 영역 띄어쓰기 수정 및 항목 추가, 유의사항 및 준법심의필 문구 수정',
          },
        ],
      },
      {
        depth2: '만기후처리',
        depth3: '렌탈',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/ui-guide/my-loan-post-maturity-rental-001',
        status: 'end',
        create: '2023.04.28',
        log: [
          {
            date: '2023.08.29',
            text: 'My_M08_l002 컨텐츠 간격 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- My_M08_l012\n- My_M08_l002\n- My_M08_l004\n- My_M08_l003\n- My_M08_l015\n- My_M08_l019\n- My_M08_l016\n- My_M08_l018\n- My_M08_l017\n- My_M08_l010\n- My_M08_l012\n- My_M08_l011',
          },
        ],
      },
      {
        depth2: '만기후처리',
        depth3: '리스',
        depth4: '신청전\nMy_M08_p003',
        depth5: '',
        depth6: '',
        path: '/my-loan/post-maturity-lease-before',
        status: 'end',
        create: '2023.04.28',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '만기후처리',
        depth3: '리스',
        depth4: '신청후\nMy_M08_p004',
        depth5: '',
        depth6: '',
        path: '/my-loan/post-maturity-lease-after',
        status: 'end',
        create: '2023.04.28',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '만기후처리',
        depth3: '리스',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/ui-guide/my-loan-post-maturity-lease-001',
        status: 'end',
        create: '2023.04.28',
        log: [
          {
            date: '2023.08.11',
            text: 'My_M08_l021 컨텐츠 내 오타 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- My_M08_l020\n- My_M08_l021\n- My_M08_l027\n- My_M08_l031\n- My_M08_l028\n- My_M08_l030\n- My_M08_l029\n- My_M08_l024\n- My_M08_l026\n- My_M08_l025\n- My_M08_l012',
          },
        ],
      },
      {
        depth2: '금리인하요구권신청\nMy_M05_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-loan/interest-rate-cut-request',
        status: 'end',
        create: '2023.04.28',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '금리인하요구권신청\nMy_M05_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/my-loan-interest-rate-cut-request-001',
        status: 'end',
        create: '2023.04.28',
        log: [
          {
            date: '2023.08.11',
            text: 'My_M05_l002 금융상품 안내 영역 삭제',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- My_M05_l002\n- My_M05_l003\n- My_M05_l001',
          },
        ],
      },
      {
        depth2: '청약철회권신청\nMy_M06_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-loan/subscription-withdrawal-right',
        status: 'end',
        create: '2023.04.28',
        log: [
          {
            date: '2023.09.18',
            text: '서브 타이틀 문구 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '청약철회권신청\nMy_M06_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/my-loan-subscription-withdrawal-right-001',
        status: 'end',
        create: '2023.04.28',
        log: [
          {
            date: '2023.08.29',
            text: 'My_M06_l003 고객센터 시간 및 서브 텍스트 굵기 수정\nMy_M06_b001 컨텐츠 간격 수정',
          },
          {
            date: '2023.09.18',
            text: '- My_M06_b001 -> My_M06_l002 화면 아이디 변경\n- My_M06_l002 -> My_M06_l003 화면 아이디 변경 및 알림 문구 수정\n- My_M06_l003 -> My_M06_l004 화면 아이디 변경',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- My_M06_l004\n- My_M06_l001\n- My_M06_l003',
          },
        ],
      },
      {
        depth2: '서류등록\nMy_M07_l002',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-loan/my-loan-add-documents',
        status: 'end',
        create: '2023.05.19',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.18',
            text: '안내 문구 수정',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '서류등록\nMy_M07_l002',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/my-loan-add-documents-001',
        status: 'end',
        create: '2023.04.28',
        log: [
          {
            date: '2023.05.19',
            text: '팝업 추가\n- 내 서류 등록 내역',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- My_M07_l001',
          },
        ],
      },
      {
        depth2: '서류등록\nMy_M07_l002',
        depth3: '등록완료\nMy_M07_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-loan/add-documents-complete',
        status: 'end',
        create: '2023.04.28',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
        ],
      },
    ],
  },
  {
    depth1: '내 정보',
    datas: [
      {
        depth2: '내정보 관리\nMI_M01_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-info/home',
        status: 'end',
        create: '2023.05.05',
        log: [],
      },
      {
        depth2: '내정보 관리\nMI_M01_p001',
        depth3: '내정보 변경\nMI_M01_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-info/edit',
        status: 'end',
        create: '2023.05.05',
        log: [],
      },
      {
        depth2: '내정보 관리\nMI_M01_p001',
        depth3: '내정보 변경\nMI_M01_p002',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/ui-guide/my-info-edit-001',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- MI_M01_l001\n- MI_M01_l003',
          },
        ],
      },
      {
        depth2: '내정보 관리\nMI_M01_p001',
        depth3: '자동이체 계좌 변경\nMI_M01_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-info/direct-debit-account',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '내정보 관리\nMI_M01_p001',
        depth3: '자동이체 계좌 변경\nMI_M01_p003',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/ui-guide/my-info-direct-debit-account-001',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.09.18',
            text: 'MI_M01_l005 확인 버튼 삭제 및 아이콘 변경',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- MI_M01_l005',
          },
        ],
      },
      {
        depth2: '내정보 관리\nMI_M01_p001',
        depth3: '청구정보 변경\nMI_M01_p004',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-info/billing',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '내정보 관리\nMI_M01_p001',
        depth3: '청구정보 변경\nMI_M01_p004',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/ui-guide/my-info-billing-001',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- MI_M01_l007',
          },
        ],
      },
      {
        depth2: '내정보 관리\nMI_M01_p001',
        depth3: '비밀번호 변경',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/ui-guide/my-info-password-001',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- MI_M01_l009',
          },
        ],
      },
      {
        depth2: '내정보 관리\nMI_M01_p001',
        depth3: '하나머니\nMI_M01_p005',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-info/hana-money',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '내정보 관리\nMI_M01_p001',
        depth3: '마케팅 수신 동의 변경\nMI_M01_P006',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-info/marketing',
        status: 'end',
        create: '2023.05.12',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '내정보 관리\nMI_M01_p001',
        depth3: '마케팅 수신 동의 변경\nMI_M01_P006',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/ui-guide/my-info-marketing-001',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.09.18',
            text: 'MI_M01_b006 멤버십 수신 동의 케이스 추가',
          },
        ],
      },
      {
        depth2: '내정보 관리\nMI_M01_p001',
        depth3: '회원탈퇴\nMI_M01_p007',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-info/withdraw-member',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '내정보 관리\nMI_M01_p001',
        depth3: '회원탈퇴\nMI_M01_p007',
        depth4: '완료\nMI_M01_p008',
        depth5: '',
        depth6: '',
        path: '/my-info/withdraw-member-complete',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
        ],
      },
      {
        depth2: '하나머니',
        depth3: '하나머니 소개\nMI_M01_p009',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-info/join-hana-money',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.07.31',
            text: '이미지 반영',
          },
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
          {
            date: '2023.10.16',
            text: '이미지 변경 및 준법심의필 추가',
          },
        ],
      },
      {
        depth2: '하나머니',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/my-info-join-hana-money-001',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- MI_M01_l013\n- MI_M01_l014\n- MI_M01_l012',
          },
        ],
      },
      {
        depth2: '하나캐피탈 멤버십',
        depth3: '가입',
        depth4: '멤버십 안내\nMI_M01_p010',
        depth5: '',
        depth6: '',
        path: '/my-info/join-membership',
        status: 'end',
        create: '2023.05.12',
        log: [
          {
            date: '2023.09.01',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '하나캐피탈 멤버십',
        depth3: '가입',
        depth4: '완료\nMI_M01_p011',
        depth5: '',
        depth6: '',
        path: '/my-info/join-membership-complete',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '하나캐피탈 멤버십',
        depth3: '가입',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/ui-guide/my-info-join-membership-001',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.07.19',
            text: 'MI_M01_l015 약관 항목 추가',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- MI_M01_l015',
          },
        ],
      },
      {
        depth2: '하나캐피탈 멤버십',
        depth3: '탈퇴',
        depth4: '완료\nMI_M01_p012',
        depth5: '',
        depth6: '',
        path: '/my-info/withdraw-membership-complete',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '하나캐피탈 멤버십',
        depth3: '탈퇴',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/ui-guide/my-info-withdraw-membership-001',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.07.19',
            text: 'MI_M01_b007 아니오 버튼 추가',
          },
          {
            date: '2023.08.11',
            text: 'MI_M01_b007 버튼 문구 수정',
          },
        ],
      },
      {
        depth2: '자동차 시세조회\nMI_M01_p013',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-info/market-price-car',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '자동차 시세조회\nMI_M01_p013',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/my-info-market-price-car-001',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- MI_M01_l016\n- MI_M01_l017',
          },
        ],
      },
      {
        depth2: '부동산 시세조회\nMI_M01_p014',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-info/market-price-realty',
        status: 'end',
        create: '2023.05.12',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 플로팅 기능 적용',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '부동산 시세조회\nMI_M01_p014',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/ui-guide/my-info-market-price-realty-001',
        status: 'end',
        create: '2023.05.05',
        log: [
          {
            date: '2023.07.21',
            text: 'MI_M01_l020 차트 기능 추가',
          },
          {
            date: '2023.09.18',
            text: 'MI_M01_l018 검색 후 노출 내용 정리(주석 처리)',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정\n- MI_M01_l018\n- MI_M01_l020',
          },
        ],
      },
    ],
  },
  {
    depth1: '회사소개',
    datas: [
      {
        depth2: '회사소개\nCompany_M08_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/company/about',
        status: 'end',
        create: '2023.05.16',
        log: [
          {
            date: '2023.08.21',
            text: '버튼 사이즈 변경',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '회사소개',
        depth3: 'CEO 인사말\nCompany_M08_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/company/ceo',
        status: 'end',
        create: '2023.05.16',
        log: [],
      },
      {
        depth2: '회사소개',
        depth3: '연혁\nCompany_M08_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/company/history',
        status: 'end',
        create: '2023.05.12',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '회사소개',
        depth3: '사업분야\nCompany_M08_p004',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/company/business-areas',
        status: 'end',
        create: '2023.05.12',
        log: [
          {
            date: '2023.07.26',
            text: '글로벌금융 서비스 링크 기능 추가',
          },
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '회사소개',
        depth3: 'IR정보\nCompany_M08_p005',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/company/ir-list',
        status: 'end',
        create: '2023.05.16',
        log: [],
      },
      {
        depth2: '회사소개',
        depth3: 'IR정보\nCompany_M08_p005',
        depth4: '상세\nCompany_M08_p006',
        depth5: '',
        depth6: '',
        path: '/company/ir-detail',
        status: 'end',
        create: '2023.05.12',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 여백 조정',
          },
        ],
      },
      {
        depth2: '회사소개',
        depth3: '지속가능경영\nCompany_M08_p007',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/company/sustainable-management-list',
        status: 'end',
        create: '2023.05.16',
        log: [],
      },
      {
        depth2: '회사소개',
        depth3: '지속가능경영\nCompany_M08_p007',
        depth4: '상세\nCompany_M08_p008',
        depth5: '',
        depth6: '',
        path: '/company/sustainable-management-detail',
        status: 'end',
        create: '2023.05.12',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 여백 조정',
          },
        ],
      },
      {
        depth2: '회사소개',
        depth3: '하나금융그룹\nCompany_M08_p009',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/company/group',
        status: 'end',
        create: '2023.05.26',
        log: [
          {
            date: '2023.07.26',
            text: '이미지 반영',
          },
        ],
      },
      {
        depth2: '윤리경영',
        depth3: '윤리헌장\nCompany_M08_p010',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/company/ethics-charter',
        status: 'end',
        create: '2023.05.16',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '윤리경영',
        depth3: '윤리강령\nCompany_M08_p011',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/company/ethics-code',
        status: 'end',
        create: '2023.05.12',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '윤리경영',
        depth3: '인권선언문\nCompany_M08_p012',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/company/human-rights-declaration',
        status: 'end',
        create: '2023.05.16',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '윤리경영',
        depth3: '인권선언문 구성체계\nCompany_M08_p013',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/company/human-rights-declaration-structure',
        status: 'end',
        create: '2023.05.12',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '채용정보',
        depth3: '채용안내\nCompany_M08_p014',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/company/recruit-guide',
        status: 'end',
        create: '2023.05.12',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '채용정보',
        depth3: '인사/복리후생\nCompany_M08_p015',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/company/personnel-welfare',
        status: 'end',
        create: '2023.05.16',
        log: [
          {
            date: '2023.09.21',
            text: '타이틀 텍스트 굵기 수정',
          },
        ],
      },
      {
        depth2: '채용정보',
        depth3: '채용공고\nCompany_M08_p016',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/company/recruit-list',
        status: 'end',
        create: '2023.05.16',
        log: [],
      },
      {
        depth2: '채용정보',
        depth3: '채용공고\nCompany_M08_p016',
        depth4: '상세\nCompany_M08_p017',
        depth5: '',
        depth6: '',
        path: '/company/recruit-detail',
        status: 'end',
        create: '2023.05.16',
        log: [
          {
            date: '2023.08.30',
            text: '하단 버튼 여백 조정',
          },
        ],
      },
    ],
  },
  {
    depth1: '문서',
    datas: [
      {
        depth2: '견적서',
        depth3: '장기렌트 견적서',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/document/estimate-001',
        status: 'end',
        create: '2023.07.14',
        log: [
          {
            date: '2023.07.26',
            text: '보험조건 및 구비서류 내용 수정',
          },
        ],
      },
      {
        depth2: '견적서',
        depth3: '운용리스 견적서',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/document/estimate-002',
        status: 'end',
        create: '2023.07.14',
        log: [
          {
            date: '2023.07.21',
            text: '취득원가 안내 문구 수정',
          },
          {
            date: '2023.07.28',
            text: '취득원가 및 구비서류 내용 수정',
          },
        ],
      },
      {
        depth2: '견적서',
        depth3: '금융리스 견적서',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/document/estimate-003',
        status: 'end',
        create: '2023.07.14',
        log: [
          {
            date: '2023.07.21',
            text: '취득원가 안내 문구 수정',
          },
          {
            date: '2023.07.28',
            text: '취득원가 내용 수정',
          },
          {
            date: '2023.09.19',
            text: '선수금 항목 비율 노출란 추가',
          },
        ],
      },
      {
        depth2: '견적서',
        depth3: '할부금융 견적서',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/document/estimate-004',
        status: 'end',
        create: '2023.07.14',
        log: [
          {
            date: '2023.07.21',
            text: '취득원가 안내 문구 수정',
          },
          {
            date: '2023.07.26',
            text: '취득원가 -> 가격사항 타이틀 수정',
          },
          {
            date: '2023.07.28',
            text: '가격사항 안내 문구 수정',
          },
        ],
      },
    ],
  },
];

export default {
  setup() {
    const tableDatas = datas();

    const route = useRoute();

    const statusText = {
      pending: '보류',
      ing: '작업중',
      partend: '부분작업완료',
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

          if (data.log.length) {
            data.update = data.log[data.log.length - 1].date;
          }
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

    const printVal = (val) => {
      return val.replace(/\n/g, '<br>');
    };

    const bottomBar = ref(null);
    const fake = ref(null);

    const path = computed(() => {
      return route.path;
    });

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
      path,
      renderVal,
      printVal,
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
              <a
                :href="`${
                  path.match('guide-index') ? '..' : '.'
                }/ui-guide/component`"
                target="_blank"
                class="index-button"
              >
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
                      <a
                        :href="`${path.match('guide-index') ? '..' : '.'}${
                          data.path
                        }`"
                        target="_blank"
                      >
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
                    <td
                      :class="[
                        {
                          'is-emphasis': latestDate === data.update,
                        },
                      ]"
                    >
                      {{ data.update }}
                    </td>
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
                          <div class="index-log__date">
                            <span>[{{ log.date }}]</span>
                          </div>
                          <div
                            class="index-log__text"
                            v-html="printVal(log.text)"
                          ></div>
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
