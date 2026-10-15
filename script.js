document.addEventListener("DOMContentLoaded", function () {


  /* =========================
     ROUTE DATA
  ========================= */

  const routes = {

    "10": {
      capacity: 100,

      stops: [
        {
          name: "Железнодорожный вокзал",
          lat: 51.195,
          lng: 71.409,
          factor: 0.60
        },

        {
          name: "Биржан Сала",
          lat: 51.190,
          lng: 71.414,
          factor: 0.48
        },

        {
          name: "Агротехнический университет",
          lat: 51.174,
          lng: 71.421,
          factor: 0.55
        },

        {
          name: "Медицинский университет",
          lat: 51.169,
          lng: 71.423,
          factor: 0.58
        },

        {
          name: "Проспект Республики",
          lat: 51.162,
          lng: 71.431,
          factor: 0.64
        },

        {
          name: "Парк Ататюрк",
          lat: 51.146,
          lng: 71.433,
          factor: 0.45
        },

        {
          name: "Динмухамеда Кунаева",
          lat: 51.133,
          lng: 71.433,
          factor: 0.54
        },

        {
          name: "Туран",
          lat: 51.124,
          lng: 71.420,
          factor: 0.60
        },

        {
          name: "Кабанбай батыра",
          lat: 51.111,
          lng: 71.426,
          factor: 0.56
        },

        {
          name: "Международный аэропорт",
          lat: 51.022,
          lng: 71.467,
          factor: 0.50
        }
      ]
    },


    "21": {
      capacity: 105,

      stops: [
        {
          name: "Железнодорожный вокзал",
          lat: 51.195,
          lng: 71.409,
          factor: 0.60
        },

        {
          name: "Театр Жастар",
          lat: 51.181,
          lng: 71.417,
          factor: 0.43
        },

        {
          name: "Проспект Женис",
          lat: 51.173,
          lng: 71.420,
          factor: 0.50
        },

        {
          name: "ЖК Сарайшык",
          lat: 51.151,
          lng: 71.437,
          factor: 0.45
        },

        {
          name: "Рахимжана Кошкарбаева",
          lat: 51.137,
          lng: 71.462,
          factor: 0.53
        },

        {
          name: "Ахмета Байтурсынова",
          lat: 51.120,
          lng: 71.470,
          factor: 0.46
        },

        {
          name: "Дворец творчества Шабыт",
          lat: 51.116,
          lng: 71.468,
          factor: 0.55
        },

        {
          name: "Тауелсыздык",
          lat: 51.111,
          lng: 71.462,
          factor: 0.51
        },

        {
          name: "Мангилик Ел",
          lat: 51.101,
          lng: 71.437,
          factor: 0.59
        },

        {
          name: "Вокзал Нурлы Жол",
          lat: 51.100,
          lng: 71.531,
          factor: 0.58
        }
      ]
    },


    "26": {
      capacity: 105,

      stops: [
        {
          name: "Ж/м Караоткель",
          lat: 51.198,
          lng: 71.337,
          factor: 0.32
        },

        {
          name: "Акыртас",
          lat: 51.191,
          lng: 71.348,
          factor: 0.34
        },

        {
          name: "Проспект Тауелсиздик",
          lat: 51.170,
          lng: 71.414,
          factor: 0.51
        },

        {
          name: "ТРЦ Ажар",
          lat: 51.164,
          lng: 71.423,
          factor: 0.56
        },

        {
          name: "Шарля де Голля",
          lat: 51.154,
          lng: 71.428,
          factor: 0.42
        },

        {
          name: "Медицинский центр",
          lat: 51.147,
          lng: 71.434,
          factor: 0.48
        },

        {
          name: "Школа-гимназия №30",
          lat: 51.141,
          lng: 71.439,
          factor: 0.45
        },

        {
          name: "Алексея Петрова",
          lat: 51.136,
          lng: 71.445,
          factor: 0.41
        },

        {
          name: "ТД Меридиан",
          lat: 51.129,
          lng: 71.451,
          factor: 0.56
        },

        {
          name: "СК Казахстан",
          lat: 51.124,
          lng: 71.457,
          factor: 0.62
        },

        {
          name: "ТД Орбита",
          lat: 51.118,
          lng: 71.462,
          factor: 0.57
        },

        {
          name: "Монумент Защитников Отечества",
          lat: 51.112,
          lng: 71.465,
          factor: 0.59
        }
      ]
    },


    "40": {
      capacity: 110,

      stops: [
        {
          name: "Железнодорожный вокзал",
          lat: 51.195,
          lng: 71.409,
          factor: 0.61
        },

        {
          name: "Театр Жастар",
          lat: 51.181,
          lng: 71.417,
          factor: 0.46
        },

        {
          name: "Алтынсарина",
          lat: 51.177,
          lng: 71.419,
          factor: 0.42
        },

        {
          name: "Алии Молдагуловой",
          lat: 51.173,
          lng: 71.421,
          factor: 0.44
        },

        {
          name: "Школа-лицей №15",
          lat: 51.169,
          lng: 71.420,
          factor: 0.48
        },

        {
          name: "Университет искусств",
          lat: 51.163,
          lng: 71.419,
          factor: 0.53
        },

        {
          name: "Городская поликлиника №1",
          lat: 51.157,
          lng: 71.420,
          factor: 0.51
        },

        {
          name: "Дворец Жастар",
          lat: 51.151,
          lng: 71.421,
          factor: 0.56
        },

        {
          name: "Астаналык базар",
          lat: 51.146,
          lng: 71.423,
          factor: 0.59
        },

        {
          name: "Улица Кенесары",
          lat: 51.139,
          lng: 71.429,
          factor: 0.55
        },

        {
          name: "Евразийский национальный университет",
          lat: 51.132,
          lng: 71.470,
          factor: 0.61
        },

        {
          name: "Пожарная часть №4",
          lat: 51.106,
          lng: 71.402,
          factor: 0.40
        }
      ]
    },


    "44": {
      capacity: 98,

      stops: [
        {
          name: "Ж/м Жагалау-3",
          lat: 51.151,
          lng: 71.353,
          factor: 0.36
        },

        {
          name: "ЖК Кулагер",
          lat: 51.149,
          lng: 71.361,
          factor: 0.39
        },

        {
          name: "Улица Айтматова",
          lat: 51.145,
          lng: 71.372,
          factor: 0.42
        },

        {
          name: "Университет технологии и бизнеса",
          lat: 51.142,
          lng: 71.381,
          factor: 0.53
        },

        {
          name: "ЖК Дания",
          lat: 51.138,
          lng: 71.389,
          factor: 0.43
        },

        {
          name: "Школа Жасулан",
          lat: 51.134,
          lng: 71.398,
          factor: 0.47
        },

        {
          name: "Автоцентр Сарыарка",
          lat: 51.132,
          lng: 71.407,
          factor: 0.48
        },

        {
          name: "РЦ Думан",
          lat: 51.130,
          lng: 71.414,
          factor: 0.55
        },

        {
          name: "Александра Бараева",
          lat: 51.128,
          lng: 71.423,
          factor: 0.53
        },

        {
          name: "Монумент Защитников Отечества",
          lat: 51.112,
          lng: 71.465,
          factor: 0.61
        },

        {
          name: "ТД Орбита",
          lat: 51.109,
          lng: 71.468,
          factor: 0.58
        },

        {
          name: "ТЦ Евразия",
          lat: 51.104,
          lng: 71.472,
          factor: 0.65
        }
      ]
    },


    "50": {
      capacity: 105,

      stops: [
        {
          name: "ЖК Коктем",
          lat: 51.210,
          lng: 71.370,
          factor: 0.36
        },

        {
          name: "Парк Коктал",
          lat: 51.202,
          lng: 71.379,
          factor: 0.39
        },

        {
          name: "Средняя школа №106",
          lat: 51.194,
          lng: 71.389,
          factor: 0.43
        },

        {
          name: "Детский сад Бал-бала",
          lat: 51.184,
          lng: 71.400,
          factor: 0.41
        },

        {
          name: "Поликлиника №10",
          lat: 51.171,
          lng: 71.415,
          factor: 0.48
        },

        {
          name: "Улица Сейфуллина",
          lat: 51.160,
          lng: 71.421,
          factor: 0.52
        },

        {
          name: "Улица Кенесары",
          lat: 51.149,
          lng: 71.426,
          factor: 0.55
        },

        {
          name: "Парк Астана",
          lat: 51.136,
          lng: 71.419,
          factor: 0.51
        },

        {
          name: "Национальный музей",
          lat: 51.118,
          lng: 71.470,
          factor: 0.62
        },

        {
          name: "Президентский парк",
          lat: 51.111,
          lng: 71.465,
          factor: 0.53
        },

        {
          name: "Мангилик Ел",
          lat: 51.101,
          lng: 71.437,
          factor: 0.59
        },

        {
          name: "Ж/м Промышленный",
          lat: 51.092,
          lng: 71.493,
          factor: 0.31
        }
      ]
    }

  };


  /* =========================
     ELEMENTS
  ========================= */

  const routeSelect =
    document.getElementById("route");

  const stopSelect =
    document.getElementById("stop");

  const timeInput =
    document.getElementById("time");

  const predictButton =
    document.getElementById("predictButton");

  const stopSearch =
    document.getElementById("stopSearch");

  const searchButton =
    document.getElementById("searchButton");

  const routeStops =
    document.getElementById("routeStops");

  const searchMessage =
    document.getElementById("searchMessage");


  /* =========================
     MAP
  ========================= */

  let map = null;

  let markers = [];

  let routeLine = null;


  function initializeMap() {

    if (
      typeof L === "undefined"
    ) {

      console.log(
        "Map library did not load. Other website functions will still work."
      );

      return;

    }


    try {

      map =
        L.map("map")
        .setView(
          [51.145, 71.430],
          11
        );


      L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {

          attribution:
            "&copy; OpenStreetMap contributors"

        }
      ).addTo(map);


    }

    catch (error) {

      console.log(
        "Map error:",
        error
      );


      map =
        null;

    }

  }


  function clearMap() {

    if (!map) {
      return;
    }


    markers.forEach(
      function (marker) {

        map.removeLayer(marker);

      }
    );


    markers = [];


    if (routeLine) {

      map.removeLayer(
        routeLine
      );

      routeLine =
        null;

    }

  }


  function drawRouteOnMap() {

    if (!map) {
      return;
    }


    clearMap();


    const route =
      routes[
        routeSelect.value
      ];


    const coordinates =
      [];


    route.stops.forEach(
      function (stop, index) {


        coordinates.push(
          [
            stop.lat,
            stop.lng
          ]
        );


        const marker =
          L.marker(
            [
              stop.lat,
              stop.lng
            ]
          );


        marker
        .addTo(map)
        .bindPopup(
          `
          <strong>
            ${stop.name}
          </strong>

          <br>

          Bus ${routeSelect.value}
          `
        );


        marker.on(
          "click",
          function () {


            stopSelect.value =
              index;


            calculatePrediction();


          }
        );


        markers.push(
          marker
        );


      }
    );


    routeLine =
      L.polyline(
        coordinates,
        {
          weight: 5
        }
      )
      .addTo(map);


    try {

      map.fitBounds(
        routeLine.getBounds(),
        {
          padding:
            [30, 30]
        }
      );

    }

    catch (error) {

      console.log(error);

    }

  }


  function focusSelectedStop() {

    if (!map) {
      return;
    }


    const route =
      routes[
        routeSelect.value
      ];


    const stopIndex =
      Number(
        stopSelect.value
      );


    const stop =
      route.stops[
        stopIndex
      ];


    if (!stop) {
      return;
    }


    map.flyTo(
      [
        stop.lat,
        stop.lng
      ],
      14,
      {
        duration:
          0.7
      }
    );

  }


  /* =========================
     STOP LIST
  ========================= */

  function loadStops() {

    const route =
      routes[
        routeSelect.value
      ];


    stopSelect.innerHTML =
      "";


    route.stops.forEach(
      function (stop, index) {


        const option =
          document.createElement(
            "option"
          );


        option.value =
          index;


        option.textContent =
          stop.name;


        stopSelect.appendChild(
          option
        );


      }
    );


    stopSelect.value =
      0;


    stopSearch.value =
      "";


    searchMessage.textContent =
      "";


    renderStopButtons();


    drawRouteOnMap();


    calculatePrediction();

  }


  function renderStopButtons() {

    const route =
      routes[
        routeSelect.value
      ];


    const selectedIndex =
      Number(
        stopSelect.value
      );


    const searchText =
      stopSearch.value
      .toLowerCase()
      .trim();


    routeStops.innerHTML =
      "";


    let numberFound =
      0;


    route.stops.forEach(
      function (stop, index) {


        const matches =
          stop.name
          .toLowerCase()
          .includes(
            searchText
          );


        if (!matches) {

          return;

        }


        numberFound++;


        const button =
          document.createElement(
            "button"
          );


        button.type =
          "button";


        button.className =
          "stop-button";


        if (
          index ===
          selectedIndex
        ) {

          button.classList.add(
            "active"
          );

        }


        button.textContent =
          `${index + 1}. ${stop.name}`;


        button.addEventListener(
          "click",
          function () {


            stopSelect.value =
              index;


            calculatePrediction();


          }
        );


        routeStops.appendChild(
          button
        );


      }
    );


    if (
      numberFound === 0
    ) {


      searchMessage.textContent =
        "No stops found.";


    }

    else {


      searchMessage.textContent =
        "";


    }

  }


  /* =========================
     OCCUPANCY
  ========================= */

  function getTimeFactor(hour) {

    if (
      hour >= 7 &&
      hour < 9
    ) {

      return 0.25;

    }


    if (
      hour >= 17 &&
      hour < 20
    ) {

      return 0.30;

    }


    if (
      hour >= 12 &&
      hour < 14
    ) {

      return 0.12;

    }


    if (
      hour >= 21 ||
      hour < 6
    ) {

      return -0.15;

    }


    return 0.03;

  }


  function calculatePrediction() {

    const routeNumber =
      routeSelect.value;


    const route =
      routes[
        routeNumber
      ];


    const stopIndex =
      Number(
        stopSelect.value
      );


    const stop =
      route.stops[
        stopIndex
      ];


    if (!stop) {

      return;

    }


    const timeValue =
      timeInput.value ||
      "12:00";


    const timeParts =
      timeValue.split(":");


    const hour =
      Number(
        timeParts[0]
      ) +

      Number(
        timeParts[1]
      ) / 60;


    const timeFactor =
      getTimeFactor(
        hour
      );


    const variation =
      Math.sin(
        stopIndex * 1.31 +
        hour * 0.65
      ) * 5;


    let occupancy =

      20 +

      stop.factor * 60 +

      timeFactor * 70 +

      variation;


    occupancy =
      Math.round(
        occupancy
      );


    occupancy =
      Math.max(
        15,
        Math.min(
          96,
          occupancy
        )
      );


    const passengers =
      Math.round(
        route.capacity *
        occupancy /
        100
      );


    updatePredictionUI(
      occupancy,
      passengers,
      route,
      routeNumber,
      hour
    );


    renderStopButtons();


    focusSelectedStop();

  }


  function updatePredictionUI(
    occupancy,
    passengers,
    route,
    routeNumber,
    hour
  ) {


    document
    .getElementById(
      "percent"
    )
    .textContent =
      occupancy + "%";


    document
    .getElementById(
      "passengers"
    )
    .textContent =
      passengers;


    document
    .getElementById(
      "capacity"
    )
    .textContent =
      route.capacity;


    document
    .getElementById(
      "heroPercent"
    )
    .textContent =
      occupancy + "%";


    document
    .getElementById(
      "heroRoute"
    )
    .textContent =
      "Bus " +
      routeNumber;


    const status =
      document.getElementById(
        "status"
      );


    const progressBar =
      document.getElementById(
        "progressBar"
      );


    let nextBus =
      8;


    if (
      occupancy < 45
    ) {

      status.textContent =
        "Low";


      status.className =
        "status low";


      progressBar.style.background =
        "#22c55e";


      document
      .getElementById(
        "heroStatus"
      )
      .textContent =
        "Low occupancy";


      document
      .getElementById(
        "recommendation"
      )
      .textContent =
        "Take this bus.";


      document
      .getElementById(
        "recommendationDetail"
      )
      .textContent =
        "The bus is expected to have enough free space.";

    }


    else if (
      occupancy < 75
    ) {

      status.textContent =
        "Medium";


      status.className =
        "status medium";


      progressBar.style.background =
        "#f59e0b";


      document
      .getElementById(
        "heroStatus"
      )
      .textContent =
        "Medium occupancy";


      document
      .getElementById(
        "recommendation"
      )
      .textContent =
        "You can take this bus.";


      document
      .getElementById(
        "recommendationDetail"
      )
      .textContent =
        "The bus may be moderately crowded.";

    }


    else {

      status.textContent =
        "High";


      status.className =
        "status high";


      progressBar.style.background =
        "#ef4444";


      document
      .getElementById(
        "heroStatus"
      )
      .textContent =
        "High occupancy";


      document
      .getElementById(
        "recommendation"
      )
      .textContent =
        "Wait for the next bus if possible.";


      document
      .getElementById(
        "recommendationDetail"
      )
      .textContent =
        "The next bus may be less crowded.";


      nextBus =
        6;

    }


    progressBar.style.width =
      occupancy + "%";


    document
    .getElementById(
      "heroNext"
    )
    .textContent =
      nextBus + " min";


    let context =
      "Normal traffic period.";


    if (
      hour >= 7 &&
      hour < 9
    ) {

      context =
        "Morning peak increases passenger demand.";

    }


    else if (
      hour >= 17 &&
      hour < 20
    ) {

      context =
        "Evening peak increases passenger demand.";

    }


    else if (
      hour >= 21 ||
      hour < 6
    ) {

      context =
        "Passenger demand is usually lower at this time.";

    }


    document
    .getElementById(
      "contextText"
    )
    .textContent =
      context;

  }


  /* =========================
     SEARCH
  ========================= */

  function searchStop() {

    const route =
      routes[
        routeSelect.value
      ];


    const searchText =
      stopSearch.value
      .toLowerCase()
      .trim();


    if (
      searchText === ""
    ) {

      renderStopButtons();

      return;

    }


    const foundIndex =
      route.stops.findIndex(
        function (stop) {


          return stop.name
          .toLowerCase()
          .includes(
            searchText
          );


        }
      );


    if (
      foundIndex === -1
    ) {

      searchMessage.textContent =
        "Stop not found on this route.";

      return;

    }


    searchMessage.textContent =
      "";


    stopSelect.value =
      foundIndex;


    calculatePrediction();

  }


  /* =========================
     EVENTS
  ========================= */


  routeSelect.addEventListener(
    "change",
    loadStops
  );


  stopSelect.addEventListener(
    "change",
    calculatePrediction
  );


  timeInput.addEventListener(
    "change",
    calculatePrediction
  );


  predictButton.addEventListener(
    "click",
    calculatePrediction
  );


  stopSearch.addEventListener(
    "input",
    renderStopButtons
  );


  searchButton.addEventListener(
    "click",
    searchStop
  );


  stopSearch.addEventListener(
    "keydown",
    function (event) {


      if (
        event.key === "Enter"
      ) {

        searchStop();

      }


    }
  );


  /* =========================
     START WEBSITE
  ========================= */


  /*
    IMPORTANT:
    STOP LIST LOADS FIRST.

    This means that even if the map
    fails, stops will still appear.
  */

  loadStops();


  /*
    Map initializes separately.
  */

  initializeMap();


  /*
    Draw map only after map exists.
  */

  drawRouteOnMap();


});
