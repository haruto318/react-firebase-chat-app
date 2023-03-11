import { MeetingRoom } from "@mui/icons-material";
import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";

interface Props{
  userName: any;
}

function SignOut( props: Props) {

  return (
    <div className="signout">
      <div className="basic-padding">
        <Button onClick={() => signOut(auth)} startIcon={<MeetingRoom />} style={{ fontSize: "18px"}}>Sing Out</Button>
      </div>
    </div>
  )
}

export default SignOut;

