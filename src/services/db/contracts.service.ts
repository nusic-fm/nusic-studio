import { doc, updateDoc, addDoc, collection } from "firebase/firestore";
import { Contract } from "../../models/Contract";
import { db } from "../firebase.service";

export const CONTRACTS_COLLECTION = "contracts";

const createContract = async (contractDoc: Contract): Promise<void> => {
  try {
    const collectionRef = collection(db, CONTRACTS_COLLECTION);
    await addDoc(collectionRef, contractDoc);
  } catch (e) {
    console.error(e);
    alert("Error connecting to DB, please try again later");
  }
};

const updateContract = async (
  uid: string,
  obj: Partial<Contract>
): Promise<void> => {
  const contractRef = doc(db, CONTRACTS_COLLECTION, uid);
  await updateDoc(contractRef, obj);
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

export { createContract, updateContract };
