import mongoose from 'mongoose'

const dbCollection = process.env.MONGODB_COLLECTION

const todoSchema = new mongoose.Schema({
    title: {
        type: 'string',
        required: true
    },
    completed: {
        type: 'boolean',
        required: true
    },
    assignedTo: {
        type: 'string',
        required: true
    }
}, {
    timestamps: true
})

const TodoModel = mongoose.model(dbCollection, todoSchema)

export default TodoModel
