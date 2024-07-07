import {useState, useEffect, useMemo} from 'react';
import {Package} from '../../../common/data/interfaces';
import {fetchPackages} from '../../../services/api/PackagesApi';
import {extractUniqueUsersAndPackages} from '../helpers';
import {useTranslation} from 'react-i18next';

export const useFetchPackages = () => {
  const {t} = useTranslation();
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getPackages = async (): Promise<void> => {
    try {
      const packagesData = await fetchPackages();
      setPackages(packagesData);
    } catch (err) {
      setError(t('usersList.error'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPackages();
  }, []);

  const refetchPackages = () => {
    setLoading(true);
    setError(null);
    getPackages();
  };

  const usersAndPackageList = useMemo(() => {
    return extractUniqueUsersAndPackages(packages);
  }, [packages]);

  return {...usersAndPackageList, loading, error, refetchPackages};
};
