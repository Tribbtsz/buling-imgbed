import { Hono } from 'hono'
import { imageController } from '../controllers/imageController'
import { authMiddleware } from '../middlewares/authMiddleware'

const imageRoutes = new Hono()

// 修改这里：只对需要认证的路由使用中间件
imageRoutes.post('/upload', (c, next) => authMiddleware(c.env)(c, next), imageController.uploadImage)
imageRoutes.delete('/delete', (c, next) => authMiddleware(c.env)(c, next), imageController.deleteImages)
imageRoutes.post('/list', (c, next) => authMiddleware(c.env)(c, next), imageController.listImages)

// 新增：无需认证的上传路由
imageRoutes.post('/upload-with-key', imageController.uploadImageWithKey)

export { imageRoutes } 