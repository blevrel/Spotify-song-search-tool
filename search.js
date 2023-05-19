function    searchSongs()
{
    let input = document.getElementById("textInput").value;
    let apiEndpoint = "https://api.spotify.com/v1/search?type=track&q=" + encodeURIComponent(input);
    let apiKey = 'BQBBsHzWf52xPpY46kPVvnY2roCk24vmNCEhfgFQVjyCtk0I73oCPuIUI8Jfq0vMdl4jZDU6X1is60AAqMZnb8zq9mK5plAIyp4jIImek1reKiSD-lpG';
    const liTracks = document.getElementById("liTracks");
    liTracks.innerHTML = '';

    fetch(apiEndpoint,{headers: {'Authorization': 'Bearer ' + apiKey}})
        .then((response) => response.json())
        .then((data) =>
        {
            if (data.tracks.items.length > 0)
            {
                for (let i = 0; i < data.tracks.items.length; ++i)
                {
                    const liTrack = document.createElement("li");
                    const track = data.tracks.items[i];
                    const trackId = track.id;
                    liTrack.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/' + trackId + '?utm_source=generator" width="20%" height="100" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>';
                    liTracks.appendChild(liTrack);
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