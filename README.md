# Equipment Loan & Usage Tracking System

## 📚 Overview

This project is designed for the **Research Support Lab** supporting **Environmental Science** and **Geography** classes that use field equipment for collecting spatial/location data. The goal is to create a **dynamic, accessible, and updateable database system** that tracks equipment check-outs and returns, monitors usage patterns, and allows for querying usage across different time frames.

The system replaces an outdated, manually-maintained table and form setup that was inaccessible to all users involved in managing physical equipment.

---

## 🎯 Project Objectives

- ✅ Build a relational database to track **equipment check-in/check-out**
- ✅ Track **equipment usage patterns** (e.g., number of days each item is used)
- ✅ Enable **queries by time period**, equipment type, or user
- ✅ Assign **unique serial numbers or identifiers** to each piece of equipment
- ✅ Support **multiple user access** (e.g., staff, students, lab assistants)
- ✅ Improve **data entry and update reliability** through a user-friendly interface

---

## 🧰 Features

- 📦 **Inventory Management**
  - Equipment list with name, type, serial number, availability status, and notes

- 🧾 **Loan System**
  - Check-in/check-out logging with user, date/time, and purpose
  - Tracks duration of use automatically

- 📈 **Usage Analytics**
  - Compare equipment usage across time frames and categories
  - Total usage per item, per user, or per class/project

- 👥 **Multi-user Access**
  - Accessible by all relevant personnel (lab managers, professors, students)

- 🔒 **Data Integrity**
  - Controlled forms for entering and updating equipment logs

---

## 🗃️ Database Design (Entity-Relationship Summary)

- `Equipment`: stores item metadata (serial number, name, type, condition, status)
- `Users`: stores info about who checked out the item (name, email, role)
- `Loans`: logs each check-out/check-in event (timestamps, purpose, class/project)
- `Projects/Classes`: optional table to link loans to specific course projects

---

## 🚀 Tech Stack (Planned or Implemented)

- **Database**: PostgreSQL / MySQL / SQLite
- **Interface**: Web-based form (Flask / Django / Google Sheets + Apps Script, TBD)
- **Authentication**: Role-based access control (TBD)
- **Hosting**: Local server or cloud-based (depending on final setup)

---

## 🧪 Future Improvements

- 📲 Add barcode scanning support for faster check-ins
- 🗓️ Calendar integration for equipment reservations
- 🛠️ Maintenance logging per item
- 📊 Dashboard for visualizing equipment usage stats

---

## 👥 Contributors

- Kala'i — Project Lead  
- [Bintu, Fatima, Nafisa, and Rehab] — (Roles: Database Design, Interface, Testing, etc.)

---

## 📝 Notes

This project is part of a **Database Systems** course assignment. It aims to solve real-world data management challenges for research-heavy departments using equipment in dynamic, time-sensitive ways.

