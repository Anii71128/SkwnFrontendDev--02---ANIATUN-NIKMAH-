$(document).ready(function () {

  /* =====================================================
        DATA ACTIVITY — contoh data
     ===================================================== */
  // const activities = [
  //   {
  //     title: "Netflix Subscription",
  //     category: "Entertainment",
  //     time: "10:24 AM",
  //     amount: "- $9.99",
  //     icon: "images/icon-netflix.png"
  //   },
  //   {
  //     title: "Top Up Wallet",
  //     category: "Finance",
  //     time: "Yesterday",
  //     amount: "+ $20.00",
  //     icon: "images/icon-topup.png"
  //   },
  //   {
  //     title: "Starbucks Coffee",
  //     category: "Food & Drink",
  //     time: "Tuesday",
  //     amount: "- $4.50",
  //     icon: "images/icon-coffee.png"
  //   }
  // ];

  /* =====================================================
        RENDER ACTIVITY LIST
     ===================================================== */
  activities.forEach(item => {
    const html = `
      <div class="activity-item" style="opacity:0; transform: translateY(15px);">
        <div class="activity-left">
          <div class="activity-icon">
            <img src="${item.icon}">
          </div>

          <div class="activity-info">
            <h5>${item.title}</h5>
            <span>${item.category}</span>
            <p>${item.time}</p>
          </div>
        </div>

        <div class="activity-right">
          <p>${item.amount}</p>
          <span>${item.time}</span>
        </div>
      </div>
    `;

    $("#activity-list").append(html);
  });

  /* =====================================================
        ANIMASI MASUK (fade + slide)
     ===================================================== */
  $(".activity-item").each(function (i) {
    $(this).delay(i * 120).animate(
      { opacity: 1, top: 0 },
      {
        duration: 350,
        step: function (now, fx) {
          if (fx.prop === "top") {
            $(this).css("transform", `translateY(${15 - (15 * now)}px)`);
          }
        }
      }
    );
  });

});

$(document).ready(function () {
  
  const activities = [
    {
      type: "deposit",
      title: "Deposit",
      amount: "Rp15.510.000,-",
      bank: "Bank Mandiri ATM",
      date: "11 March 2022",
      time: "11.21 AM",
      icon: "assets/upicon.png"
    },
    {
      type: "withdraw",
      title: "Withdraw",
      amount: "Rp15.510.000,-",
      bank: "Bank Mandiri ATM",
      date: "11 March 2022",
      time: "11.22 AM",
      icon: "assets/downicon.png"
    },
    {
      type: "withdraw",
      title: "Withdraw",
      amount: "Rp15.510.000,-",
      bank: "Bank Mandiri ATM",
      date: "11 March 2022",
      time: "11.22 AM",
      icon: "assets/downicon.png"
    },
  ];

  activities.forEach(act => {

    const colorClass = act.type === "deposit" ? "blue" : "red";
    const amountClass = act.type === "deposit" ? "amount-blue" : "amount-red";

    const html = `
      <div class="activity-item">

        <div class="activity-left">
          <div class="activity-icon ${colorClass}">
            <img src="${act.icon}">
          </div>

          <div class="activity-info">
            <h5>${act.title}</h5>
            <div class="${amountClass}">${act.amount}</div>

            <div class="location">
              <img src="assets/locationicon.png">
              <span>${act.bank}</span>
            </div>
          </div>
        </div>

        <div class="activity-right">
          <div class="date">${act.date}</div>
          <div class="time">${act.time}</div>
        </div>

      </div>
    `;

    $("#activity-list").append(html);
  });

});

$(".nav-item").on("click", function() {
  $(".nav-item").removeClass("active");
  $(this).addClass("active");
});

$(".nav-item[data-page='history']").on("click", function () {
  $("body").fadeOut(200, function () {
    window.location.href = "account-finance.html";
  });
});
