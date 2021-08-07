<template>
 <v-app>
        <v-app-bar
      app
      color="#0BB375"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/dish.png"
          transition="scale-transition"
          width="40"
        />
      </div> 
      
      <v-btn icon style="margin-right:60px; margin-left:70px; " href="#/platillos">
        <v-icon style="margin-right:5px;">mdi-food</v-icon> Platillos
      </v-btn>
      <v-btn icon  style="margin-right:50px; margin-left:20px;" href="#/restaurantes/cuenta" >
        <v-icon style="margin-right:5px;">mdi-wrench</v-icon> Mi cuenta
      </v-btn>
     
      <v-spacer></v-spacer>
       
      <v-btn
        href="#/login"
        text
      >
        <span class="mr-2">Cerrar sesión</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <div>
        <b-container fluid class="mt--12">
      <!-- CONTENEDOR PRINCIPAL -->
      
      <!-- ALERTA QUE SE MOSTRARA AL INTENTAR AGREGAR UN NUEVO REGISTRO  -->

      
      <!-- SECCION PARA EL TITULO -->

      <b-jumbotron
        bg-variant="white"
        class="shadow-lg p-5 mb-5 bg-white rounded"
      >
        <!-- SECCION PARA EL CUERPO DEL FORMULARIO -->
        <h2 class="fuente_texto text-center">Agregar restaurante</h2>
        <hr class="separador mt-3" />

        <b-row align-h="around">
          <!-- SECCION PARA ID Y NOMBRE ASOCIACION -->

          <b-col cols="12" lg="4" xl="4">
            <b-form>
              <b-form-group
                class="text-start fuente_texto"
                label="Nombre del restaurante:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  
                  class="caja_texto"
                  placeholder="Ingrese el nombre del restaurante"
                ></b-form-input>
              </b-form-group>
            </b-form>
          </b-col>
          <!-- COLUMNA PARA EL ID DE LA ASOCIACION -->

          <b-col cols="12" lg="4" xl="2">
            <b-form>
              <b-form-group
                class="text-start fuente_texto"
                label="Horario inicio:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  
                  class="caja_texto"
                  placeholder="Hora inicial"
                ></b-form-input>
                
              </b-form-group>
            </b-form>
          </b-col>

          <b-col cols="12" lg="4" xl="2">
            <b-form>
              <b-form-group
                class="text-start fuente_texto"
                label="Horario fin:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  
                  class="caja_texto"
                  placeholder="Hora final"
                ></b-form-input>
                
              </b-form-group>
            </b-form>
          </b-col>

          <b-col cols="12" lg="4" xl="4">
            <b-form>
              <b-form-group
                class="text-start fuente_texto"
                label="Telefono:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  
                  class="caja_texto"
                  placeholder="Ingrese el telefono del restaurante"
                ></b-form-input>
                
              </b-form-group>
            </b-form>

                        <b-form>
              <b-form-group
                class="text-start fuente_texto"
                label="Latitud y longitud"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  
                  class="caja_texto"
                  placeholder="Ingrese latitud"
                ></b-form-input>
                                <b-form-input
                  id="input-2"
                  
                  class="caja_texto"
                  placeholder="Ingrese longitud"
                ></b-form-input>
                
              </b-form-group>
            </b-form>
          </b-col>
          <!-- COLUMNA PARA EL NOMBRE DE LA ASOCIACION -->
        </b-row>

        <br>

<hr class="separador mt-2" />
<h5 class="fuente_texto text-center">Direccion</h5>
<br>

        <b-row class="" align-h="around">
          <!-- SECCION PARA DIRECCION Y DESCRIPCION DE LA ASOCIACION -->
          <b-col cols="12" lg="4" xl="4">
            <b-form>
              <b-form-group
                class="text-start fuente_texto"
                label="Calle:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  
                  class="caja_texto"
                  placeholder="Ingrese la calle del restaurante"
                ></b-form-input>
              </b-form-group>
            </b-form>
          </b-col>
          <!-- COLUMNA PARA LA DIRECCION DE LA ASOCIACION -->
          <b-col cols="12" lg="4" xl="4">
            <b-form>
              <b-form-group
                class="text-start fuente_texto"
                label="Colonia:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  
                  class="caja_texto"
                  placeholder="Ingrese la colonia"
                ></b-form-input>
              </b-form-group>
            </b-form>
          </b-col>

          <b-col cols="12" lg="4" xl="4">
            <b-form>
              <b-form-group
                class="text-start fuente_texto"
                label="Codigo postal:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  
                  class="caja_texto"
                  placeholder="Ingrese el codigo postal"
                ></b-form-input>
              </b-form-group>
            </b-form>
          </b-col>
          <!-- COLUMNA PARA LA DESCRIPCION DE LA ASOCIACION -->
        </b-row>

         <b-row class="" align-h="around">
          <!-- SECCION PARA DIRECCION Y DESCRIPCION DE LA ASOCIACION -->
          <b-col cols="12" lg="4" xl="4">
            <b-form>
              <b-form-group
                class="text-start fuente_texto"
                label="Usuario:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  
                  class="caja_texto"
                  placeholder="Ingrese un nombre de usuario"
                ></b-form-input>
              </b-form-group>
            </b-form>
          </b-col>
          <!-- COLUMNA PARA LA DIRECCION DE LA ASOCIACION -->
          <b-col cols="12" lg="4" xl="4">
            <b-form>
              <b-form-group
                class="text-start fuente_texto"
                label="Contraseña:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  type="password"
                  class="caja_texto"
                  placeholder="Ingrese una contraseña"
                ></b-form-input>
              </b-form-group>
            </b-form>
          </b-col>

          <b-col cols="12" lg="4" xl="4">
            <b-form>
              <b-form-group
                class="text-start fuente_texto"
                label="Confirmar contraseña:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  type="password"
                  class="caja_texto"
                  placeholder="Confirme contraseña"
                ></b-form-input>
              </b-form-group>
            </b-form>
          </b-col>
          <!-- COLUMNA PARA LA DESCRIPCION DE LA ASOCIACION -->
        </b-row>


        <br />

        <b-row>
          <!-- SECCION PARA LOS BOTONES DE GUARDAR Y CANCELAR -->
          <b-col align="right">
            <b-button
              class="m-1"
              @click="onSubmit()"
              type="submit"
              variant="success"
              >Actualizar</b-button
            >
          </b-col>
        </b-row>
      </b-jumbotron>
    </b-container>
    </div>
 </v-app>
</template>

<script>
import axios from "axios";
export default {
    name: "AgregarRestaurante",
  data() {
    return {
      
      items: {
        idAsociacion: "",
        nombreAsociacion: "",
        descripcion: "",
        ciudad: "",
        codigoPostal: "",
        direccion: "",
        correoElectronico: "",
        telefono: "",
      },
      show: true,
    };
  },
  methods: {
    
  },
}
</script>

<style scoped>
.caja_texto {
  color: rgb(0, 110, 255);
  background-color: #f5f7ff;
}
.separador {
  border: 1px solid #767676;
  border-radius: 50px;
  background-color: gray;
}
.fuente_texto {
  color: #767676;
  font-weight: bold;
}
</style>