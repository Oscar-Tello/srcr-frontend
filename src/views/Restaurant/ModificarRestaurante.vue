<template>
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
        <h2 class="fuente_texto text-center">Registro nuevo restaurante</h2>
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
              >Guardar</b-button
            >

            <b-button class="m-1" href="#/restaurantes" variant="danger"
              >Cancelar</b-button
            >
          </b-col>
        </b-row>
      </b-jumbotron>
    </b-container>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>