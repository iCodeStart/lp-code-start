import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import Spinner from "./components/Spinner";

const Home = lazy(() => import("./pages/Home"));
const VSLAula = lazy(() => import("./pages/VSLAula"));
const DevCashUpsell = lazy(() => import("./pages/DevCashUpsell"));
const SummaryContent = lazy(() => import("./pages/SummaryContent"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog"));
const DevCashPrincipalOffer = lazy(
  () => import("./pages/DevCash/DevCashPrincipalOffer")
);

const DownloadEbook = lazy(() => import("./pages/DownloadEbook/DownloadEbook"));
const DownloadLinkedinApproach = lazy(() => import("./pages/DownloadLinkedinApproach/DownloadLinkedinApproach"));
const ThankYou = lazy(() => import('./pages/ThankYou/ThankYou'))

const withSuspense = (
  Component: React.LazyExoticComponent<() => JSX.Element>
) => (
  <Suspense fallback={<Spinner />}>
    <Component />
  </Suspense>
);

export const routes = createBrowserRouter([
  {
    path: "/",
    element: withSuspense(Home),
  },
  {
    path: "/aula-gratis",
    element: withSuspense(VSLAula),
  },
  {
    path: "/dev-cash-upsell",
    element: withSuspense(DevCashUpsell),
  },
  {
    path: "/thank-you",
    element: withSuspense(ThankYou),
  },
  {
    path: "/summary-content",
    element: withSuspense(SummaryContent),
  },
  {
    path: "/catalog",
    element: withSuspense(Catalog),
  },
  {
    path: "/dev-cash",
    element: withSuspense(DevCashPrincipalOffer),
  },
  {
    path: "/download-ebook",
    element: withSuspense(DownloadEbook)
  },
  {
    path: "/download-linkedin",
    element: withSuspense(DownloadLinkedinApproach)
  }
]);
