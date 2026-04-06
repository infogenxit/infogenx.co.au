// import { Helmet } from "react-helmet-async";
// import { useLocation } from "react-router-dom";

// const SITE_URL = "https://infogenx.com.au";

// const canonicalPathByRoute = {
//   "/contact-us/get-in-touch": "/contact-us",
// };

// const RouteSeo = () => {
//   const location = useLocation();
//   const canonicalPath =
//     canonicalPathByRoute[location.pathname] ?? location.pathname;
//   const canonicalUrl = `${SITE_URL}${canonicalPath === "/" ? "/" : canonicalPath}`;

//   return (
//     <Helmet>
//       <link rel="canonical" href={canonicalUrl} />
//       <meta property="og:url" content={canonicalUrl} />
//       {location.pathname === "/contact-us/get-in-touch" && (
//         <meta name="robots" content="noindex, follow" />
//       )}
//     </Helmet>
//   );
// };

// export default RouteSeo;
