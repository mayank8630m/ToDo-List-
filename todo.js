let List = [];

display()

let AddButton = document.querySelector("#addbtn");
AddButton.addEventListener("click",add())




function add(){
    let input = document.querySelector("#todo-input");
    let date = document.querySelector("#todo-date");
    let inputText = input.value;
    let inputdate = date.value;
    List.push({todo: inputText,date: inputdate})
    input.value="";
    date.value="";
    display()
}




function display(){
    let containerElement = document.querySelector(".container")
    let html = " "
    for(let i=0;i<List.length-1;i++){
        let {todo ,date} = List[i];
        html +=`
        <span>${todo}</span>
        <span>${date}</span>
        <button class='btn-delete' onclick=' List.splice(${i},1);
        display(); '>Delete </button>
        `;
    }
    containerElement.innerHTML=html;


}