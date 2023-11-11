  // Load saved player positions
  window.addEventListener('load', function() {
    var savedPositions = localStorage.getItem('playerPositions');
    if (savedPositions) {
      var positions = JSON.parse(savedPositions);
      var playersList = document.querySelector('.players-list');
      var friendsList = document.querySelector('.friends-list');

      for (var playerName in positions) {
        if (positions.hasOwnProperty(playerName)) {
          var player = findPlayerByName(playerName);
          if (player) {
            var playerParent = positions[playerName] === 'friends' ? friendsList : playersList;
            playerParent.appendChild(player);
          }
        }
      }
    }
  });

  // Save player positions
  function savePlayerPositions() {
    var playersList = document.querySelector('.players-list');
    var friendsList = document.querySelector('.friends-list');
    var players = playersList.getElementsByTagName('li');
    var friends = friendsList.getElementsByTagName('li');
    var positions = {};

    for (var i = 0; i < players.length; i++) {
      var player = players[i];
      var playerName = player.textContent;
      positions[playerName] = 'players';
    }

    for (var i = 0; i < friends.length; i++) {
      var friend = friends[i];
      var friendName = friend.textContent;
      positions[friendName] = 'friends';
    }

    localStorage.setItem('playerPositions', JSON.stringify(positions));
  }

  // Select player
  function selectPlayer(player) {
    player.classList.toggle('selected');
  }

  // Move selected player to friends list
  function moveToFriends() {
    var playersList = document.querySelector('.players-list');
    var friendsList = document.querySelector('.friends-list');
    var selectedPlayers = playersList.getElementsByClassName('selected');

    while (selectedPlayers.length > 0) {
      var player = selectedPlayers[0];
      friendsList.appendChild(player);
      player.classList.remove('selected');
    }

    savePlayerPositions();
  }

  // Move selected player to players list
  function moveToPlayers() {
    var playersList = document.querySelector('.players-list');
    var friendsList = document.querySelector('.friends-list');
    var selectedFriends = friendsList.getElementsByClassName('selected');

    while (selectedFriends.length > 0) {
      var friend = selectedFriends[0];
      playersList.appendChild(friend);
      friend.classList.remove('selected');
    }

    savePlayerPositions();
  }

  // Find player by name
  function findPlayerByName(playerName) {
    var playersList = document.querySelector('.players-list');
    var friendsList = document.querySelector('.friends-list');

    var players = playersList.getElementsByTagName('li');
    var friends = friendsList.getElementsByTagName('li');

    for (var i = 0; i < players.length; i++) {
      if (players[i].textContent === playerName) {
        return players[i];
      }
    }

    for (var i = 0; i < friends.length; i++) {
      if (friends[i].textContent === playerName) {
        return friends[i];
      }
    }

    return null;
  }

  // Search players
  function searchPlayers(keyword) {
    var playersList = document.querySelector('.players-list');
    var players = playersList.getElementsByTagName('li');

    for (var i = 0; i < players.length; i++) {
      var player = players[i];
      var playerName = player.textContent.toLowerCase();

      if (playerName.includes(keyword.toLowerCase())) {
        player.style.display = 'block';
      } else {
        player.style.display = 'none';
      }
    }
  }