<script setup>
import { onMounted, ref } from 'vue'
import { useSupabase } from '../clients/supabase'
const { supabase } = useSupabase()
import CountUp from 'vue-countup-v3'

let numCards = ref(0)
let numUsers = ref(0)
let numCarreras = ref(23)

async function getCounters() {
  const { count } = await supabase
    .from('cartas')
    .select('*', { count: 'exact' })
  numCards.value = count
}

async function getUsers() {
  const { count } = await supabase
    .from('profiles')
    .select('*', { count: 'exact' })
  numUsers.value = count
}

onMounted(() => {
  getCounters()
  getUsers()
})
</script>

<template>
  <section id="stats" class="stats section mt-5 mb-5 pt-5">
    <div class="container" data-aos="fade-up" data-aos-delay="100">
      <div class="row gy-4 align-items-center">
        <div class="col-lg-5">
          <img
            src="../assets/img/undraw_popular_re_mlfe.svg"
            alt="Carta"
            class="img-fluid"
          />
        </div>

        <div class="col-lg-7">
          <div class="row gy-4">
            <div class="col-lg-6">
              <div class="stats-item d-flex">
                <i class="bi bi-envelope-heart flex-shrink-0"></i>
                <div>
                  <count-up :end-val="numCards" :duration="3" class="counter"
                    >0</count-up
                  >
                  <p>
                    <strong>Cartas </strong>
                    <span>enviadas</span>
                  </p>
                </div>
              </div>
            </div>
            <!-- End Stats Item -->

            <div class="col-lg-6">
              <div class="stats-item d-flex">
                <i class="bi bi-people flex-shrink-0"></i>
                <div>
                  <count-up :end-val="numUsers" :duration="3" class="counter"
                    >0</count-up
                  >
                  <p>
                    <strong>Usuarios </strong>
                    <span>registrados</span>
                  </p>
                </div>
              </div>
            </div>
            <!-- End Stats Item -->

            <div class="col-lg-6">
              <div class="stats-item d-flex">
                <i class="bi bi-mortarboard flex-shrink-0"></i>
                <div>
                  <count-up :end-val="numCarreras" :duration="3" class="counter"
                    >0</count-up
                  >
                  <p>
                    <strong>Carreras </strong>
                    <span>añadidas</span>
                  </p>
                </div>
              </div>
            </div>
            <!-- End Stats Item -->

            <div class="col-lg-6">
              <div class="stats-item d-flex">
                <i class="bi bi-shield-check flex-shrink-0"></i>
                <div>
                  <count-up
                    :start-val="100"
                    :end-val="0"
                    :duration="3"
                    class="counter"
                    >0</count-up
                  >
                  <p>
                    <strong>Brechas </strong>
                    <span>de seguridad</span>
                  </p>
                </div>
              </div>
            </div>
            <!-- End Stats Item -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /Stats Section -->
</template>

<style scoped>
.section-title {
  text-align: center;
  padding-bottom: 60px;
  position: relative;
}

.section-title h2 {
  font-size: 32px;
  font-weight: 700;
  position: relative;
}

.section-title h2:before,
.section-title h2:after {
  content: '';
  width: 50px;
  height: 2px;
  background: var(--bs-primary);
  display: inline-block;
}

.section-title h2:before {
  margin: 0 15px 10px 0;
}

.section-title h2:after {
  margin: 0 0 10px 15px;
}

.section-title p {
  margin-bottom: 0;
}

/*---------*/

.stats .stats-item {
  padding: 10px;
}

.stats .stats-item i {
  font-size: 44px;
  color: var(--bs-primary);
  line-height: 0;
  margin-right: 15px;
}

.stats .stats-item .counter {
  color: #000;
  font-size: 40px;
  display: block;
  font-weight: 700;
  line-height: 40px;
}

.stats .stats-item p {
  color: color-mix(in srgb, #000, transparent 40%);
  padding: 15px 0 0 0;
  margin: 0;
  font-family: var(--heading-font);
  font-size: 14px;
}
</style>
