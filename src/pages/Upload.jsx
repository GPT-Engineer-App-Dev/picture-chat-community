import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const UploadPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Upload Photo</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Photo</label>
          <Input type="file" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Caption</label>
          <Textarea placeholder="Write a caption..." />
        </div>
        <Button type="submit">Upload</Button>
      </form>
    </div>
  );
};

export default UploadPage;