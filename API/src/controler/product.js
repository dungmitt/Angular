import category from "../model/category";
import product from "../model/product";
export const addProduct = async (req, res) => {
  try {
    const data = await product.create(req.body);
    await category.findByIdAndUpdate(data.categoryId, {
      $addToSet: {
        products: data._id,
      },
    });
    if (!data) {
      return res.status(400).json({
        message: "không thêm được sản phẩm",
      });
    }
    return res.status(200).json({
      message: "thêm sản phẩm thành công",
      data,
    });
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
export const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await product.findOneAndUpdate({ _id: id }, body, {
      new: true,
    });
    if (!data) {
      return res.status(400).json({
        message: "Cập nhập thất bại",
      });
    }
    return res.json({ message: "Cập nhập thành công", data });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};
export const removeProduct = async (req, res) => {
  try {
    const data = await product.findByIdAndDelete(req.params.id);
    return res.json({ message: "Xóa thành công", data });

  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};
export const getAllProduct = async (req, res) => {
    try {
        const data = await product.find();
        return res.status(200).json({
            message: "đây là tất cả sản phẩm",
            data,
        })
    } catch (error) {
        return res.status(400).json({
            message: "không tìm được"
        })
    }
}
export const getOneproduct = async (req,res)=>{
    try {
        const data = await product.findById(req.params.id);
        return res.status(200).json({
            message: "tìm được 1 sản phẩm",
            data,
        })
    } catch (error) {
        return res.status(400).json({
            message : "lỗi"
        })
    }
}