from fastapi import APIRouter, HTTPException
from app.models.dto.message_request import SentimentRequest
from app.models.dto.message_response import SentimentResponse
from app.services.sentiment_service import analizar_sentimiento_con_bert


router = APIRouter(
    prefix="/message",
    tags=["Analizar mensaje"],
)

@router.post("/analizar_sentimiento/", response_model=SentimentResponse)
async def analizar_sentimiento(request: SentimentRequest):
    try:
        scores = analizar_sentimiento_con_bert(request.text)
        if not scores:
            raise HTTPException(status_code=500, detail="Error al obtener los scores de sentimiento.")
        return {"scores": scores}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Ocurrió un error durante el análisis de sentimiento: {e}")
