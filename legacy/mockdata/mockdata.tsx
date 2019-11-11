
const mockroutes: {headline: string, subheadline: string, stops:string[], attractions:String[]}[] = [
    {
        headline: "Christian's Norway Route",
        subheadline:"Fjords you just have to explore",
        stops:[
            "Bergen",
            "Stavanger",
            "Molde",
            "Ålesund"
        ],
        attractions:["Hiking", "Swimming","Nature"]
    },
    {
        headline: "Paul's South Tyrol Route",
        subheadline:"Explore the Dolomites",
        stops:[
            "Bolzano",
            "Trento",
        ],
        attractions:["Hiking", "Swimming","Nature", "Food"]
    }
]

//export default mockroutes;




const initialData = {
    routes:{
        "h12345":{
            id:"h12345",
            headline: "Christian's Norway Route",
            subheadline:"Fjords you just have to explore",
            stops:[
                "Bergen",
                "Stavanger",
                "Molde",
                "Ålesund"
            ],
            attractions:["Hiking", "Swimming","Nature"]
        },
        "h54321":{
            id:"h54321",
            headline: "Paul's South Tyrol Route",
            subheadline:"Explore the Dolomites",
            stops:[
                "Bolzano",
                "Trento",
            ],
            attractions:["Hiking", "Swimming","Nature", "Food"]
        },
        "h12354":{
            id:"h12354",
            headline: "Simon's Allgäu Route",
            subheadline:"Experience Neuschweinstein and so much more!",
            stops:[
                "Mammendorf",
                "Füssen",
            ],
            attractions:["Hiking", "Swimming","Nature", "Sking"]
        },
    },
    columns:{
        "column-1":{
            id: "column-1",
            title:"Routes",
            routeIds:["h12345","h54321","h12354"],

        }
    },
    columnOrder:["column-1"],
}

export default initialData;
/*

*/