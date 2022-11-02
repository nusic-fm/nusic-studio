export interface Contract {
  name: string;
  symbol: string;
  ascii: string;
  isDeployed: boolean;
  network: "goerli" | "mumbai" | "mainnet" | "polygon";
  createdBy: string;
}
