export const getRoute = (routeLocation: string) => {
  let parts = window.location.pathname?.split("/");
  return window.location.pathname.replace(
    parts[parts?.length - 1],
    routeLocation
  );
};
