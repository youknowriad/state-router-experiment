export const ROUTE_RECOGNIZE = 'ROUTE_RECOGNIZE';
export const ROUTE_SELECT = 'ROUTE_SELECT';

export const recognizerMiddleware = recognizer => store => next => action => {
  console.log(recognizer.recognize(action.payload));
  return (action && typeof action === 'object' && action.type === ROUTE_RECOGNIZE)
    ? next({ type: ROUTE_SELECT, routes: recognizer.recognize(action.payload), url: action.payload })
    : next(action);
}

export const recognizerReducer = (state = { routes: [], url: null }, action) => {
  if (action.type === ROUTE_SELECT) {
    return {
      routes: action.routes,
      url: action.url
    };
  }

  return state;
}
