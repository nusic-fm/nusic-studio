import { Box } from "@mui/material";
import ConnectButton from "../ConnectButton";

const Header = () => {
  return (
    <Box p={1} mb={1} display="flex" justifyContent={"end"}>
      <ConnectButton />
    </Box>
  );
};

export default Header;
