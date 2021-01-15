export default class PedUtil {
    write(objIn) {
        if (!objIn) {
            throw 'ObjIn is not defined.';
        }
        return objIn = Object.keys(objIn).map((key)=>({
                key,
                value: objIn !== null ? objIn[key] : null
            })
        ).filter((item)=>item.key && item.value
        );
    }
    read(listObjOut) {
        let objReceived = {
        };
        for(const index in listObjOut){
            let item = listObjOut[index];
            objReceived[item.key] = item.value;
        }
        return objReceived;
    }
};
