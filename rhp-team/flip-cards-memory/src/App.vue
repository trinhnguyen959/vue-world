<template>
  <interact-screen v-if="statusMatch ==='match'"
                   :cardsContext="settings.cardsContext"
                   @onFinish="onGetResult"/>
  <main-screen v-if="statusMatch === 'default'"
               @onStart="onHandleForStart($event)"></main-screen>
  <result-screen v-if="statusMatch === 'result'" :timer="timer"
                 @onStartAgain="statusMatch = 'default'"></result-screen>
  <copy-right></copy-right>
</template>

<script>
import InteractScreen from '@/components/InteractScreen';
import MainScreen from '@/components/MainScreen';
import {shuffled} from '@/utils/arrays';
import ResultScreen from '@/components/ResultScreen';
import CopyRight from '@/components/CopyRight';

export default {
  name: 'App',
  components: {
    InteractScreen,
    MainScreen,
    ResultScreen,
    CopyRight
  },
  data() {
    return {
      settings: {
        totalBlocks: 0,
        cardsContext: [],
        startedAt: '',
      },
      statusMatch: 'default',
      timer: 0,
    };
  },
  methods: {
    onHandleForStart(config) {
      console.log('running handle before start', config);
      this.settings.totalBlocks = config.totalBlocks;

      const firstCards = Array.from({length: this.settings.totalBlocks / 2},
        (_, i) => i + 1);
      // clone card
      const secondCards = [...firstCards];

      // combine cards
      const cards = [...firstCards, ...secondCards];
      this.settings.cardsContext = shuffled(shuffled(shuffled(shuffled(cards))));
      this.settings.startedAt = new Date().getTime();

      // data ready
      this.statusMatch = 'match';
    },
    onGetResult() {
      // getTimer
      this.timer = new Date().getTime() - this.settings.startedAt;

      // switch to get result component
      this.statusMatch = 'result';
    },

  },
};
</script>
