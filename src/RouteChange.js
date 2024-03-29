export const routeChange = (dogName) => {
    const dogRoute = `dogs/${dogName}`
    window.location.pathname=dogRoute
  }