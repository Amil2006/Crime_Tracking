import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ReportCrime.css';
import api from '../services/api';

const ReportCrime = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    crimeType: '',
    description: '',
    date: '',
    time: '',
    location: '',
    evidence: null,
    anonymous: false,
    contactEmail: '',
    contactPhone: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const crimeTypes = [
    'Cyber Crime',
    'Theft',
    'Fraud',
    'Harassment',
    'Assault',
    'Vandalism',
    'Drug Offense',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : 
              type === 'file' ? files[0] : value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.crimeType) newErrors.crimeType = 'Please select a crime type';
    if (!formData.description) newErrors.description = 'Description is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.location) newErrors.location = 'Location is required';
    
    if (!formData.anonymous) {
      if (!formData.contactEmail && !formData.contactPhone) {
        newErrors.contact = 'Please provide at least one contact method';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('crimeType', formData.crimeType);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('date', formData.date);
      formDataToSend.append('time', formData.time);
      formDataToSend.append('location', formData.location);
      formDataToSend.append('anonymous', formData.anonymous);
      formDataToSend.append('contactEmail', formData.contactEmail);
      formDataToSend.append('contactPhone', formData.contactPhone);
      if (formData.evidence) {
        formDataToSend.append('evidence', formData.evidence);
      }

      // Using the api service instead of fetch
      const response = await api.post('/reports', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      alert('Crime report submitted successfully!');
      navigate('/');
    } catch (error) {
      alert(error.response?.data?.error || 'Failed to submit report');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="report-crime-page">
      <main className="report-crime-container">
        <div className="report-header">
          <h2>Report a Crime</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="crime-report-form">
          <div className="form-section">
            <h3>Crime Information</h3>
            
            <div className={`form-group ${errors.crimeType ? 'error' : ''}`}>
              <label htmlFor="crimeType">Type of Crime*</label>
              <select
                id="crimeType"
                name="crimeType"
                value={formData.crimeType}
                onChange={handleChange}
              >
                <option value="">Select a crime type</option>
                {crimeTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              {errors.crimeType && <span className="error-message">{errors.crimeType}</span>}
            </div>
            
            <div className={`form-group ${errors.description ? 'error' : ''}`}>
              <label htmlFor="description">Description*</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Please provide detailed information about the incident..."
                rows={5}
              />
              {errors.description && <span className="error-message">{errors.description}</span>}
            </div>
            
            <div className="form-row">
              <div className={`form-group ${errors.date ? 'error' : ''}`}>
                <label htmlFor="date">Date of Incident*</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  max={new Date().toISOString().split('T')[0]}
                />
                {errors.date && <span className="error-message">{errors.date}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="time">Time of Incident</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className={`form-group ${errors.location ? 'error' : ''}`}>
              <label htmlFor="location">Location*</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Street address, city, or landmark"
              />
              {errors.location && <span className="error-message">{errors.location}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="evidence">Upload Evidence (Optional)</label>
              <input
                type="file"
                id="evidence"
                name="evidence"
                onChange={handleChange}
                accept="image/*,.pdf,.doc,.docx"
              />
              <small>Max file size: 5MB (Images, PDF, Word)</small>
            </div>
          </div>
          
          <div className="form-section">
            <h3>Your Information</h3>
            
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="anonymous"
                name="anonymous"
                checked={formData.anonymous}
                onChange={handleChange}
              />
              <label htmlFor="anonymous">Report anonymously</label>
            </div>
            
            {!formData.anonymous && (
              <div className="contact-fields">
                <div className="form-group">
                  <label htmlFor="contactEmail">Email</label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    placeholder="Your email address"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="contactPhone">Phone Number</label>
                  <input
                    type="tel"
                    id="contactPhone"
                    name="contactPhone"
                    value={formData.contactPhone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                  />
                </div>
                
                {errors.contact && (
                  <div className="error-message">{errors.contact}</div>
                )}
              </div>
            )}
          </div>
          
          <div className="form-actions">
            <button
              type="button"
              className="secondary-button"
              onClick={() => navigate('/')}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="primary-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Report'}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ReportCrime;
