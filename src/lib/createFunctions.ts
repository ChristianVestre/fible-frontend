import uuid from 'uuid/v4';
export const createComponent =  ({user, type, selectedHtypeId}) => {
    const idSuffix = type.substring(0,2).toLowerCase() + "_"
    const selectedComponentId = idSuffix + uuid()
    let componentTemplate;
    switch(type){
        case "HEADLINE":{
            componentTemplate = '{"headline":"New Headline"}'
        }
    }
    return{
        id: selectedComponentId,
        onwnerId:user.id,
        ownerName:user.name,
        parentId:selectedHtypeId,
        type: type,
        content: componentTemplate
    }

}

export const createRoute =  ({user, type}) => {
    const idSuffix = type.substring(0,2).toLowerCase() + "_"
    const routeId = idSuffix + uuid()

    return{
        id:routeId,
        onwnerId:user.id,
        ownerName:user.name,
        name:"New Route",
        image:"",
        stops:[],
        pois:[],
        components:[],
        locations:[],

    }

}

export const createStop =  ({user, type}) => {
    const idSuffix = type.substring(0,2).toLowerCase() + "_"
    const stopId = idSuffix + uuid()

    return{
        id:stopId,
        onwnerId:user.id,
        ownerName:user.name,
        name:"New Stop",
        image:"",
        pois:[],
        components:[],
        locations:"",
    }

}

export const createPoi =  ({user, type}) => {
    const idSuffix = type.substring(0,2).toLowerCase() + "_"
    const poiId = idSuffix + uuid()

    return{
        id:poiId,
        onwnerId:user.id,
        ownerName:user.name,
        name:"New Poi",
        image:"",
        components:[],
        location:"",
    }

}