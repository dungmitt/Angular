import category from "../model/category";


export const getAllCategory = async (req, res) => {
  try {
    const data = await category.find();
    if (data.length == 0) {
      return res.status(400).json({ message: "không có sản phẩm nào" });
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};


export const getOneCategory = async (req, res) => {
  try {
    const data = await category.findById(req.params.id)
    if (!data) {
      return res.status(400).json({ message: "không có sản phẩm nào" });
    }
    return res.status(200).json({ message: "lấy sản phẩm thành công", data });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};


export const addCategory = async (req, res) => {
  try {
    const data = await category.create(req.body);
    console.log(data);
    if (!data) {
      return res.status(400).json({ message: "không thêm được danh mục" });
    }
    return res.status(200).json({ message: "thêm danh mục thành công", data });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const data = await category.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(400).json({ message: "không xoá được danh mục" });
    }
    return res.status(200).json({ message: "xoá danh mục thành công", data });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};
export const updateCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await category.findOneAndUpdate({ _id: id }, body, {
      new: true,
    });
    if (!data) {
      return res.status(400).json({
        message: "Không cập nhập được danh mục",
      });
    }
    return res.status(200).json({
      message: "Cập nhập danh mục thành công",
      data,
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};
