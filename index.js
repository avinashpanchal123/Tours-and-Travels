

let trips = [
    {
        id: 1,
        name: "Jaipur",
        img_url: "./images/jaipur.jpg",
        price: 10000,

        info: ""
    },
    {
        id: 2,
        name: "Nepal",
        img_url: "./images/nepal.jpg",
        price: 30000,
        info: ""
    },
    {
        id: 3,
        name: "Mahabaleshwar",
        img_url: "./images/mahabaleshwar.jpg",
        price: 5000,
        info: ""
    },
    {
        id: 4,
        name: "Meghalaya",
        img_url: "./images/meghalaya.jpg",
        price: 30000,
        info: ""
    }
]


function createTrips(){
    let tourism = document.getElementById("tourism")
    let outer_container = document.createElement("div");
    outer_container.classList.add("outer_container");
    for ( let i = 0; i < trips.length; i++){
        let t = document.createElement("div");
        let img = document.createElement("img");
        let price = document.createElement("div");
        price.innerText = trips[i].price + "₹"
        img.src = trips[i].img_url
        let nameDiv = document.createElement("div")
        nameDiv.innerText = trips[i].name
        t.append(img)
        t.append(price)
        t.classList.add("item")
        outer_container.append(t)
    }
    tourism.append(outer_container)

}

createTrips()