<template>
    <header>
        <div class="header-left">
            <h1>{{title}}</h1>
        </div>
        <div class="header-right">
            <button>Home</button>
            <button>About</button>
            <button class="launch-btn">Launch</button>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: String,
    }
}
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: right;
    margin-top: 20px;
}

button {
    margin-left: 50px;
    box-shadow: none;
    border: none;
    border-radius: 10px;
    font-size: 24px;
    background-color: inherit;
    color: #333;
    transition: 0.3s;
}

button {
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
}

button:hover {
    background-color: #3f479c;
    color: white;
    transform: scale(1.05);
    cursor: pointer;
    border-color: #3f479c;
}

.launch-btn {
    color: #3f479c;
    background-color: inherit;
    box-shadow: inset 0 0 0 0 #3f479c;
    border: 4px solid;
    border-radius: 10px;
    font-size: 24px;
    transition: 0.3s;
}
h1 {
    font-size: 36px;
    color: #3F479C;
    float: left;
    user-select: none;
}
</style>
