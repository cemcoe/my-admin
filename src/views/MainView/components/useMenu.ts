import { ref } from "vue";

const isCollapse = ref(false);

function changeMenuCollapseStatus() {
  isCollapse.value = !isCollapse.value;
}

export { isCollapse, changeMenuCollapseStatus };
