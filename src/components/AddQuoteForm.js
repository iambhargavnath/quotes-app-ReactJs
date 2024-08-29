import React from 'react';
import './style/AddQuoteForm.css';

const AddQuoteForm = ({
  quote,
  setQuote,
  author,
  setAuthor,
  language,
  setLanguage,
  handleSaveQuote,
  loading,
  error,
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleSaveQuote();
  };

  return (
    <div className="form-container">
      <h1>Add Quote</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="quote">Quote:</label>
          <input
            type="text"
            id="quote"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="language">Language:</label>
          <input
            type="text"
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Saving...' : 'Save'}
        </button>
        {error && <p className="error-message">Error: {error}</p>}
      </form>
    </div>
  );
};

export default AddQuoteForm;
