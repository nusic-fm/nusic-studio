import { Box, Button, Chip, Tooltip } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import useAuth from "../../hooks/useAuth";

const ConnectButton = () => {
  const { login } = useAuth();
  const { account } = useWeb3React();

  return (
    <Box>
      {account ? (
        <Tooltip title={account}>
          <Chip
            clickable
            label={`${account.slice(0, 6)}...${account.slice(
              account.length - 4
            )}`}
            style={{ marginLeft: "auto" }}
          />
        </Tooltip>
      ) : (
        <Button variant="contained" onClick={login} size="small">
          Connect
        </Button>
      )}
    </Box>
  );
};

export default ConnectButton;
