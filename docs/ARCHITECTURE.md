# Architecture

## Core Flow

1. User uploads or enters resume/profile data.
2. System collects or accepts job postings.
3. AI extracts role requirements and compares them against the user's profile.
4. System generates tailored resume suggestions and cover letter drafts.
5. User reviews and approves before any application action.
6. Application status is tracked in the dashboard.

## Services

- `job_collector`: gathers job postings from approved sources
- `resume_parser`: extracts skills, experience, education, and projects
- `match_engine`: scores job fit
- `ai_writer`: generates resume bullets and cover letters
- `application_tracker`: manages application pipeline
