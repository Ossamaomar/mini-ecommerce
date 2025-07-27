import { useTheme } from "@/contexts/DarkModeContext";
import { ClipLoader } from "react-spinners";

export default function Loader() {
  const {theme} = useTheme();
  return (
    <div className="w-full h-full flex justify-center  items-center dark:text-white">
      <ClipLoader color={`${theme === "dark" ? "#fff" : "#000"} `} />
    </div>
  );
}
