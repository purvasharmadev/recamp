import { useTodo } from "../../context/todo-context";

export function TodoList(props) {
  const { updateTodoStatus, setCompleted } = useTodo();
  const styleCheck = {
    textDecoration: props.isCompleted ? "line-through" : "none",
  };
  return (
    <>
      <li className="list-item list-item-border list-item-hover list-item-background">
        <div className="flex flex-space-between align-item-center">
          <div className="flex align-item-center">
            <input
              onChange={() => updateTodoStatus(props.itemId)}
              checked={setCompleted(props.isCompleted)}
              type="checkbox"
            />
            <p style={styleCheck}>
              {" "}
              {props.task} {props.isCompleted}{" "}
            </p>
          </div>
        </div>
      </li>
    </>
  );
}
