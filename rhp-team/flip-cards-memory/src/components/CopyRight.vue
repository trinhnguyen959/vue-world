<template>
  <div class="copyright">
    <p>this is the game make by learning</p>
    <a href="#">view here</a>
  </div>
</template>

<script>
export default {
  name: 'CopyRightScreen'
};
</script>

<style lang="css" scoped>
.copyright {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1.5rem;
  color: var(--light);
  z-index: 3;
  font-size: 1.5rem;
}

.copyright a {
  color: #f4dc26;
}
</style>
