import { useState } from "react";
import toast from "react-hot-toast";

function FileInput({
  label,
  name,
  accept,
  register,
  validationSchema,
  errors,
  disabled,
  setFile,
  file,
}) {
  const [validImage, setValidImage] = useState();

  function handleChange(e) {
    const fileName = e.target.files[0];

    if (fileName) {
      const image = new Image();

      image.onload = () => {
        const maxWidth = 1024; // Set your maximum width
        const maxHeight = 1024; // Set your maximum height

        if (image.width > maxWidth || image.height > maxHeight) {
          toast.error(
            "Image dimensions are too large. Please select a smaller image.",
          );
          e.target.value = ""; // Clear the input field
        } else {
          setValidImage(URL.createObjectURL(fileName));
          setFile(e.target.files[0]);
        }
      };

      image.src = URL.createObjectURL(fileName);
    }
  }

  return (
    <>
      <label
        className={`flex h-48 w-48 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl bg-brand-purple--light font-bold text-brand-purple ${
          errors[name] ? "border border-red" : ""
        }`}
        htmlFor="file"
      >
        {validImage || file ? (
          <div className="group relative h-48 w-48">
            <div className="rounded-xl transition-all group-hover:backdrop-brightness-[0.1]">
              <img
                className="h-48 w-48 rounded-xl group-hover:opacity-30"
                src={validImage || file}
                alt="Profile image"
              />
            </div>

            <div className="absolute left-1/2 top-1/2 hidden w-full -translate-x-1/2 -translate-y-1/2 flex-col place-items-center gap-2 text-white group-hover:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="none"
                viewBox="0 0 40 40"
              >
                <path
                  fill="#fff"
                  d="M33.75 6.25H6.25a2.5 2.5 0 0 0-2.5 2.5v22.5a2.5 2.5 0 0 0 2.5 2.5h27.5a2.5 2.5 0 0 0 2.5-2.5V8.75a2.5 2.5 0 0 0-2.5-2.5Zm0 2.5v16.055l-4.073-4.072a2.5 2.5 0 0 0-3.536 0l-3.125 3.125-6.875-6.875a2.5 2.5 0 0 0-3.535 0L6.25 23.339V8.75h27.5ZM6.25 26.875l8.125-8.125 12.5 12.5H6.25v-4.375Zm27.5 4.375h-3.34l-5.624-5.625L27.91 22.5l5.839 5.84v2.91ZM22.5 15.625a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0Z"
                />
              </svg>
              <span className="text-center">Change Image</span>
            </div>
          </div>
        ) : (
          <>
            {" "}
            <img
              className="h-10 w-10"
              src="icon-upload-image.svg"
              alt="Image upload icon"
            />
            <span>{label}</span>
          </>
        )}
      </label>
      <input
        type="file"
        id="file"
        name={name}
        accept={accept}
        {...register(name, validationSchema)}
        disabled={disabled}
        onChange={handleChange}
        hidden
      />
    </>
  );
}

export default FileInput;
