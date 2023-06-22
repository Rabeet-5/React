const Signup = require('../models/signupModel');
const signupModel = require('../models/signupModel');

const createUser = async (req, res) => {
  const { email, password, name } = req.body;
  const obj = { email, password, name };

  try {
    const existingUser = await Signup.findOne({ email })
    if (existingUser) {
      res.send({ message: "User already exist on this email " }).status(401)
    }
    else {
      Signup.create(obj)
        .then((newUser) => {
          res.send({ message: "New User Created", newUser }).status(200);
        })
        .catch((e) => {
          res.send({ message: "Some fields ar missing", e }).status(404)
        })
    }

  } catch (error) {
    res.send({ message: "Credential error or Server error" }).status(404)
  }


}

const getUser = async (req, res) => {
  let { email, password } = req.body;
  let obj = { email, password };

  try {
    const user = await signupModel.findOne(obj);

    if (user) {
      res.status(404).send({ message: 'User not found' });
    } else {
      res.status(200).send({ message: 'User founded and Logged in' });
    }
  } catch (error) {
    res.status(500).send({ message: 'Server error' });
  }
};


//Logout Function 
// const logoutUser = (req, res) => {
//   try {
//     // Clear the session and remove the user's authentication status
//     req.session.destroy((error) => {
//       if (error) {
//         console.error("Error destroying session:", error);
//       }
//       res.status(200).send({ message: "User logged out successfully" });
//     });
//   } catch (error) {
//     res.status(500).send({ message: "Server error" });
//   }
// };

module.exports = { createUser, getUser };