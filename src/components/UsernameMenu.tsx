import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { DropdownMenu } from "./ui/dropdown-menu";
import { CircleUserRound } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";

const UsernameMenu = () => {
  const { user, logout } = useAuth0();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-primary gap-2">
        {/* {user?.picture ? (
          <img src={user?.picture} className="w-8 h-8 rounded-full"/>
        ) : (
          <CircleUserRound className="text-primary" />
        )} */}
        <CircleUserRound className="text-primary" />
        {user?.email}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white py-4 px-10 rounded border shadow-lg space-y-2">
        <DropdownMenuItem>
          <Link to={"/user-profile"} className="font-bold hover:text-primary">
            User Profile
          </Link>
        </DropdownMenuItem>

        <Separator />

        <DropdownMenuItem>
          <Button
            className="flex flex-1 font-bold hover:text-primary"
            onClick={() => logout()}
          >
            Logout
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsernameMenu;
