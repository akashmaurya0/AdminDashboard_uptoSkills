import React, { useState } from "react";
import "./Container.css";

const Container = () => {
  const [count, setCount] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState("event-1");
  const [selectedCategory, setSelectedCategory] = useState("student");
  const [selectedRows, setSelectedRows] = useState([]);
  const [customMessage, setCustomMessage] = useState("");

  const students = [
    { id: "s01", name: "Alice", attendance: 85, email: "alice01@gmail.com", mobile: "+61 1234567890", eventName: "event-1" },
    { id: "s02", name: "Bob", attendance: 70, email: "bob02@gmail.com", mobile: "+61 2345678901", eventName: "event-2" },
    { id: "s03", name: "Charlie", attendance: 60, email: "charlie03@gmail.com", mobile: "+61 3456789012", eventName: "event-1" },
    { id: "s04", name: "David", attendance: 50, email: "david04@gmail.com", mobile: "+61 4567890123", eventName: "event-2" },
    { id: "s05", name: "Eve", attendance: 75, email: "eve05@gmail.com", mobile: "+61 5678901234", eventName: "event-1" },
    { id: "s06", name: "Fay", attendance: 80, email: "fay06@gmail.com", mobile: "+61 6789012345", eventName: "event-2" },
    { id: "s07", name: "Grace", attendance: 90, email: "grace07@gmail.com", mobile: "+61 7890123456", eventName: "event-1" },
    { id: "s08", name: "Heidi", attendance: 55, email: "heidi08@gmail.com", mobile: "+61 8901234567", eventName: "event-2" },
    { id: "s09", name: "Ivan", attendance: 65, email: "ivan09@gmail.com", mobile: "+61 9012345678", eventName: "event-1" },
    { id: "s10", name: "Judy", attendance: 95, email: "judy10@gmail.com", mobile: "+61 0123456789", eventName: "event-2" },
  ];

  const faculties = [
    { id: "f01", name: "Dr. Smith", attendance: 85, email: "smith01@univ.edu", mobile: "+61 1234567890", eventName: "event-1" },
    { id: "f02", name: "Dr. Brown", attendance: 90, email: "brown02@univ.edu", mobile: "+61 2345678901", eventName: "event-2" },
    { id: "f03", name: "Dr. Taylor", attendance: 75, email: "taylor03@univ.edu", mobile: "+61 3456789012", eventName: "event-1" },
    { id: "f04", name: "Dr. Johnson", attendance: 65, email: "johnson04@univ.edu", mobile: "+61 4567890123", eventName: "event-2" },
    { id: "f05", name: "Dr. Williams", attendance: 80, email: "williams05@univ.edu", mobile: "+61 5678901234", eventName: "event-1" },
    { id: "f06", name: "Dr. Jones", attendance: 70, email: "jones06@univ.edu", mobile: "+61 6789012345", eventName: "event-2" },
    { id: "f07", name: "Dr. Lee", attendance: 95, email: "lee07@univ.edu", mobile: "+61 7890123456", eventName: "event-1" },
    { id: "f08", name: "Dr. Kim", attendance: 55, email: "kim08@univ.edu", mobile: "+61 8901234567", eventName: "event-2" },
    { id: "f09", name: "Dr. Clark", attendance: 60, email: "clark09@univ.edu", mobile: "+61 9012345678", eventName: "event-1" },
    { id: "f10", name: "Dr. Walker", attendance: 50, email: "walker10@univ.edu", mobile: "+61 0123456789", eventName: "event-2" },
  ];

  // Filter data based on selected category and event
  const filteredData = (selectedCategory === "student" ? students : faculties).filter(
    (item) => item.eventName === selectedEvent
  );

  // Handle row selection
  const handleSelection = (id) => {
    const isSelected = selectedRows.includes(id);
    const updatedSelection = isSelected
      ? selectedRows.filter((rowId) => rowId !== id)
      : [...selectedRows, id];
    setSelectedRows(updatedSelection);
    setCount(updatedSelection.length);
  };

  // Handle custom message change
  const handleMessageChange = (e) => {
    setCustomMessage(e.target.value);
  };

  // Send certificate logic (to be implemented)
  const sendCertificate = () => {
    if(count==0)
    {
        alert(`no member is selected `);
    }
    else
    alert(`Certificates sent to selected members with message: "${customMessage}"`);
  };

  return (
    <div className="container">
      <div className="container-box">
        {/* Event Selection */}
        <div className="event-selection">
          <span>Select Event:</span>
          <select value={selectedEvent} onChange={(e) => setSelectedEvent(e.target.value)}>
            <option value="event-1">Event 1</option>
            <option value="event-2">Event 2</option>
          </select>
        </div>

        {/* Member Category Selection */}
        <div className="student-faculty-selection">
          <span>Select Member Category:</span>
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
          </select>
        </div>

        {/* Data Table */}
        <div className="student-faculty-data">
          <table className="student-faculty-table">
            <thead>
              <tr>
                <th>Selection</th>
                <th>ID</th>
                <th>Name</th>
                <th>Attendance (%)</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Event Name</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(item.id)}
                      onChange={() => handleSelection(item.id)}
                    />
                  </td>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.attendance}</td>
                  <td>{item.email}</td>
                  <td>{item.mobile}</td>
                  <td>{item.eventName}</td>
                </tr>
              ))}
              <tr>
                <td colSpan={7} style={{ textAlign: "center" }}>
                  Count: {count}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Custom Message and Action */}
        <div className="custome-message-send">
          <div>
            <span>Custom Message:</span>
            <input type="text" value={customMessage} onChange={handleMessageChange} />
          </div>
          <div>
            <button type="button" onClick={sendCertificate}>
              Send Certificate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
