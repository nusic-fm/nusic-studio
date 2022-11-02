import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Typography,
} from "@mui/material";
import { collection, query, where } from "firebase/firestore";
import { useRouter } from "next/router";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { CONTRACTS_COLLECTION } from "../../services/db/contracts.service";
import { db } from "../../services/firebase.service";

const Overview = (props: { account: string }) => {
  const { account } = props;
  const router = useRouter();

  const [contracts, loading, error] = useCollectionData(
    query(
      collection(db, CONTRACTS_COLLECTION),
      where("createdBy", "==", account)
    )
  );

  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={{ md: "space-between", xs: "center" }}
        flexWrap="wrap"
        gap={4}
        borderBottom="1px solid #eaeaea"
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
        {contracts && contracts.length > 0 ? (
          <Box display={"flex"} gap={2} flexWrap="wrap">
            {contracts.map((contract) => (
              <Box key={contract.name} width="30%">
                <Card>
                  <CardContent>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography variant="h4">{contract.name}</Typography>
                      <Typography>{contract.symbol}</Typography>
                    </Box>
                  </CardContent>
                  {/* <CardActions> */}
                  <Box display={"flex"} justifyContent={"end"} m={1}>
                    {contract.isDeployed ? (
                      <Chip
                        label={contract.network}
                        color="success"
                        variant="outlined"
                      />
                    ) : (
                      <Chip label="Deploy" variant="outlined" clickable />
                    )}
                  </Box>
                  {/* </CardActions> */}
                </Card>
              </Box>
            ))}
          </Box>
        ) : loading ? (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        ) : (
          <Typography align="center">No contracts available</Typography>
        )}
      </Box>
    </Box>
  );
};

export default Overview;
