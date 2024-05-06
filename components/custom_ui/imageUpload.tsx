import { CldUploadWidget } from 'next-cloudinary';
import { Button } from '../ui/button';

const ImageUpload = () => {
  return (
    <CldUploadWidget uploadPreset="iepdqbtq">
      {({ open }) => {
        return (
          <Button className="bg-grey-1 text-white" onClick={() => open()}>
            Upload an Image
          </Button>
        );
      }}
    </CldUploadWidget>
  )
}

export default ImageUpload