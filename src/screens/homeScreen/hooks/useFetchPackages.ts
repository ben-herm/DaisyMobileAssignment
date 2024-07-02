// src/hooks/useFetchPackages.ts
import {useState, useEffect} from 'react';
import {Package} from '../../../common/interfaces';
import {fetchPackages} from '../../../services/api/PackagesApi';

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
        setError('Failed to fetch packages');
      } finally {
        setLoading(false);
      }
    };
    getPackages();
  }, []);

  return {packages, loading, error};
};
