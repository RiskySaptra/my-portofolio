import { Paper, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchField() {
  return (
    <Paper
      component="form"
      sx={{
        p: "1px 2px",
        display: "flex",
        alignItems: "center",
        width: 210,
        height: "30px",
        backgroundColor: "#419197",
        boxShadow: "none",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: "#F5FCCD", fontSize: 13 }}
        placeholder="Search"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton type="button" sx={{ p: "3px", color: "#F5FCCD" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
