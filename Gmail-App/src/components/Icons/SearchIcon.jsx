import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
const SearchIcon = (props) => {
  const color = props.color ? props.color : "#1c1c1e";
  const scale = props.scale ? props.scale : 1;
  return (
    <SvgIcon>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        style={{ marginLeft: "10px", transform: `scale(${scale})` }}
      >
        <path d="M14.3226 21.7522C15.9197 21.7522 17.4164 21.27 18.6619 20.4464L23.0615 24.856C23.3527 25.1372 23.7244 25.2778 24.1262 25.2778C24.9599 25.2778 25.5726 24.6249 25.5726 23.8013C25.5726 23.4196 25.442 23.0479 25.1608 22.7667L20.7914 18.3772C21.6954 17.0914 22.2277 15.5345 22.2277 13.847C22.2277 9.4977 18.6719 5.94189 14.3226 5.94189C9.98333 5.94189 6.41748 9.4977 6.41748 13.847C6.41748 18.1964 9.97328 21.7522 14.3226 21.7522ZM14.3226 19.6428C11.1385 19.6428 8.52686 17.0312 8.52686 13.847C8.52686 10.6629 11.1385 8.05127 14.3226 8.05127C17.5068 8.05127 20.1184 10.6629 20.1184 13.847C20.1184 17.0312 17.5068 19.6428 14.3226 19.6428Z" />
      </svg>
    </SvgIcon>
  );
};
export default SearchIcon;
