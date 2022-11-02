import { Contract } from "./Contract";

export interface User {
  contracts: Contract[];
  address: string;
}
