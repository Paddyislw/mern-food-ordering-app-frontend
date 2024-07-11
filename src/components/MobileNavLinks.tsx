import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
    const { logout } = useAuth0();
  return (
    <>
      <Link
        to="/user-profile"
        className="flex bg-white items-center font-bold hover:text-primary"
      >
        User Profile
      </Link>
      <Button
        className="flex flex-1 font-bold  text-white"
        onClick={() => logout()}
      >Logout</Button>
    </>
  );
};

export default MobileNavLinks;
