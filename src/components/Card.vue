<template>
    <div class="card">
        <div class="top-half">
            <img :src="require(`../assets/${icon}`)">
            <h1>{{title}}</h1>
        </div>
        <div class="bottom-half">
            <p>{{msg}}<a v-bind:href="href">{{link}}</a></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        msg: String,
        title: String,
        icon: String,
        href: String,
        link: String
    }
    
}
</script>

<style scoped>

img {
    width: 96px;
}

a {
    color: #3f479c;
    text-decoration: underline;
    transition: 0.3s;
}

a:hover {
    opacity: 0.75;
}

p {
    margin: 25px;
    font-size: 28px;
    color: #333;
}
h1 {
    margin: 20px;
    color: white;
}

.card {
    background-color: #f0f0f0;
    width: 374px;
    max-height: 748px;
    margin: 50px;
}
.top-half {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 374px;
    background-color: #3f479c;
    border-radius: 10px;
    height: 273px;
}

.bottom-half {
    display: flex;
    background-color: #f0f0f0;
    width: 374px;
    height: 273px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
}

</style>