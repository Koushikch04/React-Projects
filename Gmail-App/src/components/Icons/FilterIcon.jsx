import SvgIcon from "@mui/material/SvgIcon";

const FilterIcon = () => {
  return (
    <SvgIcon>
      <svg
        class="bi bi-filter-circle"
        fill="#157efb"
        height="24"
        viewBox="0 0 16 16"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M7 11.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z" />
      </svg>
    </SvgIcon>
  );
};

export default FilterIcon;
