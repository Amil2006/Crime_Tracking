import React from 'react';
import './CrimeStats.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', cases: 400 },
  { name: 'Feb', cases: 300 },
  { name: 'Mar', cases: 600 },
  { name: 'Apr', cases: 800 },
  { name: 'May', cases: 500 },
  { name: 'Jun', cases: 900 },
];

const CrimeStats = () => {
  return (
    <div className="crime-stats">
      <h2>Crime Statistics & Analysis</h2>
      <div className="stats-container">
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="cases" fill="#1a237e" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="about-section">
          <h3>About Us</h3>
          <p>The National Cyber Crime Reporting Portal is an initiative of the Government of India to facilitate victims/complainants to report cyber crime complaints online.</p>
          <div className="links">
            <a href="#">Overview</a>
            <a href="#">Mission</a>
            <a href="#">Vision</a>
            <a href="#">Useful Links</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrimeStats;