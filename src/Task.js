export const Task = (props) => {
    return (
      <div>
        <div className="task" style={{ backgroundColor: props.completed ? "green" : "white" }}>
          <h1>{props.taskName}</h1>
        </div>
        <div className='buttons'>
          <button onClick={() => props.completeTask(props.id)}>ok</button>
          <button onClick={() => props.deleteTask(props.id)}>X</button>
        </div>
      </div>
    );
  };
  