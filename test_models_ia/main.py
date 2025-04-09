# Use a pipeline as a high-level helper
from transformers import pipeline

sentiment_analyzer = pipeline("text-classification", model="nlptown/bert-base-multilingual-uncased-sentiment")
result_sentiment = sentiment_analyzer("el joven de la plaza me cayo como el hoyo")
print(result_sentiment)
print(f"Sentiment Analysis Result: {result_sentiment}")