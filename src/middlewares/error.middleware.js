import AppError from "../errors/error.js";

function errorHandler(err, req, res, next) {
    if (err instanceof AppError) {
        if (err.isOperational) {
            res.status(err.statusCode).send('error', { message: err.message });
        } else {
            console.error('Unexpected error:', err);
            res.statusCode(err.statusCode).send('error', { message: err.message || 'An unexpected error occurred' });
        }

    } else {
        console.error(err);
        res.status(500).send('error', { message: 'Internal Server Error' });
    }}

export default errorHandler;