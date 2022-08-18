const createStore = (reducer ,init)=>{
    const store= {}
    store.state=init

    store.listeners=[]
    store.getState=()=>store.state
    
    store.subscribe=listener=>store.listeners.push(listener)

    store.dispatch=action=>{
        store.state=reducer(store.state,action)
        store.listeners.forEach(listener=>listener())
    }
    return store
}


const reducer=(state,action)=>{
    return state
}

const store = createStore(reducer,0)

store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch()