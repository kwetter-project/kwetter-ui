
import { defineStore } from "pinia";
import {markRaw} from "vue";

export const useModal = defineStore("modal", {
  state: () => ({
    isOpen: false,
    view:{},
    actions: [],
    fields:[]
  }),
  actions: {
    open(view,actions,fields) {
      this.isOpen = true;
      this.actions = actions;
      this.view=markRaw(view);
      this.fields=fields;
    },
    close() {
      this.isOpen = false;
      this.view={};
      this.actions = [];
      this.fields=[];
    },
  },
});

export default useModal;