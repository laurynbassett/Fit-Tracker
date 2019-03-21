import React from 'react'

import './Analytics.css'
export const Analytics = () => (
  <div id="analytics">
    <div className="box">
      <h2 className="box-header">Analytics</h2>
      <div className="box-content">
        <table className="analytics-table">
          <tbody>
            <tr className="analytics-table-row">
              <td className="analytics-name">Total Minutes Exercised:</td>
              <td id="total-exercised">95</td>
            </tr>
            <tr className="analytics-table-row">
              <td className="analytics-name">Favorite Exercise:</td>
              <td>Running</td>
            </tr>
            <tr className="analytics-table-row">
              <td className="analytics-name">Percentage Completed:</td>
              <td id="percentage-completed">75%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
)
