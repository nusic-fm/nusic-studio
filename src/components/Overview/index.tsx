import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import { useRouter } from "next/router";

const Overview = () => {
  const router = useRouter();

  return (
    <Box>
      {/* <Box>
        <Tabs>
          <Tab label="Overview"></Tab>
        </Tabs>
      </Box> */}
      <Box
        display={"flex"}
        justifyContent={{ md: "space-between", xs: "center" }}
        flexWrap="wrap"
        gap={4}
        borderBottom={"1px solid #c4c4c4"}
        p={1}
      >
        <Box>
          <Typography variant="h5" fontWeight={"bold"}>
            Your Contracts
          </Typography>
        </Box>
        <Box>
          <Button
            variant="outlined"
            size="small"
            onClick={() => {
              router.push("/new");
            }}
          >
            New Contract
          </Button>
        </Box>
      </Box>
      <Box mt={4}>
        <Typography align="center">No contracts available</Typography>
      </Box>
    </Box>
  );
};

export default Overview;
