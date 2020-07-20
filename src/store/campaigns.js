// import firebase from "firebase/app";
//
// export default {
//     actions: {
//         async fetchCampaigns({dispatch})
//         {
//             try
//             {
//                 const uid = await dispatch('getUid');
//                 const db = firebase.firestore();
//
//                 const campaigns = await db.collection('users').doc(`${uid}`).collection('campaigns').get();
//                 const campaignsData = campaigns.data();
//                 console.log("campaignsData", campaignsData)
//             } catch (e)
//             {
//                 console.log("err", e);
//                 throw e;
//             }
//         },
//         async createCampaign({dispatch})
//         {
//             try
//             {
//                 const uid = await dispatch('getUid');
//                 const db = firebase.firestore();
//
//                 await db.collection('users').doc(`${uid}`).collection('campaigns').set();
//             } catch (e)
//             {
//                 console.log("err", e);
//                 throw e;
//             }
//         }
//     }
// }
