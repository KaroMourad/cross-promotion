import firebase from "firebase/app";

export default {
    actions: {
        async fetchCampaigns({dispatch})
        {
            try
            {
                const uid = await dispatch('getUid');
                const db = firebase.firestore();

                const querySnapshot = await db.collection('users').doc(`${uid}`).collection('campaigns').get();

                const campaignsData = [];
                querySnapshot.forEach(function (doc)
                {
                    campaignsData.push({...doc.data(), id: doc.id});
                });
                const sortedCampaignsData = campaignsData.sort((a, b) => b.created_at - a.created_at);
                return [...sortedCampaignsData];
            } catch (e)
            {
                console.log("err", e);
                throw e;
            }
        },
        async createCampaign({dispatch}, objToCreate)
        {
            try
            {
                const uid = await dispatch('getUid');
                const db = firebase.firestore();
                const docRef = await db.collection('users').doc(`${uid}`).collection('campaigns').add({
                    ...objToCreate,
                    created_at: Date.now()
                });
                const campaign = await docRef.get();
                const data = campaign.data();

                return {
                    title: data.title,
                    imgData: data.imgData,
                    suggestion: data.suggestion,
                    site: data?.site,
                    id: docRef.id
                };
            } catch (e)
            {
                console.log("err", e);
                throw e;
            }
        },
        async removeCampaign({dispatch}, id)
        {
            try
            {
                const uid = await dispatch('getUid');
                const db = firebase.firestore();

                await db.collection('users').doc(`${uid}`).collection('campaigns').doc(id).delete();
                console.log("removed")
            } catch (e)
            {
                console.log("err", e);
                throw e;
            }
        },
    }
}
