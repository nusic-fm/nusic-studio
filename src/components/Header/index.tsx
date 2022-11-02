import { Box } from "@mui/material";
import { useRouter } from "next/router";
import ConnectButton from "../ConnectButton";

const Header = () => {
  const router = useRouter();
  return (
    <Box
      p={1}
      mb={1}
      display="flex"
      justifyContent={"space-between"}
      //   sx={{ bgcolor: "#573FC8" }}
      borderBottom="1px solid #eaeaea"
      alignItems="center"
    >
      <img
        src="/icon.png"
        width={"50px"}
        style={{ cursor: "pointer" }}
        onClick={() => router.push("/")}
      ></img>
      <ConnectButton />
    </Box>
  );
};

export default Header;
