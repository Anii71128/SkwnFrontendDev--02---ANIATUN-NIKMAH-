$(document).ready(function () {
  $(".history-item").each(function (i) {
    $(this)
      .delay(150 * i)
      .queue(function (next) {
        $(this).css("opacity", "1");
        next();
      });
  });
});

$(document).ready(function () {

  const historyData = [
    {
      color: "blue",
      icon: "assets/upicon.png",
      title: "Deposit",
      amount: "Rp15.510.000,-",
      location: "Bank Mandiri ATM",
      date: "11 March 2022",
      time: "11.21 AM"
    },
    {
      color: "red",
      icon: "assets/downicon.png",
      title: "Withdraw",
      amount: "Rp15.510.000,-",
      location: "Bank Mandiri ATM",
      date: "11 March 2022",
      time: "11.22 AM"
    },
    {
      color: "red",
      icon: "assets/downicon.png",
      title: "Withdraw",
      amount: "Rp15.510.000,-",
      location: "Bank Mandiri ATM",
      date: "11 March 2022",
      time: "11.22 AM"
    }
  ];

  historyData.forEach(item => {

    const card = `
      <div class="history-card ${item.color}">
        <div class="left">
          <img src="${item.icon}" class="icon-circle">
          <div>
            <p class="title">${item.title}</p>
            <p class="amount ${item.color}-text">${item.amount}</p>
            <p class="location"><img src="assets/locationicon.png" class="icon-xs"> ${item.location}</p>
          </div>
        </div>

        <div class="right">
          <p class="date-small">${item.date}</p>
          <p class="time">${item.time}</p>
        </div>
      </div>
    `;

    $("#history-list").append(card);
  });

});

// const ctx = document.getElementById("statsChart").getContext("2d");

// new Chart(ctx, {
//   type: "line",
//   data: {
//     labels: ["", "", "", "", "", "", "", ""],
//     datasets: [{
//       data: [30, 110, 95, 50, 105, 70, 20, 140], 
//       borderColor: "#45C6FF",
//       borderWidth: 4,
//       fill: false,
//       tension: 0.65,
//       pointRadius: 0,
//     }]
//   },

//   options: {
//     responsive: true,
//     maintainAspectRatio: false,

//     aspectRatio: 2.4,   // ← penting agar bentuk sesuai contoh

//     layout: {
//       padding: {
//         left: -10,
//         right: -10,
//         top: 10,
//         bottom: 10,
//       }
//     },

//     scales: {
//       x: { display: false },
//       y: { display: false }
//     },

//     plugins: {
//       legend: { display: false },
//       tooltip: { enabled: false }
//     }
//   }
// });
