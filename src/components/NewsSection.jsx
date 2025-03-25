import React from 'react';
import './NewsSection.css';

const newsItems = [
  {
    id: 1,
    title: 'New Cyber Security Guidelines Released',
    date: 'May 15, 2023',
    excerpt: 'The government has released new guidelines to combat rising cyber crimes...'
  },
  {
    id: 2,
    title: 'Major Phishing Scam Busted',
    date: 'April 28, 2023',
    excerpt: 'Authorities have arrested 12 individuals involved in a nationwide phishing operation...'
  },
  {
    id: 3,
    title: 'Awareness Campaign Launched',
    date: 'April 10, 2023',
    excerpt: 'New public awareness campaign aims to educate citizens about online safety...'
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