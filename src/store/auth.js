import firebase from 'firebase/app';

export default {
    actions: {
        async login({dispatch, commit}, {email, password})
        {
            try
            {
                await firebase.auth().signInWithEmailAndPassword(email, password);
            } catch (err)
            {
                console.log(err.message);
                throw err;
            }
        },
        async logout({commit})
        {
            await firebase.auth().signOut();
            commit('clearInfo');
        },
        async signUp({dispatch, commit}, {email, password, name})
        {
            try
            {
                await firebase.auth().createUserWithEmailAndPassword(email, password);

                const uid = await dispatch('getUid');

                const db = firebase.firestore();
                await db.collection('users').doc(`${uid}`).set({name});
            } catch (err)
            {
                console.log(err.message);
                throw err;
            }
        },
        getUid()
        {
            const user = firebase.auth().currentUser;
            return user ? user.uid : null;
        }
    }
};
