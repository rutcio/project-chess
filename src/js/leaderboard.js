const leaderboardContent = document.getElementById('leaderboardContent');

fetch ("https://api.chess.com/pub/leaderboards")
  .then(response => {
    return response.json();
  })
  .then(data => {
    const leaderboardID = document.getElementById('leaderboardID');

    for (var i = 0; i < data.live_rapid.length; i++) {
      const username = data.live_rapid[i].username;
      const rank =  data.live_rapid[i].rank;
      const score = data.live_rapid[i].score;

      const newRow = document.createElement("tr");
      newRow.classList.add("table__row");
      newRow.innerHTML = `
                    <td class="table__item">${rank}</td>
                    <td class="table__item">${username}</td>
                    <td class="table__item">${score}</td>
                `;

      leaderboardID.appendChild(newRow);
    }
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
  