import { User } from './../model/userModel.js';

const registerUser = async (req, res) => {
    const {} = req.body
    console.log(req)
    res.json({msg : "ok"})
}
export { registerUser }
