document.addEventListener(
  "DOMContentLoaded",
  function () {


/* =========================================
   ROUTE DATA
   Simulated data for educational prototype
========================================= */

const routes = {

  "10": {

    capacity: 100,

    stops: [

      {
        name: "Railway Station",
        lat: 51.195,
        lng: 71.409,
        factor: 0.70
      },

      {
        name: "Birzhan Sal",
        lat: 51.190,
        lng: 71.414,
        factor: 0.45
      },

      {
        name: "Agricultural University",
        lat: 51.174,
        lng: 71.421,
        factor: 0.55
      },

      {
        name: "Medical University",
        lat: 51.169,
        lng: 71.423,
        factor: 0.60
      },

      {
        name: "Respublika Avenue",
        lat: 51.162,
        lng: 71.431,
        factor: 0.67
      },

      {
        name: "Ataturk Park",
        lat: 51.146,
        lng: 71.433,
        factor: 0.40
      },

      {
        name: "Kunayev Street",
        lat: 51.133,
        lng: 71.433,
        factor: 0.55
      },

      {
        name: "Turan Avenue",
        lat: 51.124,
        lng: 71.420,
        factor: 0.61
      },

      {
        name: "Kabanbay Batyr",
        lat: 51.111,
        lng: 71.426,
        factor: 0.58
      },

      {
        name: "International Airport",
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
        name: "Railway Station",
        lat: 51.195,
        lng: 71.409,
        factor: 0.68
      },

      {
        name: "Zhastar Theatre",
        lat: 51.181,
        lng: 71.417,
        factor: 0.40
      },

      {
        name: "Zhenis Avenue",
        lat: 51.173,
        lng: 71.420,
        factor: 0.51
      },

      {
        name: "Saraishyk Residential Complex",
        lat: 51.151,
        lng: 71.437,
        factor: 0.44
      },

      {
        name: "Koshkarbayev Street",
        lat: 51.137,
        lng: 71.462,
        factor: 0.57
      },

      {
        name: "Shabyt Palace",
        lat: 51.116,
        lng: 71.468,
        factor: 0.63
      },

      {
        name: "Tauelsizdik Avenue",
        lat: 51.111,
        lng: 71.462,
        factor: 0.55
      },

      {
        name: "Mangilik El",
        lat: 51.101,
        lng: 71.437,
        factor: 0.72
      },

      {
        name: "Nurly Zhol Station",
        lat: 51.100,
        lng: 71.531,
        factor: 0.65
      }

    ]

  },


  "26": {

    capacity: 105,

    stops: [

      {
        name: "Karaotkel",
        lat: 51.198,
        lng: 71.337,
        factor: 0.30
      },

      {
        name: "Akyrtas",
        lat: 51.191,
        lng: 71.348,
        factor: 0.35
      },

      {
        name: "Tauelsizdik Avenue",
        lat: 51.170,
        lng: 71.414,
        factor: 0.52
      },

      {
        name: "Azhar Shopping Center",
        lat: 51.164,
        lng: 71.423,
        factor: 0.58
      },

      {
        name: "Charles de Gaulle Street",
        lat: 51.154,
        lng: 71.428,
        factor: 0.42
      },

      {
        name: "Medical Center",
        lat: 51.147,
        lng: 71.434,
        factor: 0.51
      },

      {
        name: "School Gymnasium 30",
        lat: 51.141,
        lng: 71.439,
        factor: 0.48
      },

      {
        name: "Meridian",
        lat: 51.129,
        lng: 71.451,
        factor: 0.62
      },

      {
        name: "Kazakhstan Sports Complex",
        lat: 51.124,
        lng: 71.457,
        factor: 0.73
      },

      {
        name: "Orbita",
        lat: 51.118,
        lng: 71.462,
        factor: 0.66
      },

      {
        name: "Defenders of the Fatherland Monument",
        lat: 51.112,
        lng: 71.465,
        factor: 0.68
      }

    ]

  },


  "40": {

    capacity: 110,

    stops: [

      {
        name: "Railway Station",
        lat: 51.195,
        lng: 71.409,
        factor: 0.66
      },

      {
        name: "Zhastar Theatre",
        lat: 51.181,
        lng: 71.417,
        factor: 0.43
      },

      {
        name: "Altynsarin Street",
        lat: 51.177,
        lng: 71.419,
        factor: 0.40
      },

      {
        name: "Moldagulova Street",
        lat: 51.173,
        lng: 71.421,
        factor: 0.45
      },

      {
        name: "Arts University",
        lat: 51.163,
        lng: 71.419,
        factor: 0.61
      },

      {
        name: "City Polyclinic",
        lat: 51.157,
        lng: 71.420,
        factor: 0.55
      },

      {
        name: "Astana Market",
        lat: 51.146,
        lng: 71.423,
        factor: 0.69
      },

      {
        name: "Kenesary Street",
        lat: 51.139,
        lng: 71.429,
        factor: 0.60
      },

      {
        name: "ENU University",
        lat: 51.132,
        lng: 71.470,
        factor: 0.74
      }

    ]

  },


  "44": {

    capacity: 98,

    stops: [

      {
        name: "Zhagalau",
        lat: 51.151,
        lng: 71.353,
        factor: 0.35
      },

      {
        name: "Kulager Residential Complex",
        lat: 51.149,
        lng: 71.361,
        factor: 0.39
      },

      {
        name: "Aitmatov Street",
        lat: 51.145,
        lng: 71.372,
        factor: 0.42
      },

      {
        name: "University of Technology",
        lat: 51.142,
        lng: 71.381,
        factor: 0.58
      },

      {
        name: "Duman",
        lat: 51.130,
        lng: 71.414,
        factor: 0.63
      },

      {
        name: "Barayev Street",
        lat: 51.128,
        lng: 71.423,
        factor: 0.57
      },

      {
        name: "Orbita",
        lat: 51.109,
        lng: 71.468,
        factor: 0.68
      },

      {
        name: "Eurasia Shopping Center",
        lat: 51.104,
        lng: 71.472,
        factor: 0.73
      }

    ]

  },


  "50": {

    capacity: 105,

    stops: [

      {
        name: "Koktem Residential Complex",
        lat: 51.210,
        lng: 71.370,
        factor: 0.35
      },

      {
        name: "Koktal Park",
        lat: 51.202,
        lng: 71.379,
        factor: 0.40
      },

      {
        name: "School 106",
        lat: 51.194,
        lng: 71.389,
        factor: 0.45
      },

      {
        name: "Polyclinic 10",
        lat: 51.171,
        lng: 71.415,
        factor: 0.52
      },

      {
        name: "Seifullin Street",
        lat: 51.160,
        lng: 71.421,
        factor: 0.58
      },

      {
        name: "Kenesary Street",
        lat: 51.149,
        lng: 71.426,
        factor: 0.62
      },

      {
        name: "National Museum",
        lat: 51.118,
        lng: 71.470,
        factor: 0.75
      },

      {
        name: "Presidential Park",
        lat: 51.111,
        lng: 71.465,
        factor: 0.61
      },

      {
        name: "Mangilik El",
        lat: 51.101,
        lng: 71.437,
        factor: 0.70
      }

    ]

  }

};


/* =========================================
   ELEMENTS
========================================= */

const routeSelect =
  document.getElementById("routeSelect");

const stopSelect =
  document.getElementById("stopSelect");

const timeInput =
  document.getElementById("timeInput");

const stopButtons =
  document.getElementById("stopButtons");

const stopSearch =
  document.getElementById("stopSearch");

const searchMessage =
  document.getElementById("searchMessage");


let currentPrediction =
  null;


/* =========================================
   AUTHENTICATION
========================================= */

function getUsers() {

  return JSON.parse(
    localStorage.getItem("smartBusUsers")
  ) || [];

}


function saveUsers(users) {

  localStorage.setItem(
    "smartBusUsers",
    JSON.stringify(users)
  );

}


function getCurrentUser() {

  return JSON.parse(
    localStorage.getItem("smartBusCurrentUser")
  );

}


function setCurrentUser(user) {

  localStorage.setItem(
    "smartBusCurrentUser",
    JSON.stringify(user)
  );

}


function updateAuthUI() {

  const user =
    getCurrentUser();


  const authButtons =
    document.getElementById(
      "authButtons"
    );


  const userArea =
    document.getElementById(
      "userArea"
    );


  const guestButton =
    document.getElementById(
      "guestButton"
    );


  if (user) {

    authButtons.classList.add(
      "hidden"
    );


    userArea.classList.remove(
      "hidden"
    );


    guestButton.classList.add(
      "hidden"
    );


    document
    .getElementById(
      "welcomeUser"
    )
    .textContent =
      "Hello, " +
      user.name;


  }

  else {

    authButtons.classList.remove(
      "hidden"
    );


    userArea.classList.add(
      "hidden"
    );


    guestButton.classList.remove(
      "hidden"
    );

  }

}


window.openRegister =
function () {

  document
  .getElementById(
    "registerModal"
  )
  .classList.remove(
    "hidden"
  );

};


window.closeRegister =
function () {

  document
  .getElementById(
    "registerModal"
  )
  .classList.add(
    "hidden"
  );

};


window.openLogin =
function () {

  document
  .getElementById(
    "loginModal"
  )
  .classList.remove(
    "hidden"
  );

};


window.closeLogin =
function () {

  document
  .getElementById(
    "loginModal"
  )
  .classList.add(
    "hidden"
  );

};


document
.getElementById(
  "createAccountButton"
)
.addEventListener(
  "click",
  function () {


    const name =
      document
      .getElementById(
        "registerName"
      )
      .value
      .trim();


    const email =
      document
      .getElementById(
        "registerEmail"
      )
      .value
      .trim()
      .toLowerCase();


    const password =
      document
      .getElementById(
        "registerPassword"
      )
      .value;


    const confirm =
      document
      .getElementById(
        "registerConfirm"
      )
      .value;


    const error =
      document
      .getElementById(
        "registerError"
      );


    error.textContent =
      "";


    if (
      !name ||
      !email ||
      !password ||
      !confirm
    ) {

      error.textContent =
        "All fields are required.";

      return;

    }


    if (
      !email.includes("@")
    ) {

      error.textContent =
        "Please enter a valid email address.";

      return;

    }


    if (
      password.length < 6
    ) {

      error.textContent =
        "Password must contain at least 6 characters.";

      return;

    }


    if (
      password !== confirm
    ) {

      error.textContent =
        "Passwords do not match.";

      return;

    }


    const users =
      getUsers();


    const exists =
      users.some(
        user =>
        user.email === email
      );


    if (exists) {

      error.textContent =
        "This email is already registered.";

      return;

    }


    const newUser = {

      id:
        Date.now(),

      name:
        name,

      email:
        email,

      password:
        password,

      type:
        "Registered user"

    };


    users.push(
      newUser
    );


    saveUsers(
      users
    );


    setCurrentUser(
      newUser
    );


    closeRegister();


    updateAuthUI();


    alert(
      "Account successfully created!"
    );

  }
);


document
.getElementById(
  "loginButton"
)
.addEventListener(
  "click",
  function () {


    const email =
      document
      .getElementById(
        "loginEmail"
      )
      .value
      .trim()
      .toLowerCase();


    const password =
      document
      .getElementById(
        "loginPassword"
      )
      .value;


    const error =
      document
      .getElementById(
        "loginError"
      );


    const users =
      getUsers();


    const user =
      users.find(
        item =>
        item.email === email &&
        item.password === password
      );


    if (!user) {

      error.textContent =
        "Incorrect email or password.";

      return;

    }


    error.textContent =
      "";


    setCurrentUser(
      user
    );


    closeLogin();


    updateAuthUI();


    alert(
      "Login successful."
    );

  }
);


window.continueAsGuest =
function () {

  const guest = {

    id:
      "guest",

    name:
      "Guest",

    email:
      "No email",

    type:
      "Guest"

  };


  setCurrentUser(
    guest
  );


  updateAuthUI();

};


window.logout =
function () {

  localStorage.removeItem(
    "smartBusCurrentUser"
  );


  updateAuthUI();


  showSection(
    "home"
  );

};


/* =========================================
   PAGE NAVIGATION
========================================= */

window.showSection =
function (sectionId) {


  const sections =
    document.querySelectorAll(
      ".page-section"
    );


  sections.forEach(
    section =>
    section.classList.add(
      "hidden"
    )
  );


  document
  .getElementById(
    sectionId
  )
  .classList.remove(
    "hidden"
  );


  if (
    sectionId ===
    "analytics"
  ) {

    updateAnalytics();

  }


  if (
    sectionId ===
    "saved"
  ) {

    displaySavedTrips();

  }

};


window.showProfile =
function () {


  const user =
    getCurrentUser();


  if (!user) {

    openLogin();

    return;

  }


  document
  .getElementById(
    "profileName"
  )
  .textContent =
    user.name;


  document
  .getElementById(
    "profileEmail"
  )
  .textContent =
    user.email;


  document
  .getElementById(
    "profileType"
  )
  .textContent =
    user.type;


  showSection(
    "profile"
  );

};


/* =========================================
   MAP
========================================= */

let map =
  null;

let mapMarkers =
  [];

let routeLine =
  null;


function initializeMap() {


  if (
    typeof L ===
    "undefined"
  ) {

    return;

  }


  map =
    L.map(
      "map"
    )
    .setView(
      [
        51.145,
        71.430
      ],
      11
    );


  L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {

      attribution:
        "&copy; OpenStreetMap contributors"

    }
  )
  .addTo(
    map
  );

}


function drawRoute() {


  if (!map) {
    return;
  }


  mapMarkers.forEach(
    marker =>
    map.removeLayer(
      marker
    )
  );


  mapMarkers =
    [];


  if (
    routeLine
  ) {

    map.removeLayer(
      routeLine
    );

  }


  const route =
    routes[
      routeSelect.value
    ];


  const points =
    [];


  route.stops.forEach(
    function (
      stop,
      index
    ) {


      points.push(
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
        )
        .addTo(
          map
        );


      marker.bindPopup(
        stop.name
      );


      marker.on(
        "click",
        function () {


          stopSelect.value =
            index;


          calculatePrediction();

        }
      );


      mapMarkers.push(
        marker
      );

    }
  );


  routeLine =
    L.polyline(
      points,
      {
        weight:
          5
      }
    )
    .addTo(
      map
    );


  map.fitBounds(
    routeLine.getBounds(),
    {
      padding:
        [30,30]
    }
  );

}


/* =========================================
   ROUTE / STOPS
========================================= */

function loadStops() {


  const route =
    routes[
      routeSelect.value
    ];


  stopSelect.innerHTML =
    "";


  route.stops.forEach(
    function (
      stop,
      index
    ) {


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


  renderStopButtons();


  drawRoute();


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


  const search =
    stopSearch.value
    .toLowerCase()
    .trim();


  stopButtons.innerHTML =
    "";


  let found =
    0;


  route.stops.forEach(
    function (
      stop,
      index
    ) {


      if (
        search &&
        !stop.name
        .toLowerCase()
        .includes(
          search
        )
      ) {

        return;

      }


      found++;


      const button =
        document.createElement(
          "button"
        );


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


      stopButtons.appendChild(
        button
      );

    }
  );


  if (
    found === 0
  ) {

    searchMessage.textContent =
      "Stop not found.";

  }

  else {

    searchMessage.textContent =
      "";

  }

}


/* =========================================
   SMART FUNCTION
========================================= */

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

    return 0.32;

  }


  if (
    hour >= 21 ||
    hour < 6
  ) {

    return -0.15;

  }


  return 0.05;

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


  const time =
    timeInput.value ||
    "12:00";


  const pieces =
    time.split(":");


  const hour =
    Number(
      pieces[0]
    ) +

    Number(
      pieces[1]
    ) / 60;


  let occupancy =

    18 +

    stop.factor * 62 +

    getTimeFactor(
      hour
    ) * 65 +

    Math.sin(
      stopIndex +
      hour
    ) * 4;


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


  currentPrediction = {

    route:
      routeNumber,

    stop:
      stop.name,

    time:
      time,

    occupancy:
      occupancy,

    passengers:
      passengers,

    capacity:
      route.capacity

  };


  updatePredictionUI(
    currentPrediction,
    hour
  );


  renderStopButtons();


  if (
    map
  ) {

    map.flyTo(
      [
        stop.lat,
        stop.lng
      ],
      14
    );

  }

}


function updatePredictionUI(
  prediction,
  hour
) {


  document
  .getElementById(
    "occupancyValue"
  )
  .textContent =
    prediction.occupancy +
    "%";


  document
  .getElementById(
    "passengerValue"
  )
  .textContent =
    prediction.passengers;


  document
  .getElementById(
    "capacityValue"
  )
  .textContent =
    prediction.capacity;


  document
  .getElementById(
    "heroPercent"
  )
  .textContent =
    prediction.occupancy +
    "%";


  document
  .getElementById(
    "heroRoute"
  )
  .textContent =
    "Bus " +
    prediction.route;


  const status =
    document
    .getElementById(
      "occupancyStatus"
    );


  const bar =
    document
    .getElementById(
      "progressBar"
    );


  let nextBus =
    8;


  if (
    prediction.occupancy <
    45
  ) {


    status.textContent =
      "Low";


    status.className =
      "status low";


    bar.style.background =
      "#22c55e";


    document
    .getElementById(
      "heroStatus"
    )
    .textContent =
      "Low occupancy";


    document
    .getElementById(
      "recommendationText"
    )
    .textContent =
      "Take this bus.";


    document
    .getElementById(
      "recommendationDescription"
    )
    .textContent =
      "The bus is expected to have enough free space.";

  }


  else if (
    prediction.occupancy <
    75
  ) {


    status.textContent =
      "Medium";


    status.className =
      "status medium";


    bar.style.background =
      "#f59e0b";


    document
    .getElementById(
      "heroStatus"
    )
    .textContent =
      "Medium occupancy";


    document
    .getElementById(
      "recommendationText"
    )
    .textContent =
      "You can take this bus.";


    document
    .getElementById(
      "recommendationDescription"
    )
    .textContent =
      "The bus may be moderately crowded.";

  }


  else {


    status.textContent =
      "High";


    status.className =
      "status high";


    bar.style.background =
      "#ef4444";


    nextBus =
      6;


    document
    .getElementById(
      "heroStatus"
    )
    .textContent =
      "High occupancy";


    document
    .getElementById(
      "recommendationText"
    )
    .textContent =
      "Wait for the next bus if possible.";


    document
    .getElementById(
      "recommendationDescription"
    )
    .textContent =
      "High passenger demand is expected. The next bus may be less crowded.";

  }


  bar.style.width =
    prediction.occupancy +
    "%";


  document
  .getElementById(
    "heroNext"
  )
  .textContent =
    nextBus +
    " min";


  let demand =
    "Normal passenger demand expected.";


  if (
    hour >= 7 &&
    hour < 9
  ) {

    demand =
      "Morning peak: passenger demand is higher than usual.";

  }


  else if (
    hour >= 17 &&
    hour < 20
  ) {

    demand =
      "Evening peak: high passenger demand expected.";

  }


  else if (
    hour >= 21 ||
    hour < 6
  ) {

    demand =
      "Off-peak period: passenger demand is usually lower.";

  }


  document
  .getElementById(
    "demandMessage"
  )
  .textContent =
    demand;

}


/* =========================================
   SAVE TRIPS
========================================= */

function getSavedTrips() {

  const user =
    getCurrentUser();


  if (!user) {

    return [];

  }


  const key =
    "smartBusTrips_" +
    user.id;


  return JSON.parse(
    localStorage.getItem(
      key
    )
  ) || [];

}


function saveTrips(
  trips
) {

  const user =
    getCurrentUser();


  if (!user) {
    return;
  }


  const key =
    "smartBusTrips_" +
    user.id;


  localStorage.setItem(
    key,
    JSON.stringify(
      trips
    )
  );

}


document
.getElementById(
  "saveTripButton"
)
.addEventListener(
  "click",
  function () {


    const user =
      getCurrentUser();


    if (!user) {

      alert(
        "Please login, register or continue as guest first."
      );

      return;

    }


    if (!currentPrediction) {

      alert(
        "Please calculate a prediction first."
      );

      return;

    }


    const trips =
      getSavedTrips();


    const duplicate =
      trips.some(
        trip =>

        trip.route ===
        currentPrediction.route &&

        trip.stop ===
        currentPrediction.stop &&

        trip.time ===
        currentPrediction.time

      );


    if (duplicate) {

      alert(
        "This trip is already saved."
      );

      return;

    }


    trips.push({

      id:
        Date.now(),

      ...currentPrediction

    });


    saveTrips(
      trips
    );


    alert(
      "Trip saved successfully."
    );

  }
);


/* =========================================
   DISPLAY SAVED TRIPS
========================================= */

function displaySavedTrips() {


  const container =
    document.getElementById(
      "savedTripsContainer"
    );


  const user =
    getCurrentUser();


  if (!user) {

    container.innerHTML =
      "<p>Please login or continue as guest first.</p>";

    return;

  }


  const filter =
    document
    .getElementById(
      "savedRouteFilter"
    )
    .value;


  let trips =
    getSavedTrips();


  if (
    filter !==
    "all"
  ) {

    trips =
      trips.filter(
        trip =>
        trip.route === filter
      );

  }


  container.innerHTML =
    "";


  if (
    trips.length ===
    0
  ) {

    container.innerHTML =
      "<p>No saved trips yet.</p>";

    return;

  }


  trips.forEach(
    function (
      trip
    ) {


      const row =
        document.createElement(
          "div"
        );


      row.className =
        "saved-trip";


      row.innerHTML =
        `
        <strong>
          Bus ${trip.route}
        </strong>

        <span>
          ${trip.stop}
        </span>

        <span>
          ${trip.time}
        </span>

        <span>
          ${trip.occupancy}% occupied
        </span>

        <button
          class="delete-trip"
          data-id="${trip.id}"
        >
          Delete
        </button>
        `;


      container.appendChild(
        row
      );

    }
  );


  document
  .querySelectorAll(
    ".delete-trip"
  )
  .forEach(
    button => {


      button.addEventListener(
        "click",
        function () {


          deleteTrip(
            Number(
              this.dataset.id
            )
          );


        }
      );


    }
  );

}


function deleteTrip(
  id
) {


  let trips =
    getSavedTrips();


  trips =
    trips.filter(
      trip =>
      trip.id !== id
    );


  saveTrips(
    trips
  );


  displaySavedTrips();

}


document
.getElementById(
  "savedRouteFilter"
)
.addEventListener(
  "change",
  displaySavedTrips
);


/* =========================================
   ANALYTICS
========================================= */

const simulatedAnalyticsData = [

  {
    route:
      "10",
    occupancy:
      62
  },

  {
    route:
      "10",
    occupancy:
      70
  },

  {
    route:
      "21",
    occupancy:
      58
  },

  {
    route:
      "21",
    occupancy:
      76
  },

  {
    route:
      "26",
    occupancy:
      91
  },

  {
    route:
      "26",
    occupancy:
      84
  },

  {
    route:
      "40",
    occupancy:
      67
  },

  {
    route:
      "40",
    occupancy:
      73
  },

  {
    route:
      "44",
    occupancy:
      55
  },

  {
    route:
      "44",
    occupancy:
      61
  },

  {
    route:
      "50",
    occupancy:
      79
  },

  {
    route:
      "50",
    occupancy:
      82
  }

];


let occupancyChart =
  null;


function updateAnalytics() {


  const data =
    simulatedAnalyticsData;


  const average =
    Math.round(

      data.reduce(
        (
          total,
          item
        ) =>
        total +
        item.occupancy,

        0
      ) /

      data.length

    );


  const maximum =
    Math.max(
      ...data.map(
        item =>
        item.occupancy
      )
    );


  const highDemand =
    data.filter(
      item =>
      item.occupancy >=
      75
    )
    .length;


  const routeTotals =
    {};


  data.forEach(
    item => {


      if (
        !routeTotals[
          item.route
        ]
      ) {

        routeTotals[
          item.route
        ] =
        [];

      }


      routeTotals[
        item.route
      ]
      .push(
        item.occupancy
      );

    }
  );


  const routeAverages =
    {};


  Object.keys(
    routeTotals
  )
  .forEach(
    route => {


      const values =
        routeTotals[
          route
        ];


      routeAverages[
        route
      ] =

      values.reduce(
        (
          sum,
          value
        ) =>
        sum + value,

        0
      ) /

      values.length;

    }
  );


  const busiestRoute =
    Object.keys(
      routeAverages
    )
    .reduce(
      (
        best,
        route
      ) =>

      routeAverages[
        route
      ] >

      routeAverages[
        best
      ]

      ? route
      : best

    );


  document
  .getElementById(
    "averageOccupancy"
  )
  .textContent =
    average +
    "%";


  document
  .getElementById(
    "maximumOccupancy"
  )
  .textContent =
    maximum +
    "%";


  document
  .getElementById(
    "highDemandTrips"
  )
  .textContent =
    highDemand;


  document
  .getElementById(
    "busiestRoute"
  )
  .textContent =
    "Bus " +
    busiestRoute;


  document
  .getElementById(
    "findingOne"
  )
  .textContent =

    `1. The average simulated occupancy is ${average}%.`;


  document
  .getElementById(
    "findingTwo"
  )
  .textContent =

    `2. Bus ${busiestRoute} has the highest average occupancy in the simulated dataset.`;


  createChart(
    routeAverages
  );

}


function createChart(
  routeAverages
) {


  const canvas =
    document.getElementById(
      "occupancyChart"
    );


  if (
    occupancyChart
  ) {

    occupancyChart.destroy();

  }


  occupancyChart =
    new Chart(
      canvas,
      {

        type:
          "bar",

        data: {

          labels:
            Object.keys(
              routeAverages
            )
            .map(
              route =>
              "Bus " + route
            ),

          datasets: [

            {

              label:
                "Average Occupancy %",

              data:
                Object.values(
                  routeAverages
                )

            }

          ]

        },

        options: {

          responsive:
            true,

          plugins: {

            title: {

              display:
                true,

              text:
                "Average Occupancy by Route"

            }

          },

          scales: {

            y: {

              beginAtZero:
                true,

              max:
                100,

              title: {

                display:
                  true,

                text:
                  "Occupancy %"

              }

            },

            x: {

              title: {

                display:
                  true,

                text:
                  "Bus Route"

              }

            }

          }

        }

      }
    );

}


/* =========================================
   SEARCH
========================================= */

document
.getElementById(
  "searchStopButton"
)
.addEventListener(
  "click",
  function () {


    const text =
      stopSearch.value
      .toLowerCase()
      .trim();


    const route =
      routes[
        routeSelect.value
      ];


    const index =
      route.stops.findIndex(
        stop =>
        stop.name
        .toLowerCase()
        .includes(
          text
        )
      );


    if (
      index === -1
    ) {

      searchMessage.textContent =
        "Stop not found.";

      return;

    }


    stopSelect.value =
      index;


    calculatePrediction();

  }
);


stopSearch.addEventListener(
  "input",
  renderStopButtons
);


/* =========================================
   EVENT LISTENERS
========================================= */

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


document
.getElementById(
  "predictButton"
)
.addEventListener(
  "click",
  calculatePrediction
);


/* =========================================
   START
========================================= */

updateAuthUI();

initializeMap();

loadStops();

updateAnalytics();


});
