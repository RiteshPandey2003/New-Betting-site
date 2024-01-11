var apiKey = "bd494afa153c0ddbfb33e7ba8cf51004";

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch(`http://apicricketchampion.in/apiv3/homeList/${apiKey}`, requestOptions)
    .then(response => response.json())  // Parse response as JSON
    .then(result => {
        
        if (result.live_count > 0) {
        var live_matches = document.getElementById('live');
        live_matches.innerHTML = "";
        live_matches.innerHTML += `<h1 style="text-align: center">Live Matches</h1>`;
            live_matches.innerHTML += `<div class="swiper-wrapper"> </div>`;
            if (Array.isArray(result.data)) {
                var match_data = '';
                for (let i = 0; i < result.data.length; i++) {
                    if (result.data[i].match_status === "Live") {
                        var match = result.data[i];
                        
                        match_data+=`<div class="swiper-slide">
                                        <a href="livematchs.html">
                                        <div class="score-card-frame">
                                            <div class="score-card-frame1">
                                            <div class="score-card">
                                                <div class="score-title">
                                                <h3>${match.series}</h3>
                                                <p>${ match.matchs }</p>
                                                </div>
                                                <div class="match-status">Live</div>
                                                <div class="score-board">
                                                <div class="team-left">
                                                    <div class="dot-left">
                                                    <img src="${match.team_a_img}" class="team-left-flag" />
                                                    </div>
                                                    <div class="team-score">
                                                    <h4 class="team-name">${match.team_a}</h4>
                                                    <p class="team-runs">${ match.team_a_scores}</p>
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
                                                    <p class="team-runs">${ match.team_b_scores}</p>

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
                live_matches.querySelector('.swiper-wrapper').insertAdjacentHTML('beforeend', match_data);
            } else {
                console.log("The 'data' property is not an array.");
            }
        } else {   
            var live_matches = document.getElementById('live');
            live_matches.innerHTML = "";
            live_matches.innerHTML += `<h1 style="text-align: center">Live Matches</h1>`;
            live_matches.innerHTML += `<div class="swiper-wrapper"> </div>`;
            live_matches.querySelector('.swiper-wrapper').insertAdjacentHTML('beforeend', `<h2 style="text-align: center">No Live Matches</h2>`);
        }

        







        var recent_matches = document.getElementById('recent');
        recent_matches.innerHTML = "";
        recent_matches.innerHTML += `<h1 style="text-align: center">Completed Matches</h1>`;
            recent_matches.innerHTML += `<div class="swiper-wrapper"> </div>`;
            if (Array.isArray(result.data)) {
                var match_data = '';
                console.log(result)
                for (let i = 0; i < result.data.length; i++) {
                    console.log(result.data.length)
                    if (result.data[i].match_status === "Finished") {
                        var match = result.data[i];
                        
                        match_data+=`<div class="swiper-slide">
                                        <a href="recentmatchs.html">
                                        <div class="score-card-frame">
                                            <div class="score-card-frame1">
                                            <div class="score-card">
                                                <div class="score-title">
                                                <h3>${match.series}</h3>
                                                <p>${ match.result }</p>
                                                </div>
                                                <div class="match-status">Completed</div>
                                                <div class="score-board">
                                                <div class="team-left">
                                                    <div class="dot-left">
                                                    <img src="${match.team_a_img}" class="team-left-flag" />
                                                    </div>
                                                    <div class="team-score">
                                                    <h4 class="team-name">${match.team_a}</h4>
                                                    <p class="team-runs">${ match.team_a_scores}</p>
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
                                                    <p class="team-runs">${ match.team_b_scores}</p>

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
                recent_matches.querySelector('.swiper-wrapper').insertAdjacentHTML('beforeend', match_data);
            } else {
                console.log("The 'data' property is not an array.");
            }

        


        var upcoming_matches = document.getElementById('upcoming');
        upcoming_matches.innerHTML = "";
        upcoming_matches.innerHTML += `<h1 style="text-align: center">Upcoming Matches</h1>`;
            upcoming_matches.innerHTML += `<div class="swiper-wrapper"> </div>`;
            if (Array.isArray(result.data)) {
                var match_data = '';
                for (let i = 0; i < result.data.length; i++) {
                    if (result.data[i].match_status === "Upcoming") {
                        var match = result.data[i];
                         console.log(result.data[i])
                        match_data+=`<div class="swiper-slide">
                        <a href="upcomingmatchs.html">
                          <div class="score-card-frame">
                            <div class="score-card-frame1">
                              <div class="score-card">
                                <div class="score-title">
                                  <h3> ${ match.series}</h3>
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
                upcoming_matches.querySelector('.swiper-wrapper').insertAdjacentHTML('beforeend', match_data);
            } else {
                console.log("The 'data' property is not an array.");
            }
        
    })
    .catch(error => {
        console.log('Error fetching or processing data:', error);
    });




var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };
    
    fetch(`http://apicricketchampion.in/apiv3/news/${apiKey}`, requestOptions)
    .then(response => response.text())
    .then(result => {
        var news = document.getElementById('news');
        news.innerHTML = "";
        result = JSON.parse(result);

        for (const item of result.data) {
            
            news.innerHTML += `
            <a href="single-news.html?id=${item.id}">
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
                    <div class="card-body" >
                        <h4>${item.title}</h4>
                        <p>${item.content}</p>
                    </div>
                    </div>
                </div>
                </div>
            </li>
            </a>`;
            
        }
        
        
        }
    )
    .catch(error => console.log('error', error));


