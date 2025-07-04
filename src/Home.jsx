function Home() {
  return (
    <section id="home" className="position-relative text-center">
      <img
      src='https://thumbs.dreamstime.com/b/abstract-wave-background-illustration-hero-section-banner-illustration-illustrator-200426563.jpg'
        className="img-fluid w-100"
        style={{ height: "90vh", objectFit: "cover" }}
        alt="Hero background"
      />
      <div
        className="position-absolute top-50 start-50 translate-middle text-white"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "1rem", borderRadius: "0.5rem" }}
      >
        <h1>This is Me</h1>
        <p>Welcome to my portfolio site</p>
      </div>
    </section>
  );
}

export default Home;
