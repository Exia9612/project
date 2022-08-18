import { Directive, DirectiveBinding, watch } from "vue";

export const move: Directive = {
  mounted(el, binding, vnode, prevVnode) {
    el.className += ' moveRight'
  }
}