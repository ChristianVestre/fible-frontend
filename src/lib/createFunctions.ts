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