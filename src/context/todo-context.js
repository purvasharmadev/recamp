import { useState, useEffect, createContext, useContext } from "react";
// firestore
import { db } from "../firebase-config";
import {
  addDoc,
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";

const TodoContext = createContext();

function TodoProvider({ children }) {
  //todo collection ref
  const todoRef = collection(db, "Todo");

  // States
  const [todo, setTodo] = useState([]);
  const [task, setTask] = useState();
  const [notes, setNotes] = useState();
  const [completed, setCompleted] = useState(false);
  const [edit, setEdit] = useState();
  const [assign, setAssigned] = useState();

  // Delete the Task
  async function deleteTodo(id) {
    const todoDoc = doc(db, "Todo", id);
    await deleteDoc(todoDoc);
  }

  // Update the task
  async function updateTodo(id, Task, Notes) {
    const todoDoc = doc(db, "Todo", id);
    const newTodo = {
      task: task,
      note: notes,
      assignedTo: assign,
    };
    setEdit(false);
    setAssigned("");
    setNotes("");
    setTask(" ");

    await updateDoc(todoDoc, newTodo);
  }

  //   Toggle checkbox

  async function updateTodoStatus(id) {
    const todoDoc = doc(db, "Todo", id);
    const toggle = {
      id: id,
      isCompleted: !completed,
    };
    await updateDoc(todoDoc, toggle);
  }

  // Create new Task
  async function createTodo() {
    if (task && notes && assign !== undefined) {
      const add = await addDoc(todoRef, {
        task: task,
        note: notes,
        isCompleted: completed,
        assignedTo: assign,
      });
      setAssigned("");
      setNotes("");
      setTask(" ");
      return add;
    } else {
      console.log("please add details");
    }
  }

  //  get List Of task
  async function getTodo() {
    await getDocs(todoRef);
    onSnapshot(todoRef, (res) => {
      setTodo(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }
  console.log("todo ", todo);
  useEffect(() => {
    getTodo();
  }, []);

  return (
    <TodoContext.Provider
      value={{
        getTodo,
        createTodo,
        updateTodo,
        updateTodoStatus,
        deleteTodo,
        todo,
        task,
        notes,
        completed,
        edit,
        assign,
        setTodo,

        setTask,
        setAssigned,
        setCompleted,
        setEdit,
        setNotes,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

const useTodo = () => useContext(TodoContext);

export { useTodo, TodoProvider };
