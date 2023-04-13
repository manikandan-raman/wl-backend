module.exports = (err, req, res, next) => {
    const errorMessage = {};
    if(err.name === 'ValidationError') {
        Object.keys(err.errors).forEach((key) => errorMessage[key] = err.errors[key].message);
    } else if(err.name === 'MongoServerError') {
        if(err.code === 11000) {
            errorMessage[Object.keys(err.keyValue)[0]] = `Duplicate entry for ${Object.keys(err.keyValue)[0]}`;
        }
    } else {
        return res.status(500).json({
            error: 'An unknown error occured'
        });
    }
    return res.status(400).json({
        error: errorMessage
    });
}