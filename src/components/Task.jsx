import axios from "axios";
import { useEffect, useState } from "react";

import "./Tasks.scss";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";

const Tasks = () => {
    const [task, setTask] = useState([]);

    const fetchTasks = async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/tasks");
            setTask(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <>
            <div className="container-tasks">
                <h2>Minhas Tarefas</h2>

                <div className="last-tasks">
                    <h3>Ultimas tarefas</h3>
                    <AddTask />
                    <div className="task-list">
                        {task
                            .filter((task) => task.isCompleted === false)
                            .map((lastTask) => (
                                <TaskItem task={lastTask} />
                            ))}
                    </div>
                </div>
                <div className="completed-tasks">
                    <h3>Tarefas Completas</h3>
                    <div className="task-list">
                        {task
                            .filter((task) => task.isCompleted === true)
                            .map((completedTask) => (
                                <TaskItem task={completedTask} />
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tasks;
