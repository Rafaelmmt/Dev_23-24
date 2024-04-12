const { createApp } = Vue

createApp({

  data() {
    return {
      testeVue: 'Vue está funcionando!',
      openC01: false,
      openC02: false
    }
  }

}).mount('#todoApp')