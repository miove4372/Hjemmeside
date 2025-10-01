const url = "http://www.omdbapi.com/?i=tt3896198&apikey=2866b356&s=batman&page=1"

export async function getMovie(){
    const res = await fetch(url);
    const data = await res.json();
    return data
    

}

