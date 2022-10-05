import mongoose from 'mongoose'

const dbCollection = String(process.env.MONGODB_COLLECTION)

const todoSchema = new mongoose.Schema({
    title: 'string',
    completed: 'boolean',
    assignedTo: 'string'
}, {
    timestamps: true
})

const TodoModel = mongoose.model(dbCollection, todoSchema)

export default TodoModel
