import { ViewsHeaderFilterOption } from '@components/filters/Filters';

export const isFiltering = (filters: ViewsHeaderFilterOption[], activeKey: string): boolean => {
    const defaultKey = filters.find(item => item.default);
    return defaultKey?.key !== activeKey;
};
