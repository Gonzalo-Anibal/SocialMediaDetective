# Modelo de BERT para predecir el sentimiento de un texto en español

Utilidad para predecir el sentimiento de un texto utilizando BERT (BertTokenizer, BertForSequenceClassification, BertModel)

[![Hugging Face Hub](https://huggingface.co/front/assets/huggingface_logo-noborder.svg)](https://huggingface.co/nlptown/bert-base-multilingual-uncased-sentiment) [nlptown/bert-base-multilingual-uncased-sentiment](https://huggingface.co/nlptown/bert-base-multilingual-uncased-sentiment)

Comandos para descargar e instalar el modelo:

``` bash
pip3 install torch

pip3 install transformers

pip install numpy==1.26.4  # Ejemplo: instala la última versión 1.x

cd test_models_ia/

python3 main.py
```

## Run Programa

``` bash
uvicorn app.main:app --reload
``` 

``` bash
cd social-media-detective
npm start
```

### Swagger y Redoc

Para ver la documentación de la API en Swagger:

> http://localhost:8000/docs

Para ver la documentación de la API en ReDoc:

> http://localhost:8000/redoc

### Navegación

Para utilizar el aplicativo web, navegue a la siguiente URL:

> http://localhost:3000/