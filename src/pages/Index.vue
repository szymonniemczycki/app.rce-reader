<template>
  <main>
    <section class="py-4 text-center container">
      <div class="row py-lg-4">
        <div class="col-lg-10 col-md-8 mx-auto">
          <h1 class="fw-light">RCE reader</h1>
          <p class="lead text-muted">
            First application on the word, which allows comparing and managing energy
            consumption relative to weather condition.
          </p>
        </div>
      </div>
    </section>

    <div class="album py-3 bg-light">
      <div class="container">
        <div class="row justify-content-center">
          <router-link class="col-md-4 text-decoration-none" :to="{ name: 'weather' }">
            <div class="card mb-4 box-shadow">
              <img
                class="card-img-top"
                data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                alt="price of energy comparing with weather condition"
                style="height: 225px; width: 100%; display: block"
                src="@/static/img/1.jpg"
                data-holder-rendered="true"
              />

              <div class="card-body">
                <p class="card-text text-center">
                  Table and chart for analyze data of<br />
                  <b>weather condition</b> comparing with <b>price for energy</b>
                </p>
                <div class="d-flex justify-content-center align-items-center">
                  <div class="btn-group">
                    <button class="btn btn-secondary">Go and check</button>
                  </div>
                </div>
              </div>
            </div>
          </router-link>

          <router-link class="col-md-4 text-decoration-none" :to="{ name: 'solar' }">
            <div class="card mb-4 box-shadow">
              <img
                class="card-img-top"
                data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail"
                alt="price of energy comparing with solar energy"
                src="@/static/img/2.jpg"
                style="height: 225px; width: 100%; display: block"
                data-holder-rendered="true"
              />
              <div class="card-body">
                <p class="card-text text-center text-decoration-none">
                  Table and chart for analyze value of <br /><b>solar energy</b>
                  comparing with
                  <b>price for energy</b>
                </p>
                <div class="d-flex justify-content-center align-items-center">
                  <div class="btn-group">
                    <button class="btn btn-secondary">Go and check</button>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>

<style>
main {
  min-height: 82vh;
  margin-top: 60px;
}
</style>
