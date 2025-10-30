import Paper from "@mui/material/Paper";
import { PropsWithChildren } from "react";

type CardProps = PropsWithChildren<{
  className?: string;
  elevation?: number;
}>;

export default function Card({ children, className, elevation = 0 }: CardProps) {
  return (
    <Paper className={className} elevation={elevation} variant="outlined" sx={{ borderColor: "divider" }}>
      {children}
    </Paper>
  );
}


