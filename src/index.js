import sloading from './components/sloading/sloading.vue'
import schatbox from './components/schatbox/schatbox.vue'
import smovediv from './components/smovediv/smovediv.vue'

const components = [
    sloading,
    schatbox,
    smovediv,
]

const install = function(vue,opts={}) {
    components.map(component => {
        // console.log('component name is ' + component.name)
        vue.component(component.name, component)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue) // 通过use方式全部引入
}


const API = {
    install,
    ...components
    
}
export default API