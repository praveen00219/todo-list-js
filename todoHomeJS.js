// ---------------------------------------login Page-------------------------------------------------------------------------------

// ---------------data Storage ------------------------------------------------------------------------------------

let todoArr = [
  { name: "Ram", description: "This is JS", id: 1 },
  { name: "Shyam", description: "My Todo", id: 2 },
];
let id = 2;
let updateItemId;
let updateName;
let updateDes;
// ------------------------------------------------------------------------------------------------
// -----------------defalt TodoList ----------------------------------------------------
let defaultTodo = function () {
  let todoList = (document.getElementById("allTodoList").innerHTML =
    todoArr.map((data) => {
      return `<div class="todolist" id=${data.id}>
                         <div class="list1">${data.name}</div>
                         <div> ${data.description}  </div>
                       
                         <div>
                             <button class="updateBtn" onclick ="updateFun('${data.id}','${data.name}','${data.description}')" >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                  </svg>
                              </button>
                              <button class="removeBtn" onclick = "removeTodoFun('${data.id}','${data.name}' )" >
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16" >
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                                 </svg>
                              </button>
                         </div>
                    
             
              </div>`;
    }));
  document.getElementById("allTodoList").innerHTML = todoList.join(" ");
};
defaultTodo();
// ---------------------------------------------------------------------------------------------
// ------------------- create/save TodoList  ---------------------------

let saveTodoFun = function () {
  id++;
  let inputName = document.getElementById("inputId").value;
  let inputDes = document.getElementById("inputDesId").value;

  //------  Update Condition -------------------
  if (updateItemId != null && inputName !== null && inputDes !== null) {
    updateItemId = parseInt(updateItemId);

    let todoList = todoArr.map((data) => {
      if (data.id === updateItemId) {
        data.name = inputName;
        data.description = inputDes;
      }
      return `<div class="todolist" id=${data.id}>
                
              
                      
                         <div class="list1">${data.name}</div>
                       
                       <div> ${data.description}  </div>
                       
                         <div style="display: flex; align-items: center; /* font-size: 45px; */ height: 28px;">
                             <button class="updateBtn" onclick ="updateFun('${data.id}','${data.name}','${data.description}')" >
                               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                               </svg>
                             </button>


                            <button class="removeBtn" onclick = "removeTodoFun('${data.id}','${data.name}' )" >
                               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16" >
                                 <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                               </svg>
                           
                            </button>
                          </div>
                    
             
             </div>
                  `;
    });
    document.getElementById("allTodoList").innerHTML = todoList.join(" ");
    updateItemId = null;

    document.getElementById("saveBtnId").value = "Save";
  } else if (inputName == "" || inputDes == "") {
    document.getElementById("desError").innerHTML =
      "Please Enter valid Title & Description**";
  } else if (inputName !== "" && inputDes !== "") {
    document.getElementById("desError").innerHTML = "";

    todoArr.push({ name: inputName, description: inputDes, id: id });

    let todoList = todoArr.map((data) => {
      return `<div class="todolist" id=${data.id}>
                
              
                      
                         <div class="list1">${data.name}</div>
                       
                       <div> ${data.description}  </div>
                       
                         <div>
                             <button class="updateBtn" onclick ="updateFun('${data.id}','${data.name}','${data.description}')" >
                               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                               </svg>
                             </button>


                            <button class="removeBtn" onclick = "removeTodoFun('${data.id}','${data.name}' )" >
                               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16" >
                                 <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                               </svg>
                           
                            </button>
                          </div>
                    
             
             </div>
                  `;
    });
    document.getElementById("allTodoList").innerHTML = todoList.join(" ");
  }

  document.getElementById("inputId").value = "";
  document.getElementById("inputDesId").value = "";
};
// ---------------------------------------------------------------------------------------------
//---------------------- remove TodoList Function -------------------------------------------

let removeTodoFun = function (id) {
  const todoRemoveItemId = parseInt(id);
  todoArr = todoArr.filter((todoItem) => {
    if (todoItem.id !== todoRemoveItemId) {
      return todoItem;
    }
  });

  let todoList = todoArr.map((data) => {
    return `<div class="todolist" id=${data.id}>
                
              
                      
                         <div class="list1">${data.name}</div>
                       
                       <div> ${data.description}  </div>
                       
                         <div>
                             <button class="updateBtn" onclick ="updateFun('${data.id}','${data.name}','${data.description}')" >
                               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                               </svg>
                             </button>


                            <button class="removeBtn" onclick = "removeTodoFun('${data.id}','${data.name}' )" >
                               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16" >
                                 <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                               </svg>
                           
                            </button>
                          </div>
                    
             
             </div>
                  `;
  });
  document.getElementById("allTodoList").innerHTML = todoList.join(" ");
};

// ---------------------------------------------------------------------------------------------------------------------
// -------------------update TodoList ---------------------------------------------------

let updateFun = function (id, inputName, inputDes) {
  document.getElementById("inputId").value = inputName;
  document.getElementById("inputDesId").value = inputDes;

  document.getElementById("saveBtnId").value = "Update";
  updateItemId = id;
  updateName = inputName;
  updateDes = inputDes;
};

// ------------------------------------------------------------------------------------------
