import React from 'react'
import firebaseApp from './Firebase';
import firebase from "firebase/app";
import "firebase/firestore";

const db = firebase.firestore(firebaseApp)

export const handleSellerList = async (status_type) => {
    const final_result = []

    await db
    .collection("users")
    .where("role", "==", "seller")
    .where("status", "==", status_type)
    .get()
    .then((response) => {
      response.forEach((doc) => {
        const seller_item = doc.data();
        seller_item.id = doc.id;
        final_result.push(seller_item);
      })
    })
    .catch((response) => {
      console.log('====================================');
      console.log("Error while gettig seller list by status equals to " );
      console.log('====================================');
    })
    .finally(() => {
      alert(final_result.length)
    })
}


