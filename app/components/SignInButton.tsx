"use client";

import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function DBMSArticlePage() {
  const { isSignedIn } = useUser(); // Check if the user is signed in

  return (
    <div className="relative -top-10 flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white overflow-hidden mb-2">
      {/* Floating Background Orbs */}
      <div className="absolute w-[300px] h-[300px] bg-indigo-500 rounded-full opacity-30 blur-3xl animate-orb left-5 top-20"></div>
      <div className="absolute w-[400px] h-[400px] bg-teal-500 rounded-full opacity-30 blur-3xl animate-orb right-5 bottom-20"></div>

      {/* Main Content */}
      <div className="relative z-10 px-6 max-w-4xl text-center md:text-left">
        {!isSignedIn ? (
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-300 via-green-400 to-indigo-500 animate-text">
              Welcome to Learn DBMS
            </h1>
            <p className="mt-6 text-lg md:text-xl font-medium text-gray-300 max-w-3xl mx-auto animate-fade-in-delay">
              Unlock the secrets of managing databases with our comprehensive guide. Click below to
              start learning.
            </p>
            <div className="text-center mt-10 animate-fade-in">
              <SignInButton>
                <button className="px-10 py-4 text-lg font-bold rounded-full bg-gradient-to-r from-teal-500 to-indigo-500 text-white shadow-lg shadow-teal-500/50 hover:shadow-indigo-500/50 hover:scale-105 transition-transform duration-300">
                  Get Started
                </button>
              </SignInButton>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-teal-400 to-indigo-500">
                Hello User
              </h1>
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox:
                      "w-16 h-16 rounded-full shadow-lg shadow-indigo-500/50 hover:scale-110 transition-transform duration-300",
                  },
                }}
              />
            </div>
            <article className="text-left text-lg text-gray-300 leading-relaxed space-y-6 animate-fade-in">
              <p>
                My name is <strong className="text-indigo-300">Daniyal</strong>, and I am a student
                of GIAIC in the Monday (2:00 PM to 5:00 PM) shift. I am excited to share with you
                that my class teacher gave me an assignment to learn Database Management System
                (DBMS). Here is what I have learned so far:
              </p>
              <section>
                <h2 className="text-2xl font-semibold text-teal-400">
                  1. What is Data?
                </h2>
                <p>
                  Data is the content that can be easily accessed, shared, and managed. It exists in
                  two forms: <strong>digital</strong> and <strong>non-digital</strong>. In our
                  context, we focus on digital data.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold text-teal-400">
                  2. What is a Database?
                </h2>
                <p>
                  A database is a structured collection of data that allows us to store, organize,
                  and retrieve it efficiently. For example:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>Gallery storing photos and videos</li>
                  <li>WhatsApp storing messages</li>
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-semibold text-teal-400">
                  3. Database Management System (DBMS)
                </h2>
                <p>
                  DBMS is software that acts as a bridge between the user and the database. It helps
                  in:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>Storing data efficiently (e.g., WhatsApp messages)</li>
                  <li>Retrieving and updating data (e.g., search functionality)</li>
                  <li>Securing and organizing data</li>
                </ul>
                <p className="mt-4">
                  <strong>Examples of DBMS:</strong>
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>
                    <strong>MySQL:</strong> A relational database system widely used in e-commerce
                    platforms like Amazon and Alibaba to manage customer and order data.
                  </li>
                  <li>
                    <strong>MongoDB:</strong> A NoSQL database system ideal for storing
                    unstructured or semi-structured data. It is commonly used in social media
                    platforms like Instagram to handle user data, posts, and real-time analytics.
                  </li>
                  <li>
                    <strong>SQLite:</strong> A lightweight, serverless database system often used in
                    mobile apps like WhatsApp to store messages and multimedia files locally on the
                    device.
                  </li>
                </ul>
              </section>
              <p>
                This is how DBMS plays a critical role in storing, managing, and handling large
                amounts of data in our daily lives.
              </p>
            </article>
          </div>
        )}
      </div>

      {/* Subtle Footer */}
        <footer className="fixed text-lg bottom-0 z-10 animate-fade-in-delay bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white w-full h-11 text-center ">
            <div className="text-center mt-1">
            Crafted with ❤️ by <Link href={"https://www.linkedin.com/in/mohammed-daniyal-raza-aa26b22ba/"} target="_blank"   title="Profile" className="text-center">Daniyal</Link>
            </div>
        </footer>
    </div>
  );
}
