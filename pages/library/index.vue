<template>
  <section class="container">
    <h1>
      Bibliothèque
    </h1>
    <isomorphism />
  </section>
</template>

<script>
import isomorphism from '~/components/Isomorphism'
export default {
  components: {
    isomorphism
  }
}
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

  }

  h1 {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 5px 10px blue;
  }


</style>
