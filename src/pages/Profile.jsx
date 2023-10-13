import ProfileForm from "../features/profile/ProfileForm";

function Profile() {
  return (
    <div className="flex flex-col gap-10 p-6">
      <section>
        <h1 className="mb-2 text-2xl font-bold">Profile Details</h1>
        <p className="text-grey">
          Add your details to create a personal touch to your profile.
        </p>
      </section>
      <ProfileForm />
    </div>
  );
}

export default Profile;
