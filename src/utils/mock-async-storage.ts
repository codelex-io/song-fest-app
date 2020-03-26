class MockAsyncStorage {
    private items: { [key: string]: string } = {};

    getItem = async (key: string) => {
        const item = this.items[key];
        if (item) {
            return item;
        }
        return null;
    };

    setItem = async (key: string, value: string) => {
        this.items[key] = value;
    };

    reset = () => (this.items = {});
}

const mockAsyncStorage = new MockAsyncStorage();
export default mockAsyncStorage;
