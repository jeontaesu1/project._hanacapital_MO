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
        depth2: '레이아웃',
        depth3: 'Type 1',
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
        depth3: 'Type 2',
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
        depth3: 'Type 3',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/layout-003',
        status: 'end',
        create: '2023.03.24',
        log: [],
      },
      {
        depth2: '본인인증\nCommon_M00_p003',
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
        depth2: '본인인증\nCommon_M00_p003',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/identification-002',
        status: 'end',
        create: '2023.03.24',
        log: [],
      },
      {
        depth2: '신분증 촬영 및 정보 입력',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/id-shoot-001',
        status: 'end',
        create: '2023.04.07',
        log: [],
      },
      {
        depth2: '신분증 촬영 및 정보 입력',
        depth3: '운전면허증',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/guide/id-shoot-002',
        status: 'end',
        create: '2023.04.07',
        log: [],
      },
      {
        depth2: '대출계산기',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/loan-calculator-001',
        status: 'end',
        create: '2023.03.31',
        log: [],
      },
      {
        depth2: '직장검색',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/search-workplace-001',
        status: 'end',
        create: '2023.04.19',
        log: [],
      },
      {
        depth2: '날짜입력',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/enter-date-001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '주소검색',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/search-address-001',
        status: 'end',
        create: '2023.04.14',
        log: [],
      },
      {
        depth2: '약관동의',
        depth3: '상세',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/guide/clause-detail-001',
        status: 'end',
        create: '2023.03.31',
        log: [],
      },
      {
        depth2: '안내팝업',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/guide-001',
        status: 'end',
        create: '2023.03.31',
        log: [{ date: '2023.04.07', text: '앱 설치 안내 팝업 추가' }],
      },
      {
        depth2: '오류안내',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/error-001',
        status: 'end',
        create: '2023.03.31',
        log: [],
      },
      {
        depth2: '앱 중계 페이지',
        depth3: '1Q 캐피탈\nCommon_M00_p007',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/redirect/app',
        status: 'end',
        create: '2023.03.31',
        log: [],
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
        log: [],
      },
      {
        depth2: '검색',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/search-001',
        status: 'end',
        create: '2023.04.14',
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
        status: 'end',
        create: '2023.04.19',
        log: [],
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
        log: [],
      },
      {
        depth2: '로그인(WEB)\nMember_M01_p001\nMember_M02_p001',
        depth3: '아이디',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/guide/sign-in-001',
        status: 'end',
        create: '2023.03.31',
        log: [
          {
            date: '2023.04.07',
            text: '팝업 추가\n- 비밀번호 3개월 경과 안내\n- 통합 ID 선택',
          },
        ],
      },
      {
        depth2: '로그인(WEB)\nMember_M01_p001\nMember_M02_p001',
        depth3: '공동인증서',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/guide/sign-in-certificate-001',
        status: 'end',
        create: '2023.04.07',
        log: [],
      },
      {
        depth2: '아이디 찾기(WEB)',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/sign-find-id-001',
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
        path: '/guide/sign-reset-password-001',
        status: 'end',
        create: '2023.03.31',
        log: [],
      },
      {
        depth2: '회원가입(WEB)',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/sign-up-001',
        status: 'end',
        create: '2023.03.31',
        log: [{ date: '2023.04.07', text: '팝업 추가\n- 약관동의' }],
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
        log: [],
      },
      {
        depth2: '회원가입(APP)\nMember_M06_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/sign-up-app-001',
        status: 'end',
        create: '2023.04.07',
        log: [],
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
        log: [],
      },
      {
        depth2: '간편비밀번호 불러오기(APP)\nMember_M07_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/sign-load-pin-001',
        status: 'end',
        create: '2023.03.31',
        log: [
          {
            date: '2023.04.07',
            text: '팝업 추가\n- 비밀번호 입력\n- 가입 완료',
          },
        ],
      },
      {
        depth2: '로그인(APP)',
        depth3: '간편비밀번호',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/guide/sign-in-pin-001',
        status: 'end',
        create: '2023.03.31',
        log: [
          {
            date: '2023.04.07',
            text: '팝업 추가\n- 간편비밀번호 로그인',
          },
        ],
      },
      {
        depth2: '로그인(APP)',
        depth3: '간편비밀번호 초기화',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/guide/sign-reset-pin-001',
        status: 'end',
        create: '2023.03.31',
        log: [
          {
            date: '2023.04.07',
            text: '팝업 추가\n- 간편비밀번호 초기화\n- 새 비밀번호 입력\n- 새 비밀번호 재입력',
          },
        ],
      },
      {
        depth2: '로그인(APP)',
        depth3: '생체 인식',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/guide/sign-in-biometrics-001',
        status: 'end',
        create: '2023.04.07',
        log: [],
      },
    ],
  },
  {
    depth1: '개인금융',
    datas: [
      {
        depth2: 'e하나신용대출\nPF_M01_p001',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/e-hana',
        status: 'pending',
        create: '',
        log: [],
      },
      {
        depth2: 'e하나신용대출\nPF_M01_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/personal-loan-e-hana-001',
        status: 'partend',
        create: '2023.03.31',
        log: [
          {
            date: '2023.04.07',
            text: '팝업 추가\n- e하나신용대출(연계) 안내',
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
        status: 'pending',
        create: '',
        log: [],
      },
      {
        depth2: '행복아파트론\nPF_M02_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/personal-loan-happiness-apartment-001',
        status: 'partend',
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
        ],
      },
      {
        depth2: '아파트론\nPF_M03_p001',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/apartment',
        status: 'pending',
        create: '',
        log: [],
      },
      {
        depth2: '원큐자동차담보대출\nPF_M04_p001',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/one-q-auto',
        status: 'pending',
        create: '',
        log: [],
      },
      {
        depth2: '원큐자동차담보대출\nPF_M04_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/personal-loan-one-q-auto-001',
        status: 'partend',
        create: '2023.03.31',
        log: [],
      },
      {
        depth2: '우수고객추가대출\nPF_M05_p001',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/best-customer',
        status: 'pending',
        create: '',
        log: [],
      },
      {
        depth2: '우수고객추가대출\nPF_M05_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/personal-loan-best-customer-001',
        status: 'partend',
        create: '2023.03.31',
        log: [],
      },
      {
        depth2: 'e임대주택론(임대보증금 담보대출)\nPF_M06_p001',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/e-rental-house',
        status: 'pending',
        create: '',
        log: [],
      },
      {
        depth2: '스탁론\nPF_M07_p001',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/stock',
        status: 'pending',
        create: '',
        log: [],
      },
      {
        depth2: '스탁론\nPF_M07_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/personal-loan-stock-001',
        status: 'end',
        create: '2023.03.31',
        log: [
          {
            date: '2023.04.07',
            text: '팝업 추가\n- 연장신청 약관동의\n- 연장신청 계약선택\n- 연장신청 상품 만기현황 확인\n- 중도상환신청 계약선택\n- 중도상환금액 조회\n- 중도상환 신청확인\n- 중도상환 조건 입력',
          },
        ],
      },
      {
        depth2: '의료기할부\nPF_M08_p001',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/medical-appliances',
        status: 'pending',
        create: '',
        log: [],
      },
      {
        depth2: '사업자주택담보대출\nPF_M09_p001',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/business-house',
        status: 'pending',
        create: '',
        log: [],
      },
      {
        depth2: '사업자주택담보대출\nPF_M09_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/personal-loan-business-house-001',
        status: 'partend',
        create: '2023.03.31',
        log: [],
      },
      {
        depth2: '내구소비재할부\nPF_M10_p001',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/personal-loan/consumer-durables',
        status: 'pending',
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
        status: 'partend',
        create: '2023.03.31',
        log: [
          {
            date: '2023.04.07',
            text: '팝업 추가\n- 한도/금리 확인\n- 아파트 검색',
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
        log: [],
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
        log: [],
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
        log: [],
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
        log: [],
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
        log: [],
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
        log: [],
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
        log: [],
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
        log: [],
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
        log: [],
      },
    ],
  },
  {
    depth1: '재고금융 (영업용)',
    datas: [
      {
        depth2: '중도상환',
        depth3: '목록\nIF_M03_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/early-list',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '중도상환',
        depth3: '조건입력\nIF_M03_p002',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/early-form',
        status: 'ing',
        create: '',
        log: [],
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
        log: [],
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
        log: [],
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
        log: [],
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
        log: [],
      },
      {
        depth2: '중도상환',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/inventory-finance-early',
        status: 'partend',
        create: '2023.04.14',
        log: [],
      },
      {
        depth2: '만기연장',
        depth3: '목록\nIF_M04_p001',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/extension-list',
        status: '',
        create: '',
        log: [],
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
        log: [],
      },
      {
        depth2: '만기연장',
        depth3: '조건입력\nIF_M04_p003',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/extension-form',
        status: '',
        create: '',
        log: [],
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
        log: [],
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
        log: [],
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
        log: [],
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
        log: [],
      },
      {
        depth2: '종료채권\nIF_M06_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/inventory-finance/termination-bonds',
        status: '',
        create: '',
        log: [],
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
        status: '',
        create: '',
        log: [],
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
        log: [],
      },
      {
        depth2: '대출상담\nLM_M01_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/lm-blog-loan-counseling',
        status: 'end',
        create: '2023.04.07',
        log: [
          {
            date: '2023.04.14',
            text: '팝업 추가\n- 아파트 검색\n- 사업자선택\n- 한도/금리 확인',
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
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: 'SMS 상담요청 내역\nLM_M03_p001',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/lm-blog/sms-counseling',
        status: '',
        create: '',
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
        log: [],
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
        status: '',
        create: '',
        log: [],
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
        status: '',
        create: '',
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
        log: [],
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
        log: [],
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
        log: [],
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
        status: '',
        create: '',
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
        log: [],
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
        log: [],
      },
      {
        depth2: '간편비밀번호 (재)등록',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/setting-reset-pin',
        status: 'end',
        create: '2023.04.07',
        log: [],
      },
      {
        depth2: '얼굴인증 (재)등록',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/setting-reset-face',
        status: 'end',
        create: '2023.04.07',
        log: [],
      },
      {
        depth2: '지문인증 (재)등록',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/setting-reset-fingerprint',
        status: 'end',
        create: '2023.04.07',
        log: [],
      },
      {
        depth2: 'Face ID (재)등록',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/setting-reset-face-id',
        status: 'end',
        create: '2023.04.07',
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
        path: '/guide/auto-estimate-001',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '장기렌터카\nAF_M01_p001',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/auto/long-rental',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '장기렌터카\nAF_M01_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/auto-long-rental-001',
        status: 'partend',
        create: '2023.04.14',
        log: [],
      },
      {
        depth2: '오토리스\nAF_M02_p001',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/auto/lease',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '오토리스\nAF_M02_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/auto-lease-001',
        status: 'end',
        create: '2023.04.14',
        log: [],
      },
      {
        depth2: '오토할부\nAF_M03_p001',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/auto/instalment',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '오토론\nAF_M04_p001',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/auto/loan',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '원큐다이렉트 오토론\nAF_M05_p001',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/auto/one-q-loan',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '원큐다이렉트 오토론\nAF_M05_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/auto-one-q-loan-001',
        status: 'end',
        create: '2023.04.19',
        log: [],
      },
      {
        depth2: '중고차오토론\nAF_M06_p001',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/auto/used-loan',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '중고차오토론\nAF_M06_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/auto-used-loan-001',
        status: 'end',
        create: '2023.04.19',
        log: [],
      },
      {
        depth2: '오토승계\nAF_M07_p001',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/auto/succession',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '오토승계\nAF_M07_p001',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/auto-succession-001',
        status: 'partend',
        create: '2023.04.19',
        log: [],
      },
    ],
  },
  {
    depth1: '기업금융',
    datas: [
      {
        depth2: '의료기리스\nBF_M01_p001',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/business/medical-lease',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '산업재리스\nBF_M02_p001',
        depth3: '상품안내',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/business/industrial-lease',
        status: '',
        create: '',
        log: [],
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
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '홈\nMy_M01_p001',
        depth3: '계약미보유',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-loan/empty',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '상세계약현황\nMy_M01_p002',
        depth3: '개인금융',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-loan/detail-personal',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '상세계약현황\nMy_M01_p002',
        depth3: '스탁론',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-loan/detail-stock',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '상세계약현황\nMy_M01_p002',
        depth3: '중도금대출',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-loan/detail-intermediate',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '상세계약현황\nMy_M01_p002',
        depth3: '오토금융',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-loan/detail-auto',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '상세계약현황\nMy_M01_p002',
        depth3: '일반할부',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-loan/detail-instalment',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '상세계약현황\nMy_M01_p002',
        depth3: '의료기할부',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-loan/detail-medical-instalment',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '결제/청구정보\nMy_M01_p004',
        depth3: '가상계좌',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-loan/detail-payment-virtual',
        status: 'end',
        create: '2023.04.14',
        log: [],
      },
      {
        depth2: '결제/청구정보\nMy_M01_p004',
        depth3: '자동이체계좌',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-loan/detail-payment-auto',
        status: 'end',
        create: '2023.04.14',
        log: [],
      },
      {
        depth2: '정비이력\nMy_M01_p005',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-loan/maintenance-history',
        status: 'end',
        create: '2023.04.14',
        log: [],
      },
      {
        depth2: '범칙금\nMy_M01_p006',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-loan/penalty',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '자동차세\nMy_M01_p007',
        depth3: '',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-loan/car-tax',
        status: '',
        create: '',
        log: [],
      },
      {
        depth2: '지정운전자\nMy_M01_p008',
        depth3: '등록 전',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-loan/designation-driver-empty',
        status: 'end',
        create: '2023.04.14',
        log: [],
      },
      {
        depth2: '지정운전자\nMy_M01_p008',
        depth3: '등록 후',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/my-loan/designation-driver',
        status: 'end',
        create: '2023.04.14',
        log: [],
      },
      {
        depth2: '지정운전자\nMy_M01_p008',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/my-loan-designation-driver-001',
        status: 'end',
        create: '2023.04.14',
        log: [],
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
        log: [],
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
        log: [],
      },
      {
        depth2: '진행상태조회\nMy_M03_p001',
        depth3: '본인인증\nMy_M03_p002',
        depth4: '팝업',
        depth5: '',
        depth6: '',
        path: '/guide/my-loan-progress-001',
        status: 'partend',
        create: '2023.04.14',
        log: [],
      },
      {
        depth2: '중도상환신청',
        depth3: '팝업',
        depth4: '',
        depth5: '',
        depth6: '',
        path: '/guide/my-loan-intermediate-001',
        status: 'end',
        create: '2023.04.14',
        log: [],
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
                }/guide/component`"
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
