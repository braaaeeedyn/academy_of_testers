-- The platform now focuses purely on SAT Math. Remove the non-Math SAT sections
-- and their study resources. study_resources.subject_id has ON DELETE CASCADE, so
-- deleting the subjects also removes their resources, but we delete explicitly for
-- clarity. SAT Math is intentionally kept.

DELETE FROM study_resources
WHERE subject_id IN (
  SELECT id FROM subjects WHERE name IN ('SAT Reading & Writing', 'SAT General Tests', 'SAT Essay')
);

DELETE FROM subjects
WHERE name IN ('SAT Reading & Writing', 'SAT General Tests', 'SAT Essay');
