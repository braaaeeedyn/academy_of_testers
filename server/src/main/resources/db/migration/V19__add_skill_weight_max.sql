-- Track the peak mastery ever reached per skill, for the mastery-map tooltip.
ALTER TABLE sat_skill_weights ADD COLUMN max_weight DOUBLE PRECISION NOT NULL DEFAULT 0;
UPDATE sat_skill_weights SET max_weight = weight;
