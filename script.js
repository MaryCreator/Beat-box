function filterTracks() {
  const input = document.getElementById("search").value.toLowerCase();
  const tracks = document.querySelectorAll(".track");

  tracks.forEach((track) => {
    const text = track.textContent.toLowerCase();
    track.style.display = text.includes(input) ? "block" : "none";
  });
}
