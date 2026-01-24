const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(
            requestHandler(req, res, next) //executes function
        ).catch((err) => next(err)); // pass error to next middleware
    };
};

export { asyncHandler };

//try-catch
/*
const asyncHandler = (fn) => async (req,res,next) => {
    try{
        await fn(req,res,next);
    }catch(err){
        res.status(err.code || 500).jsom({
            success: false,
            message: err.message,
        })
    }
}
*/