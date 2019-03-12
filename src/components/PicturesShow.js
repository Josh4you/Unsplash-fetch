import React from "react";
const ImageList = props => {
  const newImagelist = props.imageList.map(img => {
    return (
      <div className="col-md-4 p-2 card-body">
        <img
          key={img.id}
          id="image"
          className="card-img p-2"
          src={img.urls.regular}
          alt={img.description}
        />

        <div className="card-title text-center">
          <label htmlFor="image">{img.description} </label>
        </div>
      </div>
    );
  });

  return <div className="row"> {newImagelist} </div>;
};

export default ImageList;
