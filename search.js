function    searchSongs()
{
    let input = document.getElementById("textInput").value; //get user input
    let apiEndpoint = "https://api.spotify.com/v1/search?type=track&q=" + encodeURIComponent(input); //api endpoint to get list of tracks based on user input
    let apiKey = 'BQBBsHzWf52xPpY46kPVvnY2roCk24vmNCEhfgFQVjyCtk0I73oCPuIUI8Jfq0vMdl4jZDU6X1is60AAqMZnb8zq9mK5plAIyp4jIImek1reKiSD-lpG'; //your API token goes here
    const liTracks = document.getElementById("liTracks"); //get list element
    liTracks.innerHTML = '';

    fetch(apiEndpoint,{headers: {'Authorization': 'Bearer ' + apiKey}}) //fetch data using api endpoint
        .then((response) => response.json())
        .then((data) =>
        {
            if (data.tracks.items.length > 0)
            {
                for (let i = 0; i < data.tracks.items.length; ++i) //loop through all the tracks found
                {
                    const liTrack = document.createElement("li");
                    const track = data.tracks.items[i];
                    const trackId = track.id;
                    liTrack.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/' + trackId + '?utm_source=generator" width="20%" height="100" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
                    liTracks.appendChild(liTrack); //add embeded track to the list
                }
            }
            else
            {
                const liTrack = document.createElement("li");
                liTrack.innerHTML = 'No track found';
                liTracks.appendChild(liTrack);
            }
        })
        .catch(error =>
        {
            console.log('Error', error);
        });
}
