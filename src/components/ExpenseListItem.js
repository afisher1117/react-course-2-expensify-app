import React from 'react';
import { Link } from 'react-router-dom';


const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>Expense List Item</h3>
    </Link>
    <p>{description}</p>
    <p>{amount} - {createdAt}</p>
  </div>
);

export default ExpenseListItem;