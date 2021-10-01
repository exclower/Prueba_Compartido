const app = Vue.createApp({
    data(){
        return {
            amigos: [
                {
                    id:"oscar",  nombre:"Oscar Amaya",tel:"1234", email:"Osca@gmail.com"
                },
                {
                    id:"ana",  nombre:"Ana Amaya",tel:"5678", email:"Ana@gmail.com"
                }
            ]
        }
    }
});

/*app.component("contacto",{
    template: `
    <li>
    <h2>{{amigo.nombre}}</h2>
    <p>Telefono: {{amigo.tel}}</p>
    <p>Carreo: {{amigo.email}}</p>
    </li>
    `,
    data(){
        return {
            amigos: [
                {
                    id:"oscar",  nombre:"Oscar Amaya",tel:"1234", email:"Osca@gmail.com"
                }
            ]
        }
    }
}
);*/
app.mount("#app");