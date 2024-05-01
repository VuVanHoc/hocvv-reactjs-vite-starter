import { useState, useEffect } from "react";
import { secureStorage } from "../utils/secureStorage";
import { SecureStorageEnum } from "../types/secureStorage";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if accessToken exists in localStorage
    const accessToken = secureStorage.getItem(SecureStorageEnum.accessToken);
    setIsLoggedIn(accessToken ? true : false);
  }, []);

  return isLoggedIn;
};

export default useAuth;
