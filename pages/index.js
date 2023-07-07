import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/events/event-list";
import Layout from "../components/layout/layout";

function HomePage() {
  const featuredEvents = getFeaturedEvents;
  return (
    <Layout>
      <EventList items={featuredEvents} />
    </Layout>
  );
}

export default HomePage;
