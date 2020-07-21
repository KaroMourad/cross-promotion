import firebase from "firebase/app";

export default {
    state: {
        info: {}
    },
    mutations: {
        setInfo(state, info)
        {
            state.info = info;
        },
        clearInfo(state)
        {
            state.info = {};
        }
    },
    actions: {
        async getUserInfo({dispatch, commit})
        {
            try
            {
                const uid = await dispatch('getUid');
                const db = firebase.firestore();

                if (uid)
                {
                    const info = (await db.collection('users').doc(`${uid}`).get()).data();
                    commit('setInfo', info);
                }
            } catch (e)
            {
                console.log("err", e);
                throw e;
            }
        }
    },
    getters: {
        info: state => state.info
    }
}
