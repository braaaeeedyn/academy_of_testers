-- Insert all SAT resources (6 total)
INSERT INTO study_resources (title, description, file_path, file_type, exam_year, subject_id) VALUES
('SAT April 2022 - Full Test', 'Complete SAT exam from April 2022', '/resources/sat/aot_sat_apr22.pdf', 'PDF', 2022, (SELECT id FROM subjects WHERE name = 'SAT Math')),
('SAT April 2022 - Answer Key', 'Answer key and scoring guide', '/resources/sat/aot_sat_apr22_a.pdf', 'PDF', 2022, (SELECT id FROM subjects WHERE name = 'SAT Math')),
('SAT May 2022 - Full Test', 'Complete SAT exam from May 2022', '/resources/sat/aot_sat_may22.pdf', 'PDF', 2022, (SELECT id FROM subjects WHERE name = 'SAT Math')),
('SAT May 2022 - Answer Key', 'Answer key and scoring guide', '/resources/sat/aot_sat_may22_a.pdf', 'PDF', 2022, (SELECT id FROM subjects WHERE name = 'SAT Math')),
('SAT October 2022 - Full Test', 'Complete SAT exam from October 2022', '/resources/sat/aot_sat_oct22.pdf', 'PDF', 2022, (SELECT id FROM subjects WHERE name = 'SAT Math')),
('SAT October 2022 - Answer Key', 'Answer key and scoring guide', '/resources/sat/aot_sat_oct22_a.pdf', 'PDF', 2022, (SELECT id FROM subjects WHERE name = 'SAT Math'));
