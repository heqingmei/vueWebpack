import Vue from "vue"
import App from "./app.vue"

import "./assets/styles/test.css"
import "./assets/imgs/1.jpg"

const root =document.createElement("div");
document.body.appendChild(root);

new Vue({
	render: (h) => h(App)
}).$mount(root); 



