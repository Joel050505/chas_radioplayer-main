const channels = document.querySelector("#channels");

// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'
async function getData() {
  const response = await fetch(
    "https://api.sr.se/api/v2/channels?format=json&size=100"
  );
  const data = await response.json();
  console.log(data);

  // Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.
  data.channels.forEach((data) => {
    const image = document.createElement("img");
    const div = document.createElement("div");
    const radioChannel = document.createElement("div");
    const channelName = document.createElement("h2");
    const audio = document.createElement("audio");

    radioChannel.className = "main-content";

    radioChannel.style.backgroundColor = "#" + data.color;
    console.log(data.color);

    div.className = "box";

    image.src = data.image;
    channelName.textContent = data.name;
    audio.controls = true;
    audio.src = data.liveaudio.url;
    audio.type = "audio/mpeg";

    radioChannel.appendChild(channelName);
    radioChannel.appendChild(audio);

    div.appendChild(image);
    div.appendChild(radioChannel);

    channels.appendChild(div);
  });
}
getData();

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>
