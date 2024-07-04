import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const Profile = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center space-x-4 mb-4">
        <Avatar>
          <img src="/placeholder.svg" alt="User Avatar" className="mx-auto object-cover w-20 h-20" />
        </Avatar>
        <div>
          <h1 className="text-3xl font-bold">Username</h1>
          <p className="text-sm">This is the user bio.</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardContent>
            <img src="/placeholder.svg" alt="User Post" className="mx-auto object-cover w-full h-[200px]" />
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <img src="/placeholder.svg" alt="User Post" className="mx-auto object-cover w-full h-[200px]" />
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <img src="/placeholder.svg" alt="User Post" className="mx-auto object-cover w-full h-[200px]" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Profile;