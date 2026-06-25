<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import MorphCursor from './components/MorphCursor.vue'
</script>

<template>
  <MorphCursor />
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <div class="test-container">
      <ul>
        <li role="presentation">
          <a target="_self" rel="noopener" class="js-cursor-target test-link" href="#">Spotlight</a>
        </li>
        <li role="presentation">
          <a target="_self" rel="noopener" class="js-cursor-target test-link" href="#">Another Link</a>
        </li>
        <li role="presentation">
          <button class="js-cursor-target test-btn">Click Me</button>
        </li>
      </ul>
    </div>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

.test-container {
  margin: 2rem 0;
}

.test-container ul {
  display: flex;
  gap: 1rem;
  list-style: none;
  padding: 0;
}

.test-link,
.test-btn {
  position: relative;
  border: 2px solid #000;
  border-radius: 100px;
  color: #000;
  display: inline-block;
  font-family: inherit;
  font-weight: 500;
  margin: 0;
  cursor: none;
  font-size: 14px;
  line-height: 16px;
  padding: 8px 30px;
  text-wrap: nowrap;
  background: #fff;
  transition: color 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.test-link:hover,
.test-btn:hover {
  color: #fff;
}
</style>
