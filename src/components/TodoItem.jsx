import style from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function deleteHandle(item) {
    // console.log("Deleted Successfully " + item);
    setTodos(todos.filter((todo) => todo !== item));
  }

  return (
    <div className={style.item}>
      <div className={style.itemName}>
        {item}
        <span>
          <button
            className={style.deleteButton}
            onClick={() => deleteHandle(item)}
          >
            x
          </button>
        </span>
      </div>

      <hr className={style.line} />
    </div>
  );
}
 