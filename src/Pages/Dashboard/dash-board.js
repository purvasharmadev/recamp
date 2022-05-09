import "./dash-board.css";
import {useState} from "react";
import { useAuth } from "../../Auth/auth-context";
import { useTodo } from "../../context/todo-context";
import Resources from "../../Components/Resources/resources";
import { TodoList } from "../../Components/Todo/todo-list";
import { Link, useNavigate } from "react-router-dom";
import {Chat} from "../../Components/Chat/chat";
function DashBoard() {
  const navigateTo = useNavigate();
  const { todo } = useTodo();
  const { userDetail } = useAuth();
  const [component,setComponent] = useState()

  return (
    <div className="m-top text-center">
      <h2>Hi! {userDetail.name}</h2>
      <div className="flex p-1">
      <div className="w-100">
        <h1>Group Chat</h1>
        <Chat/>
      </div>

      <div className="w-100 chat">
        <h1>Todos</h1>
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


        <div className="chat">
          <h1>Add Resources</h1>
        <Resources />
      </div>

    </div>
  </div>
  );
}

export default DashBoard;
