<template>

    <div class="wrapper">
        <Card 
        icon="info.svg"
        title="What is it?"
        msg="Factbook is one of the 
        largest hubs for statistics and information relating
        to society. It’s also a great learning resource."
        href=""
        link=""
        />

        <Card 
        icon="location.svg"
        title="Where from?"
        msg="The information is sourced
        from a variety of places such as the CIA World
        Factbook. The source list is available "
        href="#"
        link="here"
        />

        <Card 
        icon="code.svg"
        title="Development?"
        msg="There will be a changelog on the website soon,
        but in the meantime, here is github repository: "
        href="https://github.com/crackerslekap/vue-factbook/"
        link="github.com/crackerslekap/vue-factbook"
        />
    </div>

</template>

<script>
import Card from '../components/Card';

export default {
    name: 'Info',
    components: {
        Card
    }

}
</script>

<style scoped>

.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 100px;
}

@media screen and (max-width: 1300px) {
    .wrapper {
        flex-direction: column;
    }
}

h1 {
    font-size: 48px;
}
</style>