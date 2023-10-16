import PreviewDetails from "../features/preview/PreviewDetails";
import PreviewLinkList from "../features/preview/PreviewLinkList";
import PreviewNav from "../features/preview/PreviewNav";

function Preview() {
  return (
    <>
      <div className="md:h-[35vh] md:rounded-b-[2rem] md:bg-brand-purple md:p-6">
        <header className="md:rounded-xl md:bg-white">
          <PreviewNav />
        </header>
      </div>
      <main className="flex flex-col items-center justify-center bg-white md:absolute md:left-1/2 md:top-48 md:w-[35vw] md:-translate-x-1/2 md:rounded-3xl md:px-14 md:py-12 md:drop-shadow-xl">
        <div className="flex flex-col items-center justify-center gap-14">
          <PreviewDetails />
          <PreviewLinkList />
        </div>
      </main>
    </>
  );
}

export default Preview;
