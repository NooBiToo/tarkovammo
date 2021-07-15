<template>
  <div class="donate">
    <a href="https://boosty.to/erl" target="_blank" class="donate__link"
      >Поддержать проект на <span class="donate__link-strong">Boosty </span></a
    >
  </div>
</template>

<script>
export default {
  name: "Boosty",
  computed: {},
};
</script>

<style>
.donate {
  position: sticky;
  top: 5px;
  left: 5px;
  width: 150px;
  text-align-last: left;
}
.donate__link {
  text-decoration: none;
  color: #9a8866;
}
.donate__link:hover {
  color: #aeaeb0;
}
.donate__link-strong {
  font-weight: 600;
  color: #d45124;
  font-style: italic;
}
.donate__link:hover > .donate__link-strong {
  color: #fff;
}
</style>
