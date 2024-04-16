export const TaskItem = ({ task }) => {
    return (
        <>
            <ul>
                <li>{task.description}</li>
                <p>{task.isCompleted ? "completa" : "nao completa"}</p>
            </ul>
        </>
    );
};
