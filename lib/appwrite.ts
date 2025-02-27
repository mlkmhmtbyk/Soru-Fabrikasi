import { Account, Avatars, Client, OAuthProvider } from "react-native-appwrite";
import * as Linking from "expo-linking";
import { openAuthSessionAsync } from "expo-web-browser";
import { ID } from "react-native-appwrite";
import axios from "axios";
import User from "@/models/User";

export const config = {
  platform: "com.factory.soruFabrikasi",
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
};

export const client = new Client();

client
  .setEndpoint(config.endpoint!)
  .setProject(config.projectId!)
  .setPlatform(config.platform!);

export const avatar = new Avatars(client);
export const account = new Account(client);

export async function signUp(email: string, password: string, name: string) {
  try {
    const promise = account.create(ID.unique(), email, password, name);

    promise.then(
      function (response) {
        console.log("signUP response:", response); // Success
      },
      function (error) {
        console.log(error); // Failure
      }
    );

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function login(email: string, password: string) {
  try {
    const response = await axios.post(
      `${config.endpoint!}/account/sessions`,
      {
        email,
        password,
      },
      {
        headers: {
          "X-Appwrite-Project": config.projectId!,
        },
      }
    );

    if (response.status === 201 && response.data?.userId) {
      console.log("Login successful:", response.data.userId);
      const userData: User = {
        $id: response.data.userId,
        email: response.data?.providerUid,
        name: response.data?.name,
        avatar: avatar?.getInitials(response.data.name).toString(),
      };
      let user = await getUser();
      userData.name = user.name;
      userData.avatar = avatar?.getInitials(user.name).toString();
      console.log("userName:", user.name);
      console.log("userAvatar:", userData.avatar);

      if (userData.name && userData.email && userData.avatar && userData.$id) {
        return userData;
      } else {
        console.error("Login failed: Invalid response data");
        return null;
      }
    }
  } catch (error: any) {
    console.error(
      "Appwrite error on login:",
      error.response ? error.response.data : error
    );
    return null;
  }
}

export async function loginWithGoogle() {
  try {
    const redirectUri = Linking.createURL("/home");

    const response = await account.createOAuth2Token(
      OAuthProvider.Google,
      redirectUri
    );

    if (!response) {
      throw new Error("Failed to login");
    }

    const browserResult = await openAuthSessionAsync(
      response.toString(),
      redirectUri
    );

    if (browserResult.type !== "success") {
      throw new Error("Failed to login");
    }

    const url = new URL(browserResult.url);

    const secret = url.searchParams.get("secret")?.toString();
    const userId = url.searchParams.get("userId")?.toString();

    if (!secret || !userId) {
      throw new Error("Failed to login");
    }

    const session = await account.createSession(userId, secret);

    if (!session) {
      throw new Error("Failed to login");
    }

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

// Mevcut session'ı almak
export async function getCurrentSession() {
  try {
    const response = await axios.get(
      `${config.endpoint}/account/sessions/current`,
      {
        headers: {
          "X-Appwrite-Project": config.projectId!,
        },
        withCredentials: true, // Çerez aracılığıyla oturum doğrulaması yapılacak
      }
    );
    console.log("Current session:", response.data);
    console.log("Current user Name:", response.data.name);
    return response.data;
  } catch (error: any) {
    console.error(
      "Failed to get session:",
      error.response?.data || error.message
    );
    return null;
  }
}

// Oturum silme işlemi
export async function logout() {
  try {
    const session = await getCurrentSession();
    if (!session) throw new Error("No active session found");

    // Oturumu silmek
    const response = await axios.delete(
      `${config.endpoint}/account/sessions/${session.$id}`,
      {
        headers: {
          "X-Appwrite-Project": config.projectId!,
        },
      }
    );

    console.log("Logout successful:", response.data);
    return true;
  } catch (error: any) {
    console.error("Logout failed:", error.response?.data || error.message);
    return false;
  }
}

export async function getUser() {
  try {
    const response = await axios.get(`${config.endpoint}/account`, {
      headers: {
        "X-Appwrite-Project": config.projectId!,
        // API Key kullanılıyor
      },
      withCredentials: true,
    });
    console.log("getuserResponseData", response.data.name);
    return response.data;
  } catch (error: any) {
    console.error("Failed to get user:", error.response?.data || error.message);
    return null;
  }
}

// Uçmayı bekliyor
export async function getCurrentUser() {
  try {
    const response = await account.get();

    if (response.$id) {
      const userAvatar = avatar.getInitials(response.name);
      console.log("response getCurrentUser:", response, userAvatar);
      return { ...response, avatar: userAvatar.toString() };
    }
  } catch (error) {
    console.log(error);
    return false;
  }
}
