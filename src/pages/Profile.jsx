import PreviewDetails from "../features/preview/PreviewDetails";
import PreviewLayout from "../features/preview/PreviewLayout";
import PreviewLinkList from "../features/preview/PreviewLinkList";
import ProfileForm from "../features/profile/ProfileForm";

function Profile() {
  return (
    <div className="h-full bg-grey-light xl:flex xl:justify-between xl:gap-6">
      <div className="flex justify-center bg-white md:rounded-3xl xl:basis-[45%]">
        <PreviewLayout type="editor">
          <PreviewDetails />
          <PreviewLinkList />
        </PreviewLayout>
      </div>

      <div className="h-full rounded-xl bg-white p-6 xl:basis-[55%]">
        <div className="flex flex-col gap-10">
          <section>
            <h1 className="mb-2 text-2xl font-bold">Profile Details</h1>
            <p className="text-grey">
              Add your details to create a personal touch to your profile.
            </p>
          </section>
          <ProfileForm />
        </div>
      </div>
    </div>
  );
}

export default Profile;
