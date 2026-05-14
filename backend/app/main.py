from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.api.routes import auth, jobs, applications, employer, candidate, trust, contracts, ai

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V1_STR}/openapi.json"
)

# Set all CORS enabled origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Welcome to NeicheBoard API"}

app.include_router(auth.router, prefix=f"{settings.API_V1_STR}/auth", tags=["auth"])
app.include_router(jobs.router, prefix=f"{settings.API_V1_STR}/jobs", tags=["jobs"])
app.include_router(applications.router, prefix=f"{settings.API_V1_STR}/applications", tags=["applications"])
app.include_router(employer.router, prefix=f"{settings.API_V1_STR}/employer", tags=["employer"])
app.include_router(candidate.router, prefix=f"{settings.API_V1_STR}/candidate", tags=["candidate"])
app.include_router(trust.router, prefix=f"{settings.API_V1_STR}/trust", tags=["trust"])
app.include_router(contracts.router, prefix=f"{settings.API_V1_STR}/contracts", tags=["contracts"])
app.include_router(ai.router, prefix=f"{settings.API_V1_STR}/ai", tags=["ai"])
