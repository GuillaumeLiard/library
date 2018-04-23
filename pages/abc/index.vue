<template>
  <section class="container">
    <h1>
      Abc
    </h1>
    <p>
      New thing to say
    </p>
    <p>
      Also new
    </p>
    </section>
  </template>

  <script>
  import isomorphism from '~/components/Isomorphism';
  export default {
  }
  </script>

  <style lang="css">
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
