-- When the peak mastery was reached, for the mastery-map tooltip.
ALTER TABLE sat_skill_weights ADD COLUMN max_weight_at TIMESTAMP;
UPDATE sat_skill_weights SET max_weight_at = last_updated WHERE max_weight_at IS NULL;
