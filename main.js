/*
    < 실습 : Todo 리스트 만들기 > 
    1. 사용자가 할 일을 입력한다.

    2. 등록 버튼 누른다.
        - 사용자가 입력한 '할 일' 데이터를 가져온다.
        - 화면에 보여주기 위한 요소 노드, 텍스트 노드 생성한다.
            -> 요소 노드: li, button
            -> 텍스트 노드 : 사용자가 입력한 '할 일', '삭제'
        - 요소 노드와 텍스트 노드를 연결한다.
        - id 가 'todoList' 인 ul 요소에 연결한다.

    3. 웹 페이지에 등록한 한 일이 출력된다.

    4. 삭제 버튼을 누르면 해당되는 요소만 삭제한다.
        - 버튼에 클릭 이벤트를 구현한다.
        - 부모요소.removechild(삭제할 자식노드) 를 활용해서 삭제한다.
*/

const todoList = document.getElementById("todoList");
const addTodoBtn = document.todoForm.addTodoBtn;

addTodoBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const todo = document.todoForm.todo.value;

    const new_li = document.createElement("li");
    const new_txt = document.createTextNode(todo);

    const new_button = document.createElement("button");
    const new_btn_txt = document.createTextNode("삭제");

    new_button.appendChild(new_btn_txt);

    new_li.appendChild(new_txt);
    new_li.appendChild(new_button);

    todoList.appendChild(new_li);

    new_button.addEventListener("click", (event) => {
        event.preventDefault();
        todoList.removeChild(new_li);
    });
});