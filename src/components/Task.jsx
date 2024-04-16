import axios from "axios";
import { useEffect, useState } from "react";

import "./Tasks.scss";

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
                    <div className="task-list">
                        {task
                            .filter((task) => task.isCompleted === false)
                            .map((lastTask) => (
                                <p>{lastTask.description}</p>
                            ))}
                    </div>
                </div>
                <div className="completed-tasks">
                    <h3>Tarefas Completas</h3>
                    <div className="task-list">
                        {task
                            .filter((task) => task.isCompleted === true)
                            .map((completedTask) => (
                                <p>{completedTask.description}</p>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tasks;
