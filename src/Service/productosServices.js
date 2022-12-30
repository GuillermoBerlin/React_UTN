
import firebase from "../Config/firebase"

export async function getAllProductos(buscar){
    const querySnapshot = await firebase.db.collection("productos")
    .get()
    return querySnapshot.docs
}

export async function getByIdProductos(id){
    return await firebase.db.doc("productos/"+id).get()
}

export async function update(id, data){
    return await firebase.db.doc("productos/"+id).set(data)
}
