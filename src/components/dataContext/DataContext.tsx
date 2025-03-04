import React, { createContext, useEffect, useState } from "react";

type ContextType = {
  movie: any;
  input: string | number;
  setInput: (value: string | number) => void;
  loading: boolean;
  error: string | null;
};

type ChildrenProp = {
  children: React.ReactNode;
};

export let MovieContext = createContext<ContextType | undefined>(undefined);

export default function DataContext({ children }: ChildrenProp) {
  let [movie, setMovie] = useState<any>([]);
  let [input, setInput] = useState<string | number>("avatar");
  let [loading, setLoading] = useState<boolean>(true);
  let [error, setError] = useState<string | null>(null);

  async function getData() {
    const apiKey = import.meta.env.VITE_OMDB_API_KEY;
    setLoading(true);
    setError(null);

    try {
      let res = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&s=${input}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch data from OMDB API");
      }

      let data = await res.json();
      console.log(data);

      if (data) {
        setMovie(data.Search || []);
      } else {
        setMovie([]);
        setError("No Movies Found");
      }

      setLoading(false);
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, [input]);

  return (
    <MovieContext.Provider value={{ movie, input, loading, error, setInput }}>
      {children}
    </MovieContext.Provider>
  );
}
