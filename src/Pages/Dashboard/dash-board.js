import "./dash-board.css";
import { useAuth } from "../../Auth/auth-context";
import { useTodo } from "../../context/todo-context";
import Resources from "../../Components/Resources/resources";
import { TodoList } from "../../Components/Todo/todo-list";
import { Link, useNavigate } from "react-router-dom";

function DashBoard() {
  const navigateTo = useNavigate();
  const { todo } = useTodo();
  const { userDetail } = useAuth();

  return (
    <div className="m-top text-center">
      <h2>Hi! {userDetail.name}</h2>
      <div className="flex p-1">
        <div className="w-100">
          <ul className="list list-broder list-bullet-none">
            <li className="list-item list-title color-white">
              <Link to="/todo" className="color-white link">
                Add Todo
              </Link>
            </li>
            {todo.map((item, id) => {
              return (
                <>
                  <TodoList
                    onClick={() => {
                      navigateTo("/todo");
                    }}
                    task={item.task}
                    itemId={item.id}
                    isCompleted={item.isCompleted}
                  />
                </>
              );
            })}
          </ul>
        </div>

        <Resources />
      </div>
    </div>
  );
}

export default DashBoard;
