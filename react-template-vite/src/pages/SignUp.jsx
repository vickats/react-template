import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <h1>Sign Up</h1>
      <Button component={Link} to="/login">
        Create Account
      </Button>
    </>
  );
};
export default SignUp;
