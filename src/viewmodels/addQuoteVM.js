import { useState } from 'react';
import { saveQuote } from '../models/quoteModel';

const useAddQuoteVM = (getQuotes) => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [language, setLanguage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSaveQuote = async () => {
    setLoading(true);
    setError(null);
    try {
      const newQuote = { quote, author, language };
      await saveQuote(newQuote)
      await getQuotes();
      setQuote('');
      setAuthor('');
      setLanguage('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    quote,
    setQuote,
    author,
    setAuthor,
    language,
    setLanguage,
    loading,
    error,
    handleSaveQuote,
  };
};

export default useAddQuoteVM;
