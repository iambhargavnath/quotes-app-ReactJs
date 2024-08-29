import { useState, useEffect } from 'react';
import { getQuoteById, updateQuote } from '../models/quoteModel';

const useUpdateQuoteVM = (id) => {
  const [currentId, setCurrentId] = useState(id);
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [language, setLanguage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const data = await getQuoteById(id);
        setCurrentId(data.id);
        setQuote(data.quote);
        setAuthor(data.author);
        setLanguage(data.language);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchQuote();
  }, [id]);

  const handleUpdate = async () => {
    setLoading(true);
    setError(null);
    try {
      await updateQuote(id, { id:currentId, quote, author, language });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    currentId,
    setCurrentId,
    quote,
    setQuote,
    author,
    setAuthor,
    language,
    setLanguage,
    loading,
    error,
    handleUpdate,
  };
};

export default useUpdateQuoteVM;
