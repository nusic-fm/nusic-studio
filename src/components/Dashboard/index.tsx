import { Box, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useWeb3React } from "@web3-react/core";
import Overview from "../Overview";

const Dashboard = () => {
  const { account } = useWeb3React();

  return (
    <Container sx={{ p: 4 }}>
      {account ? (
        <Overview account={account} />
      ) : (
        <Box>
          <Typography align="center">
            Connect wallet you view your contracts
          </Typography>
        </Box>
      )}
    </Container>
  );
};

export default Dashboard;
