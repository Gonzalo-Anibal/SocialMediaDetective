from pydantic import BaseModel

class SentimentResponse(BaseModel):
    scores: list