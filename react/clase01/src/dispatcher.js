const createDispatcher = () => {
 let listeners = []

 const register = listener => {
   listeners.push(listener)
 }

 const dispatch = action => {
   listeners.forEach(listener => listener(action))
 }
 return { register, dispatch }
}

const dispatcher = createDispatcher();
global.dispatcher = dispatcher

export default dispatcher
