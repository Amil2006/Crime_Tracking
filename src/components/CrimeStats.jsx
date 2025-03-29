import React from 'react';
import './CrimeStats.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Cyber Crime', cases: 400 },
  { name: 'Theft', cases: 300 },
  { name: 'Fraud', cases: 600 },
  // { name: 'Harassment', cases: 800 },
  { name: 'Assault', cases: 500 },
  // { name: 'Vandalism', cases: 900 },
  { name: 'Drug Offence', cases: 700 },
  { name: 'Other', cases: 200 },
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
            <a href="http://localhost:3000/about">Overview</a>
            <a href="http://localhost:3000/about">Mission</a>
            <a href="http://localhost:3000/about">Vision</a>
            <a href="http://localhost:3000/services">Useful Links</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrimeStats;
