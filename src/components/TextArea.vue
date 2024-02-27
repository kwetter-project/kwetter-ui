<template>
  <textarea
    v-model="content"
    :rows="numRows"
    @input="updateRows"
    ref="textarea"
    placeholder="What is happening ?!"
  ></textarea>
</template>

<script>
export default {
  data() {
    return {
      content: "",
      minRows: 1, // Minimum number of rows for the textarea
      maxRows: 10, // Maximum number of rows for the textarea
    };
  },
  computed: {
    numRows() {
      const textarea = this.$refs.textarea;
      if (textarea) {
        textarea.style.height = "auto"; // Reset the height to calculate the actual content height
        const scrollHeight = textarea.scrollHeight;
        const lineHeight = parseInt(getComputedStyle(textarea).lineHeight, 10);
        const rows = Math.floor(scrollHeight / lineHeight);

        return Math.min(Math.max(rows, this.minRows), this.maxRows);
      }
      return this.minRows;
    },
  },
  methods: {
    updateRows() {
      this.$refs.textarea.style.height = "auto"; // Reset the height to calculate the actual content height
      this.$nextTick(() => {
        this.$refs.textarea.style.height = `${this.$refs.textarea.scrollHeight}px`;
      });
    },
  },
};
</script>
<style scoped lang="scss">
textarea {
  background: var(--dark);
  color: var(--light);
  border: none;
  border-bottom: solid 1px var(--grey);
}
</style>
