# 🎉 Evently – Event Listing & RSVP Platform

Evently is a full-stack event management application built with **Next.js**, **MongoDB**, and **GraphQL**. It allows users to browse, create, and RSVP to events. This project demonstrates key concepts from Chapters 12–14 including middleware setup, building a GraphQL API, and implementing both static and server-side rendering in Next.js.

## 🚀 Features

- View and list events by location
- RSVP to events
- GraphQL API with Apollo Server
- MongoDB integration with Mongoose
- Static and server-side rendered pages using Next.js

---


### ✅ Middleware with Mongoose
- Connects to MongoDB using `dbConnect.js`
- Defines Mongoose models like `Event`, `Location`, and `RSVP`

### ✅ GraphQL API
- Implements a GraphQL server via Apollo inside `pages/api/graphql.js`
- Defines typeDefs and resolvers for querying and mutating data
![graphql_dash](https://github.com/user-attachments/assets/4e255379-580c-459b-ba8e-8833785ed2b6)
![Uploading sandbox_playroom.png…]()


### ✅ Frontend Rendering
- Uses `getStaticProps` and `getServerSideProps` for fetching event/location data
- Dynamic routes and responsive UI for browsing events
- User interaction for RSVP and wish listing
![start page](https://github.com/user-attachments/assets/936dce52-3e3d-4c16-a778-660f0a8653d4)
![view events_ _add_to_wishlist](https://github.com/user-attachments/assets/96f4bb73-d10a-47bc-9145-acce972198b5)

---

## 🛠️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/evently.git
cd evently
