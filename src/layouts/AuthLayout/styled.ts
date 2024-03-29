import { styled } from "@mui/material/styles";

import bg from "../../assets/img/welcome.jpeg";


export const Wrapper = styled("div")({
  position: "relative",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  backgroundImage: `url(${bg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundColor: "#ccc",
  "&:before": {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.75)",
  }
});

export const Paper = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  minHeight: "550px",
  width: "100%",
  maxWidth: "500px",
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  marginLeft: "auto",
  marginRight: "auto",
  padding: `${theme.spacing(4)}`,
  borderRadius: theme.spacing(1),
  backgroundColor: "#101010",
  boxShadow: "0 0 30px 6px rgba(0,0,0,0.75)",
}));