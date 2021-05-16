<template>
<div class="left-wrapper">
    <div class="left">
        <h1>An information hub with an endless amount of <span>facts...</span></h1>
        <p>The largest intelligence data collection ever, with information on government, people, environment, military, and more, in one web directory conveniently designed for your viewing.</p>
    </div>
    <div class="left-buttons">
        <button class="launch-now-btn">Launch App</button>
        <router-link to="/info"><button class="info-btn">Info</button></router-link>
    </div>
</div>
    <div class="right">
        <img src="../assets/attach.jpg">
    </div>
</template>

<script>
export default {
    name: 'Landing',
    methods: {
        // infoClick() {
        //     this.$router.push('info');
        //     console.log("routed to info");
        // }
    }
}
</script>

<style scoped>

button {
    margin-top: 50px;
    margin-right: 50px;
    box-shadow: none;
    border: none;
    border-radius: 10px;
    font-size: 24px;
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 15px;
    padding-bottom: 15px;
    width: 180px;
    transition: 0.3s;
    cursor: pointer;
}

.launch-now-btn {
    background-color: #3f479c;
    color: white;
}

.info-btn {
    background-color: #DADADA;
    color: #333;
}


button:hover {
    transform: scale(1.05);
    border: inherit;
}

.left-wrapper {
    margin-top: 12.5%;
    float: left;
    width: 40%;
    display: flex;
    flex-direction: column;
}

.left {
    font-size: 28px;
    width: 100%;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.right {
    width: 50%;
    float: right;
}

img {
    width: 100%;
    height: 100%;
}

p {
    color: #333;
    margin-top: 20px;
    font-size: 26px;
}

span {
    color: #3f479c;
}

@media only screen and (max-width: 800px) {
    .right {
        display: none;
    }
    .left {
        width: 100%;
    }
}

</style>