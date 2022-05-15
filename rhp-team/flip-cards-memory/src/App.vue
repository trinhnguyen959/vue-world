<template>
  <interact-screen v-if="statusMatch ==='match'"
                   :cardsContext="settings.cardsContext"/>
  <main-screen v-if="statusMatch === 'default'"
               @onStart="onHandleForStart($event)"></main-screen>
</template>

<script>
import InteractScreen from '@/components/InteractScreen';
import MainScreen from '@/components/MainScreen';
import {shuffled} from '@/utils/arrays';

export default {
  name: 'App',
  components: {
    InteractScreen,
    MainScreen,
  },
  data() {
    return {
      settings: {
        totalBlocks: 0,
        cardsContext: [],
        startedAt: '',
      },
      statusMatch: 'default',
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
    }
  },
};
</script>
