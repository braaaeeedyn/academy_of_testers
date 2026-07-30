-- Some system questions render two equations back-to-back with only a space between
-- them (e.g. "\(y = 2x^2 - 21x + 64\) \(y = 3x + a\) ..."), which is hard to read.
-- Insert a comma at the boundary so the two statements are visually distinct.
--
-- V15 stays byte-identical to its applied form so already-migrated databases validate;
-- this forward migration patches the seeded rows in place. Each affected stem contains
-- exactly one "\) \(" boundary, so a REPLACE is exact.
UPDATE sat_questions
SET stem = REPLACE(stem, '\) \(', '\), \(')
WHERE id IN (
  'sys-0002', 'sys-0003', 'sys-0004', 'sys-0006', 'sys-0007',
  'sys-0009', 'sys-0011', 'sys-0012', 'sys-0013', 'sys-0015',
  'quad-0029', 'quad-0030',
  'alg-0032', 'alg-0037'
);
