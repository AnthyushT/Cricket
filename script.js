var _a, _b, _c;
var GameUI = /** @class */ (function () {
    function GameUI(teamName_1, teamName_2) {
        this.Team_1 = new Team(teamName_1);
        this.Team_2 = new Team(teamName_2);
        this.currentTurn = teamName_1;
        this.Timer_time = 60;
        this.currentPlayer = -1;
        this.Team_Won = -1;
        //------------------------------------------------------------------------------
        this.container = document.createElement('div');
        this.container.setAttribute('class', 'container');
        var h4 = document.createElement('h3');
        h4.innerText = "CRICKET GAME OOPs";
        var hr_1 = document.createElement('hr');
        //------------------------------------------------------------------------------
        var row = document.createElement('div');
        row.setAttribute("class", 'row');
        //------------------------------------------------------------------------------
        var col_5_1 = document.createElement('div');
        col_5_1.setAttribute("class", 'col-5');
        var h5_1 = document.createElement('h5');
        h5_1.innerText = "".concat(this.Team_1.name, " SCORE");
        this.Team_1_Score = document.createElement('h5');
        this.Team_1_Score.innerText = "0";
        this.Team_1_Hit = document.createElement('button');
        this.Team_1_Hit.setAttribute('class', "btn btn-primary");
        this.Team_1_Hit.setAttribute("style", "color: white");
        this.Team_1_Hit.id = 'hit-1';
        this.Team_1_Hit.disabled = true;
        this.Team_1_Hit.innerText = "HIT 1";
        col_5_1.append(h5_1, this.Team_1_Score, this.Team_1_Hit);
        //------------------------------------------------------------------------------
        var col_2_1 = document.createElement('div');
        col_2_1.setAttribute("class", 'col-2');
        var h5_T = document.createElement('h5');
        h5_T.innerText = "TIMER";
        this.Timer = document.createElement('h2');
        this.Timer.innerText = "60";
        col_2_1.append(h5_T, this.Timer);
        //------------------------------------------------------------------------------
        var col_5_2 = document.createElement('div');
        col_5_2.setAttribute("class", 'col-5');
        var h5_2 = document.createElement('h5');
        h5_2.innerText = "".concat(this.Team_2.name, " SCORE");
        this.Team_2_Score = document.createElement('h5');
        this.Team_2_Score.innerText = "0";
        this.Team_2_Hit = document.createElement('button');
        this.Team_2_Hit.setAttribute('class', "btn btn-primary");
        this.Team_2_Hit.setAttribute("style", "color: white");
        this.Team_2_Hit.id = 'hit-2';
        this.Team_2_Hit.disabled = true;
        this.Team_2_Hit.innerText = "HIT 2";
        col_5_2.append(h5_2, this.Team_2_Score, this.Team_2_Hit);
        //------------------------------------------------------------------------------
        row.append(col_5_1, col_2_1, col_5_2);
        //------------------------------------------------------------------------------
        var hr_2 = document.createElement('hr');
        this.ResultGenerate = document.createElement('button');
        this.ResultGenerate.setAttribute('class', "btn btn-primary");
        this.ResultGenerate.setAttribute("style", "color: white");
        this.ResultGenerate.id = 'result';
        this.ResultGenerate.disabled = true;
        this.ResultGenerate.innerText = "Generate Result";
        //------------------------------------------------------------------------------
        var row_1 = document.createElement('div');
        row_1.setAttribute('class', 'row');
        var col_1_team1 = document.createElement('div');
        col_1_team1.setAttribute('class', 'col-md-10 col-lg-5');
        var table_1 = document.createElement('table');
        table_1.setAttribute('class', 'table');
        table_1.id = "table-1";
        var caption_1 = document.createElement('caption');
        caption_1.innerText = "".concat(this.Team_1.name, " SCORE BOARD");
        table_1.append(caption_1);
        var tr_h = document.createElement('tr');
        tr_h.innerHTML = "\n        <th  scope=\"col\">TEAM A</th>\n            <th scope=\"col\">B1</th>\n            <th scope=\"col\">B2</th>\n            <th scope=\"col\">B3</th>\n            <th scope=\"col\">B4</th>\n            <th scope=\"col\">B5</th>\n            <th scope=\"col\">B6</th>\n            <th scope=\"col\">TOTAL</th>";
        table_1.append(tr_h);
        for (var i = 0; i < 10; i++) {
            table_1.append(this.Team_1.row[i]);
        }
        col_1_team1.append(table_1);
        //------------------------------------------------------------------------------
        var col_1_mid = document.createElement('div');
        col_1_mid.setAttribute('class', 'col-md-10  col-lg-2');
        col_1_mid.id = "mid_result";
        //------------------------------------------------------------------------------
        var col_1_team2 = document.createElement('div');
        col_1_team2.setAttribute('class', 'col-md-10 col-lg-5');
        var table_2 = document.createElement('table');
        table_2.setAttribute('class', 'table');
        table_2.id = "table-2";
        var caption_2 = document.createElement('caption');
        caption_2.innerText = "".concat(this.Team_2.name, " SCORE BOARD");
        table_2.append(caption_2);
        var tr_h_2 = document.createElement('tr');
        tr_h_2.innerHTML = "\n        <th  scope=\"col\">TEAM A</th>\n            <th scope=\"col\">B1</th>\n            <th scope=\"col\">B2</th>\n            <th scope=\"col\">B3</th>\n            <th scope=\"col\">B4</th>\n            <th scope=\"col\">B5</th>\n            <th scope=\"col\">B6</th>\n            <th scope=\"col\">TOTAL</th>";
        table_2.append(tr_h_2);
        for (var i = 0; i < 10; i++) {
            table_2.append(this.Team_2.row[i]);
        }
        col_1_team2.append(table_2);
        row_1.append(col_1_team1, col_1_mid, col_1_team2);
        //------------------------------------------------------------------------------
        this.container.append(h4, hr_1, row, hr_2, this.ResultGenerate, row_1);
        document.body.append(this.container);
    }
    GameUI.prototype.start = function () {
        var _this = this;
        if (this.currentTurn == this.Team_1.name) {
            this.Team_1_Hit.disabled = false;
            this.currentPlayer = 0;
            this.intervalTrack = setInterval(function () {
                if (--_this.Timer_time == 0) {
                    clearInterval(_this.intervalTrack);
                    _this.Team_1_Hit.disabled = true;
                    _this.currentTurn = _this.Team_2.name;
                    _this.Timer_time = 60;
                    _this.start();
                }
                _this.Timer.innerText = String(_this.Timer_time);
            }, 1000);
            console.log("ClearInterval Id", this.intervalTrack);
        }
        else if (this.currentTurn == this.Team_2.name) {
            this.Team_2_Hit.disabled = false;
            this.currentPlayer = 0;
            this.intervalTrack = setInterval(function () {
                if (--_this.Timer_time == 0) {
                    clearInterval(_this.intervalTrack);
                    _this.Team_2_Hit.disabled = true;
                    _this.ResultGenerate.disabled = false;
                }
                _this.Timer.innerText = String(_this.Timer_time);
            }, 1000);
            console.log("ClearInterval Id", this.intervalTrack);
        }
    };
    return GameUI;
}());
var Team = /** @class */ (function () {
    function Team(name) {
        this.players = [];
        this.row = [];
        this.score = 0;
        this.name = name;
        for (var i = 0; i < 10; i++) {
            this.players.push(new Player(i + 1));
            var row = document.createElement('tr');
            var th = document.createElement('th');
            th.setAttribute('scope', "row");
            th.innerText = "Player-".concat(i + 1);
            row.append(th);
            for (var j = 1; j <= 7; j++) {
                var td = document.createElement('td');
                td.innerText = "\n";
                row.append(td);
            }
            this.row.push(row);
        }
    }
    return Team;
}());
var Player = /** @class */ (function () {
    function Player(Num) {
        this.balls = [];
        this.score = 0;
        this.name = "Player-" + Num;
    }
    return Player;
}());
var Ball = /** @class */ (function () {
    function Ball(score) {
        this.score = score;
    }
    return Ball;
}());
var ui = new GameUI("TEAM - A", "TEAM - B");
ui.start();
(_a = document.getElementById('hit-1')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var score = Math.floor((Math.random() * 100) % 7);
    ui.Team_1.players[ui.currentPlayer].balls.push(new Ball(String(score)));
    ui.Team_1_Score.innerText = String(+ui.Team_1_Score.innerText + score);
    ui.Team_1.score += score;
    ui.Team_1.row[ui.currentPlayer].children[ui.Team_1.players[ui.currentPlayer].balls.length].innerText = String(score);
    ui.Team_1.players[ui.currentPlayer].score += score;
    if (ui.Team_1.players[ui.currentPlayer].balls.length == 6 || score == 0) {
        ui.currentPlayer++;
    }
    if (ui.currentPlayer == 10) {
        clearInterval(ui.intervalTrack);
        ui.Team_1_Hit.disabled = true;
        ui.currentTurn = ui.Team_2.name;
        ui.Timer_time = 60;
        ui.start();
    }
});
(_b = document.getElementById('hit-2')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var score = Math.floor((Math.random() * 100) % 7);
    ui.Team_2.players[ui.currentPlayer].balls.push(new Ball(String(score)));
    ui.Team_2_Score.innerText = String(+ui.Team_2_Score.innerText + score);
    ui.Team_2.score += score;
    ui.Team_2.row[ui.currentPlayer].children[ui.Team_2.players[ui.currentPlayer].balls.length].innerText = String(score);
    ui.Team_2.players[ui.currentPlayer].score += score;
    if (ui.Team_2.players[ui.currentPlayer].balls.length == 6 || score == 0) {
        ui.currentPlayer++;
    }
    if (ui.currentPlayer == 10) {
        clearInterval(ui.intervalTrack);
        ui.Team_2_Hit.disabled = true;
        ui.ResultGenerate.disabled = false;
    }
});
(_c = document.getElementById('result')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    var resultWindow = window.open('result.html', '_blank');
    resultWindow.onload = function () {
        var temp = ui.container.cloneNode(true);
        resultWindow.document.body.append(temp);
        var table_1 = resultWindow.document.getElementById('table-1');
        var table_2 = resultWindow.document.getElementById('table-2');
        var mid = resultWindow.document.getElementById('mid_result');
        var won_id = 0;
        if (ui.Team_1.score > ui.Team_2.score) {
            ui.Team_Won = 1;
        }
        else {
            ui.Team_Won = 2;
        }
        for (var i = 0; i < 10; i++) {
            table_1.children[i + 2].children[7].innerText = ui.Team_1.players[i].score;
            table_2.children[i + 2].children[7].innerText = ui.Team_2.players[i].score;
            if (ui.Team_Won == 1) {
                if (ui.Team_1.players[won_id].score < ui.Team_1.players[i].score) {
                    won_id = i;
                }
            }
            else {
                if (ui.Team_2.players[won_id].score < ui.Team_2.players[i].score) {
                    won_id = i;
                }
            }
        }
        if (ui.Team_Won == 1) {
            mid.innerHTML += "<h6>MATCH WON BY ".concat(ui.Team_1.name, "</h6><hr>\n            <h6>MAN OF THE MATCH</h6>\n            <h6>").concat(ui.Team_1.players[won_id].name, "</h6>\n            <h6>").concat(ui.Team_1.name, "</h6>\n            <h6>SCORE:").concat(ui.Team_1.players[won_id].score, "</h6><hr>\n            ");
        }
        else {
            mid.innerHTML += "<h6>MATCH WON BY ".concat(ui.Team_2.name, "</h6><hr>\n            <h6>MAN OF THE MATCH</h6>\n            <h6>").concat(ui.Team_2.players[won_id].name, "</h6>\n            <h6>").concat(ui.Team_2.name, "</h6>\n            <h6>SCORE:").concat(ui.Team_2.players[won_id].score, "</h6><hr>\n            ");
        }
    };
});
