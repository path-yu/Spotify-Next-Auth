import CircularProgress from "@mui/material/CircularProgress";
export default function Center() {
  return (
    <CircularProgress
      size={60}
      thickness={4}
      sx={{
        color: "#1BC458",
      }}
    />
  );
}
