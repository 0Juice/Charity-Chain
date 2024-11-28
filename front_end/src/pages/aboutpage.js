import React from 'react';

const CharityAboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-500 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">About Our Charity</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:pr-4">
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p className="text-gray-700">
              We are dedicated to making a positive impact on the lives of
              those in need. Our mission is to provide essential services and
              support to underserved communities and individuals, promoting
              education, healthcare, and social well-being.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2">How We Work</h2>
            <p className="text-gray-700">
              Our charity organization relies on the generosity of donors and
              volunteers. We collaborate with local communities, organizations,
              and partners to identify and address critical needs. We ensure
              that every contribution directly benefits those we serve.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-500 text-white p-4 text-center">
        <div className="container mx-auto">
          &copy; 2023 CharityChain. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default CharityAboutPage;
