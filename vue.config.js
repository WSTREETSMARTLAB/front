import { defineConfig } from '@vue/cli-service';

export default defineConfig({
    transpileDependencies: true,

    devServer: {
        port: 3000,
        historyApiFallback: true,
        open: true,
        hot: true
    }
});
