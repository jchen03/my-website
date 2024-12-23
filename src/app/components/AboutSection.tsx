const AboutSection = () => {
  return (
    <section id="about" className="h-3/4 bg-gray-100 p-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
      {/* Left Side - Image */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img
            src="./favicon.ico" // Replace this with your image URL
            alt="About me"
            className="w-48 h-auto rounded-lg" // Adjust the width to make the image smaller
          />
        </div>

        {/* Right Side - Description */}
        <div className="w-1/2 pl-8">
          <h2 className="text-4xl font-bold mb-4">Hi, I'm Jerry</h2>
          <p className="text-xl">
            I am a passionate developer with experience in building modern web applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
