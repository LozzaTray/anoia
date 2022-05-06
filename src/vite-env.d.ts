/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SPOON_KEY: string
    readonly VITE_STUB_DATA: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}