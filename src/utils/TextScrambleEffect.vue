<template>
  <div :ref="element" class="text-scramble">
    <slot> </slot>
  </div>
</template>

<script>
export default {
  name: "TextScrambleEffect",

  data() {
    return {
      chars: "!<>-_\\/[]{}—=+*^?#_йцукенгшщзхфівапролджячсмитьбю",
      element: "scramble-text-element"
    };
  },

  methods: {
    setText(newText) {
      const oldText = this.$refs[this.element].innerText;
      const length = Math.max(oldText.length, newText.length);
      this.queue = [];
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || "";
        const to = newText[i] || "";
        const start = Math.floor(Math.random() * 15);
        const end = start + Math.floor(Math.random() * 15);
        this.queue.push({ from, to, start, end });
      }
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
    },
    async update() {
      let output = "";
      let complete = 0;
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          await new Promise(resolve => setTimeout(resolve, 30));
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
          }
          output += `<span class="dud">${char}</span>`;
        } else {
          output += from;
        }
      }
      this.$refs[this.element].innerHTML = output;
      if (complete !== this.queue.length) {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    },
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
  },

  mounted() {
    const next = () => {
      this.setText(this.$refs[this.element].innerText);
    };

    next();
  }
};
</script>

<style lang="scss">
.text-scramble {
  display: inline;
}
</style>
