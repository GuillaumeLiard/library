<template>
  <section class="container">
    <h1>
      Bibliothèque
    </h1>
    <svg>
      <node/>
    </svg>
    </section>
  </template>

  <script>
  import node from '~/components/node';
  export default {
    components: {
      node
    },
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

  svg {
    width: 100%;
    height: calc(100vh - 50px);
    background-color: rgba(0, 0, 0, 0.3);
  }
  </style>
