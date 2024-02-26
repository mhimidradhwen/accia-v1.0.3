import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const EventTicket = React.lazy(() => import("pages/EventTicket"));
const ReservationSuccess = React.lazy(() => import("pages/ReservationSuccess"));
const Activities = React.lazy(() => import("pages/Activities"));
const EventReservationPage = React.lazy(
  () => import("pages/EventReservationPage"),
);
const Rapportpage = React.lazy(() => import("pages/Rapportpage"));
const Regles = React.lazy(() => import("pages/Regles"));
const Conatct = React.lazy(() => import("pages/Conatct"));
const SingleEventPage = React.lazy(() => import("pages/SingleEventPage"));
const SinglePostPage = React.lazy(() => import("pages/SinglePostPage"));
const Gallery = React.lazy(() => import("pages/Gallery"));
const EditProfilePage = React.lazy(() => import("pages/EditProfilePage"));
const MembershipSuccess = React.lazy(() => import("pages/MembershipSuccess"));
const EventsPage = React.lazy(() => import("pages/EventsPage"));
const Membership = React.lazy(() => import("pages/Membership"));
const About = React.lazy(() => import("pages/About"));
const Library = React.lazy(() => import("pages/Library"));
const ProfilePage = React.lazy(() => import("pages/ProfilePage"));
const Home1 = React.lazy(() => import("pages/Home1"));
const Postspage = React.lazy(() => import("pages/Postspage"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Postspage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/profilepage" element={<ProfilePage />} />
          <Route path="/library" element={<Library />} />
          <Route path="/about" element={<About />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/eventspage" element={<EventsPage />} />
          <Route path="/membershipsuccess" element={<MembershipSuccess />} />
          <Route path="/editprofilepage" element={<EditProfilePage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/singlepostpage" element={<SinglePostPage />} />
          <Route path="/singleeventpage" element={<SingleEventPage />} />
          <Route path="/conatct" element={<Conatct />} />
          <Route path="/regles" element={<Regles />} />
          <Route path="/rapportpage" element={<Rapportpage />} />
          <Route
            path="/eventreservationpage"
            element={<EventReservationPage />}
          />
          <Route path="/activities" element={<Activities />} />
          <Route path="/reservationsuccess" element={<ReservationSuccess />} />
          <Route path="/eventticket" element={<EventTicket />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
