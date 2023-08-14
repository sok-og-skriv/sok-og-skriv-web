<template>
  <section class="container">
    <transition :duration="{ enter: 500, leave: 300 }" enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut" mode="out-in">
      <div>
        <div class="questionContainer" v-if="questionIndex < quiz.questions.length" :key="questionIndex">
          <h4 class="titleContainer title" v-html="quiz.questions[questionIndex]?.text"></h4>
          <div class="optionContainer" v-if="quiz.questions[questionIndex]">
            <div class="option" v-for="(response, index) in quiz.questions[questionIndex].responses"
              @click="selectOption(index)" :class="{ 'is-selected': userResponses[questionIndex] === index }"
              :key="index">
              {{ index | charIndex }}. {{ response.text || 'Mpthasdng' }}
            </div>
          </div>

          <footer class="questionFooter">
            <header>
              <div class="shell">
                <div class="bar" :style="{ width: (questionIndex / quiz.questions.length) * 100 + '%' }"></div>
              </div>
            </header>

            <nav class="pagination" role="navigation" aria-label="pagination">
              <span class="button">{{ ((questionIndex / quiz.questions.length) * 100).toFixed(0) }}%</span>

              <a class="button" @click="prev()" v-if="questionIndex !== 0">
                Back
              </a>

              <a class="button" :class="(userResponses[questionIndex] === null) ? '' : 'is-active'" @click="next()"
                :disabled="questionIndex >= quiz.questions.length">
                {{ (userResponses[questionIndex] === null) ? 'Skip' : 'Next' }}
              </a>
            </nav>
          </footer>
        </div>

        <div v-if="questionIndex >= quiz.questions.length" :key="questionIndex" class="quizCompleted has-text-centered">
          <span class="icon">
            <i class="fa" :class="(score() > 3) ? 'fa-check-circle-o is-active' : 'fa-times-circle'"></i>
          </span>

          <h2 class="title">
            You did {{
              (score() / quiz.questions.length > 0.7)
              ? 'an awesome'
              : ((score() / quiz.questions.length < 0.4) ? 'a bad' : 'a good') }} jobb! </h2>
              <p class="subtitle">
                Total: {{ score() }} / {{ quiz.questions.length }}
              </p>
              <br />
              <a class="button" @click="restart()">restart <i class="fa fa-refresh"></i></a>
        </div>
      </div>
    </transition>
  </section>
</template>

<script>
import { ref } from 'vue';
import * as quizzes from '../quizzes';

