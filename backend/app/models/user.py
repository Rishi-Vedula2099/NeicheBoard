from sqlalchemy import Column, Integer, String, Boolean, ForeignKey, Enum, Float, JSON
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
import enum

Base = declarative_base()

class UserRole(str, enum.Enum):
    EMPLOYER = "employer"
    CANDIDATE = "candidate"
    ADMIN = "admin"

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    full_name = Column(String)
    role = Column(String, default=UserRole.CANDIDATE)
    is_active = Column(Boolean, default=True)
    
    employer_profile = relationship("EmployerProfile", back_populates="user", uselist=False)
    candidate_profile = relationship("CandidateProfile", back_populates="user", uselist=False)

class EmployerProfile(Base):
    __tablename__ = "employer_profiles"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    company_name = Column(String)
    website = Column(String)
    trust_score = Column(Float, default=50.0)
    verification_level = Column(Integer, default=1)
    
    user = relationship("User", back_populates="employer_profile")
    jobs = relationship("Job", back_populates="employer")

class CandidateProfile(Base):
    __tablename__ = "candidate_profiles"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    bio = Column(String)
    resume_url = Column(String)
    skills = Column(JSON, default=[])
    experience_years = Column(Integer, default=0)
    
    user = relationship("User", back_populates="candidate_profile")
    applications = relationship("Application", back_populates="candidate")
