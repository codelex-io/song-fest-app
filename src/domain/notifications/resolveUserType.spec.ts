import { resolveUserType } from './resolveUserType';

const data = (group: any) => {
    const data: any = {};
    data['group'] = group;
    return data;
};

describe('Resolve User Type', () => {
    it('should be true when no group provided', () => {
        expect(resolveUserType({ data: {} })).toBeTruthy();
    });

    it('should be false if group was not a valid number', () => {
        ['a', 0, 4].forEach(it => {
            expect(resolveUserType({ data: data(it) })).toBeFalsy();
        });
    });

    it('should resolve to proper type', () => {
        expect(resolveUserType({ data: data(1) })).toEqual('parent');
        expect(resolveUserType({ data: data(2) })).toEqual('participant');
        expect(resolveUserType({ data: data(3) })).toEqual('visitor');
    });
});
