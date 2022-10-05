import { Schema, model } from 'mongoose'

const dbCollection = process.env.MONGODB_COLLECTION

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true
    },
    assignedTo: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const TodoModel = model(dbCollection, todoSchema)

export default TodoModel
