export function pushSearch(search={}){
    let current=new URLSearchParams(window.location.search);
    
    for(let key in search){
        current.set(key, search[key]);
    }

    window.history.replaceState(null, 
        document.title, window.location.pathname+"?"+current.toString()
    );
}

export function pushLocation(location="/"){
    window.history.replaceState(null, 
        document.title, location
    );
}

export function pushHash(hash=""){
    window.location.hash="ASDASD";
}