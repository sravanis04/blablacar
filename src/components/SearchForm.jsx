import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FaCircle, FaCalendarAlt, FaUser } from 'react-icons/fa';

const SearchForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [passengers, setPassengers] = useState(1);
  const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handlePassengerChange = (newValue) => {
    if (newValue >= 1 && newValue <= 8) {
      setPassengers(newValue);
    }
  };

  const handleDateChange = (date) => {
    setStartDate(date);
    setShowDatePicker(false);
  };

  const formatDate = (date) => {
    if (!date) return 'Today';
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (date.toDateString() === now.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === tomorrow.toDateString()) {
      return 'Tomorrow';
    } else {
      return date.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      });
    }
  };

  return (
    <form role="search" className="search-form">
      <div className="search-group" style={{ flex: '1 0 0%' }}>
        <div className="search-input-wrapper">
          <div className="input-icon">
            <FaCircle className="icon-secondary" />
          </div>
          <input
            type="text"
            className="search-input"
            placeholder="Leaving from"
            role="combobox"
            aria-autocomplete="list"
          />
        </div>
        <hr className="divider" />
        <div className="search-input-wrapper">
          <div className="input-icon">
            <FaCircle className="icon-secondary" />
          </div>
          <input
            type="text"
            className="search-input"
            placeholder="Going to"
            role="combobox"
            aria-autocomplete="list"
          />
        </div>
        <hr className="divider" />
      </div>

      <div className="search-group" style={{ flex: '0.3 0 0%' }}>
        <div className="date-picker-wrapper">
          <button 
            type="button"
            className="date-button"
            onClick={() => setShowDatePicker(!showDatePicker)}
          >
            <span className="button-icon">
              <FaCalendarAlt className="icon-primary" />
            </span>
            <span className="button-content">
              <span className="button-label">{formatDate(startDate)}</span>
            </span>
          </button>
          {showDatePicker && (
            <div className="date-picker-dropdown">
              <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                inline
                minDate={new Date()}
                calendarClassName="custom-calendar"
                showPopperArrow={false}
                fixedHeight
                dayClassName={date =>
                  date.getDate() === startDate?.getDate() &&
                  date.getMonth() === startDate?.getMonth()
                    ? 'selected-day'
                    : undefined
                }
              />
            </div>
          )}
        </div>
        <hr className="divider" />
      </div>

      <div className="search-group" style={{ flex: '0.4 1 0%' }}>
        <button 
          type="button"
          className="passenger-button"
          onClick={() => setShowPassengerDropdown(!showPassengerDropdown)}
        >
          <span className="button-icon">
            <FaUser className="icon-primary" />
          </span>
          <span className="button-content">
            <span className="button-label">{passengers} passenger{passengers !== 1 ? 's' : ''}</span>
          </span>
        </button>
        {showPassengerDropdown && (
          <div className="passenger-dropdown">
            <div className="passenger-counter">
              <button 
                type="button"
                className="counter-button"
                onClick={() => handlePassengerChange(passengers - 1)}
                disabled={passengers <= 1}
              >
                -
              </button>
              <span>{passengers}</span>
              <button 
                type="button"
                className="counter-button"
                onClick={() => handlePassengerChange(passengers + 1)}
                disabled={passengers >= 8}
              >
                +
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="search-group" style={{ flex: '0.3 0 0%' }}>
        <button type="submit" className="search-submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm; 