# Container Component for Event and Member Management

This project provides a **React-based component** for managing events and their associated members, such as students and faculty. It features a dynamic table for filtering, selecting, and managing participants, with additional functionality for sending custom messages and certificates.

---

## Features

- **Event Selection**: Filter members by selected events.
- **Member Category Selection**: Switch between "Students" and "Faculty" categories.
- **Dynamic Table**:
  - View detailed information (ID, name, attendance, email, mobile, and event).
  - Dynamically filter members based on event and category.
- **Row Selection**:
  - Select multiple rows via checkboxes.
  - Display a live count of selected members.
- **Custom Messaging**:
  - Send personalized messages to selected members.
  - Integrated button for sending certificates.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/repository-name.git
   ```

2. Navigate to the project directory:
   ```bash
   cd repository-name
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

---

## Usage

1. **Event Selection**:
   - Use the dropdown menu to select an event (e.g., `Event 1` or `Event 2`).

2. **Member Category**:
   - Choose between "Student" and "Faculty" to filter the displayed data.

3. **Table**:
   - View member details in the dynamic table.
   - Select members using checkboxes. The count of selected members will update automatically.

4. **Custom Messaging**:
   - Enter a custom message in the input field.
   - Click the "Send Certificate" button to simulate sending certificates with the custom message.

---

## File Structure

```plaintext
src/
├── components/
│   ├── Container.js   # Main component logic
│   └── Container.css  # Styling for the component
├── assets/
│   └── logo.png       # Placeholder for logo (if required)
└── App.js             # Entry point for the application
```

---

## Example Data

### Students:
| ID   | Name     | Attendance (%) | Email              | Mobile           | Event   |
|------|----------|----------------|--------------------|------------------|---------|
| s01  | Alice    | 85             | alice01@gmail.com  | +61 1234567890   | Event 1 |
| s02  | Bob      | 70             | bob02@gmail.com    | +61 2345678901   | Event 2 |
| ...  | ...      | ...            | ...                | ...              | ...     |

### Faculty:
| ID   | Name          | Attendance (%) | Email               | Mobile           | Event   |
|------|---------------|----------------|---------------------|------------------|---------|
| f01  | Dr. Smith     | 85             | smith01@univ.edu    | +61 1234567890   | Event 1 |
| f02  | Dr. Brown     | 90             | brown02@univ.edu    | +61 2345678901   | Event 2 |
| ...  | ...           | ...            | ...                 | ...              | ...     |

---

## Dependencies

- **React**: Frontend framework.
- **CSS**: For styling the component.

---

## Future Enhancements

- Backend integration for real-time data.
- Add user authentication.
- Export selected data to CSV or PDF.
- Advanced filtering options.

---

## Contributing

Contributions are welcome! Feel free to fork this repository and submit a pull request.

---

## License



---

## Contact

- **Author**: Akash kumar maurya
- **Email**: akashmaurya1947@gmail.com


