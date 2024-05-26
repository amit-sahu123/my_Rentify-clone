import React from "react";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

const SideDrawer = ({
  open,
  closeDrawer,
  title,
  subtitle,
  contentTitle,
  children,
}) => {
  const theme = useTheme();
  return (
    <Drawer
      anchor={"right"}
      open={open}
      PaperProps={{
        sx: { width: "500px" },
      }}
    >
      <Paper
        variant="outlined"
        square
        sx={{
          backgroundColor: theme.palette.primary.main,
          padding: "20px 24px",
          width: "500px",
          position: "fixed",
          marginTop: 0,
          zIndex: 2,
        }}
      >
        <Stack direction="row" justifyContent={"space-between"} sx={{paddingRight:'40px'}}>
          <Typography
            sx={{
              color: theme.palette.common.white,
              fontWeight: theme.typography.fontWeightMedium,
              fontSize: theme.typography.body2.fontSize,
            }}
          >
            {title}
          </Typography>
          <img
            src="assets/close-circle.svg"
            alt="close-circle"
            onClick={() => closeDrawer(false)}
            style={{ cursor: "pointer" }}
          />
        </Stack>
        <Typography
          sx={{
            color: theme.palette.common.white,
            fontSize: theme.typography.fontSize,
            fontWeight: theme.typography.fontWeightLight,
          }}
        >
          {subtitle}
        </Typography>
      </Paper>
      <Stack spacing={1.5} p={"20px 24px"} mt={12} pb={18}>
        <Typography
          sx={{
            color: theme.palette.grey?.[900],
            fontSize: theme.typography.fontSize,
            fontWeight: theme.typography.fontWeightLight,
          }}
        >
          {contentTitle}
        </Typography>

        {children}
      </Stack>
    </Drawer>
  );
};

export default SideDrawer;
