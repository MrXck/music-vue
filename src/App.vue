<template>
    <n-message-provider>
        <div class="app">
            <n-config-provider :theme="playStore.isDark ? darkTheme : undefined">
                <router-view/>
            </n-config-provider>
        </div>
    </n-message-provider>
</template>

<style>

</style>
<script>
import {NConfigProvider, darkTheme, NMessageProvider} from 'naive-ui';

import Menu from './components/Menu'
import Header from './components/Header'
import {usePlayStore} from './store'
export default {
    components: {Header, Menu, NConfigProvider, NMessageProvider},
    setup(){

        let playStore = usePlayStore()

        return {
            darkTheme,
            playStore,
        }
    }
}
</script>
<style scoped>
</style>
