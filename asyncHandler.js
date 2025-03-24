/**
 * Async handler utility for Express routes
 * Wraps async route handlers to catch errors and forward them to Express error handling middleware
 */

/**
 * Wraps async route handlers to automatically catch errors
 * @param {Function} fn - Async route handler function
 * @returns {Function} Express middleware function
 */
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = {
  asyncHandler
}; 