/**
 * Finds a matching element in the list based on the given value and optional key.
 * 
 * @param {Array} list - The array of objects or values to search through (required).
 * @param {*} value - The value to match (required).
 * @param {string} [key] - The key to compare when searching objects (optional).
 * 
 * @returns {*} - The first matching element or `undefined` if no match is found.
 */
export function getMatchingItem(list, value, key) {
    // If it is not List or Not provided the value will return undefined
    if (!Array.isArray(list) || !value) return undefined;
    // if user provided the key it will lookup through the key
    if (key) return list.find(item => item[key] === value);
    // if no key presents it will look the exact value of eact item
    else return list.find(item => item === value);
}

/**
 * Finds all matching elements in the list based on the given value and optional key.
 * 
 * @param {Array} list - The array of objects or values to search through (required).
 * @param {*} value - The value to match (required).
 * @param {string} [key] - The key to compare when searching objects (optional).
 * 
 * @returns {*} - The all matching elements or `undefined` if no match is found.
 */
export function getAllMatchingItems(list, value, key) {
    // If it is not List or Not provided the value will return undefined
    if (!Array.isArray(list)) return undefined;
    // if value is not provided will return the whole array
    if (!value) return list;
    // if user provided the key it will lookup through the key
    if (key) return list.filter(item => item[key] === value);
    // if no key presents it will look the exact value of eact item
    else return list.filter(item => item === value);
}

/**
 * Calculates the sum of values in a list.
 * 
 * @param {Array} list - The array of numbers or objects to sum up.
 * @param {string} [key] - Optional key to sum values from objects in the list.
 * @returns {number} - The sum of the values, or undefined if the list is empty or invalid.
 */
export function calculateSum(list, key) {
    // If it is not List or Not provided the value will return undefined
    if (!Array.isArray(list)) return undefined;
    // if user provided the key it will calculate through the key
    if (key) return list.reduce((acc, item) => acc + item[key], 0);
    // if no key presents it will calculte the values directly 
    else return list.reduce((acc, item) => acc + item, 0);
}

/**
 * Checks if all elements in the list match the specified value or key-value condition.
 * 
 * @param {Array} list - The array of objects or values to check.
 * @param {*} value - The value to compare against.
 * @param {string} [key] - The key in objects to compare the value against (optional).
 * @returns {boolean|undefined} - Returns true if all elements match the condition, false if not, or undefined if the input is invalid.
 */
export function checkIfAllValuesMatch(list, value, key) {
    // Ensure list is an array and value is provided
    if (!Array.isArray(list) || !value) return undefined;
    // If key is provided, check if all objects have the matching key-value pair
    if(key) return list.every(item=> item[key] === value );
    // If no key is provided, check if all items are equal to the value
    else return list.every(item=> item === value);
}