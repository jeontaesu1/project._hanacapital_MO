<script>
// Main_M07_p006
import { reactive, onMounted, onUnmounted } from 'vue';
import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import PageTextGroup from '@/components/ui/text/PageTextGroup.vue';
// import PageMainText from '@/components/ui/text/PageMainText.vue';
// import IllustObject from '@/components/ui/common/IllustObject.vue';
import BottomSticky from '@/components/ui/common/BottomSticky.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import IconprogressCar from '@/assets/images/icon/progressCar.svg?component';
import IconO from '@/assets/images/icon/O.svg?component';
import IconX from '@/assets/images/icon/X.svg?component';

export default {
  name: 'CarSurveyQuestion',
  components: {
    PageContents,
    PageTextGroup,
    // PageMainText,
    // IllustObject,
    BottomSticky,
    BasicButton,
    ButtonList,
    ButtonListItem,

    IconprogressCar,
    IconO,
    IconX,
  },
  emits: ['answer', 'complete'],
  setup(props, { emit }) {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const questions = [
      {
        id: 1,
        text: '차량 유지비를 줄일 수 있다면\n전기차를 선택할 것이다.',
      },
      // {id: 2, text: '차량 유지비를 줄일 수 있다면 전기차를 선택할 것이다2'},
      // 질문 추가 할 수 있음.
    ];

    const state = reactive({
      currentQuestionIndex: 0,
      totalQuestions: questions.length,
      selectedAnswer: null,
      currentQuestion: questions[0],
      progressPercentage: 0,
      get isLastQuestion() {
        return this.currentQuestionIndex === this.totalQuestions - 1;
      },
      // productsSlider: null,
      // productsAccordionAnimate: false,
    });

    const selectAnswer = (answer) => {
      state.selectedAnswer = answer;
    };

    const nextQustion = () => {
      if (!state.selectedAnswer) return;

      // 답변 저장 로직
      emit('answer', {
        questionId: state.currentQuestion.id,
        answer: state.selectedAnswer,
      });

      if (state.isLastQuestion) {
        emit('complete');
      } else {
        state.currentQuestionIndex++;
        state.currentQuestion = questions[state.currentQuestionIndex];
        state.progressPercentage =
          (state.currentQuestionIndex / state.totalQuestions) * 100;
        state.selectedAnswer = null;
      }
    };

    onMounted(() => {
      store.ui.header.setTitle(() => '하나뿐인 내 차 찾기');
      store.ui.header.setLeftButtons(() => ['back']);
      store.ui.header.setRightButtons(() => ['']);
    });

    onUnmounted(() => {
      store.ui.header.setTitle();
      store.ui.header.setRightButtons();
    });

    return {
      state,
      selectAnswer,
      nextQustion,
    };
  },
};
</script>

<template>
  <PageContents>
    <!-- 프로그래스바 -->
    <div class="progress-slider">
      <div class="slider-track"></div>
      <div
        class="slider-active-track"
        :style="{ width: state.progressPercentage + '%' }"
      ></div>
      <div
        class="slider-thumb"
        :style="{ left: state.progressPercentage + '%' }"
      >
        <IconprogressCar />
      </div>
    </div>

    <!-- 질문 영역 -->
    <PageTextGroup>
      <div class="question-container">
        <p class="question">
          <span class="question-mark color-green">Q.</span>
          {{ state.currentQuestion.text }}
        </p>
      </div>
    </PageTextGroup>

    <!-- 응답 버튼 영역 -->
    <div class="answer-buttons">
      <button
        class="answer-btn yes-btn"
        :class="{
          selected: state.selectedAnswer === 'yes',
          disabled: state.selectedAnswer === 'no',
        }"
        @click="selectAnswer('yes')"
      >
        <div class="btn-icon"><IconO /></div>
        <div class="btn-text">그렇다</div>
      </button>
      <button
        class="answer-btn no-btn"
        :class="{
          selected: state.selectedAnswer === 'no',
          disabled: state.selectedAnswer === 'yes',
        }"
        @click="selectAnswer('no')"
      >
        <div class="btn-icon"><IconX /></div>
        <div class="btn-text">아니다</div>
      </button>
    </div>

    <template v-slot:foot>
      <BottomSticky>
        <div class="bottom-wrap">
          <ButtonList
            :classNames="{
              wrap: 'row-margin-none',
            }"
          >
            <ButtonListItem>
              <BasicButton>테스트 시작</BasicButton>
            </ButtonListItem>
          </ButtonList>
        </div>
      </BottomSticky>
    </template>
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/main/Main_M09_p001.scss';
</style>

<style lang="scss" scoped>
.question {
  white-space: pre-line;
}
// 프로그래스바
.progress-slider {
  margin-bottom: 40px;
  position: relative;
  height: 10px;

  .slider-track {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #b7b7b7;
    border-radius: 50px;
    overflow: hidden;
  }

  .slider-active-track {
    position: absolute;
    height: 100%;
    background: #000;
    border-radius: 50px;
    transition: width 0.3s ease;
  }

  .slider-thumb {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -40%);
    transition: left 0.3s ease;
    z-index: 1;
  }
}

// 질문 영역
.question-container {
  margin-bottom: 32px;
  .question {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.5;
    color: #333;
    text-align: center;
  }
}

// 응답 버튼 영역
.answer-buttons {
  display: flex;
  gap: 14px;
  margin-bottom: 32px;
  padding: 0 23px;
  .answer-btn {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 38px 16px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
    max-height: 174px;
    transition: all 0.2s ease;
    .btn-icon {
      width: 52px;
      height: 52px;
      transition: opacity 0.2s ease;
    }
    .btn-text {
      font-size: 16px;
      font-weight: 500;
      transition: opacity 0.2s ease;
    }
  }
  .yes-btn {
    position: relative;
    background-color: #e9f3ff;
    color: #1265e6;
    &.selected::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border: 4px solid #1265e6;
      border-radius: 20px;
    }
  }
  .no-btn {
    position: relative;
    background-color: #feeeee;
    color: #f23e4f;
    &.selected::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      border: 4px solid #f23e4f;
      border-radius: 20px;
    }
  }

  .no-btn:not(.selected) {
    &.disabled {
      background-color: #e0e0e0;
      opacity: 0.5;
      .btn-icon,
      .btn-text {
        color: #666;
        opacity: 0.5;
        svg {
          * {
            stroke: #666 !important;
            fill: #666 !important;
          }
          circle {
            stroke: #666 !important;
            stroke-width: 8px !important;
          }
        }
      }
    }
  }
  .yes-btn:not(.selected) {
    &.disabled {
      background-color: #e0e0e0;
      opacity: 0.5;
      .btn-icon,
      .btn-text {
        color: #666;
        opacity: 0.5;
        svg {
          * {
            stroke: #666 !important;
            // fill: #666 !important;
          }
          circle {
            stroke: #666 !important;
            stroke-width: 8px !important;
          }
        }
      }
    }
  }
}
</style>
