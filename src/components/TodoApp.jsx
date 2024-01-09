import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addTodo, deleteTodo } from "../Store/Slices/todoSlice";
import { useContext } from "react";
import { TodoContext } from "../Context";
function TodoApp() {
  // const dispatch = useDispatch();
  // const todos = useSelector((store) => store.todo);
  // console.log(todos);
  const { todo, addTodo, saveTodo } = useContext(TodoContext);
  const onHandleSubmit = (e) => {
    let title = e.target[0].value;
    e.preventDefault();

    const newTodo = { id: crypto.randomUUID(), title };
    addTodo(newTodo);
    // dispatch(addTodo({ id: crypto.randomUUID(), title })); //toolkit
    // dispatch({
    //   // type: "ADD",
    //   payload: {
    //     id: crypto.randomUUID(),
    //     title: title,
    //   },
    // });
  };
  const onDelete = (id) => {
    // dispatch(deleteTodo(id));
    // dispatch({
    //   type: "DELETE",
    //   payload: id,
    // });
  };
  const [edited, setEdited] = useState(null);
  const [newtitle, setTitle] = useState("");
  const onEdit = (val) => {
    setEdited(val);
    setTitle(val.title);
    // todo.filter(val=>)
  };
  const onSave = (val) => {
    setEdited(false);
    let newObject = {
      id: edited.id,
      title: newtitle,
    };
    saveTodo(newObject);
  };
  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <input type="text" placeholder="title" />
        <button>submit</button>
      </form>
      <table border={1} width={"50%"}>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((val, inx) => (
            <tr>
              <td>{inx + 1}</td>
              <td>
                {edited?.id == val.id ? (
                  <input
                    onChange={(e) => setTitle(e.target.value)}
                    value={newtitle}
                    type="text"
                    placeholder="editedtitle"
                  />
                ) : (
                  val.title
                )}
              </td>
              <td>
                <button
                  onClick={() => onDelete(val.id)}
                  className="btn bg-danger"
                >
                  del
                </button>
                {edited?.id == val.id ? (
                  <button onClick={onSave} className="btn bg-info">
                    save
                  </button>
                ) : (
                  <button onClick={() => onEdit(val)} className="btn bg-info">
                    edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoApp;
