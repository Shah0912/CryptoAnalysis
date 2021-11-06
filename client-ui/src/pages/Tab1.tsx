import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonItemDivider, IonLabel, IonPage, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { useState } from 'react';
import axios from 'axios';

import {SERVER_ROUTES_URI} from '../constants';

const Tab1: React.FC = () => {

  const [plainText, setPlainText] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [encryptionKey, setEncryptionKey] = useState(0);

  const [cipherText, setCipherText] = useState("");
  const [decrpytedText, setDecryptedText] = useState("");
  const [decryptionKey, setDecryptionKey] = useState(0);


  async function handleEncryption() {
    try {
      // setEncryptedText('Handle function works');
        const response = await axios.get(SERVER_ROUTES_URI + "encrypt", {params: {'plaintext': plainText, 'key': encryptionKey}});
        console.log(response);
        setEncryptedText(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDecryption() {
    try {
      // setDecryptedText('Handle function ...');
        const response = await axios.get(SERVER_ROUTES_URI + "decrypt", {params: {'ciphertext': cipherText, 'key': decryptionKey}});
        console.log(response);
        setDecryptedText(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Encrpyt/ Decrypt</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItemDivider>Encryption</IonItemDivider>
        <IonItem>
          <IonLabel position="stacked">Plaintext</IonLabel>
          <IonTextarea autoGrow={true} value={plainText} onIonChange={e=>setPlainText(e.detail.value!)} ></IonTextarea>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Key</IonLabel>
          <IonInput type="number" min="0" max="26" inputmode="numeric" value={encryptionKey} onIonChange={e=>setEncryptionKey(parseInt(e.detail.value!))}></IonInput>
        </IonItem>
        <IonButton onClick={()=>{handleEncryption();}}>Encrypt</IonButton>
        <IonItem>
          <IonLabel position="stacked">CipherText</IonLabel>
          <IonTextarea autoGrow={true} value={encryptedText} readonly></IonTextarea>
        </IonItem>
        

        <IonItemDivider>Decryption</IonItemDivider>
        <IonItem>
          <IonLabel position="stacked">Cipher Text</IonLabel>
          <IonTextarea autoGrow={true} value={cipherText} onIonChange={e=>setCipherText(e.detail.value!)}></IonTextarea>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Key</IonLabel>
          <IonInput type="number" min="0" max="26" inputmode="numeric" value={decryptionKey} onIonChange={e=>setDecryptionKey(parseInt(e.detail.value!))}></IonInput>
        </IonItem>
        <IonButton onClick={()=>{handleDecryption();}}>Decrypt</IonButton>
        <IonItem>
          <IonLabel position="stacked">Decrypted Text</IonLabel>
          <IonTextarea autoGrow={true} value={decrpytedText} readonly></IonTextarea>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
