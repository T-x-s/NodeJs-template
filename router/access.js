const express = require('express');
const router = express.Router();

// 导入用户路由处理函数对应的模块
const registerHandler = require('../router_handler/access')

// 1. 导入验证表单数据的中间件
const expressJoi = require('@escook/express-joi')
// 2. 导入需要的验证规则对象
// const {  } = require('../schema/access')
// 获取车辆列表数据的路由
router.get("/getRegistrationList", registerHandler.getVehicleRegistrationList)
// 获取车位数据的路由
router.get("/getVehicleInfo", registerHandler.getVehicleInfo)
// 新增车辆登记数据的路由
router.post("/postAddVehicle", registerHandler.postAddVehicle)

module.exports = router