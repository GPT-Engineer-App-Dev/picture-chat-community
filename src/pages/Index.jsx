import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share } from "lucide-react";

const Index = () => {
  const [likes, setLikes] = useState(10);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Home</h1>
      <div className="space-y-4">
        <Card>
          <CardHeader className="flex items-center space-x-4">
            <Avatar>
              <img src="/placeholder.svg" alt="User Avatar" className="mx-auto object-cover w-10 h-10" />
            </Avatar>
            <div>
              <p className="font-semibold">Username</p>
            </div>
          </CardHeader>
          <CardContent>
            <img src="/placeholder.svg" alt="Post Image" className="mx-auto object-cover w-full h-[400px]" />
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" onClick={handleLike}>
                  <Heart className={`h-5 w-5 ${liked ? "text-red-500" : ""}`} />
                </Button>
                <Button variant="ghost" size="icon">
                  <MessageCircle className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Share className="h-5 w-5" />
                </Button>
              </div>
              <div>
                <p className="text-sm">{likes} likes • 5 comments</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;