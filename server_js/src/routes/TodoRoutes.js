import TodoController from '../controllers/TodoController.js'

const TodoRoutes = (app) => {
    app.post('/todos', TodoController.create)

    app.get('/todos', TodoController.findAllTodos)
    app.get('/todos/:id', TodoController.findTodoById)

    app.put('/todos/:id', TodoController.updateTodo)
    app.put('/todos/toggleCompleted/:id', TodoController.toggleTodoStatus)

    app.delete('/todos/:id', TodoController.deleteTodo)
}

export default TodoRoutes
