import { PublicClientApplication } from "@azure/msal-browser";

// Configure your Azure AD app settings
const msalConfig = {
    auth: {
        clientId: "ca8f95de-0f30-4f3a-8bc3-0770ccf16d88", // Application ID from Azure AD
        authority: `https://login.microsoftonline.com/7e1d2da5-2e10-4897-854f-55bfc2edd3f8`, // Tenant ID
        // local Redirect url
        redirectUri: "http://localhost:3000", // Redirect URI from Azure AD app registration
        
        // deployed Redirect url
        // redirectUri: "https://maidubaidashboards.netlify.app/", // Redirect URI from Azure AD app registration
    },
    
};

// Create MSAL instance
export const msalInstance = new PublicClientApplication(msalConfig);
