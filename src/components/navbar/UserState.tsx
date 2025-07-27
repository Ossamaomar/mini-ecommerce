
import { Button } from "../ui/button";
import { useNavigate } from "react-router";

export default function UserState() {
  const navigate = useNavigate();
  return <Button onClick={() => navigate("/login")}>Login</Button>;
}
