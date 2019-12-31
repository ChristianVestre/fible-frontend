export interface DataState {
    data: {
        user: {
            name: string
            routes: [string]
            pois: [string]
            stops: [string]
        }
        selectedHtypeId:string
        selectedComponentId:string
        selectedHtype:string
        routes: {}
        pois: {}
        stops: {}
        components:{}
    },
}
export interface UiState {
    ui: {
        routeMgmt: {
            selector: {
                lastManagerUiCode:string
                managerUiCode: {}
                htype: string
                selectedroutes:string
                selectedstops:string
                selectedpois:string
            }
            columns: { ids: [] }
            title:string
        },
        inputScreen: {
            simulator:{
                show:string
                selectedComponentId:string
            },
            inputMenu:{
                reload:boolean
                show:string
                htype:string
                routes:[{}]
                stops:[{}]
                pois:[{}]

            }
        },
    }
}   
