import React from 'react';
import { useLocation } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

function ResultsPage() {
  const location = useLocation();
  const results = location.state?.results?.scores;

  if (!results) {
    return <div className="container mt-5"><div className="alert alert-warning">No hay resultados para mostrar.</div></div>;
  }

  const labels = ['Muy Negativo', 'Negativo', 'Neutral', 'Positivo', 'Muy Positivo'];
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Probabilidad de Sentimiento',
        data: results,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 205, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(54, 162, 235, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 1,
        title: {
          display: true,
          text: 'Probabilidad',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Análisis de Sentimiento (Probabilidades de Opinión)',
        fontSize: 20,
      },
    },
  };

  const maxProbability = Math.max(...results);
  const predominantSentimentIndex = results.indexOf(maxProbability);
  const predominantSentimentLabel = labels[predominantSentimentIndex];

  const sentimentColors = [
    'danger',
    'warning',
    'secondary',
    'info',
    'primary',
  ];

  return (
    <div className="container mt-5">
      <h1>Resultados del Análisis de Sentimiento</h1>
      {results && (
        <div className="row">
          <div className="col-md-6">
            <div className="chart-container">
              <Bar data={data} options={options} />
            </div>
          </div>
          <div className="col-md-6">
            <h2>Sentimiento Predominante:</h2>
            <div className={`alert alert-${sentimentColors[predominantSentimentIndex]}`}>
              {predominantSentimentLabel}
            </div>
            <p>El modelo predice que el sentimiento general del texto se inclina hacia <strong>{predominantSentimentLabel}</strong> con una probabilidad de <strong>{(maxProbability * 100).toFixed(2)}%</strong>.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResultsPage;