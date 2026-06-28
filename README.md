# Job Application AI Agent

An AI-powered job search assistant that finds relevant job postings, analyzes job descriptions, tailors resumes, drafts cover letters, and tracks applications.

> Portfolio goal: show practical AI engineering skills through agents, scraping, resume optimization, job matching, human-in-the-loop approval, and clean full-stack architecture.

## Features Planned

- Job scraping from public job boards and company career pages
- Resume parsing and profile extraction
- Job-resume match scoring
- AI-tailored resume bullets and cover letters
- Application tracker dashboard
- Human approval before applying
- Email/job reply monitoring
- Analytics for applications, interviews, and response rate

## Tech Stack

**Frontend:** React, Vite, TypeScript, TailwindCSS  
**Backend:** FastAPI, Python, OpenAI API  
**Database:** PostgreSQL  
**Automation:** Playwright / scraping workers  
**DevOps:** Docker, GitHub Actions

## Project Structure

```txt
job-application-ai-agent/
├── apps/
│   ├── api/              # FastAPI backend
│   └── web/              # React frontend
├── docs/                 # Architecture and planning docs
├── scripts/              # Helper scripts
├── .github/workflows/    # CI pipeline
├── .env.example
├── docker-compose.yml
└── README.md
```

## Local Setup

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/job-application-ai-agent.git
cd job-application-ai-agent
```

### 2. Create environment file

```bash
cp .env.example .env
```

Add your keys later:

```env
OPENAI_API_KEY=your_key_here
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/job_agent
```

### 3. Start database

```bash
docker compose up -d
```

### 4. Start backend

```bash
cd apps/api
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### 5. Start frontend

```bash
cd apps/web
npm install
npm run dev
```

## Roadmap

See [`docs/ROADMAP.md`](docs/ROADMAP.md).

## Safety / Ethics

This project is designed with human approval before submitting applications. It should not spam employers, bypass website rules, fake qualifications, or apply without user review.

## License

MIT
