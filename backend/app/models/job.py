from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, Enum, Float, JSON, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from .user import Base

class Job(Base):
    __tablename__ = "jobs"

    id = Column(Integer, primary_key=True, index=True)
    employer_id = Column(Integer, ForeignKey("employer_profiles.id"))
    title = Column(String, index=True)
    description = Column(String)
    salary_range = Column(String)
    work_type = Column(String) # Remote, Hybrid, Onsite
    niche = Column(String, index=True)
    
    # AI Validation
    is_verified = Column(Boolean, default=False)
    quality_score = Column(Float, default=0.0)
    ai_validation_details = Column(JSON, default={})
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    employer = relationship("EmployerProfile", back_populates="jobs")
    applications = relationship("Application", back_populates="job")

class Application(Base):
    __tablename__ = "applications"

    id = Column(Integer, primary_key=True, index=True)
    job_id = Column(Integer, ForeignKey("jobs.id"))
    candidate_id = Column(Integer, ForeignKey("candidate_profiles.id"))
    status = Column(String, default="pending") # pending, reviewing, interview, offer, hired, rejected
    
    # AI Ranking
    match_score = Column(Float, default=0.0)
    ai_analysis = Column(JSON, default={})
    
    applied_at = Column(DateTime(timezone=True), server_default=func.now())
    
    job = relationship("Job", back_populates="applications")
    candidate = relationship("CandidateProfile", back_populates="applications")
