import { useTodo } from "../../context/todo-context";
import todoImg from "../../Assets/images/todoImg.svg";

function Todo() {
  const {
    createTodo,
    updateTodo,
    deleteTodo,
    todo,
    task,
    notes,
    edit,
    completed,
    setCompleted,
    assign,
    setTask,
    setAssigned,
    setEdit,
    setNotes,
  } = useTodo();

  return (
    <>
      <div className="flex w-100 p-1">
        <div className="text-left w-25 mb-1">
          <h3>Add todo</h3>
          <input
            value={task ? task : ""}
            onChange={(e) => {
              setTask(e.target.value);
            }}
            placeholder="enter task"
            type="text"
          />
          <input
            value={assign ? assign : ""}
            onChange={(e) => {
              setAssigned(e.target.value);
            }}
            placeholder="enter member"
            type="text"
          />
          <textarea
            className="input-textarea w-50 mb-1"
            value={notes ? notes : ""}
            onChange={(e) => {
              setNotes(e.target.value);
            }}
            type="text"
            placeholder="notes"
          />
          {/* <button onClick={updateTodo}>Add todo</button> */}
          {edit ? (
            <button
              className="btn btn-secondary"
              onClick={() => updateTodo(edit)}
            >
              Update todo
            </button>
          ) : (
            <button className="btn btn-primary" onClick={createTodo}>
              Add todo
            </button>
          )}
        </div>
        <div className="container m-auto w-100">
          {todo.length === 0 ? (
            <div className="container flex text-center color-secondary">
              <img
                src={todoImg}
                height="300px"
                width="300px"
                alt="todo img"
                className="img-responsive h-50"
              />
              <h3>Create a new todo now!</h3>
            </div>
          ) : (
            <>
              <div className="flex w-100">
                <ul className="list list-broder list-bullet-none w-100 p-lr">
                  <li className="list-item list-title color-white text-center">
                    {" "}
                    Your Todos
                  </li>

                  {todo.map((item, id) => {
                    return (
                      <>
                        <li className="list-item list-item-border list-item-hover list-item-background">
                          <div className="flex flex-space-between align-item-center">
                            <div className="flex">
                              <p className="pl-1">{item.task}</p>
                            </div>
                            <div className="flex mr-1">
                              <p
                                onClick={() => (
                                  setEdit(item.id, item.task, item.note),
                                  setTask(item.task),
                                  setNotes(item.note),
                                  setAssigned(item.assignedTo)
                                )}
                                className="text-small cursor-pointer color-info"
                              >
                                Edit
                              </p>
                              <p
                                onClick={() => deleteTodo(item.id)}
                                className="text-small cursor-pointer color-danger"
                              >
                                Delete
                              </p>
                            </div>
                          </div>
                          <div
                            style={{ marginTop: "-10px" }}
                            className="flex flex-space-between w-100"
                          >
                            <span className="pl-1">{item.note}</span>
                            <span className="mr-1">{item.assignedTo}</span>
                          </div>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Todo;

