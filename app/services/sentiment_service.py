from app.ai.bert_model import obtener_bert_scores

def analizar_sentimiento_con_bert(texto: str) -> list:
    return obtener_bert_scores(texto)

if __name__ == "__main__":
    texto_prueba = "The service was slow and the food was mediocre."
    resultados = analizar_sentimiento_con_bert(texto_prueba)
    print(f"Resultados del servicio de sentimiento: {resultados}")