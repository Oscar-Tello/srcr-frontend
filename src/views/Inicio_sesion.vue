<template>
    <div class="Inicio_sesion">
        <container>
            <v-row>
                <v-col cols="6" md="6" sm="12">
                    <v-img src="@/assets/dish.png" class="img" width="890"></v-img>
                </v-col>
                    <v-col cols="6" md="6" sm="12">
                                              
                          <div class="titulo"> <h3> Inicia sesión</h3></div>
                     <v-form> 
                        <v-container>
                            <v-card color="#E3F3E7"
                               class="card">
                               <div class="usuario">
                                <center>
                                    <h3>Usuario</h3><br>
                                    <v-text-field solo class="txt"></v-text-field>
                                    </center>
                                </div>
                                <div class="contrasena">
                                   <center> 
                                        <h3>Contraseña</h3><br>
                                       <v-text-field :type="show2 ? 'text' : 'password'"  solo class="txt"></v-text-field>
                                       </center>
                                </div>
                                <div class="boton">
                                    <center> 
                                    <v-btn depressed dark color="#449E73" @click="ir()"> Ingresar                                     
                                    </v-btn>
                                    </center> 
                                </div>
                                </v-card>

                                
                            </v-container> 
                     </v-form>
                </v-col >
            </v-row>
        </container>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    methods:{

        ir(){
            window.location = '#/platillos';
            
        }
    }
})
</script>
<style scoped>


.Inicio_sesion{
position: relative;
background: #0BB375;
height: 120%;


}

.img {

    margin-left: -180px;
    margin-top: 50px;
}

.card{

    margin-right: 20%;
    margin-top: 0%;
    width: 500px;
    height: 600px;
}


.titulo {

    margin-top: 10%;
    margin-left: 20%;
}

.titulo h3{

    color: white;
    font-size: 200%
}

.usuario{
padding-top: 80px;
color:#1A8D3B;
font-size: 120%
}

.contrasena{
padding-top: 50px;
color:#1A8D3B;
font-size: 120%

}

.txt {
width: 70%;


}

.boton{
    padding-top: 100px;
}

.registro{

    margin-top: 20px;
    color: white;
}
.registro a{

    color: white;
}
</style>