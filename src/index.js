import mloading from './components/mloading/mloading.vue'

const components = [
    mloading
]

const install = function(vue,opts={}) {
    components.map(component => {
        console.log('component name is ' + component.name)
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