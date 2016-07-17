let checkCosplay = (cosplay=>{
    let notCosplays = [
    "Category talk:",
    "Draft:", "Draft talk:",
    "User:", "User talk:", 
    "Talk:", 
    "File:", "File talk:",
    "Portal:", "Portal talk:", 
    "Wikipedia:", "Wikipedia talk:",
    "Template:", "Template talk:"];

    let isCosplay = notCosplays.every(type=>{
        return !cosplay.includes(type);
    })

    return isCosplay;
})

export default function generateCosplay(cb){
    fetch("https://en.wikipedia.org/w/api.php?action=query&list=random&rnlimit=1&format=json&origin=*").then((response)=>{
        return response.json();
    }).then(json=>{
        let newCosplay = json.query.random[0].title;
        let isCosplay = checkCosplay(newCosplay);
        console.log(isCosplay);

        if(isCosplay) {
            if(newCosplay.includes("Category:")) {
                newCosplay = newCosplay.slice(9, newCosplay.len);
            }
            cb(newCosplay);
            return newCosplay;            
        }
        else
        {
            generateCosplay(cb);
        }
    })
}

