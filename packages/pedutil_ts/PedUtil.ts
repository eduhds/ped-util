interface ObjIN {
	[index: string]: any;
}

interface ObjOUTItem {
	key: string;
	value: any;
}

export default class PedUtil {
	write(objIn: ObjIN): Array<ObjOUTItem> {
		if (!objIn) {
			throw 'ObjIn is not defined.';
		}

		return (objIn = Object.keys(objIn)
			.map((key: string) => ({
				key,
				value: objIn !== null ? objIn[key] : null
			}))
			.filter((item: ObjOUTItem) => item.key && item.value));
	}

	read(listObjOut: Array<ObjOUTItem>): ObjIN {
		let objReceived: ObjIN = {};

		for (const index in listObjOut) {
			let item = listObjOut[index];
			objReceived[item.key] = item.value;
		}

		return objReceived;
	}
}
