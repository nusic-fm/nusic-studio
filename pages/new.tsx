import { Box } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import Deployer from "../src/components/Deployer";

const NewContract = () => {
  const { account } = useWeb3React();
  return (
    <Box>
      <Deployer />
    </Box>
  );
};

export default NewContract;
