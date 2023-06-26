import React, { useState } from "react";

function TodoList() {
  // Bước 1: Khởi tạo các state để lưu trữ dữ liệu
  // + State dừng để lưu trữ tất cả dữ liệu todolist
  const [todo, setTodo] = useState([]);
  // +State text dùng đẻ lưu trữ dữ liệu của ô input
  const [text, setText] = useState("");

  // Bước 2: Viết Hàm để lấy value ô input
  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  //Bước 3: Viết hàm handleAddTodo để thêm dữ liệu vào todo
  const handleAddTodo = () => {
    setTodo([...todo, { text: text, complete: false }]);
    setText("");
  };
  //Bước 4: Viết hàm handleDeleteTodo để xóa dữ liệu trong todo
  const handleDeleteTodo = (index) => {
    const deleteTodo = [...todo];
    deleteTodo.splice(index, 1);
    setTodo(deleteTodo);
  };
  //Bước 5: Viết hàm handleToggleTodo để thay đổi trạng thái dữ liệu trong todo
  const handleToggleTodo = (index) => {
    const toggleTodo = todo.map((e, i) =>
      index === i ? { ...e, complete: !e.complete } : ""
    );
    setTodo(toggleTodo);
  };
  //Bước 6: Viết hàm handleEditTodo để cập nhật lại dữ liệu trong todo
  const [editIndex, setEditIndex] = useState(-1);
  const [editText, setEditText] = useState("");
  const handleEditTodo = (index) => {
    setEditIndex(index);
    setEditText(todo[index].text);
  };
  //bước 7: Viết hàm handleUpdateTodo để thay đổi dữ liệu trong todo
  const handleUpdateTodo = () => {
    const updateTodo = [...todo];
    updateTodo[editIndex].text = editText;
    setTodo(updateTodo);
    setEditIndex(-1);
    setText("");
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input type="text" value={text} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {todo.map((element, index) => (
          <li key={index}>
            {editIndex === index ? (
              <div>
                <input
                  type="text"
                  onChange={(e) => setEditText(e.target.value)}
                  value={editText}
                />
                <button onClick={handleUpdateTodo}>Edit</button>
                <button onClick={() => setEditIndex(-1)}>Cancel</button>
              </div>
            ) : (
              <div>
                <span
                  //
                  style={{
                    textDecoration: element.complete ? "line-through" : " none",
                  }}
                  onClick={() => handleToggleTodo(index)}
                >
                  {element.text}
                </span>
                <button onClick={() => handleEditTodo(index)}>Edit</button>
                <button onClick={() => handleDeleteTodo(index)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
