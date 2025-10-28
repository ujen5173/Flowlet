# Flowlet API Endpoints (v1.0)

> This endpoints can be changed in the future while building. As this is just a rough sketch of the endpoints.

## Authentication & Authorization

- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/logout` - User logout
- `POST /api/v1/auth/refresh` - Refresh access token
- `POST /api/v1/auth/forgot-password` - Request password reset
- `POST /api/v1/auth/reset-password` - Reset password
- `GET /api/v1/auth/verify-email` - Verify email address
- `POST /api/v1/auth/resend-verification` - Resend verification email

## System Status

- `GET /api/v1/status` - API health check

## User Management

- `GET /api/v1/users/profile/me` - Get current user profile
- `PUT /api/v1/users/profile/me` - Update current user profile
- `GET /api/v1/users/profile/[username]` - Get user profile by username
- `GET /api/v1/users/profile/info` - Get user profile information
- `GET /api/v1/users/profile/author-posts` - Get posts by author (query: authorId)
- `GET /api/v1/users/bookmarks` - Get user bookmarks
- `POST /api/v1/users/bookmarks` - Add bookmark
- `DELETE /api/v1/users/bookmarks/[postId]` - Remove bookmark
- `GET /api/v1/users/history` - Get user reading history
- `POST /api/v1/users/follow` - Follow user
- `DELETE /api/v1/users/follow/[userId]` - Unfollow user
- `GET /api/v1/users/followers` - Get user followers
- `GET /api/v1/users/following` - Get users being followed

## Author Dashboard

- `GET /api/v1/author/dashboard` - Get author dashboard data
- `GET /api/v1/author/settings` - Get author settings
- `PUT /api/v1/author/settings` - Update author settings
- `GET /api/v1/author/analytics` - Get author analytics
- `GET /api/v1/author/posts/stats` - Get posts statistics

## Posts Management

- `GET /api/v1/posts` - Get all posts (with pagination & filters)
- `POST /api/v1/posts` - Create new post
- `GET /api/v1/posts/[slug]` - Get post by slug
- `PUT /api/v1/posts/[slug]` - Update post
- `DELETE /api/v1/posts/[slug]` - Delete post
- `GET /api/v1/posts/search` - Search posts
- `GET /api/v1/posts/featured` - Get featured posts
- `GET /api/v1/posts/recent` - Get recent posts
- `POST /api/v1/posts/[slug]/like` - Like/unlike post
- `GET /api/v1/posts/[slug]/likes` - Get post likes

## Comments System

- `GET /api/v1/posts/[slug]/comments` - Get post comments (with pagination)
- `POST /api/v1/posts/[slug]/comments` - Add comment to post
- `PUT /api/v1/comments/[commentId]` - Update comment
- `DELETE /api/v1/comments/[commentId]` - Delete comment
- `POST /api/v1/comments/[commentId]/like` - Like/unlike comment
- `POST /api/v1/comments/[commentId]/reply` - Reply to comment

## Tags & Categories

- `GET /api/v1/tags` - Get all tags
- `GET /api/v1/tags/[tag]` - Get posts by tag
- `POST /api/v1/tags` - Create new tag
- `GET /api/v1/categories` - Get all categories
- `GET /api/v1/categories/[category]` - Get posts by category
- `POST /api/v1/categories` - Create new category

## Trending Content

- `GET /api/v1/trending/articles` - Get trending articles
- `GET /api/v1/trending/tags` - Get trending tags
- `GET /api/v1/trending/users` - Get trending users
- `GET /api/v1/trending/posts` - Get trending posts

## Series Management

- `GET /api/v1/series` - Get all series
- `POST /api/v1/series` - Create new series
- `GET /api/v1/series/[slug]` - Get series by slug
- `PUT /api/v1/series/[slug]` - Update series
- `DELETE /api/v1/series/[slug]` - Delete series
- `GET /api/v1/series/[slug]/posts` - Get posts in series
- `POST /api/v1/series/[slug]/posts` - Add post to series

## Search & Discovery

- `GET /api/v1/search/posts` - Search posts
- `GET /api/v1/search/users` - Search users
- `GET /api/v1/search/tags` - Search tags
- `GET /api/v1/search/suggestions` - Get search suggestions

## Analytics & Insights

- `GET /api/v1/analytics/posts/[slug]/views` - Get post view analytics
- `GET /api/v1/analytics/posts/[slug]/engagement` - Get post engagement metrics
- `GET /api/v1/analytics/user/stats` - Get user statistics
- `GET /api/v1/analytics/trending` - Get trending analytics

## File Upload

- `POST /api/v1/upload/image` - Upload image
- `POST /api/v1/upload/avatar` - Upload user avatar
- `DELETE /api/v1/upload/[fileId]` - Delete uploaded file

## Notifications

- `GET /api/v1/notifications` - Get user notifications
- `PUT /api/v1/notifications/[notificationId]` - Mark notification as read
- `PUT /api/v1/notifications/mark-all-read` - Mark all notifications as read
- `GET /api/v1/notifications/settings` - Get notification settings
- `PUT /api/v1/notifications/settings` - Update notification settings
