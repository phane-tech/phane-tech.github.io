/**
 * Extracts all keys from the provided object.
 * 
 * @param {Object} obj - The object from which to extract keys.
 * @returns {Array|undefined} - An array of the object's keys or undefined if the input is not an object.
 */
export function extractObjectKeys(obj) {
    // Check if the input is a valid object
    if (typeof obj !== 'object' || obj === null) return undefined; 
    return Object.keys(obj);
}

/**
 * Extracts all values from the provided object.
 * 
 * @param {Object} obj - The object from which to extract values.
 * @returns {Array|undefined} - An array of the object's values or undefined if the input is not an object.
 */
export function extractObjectValues(obj) {
    // Check if the input is a valid object
    if (typeof obj !== 'object' || obj === null) return undefined; 
    return Object.values(obj);
}
