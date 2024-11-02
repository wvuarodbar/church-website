import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Modal from 'react-modal';
import halloween from '../image/trick or treat.jpg'
const localizer = momentLocalizer(moment);

const modalStyle = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        width: '90%',           // Adjust width to fit smaller screens
        maxWidth: '500px',      // Set a max-width for the modal
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px',
        zIndex: 2147483647,    // Use a high z-index to ensure it appears above all content
        position: 'fixed',     // Fixed positioning ensures it stays in view on mobile
        overflowY: 'auto',     // Allows scrolling within the modal on mobile
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        zIndex: 2147483646,    // Slightly lower than content to keep modal in front
    }
};

 
function ChurchCalendar() {
  const [events] = useState([
    {
        title: 'Trunk or Treat',
        start: new Date(2024, 9, 31, 19, 0),
        end: new Date(2024, 9, 31, 20, 30),
        description: 'Join us for trunk or treat Halloween. Be Spooky!!!',
        image: halloween,
    },
    {
      title: 'Sunday Service',
      start: new Date(2024, 10, 3, 10, 0),
      end: new Date(2024, 10, 3, 11, 30),
      description: 'Join us for Sunday Worship!',
      image: 'https://example.com/path/to/sunday-service-image.jpg',
    },
    {
      title: 'Youth Fellowship',
      start: new Date(2024, 10, 6, 18, 0),
      end: new Date(2024, 10, 6, 20, 0),
      description: 'A gathering for young adults to connect and worship together.',
      image: 'https://example.com/path/to/youth-fellowship-image.jpg',
    },
    {
      title: 'Bible Study',
      start: new Date(2024, 10, 8, 19, 0),
      end: new Date(2024, 10, 8, 20, 30),
      description: 'A time for in-depth study of the Bible.',
      image: 'https://example.com/path/to/bible-study-image.jpg',
    },
  ]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const openModal = (event) => {
    setSelectedEvent(event);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div style={{ height: '80vh', padding: '20px' }}>
      <h2>Church Events Calendar</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        defaultView="month"
        views={['month', 'week', 'day']}
        popup
        onSelectEvent={openModal}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyle}
        contentLabel="Event Details"
      >
        <h2>{selectedEvent?.title}</h2>
        <p>{selectedEvent?.description}</p>
        {selectedEvent?.image && (
          <img src={selectedEvent.image} alt={selectedEvent.title} style={{ width: '100%', borderRadius: '8px' }} />
        )}
        <button onClick={closeModal} style={{ marginTop: '1rem' }}>Close</button>
      </Modal>
    </div>
  );
}

export default ChurchCalendar;
