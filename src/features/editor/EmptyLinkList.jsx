function EmptyLinkList() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 rounded-xl bg-grey-light p-5">
      <div className="m-5 flex flex-col items-center gap-6 md:gap-10">
        <img className="" src="illustration-empty.svg" />
        <div className="flex flex-col items-center gap-6">
          <h2 className="mb-2 text-center text-2xl font-bold md:mb-0">
            Let&apos;s get you started
          </h2>
          <p className="text-center text-grey md:mx-16">
            Use the “Add new link” button to get started. Once you have more
            than one link, you can reorder and edit them. We&apos;re here to
            help you share your profiles with everyone!
          </p>
        </div>
      </div>
    </div>
  );
}

export default EmptyLinkList;
