let todos = [];
let nextTodoId = 1;

/**
 * Finds and returns all todo items.
 * @returns {Array} An array of all todo items.
 */
const findAll = () => {
    return todos;
};

/**
 * Finds a todo item by its ID.
 * @param {number|string} id The ID of the todo item to find.
 * @returns {Object|null} The found todo item or null if not found.
 */
const findById = (id) => {
    return todos.find((todo) => todo.id === Number(id));
};

/**
 * Adds a new todo item.
 * @param {Object} todo The todo item to add. Must contain `title` and `completed` properties.
 * @returns {Object} The added todo item, including its generated ID.
 */
const add = (todo) => {
    const newToDo = { ...todo, id: nextTodoId++ };
    todos.push(newToDo);
    return newToDo;
};

/**
 * Updates a todo item by its ID.
 * @param {number|string} id The ID of the todo item to update.
 * @param {Object} updateInfo An object containing the todo item properties to update.
 * @returns {Object|null} The updated todo item or null if not found.
 */
const updateById = (id, updateInfo) => {
    const index = todos.findIndex(todo => todo.id === Number(id));
    if(index === -1) return null;
    todos[index] = { ...todos[index], ...updateInfo };
    return todos[index];
};

/**
 * Deletes a todo item by its ID.
 * @param {number|string} id The ID of the todo item to delete.
 * @returns {Object|null} The deleted todo item or null if not found.
 */
const deleteById = (id) => {
    const index = todos.findIndex(todo => todo.id === Number(id));
    if (index === -1) return null;
    return todos.splice(index, 1)[0];
};

module.exports = { findAll, findById, add, updateById, deleteById };
