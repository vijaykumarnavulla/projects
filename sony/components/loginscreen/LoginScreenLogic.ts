import ApiService from "@/services/ApiService";

export const handleLogin = async (ipAddress: string, authKey: string) => {
    ApiService.setConfig(ipAddress, authKey);
   const res = await ApiService.send('appControl', 'getWebAppStatus', null);
   
  };