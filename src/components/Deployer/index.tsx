import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Grid, TextField } from "@mui/material";

const Deployer = () => {
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
                <TextField label="Contract Name" fullWidth></TextField>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} alignItems="center">
              <Box>
                <TextField value="ERC721" label="Type" />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <TextField label="Symbol" fullWidth></TextField>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <TextField multiline label="ASCII Mark" fullWidth minRows={2} />
            </Grid>
          </Grid>
        </Box>
        <Box display="flex" justifyContent="end" m={2}>
          <Button variant="outlined">Deploy</Button>
        </Box>
      </Container>
    </Box>
  );
};
export default Deployer;
