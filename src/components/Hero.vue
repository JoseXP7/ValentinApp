<template>
  <section id="hero" class="hero section dark-background">
    <img
      src="../assets/img/hero-bg.jpg"
      alt="Fondo de corazones tecnológicos"
    />

    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row justify-content-start">
        <div class="col-lg-8">
          <h2>Valentin App</h2>
          <p>Envia una carta a esa persona especial, es gratis</p>
          <RouterLink to="/auth" class="btn btn-outline-light btn-get-started"
            ><i class="bi bi-caret-right-fill"></i> Empezar</RouterLink
          >
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding: 160px 0 100px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero img {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.hero:before {
  content: '';
  background: color-mix(in srgb, #fe2752, transparent 70%);
  position: absolute;
  inset: 0;
  z-index: 2;
}

.hero .container {
  position: relative;
  z-index: 3;
}

.hero h2 {
  margin: 0;
  font-size: 48px;
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
}

.hero p {
  margin: 10px 0 0 0;
  font-size: 24px;
  color: #fff;
}

.hero .btn-get-started {
  font-weight: 400;
  font-size: 15px;
  display: inline-block;
  padding: 8px 30px;
  margin: 30px 0 0 0;
  text-transform: uppercase;
}

.hero .btn-get-started:hover {
  color: #fe2752;
}

@media (max-width: 768px) {
  .hero h2 {
    font-size: 32px;
  }

  .hero p {
    font-size: 18px;
  }
}
</style>
