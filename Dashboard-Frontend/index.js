import jsonData from './frontend-data-set.json';

document.addEventListener('DOMContentLoaded', function () {
  const minecraftButton = document.querySelector('#minecraftButton');
  const leagueOfLegendsButton = document.querySelector('#leagueOfLegendsButton');
  const toggleChartTypeButton = document.querySelector('#toggleChartTypeButton');

  const minecraftData = jsonData.filter((gameData) => gameData.game === 'Minecraft');
  const minecraftUsers = minecraftData.map((gameData) => gameData.activeUsers);
  const minecraftDate = minecraftData.map((gameData) => gameData.date);

  const leagueOfLegendsData = jsonData.filter((gameData) => gameData.game === 'League of Legends');
  const leagueOfLegendsUsers = leagueOfLegendsData.map((gameData) => gameData.activeUsers);

  const canvas = document.getElementById('canvas');

  const myChart = new Chart(canvas, {
    type: 'line',
    data: {
      labels: minecraftDate,
      datasets: [
        {
          label: '# Active Minecraft Users',
          data: minecraftUsers,
          borderWidth: 1,
        },
        {
          label: '# Active League of Legends Users',
          data: leagueOfLegendsUsers,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  function toggleChartType() {
    myChart.config.type = myChart.config.type === 'line' ? 'bar' : 'line';
    myChart.update();
  }

  toggleChartTypeButton.addEventListener('click', () => {
    toggleChartTypeButton.textContent =
      toggleChartTypeButton.textContent === 'Toggle Bar' ? ' Toggle Line' : 'Toggle Bar';
    toggleChartType();
  });

  function toggleDatasetVisibility(datasetIndex) {
    const dataset = myChart.data.datasets[datasetIndex];
    dataset.hidden = !dataset.hidden;
    myChart.update();
  }

  minecraftButton.addEventListener('click', () => {
    toggleDatasetVisibility(0);
  });

  leagueOfLegendsButton.addEventListener('click', () => {
    toggleDatasetVisibility(1);
  });
});
