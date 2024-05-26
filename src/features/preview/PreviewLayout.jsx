function PreviewLayout({ children, type = "preview" }) {
  const layout = {
    preview:
      "md:absolute md:left-1/2 md:top-48 md:w-[35vw] md:-translate-x-1/2 md:drop-shadow-xl md:px-14 md:py-12",
    editor: "xl:bg-phone-mockup",
  };

  return (
    <div
      className={`${layout[type]} flex flex-col items-center justify-center gap-14 xl:h-full xl:w-1/2  xl:gap-6 xl:bg-contain xl:bg-center xl:bg-no-repeat`}
    >
      {children}
    </div>
  );
}

export default PreviewLayout;
