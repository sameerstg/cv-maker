export interface Data {
    key: string;
    value: any;
}
export function getData(data: Data[], key: string) {
    var index = data.findIndex(x => x.key === key)
    // console.log(key)
    // console.log(data[index])

    return index !== -1 ? data[index] : null;
}