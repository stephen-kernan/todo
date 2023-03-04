import { Button } from "@mui/material";
import styles from "./BasicButton.module.scss";

export const BasicButton = ({
  label,
  onClick,
  variant = "contained",
  size = "md",
  color = "primary",
  ...props
}) => {
  return (
    <Button
      className={styles.basicButton}
      variant={variant}
      color={color}
      onClick={onClick}
      {...props}
    >
      {label}
    </Button>
  );
};
