<template>
  <div class="px-4">
    <br />
    <br />

    <b-container fluid>
      <!-- CONTENEDOR PRINCIPAL -->

      <!-- ALERTA QUE SE MOSTRARA AL ELIMINAR -->

      <div class="mb-3">
        <b-row align-h="around">
        <h2 class="">Restaurantes</h2>
      
        <!-- SECCION INIAL PARA EL TITULO, BUSCADOR Y BOTON AGREGAR -->
        
        <!-- COLUMNA PARA EL BUSCADOR -->

        <b-col cols="12" md="12" lg="3" xl="3" align-self="end" class="mt-lg-0 mt-4">
          <b-button href="#/restaurantes/agregar" variant="primary" block>
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
                <b-card-title><h3>Restaurante 1</h3> </b-card-title>
                <img
                  src="../../assets/Restaurante.png"
                  alt="img_restaurante"
                  id="img_card"
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
                <b-card-title><h3>Restaurante 1</h3> </b-card-title>
                <img
                  src="../../assets/Restaurante.png"
                  alt="img_restaurante"
                  id="img_card"
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
                <b-card-title><h3>Restaurante 1</h3> </b-card-title>
                <img
                  src="../../assets/Restaurante.png"
                  alt="img_restaurante"
                  id="img_card"
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


        </b-row>
      </b-jumbotron>
    </b-container>
  </div>
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