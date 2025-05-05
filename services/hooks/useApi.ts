import { useState } from "react";

interface UseApiResponse<Data, Error> {
  data: Data | null;
  error: Error | null;
  isLoading: boolean;
  get: (queries: any, fetcher: any) => Promise<any>;
  post: (payload: any, fetcher: any) => Promise<any>;
  put: (payload: any, fetcher: any) => Promise<any>;
  patch: (payload: any, fetcher: any) => Promise<any>;
  remove: (payload: any, fetcher: any) => Promise<any>;
}

export const useApi = <Data = any, Error = any>(): UseApiResponse<
  Data,
  Error
> => {
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const get = async (queries: string, fetcher: any) => {
    setIsLoading(true);
    try {
      const response = await fetcher(queries);
      setData(response);
      return response;
    } catch (err: any) {
      if (err.response) {
        setError(err.response.data as Error);
        return err.response.data;
      } else setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  const post = async (payload: any, fetcher: any) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetcher(payload);
      setData(response);
      return response;
    } catch (err: any) {
      if (err.response) {
        setError(err.response.data as Error);
        return err.response.data;
      } else {
        setError(err as Error);
        return err;
      }
    } finally {
      setIsLoading(false);
    }
  };

  const put = async (payload: string, fetcher: any) => {
    setIsLoading(true);
    try {
      const response = await fetcher(payload);
      setData(response);
      return response;
    } catch (err: any) {
      if (err.response) {
        setError(err.response.data as Error);
        return err.response.data;
      } else setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  const patch = async (payload: string, fetcher: any) => {
    setIsLoading(true);
    try {
      const response = await fetcher(payload);
      setData(response);
      return response;
    } catch (err: any) {
      if (err.response) {
        setError(err.response.data as Error);
        return err.response.data;
      } else setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  };

  const remove = async (payload: any, fetcher: any) => {
    setIsLoading(true);
    try {
      const response = await fetcher(payload);
      setData(null);
      return response;
    } catch (err: any) {
      if (err.response) {
        setError(err.response.data as Error);
        return err.response.data;
      } else {
        setError(err as Error);
        return err;
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { data, error, isLoading, get, post, put, patch, remove };
};
