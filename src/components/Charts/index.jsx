// components/Charts.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Charts = ({ birthdaysByMonth }) => {
  const monthColors = [
    'rgba(255, 99, 132, 0.8)',  // January
    'rgba(54, 162, 235, 0.8)',  // February
    'rgba(255, 206, 86, 0.8)',  // March
    'rgba(75, 192, 192, 0.8)',  // April
    'rgba(153, 102, 255, 0.8)', // May
    'rgba(255, 159, 64, 0.8)',  // June
    'rgba(255, 99, 132, 0.8)',  // July
    'rgba(54, 162, 235, 0.8)',  // August
    'rgba(255, 206, 86, 0.8)',  // September
    'rgba(75, 192, 192, 0.8)',  // October
    'rgba(153, 102, 255, 0.8)', // November
    'rgba(255, 159, 64, 0.8)',  // December
  ];

  const monthBorderColors = [
    'rgba(255, 99, 132, 1)',  // January
    'rgba(54, 162, 235, 1)',  // February
    'rgba(255, 206, 86, 1)',  // March
    'rgba(75, 192, 192, 1)',  // April
    'rgba(153, 102, 255, 1)', // May
    'rgba(255, 159, 64, 1)',  // June
    'rgba(255, 99, 132, 1)',  // July
    'rgba(54, 162, 235, 1)',  // August
    'rgba(255, 206, 86, 1)',  // September
    'rgba(75, 192, 192, 1)',  // October
    'rgba(153, 102, 255, 1)', // November
    'rgba(255, 159, 64, 1)',  // December
  ];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const data = {
    labels: months,
    datasets: [
      {
        label: 'Users',
        data: months.map((_, index) => birthdaysByMonth[index] || 0),
        backgroundColor: monthColors,
        borderColor: monthBorderColors,
        borderWidth: 1,
      },
    ],
  };

  const legendItems = data.labels.map((label, index) => ({
    text: label,
    color: data.datasets[0].backgroundColor[index],
  }));

  return (
    <div>
      <Pie data={data} options={{ plugins: { legend: { display: false } } }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginTop: '20px' }}>
        {legendItems.map((item, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '20px', height: '20px', backgroundColor: item.color, marginRight: '10px' }}></div>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Charts;
