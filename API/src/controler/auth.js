import auth from "../model/auth";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { checkUse, validatesignin } from "../schemas/auth";
export const Signup = async (req, res) => {
  try {
    const { error } = checkUse.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }
    const userExits = await auth.findOne({ email: req.body.email });
    if (userExits) {
      return res.status(400).json({
        message: "Email đã tồn tại",
      });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await auth.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
    const accessToken = jwt.sign({ _id: user._id }, "bansach", {
      expiresIn: "1d",
    });
    return res.status(200).json({
      message: "Đăng ký thành công",
      accessToken,
      user,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const Signin = async (req, res) => {
  try {
    const { error } = validatesignin.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }
    const { email, password } = req.body
    const user = await auth.findOne({ email })
    if (!user) {
      return res.status(400).json({ message: "tài khaonr không tồn tải" })
    }

    const comperpass = await bcrypt.compare(password, user.password)
    if (!comperpass) {
      return res.status(400).json({ message: "mật khẩu không đúng" })
    }

    const accsettoken = jwt.sign({ _id: user._id }, "bansach", { expiresIn: "1d" })

    return res.status(200).json({
      message: "đăng nhập thành công",
      user,
      accsettoken
    })
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
}
