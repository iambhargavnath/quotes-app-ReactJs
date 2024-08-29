import React from 'react';
import AddQuoteForm from '../components/AddQuoteForm';
import useGetQuoteVM from '../viewmodels/getQuoteVM';
import useAddQuoteVM from '../viewmodels/addQuoteVM';
import useDeleteQuoteVM from '../viewmodels/deleteQuoteVM';
import Quote from '../components/Quote';
import './style/QuoteList.css';

const QuoteList = () => {
    const { quotes, loading, error, getQuotes } = useGetQuoteVM();
    const { quote, setQuote, author, setAuthor, language, setLanguage, 
      loading: addingLoading, error: addError, handleSaveQuote 
    } = useAddQuoteVM(getQuotes);
    const { handleDeleteQuote, 
      loading: deleteLoading, error: deleteError 
    } = useDeleteQuoteVM(getQuotes);
  
  
    return (
      <div className="App">
        <h1>Quotes</h1>
  
        <AddQuoteForm
          quote={quote}
          setQuote={setQuote}
          author={author}
          setAuthor={setAuthor}
          language={language}
          setLanguage={setLanguage}
          handleSaveQuote={handleSaveQuote}
          loading={addingLoading}
          error={addError}
        />
  
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error loading quotes: {error.message}</p>
        ) : (
          <div className="quotes-container">
            {quotes.map(quote => (
              <Quote 
                key={quote.id} 
                id={quote.id}
                quote={quote.quote} 
                author={quote.author} 
                language={quote.language} 
                onDelete={handleDeleteQuote}
              />
            ))}
          </div>
        )}
        {deleteLoading && <p>Deleting...</p>}
        {deleteError && <p style={{ color: 'red' }}>Error deleting quote: {deleteError}</p>}
      </div>
    );
  };

  export default QuoteList;
