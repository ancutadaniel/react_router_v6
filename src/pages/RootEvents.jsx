import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

const RootEvents = () => {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
};

export default RootEvents;
