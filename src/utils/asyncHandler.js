// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req, res, next);
//   } catch (error) {
//     res.status(err.code || 500).json({
//       message: err.message,
//       success: false,
//     });
//   }
// };

// export default asyncHandler

const asyncHandler = (reqHandler) => {
  (req,res,next) => {
    Promise.resolve(reqHandler(req,res,next))
    .catch((err)=>{
      next(err)
    })
  }
}