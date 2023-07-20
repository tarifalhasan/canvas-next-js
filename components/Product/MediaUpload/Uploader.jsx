import { ReactSVG } from 'react-svg';
import uploaderImage from '../../../assets/icons/uploadser.svg';
import { useRef, useState } from 'react';
const Uploader = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const fileInputRef = useRef(null);

  console.log(selectedFiles, 'file');

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = event => {
    const files = event.target.files;
    handleFiles(files);
  };

  const handleDragOver = event => {
    event.preventDefault();
  };

  const handleDrop = event => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    handleFiles(files);
  };

  const handleFiles = files => {
    const selectedFilesArray = Array.from(files);
    setSelectedFiles(selectedFilesArray);
  };
  return (
    <div className="rounded-lg border border-border-subdued bg-white p-5">
      <h4 className="text-zing-800 pb-4 text-base font-semibold leading-normal">
        Shiping
      </h4>
      <div className="media relative p-4 flex items-center">
        <div className="bg-white h-full flex gap-2 items-center">
          <div>
            <div className="bg-primary rounded-full bg-opacity-10 w-14 h-14 grid place-items-center">
              <ReactSVG src={uploaderImage} />
            </div>
          </div>
          <div>
            <h4 className="text-muted text-base font-medium">
              <span
                className="text-primary cursor-pointer"
                onClick={handleFileClick}
              >
                Click to Upload
              </span>{' '}
              or drag and drop
            </h4>
            <h4 className="text-muted text-sm font-medium">
              Accept image, video, or 3D model
            </h4>
          </div>
        </div>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          accept="image/*, video/*, .gltf, .glb"
          multiple
          onChange={handleFileInputChange}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        />
      </div>
    </div>
  );
};

export default Uploader;
