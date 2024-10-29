document.addEventListener('DOMContentLoaded', function() {
    const teamContainer = document.getElementById('team-container');
  
    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    // Configure it: GET-request for the URL /team.json
    xhr.open('GET', 'team.json', true);
  
    // Send the request over the network
    xhr.send();
  
    // This will be called after the response is received
    xhr.onload = function() {
      if (xhr.status != 200) { // analyze HTTP response status
        console.error(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
      } else { // show the result
        const teamMembers = JSON.parse(xhr.responseText);
        displayTeamMembers(teamMembers);
      }
    };
  
    // Error handling for network issues
    xhr.onerror = function() {
      console.error('Request failed');
    };
  
    // Function to display team members dynamically
    function displayTeamMembers(members) {
      members.forEach(member => {
        const memberDiv = document.createElement('div');
        memberDiv.className = 'team-member';
        memberDiv.innerHTML = `
          <div class="flip-container">
            <div class="flipper" _="on mouseover add .flip to my first img; on mouseout remove .flip from my first img">
              <img src="${member.image}" alt="${member.name}">
              <div class="back">${member.name}</div>
            </div>
          </div>
          <h3 _="on mouseover add .show to my next p; on mouseout remove .show from my next p">${member.name}</h3>
          <p class="intro">${member.bio}</p>
          <p><strong>${member.role}</strong></p>
        `;
        teamContainer.appendChild(memberDiv);
      });
    }
  });
  