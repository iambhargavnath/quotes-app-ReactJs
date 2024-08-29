import React from 'react';
import './style/Quote.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const Quote = ({ id, quote, author, language, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    const confirmed = window.confirm('Are you sure you want to delete this quote?');
    if (confirmed) {
      onDelete(id);
    }
  };

  const handleEdit = () => {
    navigate(`/update/${id}`);
  };

  return (
    <div className="quote card">
      <div className="card-body">
        <div class="card-header">
          Quote ID: {id}
        </div>
        <p className="card-text">{quote}</p>
        <footer className="blockquote-footer">
          <cite>{author}</cite> - {language}
        </footer>
        <button className="delete-button btn-light" onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
        <button className="edit-button btn-light" onClick={handleEdit}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
      </div>
    </div>
  );
};

export default Quote;