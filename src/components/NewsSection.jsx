import React from 'react';
import './NewsSection.css';

const newsItems = [
  {
    id: 1,
    title: 'New Women Safety Initiative Launched in Metro Cities',
    date: 'May 28, 2023',
    excerpt: 'GPS-enabled panic buttons to be installed in public transport across 10 major cities...'
  },
  {
    id: 2,
    title: 'Interstate Drug Cartel Busted in Punjab',
    date: 'May 20, 2023',
    excerpt: 'Narcotics worth ₹120 crore seized in joint operation by NCB and state police...'
  },
  {
    id: 3,
    title: 'Financial Fraud Alert: New ATM Skimming Modus Operandi',
    date: 'May 15, 2023',
    excerpt: 'Criminals using fake card readers at petrol pumps - public advised to check for tampering...'
  }
];

const NewsSection = () => {
  return (
    <div className="news-section">
      <h2>Latest News & Alerts</h2>
      <div className="news-container">
        {newsItems.map(news => (
          <div key={news.id} className="news-card">
            <h3>{news.title}</h3>
            <p className="news-date">{news.date}</p>
            <p className="news-excerpt">{news.excerpt}</p>
            <a href="#" className="read-more">Read More →</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
