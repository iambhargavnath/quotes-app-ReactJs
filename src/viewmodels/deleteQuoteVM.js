import { useState } from 'react';
import { deleteQuote } from '../models/quoteModel';

const useDeleteQuoteVM = (getQuotes) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDeleteQuote = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await deleteQuote(id);
      await getQuotes();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { handleDeleteQuote, loading, error };
};

export default useDeleteQuoteVM;
