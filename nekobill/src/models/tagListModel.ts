const localStorageKeyName = 'tagList'
type TagListmodel = {
    data: string[]
    fetch: () => string[]
    create:(name:string) => 'success'|'duplicated'//联合类型//success表示成功，duplicated表示内容重复
    save: () => void
}
const tagListmodel: TagListmodel = {
    data: [],
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem('localStorageKeyName') || '[]');
        return this.data;
    },
    save() {
        window.localStorage.setItem('localStorageKeyName', JSON.stringify(this.data))
    },
    create(name:string) {
        if (this.data.indexOf(name) >= 0) {
            return 'duplicated';
        }
        this.data.push(name);
        this.save()
        return 'success';
    }


}
export { tagListmodel }