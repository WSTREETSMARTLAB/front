import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: { mdi }
    },
    theme: {
        defaultTheme: 'light',
        themes: {
            light: {
                colors: {
                    primary: '#1B5E20',
                    secondary: '#004D40',
                    accent: '#FFB300',
                    gradient: '#37474F',
                    beige: '#F5E1A4',
                    surface: '#ffffff',
                    background: '#f4f4f4'
                }
            }
        }
    }
})
