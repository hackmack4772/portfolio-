// src/components/TablePanel.js
import React from "react";

const TablePanel = () => (
  <section className="panel">
    <h2>Table</h2>
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Posts</th>
          <th>Comments</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Pete</td>
          <td>4</td>
          <td>7</td>
          <td>Oct 10, 2015</td>
        </tr>
        <tr>
          <td>Mary</td>
          <td>5769</td>
          <td>2517</td>
          <td>Jan 1, 2014</td>
        </tr>
      </tbody>
    </table>
  </section>
);

export default TablePanel;
