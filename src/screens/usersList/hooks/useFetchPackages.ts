import {useState, useEffect, useMemo} from 'react';
import {Package} from '../../../common/interfaces';
import {fetchPackages} from '../../../services/api/PackagesApi';
import {extractUniqueUsersFromPackages} from '../helpers';
import messages from '../constants';

export const useFetchPackages = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPackages = async () => {
      try {
        const packagesData = await fetchPackages();
        setPackages(packagesData);
      } catch (err) {
        setError(messages.errors.fetchPackages);
      } finally {
        setLoading(false);
      }
    };
    getPackages();
  }, []);

  const usersAndPackageList = useMemo(() => {
    return extractUniqueUsersFromPackages(packages);
  }, [packages]);

  return {...usersAndPackageList, loading, error};
};
