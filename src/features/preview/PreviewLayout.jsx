function PreviewLayout({ children, type = "preview" }) {
  const layout = {
    preview:
      "md:absolute md:left-1/2 md:top-48 md:w-[35vw] md:-translate-x-1/2 md:drop-shadow-xl md:px-14 md:py-12",
    editor: "xl:bg-phone-mockup",
  };

  return (
    <main
      className={`flex flex-col items-center  bg-white md:rounded-3xl ${layout[type]} xl:h-full xl:bg-center xl:bg-no-repeat`}
    >
      <div className="flex flex-col items-center justify-center gap-14 xl:translate-y-[5rem] xl:gap-6 2xl:translate-y-[9.6rem] ">
        {children}
      </div>
    </main>
  );
}

export default PreviewLayout;
