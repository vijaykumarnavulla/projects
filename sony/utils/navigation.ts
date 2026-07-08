// app/utils/navigation.ts
import { useRouter } from 'expo-router';

export const useNavigation = () => {
  const router = useRouter();

  const navigate = (path: any) => {
    router.push(path);
  };

  return { navigate };
};