export default {
  name: 'Quiz',
  props: {
    quizNum: Number,
  },
  setup(props) {
    const quizData = ref(null);
    const questionIndex = ref(0);
    const userResponses = ref([]);

    // Initialize quizData based on the prop value
    switch (props.quizNum) {
      case 1:
        quizData.value = quizzes.quiz1;
        break;
      case 2:
        quizData.value = quizzes.quiz2;
        break;
      default:
        quizData.value = quizzes.quiz1;
        break;
    }

    // Initialize userResponses array
    const resetUserResponses = () => {
      userResponses.value = Array(quizData.value.questions.length).fill(null);
    };

    resetUserResponses();

    const selectOption = (index) => {
      userResponses.value[questionIndex.value] = index;
    };

    const next = () => {
      if (questionIndex.value < quizData.value.questions.length) {
        questionIndex.value++;
      }
    };

    const prev = () => {
      if (questionIndex.value > 0) {
        questionIndex.value--;
      }
    };

    const restart = () => {
      questionIndex.value = 0;
      resetUserResponses();
    };

    return {
      quiz: quizData.value,
      questionIndex,
      userResponses,
      selectOption,
      next,
      prev,
      restart,
    };
  },
  methods: {
    charIndex() {
      return (i) => String.fromCharCode(97 + i);
    },
    score() {
      let score = 0;
      for (let i = 0; i < this.userResponses.length; i++) {
        const userResponseIndex = this.userResponses[i];
        if (
          userResponseIndex !== null &&
          typeof this.quiz.questions[i].responses[userResponseIndex] !== 'undefined' &&
          this.quiz.questions[i].responses[userResponseIndex].correct
        ) {
          score++;
        }
      }
      return score;
    },
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$color_1: #f86c6b;
$color_2: #4dbd74;
$color_3: #f0f3f5;
$color_4: #fff;
$color_5: #676767;
$font-family_1: Montserrat, sans-serif;
$background-color_1: #676767;
$background-color_2: #A50007;
$border-color_1: rgba(0, 0, 0, 0.25);
$border-color_2: transparent;

@import "https://fonts.googleapis.com/css?family=Montserrat:400,400i,700";
@import "https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700";

/* .questionContainer header {
  padding-top: 1.5rem;
  background-color: rgba(124, 32, 32, 0.025);
  background: rgba(124, 32, 32, 0.025);
  text-align: center; 
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}*/
/** Custom Progress bar */
/* .shell {
  height: 20px;
  width: 100%;
  border: 1px solid #73818f;
  border-radius: 5px;
  padding: 3px;
  margin: 0 auto;
} */
.button {
  transition: 0.3s;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 5rem;
  margin: 0 0.25rem;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background: #388AA0;
    color: $color_4;
    border-color: $border-color_1;
  }
}

.title {
  font-family: $font-family_1;
  font-weight: normal;
}

.subtitle {
  font-family: $font-family_1;
  font-weight: normal;
}

.animated {
  transition-duration: 0.15s;
}

.container {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ddd;
  box-shadow: 0px 5px 10px #ddd;
}

.questionBox {
  max-width: 30rem;
  width: 30rem;
  min-height: 30rem;
  position: relative;
  display: flex;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.questionContainer {
  header {
    h1 {
      font-weight: bold;
      margin-bottom: 1rem !important;
    }
  }

  white-space: normal;
  height: 100%;
  width: 100%;

  .optionContainer {
    margin: 1rem 1rem 0 1rem;
    flex-grow: 1;

    .option {
      border-radius: 290486px;
      padding: 9px 18px;
      margin-bottom: 12px;
      transition: 0.3s;
      cursor: pointer;
      background-color: $background-color_1;
      color: $color_3;
      border: transparent 1px solid;

      &:hover {
        background-color: $background-color_2;
      }

      &:active {
        transform: scaleX(0.9);
      }
    }

    .option.is-selected {
      border-color: $border-color_1;
      background-color: $background-color_2;
    }
  }

  .questionFooter {
    background: rgba(0, 0, 0, 0.025);
    border-top: 1px solid #A50007;
    width: 100%;
    align-self: flex-end;
    margin-top: 1rem;

    .pagination {
      margin: 15px 25px;
    }
  }
}

.titleContainer {
  margin: 0 auto;
  padding: 1.5rem 1rem 0.5rem 1rem;
}

.quizForm {
  display: block;
  white-space: normal;
  height: 100%;
  width: 100%;

  .quizFormContainer {
    height: 100%;
    margin: 15px 18px;

    .field-label {
      text-align: left;
      margin-bottom: 0.5rem;
    }
  }
}

.quizCompleted {
  width: 100%;
  padding: 1rem;
  text-align: center;

  >.icon {
    color: $color_1;
    font-size: 5rem;

    .is-active {
      color: $color_2;
    }
  }
}

.pagination {
  display: flex;
  justify-content: flex-end;
}

.button.is-active {
  background: #388AA0;
  color: $color_4;
  border-color: $border-color_2;

  &:hover {
    background: #235563;
  }
}

.bar {
  background: linear-gradient(to right, #d13941, #A50007);
  height: 5px;
  width: 15px;
  border-radius: 9px;

  span {
    float: right;
    padding: 4px 5px;
    color: $color_5;
    font-size: 0.8em;
  }
}

@media screen and (min-width: 769px) {
  .questionBox {
    align-items: center;
    justify-content: center;
  }

  .questionContainer {
    display: flex;
    flex-direction: column;
  }
}

@media screen and (max-width: 768px) {
  .sidebar {
    height: auto !important;
    border-radius: 6px 6px 0px 0px;
  }
}
</style>
