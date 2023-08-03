import { styled } from "@mui/material/styles";
import { FC, PropsWithChildren } from "react";
import { Typography } from "../Typography/Typography";


interface Props extends PropsWithChildren {
  fluid?: boolean;
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const StyledButton = styled("button")<{ fluid?: boolean }>(({ theme, fluid }) => ({
  position: "relative",
  minWidth: "136px",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  background: theme.palette.secondary.main,
  boxSizing: "border-box",
  "& *": {
    position: "relative",
    zIndex: 1,
  },
  "&:before": {
    position: "absolute",
    content: "\"\"",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "#333",
    transition: "transform 0.3s ease-out",
    transform: "scaleX(0)",
    transformOrigin: "0 50%",
    pointerEvents: "none",
  },
  "&:hover": {
    background: theme.palette.common.black,
    "&:before": {
      transform: "scaleX(1)",
    }
  },
  ...fluid && {
    width: "100%",
    justifyContent: "center",
  },
}));

export const PrimaryButton: FC<Props> = ({ icon, fluid, children, onClick }) => {
  return (
    <StyledButton fluid={fluid} onClick={onClick}>
      {icon}
      {children && (
        <Typography element="span" type="body_1">
          {children}
        </Typography>
      )}
    </StyledButton>
  )
};