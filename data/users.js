let users = [];
let nextUserId = 1;

/**
 * Finds and returns all user items.
 * @returns {Array} An array of all user items.
 */
const findAll = () => {
    return users;
};

/**
 * Finds a user item by its ID.
 * @param {number|string} id The ID of the user item to find.
 * @returns {Object|null} The found user item or null if not found.
 */
const findById = (id) => {
    return users.find((user) => user.id === id);
};

/**
 * Adds a new user item.
 * @param {Object} user The user item to add. Must contain `name` and `email` properties.
 * @returns {Object} The added user item, including its generated ID.
 */
const add = (user) => {
    const newUser = { ...user, id: nextUserId++ };
    users.push(newUser);
    return newUser;
};

/**
 * Updates a user item by its ID.
 * @param {number|string} id The ID of the user item to update.
 * @param {Object} updateInfo An object containing the user item properties to update.
 * @returns {Object|null} The updated user item or null if not found.
 */
const updateById = (id, updateInfo) => {
    const index = users.findIndex(user => user.id === Number(id));
    if (index === -1) return null;
    users[index] = { ...users[index], ...updateInfo };
    return users[index];
};

/**
 * Deletes a user item by its ID.
 * @param {number|string} id The ID of the user item to delete.
 * @returns {Object|null} The deleted user item or null if not found.
 */
const deleteById = (id) => {
    const index = users.findIndex(user => user.id === Number(id));
    if (index === -1) return null;
    return users.splice(index, 1)[0];
};

module.exports = { findAll, findById, add, updateById, deleteById };
