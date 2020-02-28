import { IconType } from '../index';

import paths from './svgPaths.json';

export const findIcon = (type: IconType) => {
    return paths[type];
};
