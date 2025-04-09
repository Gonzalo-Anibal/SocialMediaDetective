import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSentimentAnalysis from '../hooks/useSentimentAnalysis';

function HomePage() {
  const [textToAnalyze, setTextToAnalyze] = useState('');
  const { analyzeSentiment, loading, error } = useSentimentAnalysis();
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setTextToAnalyze(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const analysisResults = await analyzeSentiment(textToAnalyze);
    if (analysisResults) {
      navigate('/results', { state: { results: analysisResults } });
    }
  };

  return (
    <div className="container mt-5">
      <h1>Analizador de Sentimiento</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="sentimentTextarea" className="form-label">Ingrese el texto que desea analizar:</label>
          <textarea
            className="form-control"
            id="sentimentTextarea"
            value={textToAnalyze}
            onChange={handleInputChange}
            rows="8"
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Analizando...' : 'Analizar Sentimiento'}
        </button>
        {error && <div className="alert alert-danger mt-3">{error}</div>}
      </form>
    </div>
  );
}

export default HomePage;