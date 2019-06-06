<template>
    <div>
        <div>
        </div>
        <div>
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive" />
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive" />
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>

