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
        currentIndex: 0,
      todo1: [
        {text: "Studiare Vue" },
        {done: true},
        
      ],
      todo2: [
        { text:"Completare l'esercizio Todolist" },
        { done: false},
        
      ],


    };
  },
});
app.mount("#root");
