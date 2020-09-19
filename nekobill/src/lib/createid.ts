let id:number =parseInt(window.localStorage.getItem('_idMax')||'0')||0
///因为可能是null，所以有||作为保底第一个保底是字符串，第二个保底是有一个数字0
function createId(){
    id++
    return id;
}
export default createId;
