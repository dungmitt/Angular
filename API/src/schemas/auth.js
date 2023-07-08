import Joi from "joi";
export const checkUse = Joi.object({
  username: Joi.string().required().messages({
    "string.emply": "Bạn chưa nhập tên",
    "any.required": "Bắt buộc phải nhập tên",
  }),
  email: Joi.string().required().messages({
    "string.emply": "Email không được để trống",
    "ant.required": "Bặt buộc phải điền email",
    "string.email": "Nhập không đúng định dạng Email",
  }),
  password: Joi.string().required().min(8).messages({
    "string.emply": "Bạn chưa nhập mật khẩu",
    "any.required": "Bắt buộc phải nhập mật khẩu",
    "string.min": "Mật khẩu ít nhất phải có 8 ký tự",
  }),
  confirmPassword: Joi.string().required().valid(Joi.ref("password")).messages({
    "string.emply": "Bạn chưa nhập phần confirm Mật khẩu",
    "any.required": "Bặt buộc phải nhập confirm mật khẩu",
    "any.only": "Mật khẩu xác nhập không khớp",
  }),
});

export const validatesignin = Joi.object({
  email: Joi.string().required().messages({
    "string.emply": "Email không được để trống",
    "ant.required": "Bặt buộc phải điền email",
    "string.email": "Nhập không đúng định dạng Email",
  }),
  password: Joi.string().required().min(8).messages({
    "string.emply": "Bạn chưa nhập mật khẩu",
    "any.required": "Bắt buộc phải nhập mật khẩu",
    "string.min": "Mật khẩu ít nhất phải có 8 ký tự",
  })
}); 