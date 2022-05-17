<template>
  <card-flip v-for="(card, index) in cardsContext"
             :key="index"
             :ref="`card-${index}`"
             :imgBackFaceUrl="`images/${card}.png`"
             :card="{index, value: card}"
             @onFlip="checkRule($event)"
  />
</template>

<script>
import CardFlip from '@/components/Card';

export default {
  props: {
    cardsContext: {
      type: Array,
      default: function () {
        return [];
      },
    }
  },
  components: {
    CardFlip,
  },
  data() {
    return {
      rules: []
    };
  },
  methods: {
    checkRule(card) {
      if (this.rules.length === 2) {
        return false;
      }
      this.rules.push(card);

      if (
        this.rules.length === 2 &&
        this.rules[0].value === this.rules[1].value
      ) {
        console.log('right');
      } else if (
        this.rules.length === 2 &&
        this.rules[0].value !== this.rules[1].value
      ) {
        console.log('wrong');
        // close two cards
        this.$refs[`card-${this.rules[0].index}`].onFlipBackCard();
        this.$refs[`card-${this.rules[1].index}`].onFlipBackCard();
        console.log(this.rules);
        // reset rules
        this.rules = [];
      } else {
        return false;
      }
    },
  }
};
</script>

