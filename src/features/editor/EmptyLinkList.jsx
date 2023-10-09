function EmptyLinkList() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 rounded-xl bg-grey-light p-5">
      <img className="h-20" src="illustration-empty.svg" />
      <h2 className="mb mb-2 text-2xl font-bold">Let&apos;s get you started</h2>
      <p className="text-center text-grey">
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We&apos;re here to help you
        share your profiles with everyone!
      </p>
    </div>
  );
}

export default EmptyLinkList;
