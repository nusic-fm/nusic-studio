import { doc, updateDoc, setDoc, getDoc, arrayUnion } from "firebase/firestore";
import { Contract } from "../../models/Contract";
import { db } from "../firebase.service";

const CONTRACTS_COLLECTION = "contracts";

const createUser = async (
  userAddress: string,
  userDoc: Contract
): Promise<void> => {
  try {
    const userRef = doc(db, CONTRACTS_COLLECTION, userAddress);
    const docRef = await getDoc(userRef);
    if (docRef.exists()) {
    } else {
      await setDoc(userRef, userDoc);
    }
  } catch (e) {}
};

const updateUserContracts = async (
  uid: string,
  newContractAddress: Partial<Contract>
): Promise<void> => {
  const contractRef = doc(db, CONTRACTS_COLLECTION, uid);
  await updateDoc(contractRef, {
    contracts: arrayUnion(newContractAddress),
  });
};

// const getUserDocsFromIds = async (ids: string[]) => {
//   const q = query(collection(db, "users"), where("uid", "in", ids));
//   const querySnapshots = await getDocs(q);
//   const users: User[] = [];
//   querySnapshots.forEach((doc) => {
//     users.push(doc.data() as User);
//   });
//   return users;
// };

export { createUser, updateUserContracts };
