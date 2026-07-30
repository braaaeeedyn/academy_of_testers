-- Per-user SAT dashboard preferences: target test date and weekly practice-day goal.
CREATE TABLE sat_user_prefs (
    user_id     BIGINT PRIMARY KEY,
    test_date   DATE,
    weekly_goal INTEGER,
    updated_at  TIMESTAMP NOT NULL DEFAULT now()
);
