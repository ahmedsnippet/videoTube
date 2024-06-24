import { User } from "./../model/userModel.js";
import bcyrpt from "bcrypt";

const registerUser = async (req, res) => {
  const { email, username, password } = req.body;
  // console.log(email)

  try {
    const salt = 10;

    const hashedPassword = await bcyrpt.hash(password, salt);

    const user = await User.create({
      email: email,
      username: username,
      password: hashedPassword,
    });
    await user.save();
    res.status(200).send({
      message: "User Register Succesfully",
    });
  } catch (error) {
    console.log(error);
  }
};
export { registerUser };
