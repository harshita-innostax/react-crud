import React, { useState } from "react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const FileUpload = () => {
  const [state, setState] = useState([]);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: useCallback((acceptedFiles) => {
      console.log(acceptedFiles);
      setState(acceptedFiles);
    }, []),
  });

  return (
    <>
      <h1 className="text-4xl bold flex justify-center mt-60 mb-20">
        {" "}
        Upload Your Files Here
      </h1>
      <div
        className="flex justify-center h-screen border-5 text-xl"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <div>
            <p className="cursor-pointer border-2 text-red-600 bold  border-black border-dashed pt-4 pb-4 pr-6 pl-6">
              Drag 'n' drop some files here, or click to select files
            </p>
          </div>
        )}
      </div>
      <div className="">
        {state &&
          state.length > 0 &&
          state.map((c, i) => {
            return (
              <img
                key={i}
                src={URL.createObjectURL(c)}
                width={200}
                height={200}
                alt="File uploaded"
              />
            );
          })}
      </div>
    </>
  );
};

export default FileUpload;
