<template>
    <a class="text-reset text-white rounded-circle position-fixed" href="https://api.whatsapp.com/send?phone=5541991035793&text=Ol%C3%A1,%20quero%20saber%20mais!"><i class="bi bi-whatsapp text-white fs-3"></i></a>
</template>

<style scoped>
a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background-color: green;
    color: white;
    z-index: 1000;
    bottom: 100px;
    right: 20px;
}

a:hover {
    opacity: 90%;
}

@media(max-width: 950px) {
    a {
        bottom: 20px
    }
}
</style>