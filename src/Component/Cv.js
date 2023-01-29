import React from "react";


const png_file_url = "http://localhost:3000/FrosinaCV.pdf";
const Cv = () => {
  const downoadFileatUrl = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("downoad", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div>
      <button
        onClick={() => {
          downoadFileatUrl(png_file_url);
        }}
      >
        DOWNLOAD MY CV
      </button>
    </div>
  );
};

export default Cv;
