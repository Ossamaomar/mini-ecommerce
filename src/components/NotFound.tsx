
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="text-center">
            <h1 className="text-9xl mb-10 text-teal-500 italic">404</h1>
            <Button onClick={() => navigate("/")} variant="ghost" className="bg-teal-500 text-medium text-white cursor-pointer">Back to home page</Button>
        </div>
    )
}

export default NotFound;
