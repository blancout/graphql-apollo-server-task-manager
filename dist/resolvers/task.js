import tasks from "../data/tasks";
const taskResolvers = {
    Query: {
        tasks: () => tasks,
        task: (_, { id }) => tasks.find((task) => task.id === id)
    },
    Mutation: {
        createTask: (_, { title, description, status, created_at }) => {
            const newTask = {
                id: Math.random().toString(36).substr(2, 9),
                title,
                description,
                status,
                created_at,
                updated_at: created_at,
            };
            tasks.push(newTask);
            return newTask;
        },
        updateTask: (_, { id, title, description, status, updated_at }) => {
            const taskIndex = tasks.findIndex((task) => task.id === id);
            if (taskIndex === -1) {
                throw new Error("Task not found");
            }
            tasks[taskIndex] = {
                ...tasks[taskIndex],
                title,
                description,
                status,
                updated_at,
            };
            return tasks[taskIndex];
        },
        deleteTask: (_, { id }) => {
            const taskIndex = tasks.findIndex((task) => task.id === id);
            if (taskIndex === -1) {
                throw new Error("Task not found");
            }
            tasks.splice(taskIndex, 1);
            return true;
        },
    }
};
export default taskResolvers;
;
