import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Homepage</h1>
      <ul>
        <li>
          <Link to="/">Postspage</Link>
        </li>
        <li>
          <Link to="/home1">Home1</Link>
        </li>
        <li>
          <Link to="/profilepage">ProfilePage</Link>
        </li>
        <li>
          <Link to="/library">Library</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/membership">Membership</Link>
        </li>
        <li>
          <Link to="/eventspage">EventsPage</Link>
        </li>
        <li>
          <Link to="/membershipsuccess">MembershipSuccess</Link>
        </li>
        <li>
          <Link to="/editprofilepage">EditProfilePage</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/singlepostpage">SinglePostPage</Link>
        </li>
        <li>
          <Link to="/singleeventpage">SingleEventPage</Link>
        </li>
        <li>
          <Link to="/conatct">Conatct</Link>
        </li>
        <li>
          <Link to="/regles">Regles</Link>
        </li>
        <li>
          <Link to="/rapportpage">Rapportpage</Link>
        </li>
        <li>
          <Link to="/eventreservationpage">EventReservationPage</Link>
        </li>
        <li>
          <Link to="/activities">Activities</Link>
        </li>
        <li>
          <Link to="/reservationsuccess">ReservationSuccess</Link>
        </li>
        <li>
          <Link to="/eventticket">EventTicket</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
