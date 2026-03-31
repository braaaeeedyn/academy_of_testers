-- Remove AP Foreign Languages subject + any associated resources.
-- (Older seed migrations inserted this subject and resources; this migration cleans existing DBs.)

DELETE FROM study_resources
WHERE subject_id IN (SELECT id FROM subjects WHERE name = 'AP Foreign Languages');

DELETE FROM subjects
WHERE name = 'AP Foreign Languages';

