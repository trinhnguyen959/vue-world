<template>
  <card-flip v-for="(card, index) in cardsContext" :key="index"
             :imgBackFaceUrl="`images/${card}.png`"/>
</template>

<script>
import CardFlip from '@/components/Card';

export default {
  props: {
    cardsContext: {
      type: Array,
      default: () => [],
    }
  },
  components: {
    CardFlip,
  }
};
</script>

