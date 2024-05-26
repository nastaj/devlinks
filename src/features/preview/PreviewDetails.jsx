import { useParams } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import useProfile from "../profile/useProfile";

function PreviewDetails() {
  const { userId: UrlUserId } = useParams();
  const { profile = {}, isLoading } = useProfile(UrlUserId);
  const { firstName, lastName, avatar, email } = profile;
  const fullName = `${firstName} ${lastName}`;

  return (
    <div className="flex flex-col gap-[25px] xl:mb-2 xl:gap-0">
      <figure className="flex justify-center xl:mb-5 xl:mt-2">
        {avatar ? (
          <img
            src={avatar}
            alt={`Avatar of ${fullName}`}
            className="h-28 w-28 rounded-full border-4 border-brand-purple xl:h-[6.5rem] xl:w-[6.5rem]"
          />
        ) : (
          <div className="h-28 w-28 rounded-full bg-[#EEEEEE] xl:h-[6.5rem] xl:w-[6.5rem]" />
        )}
      </figure>
      <div className="text-center">
        {firstName && lastName ? (
          <h1 className="mb-2 text-[2rem] font-bold xl:text-2xl">{fullName}</h1>
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
