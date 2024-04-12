import { createApp } from 'vue'

createApp({

  data() {
    return {
      listaDeTarefas: [],
      novaTarefa: {},
    }
  },

  methods: {
    addTask: function() {
      this.novaTarefa.realizada = false;
      this.listaDeTarefas.push(this.novaTarefa);
      this.novaTarefa = {};
    },

    clearAll: function() {
      this.listaDeTarefas = []
    }
  }

}).mount('#app')