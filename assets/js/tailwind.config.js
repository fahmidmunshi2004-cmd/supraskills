tailwind.config = {
    theme: {
        screens: {
            sm: "576px",
            md: "768px",
            lg: "992px",
            llgg: { min: "992px", max: "1300px" },
            xl: "1200px",
            llg: { min: "992px", max: "1199px" },

            "xl-1": "1140px",
        },

        maxWidth: {
            '2lg': '1325px', // custom max-width
        },

        extend: {
            fontFamily: {
                lexend: ['"Lexend Deca"', 'sans-serif'], // Google Font
            },
            backgroundImage: {
                'custom-gradient': 'var(--linear-gradient)',
            },
            colors: {
                primary: 'var(--primary)',
                black: 'var(--black)',
                white: 'var(--white)',
                error: 'var(--error)',
                warning: 'var(--warning)',
                info: 'var(--info)',
                success: 'var(--success)',
                bg: 'var(--bg)',

                // gray palette
                'gray-50': 'var(--gray-50)',
                'gray-100': 'var(--gray-100)',
                'gray-200': 'var(--gray-200)',
                'gray-300': 'var(--gray-300)',
                'gray-400': 'var(--gray-400)',
                'gray-500': 'var(--gray-500)',
                'gray-600': 'var(--gray-600)',
                'gray-700': 'var(--gray-700)',
                'gray-800': 'var(--gray-800)',
                'gray-900': 'var(--gray-900)',

                // primary-shade palette
                'primary-shade-50': 'var(--primary-shade-50)',
                'primary-shade-100': 'var(--primary-shade-100)',
                'primary-shade-200': 'var(--primary-shade-200)',
                'primary-shade-300': 'var(--primary-shade-300)',
                'primary-shade-400': 'var(--primary-shade-400)',
                'primary-shade-500': 'var(--primary-shade-500)',
                'primary-shade-600': 'var(--primary-shade-600)',
                'primary-shade-700': 'var(--primary-shade-700)',
                'primary-shade-800': 'var(--primary-shade-800)',
                'primary-shade-900': 'var(--primary-shade-900)',
                'primary-shade-950': 'var(--primary-shade-950)',

                // primary-shade-2 palette
                'primary-shade-2-50': 'var(--primary-shade-2-50)',
                'primary-shade-2-100': 'var(--primary-shade-2-100)',
                'primary-shade-2-200': 'var(--primary-shade-2-200)',
                'primary-shade-2-300': 'var(--primary-shade-2-300)',
                'primary-shade-2-400': 'var(--primary-shade-2-400)',
                'primary-shade-2-500': 'var(--primary-shade-2-500)',
                'primary-shade-2-600': 'var(--primary-shade-2-600)',
                'primary-shade-2-700': 'var(--primary-shade-2-700)',
                'primary-shade-2-800': 'var(--primary-shade-2-800)',
                'primary-shade-2-900': 'var(--primary-shade-2-900)',
                'primary-shade-2-950': 'var(--primary-shade-2-950)',
                'base-bg': 'var(--base-bg)',
            },

        }
    }
}
