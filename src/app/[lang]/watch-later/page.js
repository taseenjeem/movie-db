import WatchLater from "@/components/page/watch-later/WatchLater";

const WatchLaterPage = ({ params }) => {
  return (
    <section className="min-h-screen">
      <WatchLater params={params} />
    </section>
  );
};

export default WatchLaterPage;
