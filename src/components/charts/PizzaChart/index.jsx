import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import themeColors from '../../../styles/theme'
import './styles.css'

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels)

const monthColors = [
  themeColors.palette.primary.light,
  themeColors.palette.secondary.light,
  themeColors.palette.error.light,
  themeColors.palette.warning.light,
  themeColors.palette.success.light,
  themeColors.palette.info.light,
  themeColors.palette.primary.main,
  themeColors.palette.secondary.main,
  themeColors.palette.error.main,
  themeColors.palette.warning.main,
  themeColors.palette.success.main,
  themeColors.palette.info.main,
]

const monthBorderColors = [
  themeColors.palette.primary.dark,
  themeColors.palette.secondary.dark,
  themeColors.palette.error.dark,
  themeColors.palette.warning.dark,
  themeColors.palette.success.dark,
  themeColors.palette.info.dark,
  themeColors.palette.primary.dark,
  themeColors.palette.secondary.dark,
  themeColors.palette.error.dark,
  themeColors.palette.warning.dark,
  themeColors.palette.success.dark,
  themeColors.palette.info.dark,
]

const months = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
]

const getLegendItems = (data) => data.labels.map((label, index) => ({
  text: label,
  color: data.datasets[0].backgroundColor[index],
}))

const ChartLegend = ({ legendItems }) => (
  <div>
    <h6 align="center">Gráfico de aniversário (mês)</h6>
    <div className="chart-legend">
      {legendItems.map((item, index) => (
        <div key={index} className="legend-item">
          <div className="color-box" style={{ backgroundColor: item.color }}></div>
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  </div>
)

const Charts = ({ birthdaysByMonth }) => {
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
  }

  const legendItems = getLegendItems(data)

  return (
    <div className="chart-container">
      <Doughnut
        data={data}
        options={{
          plugins: {
            legend: { display: false },
            datalabels: {
              color: '#fff',
              formatter: (value, context) => {
                if (value === 0) return ''
                const total = context.chart._metasets[0].total
                const percentage = ((value / total) * 100).toFixed(1) + '%'
                return percentage
              },
              font: {
                weight: 'bold',
                size: 14,
              },
            },
          },
          responsive: true,
          maintainAspectRatio: true,
        }}
        aria-label="Doughnut chart showing the distribution of birthdays by month"
      />
      <ChartLegend legendItems={legendItems} />
    </div>
  )
}

export default Charts
