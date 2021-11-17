import PostService from "./PostService.js"
import User from "./User.js";

class PostController {
     async getAll (req, res) {
        try {
            const users = await User.find()
            return res.json(users)
            
        } catch (e) {
            res.status (500).json(e)
        }

    }
    async update(req, res) {
        try {
            const updatedUser = await PostService.update(req.body);
            return res.json({updatedUser});
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async getOne(req, res) {
        try {
            const post = await PostService.getOne(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController;