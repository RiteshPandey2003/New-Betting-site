
var apiKey = config.API_KEY;

var requestOptions = {
    method: "GET",
    redirect: "follow",
};

fetch(`http://apicricketchampion.in/apiv3/liveMatchList/${apiKey}`, requestOptions)
    .then((response) => response.json()) // Parse response as JSON
    .then((result) => {
        if (result.live_count > 0) {
            var live_matches = document.getElementById("live");
            live_matches.innerHTML = "";
            live_matches.innerHTML += `<h1 style="text-align: center">Live Matches</h1>`;
            live_matches.innerHTML += `<div class="swiper-wrapper"> </div>`;
            if (Array.isArray(result.data)) {
                var match_data = "";
                for (let i = 0; i < result.data.length; i++) {
                    if (result.data[i].match_status === "Live") {
                        var match = result.data[i];

                        match_data += `<div class="swiper-slide">
                                        <a href="LiveMatch.html">
                                        <div class="score-card-frame">
                                            <div class="score-card-frame1">
                                            <div class="score-card">
                                                <div class="score-title">
                                                <h3>${match.series}</h3>
                                                <p>${match.matchs}</p>
                                                </div>
                                                <div class="match-status">Live</div>
                                                <div class="score-board">
                                                <div class="team-left">
                                                    <div class="dot-left">
                                                    <img src="${match.team_a_img}" class="team-left-flag" />
                                                    </div>
                                                    <div class="team-score">
                                                    <h4 class="team-name">${match.team_a}</h4>
                                                    <p class="team-runs">${match.team_a_scores}</p>
                                                    <p class="team-overs">${match.team_a_over} overs</p>
                                                    </div>
                                                </div>
                                                <div class="mid-dot">
                                                    <img
                                                    src="img/versus-or-vs-logo-design-template-vector.jpg"
                                                    class="team-mid-flag"
                                                    />
                                                </div>
                                                <div class="team-right">
                                                    <div class="team-score">
                                                    <h4 class="team-name">${match.team_b}</h4>
                                                    <p class="team-runs">${match.team_b_scores}</p>

                                                    <p class="team-overs">${match.team_b_over} overs</p>
                                                    </div>
                                                    <div class="dot-right">
                                                    <img src="${match.team_b_img}" class="team-right-flag" />
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </a>
                                    </div>`;
                    }
                }
                live_matches
                    .querySelector(".swiper-wrapper")
                    .insertAdjacentHTML("beforeend", match_data);
            } else {
                console.log("The 'data' property is not an array.");
            }
        } else {
            var live_matches = document.getElementById("live");
            live_matches.innerHTML = "";
            live_matches.innerHTML += `<h1 style="text-align: center">Live Matches</h1>`;
            live_matches.innerHTML += `<div class="swiper-wrapper"> </div>`;
            live_matches
                .querySelector(".swiper-wrapper")
                .insertAdjacentHTML(
                    "beforeend",
                    `<h2 style="text-align: center">No Live Matches</h2>`
                );
        }



        var swiper = new Swiper(".mySwiper", {
            autoplay: true,
            loop: true,
            // slidesPerView: 1,
            // spaceBetween: 10,
            // pagination: {
            //   el: ".swiper-pagination",
            //   clickable: true,
            // },
            spaceBetween: 10,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },

                1024: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1400: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            },
        });
    })
    .catch((error) => {
        console.log("Error fetching or processing data:", error);
    });



var requestOptions = {
    method: "GET",
    redirect: "follow",
};

fetch(`http://apicricketchampion.in/apiv3/recentMatches/${apiKey}`, requestOptions)
    .then((response) => response.json()) // Parse response as JSON
    .then((result) => {


        var recent_matches = document.getElementById("recent");
        recent_matches.innerHTML = "";
        recent_matches.innerHTML += `<h1 style="text-align: center">Completed Matches</h1>`;
        recent_matches.innerHTML += `<div class="swiper-wrapper"> </div>`;
        if (Array.isArray(result.data)) {
            var match_data = "";
            for (let i = 0; i < result.data.length; i++) {
                if (result.data[i].match_status === "Finished") {
                    var match = result.data[i];

                    match_data += `<div class="swiper-slide">
                                          <a href="LiveMatch.html">
                                          <div class="score-card-frame">
                                              <div class="score-card-frame1">
                                              <div class="score-card">
                                                  <div class="score-title">
                                                  <h3>${match.series}</h3>
                                                  <p>${match.result}</p>
                                                  </div>
                                                  <div class="match-status">Completed</div>
                                                  <div class="score-board">
                                                  <div class="team-left">
                                                      <div class="dot-left">
                                                      <img src="${match.team_a_img}" class="team-left-flag" />
                                                      </div>
                                                      <div class="team-score">
                                                      <h4 class="team-name">${match.team_a}</h4>
                                                      <p class="team-runs">${match.team_a_scores}</p>
                                                      <p class="team-overs">${match.team_a_over} overs</p>
                                                      </div>
                                                  </div>
                                                  <div class="mid-dot">
                                                      <img
                                                      src="img/versus-or-vs-logo-design-template-vector.jpg"
                                                      class="team-mid-flag"
                                                      />
                                                  </div>
                                                  <div class="team-right">
                                                      <div class="team-score">
                                                      <h4 class="team-name">${match.team_b}</h4>
                                                      <p class="team-runs">${match.team_b_scores}</p>
  
                                                      <p class="team-overs">${match.team_b_over} overs</p>
                                                      </div>
                                                      <div class="dot-right">
                                                      <img src="${match.team_b_img}" class="team-right-flag" />
                                                      </div>
                                                  </div>
                                                  </div>
                                              </div>
                                              </div>
                                          </div>
                                          </a>
                                      </div>`;
                }
            }
            recent_matches
                .querySelector(".swiper-wrapper")
                .insertAdjacentHTML("beforeend", match_data);
        } else {
            console.log("The 'data' property is not an array.");
        }




        var swiper = new Swiper(".mySwiper", {
            autoplay: true,
            loop: true,
            // slidesPerView: 1,
            // spaceBetween: 10,
            // pagination: {
            //   el: ".swiper-pagination",
            //   clickable: true,
            // },
            spaceBetween: 10,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },

                1024: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1400: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            },
        });
    })
    .catch((error) => {
        console.log("Error fetching or processing data:", error);
    });



















var requestOptions = {
    method: "GET",
    redirect: "follow",
};

fetch(`http://apicricketchampion.in/apiv3/upcomingMatches/${apiKey}`, requestOptions)
    .then((response) => response.json()) // Parse response as JSON
    .then((result) => {




        var upcoming_matches = document.getElementById("upcoming");
        upcoming_matches.innerHTML = "";
        upcoming_matches.innerHTML += `<h1 style="text-align: center">Upcoming Matches</h1>`;
        upcoming_matches.innerHTML += `<div class="swiper-wrapper"> </div>`;
        if (Array.isArray(result.data)) {
            var match_data = "";
            for (let i = 0; i < result.data.length; i++) {
                if (result.data[i].match_status === "Upcoming") {
                    var match = result.data[i];

                    match_data += `<div class="swiper-slide">
                        <a href="LiveMatch.html">
                          <div class="score-card-frame">
                            <div class="score-card-frame1">
                              <div class="score-card">
                                <div class="score-title">
                                  <h3> ${match.series}</h3>
                                  <p>${match.match_date} ${match.match_time}</p>
                                </div>
                                <div class="match-status">Upcoming</div>
                                <div class="updates">
                                    <p> venue : ${match.venue}</p>
                                    <p> betting rating range ${match.min_rate}-${match.max_rate} </p>
                                </div>

                                <div class="score-board">
                                  <div class="team-left">
                                    <div class="dot-left">
                                      <img src="${match.team_a_img}" class="team-left-flag" />
                                    </div>
                                    <div class="team-score">
                                      <h4 class="team-name">${match.team_a}</h4>
                                    </div>
                                  </div>
                                  <div class="mid-dot">
                                    <img
                                      src="img/versus-or-vs-logo-design-template-vector.jpg"
                                      class="team-mid-flag"
                                    />
                                  </div>
                                  <div class="team-right">
                                    <div class="team-score">
                                      <h4 class="team-name">${match.team_b}</h4>
                                    </div>
                                    <div class="dot-right">
                                      <img src="${match.team_b_img}" class="team-right-flag" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              </div>
                            </div>
                        </a>
                      </div>`;
                }
            }
            upcoming_matches
                .querySelector(".swiper-wrapper")
                .insertAdjacentHTML("beforeend", match_data);
        } else {
            console.log("The 'data' property is not an array.");
        }

        var swiper = new Swiper(".mySwiper", {
            autoplay: true,
            loop: true,
            // slidesPerView: 1,
            // spaceBetween: 10,
            // pagination: {
            //   el: ".swiper-pagination",
            //   clickable: true,
            // },
            spaceBetween: 10,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },

                1024: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1400: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            },
        });
    })
    .catch((error) => {
        console.log("Error fetching or processing data:", error);
    });



var requestOptions = {
    method: "GET",
    redirect: "follow",
};

fetch(`http://apicricketchampion.in/apiv3/news/${apiKey}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
        var news = document.getElementById("news");
        news.innerHTML = "";
        result = JSON.parse(result);


        for (const item of result.data) {
            console.log(item.content[0]);
            news.innerHTML += `
            <li>
                <div class="item">
                <div class="container">
                    <div class="card">
                    <div class="card-header">
                        <img
                        src="${item.image}"
                        alt="rover"
                        />
                    </div>
                    <div class="card-body">
                        <h4>${item.title}</h4>
                    </div>
                    </div>
                </div>
                </div>
            </li>`;
        }
        $(".bxslider").bxSlider({
            minSlides: 1,
            maxSlides: 6,
            slideWidth: 270,
            slideMargin: 65,
            pager: false,

        });
    })
    .catch((error) => console.log("error", error));
