import React, { useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      todo: "todo 1",
      state: true,
    },

    {
      id: 2,
      todo: "todo 2",
      state: true,
    },

    {
      id: 3,
      todo: "todo 3",
      state: true,
    },
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      { id: todoList.length + 1, todo: todo, state: false },
    ]);
    setTodo("");
  };
  const handleStateChange = (id) => {
    let newTodoList = [...todoList];
    let i = newTodoList.findIndex((item) => item.id === id);
    newTodoList[i].state = !newTodoList[i].state;
    setTodoList(newTodoList);
  };
  const handleDel = (id) => {
    let newTodoList = [...todoList];
    let i = newTodoList.findIndex((item) => item.id === id);
    newTodoList.splice(i, 1);
    setTodoList(newTodoList);
  };
  return (
    <div>
      <div>
        <div className="card" style={{ width: "50%", margin: "auto" }}>
          <div className="card-body">
            <form className="d-flex" role="search" onSubmit={handleSubmit}>
              <input
                className="form-control me-2 py-4"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Add
              </button>
            </form>

            <ul
              className="list-group"
              style={{ marginTop: "20px", textAlign: "left" }}
            >
              {todoList.map((todo) => (
                <li className="list-group-item d-flex justify-content-between align-items-center fs-6">
                  <p
                    style={
                      todo.state
                        ? { textDecoration: "line-through", flex: "1" }
                        : { flex: "1" }
                    }
                    onClick={() => handleStateChange(todo.id)}
                  >
                    {todo.todo}
                  </p>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic mixed styles example"
                  >
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDel(todo.id)}
                    >
                      Del
                    </button>

                    <button type="button" className="btn btn-warning">
                      Edit
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
