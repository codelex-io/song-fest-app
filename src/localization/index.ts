import { fetchLanguage } from './storage';

let language = 'lv';

export const initLanguage = async () => {
    language = await fetchLanguage();
};

export { language };
