-- Remove SAT Writing (no longer offered on the digital SAT)
DELETE FROM study_resources WHERE subject_id = (SELECT id FROM subjects WHERE name = 'SAT Writing');
DELETE FROM subjects WHERE name = 'SAT Writing';

-- Rename SAT Reading to SAT Reading & Writing (reflects the current digital SAT format)
UPDATE subjects
SET name = 'SAT Reading & Writing',
    description = 'SAT Reading and Writing section'
WHERE name = 'SAT Reading';

-- Insert SAT Reading & Writing practice exams (prac4-rw through prac11-rw)
INSERT INTO study_resources (title, description, file_path, file_type, exam_year, subject_id) VALUES
('SAT Reading & Writing Practice Test 4', 'SAT Reading and Writing section practice test 4', '/resources/sat/reading-writing/prac4-rw.pdf', 'PDF', NULL, (SELECT id FROM subjects WHERE name = 'SAT Reading & Writing')),
('SAT Reading & Writing Practice Test 5', 'SAT Reading and Writing section practice test 5', '/resources/sat/reading-writing/prac5-rw.pdf', 'PDF', NULL, (SELECT id FROM subjects WHERE name = 'SAT Reading & Writing')),
('SAT Reading & Writing Practice Test 6', 'SAT Reading and Writing section practice test 6', '/resources/sat/reading-writing/prac6-rw.pdf', 'PDF', NULL, (SELECT id FROM subjects WHERE name = 'SAT Reading & Writing')),
('SAT Reading & Writing Practice Test 7', 'SAT Reading and Writing section practice test 7', '/resources/sat/reading-writing/prac7-rw.pdf', 'PDF', NULL, (SELECT id FROM subjects WHERE name = 'SAT Reading & Writing')),
('SAT Reading & Writing Practice Test 8', 'SAT Reading and Writing section practice test 8', '/resources/sat/reading-writing/prac8-rw.pdf', 'PDF', NULL, (SELECT id FROM subjects WHERE name = 'SAT Reading & Writing')),
('SAT Reading & Writing Practice Test 9', 'SAT Reading and Writing section practice test 9', '/resources/sat/reading-writing/prac9-rw.pdf', 'PDF', NULL, (SELECT id FROM subjects WHERE name = 'SAT Reading & Writing')),
('SAT Reading & Writing Practice Test 10', 'SAT Reading and Writing section practice test 10', '/resources/sat/reading-writing/prac10-rw.pdf', 'PDF', NULL, (SELECT id FROM subjects WHERE name = 'SAT Reading & Writing')),
('SAT Reading & Writing Practice Test 11', 'SAT Reading and Writing section practice test 11', '/resources/sat/reading-writing/prac11-rw.pdf', 'PDF', NULL, (SELECT id FROM subjects WHERE name = 'SAT Reading & Writing'));
