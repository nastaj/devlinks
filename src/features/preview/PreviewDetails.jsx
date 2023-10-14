import { useParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import useProfile from "../profile/useProfile";

function PreviewDetails() {
  const { userId: UrlUserId } = useParams();
  const { profile = {}, isLoading } = useProfile(UrlUserId);
  const { firstName, lastName, avatar, email } = profile;
  const fullName = `${firstName} ${lastName}`;

  if (isLoading) return <Spinner />;

  return (
    <div className="flex flex-col gap-[25px] self-stretch">
      <figure className="flex justify-center">
        {avatar ? (
          <img
            src={avatar}
            alt={`Avatar of ${fullName}`}
            className="h-28 w-28 rounded-full border-4 border-brand-purple"
          />
        ) : (
          <div className="h-28 w-28 rounded-full bg-[#EEEEEE]" />
        )}
      </figure>
      <div className="text-center">
        {firstName && lastName ? (
          <h1 className="mb-2 text-[2rem] font-bold">{fullName}</h1>
        ) : (
          <div className="mb-2 h-5 w-full rounded-xl bg-[#EEEEEE]" />
        )}

        {email ? (
          <h2 className="text-grey">{email}</h2>
        ) : (
          <div className="mx-auto mt-6 h-3 w-1/2 rounded-xl bg-[#EEEEEE]" />
        )}
      </div>
    </div>
  );
}

export default PreviewDetails;
