import conf from '../Config/Config.js'
import {Client , Account, ID} from "appwrite";

// Create a Class
export class AuthService{

    // Create a Client and Account
    constructor() {
        this.client = new Client()
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        
        this.account = new Account(this.client);
    }

    // Create the Account (Sign-Up)
    async createAccount({email , password , text}){
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, text);
            if (userAccount) {
                // Call Method so that user can directyly log in after creating a account
                return this.logIn({email, password});
            } else {
                return userAccount;
            }
        }
        catch(error){ 
            throw error;
        }
    }

    // Log In to an existing Account(Sign-In)
    async logIn({email, password}) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    // Current User Info
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log(`Appwrite serive :: getCurrentUser :: error, ${error}`);
        }
        return null;
    }
    

    // Log-Out all Session
    async logOut(){
        try{
           await this.account.deleteSessions();
        }
        catch(error){
            console.log(`Log out failed : ${error}`)
        }
    }

    // Forgot Password

}

// Create a object for the class
const authService = new AuthService();

export default authService;