import PreviewDetails from "../features/preview/PreviewDetails";
import PreviewLinkList from "../features/preview/PreviewLinkList";
import PreviewNav from "../features/preview/PreviewNav";

function Preview() {
  return (
    <>
      <header>
        <PreviewNav />
      </header>
      <main className="flex flex-col items-center justify-center">
        <div className="flex w-3/5 flex-col items-center justify-center gap-14">
          <PreviewDetails />
          <PreviewLinkList />
        </div>
      </main>
    </>
  );
}

export default Preview;
