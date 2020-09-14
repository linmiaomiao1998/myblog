const localStorageKeyName = 'tagList'
type  Tag={
    id:string;
    name:string;
}
type TagListmodel = {
    data: Tag[]
    fetch: () => Tag[]
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
        const names=this.data.map(item=>item.name);//data里面每一项的name收集起来产生一个新的names
        if (names.indexOf(name) >= 0) {
            return 'duplicated';
        }
        this.data.push({id:name,name:name});
        this.save()
        return 'success';
    }


}
export { tagListmodel }