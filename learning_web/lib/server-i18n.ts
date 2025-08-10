// lib/server-i18n.ts

import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { cookies } from 'next/headers';
// SỬA LỖI: Xóa dòng import 'initReactI18next' vì nó chỉ dành cho client
// import { initReactI18next } from 'react-i18next';

const initI18next = async (lng: string, ns = 'translation') => {
    const i18nInstance = createInstance();
    await i18nInstance
        // SỬA LỖI: Xóa dòng .use(initReactI18next)
        .use(resourcesToBackend((language: string, namespace: string) => 
            import(`../public/locales/${language}/${namespace}.json`)
        ))
        .init({
            lng,
            ns,
            fallbackLng: 'en',
            supportedLngs: ["en", "vi", "ko", "ja"],
        });
    return i18nInstance;
};

// Hàm này giữ nguyên, không cần thay đổi
export async function getTranslations(lng?: string, ns = 'translation') {
    const cookieStore = await cookies();
    const language = lng ?? cookieStore.get('i18next')?.value ?? 'en';
    
    const i18nextInstance = await initI18next(language, ns);
    return {
        t: i18nextInstance.getFixedT(language, ns),
        i18n: i18nextInstance,
    };
}