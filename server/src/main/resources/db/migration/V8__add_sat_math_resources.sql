-- Insert SAT Math section practice exams (prac4-math through prac11-math)
INSERT INTO study_resources (title, description, file_path, file_type, exam_year, subject_id) VALUES
('SAT Math Practice Test 4', 'SAT Mathematics section practice test 4', '/resources/sat/math/prac4-math.pdf', 'PDF', NULL, (SELECT id FROM subjects WHERE name = 'SAT Math')),
('SAT Math Practice Test 5', 'SAT Mathematics section practice test 5', '/resources/sat/math/prac5-math.pdf', 'PDF', NULL, (SELECT id FROM subjects WHERE name = 'SAT Math')),
('SAT Math Practice Test 6', 'SAT Mathematics section practice test 6', '/resources/sat/math/prac6-math.pdf', 'PDF', NULL, (SELECT id FROM subjects WHERE name = 'SAT Math')),
('SAT Math Practice Test 7', 'SAT Mathematics section practice test 7', '/resources/sat/math/prac7-math.pdf', 'PDF', NULL, (SELECT id FROM subjects WHERE name = 'SAT Math')),
('SAT Math Practice Test 8', 'SAT Mathematics section practice test 8', '/resources/sat/math/prac8-math.pdf', 'PDF', NULL, (SELECT id FROM subjects WHERE name = 'SAT Math')),
('SAT Math Practice Test 9', 'SAT Mathematics section practice test 9', '/resources/sat/math/prac9-math.pdf', 'PDF', NULL, (SELECT id FROM subjects WHERE name = 'SAT Math')),
('SAT Math Practice Test 10', 'SAT Mathematics section practice test 10', '/resources/sat/math/prac10-math.pdf', 'PDF', NULL, (SELECT id FROM subjects WHERE name = 'SAT Math')),
('SAT Math Practice Test 11', 'SAT Mathematics section practice test 11', '/resources/sat/math/prac11-math.pdf', 'PDF', NULL, (SELECT id FROM subjects WHERE name = 'SAT Math'));
