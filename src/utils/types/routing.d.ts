type RouteParams = Record<string, any>;

declare type RoutingType = {
  to: (router: string, params?: RouteParams) => void;
  push: (router: string, params?: RouteParams) => void;
  resetRouteToTop: (router: string, params?: RouteParams) => void;
  replace: (router: string, params?: RouteParams) => void;
  logout: () => void;
  goBack: () => void;
  pop: (index?: number) => void;
  goReset: (router: string, params?: RouteParams) => void;
  inPrivate: (router: string, params?: RouteParams) => void;
  inPublic: (router: string, params?: RouteParams) => void;
  toStack: (
    routerStack: string,
    routerName: string,
    params?: RouteParams,
  ) => void;
};
