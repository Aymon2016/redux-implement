
const init = [
    {
        url:'https://facebook.com',
        name:'facebook.com',
        isFav:false,
        id:'sfjaj'
    }
]
const reducer = (state=init,action)=>{

switch(action.type){

    case 'ADD_BOOKMARKS':{
        return state.concat(action.payload)
    }

    case 'REMOVE_BOOKMARKS':{

       return state.filter(bookmark=>bookmark.id !== action.payload)
    }

    case 'TOGGLE_FAVORITE':{

        return state.map(bookmark=>{

            if(bookmark.id ===action.payload){
             bookmark.isFav = !bookmark.isFav
            }

            return bookmark
        })

    }
}
}
export default reducer