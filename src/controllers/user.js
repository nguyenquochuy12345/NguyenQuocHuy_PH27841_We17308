import axios from "axios";
import dotenv from "dotenv";
dotenv.config();


export const getAll = async (req, res) => {
  try {
    const { data: users } = await axios.get(
      `${process.env.API_URI}`
    );
    
    if (users.length === 0) {
      res.send({
        messenger: "Danh sách người dùng trống!",
      });
    }
    return res.status(200).json(users);
  } catch (error) {
    res.status(500).send({
      messenger: error,
    });
  }
};

export const getDetail = async (req, res) => {
  try {
    const { data: user } = await axios.get(
      `${process.env.API_URI}/${req.params.id}`
    );
    if (!user) {
      res.send({
        messenger: "Sản phẩm không tồn tại",
      });
    }
    return res.status(200).json(user);
  } catch (error) {
    res.status(500).send({
      messenger: error,
    });
  }
};

export const create = async (req, res) => {
  try {
    const { data: user } = await axios.post(
      `${process.env.API_URI}`,
      {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone
      }
    );
    if (!user) {
      res.send({
        messenger: "Thêm sản phẩm thất bại",
      });
    }
    
    return res.status(200).json(user);
  } catch (error) {
    res.status(500).send({
      messenger: error,
    });
  }
};

export const update = async (req, res) => {
  try {
    const { data: user } = await axios.put(
      `${process.env.API_URI}/${req.params.id}`,
      req.body
    );
    if (!user) {
      res.send({
        messenger: "Cập nhật sản phẩm thất bại",
      });
    }
    return res.status(200).json(user);
  } catch (error) {
    res.status(500).send({
      messenger: error,
    });
  }
};

export const remove = async (req, res) => {
  try {
    await axios.delete(`${process.env.API_URI}/${req.params.id}`);
    return res.send({
      messenger: "Xoá sản phẩm thành công!",
    });
  } catch (error) {
    res.send({
      messenger: error,
    });
  }
};


export const updateMas = async (req, res) => {
    try {
        
        const { data: user } = await axios.patch(
          `${process.env.API_URI}/${req.params.id}`,
           
          {
            name: req.body.name,
            username: req.body.username,
            email: req.body.email,
            phone: req.body.phone
          }
        
        );
        console.log(req.body);

        
        if (!user) {
          res.send({
            messenger: "Cập nhật sản phẩm thất bại",
          });
        }
        
        return res.status(200).json(user);
      } catch (error) {
        res.status(500).send({
          messenger: error,
        });
      }
  };
