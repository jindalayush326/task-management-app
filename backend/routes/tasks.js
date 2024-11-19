const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// GET /tasks: Retrieve all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
});

// GET /tasks/:id: Retrieve a specific task
router.get('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ error: 'Task not found' });
        res.json(task);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch the task' });
    }
});

// POST /tasks: Create a new task
router.post('/', async (req, res) => {
    const { title, description, due_date } = req.body;
    try {
        const task = new Task({ title, description, due_date });
        await task.save();
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({ error: 'Failed to create task' });
    }
});

// PUT /tasks/:id: Update an existing task
router.put('/:id', async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!updatedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.json(updatedTask);
    } catch (err) {
        res.status(400).json({ error: 'Failed to update task' });
    }
});

// DELETE /tasks/:id: Delete a task
router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).json({ error: 'Task not found' });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete task' });
    }
});

// PATCH /tasks/:id/complete: Mark a task as complete
router.patch('/:id/complete', async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            { status: 'completed', updatedAt: new Date() },
            { new: true }
        );
        if (!task) return res.status(404).json({ error: 'Task not found' });
        res.json(task);
    } catch (err) {
        res.status(500).json({ error: 'Failed to mark task as complete' });
    }
});

module.exports = router;
