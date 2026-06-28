from fastapi import FastAPI
from app.routers.health import router as health_router

app = FastAPI(
    title="Job Application AI Agent API",
    description="Backend API for AI-powered job matching, resume tailoring, and application tracking.",
    version="0.1.0",
)

app.include_router(health_router)


@app.get("/")
def root():
    return {"message": "Job Application AI Agent API"}
