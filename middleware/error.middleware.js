// Desc: Error middleware to handle errors in the application
const errorMiddleware = (err, req, res, next) => {
  try {
    if (err) {
      return res.status(400).json({
        ...err,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export default errorMiddleware;
