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

  <div class="px-4">
    <br />
    <br />

    <b-container fluid>
      <!-- CONTENEDOR PRINCIPAL -->

      <!-- ALERTA QUE SE MOSTRARA AL ELIMINAR -->

      <div class="mb-3">
        <b-row align-h="around">
        <h2 class="">Platillos</h2>
      
        <!-- SECCION INIAL PARA EL TITULO, BUSCADOR Y BOTON AGREGAR -->
        
        <!-- COLUMNA PARA EL BUSCADOR -->

        <b-col cols="12" md="12" lg="3" xl="3" align-self="end" class="mt-lg-0 mt-4">
          <b-button href="#/Platillos/agregar"  style="background-color:#449E73; color:white;" block>
            Agregar 
          </b-button>
        </b-col>
      </b-row>
      </div>


      <b-jumbotron
        bg-variant="white"
        class="shadow-lg mt-3 p-5 mb-5 bg-white rounded"
      >
        <!-- CUADRO DONDE VA INFORMACION DE LAS ASOCIACIONES-->

        <b-row>
          <b-col sm="12" md="6" lg="6" xl="4">
            <b-card
              id="espacio"
              bg-variant="white"
              text-variant="black"
              class="p-1 mb-4 bg-white rounded cardText"
            >
              <!-- CARD DONDE VA EL FOR PARA MOSTRAR CADA UNA DE LAS ASOCIACIONES -->
              <b-container>
                <b-card-title><h3>Baguette</h3> </b-card-title>
                <img
                  src="data:image/jpeg;base64,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"
                  alt="img_restaurante"
                  id="img_card"
                  width ="250"
                />

                <b-row class="mt-3">
                  <b-col align-self="center" cols="12" lg="12" xl="12">
                    <b-button
                  size="sm"
                  block
                  variant="success"
                  @click="modificarAsociacion()"
                >
                  <!-- BOTON DE ACTUALIZAR -->
                  <b-icon icon="pencil-fill"></b-icon> Actualizar</b-button
                >

                <b-button
                  :id="`popover-1`"
                  size="sm"
                  block
                  variant="danger"
                  ref="popover"
                  @click="onOpen(`popover-1`)"
                >
                  <!-- BOTON DE ELIMINAR -->
                  <b-icon icon="trash-fill"></b-icon>
                  Eliminar
                </b-button>


                <b-popover
                  :target="`popover-1`"
                  placement
                  triggers=""
                >
                  <!-- POPOVER QUE MOSTRARA EL BOTON DE ELIMINAR -->
                  <div class="p-2">
                    <template>
                      <b-button
                        @click="onClose(`popover-1`)"
                        class="close"
                        aria-label="Close"
                      >
                        <!-- BOTON SUPERIOR PARA CERRAR EL POPOVER -->
                        <span class="d-inline-block">&times;</span>
                      </b-button>
                      <strong>Eliminar platillo</strong>
                    </template>
                  </div>

                  <div class="p-2">
                    <!-- SECCION PARA EL CUERPO DEL POPOVER -->
                    <b-alert variant="" show class="small text-center">
                      <strong
                        >¿Desea eliminar el platillo
                        ?</strong
                      ><br />
                    </b-alert>
                    <b-row align-h="center">
                      <!-- SECCION PARA LOS BOTONES DEL POPOVER -->
                      <b-col cols="5">
                        <b-button
                          pill
                          size="sm"
                          variant="primary"
                          @click="onClose(`popover-1`)"
                          >Cancelar</b-button
                        >
                      </b-col>
                      <b-col cols="5">
                        <b-button
                          size="sm"
                          pill
                          variant="danger"
                          @click="eliminarAsociacion()"
                          >Aceptar</b-button
                        >
                      </b-col>
                    </b-row>
                  </div>
                </b-popover>
                  </b-col>
                </b-row>
                
              </b-container>
            </b-card>
          </b-col>



          <b-col sm="12" md="6" lg="6" xl="4">
            <b-card
              id="espacio"
              bg-variant="white"
              text-variant="black"
              class="p-1 mb-4 bg-white rounded cardText"
            >
              <!-- CARD DONDE VA EL FOR PARA MOSTRAR CADA UNA DE LAS ASOCIACIONES -->
              <b-container>
                <b-card-title><h3>Ensalada</h3> </b-card-title>
                <img
                  src="data:image/jpeg;base64,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"
                  alt="img_restaurante"
                  id="img_card"
                  width="270"
                />

                <b-row class="mt-3">
                  <b-col align-self="center" cols="12" lg="12" xl="12">
                    <b-button
                  size="sm"
                  block
                  variant="success"
                  @click="modificarAsociacion()"
                >
                  <!-- BOTON DE ACTUALIZAR -->
                  <b-icon icon="pencil-fill"></b-icon> Actualizar</b-button
                >

                <b-button
                  :id="`popover-1`"
                  size="sm"
                  block
                  variant="danger"
                  ref="popover"
                  @click="onOpen(`popover-1`)"
                >
                  <!-- BOTON DE ELIMINAR -->
                  <b-icon icon="trash-fill"></b-icon>
                  Eliminar
                </b-button>


                <b-popover
                  :target="`popover-1`"
                  placement
                  triggers=""
                >
                  <!-- POPOVER QUE MOSTRARA EL BOTON DE ELIMINAR -->
                  <div class="p-2">
                    <template>
                      <b-button
                        @click="onClose(`popover-1`)"
                        class="close"
                        aria-label="Close"
                      >
                        <!-- BOTON SUPERIOR PARA CERRAR EL POPOVER -->
                        <span class="d-inline-block">&times;</span>
                      </b-button>
                      <strong>Eliminar asociación</strong>
                    </template>
                  </div>

                  <div class="p-2">
                    <!-- SECCION PARA EL CUERPO DEL POPOVER -->
                    <b-alert variant="" show class="small text-center">
                      <strong
                        >¿Desea eliminar la asociacion
                        ?</strong
                      ><br />
                    </b-alert>
                    <b-row align-h="center">
                      <!-- SECCION PARA LOS BOTONES DEL POPOVER -->
                      <b-col cols="5">
                        <b-button
                          pill
                          size="sm"
                          variant="primary"
                          @click="onClose(`popover-1`)"
                          >Cancelar</b-button
                        >
                      </b-col>
                      <b-col cols="5">
                        <b-button
                          size="sm"
                          pill
                          variant="danger"
                          @click="eliminarAsociacion()"
                          >Aceptar</b-button
                        >
                      </b-col>
                    </b-row>
                  </div>
                </b-popover>
                  </b-col>
                </b-row>
                
              </b-container>
            </b-card>
          </b-col>




          <b-col sm="12" md="6" lg="6" xl="4">
            <b-card
              id="espacio"
              bg-variant="white"
              text-variant="black"
              class="p-1 mb-4 bg-white rounded cardText"
            >
              <!-- CARD DONDE VA EL FOR PARA MOSTRAR CADA UNA DE LAS ASOCIACIONES -->
              <b-container>
                <b-card-title><h3>Hamburguesa</h3> </b-card-title>
                <img
                  src="data:image/jpeg;base64,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"
                  alt="img_restaurante"
                  id="img_card"
                  width="200"
                />

                <b-row class="mt-3">
                  <b-col align-self="center" cols="12" lg="12" xl="12">
                    <b-button
                  size="sm"
                  block
                  variant="success"
                  @click="modificarAsociacion()"
                >
                  <!-- BOTON DE ACTUALIZAR -->
                  <b-icon icon="pencil-fill"></b-icon> Actualizar</b-button
                >

                <b-button
                  :id="`popover-1`"
                  size="sm"
                  block
                  variant="danger"
                  ref="popover"
                  @click="onOpen(`popover-1`)"
                >
                  <!-- BOTON DE ELIMINAR -->
                  <b-icon icon="trash-fill"></b-icon>
                  Eliminar
                </b-button>


                <b-popover
                  :target="`popover-1`"
                  placement
                  triggers=""
                >
                  <!-- POPOVER QUE MOSTRARA EL BOTON DE ELIMINAR -->
                  <div class="p-2">
                    <template>
                      <b-button
                        @click="onClose(`popover-1`)"
                        class="close"
                        aria-label="Close"
                      >
                        <!-- BOTON SUPERIOR PARA CERRAR EL POPOVER -->
                        <span class="d-inline-block">&times;</span>
                      </b-button>
                      <strong>Eliminar platillo</strong>
                    </template>
                  </div>

                  <div class="p-2">
                    <!-- SECCION PARA EL CUERPO DEL POPOVER -->
                    <b-alert variant="" show class="small text-center">
                      <strong
                        >¿Desea eliminar el platillo
                        ?</strong
                      ><br />
                    </b-alert>
                    <b-row align-h="center">
                      <!-- SECCION PARA LOS BOTONES DEL POPOVER -->
                      <b-col cols="5">
                        <b-button
                          pill
                          size="sm"
                          variant="primary"
                          @click="onClose(`popover-1`)"
                          >Cancelar</b-button
                        >
                      </b-col>
                      <b-col cols="5">
                        <b-button
                          size="sm"
                          pill
                          variant="danger"
                          @click="eliminarAsociacion()"
                          >Aceptar</b-button
                        >
                      </b-col>
                    </b-row>
                  </div>
                </b-popover>
                  </b-col>
                </b-row>
                
              </b-container>
            </b-card>
          </b-col>


        </b-row>
      </b-jumbotron>
    </b-container>
  </div>
 </v-app>
</template>

<script>
export default {

  name: "VistaRestaurante",
  data() {
    return {
      
    };
  },
  methods: {
    onClose(id) {
      //METODO PARA CERRAR EL POPOVER DE ELIMINAR
      this.$root.$emit("bv::hide::popover", id);
    },
    onOpen(id) {
      //METODO PARA ABRIR EL POPOVER DE ELIMINAR
      this.$root.$emit("bv::hide::popover");
      this.$root.$emit("bv::show::popover", id);
    },
  },
};
</script>

<style scoped>
#espacio {
  box-shadow: 3px 5px 12px 3px gray;
  border-radius: 10px, 10px, 10px, 10px;
}
</style>