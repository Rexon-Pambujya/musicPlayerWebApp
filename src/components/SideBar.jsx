import { ToggleButton } from "@mui/material";
import Image from "../assets/image.png";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";

const Sidebar = ({ onToggle }) => {
  return (
    <div className="lg:w-1/3 flex flex-col justify-between w-full">
      <div className="flex justify-between w-full lg:flex-col lg:h-[calc(100dvh-48px)] ">
        <div>
          <img
            src={Image}
            alt="Spotify icon"
            className="w-auto h-9 my-2 lg:m-0"
          />
        </div>
        <div className="flex gap-2 lg:flex-col flex-row">
          <div className="lg:hidden">
            <ToggleButton
              value="justify"
              aria-label="justified"
              onClick={onToggle}
            >
              <FormatAlignJustifyIcon className="text-white" fontSize="large" />
            </ToggleButton>
          </div>
          <img
            src="https://w7.pngwing.com/pngs/490/157/png-transparent-male-avatar-boy-face-man-user-flat-classy-users-icon-thumbnail.png"
            alt="Bottom avatar"
            className="w-10 h-10 rounded-full m-2 lg:m-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
