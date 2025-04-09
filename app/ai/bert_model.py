from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch

# Cargaremos el tokenizador y el modelo Bert para análisis de sentimiento.
try:
    tokenizer = AutoTokenizer.from_pretrained("nlptown/bert-base-multilingual-uncased-sentiment")
    model = AutoModelForSequenceClassification.from_pretrained("nlptown/bert-base-multilingual-uncased-sentiment")
except Exception as e:
    print(f"Error al cargar el modelo Bert: {e}")
    tokenizer = None
    model = None

def obtener_bert_scores(texto: str) -> list:
    if tokenizer is None or model is None:
        return []

    inputs = tokenizer(texto, return_tensors="pt")
    try:
        with torch.no_grad():
            outputs = model(**inputs)
        logits = outputs.logits
        probabilities = torch.softmax(logits, dim=-1)[0].tolist()
        return probabilities
    except Exception as e:
        print(f"Error al procesar el texto con Bert: {e}")
        return []

if __name__ == "__main__":
    texto_prueba = "This was a surprisingly good experience!"
    scores = obtener_bert_scores(texto_prueba)
    print(f"Scores de Bert para '{texto_prueba}': {scores}")