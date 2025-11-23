-- Insert seed exams
INSERT INTO exams (name, description) VALUES
('AP', 'Advanced Placement exams for college credit'),
('SAT', 'Standardized test for college admissions');

-- Insert seed subjects for AP
INSERT INTO subjects (name, description, exam_id) VALUES
-- AP Arts
('AP Art History', 'Art history and visual analysis', (SELECT id FROM exams WHERE name = 'AP')),
('AP Music Theory', 'Music fundamentals and theory', (SELECT id FROM exams WHERE name = 'AP')),
-- AP Computer Science
('AP Computer Science A', 'Java programming and algorithms', (SELECT id FROM exams WHERE name = 'AP')),
('AP Computer Science Principles', 'Computing fundamentals', (SELECT id FROM exams WHERE name = 'AP')),
-- AP English
('AP English Language', 'Rhetoric and composition', (SELECT id FROM exams WHERE name = 'AP')),
('AP English Literature', 'Literary analysis and composition', (SELECT id FROM exams WHERE name = 'AP')),
-- AP Foreign Languages
('AP Foreign Languages', 'French, Latin, and Spanish language exams', (SELECT id FROM exams WHERE name = 'AP')),
-- AP History and Social Sciences
('AP African American Studies', 'African American history, culture, and politics', (SELECT id FROM exams WHERE name = 'AP')),
('AP Comparative Government', 'Comparative political systems', (SELECT id FROM exams WHERE name = 'AP')),
('AP Macroeconomics', 'Macroeconomic theory and policy', (SELECT id FROM exams WHERE name = 'AP')),
('AP Microeconomics', 'Microeconomic theory and policy', (SELECT id FROM exams WHERE name = 'AP')),
('AP European History', 'European history since 1450', (SELECT id FROM exams WHERE name = 'AP')),
('AP Government', 'US Government and Politics', (SELECT id FROM exams WHERE name = 'AP')),
('AP Human Geography', 'Geographic patterns and processes', (SELECT id FROM exams WHERE name = 'AP')),
('AP Psychology', 'Introduction to psychology', (SELECT id FROM exams WHERE name = 'AP')),
('AP Seminar', 'Research, collaboration, and presentation skills', (SELECT id FROM exams WHERE name = 'AP')),
('AP US History', 'United States history', (SELECT id FROM exams WHERE name = 'AP')),
('AP World History', 'World history from 1200 CE', (SELECT id FROM exams WHERE name = 'AP')),
-- AP Mathematics
('AP Calculus AB', 'Differential and integral calculus', (SELECT id FROM exams WHERE name = 'AP')),
('AP Calculus BC', 'Advanced calculus including series', (SELECT id FROM exams WHERE name = 'AP')),
('AP Precalculus', 'Functions, algebra, and trigonometry', (SELECT id FROM exams WHERE name = 'AP')),
('AP Statistics', 'Introduction to statistical methods', (SELECT id FROM exams WHERE name = 'AP')),
-- AP Sciences
('AP Biology', 'Comprehensive study of biological systems', (SELECT id FROM exams WHERE name = 'AP')),
('AP Chemistry', 'General chemistry principles', (SELECT id FROM exams WHERE name = 'AP')),
('AP Environmental Science', 'Environmental systems and sustainability', (SELECT id FROM exams WHERE name = 'AP')),
('AP Physics 1', 'Algebra-based physics', (SELECT id FROM exams WHERE name = 'AP')),
('AP Physics 2', 'Advanced algebra-based physics', (SELECT id FROM exams WHERE name = 'AP')),
('AP Physics C: Mechanics', 'Calculus-based mechanics', (SELECT id FROM exams WHERE name = 'AP')),
('AP Physics C: E&M', 'Calculus-based electricity and magnetism', (SELECT id FROM exams WHERE name = 'AP')),
-- SAT subjects
('SAT General Tests', 'Complete SAT practice exams', (SELECT id FROM exams WHERE name = 'SAT')),
('SAT Math', 'SAT Mathematics section', (SELECT id FROM exams WHERE name = 'SAT')),
('SAT Reading', 'SAT Evidence-Based Reading', (SELECT id FROM exams WHERE name = 'SAT')),
('SAT Writing', 'SAT Writing and Language', (SELECT id FROM exams WHERE name = 'SAT')),
('SAT Essay', 'SAT Optional Essay (discontinued)', (SELECT id FROM exams WHERE name = 'SAT'));
