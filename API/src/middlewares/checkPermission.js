import jwt from "jsonwebtoken";
import auth from "../model/auth";

export const checkPermission = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(400).json({
        message: "Bạn chưa đăng nhập",
      });
    }
    const token = req.headers.authorization.split(" ")[1];
    const { _id } = await jwt.verify(token, "bansach");
    const user = await auth.findById(_id);
    if (user.role !== "admin") {
      return res.status(400).json({
        message: "Bạn không có quyền truy cập vào tài nguyên này",
      });
    }
    next();
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
