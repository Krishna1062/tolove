import LoadingBarComponent from '@/components/LoadingBarComponent';
import React from 'react'

export default function About() {
  let progress = 100;
  return (
    <>
    <LoadingBarComponent progress={progress} />
    <main className="min-h-[75vh] flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="max-w-2xl bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-gray-600 leading-relaxed">
          Welcome to our platform! We are dedicated to providing high-quality solutions
          in web development, data science, and AI. Our goal is to empower developers
          and businesses with cutting-edge technology and seamless user experiences.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          Our team consists of passionate engineers and designers who believe in
          innovation, efficiency, and user-centric design. Join us on our journey
          to build something amazing!
        </p>
      </div>
    </main>
    </>
  );
}
