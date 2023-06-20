console.log("Vue ok", Vue);

console.log("Vue ok", Vue);
//ogni todo sarà un oggetto, formato da almeno due proprietà:
//- text, una stringa che indica il testo del todo
//- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
//MILESTONE 1
//Stampare all'interno di una lista HTML un item per ogni todo.
//Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

const app = Vue.createApp({
  data() {
    return {
      nuovecosedafare: '',
      todos: [
        { text: "Studiare Vue", done: true },
        { text: "Completare l'esercizio Todolist", done: false },
      ],
    };
  },
  methods: {
    deleteTodo(targetIndex) {
      this.todos.splice(targetIndex, 1);
    },
    addTodo() {
      this.todos.push(this.nuovecosedafare);
    },
  },
});
app.mount("#root");
