<script setup>
import Preloader from './Preloader.vue'
import { ref, onMounted } from 'vue'
import { useSupabase } from '../clients/supabase'
const { supabase } = useSupabase()
const cartas = ref([])
const searchName = ref('')
let loading = true

async function getCartas() {
  const { data } = await supabase
    .from('cartas')
    .select()
    .order('id', { ascending: false })
  cartas.value = data
}

async function searchCarta() {
  if (typeof searchName.value === 'string' && searchName.value.length === 0) {
    getCartas()
  } else {
    const wordOne = searchName.value.trim().split(' ').at(0)
    const wordTwo = searchName.value.trim().split(' ').at(1)
    const { data } = await supabase
      .from('cartas')
      .select()
      .or(`nombre.ilike.%${wordOne}%, apellido.ilike.%${wordTwo}%`)

    cartas.value = data
  }
}

function cleanSearch() {
  searchName.value = ''
  getCartas()
}

onMounted(() => {
  getCartas()
  loading = false
})
</script>

<template>
  <div v-if="loading">
    <Preloader />
  </div>

  <div class="row mb-3">
    <div class="col-lg-4 col-md-6 col-sm-12">
      <div class="d-flex border-bottom border-primary pb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Ingresa un nombre"
          v-model="searchName"
        />

        <button class="btn btn-primary ms-2" @click="searchCarta">
          <i class="bi bi-search"></i>
        </button>

        <button class="btn btn-secondary ms-2" @click="cleanSearch">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    </div>
  </div>

  <div
    class="col-lg-5 col-md-6"
    v-for="carta in cartas"
    :key="carta.id"
    data-aos="fade-up"
    data-aos-delay="100"
  >
    <div class="card border-primary mb-5 shadow">
      <div class="card-body">
        <h5 class="card-title">{{ carta.nombre }} {{ carta.apellido }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ carta.decanato }}</h6>
        <p class="card-destiny">
          Para {{ carta.destinatario }} ({{ carta.destino }})
        </p>
        <p class="card-text">
          {{ carta.texto }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card .card-destiny {
  margin: 0;
  font-weight: 600;
}

.card-title {
  font-weight: 600;
}
</style>
