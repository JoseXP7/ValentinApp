<script setup>
import { useAuth } from '@/composables/useAuth'
import { ref } from 'vue'

const loading = ref(false)
const email = ref('')
const password = ref('')
const { signUpWithPassw } = useAuth()

const signup = async () => {
  try {
    loading.value = true
    await signUpWithPassw({ email: email.value, password: password.value })
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="sidenav">
    <div class="login-main-text">
      <h2>
        ValentinApp<br />
        Registrarse
      </h2>
      <p>Crea una cuenta para acceder a la app.</p>
    </div>
  </div>
  <div class="main">
    <div class="col-md-6 col-sm-12">
      <div class="register-form mb-4">
        <p>
          Ya tienes una cuenta?
          <RouterLink to="/auth" class="link-primary">Inicia sesión</RouterLink>
        </p>
        <form>
          <div class="form-group mb-3">
            <label for="correo">Correo</label>
            <input
              type="text"
              class="form-control"
              id="correo"
              placeholder="Correo"
              v-model="email"
              required
            />
          </div>
          <div class="form-group mb-3">
            <label for="contrasena">Contraseña</label>
            <input
              type="password"
              class="form-control"
              placeholder="Contraseña"
              id="contrasena"
              v-model="password"
              required
            />
          </div>
          <div class="form-buttons d-grid gap-2">
            <button
              type="submit"
              class="btn btn-primary"
              @click="signup"
              :disabled="loading"
            >
              Crear cuenta
            </button>

            <p>
              <i class="bi bi-info-circle-fill"></i> App en periodo de pruebas,
              tus datos seran eliminados en 24 horas. Att: José
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-head {
  height: 150px;
  background: #fff;
}

.sidenav {
  height: 100%;
  background-color: #fe2752;
  overflow-x: hidden;
  padding-top: 20px;
}

.main {
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
}

@media screen and (max-width: 450px) {
  .login-form {
    margin-top: 10%;
  }

  .register-form {
    margin-top: 10%;
  }
}

@media screen and (min-width: 768px) {
  .main {
    margin-left: 40%;
  }

  .sidenav {
    width: 40%;
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
  }

  .register-form {
    margin-top: 20%;
  }
}

.login-main-text {
  margin-top: 20%;
  padding: 60px;
  color: #fff;
}

.login-main-text h2 {
  font-weight: 300;
}
</style>
