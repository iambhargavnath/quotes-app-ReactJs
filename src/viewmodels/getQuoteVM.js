import { useState, useEffect } from 'react';
import { fetchQuotes } from '../models/quoteModel';

const useGetQuoteVM = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getQuotes = async () => {
    setLoading(true);
    setError(null);
    try {
        const data = await fetchQuotes();
        const sortedQuotes = data.sort((a, b) => b.id - a.id);
        setQuotes(sortedQuotes);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return { quotes, loading, error, getQuotes };
};

export default useGetQuoteVM;
