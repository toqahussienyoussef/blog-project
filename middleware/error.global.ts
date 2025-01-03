// middleware/error.global.ts
export default defineNuxtRouteMiddleware((to) => {
  const nuxtApp = useNuxtApp();

  if (process.client) {
    const routes = nuxtApp.$router.getRoutes();
    const routeExists = routes.some((route) => {
      // Check exact match
      if (route.path === to.path) return true;

      // Check dynamic routes by comparing path segments
      const routeSegments = route.path.split("/");
      const targetSegments = to.path.split("/");

      if (routeSegments.length !== targetSegments.length) return false;

      return routeSegments.every(
        (segment, index) =>
          segment.startsWith(":") || segment === targetSegments[index]
      );
    });

    if (!routeExists) {
      return navigateTo("/404");
    }
  }
});
