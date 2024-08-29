import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useUpdateQuoteVM from '../viewmodels/updateQuoteVM';
import './style/UpdateQuote.css';

const UpdateQuote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
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
  } = useUpdateQuoteVM(id);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleUpdate();
    navigate('/');
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="update-quote">
      <h1>Update Quote</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">ID:</label>
          <input 
            type="text" 
            id="id" 
            className="form-control" 
            value={currentId}
            onChange={(e) => setCurrentId(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quote">Quote:</label>
          <input 
            type="text" 
            id="quote" 
            className="form-control" 
            value={quote} 
            onChange={(e) => setQuote(e.target.value)} 
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input 
            type="text" 
            id="author" 
            className="form-control" 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="language">Language:</label>
          <input 
            type="text" 
            id="language" 
            className="form-control" 
            value={language} 
            onChange={(e) => setLanguage(e.target.value)} 
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default UpdateQuote;