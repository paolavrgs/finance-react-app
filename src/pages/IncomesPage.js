import React from 'react';
import IncomesForm from '../components/Incomes/Form';
import Table from '../components/Incomes/Table';

export default class IncomesPage extends React.Component {
  render () {
    return (
      <div className="app">
        <h1>Add your incomes</h1>
        <IncomesForm />
        <Table />
      </div>
    )
  }
}

