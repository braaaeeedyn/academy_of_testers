-- Custom practice: a fixed, pre-shuffled list of question ids served in order.
-- Null means the session uses normal adaptive selection.
ALTER TABLE sat_sessions ADD COLUMN question_queue TEXT;
