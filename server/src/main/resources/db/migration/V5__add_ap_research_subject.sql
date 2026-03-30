-- AP Capstone: AP Research (second course alongside AP Seminar)
INSERT INTO subjects (name, description, exam_id)
SELECT
  'AP Research',
  'Independent inquiry, academic paper, and presentation with oral defense',
  (SELECT id FROM exams WHERE name = 'AP')
WHERE NOT EXISTS (SELECT 1 FROM subjects WHERE name = 'AP Research');
