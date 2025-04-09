import { useState } from 'react';

function useSentimentAnalysis() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState(null);
  const API_URL = 'http://localhost:8000/message/analizar_sentimiento/';

  const analyzeSentiment = async (text) => {
    setLoading(true);
    setError(null);
    setResults(null);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Error al analizar el sentimiento');
      }

      const data = await response.json();
      setResults(data);
      return data;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { analyzeSentiment, loading, error, results };
}

export default useSentimentAnalysis;