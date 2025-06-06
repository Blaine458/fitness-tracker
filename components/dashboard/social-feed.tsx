"use client"

import { motion } from "framer-motion"
import { Heart, MessageCircle, Share2, MoreHorizontal, Award, ThumbsUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"

const socialPosts = [
  {
    id: 1,
    user: {
      name: "Sarah Johnson",
      avatar: "https://picsum.photos/seed/sarah/40/40",
      initials: "SJ",
    },
    content:
      "Just completed my first 10K run! So proud of my progress over the last 3 months. From barely running 1K to a full 10K today! 🏃‍♀️💪 #FitnessJourney #Running",
    image: "https://picsum.photos/seed/run/500/300",
    likes: 24,
    comments: 8,
    shares: 3,
    time: "2 hours ago",
    achievement: "10K Run",
  },
  {
    id: 2,
    user: {
      name: "Mike Chen",
      avatar: "https://picsum.photos/seed/mike/40/40",
      initials: "MC",
    },
    content:
      "New personal record on bench press today: 225 lbs for 5 reps! Hard work is paying off. Thanks to everyone at the gym for the support and motivation!",
    image: "https://picsum.photos/seed/gym/500/300",
    likes: 42,
    comments: 12,
    shares: 5,
    time: "5 hours ago",
    achievement: "Strength PR",
  },
]

export function SocialFeed() {
  const [commentText, setCommentText] = useState("")
  const [likedPosts, setLikedPosts] = useState<number[]>([])

  const handleLike = (postId: number) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter((id) => id !== postId))
    } else {
      setLikedPosts([...likedPosts, postId])
    }
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
      <Card className="bg-card/50 backdrop-blur-lg border-border/50">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Community Feed</CardTitle>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {socialPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="space-y-4"
            >
              <div className="flex justify-between items-start">
                <div className="flex space-x-3">
                  <Avatar>
                    <AvatarImage src={post.user.avatar || "/placeholder.svg"} alt={post.user.name} />
                    <AvatarFallback>{post.user.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium">{post.user.name}</h4>
                      {post.achievement && (
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-700 border border-yellow-200 flex items-center space-x-1">
                          <Award className="h-3 w-3" />
                          <span>{post.achievement}</span>
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{post.time}</p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Save Post</DropdownMenuItem>
                    <DropdownMenuItem>Hide Post</DropdownMenuItem>
                    <DropdownMenuItem>Report</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <p className="text-sm">{post.content}</p>

              {post.image && (
                <div className="rounded-lg overflow-hidden">
                  <img src={post.image || "/placeholder.svg"} alt="Post content" className="w-full h-auto" />
                </div>
              )}

              <div className="flex items-center justify-between pt-2">
                <div className="flex space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center space-x-1"
                    onClick={() => handleLike(post.id)}
                  >
                    <Heart className={`h-4 w-4 ${likedPosts.includes(post.id) ? "fill-red-500 text-red-500" : ""}`} />
                    <span>{likedPosts.includes(post.id) ? post.likes + 1 : post.likes}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>{post.comments}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                    <Share2 className="h-4 w-4" />
                    <span>{post.shares}</span>
                  </Button>
                </div>
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="h-4 w-4 mr-1" /> Encourage
                </Button>
              </div>

              {index === 0 && (
                <div className="pt-2">
                  <Textarea
                    placeholder="Write a comment..."
                    className="resize-none"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                  />
                  <div className="flex justify-end mt-2">
                    <Button size="sm" disabled={!commentText.trim()}>
                      Comment
                    </Button>
                  </div>
                </div>
              )}

              {index < socialPosts.length - 1 && <Separator />}
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  )
}
