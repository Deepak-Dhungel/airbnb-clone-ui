import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { FormControl, InputLabel, TextField } from "@mui/material";
import "../../styles/components/loginModalStyles.css";
import { IoCloseOutline } from "react-icons/io5";
import GoogleIcon from "../../assets/images/google.webp";
import { GoogleAuthProvider, User, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase.config";
import { AuthenticationContext } from "../../context/AuthenticationContext";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Login({ open }: any) {
  const { openLoginModal, setOpenLoginModal, loginWithGoogle } =
    React.useContext(AuthenticationContext);

  function openPopup() {}
  function closePopup() {
    setOpenLoginModal(false);
  }

  return (
    <div className="modal_container">
      <Dialog
        open={openLoginModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={closePopup}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent
          sx={{
            width: "550px",
            height: "80dvh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "12px",
          }}
        >
          <div className="modal_header">
            <span className="modal_title">Log in or sign up</span>
            <span className="dialog_close_btn" onClick={closePopup}>
              <IoCloseOutline size={30} />
            </span>
          </div>

          <div className="modal_login_form">
            <span className="form_title">Welcome to Airbnb</span>
            <form action="" style={{ width: "100%" }}>
              <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                <TextField
                  label="Email address"
                  id="filled-input-email"
                  variant="filled"
                />
                <TextField
                  label="password"
                  id="filled-input-password"
                  variant="filled"
                />
                <button className="submit_login_btn">Continue</button>
              </FormControl>
            </form>
          </div>

          <span>or</span>
          <div className="login_with_google_btn" onClick={loginWithGoogle}>
            <img src={GoogleIcon} alt="icon" width={20} height={20} />
            <span>Continue with Google</span>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
