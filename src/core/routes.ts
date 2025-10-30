interface Routes {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any 
  [key: string]: Record<string, any>;
}

export const ROUTES: Routes = {
  CREDSERV: {
    home: {
      path: "/",
    },
    overview: {
      path: "/faq",
    },
    solutions: {
      path: "/solutions",
    },
    aboutUs: {
      path: "/about-us",
    },
    contactUs: {
      path: "/contact-us",
    },
  },
};
