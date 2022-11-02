import { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Grid, TextField } from "@mui/material";
import { createContract } from "../../services/db/contracts.service";
import { useWeb3React } from "@web3-react/core";
import { useRouter } from "next/router";

const Deployer = () => {
  const { account } = useWeb3React();
  const [contractName, setContractName] = useState<string>("");
  const [contractSymbol, setContractSymbol] = useState<string>("");
  const [ascii, setAscii] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onDeploy = async () => {
    if (!!contractName && !!contractSymbol && !!ascii && !!account) {
      setIsLoading(true);
      await createContract({
        name: contractName,
        symbol: contractSymbol,
        ascii,
        isDeployed: true,
        network: "goerli",
        createdBy: account,
      });
      setIsLoading(false);
      router.push("/");
    } else if (!account) {
      alert("Please connect your wallet and try again");
    } else {
      alert("Please fill out all the fields");
    }
  };
  return (
    <Box p={4}>
      <Container
        maxWidth="sm"
        sx={{ minHeight: "80vh", boxShadow: "0 8px 18px -4px lightblue" }}
      >
        <Box>
          <Grid container alignItems="center" rowSpacing={2}>
            <Grid item xs={12}>
              <Box>
                <TextField
                  label="Contract Name"
                  fullWidth
                  value={contractName}
                  onChange={(e) => setContractName(e.target.value)}
                ></TextField>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} alignItems="center">
              <Box>
                <TextField value="ERC721" label="Type" />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <TextField
                  label="Symbol"
                  fullWidth
                  value={contractSymbol}
                  onChange={(e) => setContractSymbol(e.target.value)}
                ></TextField>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <TextField
                multiline
                label="ASCII Mark"
                fullWidth
                minRows={2}
                value={ascii}
                onChange={(e) => setAscii(e.target.value)}
              />
            </Grid>
          </Grid>
        </Box>
        <Box display="flex" justifyContent="end" m={2}>
          <Button
            variant="outlined"
            disabled={!(contractName && contractSymbol) || isLoading}
            onClick={onDeploy}
          >
            Deploy
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
export default Deployer;
