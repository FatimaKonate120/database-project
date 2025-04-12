CREATE TABLE equipment (
    id SERIAL PRIMARY KEY,
    equipment_id VARCHAR(50),
    make VARCHAR(100),
    model VARCHAR(100),
    equipment_type VARCHAR(100),
    purchase_date DATE,
    firmware_update DATE,
    checked_out BOOLEAN,
    health VARCHAR(100),
    notes TEXT,
    days_in_use INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);