from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    PROJECT_NAME: str = "NeicheBoard"
    API_V1_STR: str = "/api/v1"
    SECRET_KEY: str = "YOUR_SUPER_SECRET_KEY_CHANGE_ME"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 8  # 8 days
    
    DATABASE_URL: str = "postgresql://user:pass@db:5432/neicheboard"
    REDIS_URL: str = "redis://redis:6379/0"
    OLLAMA_HOST: str = "http://ollama:11434"

    class Config:
        case_sensitive = True

settings = Settings()
