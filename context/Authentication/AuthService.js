import { auth, db } from "../../firebase-config"
import { signOut } from 'firebase/auth'
import { doc, getDoc } from "firebase/firestore";
const AuthService = {
    logout: async() =>{
        await signOut(auth);
    },
    logInWithEmail: async () =>{
        try{
            const userData = await signInWithEmailAndPassword(auth, email,password);
            //Will need to change this to the profile later
            return{
                user: userData
            };
        }catch(error){
            const errorCode = error.code;
            const errorMessage = error.message;
            return {
                error: errorMessage
            };
        }
    },
    getUsersCollectionData: async (uid) =>{
        const docRef = doc(db, "users", uid);
        
        const docSnap = await getDoc(docRef);
        return {
            userData:docSnap.data()
        };
    }

}
export default AuthService;