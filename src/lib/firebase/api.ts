import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  addDoc,
  updateDoc,
  deleteDoc,
  DocumentData,
} from 'firebase/firestore';
import { db } from './client';

// User Profiles
export const getUserProfile = async (userId: string) => {
  const docRef = doc(db, 'user_profiles', userId);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : null;
};

// Tradeshows
export const getTradeshows = async () => {
  const querySnapshot = await getDocs(collection(db, 'tradeshows'));
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const getTradeshow = async (id: string) => {
  const docRef = doc(db, 'tradeshows', id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
};

// Publications
export const getPublications = async () => {
  const querySnapshot = await getDocs(collection(db, 'publications'));
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const getPublication = async (id: string) => {
  const docRef = doc(db, 'publications', id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
};

// Communities
export const getCommunities = async () => {
  const querySnapshot = await getDocs(collection(db, 'communities'));
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const getCommunity = async (id: string) => {
  const docRef = doc(db, 'communities', id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
};

// Organizations
export const getOrganizations = async () => {
  const querySnapshot = await getDocs(collection(db, 'organizations'));
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const getOrganization = async (id: string) => {
  const docRef = doc(db, 'organizations', id);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
};

// User Tracking
export const getUserTracking = async (userId: string) => {
  const q = query(
    collection(db, 'user_tracking'),
    where('user_id', '==', userId)
  );
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const addUserTracking = async (data: {
  user_id: string;
  entity_type: 'tradeshow' | 'publication' | 'community' | 'organization';
  entity_id: string;
}) => {
  return await addDoc(collection(db, 'user_tracking'), {
    ...data,
    created_at: new Date().toISOString()
  });
};

export const removeUserTracking = async (trackingId: string) => {
  await deleteDoc(doc(db, 'user_tracking', trackingId));
}; 